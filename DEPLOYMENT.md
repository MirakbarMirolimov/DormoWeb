# Deployment Guide

## GitHub Setup

Your repository is already connected: `https://github.com/MirakbarMirolimov/DormoWeb.git`

## Frontend Deployment (Vercel)

### Step 1: Connect to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign in with your GitHub account
3. Click "New Project"
4. Import your `DormoWeb` repository

### Step 2: Configure Build Settings
- **Framework Preset**: Vite
- **Root Directory**: `frontend`
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### Step 3: Deploy
- Click "Deploy"
- Your frontend will be available at: `https://your-project-name.vercel.app`

## Backend Deployment (Render)

### Step 1: Connect to Render
1. Go to [render.com](https://render.com)
2. Sign in with your GitHub account
3. Click "New +" → "Web Service"
4. Connect your `DormoWeb` repository

### Step 2: Configure Service
- **Name**: `dormo-api`
- **Root Directory**: `backend`
- **Environment**: `Python 3`
- **Build Command**: `pip install --upgrade pip && pip install -r requirements.txt`
- **Start Command**: `gunicorn main:app -w 4 -k uvicorn.workers.UvicornWorker --bind 0.0.0.0:$PORT`

### Alternative Start Commands (try in this order):
1. `gunicorn main:app -w 4 -k uvicorn.workers.UvicornWorker --bind 0.0.0.0:$PORT`
2. `python -m gunicorn main:app -w 4 -k uvicorn.workers.UvicornWorker --bind 0.0.0.0:$PORT`
3. `python -m uvicorn main:app --host 0.0.0.0 --port $PORT`

### If Still Having Issues:
- Check the "Logs" tab in Render for detailed error messages
- Ensure Python version is set correctly (we're using 3.10.12)
- Verify all files are in the `backend` directory

### Step 3: Environment Variables
Add these environment variables in Render:
- `CORS_ORIGINS`: Your Vercel frontend URL (e.g., `https://your-project-name.vercel.app`)

### Step 4: Deploy
- Click "Create Web Service"
- Your backend will be available at: `https://your-service-name.onrender.com`

## Post-Deployment

### Update CORS Origins
After getting your Vercel URL, update the backend CORS settings:
1. In Render dashboard, go to your service
2. Go to "Environment" tab
3. Add `CORS_ORIGINS` with your Vercel URL

### Test Your Deployment
1. Visit your Vercel frontend URL
2. Check that the site loads properly
3. Test API endpoints at your Render backend URL
4. Verify CORS is working between frontend and backend

## Custom Domain (Optional)
- **Vercel**: Add custom domain in project settings
- **Render**: Add custom domain in service settings

## Monitoring
- **Vercel**: Check deployment logs in dashboard
- **Render**: Monitor service logs and metrics in dashboard

## Troubleshooting

### Common Issues:
1. **Build fails**: Check package.json and dependencies
2. **CORS errors**: Verify CORS_ORIGINS environment variable
3. **API not accessible**: Check Render service status
4. **Assets not loading**: Verify build output directory

### Logs:
- **Vercel**: Functions → View Function Logs
- **Render**: Service → Logs tab
