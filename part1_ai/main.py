import pandas as pd
import numpy as np
from datetime import datetime, timedelta
from prophet import Prophet
import matplotlib.pyplot as plt
import holidays
import warnings
warnings.filterwarnings('ignore')

def prepare_data_for_prophet(df, warehouse_id, product_id):
    """Prepare data for Prophet model"""
    # Filter data for specific warehouse and product
    mask = (df['Warehouse_ID'] == warehouse_id) & (df['Product_ID'] == product_id)
    product_data = df[mask].copy()
    
    # Prophet requires columns named 'ds' and 'y'
    product_data = product_data.rename(columns={'Date': 'ds', 'Sales': 'y'})
    
    return product_data

def create_prophet_model(add_holidays=True):
    """Create and configure Prophet model"""
    # Create US holiday calendar
    us_holidays = holidays.US()
    
    # Custom holiday events
    custom_holidays = pd.DataFrame([
        {
            'holiday': 'BlackFriday',
            'ds': pd.Timestamp('2023-11-24'),
            'lower_window': -1,
            'upper_window': 3,
        },
        {
            'holiday': 'Christmas',
            'ds': pd.Timestamp('2023-12-25'),
            'lower_window': -10,
            'upper_window': -1,
        }
    ])
    
    # Initialize Prophet model with custom parameters
    model = Prophet(
        changepoint_prior_scale=0.05,  # Flexibility of trend changes
        seasonality_prior_scale=10,    # Flexibility of seasonality
        holidays_prior_scale=10,       # Flexibility of holiday effects
        daily_seasonality=True,        # Daily seasonality
        weekly_seasonality=True,       # Weekly seasonality
        yearly_seasonality=True,       # Yearly seasonality
        seasonality_mode='multiplicative'  # Multiplicative seasonality often works better for sales data
    )
    
    if add_holidays:
        model.add_country_holidays(country_name='US')
        model.add_regressor('is_weekend')
        
    return model

def forecast_demand(df, warehouse_id, product_id, forecast_periods=30):
    """Generate demand forecast using Prophet"""
    # Prepare data
    prophet_data = prepare_data_for_prophet(df, warehouse_id, product_id)
    
    # Add weekend feature
    prophet_data['is_weekend'] = prophet_data['ds'].dt.dayofweek.isin([5, 6]).astype(int)
    
    # Create and train model
    model = create_prophet_model()
    model.fit(prophet_data)
    
    # Create future dataframe
    future = model.make_future_dataframe(periods=forecast_periods)
    future['is_weekend'] = future['ds'].dt.dayofweek.isin([5, 6]).astype(int)
    
    # Make forecast
    forecast = model.predict(future)
    
    return forecast, model

def create_demand_forecasting_pipeline(df, forecast_periods=30):
    """Create forecasts for all products in all warehouses"""
    df['Date'] = pd.to_datetime(df['Date'])
    
    warehouses = df['Warehouse_ID'].unique()
    products = df['Product_ID'].unique()
    
    forecasts = {}
    models = {}
    
    for warehouse in warehouses:
        forecasts[warehouse] = {}
        models[warehouse] = {}
        for product in products:
            print(f"Forecasting for Warehouse {warehouse}, Product {product}")
            forecast, model = forecast_demand(df, warehouse, product, forecast_periods)
            forecasts[warehouse][product] = forecast
            models[warehouse][product] = model
            
    return forecasts, models

def format_forecasts(forecasts):
    """Format forecasts into a readable DataFrame"""
    all_forecasts = []
    
    for warehouse in forecasts:
        for product in forecasts[warehouse]:
            forecast_df = forecasts[warehouse][product].copy()
            
            # Add warehouse and product IDs
            forecast_df['Warehouse_ID'] = warehouse
            forecast_df['Product_ID'] = product
            
            all_forecasts.append(forecast_df)
    
    final_forecasts = pd.concat(all_forecasts, ignore_index=True)
    return final_forecasts

def plot_forecasts_grid(historical_df, forecasts, models):
    """Create a grid of line plots showing historical and forecasted values"""
    products = historical_df['Product_ID'].unique()
    warehouses = historical_df['Warehouse_ID'].unique()
    
    n_plots = len(products) * len(warehouses)
    n_cols = 2
    n_rows = (n_plots + n_cols - 1) // n_cols
    
    fig, axes = plt.subplots(n_rows, n_cols, figsize=(15, 5*n_rows))
    fig.suptitle('Historical and Forecasted Demand by Product and Warehouse', fontsize=16)
    
    axes = axes.flatten()
    
    plot_idx = 0
    for warehouse in warehouses:
        for product in products:
            ax = axes[plot_idx]
            
            # Get the forecast and model
            forecast = forecasts[warehouse][product]
            model = models[warehouse][product]
            
            # Plot the forecast using Prophet's built-in plotting
            model.plot(forecast, ax=ax)
            
            ax.set_title(f'Warehouse {warehouse} - Product {product}')
            ax.set_xlabel('Date')
            ax.set_ylabel('Demand')
            
            # Customize the plot
            ax.grid(True, alpha=0.3)
            plt.setp(ax.get_xticklabels(), rotation=45)
            
            plot_idx += 1
    
    # Remove empty subplots
    for idx in range(plot_idx, len(axes)):
        fig.delaxes(axes[idx])
    
    plt.tight_layout()
    plt.show()

def plot_components(models, forecasts, warehouses, products):
    """Plot the components of the Prophet forecast for each product/warehouse"""
    for warehouse in warehouses:
        for product in products:
            print(f"\nComponents for Warehouse {warehouse}, Product {product}")
            model = models[warehouse][product]
            
            # Get the forecast for this model
            forecast = forecasts[warehouse][product]
            
            # Create the components plot
            fig = model.plot_components(forecast)
            plt.show()

def main():
    # Read the data
    df = pd.read_csv('./data/fake_data.csv')
    df['Date'] = pd.to_datetime(df['Date'])
    
    # Get the last 335 days for historical data
    last_date = df['Date'].max()
    start_date = last_date - timedelta(days=335)
    historical_df = df[df['Date'] > start_date].copy()
    
    # Generate forecasts
    forecasts, models = create_demand_forecasting_pipeline(historical_df)
    
    # Create visualizations
    plot_forecasts_grid(historical_df, forecasts, models)
    
    # Plot components
    warehouses = historical_df['Warehouse_ID'].unique()
    products = historical_df['Product_ID'].unique()
    plot_components(models, forecasts, warehouses, products)  # Added forecasts parameter
    
    # Format and save forecasts
    forecast_df = format_forecasts(forecasts)
    forecast_df.to_csv('prophet_demand_forecasts.csv', index=False)
    print("Forecasts have been saved to 'prophet_demand_forecasts.csv'")
    
    return historical_df, forecast_df, models

if __name__ == "__main__":
    historical_df, forecast_df, models = main()