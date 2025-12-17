#!/bin/bash
set -e

cd /var/www/dominikhein.de
git pull origin main
npm install
npm run build