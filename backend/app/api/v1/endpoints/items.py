# ==============================================================================
# FILE: /rent-anything-platform/backend/app/api/v1/endpoints/items.py
# ==============================================================================
from typing import List
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app import models, schemas, crud
from app.api import deps

router = APIRouter()

@router.get("/", response_model=List[schemas.Item])
def read_items(
    db: Session = Depends(deps.get_db),
    skip: int = 0,
    limit: int = 100,
):
    """
    Retrieve items.
    """
    items = crud.item.get_multi(db, skip=skip, limit=limit)
    return items

@router.post("/", response_model=schemas.Item, status_code=status.HTTP_201_CREATED)
def create_item(
    *,
    db: Session = Depends(deps.get_db),
    item_in: schemas.ItemCreate,
    current_user: models.User = Depends(deps.get_current_active_user)
):
    """
    Create new item.
    """
    item = crud.item.create_with_owner(db=db, obj_in=item_in, owner_id=current_user.id)
    return item

@router.get("/{item_id}", response_model=schemas.Item)
def read_item_by_id(
    item_id: int,
    db: Session = Depends(deps.get_db),
):
    """
    Get an item by ID.
    """
    item = crud.item.get(db, id=item_id)
    if not item:
        raise HTTPException(status_code=404, detail="Item not found")
    return item
