# Pips Winners — React + Shopify

Este repositorio incluye dos entregables:

1. **Sitio React + Vite + TypeScript** en `src/`, listo para Vercel.
2. **Tema Shopify Online Store 2.0** en `shopify-theme/`, listo para comprimir y subir a Shopify como tienda de dropshipping/IA.

## Requisitos

- Node.js 18 o superior
- npm
- Cuenta Shopify para subir el tema

## Desarrollo local del sitio React

```bash
npm install
npm run dev
```

## Build de producción React

```bash
npm run build
```

El build genera la carpeta `dist/`.

## Crear ZIP para Shopify

El tema está en `shopify-theme/`. Para crear el ZIP que se sube en Shopify:

```bash
cd shopify-theme
zip -r ../pips-winners-shopify-theme.zip . -x "*.DS_Store"
```

Luego entra en Shopify Admin y ve a **Online Store > Themes > Add theme > Upload zip file** para subir `pips-winners-shopify-theme.zip`.

## Qué trae el tema Shopify

- Layout global con navegación, carrito y footer.
- Home editable con hero, productos destacados, stack de automatización y FAQ.
- Plantillas para producto, colección, página y carrito.
- CSS responsive premium en negro/dorado.
- Guía de configuración y automatizaciones en `shopify-theme/README.md`.

## Deploy en Vercel

Este proyecto React está listo para Vercel.

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
