# Tema Shopify — Pips Winners AI Dropshipping Store

Este directorio contiene un tema Shopify Online Store 2.0 listo para comprimir y subir a Shopify. Está pensado para una tienda de dropshipping o productos digitales con estética premium, secciones editables y copy orientado a automatizaciones con IA.

## Archivos incluidos

- `layout/theme.liquid`: estructura HTML global, navegación, carrito y footer.
- `templates/*.json`: plantillas Shopify para home, producto, colección, página y carrito.
- `sections/*.liquid`: secciones editables desde el editor visual de Shopify.
- `snippets/*.liquid`: componentes reutilizables de producto y aviso legal.
- `assets/theme.css` y `assets/theme.js`: estilos responsive y menú móvil.
- `config/settings_schema.json`: ajustes globales del tema.

## Cómo subirlo a Shopify

1. Entra en Shopify Admin.
2. Ve a **Online Store > Themes**.
3. Haz clic en **Add theme > Upload zip file**.
4. Comprime el contenido de esta carpeta, no la carpeta contenedora:

   ```bash
   cd shopify-theme
   zip -r ../pips-winners-shopify-theme.zip . -x "*.DS_Store"
   ```

5. Sube `pips-winners-shopify-theme.zip`.
6. Abre **Customize** y cambia textos, imágenes, logo, colección destacada y preguntas frecuentes.

## Configuración mínima antes de publicar

1. **Productos**: crea productos con título, descripción, precio, imágenes, variantes y peso si vendes físico.
2. **Colecciones**: crea una colección destacada y asígnala en la sección “Productos destacados”.
3. **Menús**: configura `Main menu` y `Footer menu` en **Online Store > Navigation**.
4. **Políticas**: completa reembolso, privacidad, términos, envíos y contacto en **Settings > Policies**.
5. **Pagos y checkout**: activa Shopify Payments, PayPal u otro proveedor, impuestos y mercados.
6. **Dominio**: conecta tu dominio y activa SSL.

## Automatizaciones recomendadas

- **Creativos y copies con IA**: usa ChatGPT para hooks, guiones UGC, descripciones SEO, emails y anuncios.
- **Email/SMS**: Shopify Email, Klaviyo u Omnisend para bienvenida, carrito abandonado, postcompra y winback.
- **Chatbot**: Tidio, Gorgias o Shopify Inbox para FAQs, soporte y recuperación de ventas.
- **Zapier/Shopify Flow**: envía nuevos pedidos a Google Sheets, Slack/Telegram, CRM, proveedor o fulfillment app.
- **Ads**: instala Meta Pixel, TikTok Pixel y Google & YouTube desde Shopify Apps antes de lanzar campañas.

## Prompt base para generar anuncios

```text
Actúa como media buyer de ecommerce. Crea 5 hooks, 3 guiones UGC de 30 segundos, 5 copies para Meta Ads y 5 copies para TikTok Ads para este producto: [producto]. Público objetivo: [audiencia]. Beneficio principal: [beneficio]. Tono: premium, claro y directo. Incluye CTA y evita promesas no verificables.
```

## Nota importante

Antes de lanzar, verifica que las afirmaciones del producto sean demostrables, que los tiempos de envío sean reales y que tus políticas cumplan con la normativa del país donde vendes.
