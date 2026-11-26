# AIRCOVE: AC Repair & HVAC website

React 18 + Vite, Framer Motion, Lenis 1.3.23 smooth scroll, React Router, Google Fonts (Inter, Manrope, Geist Mono), Google Maps embeds, Open Graph metadata.

## Run
```
npm install
npm run dev      # development
npm run build    # production build in dist/
```

## Structure
- `src/data/` all content (services, blog posts, offers, FAQs, testimonials, locations, site info)
- `src/components/{layout,ui,sections}/` reusable pieces
- `src/pages/` Home, About, Services, ServiceDetail, Offers, Financing, ServiceAreas, AreaDetail, Blog, BlogDetail, Contact, Legal
- `src/styles/` tokens, base, components, pages CSS
- `public/images/` photography (see `IMAGE_PROMPTS.md`; missing images show a soft gradient)
- `scripts/generate-sitemap.mjs` regenerates `public/sitemap.xml`

## Placeholders to replace
Phone, email, address, hours, service areas and legal text are placeholders (`src/data/site.js`, `locations.js`, `Legal.jsx`).
