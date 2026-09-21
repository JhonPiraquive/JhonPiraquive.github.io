# Currículo POO — 3 clases (universidad)

Reorganización del track `poo` de **10 temas planos → 3** sesiones de ~2–3 h (120–180 min), progresión principiante→experto, español LATAM, C#, caso transversal **Tienda Andes**.

Fuente de verdad de navegación: `class-navigation.ts` (`ALL_CLASSES` = 3).

---

## Clase 1 — Fundamentos de POO

**Slug:** `clase-01-fundamentos-poo`  
**Outcomes:** Explicar qué es POO; distinguir clase / objeto / instancia / constructor; aplicar encapsulamiento e invariantes; leer un diagrama de clases simple.

| Página | Min |
|--------|-----|
| `fundamentos` | 35 |
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
| `herencia` | 28 |
| `override-y-sobrecarga` | 25 |
| `asociacion-agregacion-composicion` | 28 |
| `diagramas-relaciones` | 30 |
| `practica-y-cierre` | 25 |
| **Total** | **~136** |

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
| `abstraccion-clases-abstractas-interfaces` | 30 |
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

Cada clase: contenido con ejemplos → práctica/comprueba en páginas → `practica-y-cierre` (reto + miniquiz de clase).

**Gráficos:** MermaidDiagram (Archify CLI/skill no disponible en este entorno). Diagramas pedagógicos embebidos: clase↔objeto, UML del caso, despacho polimórfico, mapa SOLID.
