# fokus — sitio web

Agencia de marketing y digitalización. Proyecto React + Vite.

## Cómo correrlo

1. Instala [Node.js](https://nodejs.org) 18 o superior.
2. Abre la carpeta `fokus-website` en IntelliJ IDEA (o WebStorm): `File → Open`.
3. Abre una terminal dentro de IntelliJ (`Alt+F12` o el panel Terminal) y corre:
   ```bash
   npm install
   npm run dev
   ```
4. Abre el link que aparece en la terminal (normalmente `http://localhost:5173`).

## Scripts

- `npm run dev` — servidor de desarrollo con recarga en caliente.
- `npm run build` — build de producción en `dist/`.
- `npm run preview` — sirve el build de producción localmente.
- `npm run lint` — revisa el código con oxlint.

## Estructura de archivos

```
fokus-website/
├── index.html                  # entrada HTML, fuentes de Google Fonts
├── public/
│   └── favicon.svg
├── src/
│   ├── main.jsx                 # monta React + BrowserRouter
│   ├── App.jsx                  # rutas: "/" y "/contactanos"
│   ├── index.css                # tokens de diseño (colores, tipografía, utilidades)
│   ├── data/
│   │   ├── projects.js          # contenido de la sección "Proyectos/Servicios"
│   │   ├── services.js          # contenido del acordeón de servicios
│   │   └── testimonials.js      # contenido de testimonios
│   ├── pages/
│   │   ├── HomePage.jsx         # arma todas las secciones de la landing
│   │   ├── ContactPage.jsx      # placeholder de "/contactanos" (a construir después)
│   │   └── ContactPage.css
│   └── components/
│       ├── Navbar.jsx / .css
│       ├── Hero.jsx / .css           # frase central + fotos flotantes + botón
│       ├── About.jsx / .css          # frase grande "Nos enfocamos..."
│       ├── ScrollSplitImage.jsx/.css # foto que se abre en 4 al hacer scroll
│       ├── Projects.jsx / .css       # tarjetas de servicios apiladas al hacer scroll
│       ├── ServicesAccordion.jsx/.css# lista con hover (branding/ui/dev/strategy → tus categorías)
│       ├── Testimonials.jsx / .css   # "TESTIMONIOS" con reviews flotantes al hacer scroll
│       ├── JoinCTA.jsx / .css        # "¡Únete a fokus!"
│       ├── Footer.jsx / .css         # footer + marquee "TRABAJA CON FOKUS"
│       ├── Marquee.jsx / .css        # loop de texto reutilizable
│       └── Reveal.jsx                # wrapper de fade-in-on-scroll usado en toda la página
```

## Notas

- Todas las fotos son placeholders de `picsum.photos`. Reemplázalas en `src/data/*.js` y
  dentro de cada componente (`Hero.jsx`, `ScrollSplitImage.jsx`) por tus propias imágenes:
  ponlas en `src/assets/` e impórtalas, o en `public/` y referencia la ruta directamente.
- El acento de color (`--accent` en `src/index.css`) es un verde lima ("focus lime"). Cámbialo
  ahí si quieres otro color de marca — se propaga a todo el sitio.
- La página `/contactanos` es un placeholder listo para que construyamos el formulario de
  contacto en el siguiente paso.
- Las animaciones usan `framer-motion`. Todas las entradas por scroll respetan
  `prefers-reduced-motion`.
