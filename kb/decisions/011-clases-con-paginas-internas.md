# 011 — Clases con páginas internas (paginación estudiantil)

**Fecha:** 2026-07-06  
**Estado:** implementado (2026-07-06)

## Contexto

Tracks modulares por «clase» (p. ej. `configuracion-servicios-web` con 4 clases de ~2 h) pueden quedar como una sola URL con 10–20 secciones apiladas. Eso dificulta la lectura, el progreso percibido y la navegación en móvil.

## Decisión

1. **Mantener el slug de clase** como unidad curricular (`clase-01-fundamentos-web`, etc.).
2. **Dividir cada clase en páginas internas** con slug anidado: `{clase}/{pagina}` (ej. `clase-01-fundamentos-web/direcciones-ip`).
3. **Hub por clase** en `{clase}`: objetivos resumidos + índice de páginas con descripción breve (no volcar todo el contenido).
4. **3–5 páginas por clase**, cada una con **2–4 secciones** (~15–20 min de lectura).
5. **Última página** de la clase: práctica, reto integrador, cierre y miniquiz (cuando aplique).
6. **Nav prev/next** encadenada entre páginas de la misma clase y entre clases.
7. **Shell visual:** breadcrumb `Clase N / Página X de Y` + título de página (componente `ClassPageLayout` o extensión de `LessonLayout`).
8. **Contenido TSX orientado al estudiante** — sin guías docente, actividades evaluables, repos de laboratorio ni instrucciones de entrega en páginas públicas.

## Convenciones técnicas

| Artefacto | Patrón |
|-----------|--------|
| Slug registry | `{track}/{clase}/{pagina}` |
| Carpeta TSX | `{track}/{clase}/pages/{pagina}/` |
| Secciones compartidas | `{track}/{clase}/sections/*.tsx` (reutilizar, no duplicar) |
| Quiz | Una clave por **clase** (última página), no por página |
| layout-spec | Un `layout-spec.md` por clase con tabla `## Páginas` + specs por página |

## Cuándo aplicar

- Refactor de módulos existentes con clases extensas (>8 secciones o >~20 min lectura continua).
- Nuevos módulos tipo «curso por sesiones» desde el diseño inicial en `teaching-layout-expert`.

## Consecuencias

- Más entradas en `teaching-lessons-registry.ts` (hub + páginas por clase).
- Redirects en `legacy-redirects.json` si una URL monolítica de clase debe apuntar al hub.
- Portal del track puede listar solo hubs de clase o agrupar páginas bajo cada clase (preferir hubs en lista principal).

## Referencia

- Primera implementación: track `configuracion-servicios-web` — **23 entradas registry** (index + 4 hubs + 18 páginas), build passing.
- ADR previo: [010-configuracion-servicios-web-4-clases.md](010-configuracion-servicios-web-4-clases.md).
