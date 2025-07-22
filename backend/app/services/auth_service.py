# ==============================================================================
# FILE: /rent-anything-platform/backend/app/services/auth_service.py
# ==============================================================================
from sqlalchemy.orm import Session
from app import models, crud
from app.core.security import verify_password

def authenticate_user(db: Session, email: str, password: str) -> models.User | None:
    user = crud.user.get_by_email(db, email=email)
    if not user:
        return None
    if not verify_password(password, user.hashed_password):
        return None
    return user