# Step 1: Build the React app
FROM node:18-alpine as build

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source files
COPY . .

# Build the app (adjust if not using Vite)
RUN npm run build

# Step 2: Serve using Nginx
FROM nginx:alpine

# Copy production build from step 1
COPY --from=build /app/build /usr/share/nginx/html

# Replace default nginx config with custom one
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
