# ==============================================================================
# FILE: /rent-anything-platform/frontend/Dockerfile
# ==============================================================================
# ---- Base Stage ----
FROM node:18-alpine as base
WORKDIR /app
COPY package*.json ./
RUN npm install

# ---- Development Stage ----
# For development, we use the node server for hot-reloading
FROM base as development
COPY . .
# The command is provided by docker-compose
CMD ["npm", "start"]

# ---- Build Stage ----
# This stage creates the static build artifacts
FROM base as build
COPY . .
RUN npm run build

# ==============================================================================
# FILE: /rent-anything-platform/frontend/Dockerfile.prod
# ==============================================================================
# This Dockerfile is for creating a production-ready Nginx server
# to serve the static React files.

# ---- Build Stage ----
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# ---- Production Stage ----
FROM nginx:stable-alpine
# Copy the static assets from the build stage
COPY --from=build /app/build /usr/share/nginx/html
# Copy the custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

# ==============================================================================
# FILE: /rent-anything-platform/frontend/nginx.conf
# ==============================================================================
server {
    listen 80;
    server_name localhost;

    root /usr/share/nginx/html;
    index index.html index.htm;

    # Handle React Router
    location / {
        try_files $uri /index.html;
    }

    # Proxy API requests to the backend service
    location /api {
        proxy_pass http://backend:8000; # 'backend' is the service name in docker-compose
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
