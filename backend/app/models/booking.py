# ==============================================================================
# FILE: /rent-anything-platform/backend/app/models/booking.py
# ==============================================================================
from sqlalchemy import Column, Integer, Date, ForeignKey, String
from sqlalchemy.orm import relationship

from app.db.base_class import Base

class Booking(Base):
    id = Column(Integer, primary_key=True, index=True)
    start_date = Column(Date, nullable=False)
    end_date = Column(Date, nullable=False)
    total_price = Column(Integer, nullable=False)
    status = Column(String, default="pending") # e.g., pending, confirmed, cancelled
    
    item_id = Column(Integer, ForeignKey("items.id"))
    booker_id = Column(Integer, ForeignKey("users.id"))
    
    item = relationship("Item", back_populates="bookings")
    booker = relationship("User", back_populates="bookings")