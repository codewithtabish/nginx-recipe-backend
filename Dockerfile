# === Stage 1: Build ===
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies (including dev)
COPY package*.json ./
RUN npm ci

# Copy source code and build
COPY . .
RUN npm run build

# === Stage 2: Production ===
FROM node:20-alpine AS runner

WORKDIR /app

# Only install production deps
COPY package*.json ./
RUN npm ci --omit=dev --ignore-scripts

# Copy only compiled output (no source, no dev deps)
COPY --from=builder /app/dist ./dist

# Non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

EXPOSE 3000
CMD ["node", "dist/index.js"]
