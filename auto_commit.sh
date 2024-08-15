#!/bin/bash

# Navigate to your repository directory
cd "/Users/Stephen/Documents/SB + Freelance/custom-code"

# Add all changes
git add .

# Commit with a message containing the date and time
git commit -m "Auto-commit on $(date)"

# Push to the main branch
git push origin main

