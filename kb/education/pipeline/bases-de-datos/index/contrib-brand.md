## Brand

Contribución de **brand-identity-expert**. Arquetipo dominante: **Sabio** (enseñanza clara, autoridad sin arrogancia). Marca: **Jhon Alejandro Piraquive** — hub de orientación del módulo universitario **Bases de Datos**. Eslogan de marca no se usa como H1 de lección.

- **title:** `Bases de Datos: orientación al módulo`
- **brand_tone:** académico universitario, marca Jhon Alejandro Piraquive
- **prev:** `null`
- **next:** `clase-01-historia-bases-de-datos`

### Tono

- **Registro:** académico universitario en español; mapa de entrada al módulo, no tutorial ni lección técnica.
- **Persona:** segunda persona (*tú*) en bienvenida, práctica, reto y CTA; impersonal o institucional en objetivos y resultados oficiales (*el estudiante podrá…* no aplica: el texto del programa se publica **literal**).
- **Voz:** profesional, clara, confiable; orienta el recorrido antes de exigir técnica.
- **Evitar:** jerga vacía, tono infantil, hype de “sistema en cinco minutos”, estilo blog, emojis en headings, citar slugs crudos en UI (`clase-01-historia-bases-de-datos` → nombre de clase).
- **Preferir:** verbos de acción de marca (*orientar*, *construir*, *enseñar*, *argumentar*, *colaborar*); “módulo” frente a “curso” genérico en headings de este hub.

**Título:** conserva el nombre oficial del track y aclara función (orientación). Minúsculas tras dos puntos.

### Copy refinados de títulos de sección

| Sección (draft / TSX) | Copy publicado |
|-----------------------|----------------|
| Hero / bienvenida (`HeroBienvenidaSection`) | Bienvenida al módulo |
| Qué aprenderás (`QueAprenderasSection`) | Qué aprenderás en este módulo |
| ↳ Qué es una base de datos | Qué es una base de datos |
| ↳ Qué es un SGBD | Qué es un SGBD |
| ↳ Por qué importa este módulo | Por qué importa este módulo |
| Prerrequisitos (`PrerrequisitosSection`) | Prerrequisitos sugeridos |
| Objetivos de aprendizaje (`ObjetivosAprendizajeSection`) | Objetivos de aprendizaje |
| Resultados de aprendizaje (`ResultadosAprendizajeSection`) | Resultados de aprendizaje |
| Cómo está organizado el curso (`ComoOrganizadoSection`) | Cómo está organizado el módulo |
| Mermaid — Mapa de recorrido del módulo | Recorrido del módulo |
| StepReveal — Preview del recorrido | Vista previa del recorrido |
| Caso motivador PYME (`CasoMotivadorSection`) | Caso motivador: tienda de barrio |
| ↳ Tienda de barrio sin base de datos | (absorber en el H2; no duplicar como H3) |
| Práctica: reflexión breve (`PracticaReflexionSection`) | Práctica: un proceso de tu entorno |
| PracticeExercise title | Un proceso de tu entorno que merece una base de datos |
| Reto integrador (`RetoIntegradorSection`) | Reto integrador: tres hitos de la Clase 01 |
| ↳ Leer clase-01 y anotar 3 hitos | (no publicar como H3; el H2 ya lo dice) |
| Cierre (`CierreHubSection`) | Cierre: checklist antes de continuar |
| ↳ Qué sigue | Qué sigue |

**Reglas:** H2 nominal o con dos puntos; sin emojis ni “Hero”. No parafrasear el texto oficial de las ClayCard (objetivos ×3, resultados ×7). En UI, **Clase 01 — Historia de las bases de datos** (minúscula en *bases*); no mostrar el slug al estudiante.

**CTA (hero y cierre):** `Continuar a la Clase 01 — Historia de las bases de datos`

**StepReveal — títulos de paso (voz de itinerario, no de temario técnico):**

1. Hub: estás aquí
2. Clase 01 — Historia
3. Próximo: sistema gestor
4. Próximo: sistema de información y modelo
5. Próximo: lenguaje de definición, manipulación y consulta

### Callouts sugeridos (tono; sin dominio técnico nuevo)

#### 1. Hub, no tutorial — `HeroBienvenidaSection`

- **Título:** `Hub, no tutorial`
- **Variante:** info
- **Tono:** orientador, autoridad serena; delimita el espacio sin desmerecer lo que vendrá.
- **Copy refinado:** `Aquí te orientas: lees el mapa del módulo y das el primer paso. La historia de las bases de datos se estudia en la Clase 01; instalación, modelo y consultas llegan más adelante.`

#### 2. Errores comunes al empezar — `QueAprenderasSection`

- **Título:** `Errores frecuentes al empezar`
- **Variante:** warning
- **Tono:** preventivo, didáctico; señala confusiones típicas sin culpar al estudiante.
- **Copy refinado:** `No reduzcas “base de datos” a una hoja de cálculo o a un archivo suelto: datos y sistema gestor no son lo mismo. No saltes a las consultas sin leer objetivos, resultados ni el hilo del módulo. Comunicación y trabajo en equipo también se evalúan. No hace falta ser programador avanzado para completar este hub ni la Clase 01.`

#### 3. Siguiente clase — `ComoOrganizadoSection`

- **Título:** `Siguiente paso: Clase 01`
- **Variante:** tip
- **Tono:** itinerario académico; compromiso claro, sin urgencia comercial.
- **Copy refinado:** `Cuando termines este hub —objetivos, resultados, reflexión y reto— abre la Clase 01 — Historia de las bases de datos. Ahí se contextualiza por qué existen las bases de datos modernas.`

#### 4. Conexión con el programa — `CasoMotivadorSection`

- **Título:** `Conexión con el programa`
- **Variante:** info
- **Tono:** institucional y cercano; une el caso de negocio con competencias oficiales, sin adelantar técnica.
- **Copy refinado:** `Este caso no pide consultas todavía: pide ver el problema de negocio (datos inconsistentes) y el camino del módulo (modelo, sistema gestor, consultas, argumentación y trabajo en equipo).`

#### 5. Cómo entregar el reto — `RetoIntegradorSection`

- **Título:** `Cómo entregar el reto`
- **Variante:** tip
- **Tono:** expectativa clara, sobria; baja la ansiedad (“no es un ensayo”).
- **Copy refinado:** `No hace falta un ensayo: tres viñetas con el nombre del hito y por qué te parece clave bastan. El detalle histórico se estudia en la Clase 01; aquí solo te comprometes a leerla con un objetivo concreto.`

### Otros mensajes (tono)

| Bloque | Elemento | Copy / tono |
|--------|----------|-------------|
| PracticeExercise | Prompt (cierre) | Conservar la consigna del draft; tuteo cercano, 4–6 líneas, sin exigir SQL. |
| PracticeExercise | Pista 3 | `Formula una pregunta de negocio que hoy es difícil de responder con papel o un chat.` — evita nombrar marcas de mensajería en el heading; el cuerpo del caso puede conservar el contexto PYME. |
| Cierre | Ideas / checklist | Viñetas en infinitivo: *Leer*, *Revisar*, *Completar*, *Continuar*, *Anotar*. |
| Cierre | Qué sigue | `En la Clase 01 se contextualiza por qué existen las bases de datos modernas. Después el módulo avanza hacia instalación, modelo y consultas.` — itinerario, no temario adelantado. |
