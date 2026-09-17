# CEGESAN — Institución Educativa

Sitio web oficial de la Institución Educativa CEGESAN en Cúcuta, Norte de Santander, Colombia. Página de admisiones e información institucional con enfoque en preescolar, primaria, secundaria y media.

**Sitio publicado:** https://www.cegesan.edu.co/

---

## Qué es

Sitio web institucional de una escuela en Cúcuta que ofrece educación desde preescolar hasta media. Incluye:

- Hero seccional con estadísticas y llamada a la acción de inscripciones 2026
- Sección "Por qué CEGESAN" con tres pilares (excelencia académica, valores, cultura)
- Lista de grados/niveles ofrecidos
- Bloque de admisiones con botón a WhatsApp
- Footer con dirección, links legales y botón flotante de WhatsApp

---

## Estructura del proyecto

```text
cegesan-site/
├── index.html          # Página principal
├── sitemap.xml         # Sitemap para buscadores
├── robots.txt          # Directivas de crawlers
├── assets/
│   ├── logo.png        # Logo institucional
│   ├── evento.jpg      # Imagen hero / Open Graph
│   └── cultura.jpg     # Imagen sección de grados
├── css/
│   └── styles.css      # Estilos completos
└── js/
    └── main.js         # Interacciones (scroll, WhatsApp)
```

---

## Stack

- HTML5 semántico + metadatos de SEO (Open Graph, Twitter Cards, JSON-LD tipo `EducationalOrganization`)
- CSS vanilla (sin framework)
- JavaScript vanilla, sin dependencias
- Hosting estático (GitHub Pages / cualquier CDN)

---

## Desarrollo local

No necesita servidor. Abrir `index.html` en el navegador o servir con cualquier herramienta estática:

```bash
# Ejemplo con Python
cd cegesan-site
python -m http.server 8000
# Abrir http://localhost:8000
```

---

## Personalización pendiente

Antes de publicar, reemplazar los placeholders:

- `assets/logo.png` → logo final institucional
- `assets/evento.jpg` → foto del evento/cultura del año
- `assets/cultura.jpg` → foto de estudiantes
- `js/main.js` y `index.html` → número de WhatsApp real (`57XXXXXXXXXX`)
- Links de "Términos y Condiciones" y "Política de privacidad" en el footer
- Enlace a Webcolegio y descargables si aplica

---

## SEO y accesibilidad

- `lang="es"` en `<html>`
- Imágenes con `alt` descriptivo
- `aria-label` en botones y enlaces iconográficos
- `data-wa` para distinguir botones de WhatsApp
- `defer` en script para no bloquear renderizado
- Canonical URL, metadatos de descripción, palabras clave

---

## Autor

**Holfkings** — GitHub: https://github.com/Holfkings

---

## Licencia

Este proyecto es de uso institucional de CEGESAN. Los contenidos y activos son propiedad de la institución.
