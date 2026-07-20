# Portfolio inventory

Fuente: `pages/index-es.html`, `pages/index-en.html`

| Section ID | Component | Notes |
|------------|-----------|-------|
| header/navbar | BrandSidebar, ClayNav | Social links (GitHub, LinkedIn, WhatsApp, descarga PDF HV), locale switch |
| hero | HeroSection | Typed roles, eslogan |
| about | AboutSection | Archetype blocks |
| certifications | CertificationsGrid | PDF cards |
| skills | SkillsSection | Progress bars |
| resume | ExperienceSection / ExperienceCard / ExperienceRoleTimeline | Jobs; Heinsohn incluye timeline de cargos Junior → Senior |
| education | EducationList | Degrees |
| posts | PublicationsSection | External links |
| hobbies | InterestsSection | Photos |

Contenido extraído a `src/content/portfolio/es.json` y `en.json`.

## Export PDF (hoja de vida)

- Botón imprimir en `SocialLinks` → genera PDF cliente con `@react-pdf/renderer` (`ResumePdfDocument` + `ResumePdfExperienceJob`).
- Secciones: perfil, experiencia completa (intros, bullets y `roleTimeline` Junior → Senior), estudios, certificados.
- Tipografía negra sin imágenes; labels en `resumePdf` (ES/EN).
- ADR: `kb/decisions/014-resume-pdf-export.md`.
