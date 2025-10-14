# 🧩 Code Standards

## Overview
To keep our codebase clean, consistent, and easy to maintain, follow these standards across the project.

## 1. General Guidelines
- Write **clear, readable, and maintainable** code.
- Use **TypeScript** for type safety.
- Avoid hard-coded values — use constants or config files.
- Write **descriptive commit messages** (e.g., `feat(auth): add login API service`).

## 2. Linting & Formatting
- ESLint + Prettier are enforced.
- Run lint check before pushing:
  ```bash
  npm run lint
  ```

## 3. Naming Conventions
- Components → `PascalCase`
- Hooks → `useCamelCase`
- Files/Folders → `kebab-case`
- Types/Interfaces → `PascalCase`
- Constants → `UPPER_CASE`

## 4. React & Next.js
- All components are **functional** (no class components).
- Use **client components** only when necessary (`"use client";` at top).
- Keep **one component per file** unless trivial.
- Prefer **controlled components** for forms.

## 5. Tailwind CSS
- Use Tailwind utility classes for layout and spacing.
- Avoid inline styles — use utility or custom classes.
- Use `@apply` for shared styles in CSS files.

## 6. Comments
Use `/** ... */` JSDoc-style comments for functions, hooks, and components.

Example:
```tsx
/**
 * Renders a button with primary or secondary styling.
 * @param {ButtonProps} props - Button configuration options.
 */
```

## 7. Git & Commits
- Branch naming: `feature/...`, `fix/...`, `docs/...`
- Commit format:
  - `feat:` → New feature
  - `fix:` → Bug fix
  - `docs:` → Documentation update
  - `refactor:` → Code improvement
