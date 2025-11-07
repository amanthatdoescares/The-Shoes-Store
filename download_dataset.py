import kagglehub
import pandas as pd
import json

# Download latest version
path = kagglehub.dataset_download("thedevastator/nike-usa-products-prices-descriptions-and-custom")

print("Path to dataset files:", path)

# Assuming the dataset is a CSV file, load it
# The dataset name suggests it's Nike products, likely a CSV
import os
files = os.listdir(path)
print("Files in dataset:", files)

# Find the CSV file
csv_file = None
for file in files:
    if file.endswith('.csv'):
        csv_file = file
        break

if csv_file:
    df = pd.read_csv(os.path.join(path, csv_file))
    # Convert to JSON
    products = df.to_dict('records')
    # Save to backend/data/nike_products.json
    with open('backend/data/nike_products.json', 'w') as f:
        json.dump(products, f, indent=4)
    print("Dataset converted and saved to backend/data/nike_products.json")
else:
    print("No CSV file found in the dataset")
