---
track: configuracion-servicios-web
topic_expert: topic-expert-web-services
updated: 2026-07-06
tsx_migration: complete
pedagogy_compliance: complete
build: passed
revision: 2026-07-06-expansion-actividad-3-ftp
---

# Pipeline Configuración de Servicios Web — estado

| slug | order | brief | draft | spec | layout | tsx | build | quiz | notas |
|------|-------|-------|-------|------|--------|-----|-------|------|-------|
| index | 1 | done | done | done | done | done | done | n/a | +objetivos FTP/Docker |
| clase-01-fundamentos-web | 2 | done | done | done | done | done | done | ✓ | GuiaDocenteSection eliminada TSX |
| clase-02-hosting-correo-https | 3 | done | done | done | done | done | done | ✓ | +LogsNginxPermisosSection |
| clase-03-administracion-remota | 4 | done | done | done | done | done | done | ✓ | +5 secciones FTP actividad-3 |
| clase-04-virtualizacion-diagnostico | 5 | done | done | done | done | done | done | ✓ | +DespliegueContenedorBasico, +ValidacionServicioFtp |
| actividad-1-laboratorio-practico | 6 | n/a | n/a | n/a | n/a | **no publicar** | n/a | n/a | solo guía docente KB |
| actividad-2-laboratorio-diagnostico | 7 | n/a | n/a | n/a | n/a | **no publicar** | n/a | n/a | solo guía docente KB |
| actividad-3-laboratorio-ftp | 8 | n/a | n/a | n/a | n/a | **no publicar** | n/a | n/a | solo guía docente KB |

**Fuentes:** `kb/education/sources/clases/configuracion-servicios-web/`

**Guías docentes (internas):** `kb/education/instructor/configuracion-servicios-web/`
- Actividad 1: `actividad-1-guia-docente.md`
- Actividad 2: `actividad-2-guia-docente.md`
- Actividad 3: `actividad-3-guia-docente.md`

**Repos laboratorio (docente):**
- Actividad 1: https://github.com/JhonPiraquive/configuracion-servicios-web-actividad-1
- Actividad 2: https://github.com/JhonPiraquive/configuracion-servicios-web-actividad-2
- Actividad 3: https://github.com/JhonPiraquive/configuracion-servicios-web-actividad-3 (**pendiente — 404**)

**Quizzes:** `src/lib/teaching-quizzes/configuracion-servicios-web.ts` (+3 preguntas clase-03 FTP, +3 clase-04 Docker/FTP)

**Expansión 2026-07-06 (actividad 3):** Contenido estudiantil ampliado para Docker básico (pull/run/ps/exec/uname/os-release), vsftpd, clientes FTP, transferencia con integridad, admin remota archivos, comparativa FTP/FTPS/SFTP y checklist validación FTP — sin mencionar actividad, laboratorio, entrega ni repo Docker en TSX. Guía docente actividad-3 en KB.

**Expansión 2026-07-06 (actividad 2):** Contenido estudiantil ampliado para SSH documentado, clientes gráficos, reconocimiento entorno, diagnóstico Nginx sistemático, validación curl e informe técnico — sin mencionar actividad, laboratorio, entrega ni repo Docker en TSX. GuiaDocenteSection retirada de TSX clase-01 y clase-04.

**Expansión 2026-07-06 (actividad 1):** Contenido estudiantil ampliado para dominio/DNS/hosting/correo/pruebas/análisis integrador.

**Revisión profundidad explicativa (2026-06-23):** Pipeline re-ejecutado brief → draft → spec → layout → TSX para las 4 clases.

**Secciones nuevas actividad-3 (TSX):**
- `DespliegueContenedorBasicoSection` → clase-04
- `ConfiguracionServidorFtpSection`, `ClientesFtpSection`, `TransferenciaArchivosSection`, `AdministracionRemotaArchivosSection`, `ComparativaProtocolosTransferenciaSection` → clase-03
- `ValidacionServicioFtpSection` → clase-04
