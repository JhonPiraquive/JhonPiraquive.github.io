# 010 — Reestructuración track configuracion-servicios-web (4 clases)

**Fecha:** 2026-06-23  
**Estado:** aprobado (orquestador)

## Contexto

El track tenía una sola lección `index` con 17 secciones (~6–8 h de contenido condensado). El usuario requiere un curso impartible en **4 sesiones de 2 h** (6–8 h totales).

## Decisión

1. **`index` → hub del curso** (intro corta, calendario de 4 clases, prerrequisitos, enlaces). No redirigir a clase-01 para mantener URL estable del track.
2. **4 lecciones nuevas** con slugs:
   - `clase-01-fundamentos-web` — navegadores, IP, dominios, DNS
   - `clase-02-hosting-correo-https` — hosting, correo, HTTPS/TLS
   - `clase-03-administracion-remota` — nube, SSH, SFTP, RDP/VNC
   - `clase-04-virtualizacion-diagnostico` — Docker, VMs, troubleshooting, reto integrador
3. Contenido de secciones del `index` anterior se **redistribuye** y **extiende** en las 4 clases.
4. Topic expert sigue siendo `topic-expert-web-services` (compartido con POSW).
5. Conteo portal: **4 clases + hub** (5 lecciones en registry).

## Consecuencias

- `teaching-tracks.md`: 1 → 5 lecciones
- Quizzes: 5 slugs (hub opcional ligero + 4 clases)
- `legacy-redirects.json`: mantener `index`; añadir redirects por clase si aplica
