# ==============================================================================
# FILE: /rent-anything-platform/backend/app/schemas/booking.py
# ==============================================================================
from pydantic import BaseModel
from datetime import date
from .item import Item
from .user import User

# Shared properties
class BookingBase(BaseModel):
    start_date: date
    end_date: date
    item_id: int

# Properties to receive on booking creation
class BookingCreate(BookingBase):
    pass

# Properties shared by models stored in DB
class BookingInDBBase(BookingBase):
    id: int
    total_price: int
    status: str
    booker_id: int
    item: Item
    booker: User

    class Config:
        orm_mode = True

# Properties to return to client
class Booking(BookingInDBBase):
    pass
