import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from datetime import datetime

# Read the data
df = pd.read_csv('./data/fake_data.csv')
df['Date'] = pd.to_datetime(df['Date'])

# Set up the plotting style correctly
sns.set_theme(style="whitegrid")  # This is the correct way to set seaborn style
plt.rcParams['figure.figsize'] = [20, 15]

# Create a figure with multiple subplots
fig = plt.figure()

# 1. Overall Daily Sales Trend
plt.subplot(3, 2, 1)
daily_sales = df.groupby('Date')['Sales'].sum().reset_index()
sns.lineplot(data=daily_sales, x='Date', y='Sales')
plt.title('Overall Daily Sales Trend')
plt.xticks(rotation=45)
plt.tight_layout()

# 2. Monthly Average Sales
plt.subplot(3, 2, 2)
df['Month'] = df['Date'].dt.strftime('%B')
monthly_sales = df.groupby('Month')['Sales'].mean()
# Reorder months chronologically
month_order = ['January', 'February', 'March', 'April', 'May', 'June', 
               'July', 'August', 'September', 'October', 'November', 'December']
monthly_sales = monthly_sales.reindex(month_order)
sns.barplot(x=monthly_sales.index, y=monthly_sales.values)
plt.title('Average Sales by Month')
plt.xticks(rotation=45)

# 3. Sales by Product
plt.subplot(3, 2, 3)
product_sales = df.groupby('Product_ID')['Sales'].mean().reset_index()
sns.barplot(data=product_sales, x='Product_ID', y='Sales')
plt.title('Average Sales by Product')
plt.xlabel('Product ID')

# 4. Sales by Warehouse
plt.subplot(3, 2, 4)
warehouse_sales = df.groupby('Warehouse_ID')['Sales'].mean().reset_index()
sns.barplot(data=warehouse_sales, x='Warehouse_ID', y='Sales')
plt.title('Average Sales by Warehouse')
plt.xlabel('Warehouse ID')

# 5. Day of Week Pattern
plt.subplot(3, 2, 5)
df['DayOfWeek'] = df['Date'].dt.strftime('%A')
day_order = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
dow_sales = df.groupby('DayOfWeek')['Sales'].mean()
dow_sales = dow_sales.reindex(day_order)
sns.barplot(x=dow_sales.index, y=dow_sales.values)
plt.title('Average Sales by Day of Week')
plt.xticks(rotation=45)

# 6. Product Sales by Warehouse
plt.subplot(3, 2, 6)
product_warehouse_sales = df.pivot_table(
    index='Product_ID', 
    columns='Warehouse_ID', 
    values='Sales', 
    aggfunc='mean'
).plot(kind='bar')
plt.title('Average Product Sales by Warehouse')
plt.xlabel('Product ID')
plt.legend(title='Warehouse ID')
plt.xticks(rotation=0)

plt.tight_layout()
plt.show()

# Create a heatmap of daily sales patterns
plt.figure(figsize=(15, 8))
df['DayOfMonth'] = df['Date'].dt.day
daily_patterns = df.pivot_table(
    index=df['Date'].dt.strftime('%B'),
    columns='DayOfMonth',
    values='Sales',
    aggfunc='mean'
)
# Reorder months chronologically
daily_patterns = daily_patterns.reindex(month_order)

sns.heatmap(daily_patterns, cmap='YlOrRd', center=daily_patterns.mean().mean())
plt.title('Sales Heatmap by Month and Day')
plt.xlabel('Day of Month')
plt.ylabel('Month')
plt.show()

# Create line plots for each product over time
plt.figure(figsize=(15, 8))
for product in df['Product_ID'].unique():
    product_data = df[df['Product_ID'] == product].groupby('Date')['Sales'].mean()
    sns.lineplot(data=product_data, label=f'Product {product}')

plt.title('Daily Sales Trend by Product')
plt.xlabel('Date')
plt.ylabel('Sales')
plt.legend()
plt.xticks(rotation=45)
plt.tight_layout()
plt.show()