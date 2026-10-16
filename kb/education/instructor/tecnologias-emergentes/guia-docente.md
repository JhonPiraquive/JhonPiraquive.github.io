# Guía docente — Tecnologías emergentes

Uso interno. No se publica en el portal (ADR 011). Ruta pública: `/es/teaching/tecnologias-emergentes`.

## Escala 0 a 100 y tiempos

| Clase | Nivel | Duración sugerida | Actividad que prepara |
|-------|-------|-------------------|-----------------------|
| 1. Del cero al primer componente | 0–35 | 2 a 3 h | Actividad 1 (clon de productos, Vite + React, responsive 4/3/2) |
| 2. Interfaces administrativas con React y MUI | 35–70 | 2 a 3 h | Actividad 2 (módulo docente: rutas, listado, formulario, acciones) |
| 3. Datos reales, CRUD y calidad | 70–100 | 2 a 3 h | Actividad 3 (peticiones HTTP, CRUD, validaciones) |

## Cómo repartir cada clase (en vivo)

**Clase 1**: p1 emergentes y criterio «nuevo vs mejor» (15 min, discusión) · p2 entorno y npm (25 min, todos instalan y ejecutan) · p3 y p4 JavaScript moderno (50 min, ejercicios en consola) · p5 proyecto Vite y tarjeta de producto (50 min, código en vivo) · práctica guiada: papelería (resto o tarea). El estudiante lee de la página lo que no alcance.

**Clase 2**: p1 estado y eventos (35 min) · p2 efectos (20 min; contexto queda de lectura) · p3 MUI (40 min, en vivo con el formulario y la tabla) · p4 UX (15 min, discusión con ejemplos) · p5 rutas (35 min, layout con Outlet) · práctica: módulo de materias.

**Clase 3**: p1 HTTP (20 min; probar la API con Thunder Client o curl) · p2 async/await y fetch (35 min) · p3 CRUD (50 min, en vivo: listar, crear, editar, eliminar) · p4 validación (20 min; RHF + Zod como lectura) · p5 rendimiento y despliegue (20 min) · p6 horizonte y cierre (15 min).

## Puntos donde el material del curso está desfasado

| Material del curso | Hoy (octubre de 2026) | Qué decir |
|--------------------|-----------------------|-----------|
| Plantilla con `react-router-dom` (v6) y `npm start` (Create React App) | `react-router` 8, Vite | Mismo concepto; cambia el import y el comando |
| `<Grid item xs={..}>` | MUI 9: `<Grid size={{...}}>` (GridLegacy eliminado) | Si el código copiado no se ve bien, revisar Grid |
| `PropTypes` / `defaultProps` | React 19 los ignora | Parámetros por defecto, JSDoc o TypeScript |
| Videos Midudev (2021) y Bluuweb (2020) sobre MUI | MUI 9 | Sirven para el concepto; copiar código de mui.com |
| API del proyecto con `_id` (Mongo) | json-server usa `id` | Revisar el nombre del id en la pestaña Red |

## Versiones de referencia (verificadas el 16-oct-2026)

Node 22.22+ (mínimo de React Router 8; recomendada la LTS más reciente) · Vite 8.x (Rolldown; requiere Node 20.19+ o 22.12+) · React 19.3 · MUI 9.x (no existe la 8) · React Router 8.x · json-server 0.17.4 (la 1.x sigue en beta) · React Compiler 1.0 estable.

## Fuentes

react.dev (blog, upgrade guide de React 19, «You might not need an effect») · vite.dev (guide, blog Vite 8) · mui.com (upgrade a v9, installation, grid, dark mode) · reactrouter.com (declarativo, upgrading v7→v8) · MDN (Fetch) · nodejs.org (calendario de releases).

## Pendiente

- El PDF indicado en el encargo (`uahbWnJVV1C4WFiT52maw54rhxJfFMBv0vgt6kwJb2xoJ46XF3.pdf`) no se encontró en `~/Descargas`; si aporta contenido, revisarlo y ajustar.
- Los videos de la facultad (YouTube) se incluyeron como recursos por título; no se pudo ver su contenido.
