# KDU Global — International University Website

A premium, modern, responsive international university website built with React, Vite, and Framer Motion.

## Tech Stack

- **React 19** with Vite 6
- **React Router DOM** for client-side routing
- **Framer Motion** for subtle animations
- **Pure CSS** with modular organization (no CSS frameworks)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── common/       # Button, Breadcrumb, SectionTitle, etc.
│   ├── department/   # Department-specific sections
│   ├── home/         # Home page components
│   └── layout/       # Navbar, Footer
├── pages/            # Route-level page components
├── layouts/          # MainLayout wrapper
├── data/             # Content data (departments, home, etc.)
├── routes/           # App routing configuration
├── constants/        # Brand colors, navigation links
├── styles/           # Global and component CSS
└── hooks/            # Custom React hooks
```

## Pages

| Page | Route |
|------|-------|
| Home | `/` |
| About | `/about` |
| Admissions | `/admissions` |
| Academics | `/academics` |
| Department (template) | `/academics/:slug` |
| International Students | `/international-students` |
| News & Events | `/news-events` |
| Contact | `/contact` |

## Department Pages (Fully Developed)

- Bachelor of Smart Computing — `/academics/bachelor-of-smart-computing`
- International Business Administration — `/academics/international-business-administration`
- English for Academic Purposes — `/academics/english-for-academic-purposes`

## Adding New Departments

1. Create a data file in `src/data/departments/yourDepartment.js` following the existing structure
2. Import and register it in `src/data/departments/index.js`
3. The reusable `DepartmentPage` template renders all sections automatically

## Brand Colors

| Token | Value |
|-------|-------|
| Primary (Navy) | `#0B2D5B` |
| Secondary (Gold) | `#C8A951` |
| Accent (Blue) | `#2B7DE9` |

## Future Backend Integration

The project is structured for future PHP/MySQL backend integration via the `src/services/` directory.
# kdu-website
