# 🧱 Naming Conventions

Consistency makes collaboration smoother. Follow these naming conventions across all files and folders.

## 1. File & Folder Names
- Use **kebab-case** for file and folder names.
  - ✅ `user-profile.tsx`
  - ❌ `UserProfile.tsx`

## 2. Component Names
- Use **PascalCase** for React components.
  - ✅ `UserCard.tsx` → `export function UserCard() {}`

## 3. Variables & Functions
- Use **camelCase** for variables and functions.
  - ✅ `const fetchUserData = () => {}`

## 4. Types & Interfaces
- Use **PascalCase** and prefix interfaces with `I` only when meaningful.
  - ✅ `interface User { id: string; name: string; }`

## 5. Constants
- Use **UPPER_CASE** for constants.
  - ✅ `const API_BASE_URL = "https://api.example.com";`

## 6. Routes & APIs
- Use **kebab-case** for URL paths and API endpoints.
  - ✅ `/api/get-user`
  - ✅ `/dashboard/settings`

## 7. Hooks
- Always start with `use`.
  - ✅ `useAuth()`, `useThemeToggle()`

## 8. Test Files
- Follow the pattern: `component-name.test.tsx`
