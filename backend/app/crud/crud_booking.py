# ==============================================================================
# FILE: /rent-anything-platform/backend/app/crud/crud_booking.py
# ==============================================================================
from typing import List
from sqlalchemy.orm import Session

from app.crud.base import CRUDBase
from app.models.booking import Booking
from app.models.item import Item
from app.schemas.booking import BookingCreate

class CRUDBooking(CRUDBase[Booking, BookingCreate, BookingCreate]):
    def create_with_booker(
        self, db: Session, *, obj_in: BookingCreate, booker_id: int
    ) -> Booking:
        item = db.query(Item).filter(Item.id == obj_in.item_id).first()
        if not item:
            return None
        
        days = (obj_in.end_date - obj_in.start_date).days
        total_price = days * item.price_per_day

        db_obj = Booking(
            **obj_in.dict(),
            booker_id=booker_id,
            total_price=total_price,
            status="pending"
        )
        db.add(db_obj)
        db.commit()
        db.refresh(db_obj)
        return db_obj

    def get_multi_by_booker(
        self, db: Session, *, booker_id: int, skip: int = 0, limit: int = 100
    ) -> List[Booking]:
        return (
            db.query(self.model)
            .filter(Booking.booker_id == booker_id)
            .offset(skip)
            .limit(limit)
            .all()
        )

booking = CRUDBooking(Booking)
