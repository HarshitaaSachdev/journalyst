# 🚀 Deployment Guide

## Overview
This document explains how to deploy the Next.js 15 web app to production.

## 1. Environment Setup
Create a `.env.local` file in the root directory for development and `.env.production` for production.
Example:
```
NEXT_PUBLIC_API_URL=https://api.yourdomain.com
NEXTAUTH_SECRET=your_secret_key
NEXTAUTH_URL=https://yourdomain.com
```

## 2. Build the App
Run the production build:
```bash
npm run build
```

Start the production server:
```bash
npm run start
```

## 3. Deploying to Vercel (Recommended)
1. Connect your GitHub repository to [Vercel](https://vercel.com).
2. Vercel automatically detects Next.js and sets up builds.
3. Add environment variables in Vercel’s dashboard.
4. Every push to `main` triggers automatic deployment.

## 4. Deploying Manually (Optional)
If you prefer manual deployment (e.g., to your own server or Docker):

### Docker Example
```dockerfile
# Dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

### Run the container
```bash
docker build -t nextjs-app .
docker run -p 3000:3000 nextjs-app
```

## 5. Continuous Integration (CI/CD)
You can use **GitHub Actions** for automatic testing and deployment.

Example Workflow (`.github/workflows/deploy.yml`):
```yaml
name: Deploy to Vercel
on:
  push:
    branches:
      - main
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
```

## 6. Monitoring
- Use **Vercel Analytics** or **LogRocket** for performance tracking.
- Enable **Sentry** for error monitoring.

---

> ✅ Once deployed, always test:
> - Auth routes (`/login`, `/register`)
> - API connections
> - Dark/light theme toggle
