#!/bin/bash
echo "Installing Python dependencies..."
pip install --upgrade pip
pip install -r requirements.txt
echo "Dependencies installed successfully!"
python -c "import uvicorn; print('uvicorn installed successfully')"
