from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
import uvicorn
import os
from datetime import datetime
from pydantic import BaseModel, EmailStr
from typing import Optional
import aiosmtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import logging
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = FastAPI(
    title="Dormo API",
    description="Backend API for Dormo student marketplace app",
    version="1.0.0"
)

# Configure CORS
allowed_origins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "http://localhost:5173",  # Vite development server
    "http://127.0.0.1:5173",  # Vite development server
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

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Email configuration
SMTP_HOST = os.getenv("SMTP_HOST", "smtp.gmail.com")
SMTP_PORT = int(os.getenv("SMTP_PORT", "587"))
SMTP_USER = os.getenv("SMTP_USER")
SMTP_PASSWORD = os.getenv("SMTP_PASSWORD")
SMTP_FROM_EMAIL = os.getenv("SMTP_FROM_EMAIL", "dormohelp@gmail.com")
SMTP_TO_EMAIL = os.getenv("SMTP_TO_EMAIL", "dormohelp@gmail.com")

# Pydantic models
class ContactMessage(BaseModel):
    name: str
    email: EmailStr
    message: str

class HealthCheck(BaseModel):
    status: str
    timestamp: datetime
    service: str

# Email sending function
async def send_email(subject: str, body: str, to_email: str = None):
    """Send email using SMTP"""
    if not SMTP_USER or not SMTP_PASSWORD:
        logger.error("SMTP credentials not configured")
        raise HTTPException(status_code=500, detail="Email service not configured")
    
    to_email = to_email or SMTP_TO_EMAIL
    
    # Create message
    message = MIMEMultipart()
    message["From"] = SMTP_FROM_EMAIL
    message["To"] = to_email
    message["Subject"] = subject
    
    # Add body to email
    message.attach(MIMEText(body, "html"))
    
    try:
        # Send email
        await aiosmtplib.send(
            message,
            hostname=SMTP_HOST,
            port=SMTP_PORT,
            start_tls=True,
            username=SMTP_USER,
            password=SMTP_PASSWORD,
        )
        logger.info(f"Email sent successfully to {to_email}")
        return True
    except Exception as e:
        logger.error(f"Failed to send email: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Failed to send email: {str(e)}")

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
async def submit_contact(contact_data: ContactMessage):
    """Handle contact form submissions"""
    try:
        # Log the contact form submission
        logger.info(f"Contact form submission from {contact_data.name} ({contact_data.email})")
        logger.info(f"Message: {contact_data.message}")
        
        # Send to Formspree
        formspree_url = "https://formspree.io/f/mblzryyv"
        
        # Prepare data for Formspree
        formspree_data = {
            "name": contact_data.name,
            "email": contact_data.email,
            "message": contact_data.message,
            "_subject": f"New Contact Form Message from {contact_data.name}",
            "_replyto": contact_data.email
        }
        
        try:
            import httpx
            async with httpx.AsyncClient() as client:
                response = await client.post(
                    formspree_url,
                    data=formspree_data,
                    headers={
                        "Accept": "application/json"
                    }
                )
                
                if response.status_code == 200:
                    logger.info("Successfully sent to Formspree")
                else:
                    logger.error(f"Formspree error: {response.status_code} - {response.text}")
                    
        except Exception as formspree_error:
            logger.error(f"Failed to send to Formspree: {str(formspree_error)}")
            # Continue without failing the request - we still logged it
        
        return {
            "message": "Thank you for your message! We'll get back to you soon.",
            "status": "success",
            "received_at": datetime.now()
        }
        
    except Exception as e:
        logger.error(f"Error processing contact form: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to process contact form")

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
