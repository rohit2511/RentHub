# backend/config.py
class Config:
    """
    Configuration class for the Flask application.
    Stores sensitive data and application-wide settings.
    """
    # Flask app secret key. IMPORTANT: Use a strong, randomly generated key
    # and load from environment variables in production.
    SECRET_KEY = 'your_super_secret_key_here_replace_me_in_prod'
    
    # Example: Database URI (uncomment and configure for a real database setup)
    # SQLALCHEMY_DATABASE_URI = 'sqlite:///site.db' # Example for SQLite
    # SQLALCHEMY_TRACK_MODIFICATIONS = False # Suppresses a warning