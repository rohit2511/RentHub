# ==============================================================================
# FILE: /rent-anything-platform/backend/app/models/category.py
# ==============================================================================
# Placeholder for future use.
# You would link this to items with a many-to-many relationship.
from sqlalchemy import Column, Integer, String
from app.db.base_class import Base

class Category(Base):
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, unique=True, index=True)
    description = Column(String)
