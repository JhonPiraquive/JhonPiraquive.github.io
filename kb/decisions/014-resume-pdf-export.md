# 014 — Exportación de hoja de vida en PDF

**Fecha:** 2026-07-20  
**Estado:** Aceptado

## Contexto

Se necesita una opción en los links de redes (sidebar) para descargar una hoja de vida en PDF: perfil, experiencia, estudios y certificados. Máximo 2 páginas, tipografía sencilla en negro (sin colores ni imágenes).

## Decisión

- Generar el PDF en el cliente con `@react-pdf/renderer`.
- Botón de imprimir/descargar junto a GitHub, LinkedIn y WhatsApp en `SocialLinks`.
- El documento reutiliza el contenido de `src/content/portfolio/{es,en}.json`.
- **Experiencia laboral completa:** intro, todos los bullets y, cuando exista, la evolución de cargos (`roleTimeline`: nivel, periodo, proyectos, resumen y responsabilidades).
- Tipografía densa (A4, negro) para acercarse al objetivo de ~2 páginas sin recortar experiencia.
- Carga diferida del generador al primer clic (no entra en el bundle inicial del layout).

## Alternativas descartadas

- **`window.print()` + CSS:** depende del diálogo del navegador; no entrega un archivo PDF directo.
- **`react-pdf` (ya instalado):** solo visualiza PDFs (pdf.js), no los genera.
- **HTML estático pre-generado en build:** duplicaría contenido y perdería i18n dinámica (`{expYears}`).
- **Condensar bullets de experiencia:** descartado — la HV debe reflejar el mismo detalle del portafolio, incluidos avances de cargo.

## Consecuencias

- Nueva dependencia `@react-pdf/renderer` (distinta de `react-pdf` del visor de certificaciones).
- El PDF es texto plano (Helvetica, negro); no usa tokens clay ni assets de marca.
- Con experiencia completa el PDF puede superar ligeramente 2 páginas si el contenido crece; priorizar fidelidad del contenido sobre el tope estricto.
