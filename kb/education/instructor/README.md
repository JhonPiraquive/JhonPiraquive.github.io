# Material docente interno — Jhon Alejandro Piraquive

Guías para el profesor en este repositorio: laboratorios, credenciales de demo, rúbricas y soluciones de referencia.

**Ruta:** `kb/education/instructor/`

El portal docente (`/teaching/`) publica solo competencias transferibles para estudiantes. Estas guías **no** se renderizan en el sitio.

---

## Índice por curso

### Configuración de Servicios Web

| Actividad | Guía | Repo laboratorio (estudiantes) | Estado repo |
|-----------|------|--------------------------------|-------------|
| 1 — Dominio, DNS, hosting y correo | [actividad-1-guia-docente.md](configuracion-servicios-web/actividad-1-guia-docente.md) | [configuracion-servicios-web-actividad-1](https://github.com/JhonPiraquive/configuracion-servicios-web-actividad-1) | Publicado |
| 2 — Diagnóstico servidor Linux (SSH + Nginx) | [actividad-2-guia-docente.md](configuracion-servicios-web/actividad-2-guia-docente.md) | [configuracion-servicios-web-actividad-2](https://github.com/JhonPiraquive/configuracion-servicios-web-actividad-2) | Publicado |
| 3 — FTP con Docker (vsftpd) | [actividad-3-guia-docente.md](configuracion-servicios-web/actividad-3-guia-docente.md) | [configuracion-servicios-web-actividad-3](https://github.com/JhonPiraquive/configuracion-servicios-web-actividad-3) | Pendiente |

**Pipeline del track:** [status.md](../pipeline/configuracion-servicios-web/status.md)

---

## Estructura

```
kb/education/instructor/
├── README.md
├── configuracion-servicios-web/
│   ├── actividad-1-guia-docente.md
│   ├── actividad-2-guia-docente.md
│   └── actividad-3-guia-docente.md
└── {otro-track}/          # futuros cursos
```

---

## Convenciones

- Una guía por actividad colaborativa: `actividad-N-guia-docente.md`
- Frontmatter YAML: `track`, `slug`, `audience: instructor`, `repo_laboratorio`, `updated`
- Credenciales de demo solo en estas guías; nunca en lecciones TSX ni rutas públicas del sitio
- Los alumnos usan el `README.md` del repo de laboratorio correspondiente

---

## Seguridad

- Revisar `git diff` antes de push: solo contraseñas y tokens **ficticios** de laboratorio
- No subir `.env` con secretos reales (cubiertos por `.gitignore` en la raíz del repo)
- Rotar contraseñas de demo al inicio de cada semestre
