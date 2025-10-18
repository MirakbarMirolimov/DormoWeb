# DormoWeb

A modern landing page for the Dormo student marketplace app, built with React (Vite) frontend and Python (FastAPI) backend.

🛒 **Dormo** - The exclusive marketplace for CCBC students to buy, sell, and trade textbooks, electronics, furniture, and more safely within their campus community.

## Project Structure

```
Dormo Website/
├── frontend/          # React + Vite frontend
│   ├── src/
│   │   ├── components/
│   │   │   └── LandingPage.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── index.html
├── backend/           # Python FastAPI backend
│   ├── main.py
│   ├── requirements.txt
│   └── .env.example
└── README.md
```

## Getting Started

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The frontend will be available at `http://localhost:3000`

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Create a virtual environment:
   ```bash
   python -m venv venv
   ```

3. Activate the virtual environment:
   - Windows: `venv\Scripts\activate`
   - macOS/Linux: `source venv/bin/activate`

4. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

5. Start the development server:
   ```bash
   python main.py
   ```

The backend API will be available at `http://localhost:8000`

## Features

- **Student Marketplace**: Exclusive platform for CCBC students to buy and sell items
- **Modern Design**: Beautiful, responsive landing page with gradient backgrounds and smooth animations
- **Mobile Responsive**: Optimized for all device sizes
- **Fast Performance**: Built with Vite for lightning-fast development and builds
- **API Ready**: FastAPI backend with CORS configured for frontend integration
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Lucide Icons**: Beautiful, consistent iconography
- **Brand Integration**: Custom Dormo branding and CCBC college integration

## Tech Stack

### Frontend
- React 18
- Vite
- Tailwind CSS
- Lucide React (icons)

### Backend
- Python 3.8+
- FastAPI
- Uvicorn
- Pydantic

## API Endpoints

- `GET /` - Root endpoint
- `GET /health` - Health check
- `GET /app-info` - App information
- `POST /contact` - Contact form submission

## Customization

The landing page is fully customizable. Key areas to modify:

1. **Brand Colors**: Update the primary color scheme in `tailwind.config.js`
2. **Content**: Modify text and features in `LandingPage.jsx`
3. **Logo**: Replace the Moon icon with your brand logo
4. **API**: Extend the backend with additional endpoints as needed

## Deployment

### Frontend (Vercel)
The frontend is deployed to Vercel:

1. Connect your GitHub repository to Vercel
2. Set build settings:
   - **Framework Preset**: Vite
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

### Backend (Render)
The backend is deployed to Render:

1. Connect your GitHub repository to Render
2. Create a new Web Service
3. Set build settings:
   - **Root Directory**: `backend`
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `uvicorn main:app --host 0.0.0.0 --port $PORT`

### Environment Variables
Set these in your deployment platforms:
- **Frontend**: No environment variables needed
- **Backend**: 
  - `PORT` (automatically set by Render)
  - `CORS_ORIGINS` (set to your Vercel frontend URL)

## License

This project is created for Dormo app development.
