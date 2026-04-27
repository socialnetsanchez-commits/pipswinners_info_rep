# Pips Winners — React + Vite + TypeScript

Sitio web de presentación para Pips Winners, convertido desde HTML estático a React + Vite + TypeScript.

## Requisitos

- Node.js 18 o superior
- npm

## Desarrollo local

```bash
npm install
npm run dev
```

## Build de producción

```bash
npm run build
```

El build genera la carpeta `dist/`.

## Deploy en Vercel

Este proyecto está listo para Vercel.

Configuración incluida:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

## Comunidad

Telegram: https://t.me/PIPSWINNERSCOMMUNITY
