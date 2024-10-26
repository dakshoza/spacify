import pandas as pd
from datetime import datetime, timedelta
import random
import numpy as np

def generate_sales_data(start_date, num_days, output_file):
    # Date range
    dates = [start_date + timedelta(days=i) for i in range(num_days)]
    
    # Product base volumes (Product 1 sells most, Product 4 least)
    product_base_sales = {
        1: 200,  # High-volume product
        2: 150,  # Medium-high volume
        3: 100,  # Medium-low volume
        4: 75    # Low volume
    }
    
    # Warehouse characteristics
    warehouse_factors = {
        1: 1.2,    # Warehouse 1 has 20% higher volume
        2: 0.8     # Warehouse 2 has 20% lower volume
    }
    
    data = []
    
    for date in dates:
        # Get day of week (0 = Monday, 6 = Sunday)
        day_of_week = date.weekday()
        
        # Monthly pattern (peaks mid-month)
        day_of_month = date.day
        monthly_factor = 1 + 0.2 * np.sin(day_of_month * np.pi / 30)
        
        # Seasonal pattern (peaks in December, low in January/February)
        month = date.month
        seasonal_factor = 1 + 0.3 * np.sin((month - 1) * np.pi / 6)
        
        # Holiday effects
        holiday_factor = 1.0
        # Black Friday (assume it's November 24th for simplicity)
        if month == 11 and day_of_month == 24:
            holiday_factor = 2.5
        # Christmas season
        elif month == 12 and day_of_month >= 15:
            holiday_factor = 1.8
        # New Year's
        elif month == 1 and day_of_month <= 7:
            holiday_factor = 0.7
        
        # Weekend effect
        weekend_factor = 1.3 if day_of_week >= 5 else 1.0
        
        for warehouse_id in [1, 2]:
            for product_id in [1, 2, 3, 4]:
                # Base sales for this product
                base_sales = product_base_sales[product_id]
                
                # Calculate final sales with all factors
                sales = int(base_sales * 
                          warehouse_factors[warehouse_id] * 
                          monthly_factor * 
                          seasonal_factor * 
                          holiday_factor * 
                          weekend_factor * 
                          random.uniform(0.8, 1.2))  # Random variation
                
                # Add some randomness to prevent too obvious patterns
                sales = max(20, min(500, sales))  # Keep within reasonable bounds
                
                data.append([date.strftime("%Y-%m-%d"), warehouse_id, product_id, sales])
    
    df = pd.DataFrame(data, columns=["Date", "Warehouse_ID", "Product_ID", "Sales"])
    df.to_csv(output_file, index=False)
    print(f"Data successfully saved to {output_file}")

# Parameters
start_date = datetime.strptime("2023-01-01", "%Y-%m-%d")  # Starting from January for full year patterns
num_days = 365  # Full year of data
output_file = "fake_data.csv"

# Generate data
generate_sales_data(start_date, num_days, output_file)