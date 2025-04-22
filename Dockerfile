
# --- Builder Stage ---
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci --omit=dev

COPY . .
RUN npm run build

# --- Production Image ---
FROM nginx:alpine

# Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy built frontend
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom nginx config (assumed to be in project root)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Set file permissions for nginx user (run as non-root for security)
RUN chown -R nginx:nginx /usr/share/nginx/html

USER nginx

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s \
  CMD wget -q --spider http://localhost || exit 1

CMD ["nginx", "-g", "daemon off;"]
