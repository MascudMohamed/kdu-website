# KDU Global Website (Frontend)

React + Vite public website for Kyungdong University Global.

## Backend (separate repo + XAMPP)

The API is **not** in this repository. It runs as its own app:

| Item          | Location                                    |
| ------------- | ------------------------------------------- |
| GitHub        | https://github.com/SMZuqlarnain/kdu-backend |
| Local (XAMPP) | `C:\xampp\htdocs\kdu-backend`               |
| API URL       | http://localhost/kdu-backend/public         |

## Quick start

### 1. Backend (XAMPP)

1. Clone https://github.com/SMZuqlarnain/kdu-backend into `C:\xampp\htdocs\kdu-backend`
2. Run `database\install.bat`, copy `.env.example` → `.env`
3. Start **Apache** and **MySQL** in XAMPP
4. Test: http://localhost/kdu-backend/public/api/health

### 2. Frontend (this repo)

```cmd
npm install
npm run dev
```

Open http://localhost:5173

Vite proxies `/api` and `/media` to the XAMPP backend.

## Environment

`.env.example`:

```
VITE_API_URL=
```

Leave empty in dev (uses Vite proxy). Set your production API URL when deploying.

## Live API departments

- Smart Computing
- International Business Administration (IBA)
- English for Academic Purposes (EAP)

Other departments use static data in `src/data/departments/`.

Complete web application for KDU Global University with backend API and frontend React application.
