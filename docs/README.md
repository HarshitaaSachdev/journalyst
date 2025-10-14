# 🚀 Project Overview

## Introduction
Welcome to the **Next.js 15 Web App** project!  
This application is built using the **App Router**, **Tailwind CSS**, and **TypeScript**.  
It follows a **modular, scalable, and developer-friendly structure**, designed to grow with the startup and make onboarding new developers easy.

## Tech Stack
- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **next-themes** (Dark/Light mode)
- **Zustand or Context API** (State management)
- **Axios or Fetch** (API integration)
- **Framer Motion** (Animations)
- **ESLint + Prettier** (Code linting and formatting)

## Getting Started
1. **Clone the repository**
   ```bash
   git clone https://github.com/your-org/your-project.git
   cd your-project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## Folder Structure
The project follows a **feature-based modular structure**:
```
project-root/
│
├── .env.local                 # Environment variables (API keys, secrets)
├── .gitignore
├── next.config.mjs
├── package.json
├── tailwind.config.ts
├── tsconfig.json
│
└── src/
    ├── app/                   # App router entry point
    │   ├── (auth)/            # Auth routes (layout + pages)
    │   │   ├── layout.tsx
    │   │   ├── login/page.tsx
    │   │   ├── register/page.tsx
    │   │   ├── forgot-password/page.tsx
    │   │   └── reset-password/page.tsx
    │   │
    │   ├── (dashboard)/       # Authenticated routes
    │   │   ├── layout.tsx     # Sidebar layout wrapper
    │   │   ├── dashboard/
    │   │   │   └── page.tsx
    │   │   ├── analytics/
    │   │   │   └── page.tsx
    │   │   ├── settings/
    │   │   │   └── page.tsx
    │   │   └── users/
    │   │       └── page.tsx
    │   │
    │   ├── layout.tsx         # Root layout (global theme, fonts)
    │   └── page.tsx           # Landing / Marketing page (non-auth)
    │
    ├── components/            # Reusable UI building blocks
    │   ├── ui/                # Low-level atomic components
    │   │   ├── button.tsx
    │   │   ├── input.tsx
    │   │   ├── card.tsx
    │   │   ├── modal.tsx
    │   │   └── dropdown.tsx
    │   │
    │   ├── layout/            # Layout-specific components
    │   │   ├── sidebar.tsx
    │   │   ├── navbar.tsx
    │   │   └── footer.tsx
    │   │
    │   ├── charts/            # Visualization components
    │   │   ├── line-chart.tsx
    │   │   ├── bar-chart.tsx
    │   │   └── pie-chart.tsx
    │   │
    │   └── shared/            # Common components used across features
    │       ├── avatar.tsx
    │       ├── theme-toggle.tsx
    │       └── empty-state.tsx
    │
    ├── features/              # Modular feature-based code
    │   ├── auth/
    │   │   ├── components/    # Auth-specific UI components
    │   │   ├── hooks/
    │   │   ├── services/      # API calls (login, register)
    │   │   ├── types/
    │   │   └── utils/
    │   │
    │   ├── dashboard/
    │   │   ├── components/
    │   │   ├── hooks/
    │   │   ├── services/
    │   │   └── types/
    │   │
    │   └── users/
    │       ├── components/
    │       ├── hooks/
    │       ├── services/
    │       └── types/
    │
    ├── hooks/                 # Global reusable hooks
    │   ├── use-toast.ts
    │   ├── use-theme.ts
    │   ├── use-media-query.ts
    │   └── use-debounce.ts
    │
    ├── lib/                   # Core library modules & utilities
    │   ├── api-client.ts      # Axios or Fetch wrapper
    │   ├── constants.ts
    │   ├── helpers.ts
    │   ├── validations.ts
    │   └── auth.ts
    │
    ├── store/                 # Global state (Zustand, Redux, or Context)
    │   ├── auth-store.ts
    │   ├── theme-store.ts
    │   └── ui-store.ts
    │
    ├── styles/                # Tailwind and global styles
    │   ├── globals.css
    │   ├── animations.css
    │   └── variables.css
    │
    ├── types/                 # Global TypeScript types
    │   ├── next.d.ts
    │   ├── user.d.ts
    │   └── api.d.ts
    │
    ├── config/                # App-level configuration
    │   ├── site.ts
    │   ├── env.ts
    │   └── theme.ts
    │
    ├── middleware.ts          # Next.js Middleware (auth, redirects)
    └── utils/                 # Reusable utilities
        ├── formatters.ts
        ├── date.ts
        ├── number.ts
        └── storage.ts
        
```

## Theming
The project uses **next-themes** and **Tailwind CSS** to support dark and light modes.

## Contributing
- Follow the **code standards** outlined in `CODE-STANDARDS.md`
- Follow **naming conventions** in `NAMING-CONVENTIONS.md`
- Update the documentation whenever a new feature is added
- Keep commits small, clear, and descriptive

## Deployment
Refer to `DEPLOYMENT.md` for the production setup guide.

---

> **Tip:**  
> Write readable code first. Comments and structure are more valuable than “smart” one-liners.
