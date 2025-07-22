# RentHub


# FILE: RentHub/README.md

# Rent Anything Rent Anytime

This is a full-stack e-commerce platform for renting various items, similar to Turo. It is built with a modern tech stack designed for scalability and maintainability.

## Tech Stack

- **Frontend:** React, Redux Toolkit, Tailwind CSS
- **Backend:** Python, FastAPI, SQLAlchemy
- **Database:** PostgreSQL
- **Authentication:** JWT (JSON Web Tokens)
- **Deployment:** Docker, Docker Compose, Nginx

## Project Structure

```
rent-anything-platform/
├── backend/        # FastAPI application
├── frontend/       # React application
├── .env.dev        # Development environment variables
├── .env.prod       # Production environment variables
├── docker-compose.yml
└── docker-compose.prod.yml
```

## How to Run in Development

1.  **Prerequisites:**
    - Docker
    - Docker Compose

2.  **Clone the repository:**
    ```bash
    git clone <your-repo-url>
    cd rent-anything-platform
    ```

3.  **Build and run the services:**
    ```bash
    docker-compose up --build
    ```

4.  **Access the services:**
    - **Frontend:** [http://localhost:3000](http://localhost:3000)
    - **Backend API Docs:** [http://localhost:8000/docs](http://localhost:8000/docs)

5.  **Run database migrations:**
    After the containers are up, run the following command in a new terminal to apply the initial database schema.
    ```bash
    docker-compose exec backend alembic upgrade head
    ```

## How to Run in Production

1.  **Prerequisites:**
    - Docker
    - Docker Compose

2.  **Update Production Environment Variables:**
    - Edit `.env.prod` with your production secrets, database credentials, and domain name.

3.  **Build and run the services in detached mode:**
    ```bash
    docker-compose -f docker-compose.prod.yml up --build -d
    ```

This will build optimized production images and run the application stack, including an Nginx reverse proxy.

