# ⚠️ IMPORTANT: Which Folder to Use?

## 🎯 Use the `frontend` folder for Dormo!

You have two React projects in this workspace:

### ✅ **frontend/** - Your Dormo App (USE THIS!)
This is your actual Dormo student marketplace application with:
- Beautiful landing page
- Contact form
- About page
- Navigation
- API integration
- All features we built

**To run Dormo:**
```bash
cd frontend
npm install
npm run dev
```

### ❌ **my-react-app/** - Default Vite Template (DON'T USE)
This is just the default Vite + React template. It's not your Dormo app.

---

## 🚀 Quick Start (Use This!)

**Terminal 1 - Backend:**
```bash
cd backend
venv\Scripts\activate
python main.py
```

**Terminal 2 - Frontend (Dormo):**
```bash
cd frontend
npm install
npm run dev
```

Then visit: **http://localhost:3000**

---

## 🗑️ Optional: Delete my-react-app

If you don't need the default template, you can safely delete the `my-react-app` folder:
```bash
# This is optional - only if you want to clean up
rmdir /s "my-react-app"
```

---

## 📁 Correct Project Structure

```
Dormo Website/
├── backend/          ← Your FastAPI backend
├── frontend/         ← YOUR DORMO APP (USE THIS!)
└── my-react-app/     ← Default template (not needed)
```

---

**Always use the `frontend` folder for Dormo development!**
