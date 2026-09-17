# CEGESAN — Educational Institution Website

Official website of the CEGESAN Educational Institution in Cúcuta, Norte de Santander, Colombia. Admissions page and institutional information covering preschool, primary, secondary, and high school.

**Live site:** https://www.cegesan.edu.co/

---

## What it is

An institutional website for a school in Cúcuta offering education from preschool to high school. Includes:

- Hero section with statistics and 2026 admissions call-to-action
- "Why CEGESAN" section with three pillars (academic excellence, values, culture)
- List of offered grades/levels
- Admissions block with WhatsApp button
- Footer with address, legal links, and floating WhatsApp button

---

## Project structure

```text
cegesan-site/
├── index.html          # Main page
├── sitemap.xml         # Sitemap for search engines
├── robots.txt          # Crawler directives
├── assets/
│   ├── logo.png        # Institutional logo
│   ├── evento.jpg      # Hero image / Open Graph
│   └── cultura.jpg     # Grades section image
├── css/
│   └── styles.css      # Complete styles
└── js/
    └── main.js         # Interactions (scroll, WhatsApp)
```

---

## Tech stack

- Semantic HTML5 + SEO metadata (Open Graph, Twitter Cards, JSON-LD `EducationalOrganization` type)
- Vanilla CSS (no framework)
- Vanilla JavaScript, no dependencies
- Static hosting (GitHub Pages / any CDN)

---

## Local development

No server needed. Open `index.html` in a browser or serve with any static tool:

```bash
# Example with Python
cd cegesan-site
python -m http.server 8000
# Open http://localhost:8000
```

---

## Pending customization

Before publishing, replace the placeholders:

- `assets/logo.png` → final institutional logo
- `assets/evento.jpg` → current year event/culture photo
- `assets/cultura.jpg` → students photo
- `js/main.js` and `index.html` → real WhatsApp number (`57XXXXXXXXXX`)
- "Terms and Conditions" and "Privacy Policy" links in footer
- Webcolegio and downloads links if applicable

---

## SEO and accessibility

- `lang="es"` on `<html>`
- Images with descriptive `alt`
- `aria-label` on buttons and icon links
- `data-wa` to distinguish WhatsApp buttons
- `defer` on script to not block rendering
- Canonical URL, description metadata, keywords

---

## Author

**Holfkings** — GitHub: https://github.com/Holfkings

---

## License

This project is for institutional use by CEGESAN. Contents and assets are property of the institution.
