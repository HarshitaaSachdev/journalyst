# 🏗️ Project Architecture

## Overview
This project follows a **feature-first architecture** using the **Next.js App Router**.  
Each feature (e.g., Auth, Dashboard, Users) is isolated inside its own folder under `/src/features`.

This structure improves scalability, readability, and allows multiple developers to work independently without conflicts.

## Folder Breakdown

### `/src/app`
Contains all the **App Router** routes and layouts.
Each route folder can have its own layout and pages.

Example:
```
app/
├── layout.tsx          # Global layout (theme, fonts)
├── page.tsx            # Landing page
├── (auth)/             # Auth routes (no sidebar)
│   ├── layout.tsx
│   ├── login/page.tsx
│   └── register/page.tsx
└── (dashboard)/        # Dashboard routes (with sidebar)
    ├── layout.tsx
    ├── dashboard/page.tsx
    ├── settings/page.tsx
    └── users/page.tsx
```

### `/src/components`
Contains reusable UI elements and layout components:
- `/ui/` → Buttons, inputs, modals.
- `/layout/` → Navbar, sidebar.
- `/shared/` → Reusable utilities (like ThemeToggle).

### `/src/features`
Feature-based modular folders with their own logic and UI:
```
features/auth/
├── components/
├── hooks/
├── services/
├── types/
└── utils/
```

### `/src/lib`
Shared utilities and helpers (API client, constants, etc).

### `/src/store`
Global state management using Zustand or Context.

### `/src/config`
Environment and global configuration files.

### `/src/styles`
Global Tailwind CSS and variable definitions.

### `/src/types`
Global TypeScript types and interfaces.
