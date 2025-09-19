#!/bin/bash
echo "Fixing hamburger menu split issue..."
cd ~/navscan-project/frontend

# Backup current file
cp index.html index.html.backup.$(date +%Y%m%d_%H%M%S)

# Remove the problematic transition
sed -i "/\.container {/,/}/ {/transition/d}" index.html

echo "Fix applied. Restarting server..."
pkill -f "3001"
python -m http.server 3001 &
echo "Server restarted on port 3001"
