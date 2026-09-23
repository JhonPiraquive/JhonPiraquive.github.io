# Revisión pedagógica — POO (3 clases)

**Fecha:** 2026-09-22  
**Autor:** worker-poo-pedagogy (temp)  
**Alcance:** `src/components/teaching/lessons/poo/` (3 clases vivas + hub + currículo).  
**Criterio:** instructor CS universitario; cero OO previo → “experto principiante” en 3× ~2–3 h; ES LATAM; C#; caso **Tienda Andes**.

---

## Veredicto

La reorganización a 3 clases (`CURRICULO-3-CLASES.md`, `class-navigation.ts`) es **correcta**. Fundamentos, encapsulamiento, herencia, override/asociación y SOLID tienen **buen material** (explicar + C# + retos).

El problema principal no es falta de contenido: es **desalineación** entre lo que cada página declara (objetivos / comprueba / “siguiente”) y lo que realmente enseña, más un **hilo Tienda Andes débil** hasta el final.

---

## 1. Resultados de aprendizaje (Bloom)

| Ámbito | Estado |
|--------|--------|
| Hub (`ObjetivosAprendizajeSection`, `ResultadosAprendizajeSection`) | Claros (modelar, elegir relaciones, polimorfismo/SOLID, UML). |
| Currículo por clase | Verbos adecuados (explicar, distinguir, aplicar, evaluar). |
| Página `diagrama-clase-simple` | **Desalineada:** objetivos piden herencia/agregación/interfaces (Clase 2–3); cuerpo solo enseña **una caja**. |
| Override `ObjetivosDelTemaSection` | Lista prerrequisitos de **polimorfismo/abstracción** (Clase 3) aunque la página es Clase 2. |

---

## 2. Cadena de prerrequisitos y jerga

- **Encapsulamiento** declara prerrequisitos C#; **fundamentos** no (faltan: consola, `if`, `throw` en una frase).
- Primer uso débil en Clase 1: *dominio*, *invariante*, *objeto anémico*, *SRP* (aparece en comprueba de diagrama antes de enseñarse).
- Orden mental: “instancia” se usa en objeto **antes** de la sección Instancia (aceptable si se define en una línea al primer uso).

---

## 3. Coherencia entre clases / páginas

**Puentes de navegación rotos (hallazgo crítico):**

| Archivo | Dice “siguiente” | Debería |
|---------|------------------|---------|
| `clase-01/.../encapsulamiento/.../CierreSection.tsx` | `herencia` | `diagrama-clase-simple` |
| `clase-01/.../diagrama-clase-simple/.../ResumenSection.tsx` | `solid-principios` | práctica/cierre Clase 1 |
| `clase-02/.../asociacion-.../CierreSection` + Resumen | abstracción Clase 3 | `diagramas-relaciones` |
| `clase-02/.../diagramas-relaciones/Cierre` + Resumen | `solid-principios` | `practica-y-cierre` Clase 2 |
| `clase-03/.../polimorfismo/Cierre` + Resumen | `override-y-sobrecarga` | `solid-principios` |

**Caso Tienda Andes:** fragmentado. Dominios paralelos (Vehículo, Mensaje, Biblioteca) enseñan bien, pero la práctica “parte 2” **duplicaba** la parte 1 sin avanzar herencia/composición. Notación Mermaid inconsistente (`--|>` vs `<|--`).

---

## 4. Estructura (objetivos → explicar → ejemplo → check → práctica → quiz)

| Página | Gap |
|--------|-----|
| `diagrama-clase-simple` | Sin reto/miniquiz/cierre; comprueba pide agregación/abstracta/SRP no enseñados; orden Resumen→Comprueba. |
| `override-y-sobrecarga` | **Orden de secciones invertido** en el page lesson (Cierre/Quiz **antes** de Objetivos/contenido). |
| `diagramas-relaciones` | Sin bloque Objetivos. |
| `practica-y-cierre` (las 3) | Retos de 3 bullets; por debajo de retos de subpáginas. Clase 3 callout hablaba de “siguiente clase” al cerrar el track. |

Resto de páginas temáticas: plantilla completa y usable.

---

## 5. Brechas para principiantes / densidad / misconceptions

- Clase 1 fundamentos: densidad alta para 35 min (aceptable si el aula prioriza).
- Clase 3: **overload cognitivo** (abstractas + polimorfismo + 5 SOLID + modularidad + 2 capstones). Mitigación pedagógica: un solo entregable final Tienda Andes; modularidad como síntesis.
- Misconceptions a refuerzar: clase vs `new`; herencia usada como “tiene-un”; override vs misma firma; abstracta vs interfaz en C# (una base, muchas interfaces); DIP ≠ solo “poner interfaz”; LSP semántico en Producto/Gadget.

---

## 6. Diagramas, quizzes, retos

- **Mermaid:** buenos en fundamentos/herencia/polimorfismo; mal nivel en práctica C1 (heredaba Clase 2).
- **Quizzes** (`src/lib/teaching-quizzes/poo.ts`): por página sólidos; miniquiz Clase 3 corto (4) sin abstracta vs interfaz / LSP.
- **Retos de subpágina:** fuertes. **Retos de cierre de clase:** débiles → se refuerzan en esta pasada.

---

## 7. Acciones de mejora (esta pasada)

1. Alinear `diagrama-clase-simple` (objetivos, resumen, comprueba, orden) al nivel “una caja”.
2. Corregir puentes “siguiente” en cierres/resúmenes Clase 1–3.
3. Reordenar `OverrideYSobrecargaPageLesson`.
4. Diferenciar prácticas guiadas Tienda Andes partes 1–3; Mermaid con `<|--`.
5. Puente Clase 2→3 y misconceptions abstracta/interfaz + DIP/LSP en Clase 3.
6. Fortalecer retos/cierres de `practica-y-cierre`.
7. Actualizar `CURRICULO-3-CLASES.md` (notas pedagógicas + minutos sin cambiar mapa de páginas).

**Fuera de alcance / no hecho:** colapsar a 10 temas; rediseño de sitio; push remoto.

---

## 8. Rewrite from-zero voice (2026-09-22, worker-poo-teach-zero)

**Contexto:** la pasada anterior corrigió puentes, objetivos desalineados y práctica Tienda Andes. Esta pasada reescribe **prosa y flujo de secciones** para enseñar desde cero.

### Plantilla abandonada

No más fórmula fija por sección:

| Antes (plantilla) | Ahora |
|-------------------|--------|
| Qué es | Escena / problema del caso |
| Para qué sirve | Idea en una o dos frases |
| Señales buen/mal uso | Confusión típica o error de aula (solo si aporta) |
| Ejemplo de vida real / malas prácticas LATAM genéricas | Ejemplo C# del mismo caso (Tienda Andes) |

### Elecciones pedagógicas

1. **Cero OO asumido:** jerga (invariante, DTO, dispatch, LSP, DIP) se define en la primera aparición con palabras simples.
2. **Flujo = comprensión:** historia → problema → idea → código corto → check → subir un peldaño. No checklist de fichas.
3. **Gráficos y code:** Mermaid/CodeFiddle solo donde hacen click el concepto; sin relleno decorativo.
4. **Práctica / comprueba / reto / miniquiz:** wording alineado a la nueva voz; desde §11 viven solo en `practica-y-cierre`.
5. **Un caso:** Tienda Andes atraviesa las 3 clases; se reduce ruido de dominios juguete paralelos.
6. **Mapa de páginas:** 17 páginas (+ `objetivos` × 3) + hub; sin merge de temas. Legacy `_legacy-diagramas-completo/` sin tocar.

### Páginas reescritas (voz)

- **Clase 1:** `fundamentos` (POO/objeto/clase/instancia/constructor), `encapsulamiento`, `diagrama-clase-simple`, práctica parte 1.
- **Clase 2:** `herencia`, `override-y-sobrecarga`, `asociacion-agregacion-composicion`, `diagramas-relaciones`, práctica parte 2.
- **Clase 3:** `abstraccion-…`, `polimorfismo`, `solid-principios`, `modularidad-…`, práctica/cierre.

Ver también sección homónima en `CURRICULO-3-CLASES.md`.

---

## 9. Objetivos en hub / entrada de clase (2026-09-22, worker-poo-defs-hub-obj)

**Layout (histórico):** objetivos de módulo en el hub (`index/ObjetivosAprendizajeSection` + `ResultadosAprendizajeSection`) y objetivos de clase embebidos en la primera página de contenido (`fundamentos`, `herencia`, `abstraccion-…`). Subpáginas temáticas sin bloque Objetivos.

**Definiciones:** cada concepto núcleo lleva un “qué es X” claro en prosa from-zero (POO, objeto, clase, instancia, constructor, encapsulamiento, herencia, override, sobrecarga, asociación/agregación/composición, diagrama de clases, abstracción, abstracta, interfaz, polimorfismo, S/O/L/I/D, modularidad/cohesión/acoplamiento) antes de ejemplos cuando hacía falta reforzar.

---

## 10. Página dedicada `objetivos` por clase (2026-09-22, worker-poo-objetivos-page)

**Cambio:** cada clase abre con una página propia `…/objetivos` (~7 min) que solo presenta `clase-0*/sections/ObjetivosSection`. Las páginas de contenido `fundamentos`, `herencia` y `abstraccion-clases-abstractas-interfaces` **ya no** montan `<ObjetivosSection />` — entran directo a la enseñanza.

**Hub del track:** sigue siendo overview (objetivos/resultados de módulo + mapa). Los enlaces de “siguiente paso” apuntan a `…/objetivos` de cada clase. Aliases `poo/{tema}` sin cambio (siguen al contenido temático).

**Nav:** `class-navigation.ts` (primera página = `objetivos`); registry + prev/next vía `getPageNavChain`. Mapa: **17 páginas** + hub.

---

## 11. Práctica y validación al cierre de clase (2026-09-22, worker-poo-practice-end)

**Cambio:** las páginas de contenido (todo excepto `objetivos` y `practica-y-cierre`) ya **no** montan `CompruebaTuComprensionSection`, `Miniquiz*`, `RetoIntegradorSection` ni práctica guiada. Terminan en enseñanza + `Resumen` + `Cierre` (puente al siguiente tema).

**`practica-y-cierre` por clase** concentra, en este orden:

1. Comprueba de cada tema de la clase (secciones reutilizadas desde las carpetas de página).
2. `PracticaGuiadaSection` (nivel clase).
3. Un solo `RetoIntegradorSection` Tienda Andes (nivel clase; no se re-montan los retos de subpágina).
4. `MiniquizFinalSection` de la clase.
5. `CierreSection` de la clase.

**Módulo:** sin páginas de quiz a mitad de track; el hub conserva overview, no un exam mid-module. Aliases y slugs de nav sin cambio.
