# Portfolio ChivoDev (web)

Sitio público de hoja de vida alimentado por `GET /api/portfolio`.

Stack: Vite + React 19 + Tailwind 4 + Axios + Motion.

## Arranque

```bash
pnpm install
cp .env.example .env
pnpm dev
```

Abre `http://localhost:5173`.

Variables:

- `VITE_API_BASE_URL=http://localhost:8000/api`
- `VITE_PANEL_URL=http://localhost:5174` (opcional)

## Secciones

Hero, Sobre mí, Habilidades, Experiencia, Formación, Contacto (formulario → `POST /api/contact`).

## Favicon dinámico

`DocumentFavicon` actualiza el `<link rel="icon">` con `profile.logoUrl` del portfolio. Si `logoUrl` es `null`, se usa `/favicon.svg` por defecto.
