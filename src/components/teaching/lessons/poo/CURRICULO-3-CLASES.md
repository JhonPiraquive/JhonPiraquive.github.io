# Currículo POO — 3 clases (universidad)

Reorganización del track `poo` de **10 temas planos → 3** sesiones de ~2–3 h (120–180 min), progresión principiante→experto, español LATAM, C#, caso transversal **Tienda Andes**.

Fuente de verdad de navegación: `class-navigation.ts` (`ALL_CLASSES` = 3).

---

## Clase 1 — Fundamentos de POO

**Slug:** `clase-01-fundamentos-poo`  
**Outcomes:** Explicar qué es POO; distinguir clase / objeto / instancia / constructor; aplicar encapsulamiento e invariantes; leer un diagrama de clases simple.

| Página | Min |
|--------|-----|
| `objetivos` | 7 |
| `fundamentos` | 28 |
| `encapsulamiento` | 30 |
| `diagrama-clase-simple` | 22 |
| `practica-y-cierre` | 25 |
| **Total** | **~112** (ventana 2 h; lab en aula hasta ~150) |

**Puente de salida:** `Producto` encapsulado + diagrama caja → herencia y relaciones en Clase 2.

**Origen:** temas `fundamentos` + `encapsulamiento` + parte intro de `diagramas-de-clases` (elementos básicos).

---

## Clase 2 — Relaciones y reutilización

**Slug:** `clase-02-relaciones-reutilizacion`  
**Outcomes:** Modelar “es-un” con herencia; distinguir override vs overload; elegir asociación / agregación / composición; dibujar UML con vínculos del caso.

| Página | Min |
|--------|-----|
| `objetivos` | 7 |
| `herencia` | 22 |
| `override-y-sobrecarga` | 25 |
| `asociacion-agregacion-composicion` | 28 |
| `diagramas-relaciones` | 30 |
| `practica-y-cierre` | 25 |
| **Total** | **~137** |

**Puente de entrada:** retoma `Producto` y encapsulamiento de Clase 1.  
**Puente de salida:** jerarquía + composición Pedido→Línea → abstracción y polimorfismo en Clase 3.

**Origen:** `herencia`, `override-y-sobrecarga`, `asociacion-agregacion-composicion`, resto de `diagramas-de-clases`.  
Archivo completo del tema diagramas en `pages/_legacy-diagramas-completo/` (fuera del nav).

---

## Clase 3 — Experto — abstracción, SOLID y diseño

**Slug:** `clase-03-experto-poo`  
**Outcomes:** Usar abstractas e interfaces; aplicar polimorfismo; aplicar SOLID; evaluar modularidad / cohesión / acoplamiento; cerrar con reto integrador de diseño.

| Página | Min |
|--------|-----|
| `objetivos` | 7 |
| `abstraccion-clases-abstractas-interfaces` | 23 |
| `polimorfismo` | 28 |
| `solid-principios` | 35 |
| `modularidad-cohesion-acoplamiento` | 28 |
| `practica-y-cierre` | 30 |
| **Total** | **~151** |

**Puente de entrada:** jerarquía y relaciones de Clase 2.  
**Puente de salida:** cierre del módulo (hub).

**Origen:** `abstraccion-clases-abstractas-interfaces`, `polimorfismo`, `solid-principios`, `modularidad-cohesion-acoplamiento`.

---

## Mapa de fusión (10 temas → 3 clases)

| Tema antiguo | Destino |
|--------------|---------|
| fundamentos | Clase 1 / `fundamentos` |
| encapsulamiento | Clase 1 / `encapsulamiento` |
| diagramas-de-clases (intro) | Clase 1 / `diagrama-clase-simple` |
| herencia | Clase 2 / `herencia` |
| override-y-sobrecarga | Clase 2 / `override-y-sobrecarga` |
| asociacion-agregacion-composicion | Clase 2 / `asociacion-agregacion-composicion` |
| diagramas-de-clases (relaciones) | Clase 2 / `diagramas-relaciones` (+ alias del slug antiguo) |
| abstraccion-clases-abstractas-interfaces | Clase 3 / misma página |
| polimorfismo | Clase 3 / `polimorfismo` |
| solid-principios | Clase 3 / `solid-principios` |
| modularidad-cohesion-acoplamiento | Clase 3 / misma página |

**Aliases:** URLs antiguas `poo/{tema}` en `_aliases/` + `LEGACY_TOPIC_REDIRECTS` + `kb/content/legacy-redirects.json`.

---

## Puentes pedagógicos (resumen)

1. **1→2:** de “sé crear un Producto válido” a “especializo y relaciono objetos”.  
2. **2→3:** de “el diagrama tiene herencia y composición” a “contratos, despacho polimórfico y SOLID”.  
3. **Caso:** Tienda Andes (Cliente, Pedido, Línea, Producto→Libro/Gadget) en las tres clases.

Cada clase: páginas de contenido (explicación + ejemplos + resumen/cierre) → **toda** la práctica y validación en `practica-y-cierre` (comprueba por tema + práctica guiada + un reto Tienda Andes + miniquiz de clase + cierre).

**Gráficos:** MermaidDiagram (Archify CLI/skill no disponible en este entorno). Diagramas pedagógicos embebidos: clase↔objeto, UML del caso, despacho polimórfico, mapa SOLID.

---

## Notas pedagógicas (2026-09-22)

Revisión docente en `REVISION-PEDAGOGICA.md`. Ajustes aplicados sobre el mapa (ahora **17 páginas** + hub: +`objetivos` por clase):

- **Clase 1:** diagrama intro limitado a “una caja”; práctica parte 1 sin herencia; puentes de cierre corregidos.
- **Clase 2:** override reordenado; práctica parte 2 avanza herencia + composición; objetivos en diagramas-relaciones.
- **Clase 3:** puente desde Clase 2; capstone único en `practica-y-cierre`; misconceptions abstracta/interfaz y DIP/LSP.
- **Minutos:** sin cambio de tabla; en aula priorizar capstone Clase 3 sobre duplicar retos SOLID + modularidad.

**Aliases:** sin cambio — `_aliases/` + `LEGACY_TOPIC_REDIRECTS` + `kb/content/legacy-redirects.json`.

**Objetivos (2026-09-22):** página dedicada `objetivos` como **primera** página de cada clase; hub del track conserva objetivos/resultados de módulo (overview). Páginas de contenido sin bloque Objetivos — ver `REVISION-PEDAGOGICA.md` §9–§10.

**Práctica al cierre (2026-09-22):** Comprueba / Miniquiz / Reto / Práctica guiada **solo** en `practica-y-cierre` de cada clase (no en páginas de contenido). Un reto Tienda Andes por clase; sin quiz a mitad de módulo. Ver `REVISION-PEDAGOGICA.md` §11.

---

## Rewrite from-zero voice (2026-09-22, teach-zero)

Pasada de **voz y flujo** (no de mapa de páginas). Objetivo: enseñar POO desde cero como instructor universitario en voz alta.

**Plantilla abandonada:** H3 repetidos *Qué es / Para qué sirve / Señales de buen y mal uso / Ejemplo de vida real / Malas prácticas en el mundo real* en cada sección.

**Estructura por tema:** problema o escena (Tienda Andes) → idea en lenguaje llano → C# pequeño → confusión típica → resumen. Comprueba/práctica/reto/miniquiz viven en `practica-y-cierre`. Cada página inventa los H3 que necesita.

**Caso:** un solo hilo Tienda Andes (Producto, Pedido, Línea, Libro/Gadget, pasarelas). Dominios paralelos solo si contrastan en una frase.

**Nav:** sin merge/split de temas de contenido; aliases de URLs antiguas intactos. Página `objetivos` añadida como entrada de cada clase. `_legacy-diagramas-completo/` fuera del nav (sin reescribir).
