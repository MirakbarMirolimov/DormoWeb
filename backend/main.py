from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
import uvicorn
import os
from datetime import datetime
from pydantic import BaseModel
from typing import Optional

app = FastAPI(
    title="Dormo API",
    description="Backend API for Dormo student marketplace app",
    version="1.0.0"
)

# Configure CORS
allowed_origins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "https://dormo-web.vercel.app",  # Add your Vercel domain here
    "https://dormoweb.vercel.app",   # Alternative domain
]

# Add environment variable for production CORS
cors_origins = os.getenv("CORS_ORIGINS", "").split(",") if os.getenv("CORS_ORIGINS") else []
allowed_origins.extend(cors_origins)

app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Pydantic models
class ContactMessage(BaseModel):
    name: str
    email: str
    message: str

class HealthCheck(BaseModel):
    status: str
    timestamp: datetime
    service: str

@app.get("/")
async def root():
    """Root endpoint"""
    return {"message": "Welcome to Dormo API", "status": "running"}

@app.get("/health", response_model=HealthCheck)
async def health_check():
    """Health check endpoint"""
    return HealthCheck(
        status="healthy",
        timestamp=datetime.now(),
        service="dormo-api"
    )

@app.post("/contact")
async def submit_contact(message: ContactMessage):
    """Handle contact form submissions"""
    # In a real app, you would save this to a database or send an email
    return {
        "message": "Thank you for your message! We'll get back to you soon.",
        "status": "success",
        "received_at": datetime.now()
    }

@app.get("/app-info")
async def get_app_info():
    """Get app information"""
    return {
        "app_name": "Dormo",
        "version": "1.0.0",
        "description": "The exclusive student marketplace for CCBC students",
        "features": [
            "Buy & sell items",
            "Student community",
            "Secure messaging",
            "Great deals"
        ],
        "platforms": ["iOS", "Android"],
        "status": "coming_soon"
    }

if __name__ == "__main__":
    port = int(os.getenv("PORT", 8000))
    uvicorn.run("main:app", host="0.0.0.0", port=port, reload=False)
