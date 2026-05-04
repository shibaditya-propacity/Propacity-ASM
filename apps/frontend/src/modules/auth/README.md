# Module: auth

## Purpose
Handles user authentication. Presents login and signup pages; delegates token and session management to `core/auth/`.

## Routes
- `/login` — Sign-in page (unauthenticated)
- `/signup` — Account creation page (unauthenticated)

## Pages
- `login.page.tsx` — Work email + password form. Derives display name from email prefix. On success stores token via `useAuth().login()` and redirects to `/`.
- `signup.page.tsx` — Full name + work email + password. On success stores token and redirects to `/`.

## Open questions
- Backend auth is currently stubbed (accepts any `Authorization` header). Replace the stub `login()` call with a real POST `/auth/login` and POST `/auth/signup` once those endpoints are implemented.
- Email domain is restricted to `@propacity.in` at the frontend validation layer; enforce on the backend too.
