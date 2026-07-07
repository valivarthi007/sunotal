# Tradio Global

A pixel-faithful clone of tradioglobal.com — Indian refurbished smartphone marketplace.

Built with React 19 + Vite 7 + Tailwind CSS 4. **Zero external CDN dependencies.**

## Requirements

- Node.js 20+
- npm, yarn, or pnpm

## Getting started

```bash
# Install dependencies
npm install        # or: yarn install / pnpm install

# Start dev server  →  http://localhost:5173
npm run dev

# Production build  →  dist/
npm run build

# Preview production build  →  http://localhost:4173
npm run preview
```

## Deploy (nginx)

After `npm run build`, copy `dist/` to your server:

```bash
sudo cp -r dist/* /var/www/tradioglobal/
```

Use the included `nginx.conf` as your site config:

```bash
sudo cp nginx.conf /etc/nginx/sites-available/tradioglobal
sudo ln -s /etc/nginx/sites-available/tradioglobal /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
```

## Project structure

```
tradioglobal/
├── public/
│   ├── fonts/          # Self-hosted Satoshi & Inter woff2 files
│   └── favicon.svg
├── src/
│   ├── assets/         # Product images, logo
│   ├── components/     # UI components (shadcn/radix-based)
│   ├── data/           # Mock product data
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions
│   ├── pages/          # Route pages
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css       # Tailwind + brand theme
├── index.html
├── vite.config.ts
├── tsconfig.json
└── package.json
```

## Tech stack

| Layer | Library |
|-------|---------|
| Framework | React 19 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 |
| UI components | Radix UI + shadcn patterns |
| Routing | Wouter |
| Animation | Framer Motion |
| Carousel | Embla Carousel |
| Forms | React Hook Form + Zod |
| State | TanStack Query |
