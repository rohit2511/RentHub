# ==============================================================================
# FILE: /rent-anything-platform/backend/app/models/review.py
# ==============================================================================
# Placeholder for future use.
from sqlalchemy import Column, Integer, String, ForeignKey, Text
from sqlalchemy.orm import relationship
from app.db.base_class import Base

class Review(Base):
    id = Column(Integer, primary_key=True, index=True)
    rating = Column(Integer, nullable=False) # 1 to 5
    comment = Column(Text)
    
    item_id = Column(Integer, ForeignKey("items.id"))
    reviewer_id = Column(Integer, ForeignKey("users.id"))
    
    item = relationship("Item")
    reviewer = relationship("User", back_populates="reviews")