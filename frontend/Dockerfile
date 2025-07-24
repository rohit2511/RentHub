# ==============================================================================
# FILE: /rent-anything-platform/frontend/Dockerfile
# ==============================================================================
# ---- Base Stage ----
# This stage installs dependencies and is used for both dev and build
FROM node:18-slim as base
WORKDIR /app
COPY package*.json ./
# Explicitly install the native binary for the container's architecture first
RUN npm install --save-dev @rollup/rollup-linux-x64-gnu
RUN npm install

# ---- Development Stage ----
# In development, we use the node_modules from the base stage.
# Source code is mounted via docker-compose.
FROM base as development
CMD ["npm", "start"]

# ---- Build Stage ----
# This stage creates the static build artifacts for production.
# It copies the full source code to create the build.
FROM base as build
COPY . .
RUN DISABLE_ESLINT_PLUGIN=true npm run build