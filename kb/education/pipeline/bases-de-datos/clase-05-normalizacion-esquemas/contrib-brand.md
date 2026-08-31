## Brand

Contribución de **brand-identity-expert**. Arquetipo: **Sabio 25% + Creador 60%** en clave docente (claridad con autoridad; criterio profesional, sin jerga de moda ni tono gamer/marketing). Marca: **Jhon Alejandro Piraquive** — lección operativa del módulo **Bases de Datos**. El eslogan de marca no se usa como H1 de lección.

- **title (ES refinado):** Normalización, desnormalización y copo de nieve: limpiar el diseño
- **title (EN):** Normalization, denormalization, and snowflake: clean the design
- **brand_tone:** academico-universitario (Sabio 25% + Creador 60% en clave docente: claridad con autoridad, sin jerga de moda ni tono gamer/marketing)
- **prev:** clase-04-modelos-datos-er
- **next:** clase-06-dcl-tcl-objetos-bd *(cuando exista publicada; hasta entonces, CTA de cierre apunta a repaso del mapa del módulo)*

### Tono de voz

- **Registro:** académico universitario en español; baja del plano de diseño (Clase 04: ER → tipos/PK/FK) al **método de limpieza** (redundancia → DF → 1FN/2FN/3FN → desnormalización consciente → estrella/copo en BI).
- **Persona:** segunda persona (*tú*) en introducción, práctica, reto, callouts y CTAs; impersonal o institucional en objetivos de aprendizaje.
- **Voz:** profesional, clara, confiable; enseña a **listar DFs antes de jerga**, a **ejecutar formas con checklist**, y a **desnormalizar con política** (no improvisar el día 1), no a memorizar siglas vacías.
- **Consistencia con el track:** mismo hilo LATAM/PYME y academias de formación (hub, Clases 01–04); caso conductor **“Rutas Digitales” (Cali)** / **“Andes Tech”**; literal oficial `'Técnica Profesional en Configuración de Servicios Web'` y campo `Nombre_Programa`; continúa el diseño (*¿ya validé el negocio?*) con la limpieza (*¿listé DFs? ¿qué extraje en cada forma? ¿esta redundancia es accidente o política? ¿OLTP o hecho+dims?*).
- **Evitar:** hype de “normalizar siempre / nunca JOINs”, tono infantil, emojis en headings, jerga vacía, dramatizar sin criterio, citar slugs crudos en UI, confundir estrella/copo con el ER operacional (OLTP), vender BCNF como descomposición formal completa del curso.
- **Preferir:** verbos de marca (*explicar*, *definir*, *aplicar*, *argumentar*, *distinguir*, *identificar*); “módulo” / “clase” frente a “curso” genérico; nombres de clase legibles (**Clase 04 — Modelos de datos, ER, familias y tipos**, **Clase 05 — Normalización, desnormalización y copo de nieve**).

**Título:** conserva el nombre oficial de la clase y aclara función (limpiar el diseño). Minúsculas tras dos puntos.

### Títulos ADR 011 — hub y páginas internas

Cada página interna debe tener título legible en UI (nav, breadcrumb, ClassPagesNav). **No** mostrar el slug al estudiante.

| Página (slug) | Título UI (ES) | Título UI (EN) | Meta description (ES, guía) | Meta description (EN, guía) |
|---------------|----------------|----------------|-----------------------------|-----------------------------|
| *(hub)* `clase-05-normalizacion-esquemas` | Normalización, desnormalización y copo de nieve: limpiar el diseño | Normalization, denormalization, and snowflake: clean the design | Limpia el esquema: redundancia, dependencia funcional, 1FN–3FN, desnormalización consciente y estrella vs copo de nieve en BI. Módulo universitario Bases de Datos. | Clean the schema: redundancy, functional dependency, 1NF–3NF, conscious denormalization, and star vs snowflake in BI. University Databases module. |
| `redundancia-y-dependencia-funcional` | Redundancia y dependencia funcional | Redundancy and functional dependency | Detecta redundancia y anomalías; define dependencia funcional (A → B) como base para ejecutar las formas normales. | Spot redundancy and anomalies; define functional dependency (A → B) as the basis for normal forms. |
| `formas-normales-1-2-3` | Formas normales 1FN, 2FN y 3FN | Normal forms 1NF, 2NF, and 3NF | Aplica el procedimiento 1FN → 2FN → 3FN con checklist, antes/después SQL y mención BCNF. | Apply the 1NF → 2NF → 3NF procedure with checklists, before/after SQL, and a BCNF mention. |
| `desnormalizacion` | Desnormalización | Denormalization | Argumenta cuándo desnormalizar con política (snapshot, lecturas, rendimiento) y qué riesgos aceptas. | Argue when to denormalize with policy (snapshots, reads, performance) and which risks you accept. |
| `estrella-y-copo-de-nieve` | Estrella y copo de nieve | Star and snowflake | Distingue esquema en estrella vs copo de nieve (snowflake) en BI; no confundir con el OLTP. | Distinguish star vs snowflake schemas in BI; do not confuse them with OLTP. |
| `practica-y-cierre` | Práctica y cierre | Practice and wrap-up | Practica normalización y BI, resuelve el reto de Rutas Digitales / Andes Tech y comprueba el miniquiz de la Clase 05. | Practice normalization and BI, complete the Rutas Digitales / Andes Tech challenge, and take the Class 05 mini-quiz. |

**Nav / ClassPagesNav (etiqueta corta, si hace falta):**

| Página | Label corta (ES) | Label corta (EN) |
|--------|------------------|------------------|
| Hub | Objetivos y mapa | Objectives and map |
| redundancia-y-dependencia-funcional | Redundancia y DF | Redundancy and FD |
| formas-normales-1-2-3 | Formas 1FN–3FN | Forms 1NF–3NF |
| desnormalizacion | Desnormalización | Denormalization |
| estrella-y-copo-de-nieve | Estrella y copo | Star and snowflake |
| practica-y-cierre | Práctica y cierre | Practice and wrap-up |

**Breadcrumb UI:** `Clase 5 / Página X de 5` + título de página (no el slug). El hub no cuenta como “Página X”; las cinco páginas de contenido sí.

### Copy de títulos de sección

Alineados a las páginas ADR 011 y al cierre pedagógico (práctica / quiz / reto):

| # / página | Título sugerido (ES) | Título sugerido (EN) |
|------------|----------------------|----------------------|
| Hub | Objetivos y mapa de la clase | Learning objectives and lesson map |
| ↳ | Checklist mental de la clase | Lesson mental checklist |
| *(marco intro)* | Limpiar el diseño (y saber cuándo no) | Clean the design (and know when not to) |
| redundancia-y-dependencia-funcional | Del Excel sucio a las reglas del esquema | From dirty spreadsheet to schema rules |
| ↳ | Redundancia | Redundancy |
| ↳ | Dependencia funcional (DF) | Functional dependency (FD) |
| formas-normales-1-2-3 | Visión general: cómo ejecutar las formas | Overview: how to run the forms |
| ↳ | 1FN (primera forma normal) | 1NF (first normal form) |
| ↳ | 2FN (segunda forma normal) | 2NF (second normal form) |
| ↳ | 3FN (tercera forma normal) | 3NF (third normal form) |
| ↳ | Mención BCNF | BCNF mention |
| desnormalizacion | Desnormalización consciente | Conscious denormalization |
| ↳ | Snapshot de factura | Invoice snapshot |
| estrella-y-copo-de-nieve | Esquema en estrella | Star schema |
| ↳ | Esquema en copo de nieve | Snowflake schema |
| — | Errores comunes | Common mistakes |
| — | Casos reales | Real-world cases |
| practica-y-cierre | Práctica guiada | Guided practice |
| — | Miniquiz | Mini-quiz |
| — | Reto integrador: De la sábana al esquema limpio — Rutas Digitales / Andes Tech | Capstone: From dirty sheet to clean schema — Rutas Digitales / Andes Tech |
| — | Cierre | Wrap-up |

*Opcionales de marco (si el layout los expone como H2/H3 de navegación):* Malas prácticas en el mundo real · Qué sigue.

### CTAs

| Ubicación | Copy sugerido (ES) | Copy sugerido (EN) |
|-----------|--------------------|--------------------|
| Hub → primera página de contenido | Empezar: redundancia y dependencia funcional | Start: redundancy and functional dependency |
| Fin de página → siguiente | Continuar a la siguiente página | Continue to the next page |
| Fin de `practica-y-cierre` (clase 06 ausente) | Repasa el mapa del módulo Bases de Datos | Review the Databases module map |
| Fin de `practica-y-cierre` (clase 06 publicada) | Continuar a la Clase 06 — DCL, TCL y objetos | Continue to Class 06 — DCL, TCL, and objects |
| Reto | Abrir el reto: De la sábana al esquema limpio | Open the challenge: From dirty sheet to clean schema |
| Quiz | Comprobar lo aprendido (miniquiz) | Check what you learned (mini-quiz) |

Tono de CTA: compromiso académico, sin urgencia comercial ni “empieza ya” / “start now”.

### Mensajes clave de marca

1. **Limpiar el diseño** — Un ER que “abre” no basta: si el mismo hecho se repite en mil filas y se corrige a medias, los reportes mienten.
2. **DF primero, jerga después** — *Si conozco A, determino B*. Sin DFs, 1FN/2FN/3FN son adjetivos vacíos.
3. **Procedimiento, no belleza** — 1FN (atómico) → 2FN (sin parciales) → 3FN (sin transitivas); BCNF se menciona como refuerzo, no como tesis formal.
4. **Desnormalizar con política** — Snapshot, lecturas, rendimiento: decisión posterior, documentada, con dueño de la verdad. No es “odiar el JOIN” ni improvisar el día 1.
5. **Estrella/copo ≠ OLTP** — Hechos + dimensiones son BI/analítica; tener FK en matrículas no te convierte en estrella.
6. **Formación de tecnólogo** — Argumentar con 1FN, DF y BI expandidos ante un coordinador no programador vale más que “tablas bonitas”.

### Callouts sugeridos

Tono: directo, universitario, anclado a criterio profesional (no alarma vacía ni hype).

1. **Normalizar no es odio al JOIN**  
   Normalizar pone cada hecho en su dueño lógico. Desnormalizar no es odio al diseño: es una decisión posterior, documentada, con dueño de la verdad y sync o inmutabilidad.

2. **Checklist mental de la clase**  
   ¿Hay redundancia no controlada? ¿Listé DFs? ¿1FN (atómico)? ¿2FN (sin parciales)? ¿3FN (sin transitivas)? ¿Desnormalizo con política? ¿Estrella/copo es analítica, no el OLTP?

3. **Tip: DF primero, jerga después**  
   Antes de decir “esto viola 2FN”, escribe A → B. La dependencia es el input; la forma es el checklist.

4. **Desnormalizar no es odio al diseño**  
   Congelar `Nombre_Programa` en una factura histórica puede ser correcto. Copiar el mismo nombre en cuatro tablas OLTP sin sync no lo es.

5. **Estrella ≠ ER operacional**  
   Hechos + dimensiones son una forma analítica. Tener FK en el OLTP no te convierte automáticamente en estrella ni en copo.

6. **Pregunta de cierre (hero, footer o cierre de clase)**  
   ¿Listé DFs? ¿Qué extraje en cada forma? ¿Esta redundancia es accidente o política? ¿Este dibujo es OLTP o hecho+dims?

**EN mirrors (callouts):**

1. **Normalization is not hatred of JOINs** — Put each fact with its logical owner. Denormalization is a later, documented decision with a source of truth and sync or immutability.
2. **Lesson mental checklist** — Uncontrolled redundancy? FDs listed? 1NF atomic? 2NF no partials? 3NF no transitives? Denormalize with policy? Star/snowflake is analytics, not OLTP?
3. **Tip: FD first, jargon later** — Write A → B before saying “this violates 2NF.”
4. **Denormalization is not design hatred** — Freezing a name on a historical invoice can be right; copying it across four OLTP tables without sync is not.
5. **Star ≠ operational ER** — Facts + dimensions are analytic; FKs in OLTP do not make a star.
6. **Closing question** — Did I list FDs? What did I extract per form? Is this redundancy accident or policy? Is this drawing OLTP or fact+dims?

### Meta / SEO de marca (tono, no keywords técnicas nuevas)

- **title tag (ES):** Normalización, desnormalización y copo de nieve | Bases de Datos — Jhon Alejandro Piraquive
- **title tag (EN):** Normalization, denormalization, and snowflake | Databases — Jhon Alejandro Piraquive
- **meta description (ES, guía):** Aplica redundancia, DF, 1FN–3FN y BCNF; argumenta desnormalización consciente; distingue estrella vs copo de nieve en BI. Módulo universitario Bases de Datos.
- **meta description (EN, guía):** Apply redundancy, FDs, 1NF–3NF and BCNF; argue conscious denormalization; distinguish star vs snowflake in BI. University Databases module.

**Por página (title tag corto, si SEO los pide aparte del hub):**

| Página | title tag (ES) | title tag (EN) |
|--------|----------------|----------------|
| Hub | Normalización, desnormalización y copo de nieve \| Bases de Datos — Jhon Alejandro Piraquive | Normalization, denormalization, and snowflake \| Databases — Jhon Alejandro Piraquive |
| redundancia-y-dependencia-funcional | Redundancia y DF \| Clase 05 Bases de Datos | Redundancy and FD \| Class 05 Databases |
| formas-normales-1-2-3 | Formas normales 1FN–3FN \| Clase 05 Bases de Datos | Normal forms 1NF–3NF \| Class 05 Databases |
| desnormalizacion | Desnormalización \| Clase 05 Bases de Datos | Denormalization \| Class 05 Databases |
| estrella-y-copo-de-nieve | Estrella y copo de nieve \| Clase 05 Bases de Datos | Star and snowflake \| Class 05 Databases |
| practica-y-cierre | Práctica y cierre \| Clase 05 Bases de Datos | Practice and wrap-up \| Class 05 Databases |
