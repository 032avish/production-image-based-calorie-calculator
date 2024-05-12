import pandas as pd

# Read the CSV file into a pandas DataFrame
df = pd.read_excel('C:\\Users\\avish\\OneDrive\\Desktop\\test\\dataset_new.xlsx')

# Select columns you want to keep
selected_columns = ['FOOD_ITEMS', 'LINKS', 'Type','Protein','Carbohydrate','Calorie','Unit','Term']  # Replace with actual column names

# Create a new DataFrame with only the selected columns
selected_df = df[selected_columns]

# Convert the selected DataFrame to JSON
json_data = selected_df.to_json(orient='records')

# Write the JSON data to a file
with open('outputNew.json', 'w') as f:
    f.write(json_data)
