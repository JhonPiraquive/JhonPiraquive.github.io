# Portfolio inventory

Fuente: `pages/index-es.html`, `pages/index-en.html`

| Section ID | Component | Notes |
|------------|-----------|-------|
| header/navbar | BrandSidebar, ClayNav | Social links (GitHub, LinkedIn, WhatsApp, descarga PDF HV), locale switch |
| hero | HeroSection | Typed roles, eslogan |
| about | AboutSection | Archetype blocks |
| certifications | CertificationsGrid | PDF cards |
| skills | SkillsSection | Progress bars |
| resume | ExperienceSection / ExperienceCard / ExperienceRoleTimeline | Jobs; Heinsohn separado en Senior (mar 2024–) y Software Developer (abr 2022–feb 2024) |
| education | EducationList | Degrees |
| posts | PublicationsSection | External links |
| hobbies | InterestsSection | Photos |

Contenido extraído a `src/content/portfolio/es.json` y `en.json`.

## Export PDF (hoja de vida)

- Botón imprimir en `SocialLinks` → genera PDF cliente con `@react-pdf/renderer` (`ResumePdfDocument` + `ResumePdfExperienceJob`).
- Secciones: perfil, experiencia completa (intros y bullets; `roleTimeline` opcional), estudios, certificados.
- Contacto PDF: email, website, LinkedIn, GitHub.
- Tipografía negra sin imágenes; labels en `resumePdf` (ES/EN).
- ADR: `kb/decisions/014-resume-pdf-export.md`.
