# Dormo Development Guide

This guide will help you set up and develop the Dormo platform locally.

## 🎯 Prerequisites

Before you begin, ensure you have the following installed:

- **Python 3.9+** - [Download](https://www.python.org/downloads/)
- **Node.js 16+** - [Download](https://nodejs.org/)
- **Git** - [Download](https://git-scm.com/)
- **Code Editor** - VS Code recommended

## 🚀 Initial Setup

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd "Dormo Website"
```

### 2. Backend Setup

```bash
# Navigate to backend
cd backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Create .env file
cp .env.example .env

# Run the backend
python main.py
```

The backend will start at `http://localhost:8000`

**Test the backend:**
```bash
# Open browser and visit:
http://localhost:8000
http://localhost:8000/health
http://localhost:8000/app-info
```

### 3. Frontend Setup

Open a new terminal window:

```bash
# Navigate to frontend
cd frontend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Start development server
npm run dev
```

The frontend will start at `http://localhost:3000`

## 🔧 Development Workflow

### Running Both Servers

You'll need two terminal windows:

**Terminal 1 - Backend:**
```bash
cd backend
venv\Scripts\activate  # On Windows
python main.py
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

### Making Changes

#### Backend Changes

1. Edit files in `backend/`
2. The server will NOT auto-reload by default
3. Restart the server manually or use:
   ```bash
   uvicorn main:app --reload --port 8000
   ```

#### Frontend Changes

1. Edit files in `frontend/src/`
2. Changes will hot-reload automatically
3. Check browser console for errors

## 📁 Project Structure Explained

### Backend Structure

```
backend/
├── main.py              # Main FastAPI application
│   ├── API endpoints
│   ├── CORS configuration
│   └── Pydantic models
├── requirements.txt     # Python dependencies
├── .env                 # Environment variables (create this)
└── .env.example        # Environment template
```

### Frontend Structure

```
frontend/
├── src/
│   ├── components/      # React components
│   │   ├── LandingPage.jsx    # Main landing page
│   │   ├── AboutPage.jsx      # About page
│   │   ├── ContactForm.jsx    # Contact form
│   │   └── Navigation.jsx     # Navigation bar
│   ├── config/
│   │   └── api.js            # API configuration
│   ├── services/
│   │   └── apiService.js     # API service layer
│   ├── assets/              # Images and static files
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── public/                  # Public assets
├── .env                     # Environment variables (create this)
├── .env.example            # Environment template
└── package.json            # Dependencies
```

## 🎨 Adding New Features

### Adding a New Backend Endpoint

1. Open `backend/main.py`
2. Add your endpoint:

```python
@app.get("/new-endpoint")
async def new_endpoint():
    return {"message": "Hello from new endpoint"}
```

3. Test it: `http://localhost:8000/new-endpoint`

### Adding a New Frontend Page

1. Create component in `frontend/src/components/`:

```jsx
// NewPage.jsx
import React from 'react';

const NewPage = () => {
  return (
    <div className="min-h-screen gradient-bg pt-16">
      <h1 className="text-white text-4xl">New Page</h1>
    </div>
  );
};

export default NewPage;
```

2. Add route in `frontend/src/App.jsx`:

```jsx
import NewPage from './components/NewPage'

// In Routes:
<Route path="/new-page" element={<NewPage />} />
```

3. Add navigation link in `Navigation.jsx`:

```jsx
const navLinks = [
  // ... existing links
  { name: 'New Page', path: '/new-page' },
];
```

### Adding a New API Service

1. Open `frontend/src/services/apiService.js`
2. Add new method:

```javascript
async getNewData() {
  return this.request('/new-endpoint');
}
```

3. Use in component:

```jsx
import apiService from '../services/apiService';

const MyComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    apiService.getNewData()
      .then(setData)
      .catch(console.error);
  }, []);

  return <div>{/* Use data */}</div>;
};
```

## 🐛 Debugging

### Backend Debugging

**Check if server is running:**
```bash
curl http://localhost:8000/health
```

**View logs:**
- Check terminal where backend is running
- Look for error messages

**Common issues:**
- Port 8000 already in use: Change port in `.env`
- Import errors: Check virtual environment is activated
- CORS errors: Check CORS configuration in `main.py`

### Frontend Debugging

**Check browser console:**
- Press F12 in browser
- Look for errors in Console tab

**Check network requests:**
- F12 → Network tab
- Look for failed API calls

**Common issues:**
- API connection failed: Check backend is running
- Module not found: Run `npm install`
- Build errors: Delete `node_modules` and reinstall

## 🧪 Testing

### Backend Testing

```bash
# Test health endpoint
curl http://localhost:8000/health

# Test contact endpoint
curl -X POST http://localhost:8000/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@ccbc.edu","message":"Test message"}'
```

### Frontend Testing

1. Open `http://localhost:3000`
2. Test navigation between pages
3. Test contact form submission
4. Check responsive design (resize browser)
5. Test on mobile device

## 📦 Building for Production

### Backend

```bash
cd backend
pip install -r requirements.txt
python main.py
```

### Frontend

```bash
cd frontend
npm run build
```

Build output will be in `frontend/dist/`

## 🔐 Environment Variables

### Backend (.env)

```env
# Server Configuration
PORT=8000

# CORS Origins (comma-separated)
CORS_ORIGINS=http://localhost:3000,https://your-domain.com

# Database (when implemented)
# DATABASE_URL=postgresql://user:pass@localhost/dbname

# Stripe (when implemented)
# STRIPE_SECRET_KEY=sk_test_...
```

### Frontend (.env)

```env
# API Configuration
VITE_API_URL=http://localhost:8000

# For production:
# VITE_API_URL=https://your-backend-url.onrender.com
```

## 🚀 Deployment Checklist

### Before Deploying

- [ ] Test all features locally
- [ ] Update environment variables
- [ ] Build frontend (`npm run build`)
- [ ] Test production build (`npm run preview`)
- [ ] Update CORS origins in backend
- [ ] Check all API endpoints work
- [ ] Test on mobile devices
- [ ] Review security settings

### Backend Deployment (Render)

1. Push code to GitHub
2. Create new Web Service on Render
3. Connect GitHub repository
4. Set build command: `pip install -r requirements.txt`
5. Set start command: `python main.py`
6. Add environment variables
7. Deploy!

### Frontend Deployment (Vercel)

1. Push code to GitHub
2. Import project in Vercel
3. Set root directory to `frontend`
4. Add environment variable: `VITE_API_URL`
5. Deploy!

## 💡 Tips & Best Practices

### Code Style

- Use meaningful variable names
- Add comments for complex logic
- Keep components small and focused
- Follow existing code patterns

### Git Workflow

```bash
# Create feature branch
git checkout -b feature/new-feature

# Make changes and commit
git add .
git commit -m "Add new feature"

# Push to GitHub
git push origin feature/new-feature

# Create Pull Request on GitHub
```

### Performance

- Optimize images before adding to `assets/`
- Use lazy loading for heavy components
- Minimize API calls
- Cache data when possible

## 📚 Useful Resources

- [FastAPI Documentation](https://fastapi.tiangolo.com/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Vite Documentation](https://vitejs.dev/)

## 🆘 Getting Help

If you run into issues:

1. Check this guide
2. Search error messages online
3. Check GitHub Issues
4. Contact the development team

## 📝 Common Commands Reference

### Backend
```bash
# Activate virtual environment
venv\Scripts\activate              # Windows
source venv/bin/activate           # macOS/Linux

# Install dependencies
pip install -r requirements.txt

# Run server
python main.py

# Run with auto-reload
uvicorn main:app --reload
```

### Frontend
```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

---

Happy coding! 🚀
