# Stage 1: Build the application
FROM node:22.11.0-alpine AS builder

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js application for production
RUN npm run build

# Stage 2: Use distroless image for production
FROM gcr.io/distroless/nodejs22-debian12

# Set the working directory in the distroless container
WORKDIR /app

# Copy built application and node_modules from builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Expose the port your app will run on
EXPOSE 3000

# Start the application
CMD ["node_modules/next/dist/bin/next", "start"]
