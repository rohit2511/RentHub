# backend/models.py
# In a real application, this file would typically define SQLAlchemy models
# or other ORM models that map to your database tables.
# For this mock setup, it primarily defines the expected structure of a product
# for data consistency.

class Product:
    """
    Represents a rental product in the system.
    This class acts as a simple data structure for mock data.
    """
    def __init__(self, id, name, category, description, pricePerDay, imageUrl, location):
        self.id = id
        self.name = name
        self.category = category
        self.description = description
        self.pricePerDay = pricePerDay
        self.imageUrl = imageUrl
        self.location = location

    def to_dict(self):
        """
        Converts the Product object to a dictionary, suitable for JSON serialization.
        """
        return {
            "id": self.id,
            "name": self.name,
            "category": self.category,
            "description": self.description,
            "pricePerDay": self.pricePerDay,
            "imageUrl": self.imageUrl,
            "location": self.location
        }