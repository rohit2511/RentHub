# ==============================================================================
# FILE: /rent-anything-platform/backend/app/schemas/item.py
# ==============================================================================
from pydantic import BaseModel
from .user import User

# Shared properties
class ItemBase(BaseModel):
    name: str
    description: str | None = None
    price_per_day: float

# Properties to receive on item creation
class ItemCreate(ItemBase):
    pass

# Properties to receive on item update
class ItemUpdate(ItemBase):
    pass

# Properties shared by models stored in DB
class ItemInDBBase(ItemBase):
    id: int
    owner_id: int
    owner: User

    class Config:
        orm_mode = True

# Properties to return to client
class Item(ItemInDBBase):
    pass