# CSE Job Fair 2026 Workspace

Monorepo includes:

- `frontend`: React + TypeScript + Vite public website.
- `backend`: Express + TypeScript API with PostgreSQL.

Current version for both apps is `0.0.0`.

## Setup

1. Prepare PostgreSQL.
2. Backend:
   - `cd backend`
   - `copy .env.example .env`
   - set `DATABASE_URL`
   - `npm install`
   - `npm run build`
   - `npm run start`
3. Frontend:
   - `cd frontend`
   - `npm install`
   - `npm run dev`
   - `npm run build`

## Validation Commands

- `cd frontend && npm run lint`
- `cd frontend && npm run build`
- `cd backend && npm run build`

## Frontend Routes

- `/`: Home page
- `/register`: Register page

## API Routes

- `POST /api/checkins`
- `GET /api/checkins/summary`
- `GET /api/students`
- `GET /api/students/:studentId`
