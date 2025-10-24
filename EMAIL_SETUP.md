# Email Setup Guide for Dormo Contact Form

The contact form has been updated to send emails directly to `dormohelp@gmail.com` using the backend API instead of Formspree.

## Setup Instructions

### 1. Gmail App Password Setup

To use Gmail SMTP, you need to create an App Password:

1. Go to your Google Account settings
2. Navigate to Security → 2-Step Verification (must be enabled)
3. Go to App passwords
4. Generate a new app password for "Mail"
5. Copy the 16-character password (no spaces)

### 2. Backend Configuration

Update the `.env` file in the `backend/` directory:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=dormohelp@gmail.com
SMTP_PASSWORD=your-16-character-app-password-here
SMTP_FROM_EMAIL=dormohelp@gmail.com
SMTP_TO_EMAIL=dormohelp@gmail.com
```

**Important**: Replace `your-16-character-app-password-here` with the actual App Password from Gmail.

### 3. Install Dependencies

Make sure to install the new Python dependencies:

```bash
cd backend
pip install -r requirements.txt
```

### 4. Frontend Configuration

The frontend `.env` file has been created with:

```env
REACT_APP_API_URL=http://localhost:8000
```

For production, update this to your deployed backend URL.

## How It Works

1. **Frontend**: The contact form now uses React state management and sends data to the backend API
2. **Backend**: The `/contact` endpoint validates the data and sends a formatted email to `dormohelp@gmail.com`
3. **Email**: Messages include sender info, timestamp, and the full message content

## Email Format

Emails sent to `dormohelp@gmail.com` will have:
- **Subject**: "New Contact Form Message from [Name]"
- **Content**: HTML formatted with sender details and message
- **From**: dormohelp@gmail.com
- **Reply-to**: The sender's email address

## Testing

1. Start the backend server:
   ```bash
   cd backend
   python main.py
   ```

2. Start the frontend:
   ```bash
   cd frontend
   npm start
   ```

3. Fill out the contact form and submit
4. Check the `dormohelp@gmail.com` inbox for the email

## Troubleshooting

- **Authentication Error**: Verify the App Password is correct
- **Network Error**: Check if the backend is running on port 8000
- **CORS Error**: Ensure the frontend URL is in the CORS allowed origins
- **Email Not Received**: Check spam folder and verify Gmail settings

## Security Notes

- Never commit the `.env` file with real credentials to version control
- Use environment variables in production
- The App Password should be kept secure and not shared
