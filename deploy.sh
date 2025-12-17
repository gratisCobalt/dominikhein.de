#!/bin/bash
set -e

cd /var/www/dominikhein.de
git pull origin master
npm install
npm run build