# 🚀 Dormo Quick Start Guide

Get your Dormo development environment up and running in 5 minutes!

## Step 1: Backend Setup (2 minutes)

Open a terminal and run:

```bash
# Navigate to backend
cd backend

# Create and activate virtual environment
python -m venv venv
venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Create environment file
copy .env.example .env

# Start the backend server
python main.py
```

✅ Backend running at: **http://localhost:8000**

Test it: Open http://localhost:8000/health in your browser

---

## Step 2: Frontend Setup (2 minutes)

Open a **NEW** terminal window and run:

```bash
# Navigate to frontend
cd frontend

# Install dependencies
npm install

# Create environment file
copy .env.example .env

# Start the development server
npm run dev
```

✅ Frontend running at: **http://localhost:3000**

---

## Step 3: Open in Browser

Visit: **http://localhost:3000**

You should see the Dormo landing page! 🎉

---

## 🧪 Test the Contact Form

1. Scroll down to the "Get in Touch" section
2. Fill out the form:
   - Name: Your Name
   - Email: test@student.ccbc.edu
   - Message: Test message
3. Click "Send Message"
4. You should see a success message!

---

## 🛑 Stopping the Servers

**Backend Terminal:**
- Press `Ctrl + C`

**Frontend Terminal:**
- Press `Ctrl + C`

---

## 🔄 Restarting

**Backend:**
```bash
cd backend
venv\Scripts\activate
python main.py
```

**Frontend:**
```bash
cd frontend
npm run dev
```

---

## 🐛 Troubleshooting

### Backend won't start?
- Make sure Python 3.9+ is installed: `python --version`
- Check if port 8000 is available
- Ensure virtual environment is activated

### Frontend won't start?
- Make sure Node.js 16+ is installed: `node --version`
- Try deleting `node_modules` and running `npm install` again
- Check if port 3000 is available

### Contact form not working?
- Ensure backend is running at http://localhost:8000
- Check browser console (F12) for errors
- Verify `.env` file has correct `VITE_API_URL`

---

## 📚 Next Steps

- Read [DEVELOPMENT.md](DEVELOPMENT.md) for detailed development guide
- Read [README.md](README.md) for full project documentation
- Explore the code in `frontend/src/components/`
- Try adding new features!

---

## 🎯 Quick Commands Reference

| Task | Command |
|------|---------|
| Start Backend | `cd backend && venv\Scripts\activate && python main.py` |
| Start Frontend | `cd frontend && npm run dev` |
| Build Frontend | `cd frontend && npm run build` |
| Test Backend | Visit http://localhost:8000/health |
| Test Frontend | Visit http://localhost:3000 |

---

**Need help?** Check the troubleshooting section or read the full documentation!

Happy coding! 🚀
