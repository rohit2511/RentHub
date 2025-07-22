# ==============================================================================
# FILE: /rent-anything-platform/backend/app/models/item.py
# ==============================================================================
from sqlalchemy import Column, Integer, String, Float, ForeignKey
from sqlalchemy.orm import relationship

from app.db.base_class import Base

class Item(Base):
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    description = Column(String)
    price_per_day = Column(Float, nullable=False)
    owner_id = Column(Integer, ForeignKey("users.id"))
    
    owner = relationship("User", back_populates="items")
    bookings = relationship("Booking", back_populates="item")