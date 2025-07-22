# backend/app.py
from flask import Flask, jsonify
from flask_cors import CORS
from config import Config
from routes.products import products_bp

def create_app():
    """
    Creates and configures the Flask application.
    Initializes CORS and registers API blueprints.
    """
    app = Flask(__name__)
    app.config.from_object(Config)

    # Enable CORS for all origins, allowing your React app to connect.
    # In a production environment, restrict this to specific frontend domains
    # (e.g., CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000"}})).
    CORS(app)

    # Register blueprints for API routes
    app.register_blueprint(products_bp, url_prefix='/api')

    @app.route('/')
    def index():
        """
        Root endpoint for the API.
        """
        return jsonify({"message": "Welcome to the RentAnything Backend API!"})

    return app

if __name__ == '__main__':
    # Run the Flask application in debug mode on port 5000.
    # debug=True enables reloader and debugger, suitable for development.
    app = create_app()
    app.run(debug=True, port=5000)







