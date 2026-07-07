# 007 — Librerías para visor de certificaciones

**Fecha:** 2026-06-22  
**Estado:** Aceptado

## Contexto

Los modales caseros (`MediaModal`, `PdfViewerModal`) no mostraban bien imágenes/PDFs. El visor PDF con `<iframe>` falla en Chrome/Safari en sitios estáticos.

## Decisión

- **Imágenes:** modal propio con `ModalOverlay` + zoom CSS (rueda y botones ±).
- **PDFs:** `react-pdf@10.1.0` (pdfjs-dist 5.3.93) — evita crash webpack en `next dev`.

## Alternativas descartadas

- **GLightbox** (legacy): PDFs vía iframe, mismo problema.
- **@react-pdf-viewer/core:** más pesado de lo necesario para certs estáticos.

## Consecuencias

- `ModalOverlay` compartido solo para PDF viewer y modal de skills.
- Bundle de lightbox/PDF se carga al primer clic en una certificación.
