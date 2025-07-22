# ==============================================================================
# FILE: /rent-anything-platform/backend/app/models/user.py
# ==============================================================================
from sqlalchemy import Column, Integer, String, Boolean
from sqlalchemy.orm import relationship

from app.db.base_class import Base

class User(Base):
    id = Column(Integer, primary_key=True, index=True)
    full_name = Column(String, index=True)
    email = Column(String, unique=True, index=True, nullable=False)
    hashed_password = Column(String, nullable=False)
    is_active = Column(Boolean(), default=True)
    
    items = relationship("Item", back_populates="owner")
    bookings = relationship("Booking", back_populates="booker")
    reviews = relationship("Review", back_populates="reviewer")