# EduVault (Budha College)

Frontend + backend portfolio marketplace app for students and colleges.

## Tech Stack

- Frontend: React + Vite + Tailwind
- Backend: Node.js + Express
- Data: JSON file store (`backend/data/store.json`)

## Run Frontend

```bash
npm install
npm run dev
```

Frontend runs on `http://localhost:5173`.

## Run Backend

```bash
cd backend
npm install
npm run dev
```

Backend runs on `http://localhost:5000`.

## Environment

Frontend uses this API URL by default:

- `http://localhost:5000/api`

If needed, create a `.env` file in project root:

```bash
VITE_API_URL=http://localhost:5000/api
```

## Available API Routes

- `GET /api/health`
- `GET /api/products?search=&category=`
- `GET /api/students?search=`
- `GET /api/top-students`
- `GET /api/portfolios/:id`
- `POST /api/portfolios`
- `POST /api/auth/signup`
- `POST /api/auth/login`

## Notes

- Auth is demo-style (plain password storage) for development only.
- Data persists in `backend/data/store.json`.
