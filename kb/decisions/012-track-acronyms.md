# ADR 012 — Nomenclatura oficial de tracks docentes

**Estado:** aceptado  
**Fecha:** 2026-07-06

## Contexto

Los tracks docentes usaban siglas (PBPEW, POO, POSW, SEA) de forma inconsistente en portal, SEO, KB y contenido TSX. Se unifica la expansión oficial.

## Decisión

| Slug (URL, inmutable) | Nombre completo ES | Acrónimo |
|-----------------------|-------------------|----------|
| `pbpew` | Programación básica para entornos web | PBPEW |
| `poo` | Programación Orientada a Objetos | POO |
| `posw` | Programación Orientada a Sitios Web | POSW |
| `sea` | Seguridad en Aplicaciones | SEA |

### Reglas de uso

1. **Slugs y rutas** (`/teaching/{slug}/`, carpetas, imports): no renombrar.
2. **`TRACKS` / portal / `teaching-tracks.md`:** `titleEs` y columna Track con nombre completo.
3. **Contenido estudiante (TSX):** primera mención por página → nombre completo; opcional acrónimo entre paréntesis; menciones siguientes → acrónimo.
4. **SEO (`lesson-meta.ts`):** descripción con nombre completo; `seoTitle` puede usar acrónimo si el título excede ~60 caracteres.
5. **Ejemplos de código:** strings literales con sigla (p. ej. `console.log("Hola, PBPEW")`) se mantienen como dato didáctico.

## Consecuencias

- `src/lib/teaching.ts` → `titleEs` alineado con tabla anterior.
- KB, README y agentes actualizados con nombres completos.
- Pipeline interno puede seguir usando siglas en nombres de constantes (`PBPEW_QUIZZES`).
