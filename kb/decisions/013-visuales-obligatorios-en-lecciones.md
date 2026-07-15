# 013 — Visuales obligatorios cuando el texto promete un gráfico

**Fecha:** 2026-07-15  
**Estado:** accepted

## Contexto

Muchas secciones docentes usan encabezados como «Mapa mental», «Flujo», «Ciclo», «Árbol», «Diagrama» o «Línea de tiempo» acompañados solo de listas, párrafos o tablas. Eso incumple la expectativa pedagógica del estudiante y debilita la accesibilidad cognitiva del contenido.

Además, en el track SEA varios `MermaidDiagram` se publicaron con entidades HTML (`&quot;`, `&#x27;`) dentro del string `chart`, lo que rompe el render de Mermaid.

## Decisión

1. **Promesa visual = visual real.** Si el título o el copy de una sección dice *mapa mental*, *diagrama*, *flujo*, *ciclo*, *árbol*, *jerarquía*, *topología* o *línea de tiempo*, la sección **debe** incluir una representación visual contigua (`MermaidDiagram`, imagen con `figure`/`figcaption`, o `StepReveal` cuando el visual es una secuencia animada guiada). Una lista, tabla plana o párrafo **no basta**.
2. **Tipo Mermaid según relación:**
   - `mindmap` → mapas mentales / resumen conceptual
   - `sequenceDiagram` → intercambios cliente-servidor / protocolos
   - `flowchart` → procesos, arquitecturas, ciclos
   - `classDiagram` / `erDiagram` → modelos OO o datos
   - `timeline` → cronologías
3. **Texto de apoyo:** bullets breves pueden acompasar el visual; no lo sustituyen.
4. **Sin entidades HTML** en `chart` ni `code` de `MermaidDiagram` / `CodeFiddle`. Usar comillas literales o identificadores sin espacios.
5. **Matrices / heatmaps** (p. ej. impacto × probabilidad) → `<table>` semántica con contraste visual o imagen, nunca párrafos sueltos una celda por `<p>`.
6. **`MermaidDiagram`** admite `title` / `description` opcionales y se envuelve en `figure` cuando hay título.

## Consecuencias

- Revisión transversal de lecciones en los seis tracks.
- Actualización de `pedagogy-standards.md` e `interactive-components.md`.
- Pipeline: education/layout deben marcar `<!-- interactive: MermaidDiagram -->` en todo bloque con promesa visual.
