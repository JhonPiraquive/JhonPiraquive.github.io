## Brand

Contribución de **brand-identity-expert**. Arquetipo: **Sabio 25% + Creador 60%** en clave docente (claridad con autoridad; criterio profesional, sin jerga de moda ni tono gamer/marketing). Marca: **Jhon Alejandro Piraquive** — lección operativa del módulo **Bases de Datos**. El eslogan de marca no se usa como H1 de lección.

- **title (ES refinado):** Fundamentos, motores y estructura: el abecedario operativo
- **brand_tone:** academico-universitario (Sabio 25% + Creador 60% en clave docente: claridad con autoridad, sin jerga de moda ni tono gamer/marketing)
- **prev:** clase-01-historia-bases-de-datos
- **next:** clase-03-ddl-dml-relacional *(cuando exista; hasta entonces, CTA de cierre apunta a “próxima clase del módulo”)*

### Tono de voz

- **Registro:** académico universitario en español; baja del mapa histórico (Clase 01) al vocabulario y las capas del día a día (BD, SGBD, motor, GUI, CLI, tabla/campo/valor).
- **Persona:** segunda persona (*tú*) en introducción, práctica, reto, callouts y CTAs; impersonal o institucional en objetivos de aprendizaje.
- **Voz:** profesional, clara, confiable; enseña a **distinguir capas** y a **elegir con criterio**, no a memorizar marcas de producto.
- **Consistencia con el track:** mismo hilo LATAM/PYME y academias de formación que el hub y la Clase 01 (fuente de verdad, integridad, anti-Excel-como-BD); continúa la pregunta de cierre del módulo (*¿dónde vive la fuente de verdad?*) y la anticipa con capas (*qué motor la sostiene, con qué cliente la administras*).
- **Evitar:** hype (“Mongo porque es moderno”), tono infantil, emojis en headings, jerga vacía, confundir tutorial de clic con formación de tecnólogo, citar slugs crudos en UI.
- **Preferir:** verbos de marca (*definir*, *contrastar*, *distinguir*, *construir*, *argumentar*); “módulo” / “clase” frente a “curso” genérico; nombres de clase legibles (**Clase 01 — Historia de las bases de datos**, **Clase 02 — Fundamentos, motores y estructura**).

**Título:** conserva el nombre oficial de la clase y aclara función (abecedario operativo). Minúsculas tras dos puntos.

### Copy de títulos de sección

Alineados a las páginas ADR 011 y al cierre pedagógico (práctica / quiz / reto):

| # / página | Título sugerido (ES) |
|------------|----------------------|
| Hub | Objetivos y mapa de la clase |
| 0 (marco) | Del mapa histórico al abecedario operativo |
| qué-es-y-tipos | Qué es una base de datos y qué es un SGBD |
| ↳ | Relacional frente a NoSQL: elegir según el escenario |
| motores-y-gestores | Motores: MySQL, MariaDB y MongoDB |
| ↳ | Gestores visuales (GUI): la ventana, no el motor |
| ↳ | CLI: administrar sin ratón |
| ↳ | Motor, GUI y CLI: tres roles, una sola fuente |
| estructura-tablas-campos | Tabla, campo, registro y valor |
| ↳ | Nombres sin espacios, literales entre comillas |
| — | Errores comunes |
| — | Casos reales |
| practica-y-cierre | Práctica guiada |
| — | Miniquiz |
| — | Reto integrador: Monta el criterio de Andes Tech |
| — | Cierre |

*Opcionales de marco (si el layout los expone como H2/H3 de navegación):* Comparar escenarios · Malas prácticas en el mundo real · Qué sigue.

**Breadcrumb UI:** `Clase 2 / Página X de 4` + título de página (no el slug).

### CTAs

| Ubicación | Copy sugerido |
|-----------|----------------|
| Hub → primera página de contenido | Empezar: qué es una BD y qué es un SGBD |
| Fin de página → siguiente | Continuar a la siguiente página |
| Fin de `practica-y-cierre` (clase 03 ausente) | Repasa el mapa del módulo Bases de Datos |
| Fin de `practica-y-cierre` (clase 03 publicada) | Continuar a la Clase 03 — DDL y DML relacional |
| Reto | Abrir el reto: Monta el criterio de Andes Tech |
| Quiz | Comprobar lo aprendido (miniquiz) |

Tono de CTA: compromiso académico, sin urgencia comercial ni “empieza ya”.

### Mensajes clave de marca

1. **Capas antes que herramientas** — El egresado nombra motor, cliente y modelo; no documenta el stack solo como “usamos phpMyAdmin”.
2. **Criterio, no moda** — Relacional o documentos según integridad y forma del dato; la pregunta no es qué es moderno.
3. **Fuente de verdad compartida** — Misma línea que Clase 01 y el hub: Excel/Sheets no sustituyen un SGBD en producción multi-sede.
4. **Construir con precisión** — Identificadores sin espacios (`Nombre_Programa`); literales fieles (tildes, comillas simples): el lenguaje oficial del negocio vive en la estructura.
5. **Formación de tecnólogo** — GUI baja la barrera; CLI y diagnóstico del servicio del motor son competencia profesional, no opcional de “avanzados”.

### Callouts sugeridos

Tono: directo, universitario, anclado a criterio profesional (no alarma vacía ni hype).

1. **BD ≠ archivo compartido**  
   Si tu equipo discute «cuál Excel es el bueno», no tienes una base de datos: tienes varias copias sin motor de integridad. La BD es el conjunto organizado; el SGBD es quien lo hace usable y seguro.

2. **Inventario vs catálogo flexible**  
   Cupos, stock y facturación suelen pedir tablas SQL con integridad. Atributos que cambian por categoría pueden vivir mejor en documentos. La pregunta no es «¿qué es moderno?» sino «¿qué integridad y qué forma de dato exige el workload?».

3. **Diagnóstico rápido**  
   Si «no arranca la BD», pregunta: ¿falló el servicio del motor o solo el cliente (GUI)? Reinstalar la ventana no recupera datos que viven en el servidor.

4. **Malas prácticas transversales**  
   Excel como BD de producción · Confundir GUI con motor · Campos con espacios / literales sin comillas · NoSQL por moda en datos rígidos · Exponer phpMyAdmin o puertos del motor sin endurecer acceso.

5. **Pregunta de cierre (hero, footer o cierre de clase)**  
   ¿Dónde vive la fuente de verdad, qué motor la sostiene y con qué cliente la administrarás sin confundir las capas?

### Meta / SEO de marca (tono, no keywords técnicas nuevas)

- **title tag (ES):** Fundamentos, motores y estructura | Bases de Datos — Jhon Alejandro Piraquive  
- **meta description (ES, guía):** Distingue BD, SGBD, motor, GUI y CLI; contrasta relacional y NoSQL según el escenario; nombra tabla, campo, registro y valor con criterio profesional. Módulo universitario Bases de Datos.
