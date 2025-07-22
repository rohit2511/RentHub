# backend/routes/products.py
from flask import Blueprint, request, jsonify
from services.product_service import get_all_products, get_filtered_products

# Create a Blueprint for product-related routes.
# Blueprints help organize routes in larger applications.
products_bp = Blueprint('products', __name__)

@products_bp.route('/products', methods=['GET'])
def list_products():
    """
    API endpoint to list all products or filtered products based on query parameters.
    Supports 'search' (keyword) and 'category' filtering.
    """
    search_term = request.args.get('search', '') # Get search term from query params
    category = request.args.get('category', 'All') # Get category from query params

    if search_term or category != 'All':
        # If search term or specific category is provided, return filtered products
        products = get_filtered_products(search_term, category)
    else:
        # Otherwise, return all products
        products = get_all_products()

    # Convert Product objects to dictionaries for JSON serialization
    products_data = [p.to_dict() for p in products]
    return jsonify(products_data)

# Example of a POST endpoint for adding products.
# This is a placeholder and not currently used by the provided frontend.
@products_bp.route('/products', methods=['POST'])
def add_product():
    """
    API endpoint to add a new product.
    (Currently a mock implementation; in a real app, it would save to a DB).
    """
    data = request.get_json() # Get JSON data from the request body
    # In a real application, you would validate this data and persist it to a database.
    # For now, we just echo it back as a mock creation confirmation.
    return jsonify({"message": "Product added successfully (mock)", "product": data}), 201 # 201 Created status