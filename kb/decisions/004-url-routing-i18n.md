# ADR 004: URLs e i18n

## Estado
Aceptado

## Rutas nuevas
| Legacy | Nueva |
|--------|-------|
| `/pages/index-es.html` | `/es/` |
| `/pages/index-en.html` | `/en/` |
| `/pages/teaching/{track}/{slug}.html` | `/es/teaching/{track}/{slug}/` |

## i18n
- Locales: `es`, `en`
- `/` redirige según `Accept-Language` o default `es`
- Stubs HTML en rutas legacy (meta refresh)
