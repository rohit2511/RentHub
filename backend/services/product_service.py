# backend/services/product_service.py
import json
from models import Product

# Path to the mock data file.
MOCK_PRODUCTS_FILE = 'backend/data/mock_products.json'

def load_mock_products():
    """
    Loads mock product data from the JSON file.
    """
    try:
        with open(MOCK_PRODUCTS_FILE, 'r') as f:
            products_data = json.load(f)
        # Convert raw dictionary data into Product objects
        return [Product(**data) for data in products_data]
    except FileNotFoundError:
        print(f"Error: Mock products file not found at {MOCK_PRODUCTS_FILE}")
        return []
    except json.JSONDecodeError:
        print(f"Error: Could not decode JSON from {MOCK_PRODUCTS_FILE}. Check file format.")
        return []

# Load data once when the service module is imported.
_products = load_mock_products()

def get_all_products():
    """
    Returns all loaded products.
    """
    return _products

def get_filtered_products(search_term, category):
    """
    Filters products based on a search term and/or category.
    Search is case-insensitive and checks both name and description.
    """
    filtered = []
    for product in _products:
        # Check if product name or description contains the search term (case-insensitive)
        matches_search = (search_term.lower() in product.name.lower() or
                          search_term.lower() in product.description.lower())
        
        # Check if the product's category matches the selected category, or if 'All' is selected
        matches_category = (category == 'All' or product.category == category)

        if matches_search and matches_category:
            filtered.append(product)
    return filtered