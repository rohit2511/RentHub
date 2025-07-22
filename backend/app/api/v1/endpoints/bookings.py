# ==============================================================================
# FILE: /rent-anything-platform/backend/app/api/v1/endpoints/bookings.py
# ==============================================================================
from typing import List
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app import models, schemas, crud
from app.api import deps

router = APIRouter()

@router.post("/", response_model=schemas.Booking, status_code=status.HTTP_201_CREATED)
def create_booking(
    *,
    db: Session = Depends(deps.get_db),
    booking_in: schemas.BookingCreate,
    current_user: models.User = Depends(deps.get_current_active_user)
):
    """
    Create a new booking for an item.
    """
    item = crud.item.get(db, id=booking_in.item_id)
    if not item:
        raise HTTPException(status_code=404, detail="Item not found")
    
    if item.owner_id == current_user.id:
        raise HTTPException(status_code=400, detail="Cannot book your own item")

    # Here you would add more complex logic, e.g., checking for date availability
    
    booking = crud.booking.create_with_booker(db=db, obj_in=booking_in, booker_id=current_user.id)
    return booking

@router.get("/my-bookings", response_model=List[schemas.Booking])
def get_my_bookings(
    db: Session = Depends(deps.get_db),
    current_user: models.User = Depends(deps.get_current_active_user)
):
    """
    Retrieve bookings made by the current user.
    """
    bookings = crud.booking.get_multi_by_booker(db, booker_id=current_user.id)
    return bookings
