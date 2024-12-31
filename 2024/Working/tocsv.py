import re
import json
import pandas as pd

# Define the input file path
input_file = 'puzzles.txt'

# Define the output CSV file path
output_file = 'puzzles.csv'

# Load the data from the input file
with open(input_file, 'r') as file:
    content = file.read()

# Extract the JSON-like data from the file
json_data = content.split('window.puzzles = ')[1].strip()
json_data = json_data.rstrip(';')

# Remove inline comments (//) and extra spaces
json_data = re.sub(r'//.*', '', json_data)  # Remove inline comments
json_data = re.sub(r'\s+', ' ', json_data)  # Replace multiple spaces with a single space

# Fix JSON format
json_data = re.sub(r"'", '"', json_data)  # Replace single quotes with double quotes
json_data = re.sub(r'(\w+):', r'"\1":', json_data)  # Quote keys
json_data = re.sub(r',\s*}', '}', json_data)  # Remove trailing commas before closing braces
json_data = re.sub(r',\s*]', ']', json_data)  # Remove trailing commas before closing brackets

# Attempt to parse the cleaned JSON
try:
    puzzles = json.loads(json_data)
except json.JSONDecodeError as e:
    print("Error decoding JSON:", e)
    print("First 500 characters of cleaned JSON for debugging:")
    print(json_data[:500])
    exit()

# Convert the JSON data to a Pandas DataFrame
df = pd.DataFrame(puzzles)

# Save the DataFrame to a CSV file
df.to_csv(output_file, index=False)

print(f"CSV file has been created: {output_file}")
