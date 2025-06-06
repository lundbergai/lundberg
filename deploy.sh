#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${BLUE}🚀 Starting deployment for lundberg.ai...${NC}"

# Exit on any error
set -e

# Get the directory where the script is located (your repo root)
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
cd "$SCRIPT_DIR"

echo -e "${BLUE}📦 Installing dependencies...${NC}"
npm install --legacy-peer-deps

echo -e "${BLUE}🔨 Building project...${NC}"
npm run build

echo -e "${BLUE}📂 Deploying to web directory...${NC}"
# Remove old files
sudo rm -rf /var/www/lundberg.ai/*

# Copy new build
sudo cp -r dist/* /var/www/lundberg.ai/

# Set proper ownership and permissions
sudo chown -R www-data:www-data /var/www/lundberg.ai/
sudo chmod -R 755 /var/www/lundberg.ai/

echo -e "${BLUE}🔄 Reloading nginx...${NC}"
sudo systemctl reload nginx

echo -e "${GREEN}✅ Deployment complete!${NC}"
echo -e "${GREEN}🌐 Site available at: http://lundberg.ai${NC}"