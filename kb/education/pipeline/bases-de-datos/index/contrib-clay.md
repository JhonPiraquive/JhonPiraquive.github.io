# Contrib Clay UI — Hub Bases de Datos (`index`)

Contribución de **clay-ui-expert** para fusionar en `lesson-spec.md`.  
Tokens: `kb/brand/visual-tokens.md` · ADR: `kb/decisions/003-claymorphism-rules.md`.

**UX crítico:** objetivos (3) y resultados (7) = `ClayCard` en **rejilla**; una card por ítem; número/icono; borde de acento. **Prohibido** lista plana (`<ul>`).

## Clay UI

### Tokens de acento (bordes de cards y callouts)

| Token | Hex | Uso en este hub |
|-------|-----|-----------------|
| `--color-accent` | `#6B4EFF` | `border-l-4` en cada `ClayCard` de objetivos/resultados; borde `callout-warning`; borde `PracticeExercise` |
| `--color-secondary` | `#00C2FF` | Borde `callout-info` / `callout-tip`; barra activa del stepper (`StepReveal`) |
| `--color-primary` | `#0A2540` | H2 de sección; números grandes en cards de grid; títulos de interactivos |
| `--color-neutral-light` | `#F4F6F8` | Fondo página / secciones alternas |
| `--color-neutral-white` | `#FFFFFF` | Superficie de `ClayCard` |
| `--clay-radius` | 20–28px | Todas las `ClayCard` |
| Profundidad clay | máx. 2 niveles | Nivel 1: sección/`LessonLayout`; nivel 2: cards de grid, Callout, StepReveal, PracticeExercise |

**Borde de card (objetivos/resultados):**  
`className="border-l-4 border-[var(--color-accent)]"` en cada `ClayCard` (equivalente token `--color-accent`).

### `clay_variants` por sección

| Sección TSX | H2 sugerido | Variante Clay* / props | Notas |
|-------------|-------------|------------------------|-------|
| `HeroBienvenidaSection` | — (hero) | **card** (hero panel) | Fondo primary / paneles semitransparentes; sin grid de objetivos aquí |
| `QueAprenderasSection` | Qué aprenderás | **card** | Callouts hijos: info + warning |
| `PrerrequisitosSection` | Prerrequisitos | — (prose) | Tabla markdown; sin `ClayCard` por fila |
| `ObjetivosAprendizajeSection` | Objetivos de aprendizaje | **card** × 3 en **grid** | Ver grid abajo; NO `<ul>` |
| `ResultadosAprendizajeSection` | Resultados de aprendizaje | **card** × 7 en **grid** | Ver grid abajo; NO `<ul>` |
| `ComoOrganizadoSection` | Cómo está organizado el curso | **stepper** | `StepReveal` + Mermaid + Callout tip |
| `CasoMotivadorSection` | Caso motivador | **card** | Callout info |
| `PracticaReflexionSection` | Práctica: reflexión breve | **card** (PracticeExercise) | Borde accent en wrapper |
| `RetoIntegradorSection` | Reto integrador | **card** | Callout tip |
| `CierreHubSection` | Cierre | — (prose + CTA) | Checklist prose; CTA → clase-01 |

**`clay_variants` globales (frontmatter sugerido):** `card`, `callout-info`, `callout-warning`, `callout-tip`, `stepper`.

### Grid — objetivos (3) y resultados (7)

#### ObjetivosAprendizajeSection — 3 cards

| Prop | Valor |
|------|--------|
| Contenedor | `grid grid-cols-1 md:grid-cols-3 gap-4` (móvil 1 col → desktop 3 cols) |
| Alternativa breakpoints | `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` si se prefiere 1→2→3 |
| Por ítem | Una `ClayCard` con `number` (1–3) o icono; `border-l-4 border-[var(--color-accent)]` |
| Contenido | Texto **literal** del programa (draft); sin parafrasear |
| Tipografía número | Grande, `font-bold text-[var(--color-primary)]` |
| Prohibido | `<ul>` / lista plana |

#### ResultadosAprendizajeSection — 7 cards

| Prop | Valor |
|------|--------|
| Contenedor | `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4` |
| Layout 7 ítems | Filas 3+3+1; la 7.ª ocupa una celda (sin forzar full-width salvo diseño) |
| Por ítem | Una `ClayCard` con `number` (1–7) o icono; mismo `border-l-4` accent |
| Contenido | Texto **literal** del programa (draft) |
| Prohibido | `<ul>` / lista plana |

### Jerarquía visual h2 / h3

| Nivel | Clases | Color | Dónde |
|-------|--------|-------|--------|
| H1 | `text-3xl font-bold` + heading font | inherit / hero | Título hub en layout |
| H2 | `mb-4 text-2xl font-bold text-[var(--color-primary)]` | primary | Una por sección TSX |
| H3 | `mt-6 mb-2 text-xl font-semibold` | inherit | «Qué es una base de datos», «Qué es un SGBD», «Por qué importa…», «Tienda de barrio…», «Checklist…», «Qué sigue» |
| H3 (interactivo) | `mb-3 text-lg font-semibold text-[var(--color-primary)]` | primary | Títulos internos StepReveal / PracticeExercise |
| Número en card | `text-2xl`–`text-3xl font-bold` | primary | Grid objetivos/resultados |
| Cuerpo card | `text-base` / prose | `--color-neutral-dark` | Texto oficial completo |

### Tipo Callout por bloque

| Bloque (draft) | Variante | Borde token | Sección |
|----------------|----------|-------------|---------|
| Hub, no tutorial | **callout-info** | `--color-secondary` | `HeroBienvenidaSection` |
| Errores comunes al empezar | **callout-warning** | `--color-accent` | `QueAprenderasSection` |
| Siguiente clase | **callout-tip** | `--color-secondary` | `ComoOrganizadoSection` |
| Conexión con el programa | **callout-info** | `--color-secondary` | `CasoMotivadorSection` |
| Cómo entregar el reto | **callout-tip** | `--color-secondary` | `RetoIntegradorSection` |

**Regla Callout:** `ClayCard` + `border-l-4` del token de la variante; no anidar Callout dentro de otra `ClayCard` de grid (objetivos/resultados).

### Espaciado y profundidad

- Contenedor lección: `mx-auto max-w-4xl px-6 py-12` (o el layout teaching vigente).
- Grids objetivos/resultados: `my-6` tras H2; `gap-4` entre cards.
- Interactivos: `my-6` (Callout, Mermaid) · `my-8` (StepReveal, PracticeExercise).
- Mermaid: superficie blanca `rounded-lg p-4 my-6`; **sin** `ClayCard` extra.
- StepReveal: variante **stepper**; barras activas `bg-[var(--color-secondary)]`.
- No superar 2 niveles clay: sección → card/interactivo; las cards del grid son nivel 2 respecto al layout, no anidar Callout dentro de ellas.
