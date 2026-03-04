#!/bin/bash
# SSL certificate initialization script for santevacare.com
# Run this once on the VPS after the first deploy

set -e

DOMAIN="santevacare.com"
EMAIL="${1:?Usage: ./init-ssl.sh your@email.com}"

echo "==> Step 1: Using initial nginx config (HTTP only)..."
cp nginx/nginx.conf nginx/nginx.conf.backup
cp nginx/nginx.conf.initial nginx/nginx.conf

echo "==> Step 2: Starting services..."
docker compose up -d --build

echo "==> Step 3: Waiting for services to be ready..."
sleep 10

echo "==> Step 4: Requesting SSL certificate..."
docker compose run --rm certbot certonly \
    --webroot \
    --webroot-path=/var/www/certbot \
    --email "$EMAIL" \
    --agree-tos \
    --no-eff-email \
    -d "$DOMAIN" \
    -d "www.$DOMAIN"

echo "==> Step 5: Restoring full nginx config (HTTPS)..."
cp nginx/nginx.conf.backup nginx/nginx.conf
rm nginx/nginx.conf.backup

echo "==> Step 6: Restarting nginx with SSL..."
docker compose restart nginx

echo "==> Done! https://$DOMAIN should now be accessible."
echo ""
echo "==> To auto-renew, add this cron job:"
echo "    0 3 * * * cd $(pwd) && docker compose run --rm certbot renew && docker compose restart nginx"
