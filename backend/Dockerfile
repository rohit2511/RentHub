# ==============================================================================
# FILE: /rent-anything-platform/backend/Dockerfile
# ==============================================================================
# ---- Base Stage ----
FROM python:3.9-slim as base

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# ---- Development/Build Stage ----
FROM base as development

COPY . .

# ---- Production Stage ----
FROM base as production

COPY ./app /app/app
#COPY ./alembic /app/alembic
COPY alembic.ini /app/alembic.ini
