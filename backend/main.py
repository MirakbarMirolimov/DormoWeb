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
        
        # Try to send email, but don't fail if email service is not configured
        try:
            if SMTP_USER and SMTP_PASSWORD and SMTP_PASSWORD != "your-app-password-here":
                # Create email subject and body
                subject = f"New Contact Form Message from {contact_data.name}"
                
                # Create HTML email body
                email_body = f"""
                <html>
                <body>
                    <h2>New Contact Form Submission</h2>
                    <p><strong>From:</strong> {contact_data.name}</p>
                    <p><strong>Email:</strong> {contact_data.email}</p>
                    <p><strong>Submitted:</strong> {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}</p>
                    <hr>
                    <h3>Message:</h3>
                    <p>{contact_data.message.replace(chr(10), '<br>')}</p>
                    <hr>
                    <p><em>This message was sent from the Dormo website contact form.</em></p>
                </body>
                </html>
                """
                
                # Send email
                await send_email(subject, email_body)
                logger.info("Email sent successfully")
            else:
                logger.warning("Email service not configured - message logged only")
        except Exception as email_error:
            logger.error(f"Failed to send email: {str(email_error)}")
            # Continue without failing the request
        
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
