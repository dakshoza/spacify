import pandas as pd
import numpy as np
from datetime import datetime
import matplotlib.pyplot as plt
import xgboost as xgb
from sklearn.metrics import root_mean_squared_error, r2_score
from sklearn.model_selection import train_test_split
import holidays
import math

def load_data():
    # Create sample training data
    train_data = pd.read_csv('data/train.csv')
    
    test_data = pd.read_csv('data/test.csv')
    
    return train_data, test_data

def create_time_features(df):
    df = df.copy()
    df['date'] = pd.to_datetime(df['date'])
    
    # Basic time features
    df['year'] = df['date'].dt.year
    df['month'] = df['date'].dt.month
    df['day'] = df['date'].dt.day
    df['day_of_week'] = df['date'].dt.dayofweek
    df['quarter'] = df['date'].dt.quarter
    
    # Is weekend/holiday
    df['is_weekend'] = df['day_of_week'].isin([5, 6]).astype(int)
    us_holidays = holidays.US()
    df['is_holiday'] = df['date'].apply(lambda x: x in us_holidays).astype(int)
    
    # Month start/end
    df['is_month_start'] = df['date'].dt.is_month_start.astype(int)
    df['is_month_end'] = df['date'].dt.is_month_end.astype(int)
    
    # Cyclical encoding
    df['month_sin'] = np.sin(2 * np.pi * df['month']/12)
    df['month_cos'] = np.cos(2 * np.pi * df['month']/12)
    df['day_sin'] = np.sin(2 * np.pi * df['day_of_week']/7)
    df['day_cos'] = np.cos(2 * np.pi * df['day_of_week']/7)
    
    return df

def add_lag_features(df, train_sales=None):
    if 'sales' in df.columns:
        for lag in [1, 2, 3, 7, 14, 30]:
            df[f'sales_lag_{lag}'] = df['sales'].shift(lag)
            
        for window in [7, 14, 30]:
            df[f'sales_rolling_mean_{window}'] = df['sales'].rolling(
                window=window, min_periods=1).mean()
            df[f'sales_rolling_std_{window}'] = df['sales'].rolling(
                window=window, min_periods=1).std()
    elif train_sales is not None:
        last_train_values = train_sales[-30:].values
        for lag in [1, 2, 3, 7, 14, 30]:
            df[f'sales_lag_{lag}'] = last_train_values[-lag]
        
        for window in [7, 14, 30]:
            df[f'sales_rolling_mean_{window}'] = last_train_values[-window:].mean()
            df[f'sales_rolling_std_{window}'] = last_train_values[-window:].std()
    
    return df

def train_model(train_df):
    feature_cols = ['year', 'month', 'day', 'day_of_week', 'quarter',
                   'is_weekend', 'is_holiday', 'month_sin', 'month_cos',
                   'day_sin', 'day_cos', 'is_month_start', 'is_month_end']
    
    feature_cols.extend([col for col in train_df.columns if 'lag_' in col])
    feature_cols.extend([col for col in train_df.columns if 'rolling_' in col])
    
    # Remove rows with NaN values
    train_df = train_df.dropna()
    
    # Sort by date
    train_df = train_df.sort_values('date')
    
    # Split data chronologically
    # Use first 70% for training, next 15% for validation, last 15% for testing
    train_size = int(0.7 * len(train_df))
    val_size = int(0.15 * len(train_df))
    
    # Training data
    train_data = train_df.iloc[:train_size]
    X_train = train_data[feature_cols]
    y_train = train_data['sales']
    
    # Validation data
    val_data = train_df.iloc[train_size:train_size+val_size]
    X_val = val_data[feature_cols]
    y_val = val_data['sales']
    
    # Test data (from historical data)
    test_data = train_df.iloc[train_size+val_size:]
    X_test = test_data[feature_cols]
    y_test = test_data['sales']
    
    # Train model
    model = xgb.XGBRegressor(
        n_estimators=100,
        learning_rate=0.1,
        max_depth=5,
        subsample=0.8,
        colsample_bytree=0.8,
        random_state=42
    )
    
    # Train the model only on training data
    model.fit(X_train, y_train)
    
    # Make predictions on each set
    train_predictions = model.predict(X_train)
    val_predictions = model.predict(X_val)
    test_predictions = model.predict(X_test)
    
    # Calculate metrics for each set
    train_rmse = root_mean_squared_error(y_train, train_predictions)
    val_rmse = root_mean_squared_error(y_val, val_predictions)
    test_rmse = root_mean_squared_error(y_test, test_predictions)
    
    print("\nModel Performance Metrics:")
    print(f"Training RMSE: {train_rmse:.2f}")
    print(f"Validation RMSE: {val_rmse:.2f}")
    print(f"Test RMSE: {test_rmse:.2f}")
    
    # Store predictions in the original dataframe
    train_df['predictions'] = np.nan
    train_df.iloc[:train_size, train_df.columns.get_loc('predictions')] = train_predictions
    train_df.iloc[train_size:train_size+val_size, train_df.columns.get_loc('predictions')] = val_predictions
    train_df.iloc[train_size+val_size:, train_df.columns.get_loc('predictions')] = test_predictions
    
    return model, feature_cols, train_df

def plot_predictions(train_df, future_predictions, future_dates):
    # Convert dates to datetime
    future_dates = pd.to_datetime(future_dates)
    train_df['date'] = pd.to_datetime(train_df['date'])
    
    plt.figure(figsize=(15, 8))
    
    # Get the split points
    train_size = int(0.7 * len(train_df))
    val_size = int(0.15 * len(train_df))
    
    # Plot actual values
    plt.plot(train_df['date'], train_df['sales'], 
            label='Actual Sales', 
            color='black',
            alpha=0.5)
    
    # Plot training predictions
    plt.plot(train_df['date'][:train_size], 
            train_df['predictions'][:train_size],
            label='Training Predictions',
            color='blue',
            alpha=0.7)
    
    # Plot validation predictions
    plt.plot(train_df['date'][train_size:train_size+val_size],
            train_df['predictions'][train_size:train_size+val_size],
            label='Validation Predictions',
            color='green',
            alpha=0.7)
    
    # Plot test predictions
    plt.plot(train_df['date'][train_size+val_size:],
            train_df['predictions'][train_size+val_size:],
            label='Test Predictions',
            color='orange',
            alpha=0.7)
    
    # Plot future predictions
    plt.plot(future_dates, future_predictions,
            label='Future Predictions',
            color='red',
            linestyle='--',
            linewidth=2)
    
    # Add vertical lines to show the splits
    plt.axvline(x=train_df['date'].iloc[train_size], 
                color='gray', linestyle='--', alpha=0.5,
                label='Train/Validation Split')
    plt.axvline(x=train_df['date'].iloc[train_size+val_size], 
                color='gray', linestyle='--', alpha=0.5,
                label='Validation/Test Split')
    
    plt.title('Sales Prediction - Full View', fontsize=14, pad=20)
    plt.xlabel('Date', fontsize=12)
    plt.ylabel('Sales', fontsize=12)
    plt.grid(True, linestyle='--', alpha=0.7)
    plt.xticks(rotation=45)
    plt.legend(bbox_to_anchor=(1.05, 1), loc='upper left')
    plt.tight_layout()
    plt.show()

def main():
    try:
        # Load data
        print("Loading data...")
        train_data, test_data = load_data()
        
        # Process training data
        print("Processing training data...")
        train_processed = create_time_features(train_data)
        train_processed = add_lag_features(train_processed)
        
        # Train model and get predictions
        print("Training model...")
        model, feature_cols, train_df_with_predictions = train_model(train_processed)
        
        # Prepare future test data
        print("Preparing test data...")
        test_processed = create_time_features(test_data)
        test_processed = add_lag_features(test_processed, train_data['sales'])
        
        # Make future predictions
        print("Making predictions...")
        future_predictions = model.predict(test_processed[feature_cols])
        
        # Plot results
        print("Plotting results...")
        plot_predictions(train_df_with_predictions, future_predictions, test_data['date'])
        
        # Create submission
        submission = pd.DataFrame({
            'id': test_data['id'],
            'sales': future_predictions.round(2)
        })
        
        return submission
        
    except Exception as e:
        print(f"An error occurred: {str(e)}")
        return None
    

if __name__ == "__main__":
    submission = main()
    if submission is not None:
        print("\nPredicted Sales:")
        print(submission)