# --- Stage 1: Build the Next.js application ---
# We use a Node.js image to build the static files.
# The 'as builder' tag names this stage, so we can reference it later.
FROM node:20-alpine as builder
  
# Set the working directory inside the container.
WORKDIR /app
  
# Copy package.json and package-lock.json to install dependencies.
# We do this first to leverage Docker's caching, as these files change less often than the code.
COPY package.json package-lock.json ./
  
# Install dependencies. The 'ci' command is a more reliable version of 'install' for CI/CD environments.
RUN npm ci
  
# Copy the rest of the application code.
COPY . .
  
# Run the Next.js build command to generate the static files in the 'out' directory.
RUN npm run build
  
# --- Stage 2: Create a production-ready Nginx image ---
# Use a lightweight Nginx image to serve the static assets.
FROM nginx:alpine
  
# Copy the static files from the 'builder' stage into the Nginx default directory.
# The 'out' directory is where Next.js places the static build files.
COPY --from=builder /app/out /usr/share/nginx/html
  
# Expose port 80 to the host machine. This is the standard HTTP port Nginx listens on.
EXPOSE 80
  
# Command to start Nginx. 'daemon off;' is required for Nginx to run in the foreground inside the container.
CMD ["nginx", "-g", "daemon off;"]