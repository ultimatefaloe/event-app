# EventApp

A simple React + Vite event management app with full CRUD, localStorage persistence, authentication via a custom `AuthProvider` context, and Tailwind CSS styling.

## Features

- **Auth (Context API)** — Sign up / log in / log out. Users and sessions are stored in `localStorage` (`AuthContext.jsx`).
- **Events CRUD (Context API)** — Create, read, update, delete events, scoped per logged-in user, persisted in `localStorage` (`EventContext.jsx`).
- **Routing** — `react-router-dom` with protected routes (must be logged in to view/manage events).
- **Styling** — Tailwind CSS.

## Getting Started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
  context/
    AuthContext.jsx     # AuthProvider + useAuth hook
    EventContext.jsx    # EventProvider + useEvents hook (CRUD)
  components/
    Navbar.jsx
    ProtectedRoute.jsx
    EventCard.jsx
    EventForm.jsx
  pages/
    Login.jsx
    Signup.jsx
    EventsList.jsx       # Home page ("/")
    EventCreate.jsx       # "/events/new"
    EventEdit.jsx           # "/events/:id/edit"
    EventDetail.jsx           # "/events/:id"
  App.jsx
  main.jsx
  index.css               # Tailwind directives
```

## Notes

- No backend — everything is stored in the browser's `localStorage`.
- Each user's events are private to their account (filtered by `ownerId`).
- Passwords are stored in plain text in `localStorage` for demo purposes only — **do not use this pattern in production**.
