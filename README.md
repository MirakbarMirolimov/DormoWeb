# Dormo - Student Marketplace Platform

![Dormo](frontend/src/assets/small_icon.png)

**Dormo** is an exclusive student marketplace platform designed for CCBC students to buy, sell, and trade items safely within their campus community.

## 🌟 Overview

Dormo provides a secure, student-verified marketplace where CCBC students can:
- Buy and sell textbooks, electronics, furniture, and more
- Connect with verified students in a trusted environment
- Save money on student essentials
- Earn cash by selling unused items

## 🏗️ Project Structure

```
Dormo Website/
├── backend/              # FastAPI backend server
│   ├── main.py          # Main application file
│   ├── requirements.txt # Python dependencies
│   └── .env.example     # Environment variables template
│
└── frontend/            # React + Vite frontend
    ├── src/
    │   ├── components/  # React components
    │   ├── config/      # Configuration files
    │   ├── services/    # API services
    │   └── assets/      # Images and static files
    ├── package.json     # Node dependencies
    └── .env.example     # Environment variables template
```

## 🚀 Quick Start

### Prerequisites

- **Backend**: Python 3.9+, pip
- **Frontend**: Node.js 16+, npm or yarn
- Git

### Backend Setup

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Create virtual environment:**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Set up environment variables:**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

5. **Run the server:**
   ```bash
   python main.py
   ```
   
   Backend will be available at `http://localhost:8000`

### Frontend Setup

1. **Navigate to frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env
   # Edit .env to point to your backend URL
   ```

4. **Run development server:**
   ```bash
   npm run dev
   ```
   
   Frontend will be available at `http://localhost:3000`

## 📚 API Documentation

### Backend Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Root endpoint - API welcome message |
| GET | `/health` | Health check endpoint |
| GET | `/app-info` | Get application information |
| POST | `/contact` | Submit contact form |

### API Request Examples

**Health Check:**
```bash
curl http://localhost:8000/health
```

**Submit Contact Form:**
```bash
curl -X POST http://localhost:8000/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@student.ccbc.edu",
    "message": "I have a question about Dormo"
  }'
```

## 🎨 Frontend Features

### Current Pages

1. **Landing Page** (`/`)
   - Hero section with animated logo
   - Features showcase
   - App preview with onboarding screens
   - Contact form
   - Legal information (Privacy, Terms, Security)
   - Footer

2. **About Page** (`/about`)
   - Mission and values
   - Company story
   - Call to action

### Components

- **Navigation** - Responsive navigation bar with routing
- **LandingPage** - Main landing page with all sections
- **AboutPage** - About us page
- **ContactForm** - Functional contact form with API integration

### Styling

- **Tailwind CSS** - Utility-first CSS framework
- **Custom animations** - Floating particles, gradients, hover effects
- **Responsive design** - Mobile-first approach
- **Dark theme** - Modern gradient background

## 🔧 Development

### Backend Development

```bash
cd backend
python main.py  # Runs with auto-reload disabled
```

For development with auto-reload:
```bash
uvicorn main:app --reload --port 8000
```

### Frontend Development

```bash
cd frontend
npm run dev     # Start dev server
npm run build   # Build for production
npm run preview # Preview production build
npm run lint    # Run ESLint
```

## 🚀 Deployment

### Backend Deployment (Render/Railway)

1. Push code to GitHub
2. Connect repository to Render/Railway
3. Set environment variables
4. Deploy!

### Frontend Deployment (Vercel)

1. Push code to GitHub
2. Import project in Vercel
3. Set environment variables:
   - `VITE_API_URL` - Your production backend URL
4. Deploy!

## 🔐 Environment Variables

### Backend (.env)

```env
PORT=8000
CORS_ORIGINS=https://your-frontend-url.vercel.app
```

### Frontend (.env)

```env
VITE_API_URL=http://localhost:8000
```

## 📦 Tech Stack

### Backend
- **FastAPI** - Modern Python web framework
- **Uvicorn** - ASGI server
- **Pydantic** - Data validation
- **Python-multipart** - Form data handling

### Frontend
- **React 18** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **React Router DOM** - Routing
- **Lucide React** - Icons

## 🛡️ Security Features

- CORS configuration for secure cross-origin requests
- Input validation with Pydantic models
- Student email verification (planned)
- Secure payment processing with Stripe (planned)
- Data encryption and protection

## 📱 Future Features

- [ ] User authentication and authorization
- [ ] Marketplace listings (CRUD operations)
- [ ] Real-time messaging between users
- [ ] Payment integration with Stripe
- [ ] Image upload and management
- [ ] Search and filtering
- [ ] User profiles and ratings
- [ ] Push notifications
- [ ] Mobile app (iOS/Android)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Proprietary - All rights reserved by Dormo

## 📧 Contact

- **Email**: hello@dormo.app
- **Support**: support@dormo.app
- **Security**: security@dormo.app

## 🎓 For CCBC Students

Dormo is exclusively for CCBC students. You'll need your CCBC student email to register and access the marketplace.

---

**Built with ❤️ for CCBC Students**

*Making student life more affordable, one transaction at a time.*
