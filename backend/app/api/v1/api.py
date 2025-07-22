# ==============================================================================
# FILE: /rent-anything-platform/backend/app/api/v1/api.py
# ==============================================================================
from fastapi import APIRouter

from app.api.v1.endpoints import auth, users, items, bookings

api_router = APIRouter()
api_router.include_router(auth.router, prefix="/auth", tags=["auth"])
api_router.include_router(users.router, prefix="/users", tags=["users"])
api_router.include_router(items.router, prefix="/items", tags=["items"])
api_router.include_router(bookings.router, prefix="/bookings", tags=["bookings"])
