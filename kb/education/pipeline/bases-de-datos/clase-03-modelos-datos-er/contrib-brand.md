## Brand

Contribución de **brand-identity-expert**. Arquetipo: **Sabio 25% + Creador 60%** en clave docente (claridad con autoridad; criterio profesional, sin jerga de moda ni tono gamer/marketing). Marca: **Jhon Alejandro Piraquive** — lección operativa del módulo **Bases de Datos**. El eslogan de marca no se usa como H1 de lección.

- **title (ES refinado):** Modelos de datos, ER, familias y tipos: diseñar antes de crear
- **title (EN):** Data models, ER, families, and types: design before you create
- **brand_tone:** academico-universitario (Sabio 25% + Creador 60% en clave docente: claridad con autoridad, sin jerga de moda ni tono gamer/marketing)
- **prev:** clase-03-ddl-dml-relacional
- **next:** clase-05-normalizacion-esquemas *(cuando exista; hasta entonces, CTA de cierre apunta a repaso del mapa del módulo)*

### Tono de voz

- **Registro:** académico universitario en español; sube del SQL operativo (Clases 02–03) al **plano del negocio** (modelo → ER → familias → transformación a tipos/PK/FK).
- **Persona:** segunda persona (*tú*) en introducción, práctica, reto, callouts y CTAs; impersonal o institucional en objetivos de aprendizaje.
- **Voz:** profesional, clara, confiable; enseña a **diseñar antes de crear**, a **fijar cardinalidad** y a **elegir familia por la forma de la pregunta**, no a dibujar diagramas “bonitos” desconectados del DDL.
- **Consistencia con el track:** mismo hilo LATAM/PYME y academias de formación (hub, Clases 01–03); caso conductor **“Rutas Digitales” (Cali)** / **“Andes Tech”**; literal oficial `'Técnica Profesional en Configuración de Servicios Web'` y campo `Nombre_Programa`; continúa la pregunta operativa (*¿estructura o datos?*) con el diseño (*¿ya validé el negocio? ¿dónde va la FK? ¿tablas, documentos o caminos?*).
- **Evitar:** hype de “NoSQL porque es moderno”, tono infantil, emojis en headings, jerga vacía, dramatizar sin criterio, citar slugs crudos en UI, confundir tutorial de clic con formación de tecnólogo, vender “estrella/copo” como normalización completa (eso es Clase 05).
- **Preferir:** verbos de marca (*explicar*, *diferenciar*, *crear*, *interpretar*, *transformar*, *comparar*, *identificar*, *argumentar*); “módulo” / “clase” frente a “curso” genérico; nombres de clase legibles (**Clase 03 — DDL, DML, agregados y modelo relacional**, **Clase 04 — Modelos de datos, ER, familias y tipos**).

**Título:** conserva el nombre oficial de la clase y aclara función (diseñar antes de crear). Minúsculas tras dos puntos.

### Títulos ADR 011 — hub y páginas internas

Cada página interna debe tener título legible en UI (nav, breadcrumb, ClassPagesNav). **No** mostrar el slug al estudiante.

| Página (slug) | Título UI (ES) | Título UI (EN) | Meta description (ES, guía) | Meta description (EN, guía) |
|---------------|----------------|----------------|-----------------------------|-----------------------------|
| *(hub)* `clase-04-modelos-datos-er` | Modelos de datos, ER, familias y tipos: diseñar antes de crear | Data models, ER, families, and types: design before you create | Diseña el modelo de datos antes del SQL: niveles conceptual, lógico y físico, diagramas ER, familias y transformación a tipos, PK y FK. Módulo universitario Bases de Datos. | Design the data model before SQL: conceptual, logical, and physical levels, ER diagrams, families, and transformation to types, PKs, and FKs. University Databases module. |
| `modelos-conceptual-logico-fisico` | Modelos: conceptual, lógico y físico | Models: conceptual, logical, and physical | Diferencia modelo de datos y niveles conceptual, lógico y físico: del requisito de negocio al DDL ejecutable, con criterio profesional. | Distinguish data models and conceptual, logical, and physical levels: from business requirements to executable DDL, with professional judgment. |
| `diagramas-er` | Diagramas entidad-relación (ER) | Entity-relationship (ER) diagrams | Crea e interpreta diagramas ER con entidades, atributos, relaciones y cardinalidad; comunica el modelo antes del CREATE TABLE. | Create and interpret ER diagrams with entities, attributes, relationships, and cardinality; communicate the model before CREATE TABLE. |
| `familias-relacional-nosql-grafos` | Familias: relacional, NoSQL y grafos | Families: relational, NoSQL, and graphs | Compara familias relacional, NoSQL y grafos por la forma de la pregunta; intro a esquemas en estrella y copo de nieve (BI). | Compare relational, NoSQL, and graph families by query shape; intro to star and snowflake schemas (BI). |
| `transformacion-tipos-llaves` | Transformación ER→SQL, tipos y llaves | ER→SQL transformation, types, and keys | Transforma el ER a tablas SQL: tipos justificados, PK, FK, padres primero e integridad referencial sin “todo VARCHAR”. | Transform the ER into SQL tables: justified types, PKs, FKs, parents first, and referential integrity—no “everything VARCHAR”. |
| `practica-y-cierre` | Práctica y cierre | Practice and wrap-up | Practica modelos y ER→SQL, resuelve el reto de Rutas Digitales / Andes Tech y comprueba el miniquiz de la Clase 04. | Practice models and ER→SQL, complete the Rutas Digitales / Andes Tech challenge, and take the Class 04 mini-quiz. |

**Nav / ClassPagesNav (etiqueta corta, si hace falta):**

| Página | Label corta (ES) | Label corta (EN) |
|--------|------------------|------------------|
| Hub | Objetivos y mapa | Objectives and map |
| modelos-conceptual-logico-fisico | Conceptual, lógico y físico | Conceptual, logical, physical |
| diagramas-er | Diagramas ER | ER diagrams |
| familias-relacional-nosql-grafos | Familias e intro BI | Families and BI intro |
| transformacion-tipos-llaves | ER→SQL, tipos y llaves | ER→SQL, types, keys |
| practica-y-cierre | Práctica y cierre | Practice and wrap-up |

**Breadcrumb UI:** `Clase 4 / Página X de 5` + título de página (no el slug). El hub no cuenta como “Página X”; las cinco páginas de contenido sí.

### Copy de títulos de sección

Alineados a las páginas ADR 011 y al cierre pedagógico (práctica / quiz / reto):

| # / página | Título sugerido (ES) | Título sugerido (EN) |
|------------|----------------------|----------------------|
| Hub | Objetivos y mapa de la clase | Learning objectives and lesson map |
| ↳ | Checklist mental de la clase | Lesson mental checklist |
| *(marco intro)* | Diseñar antes de crear | Design before you create |
| modelos-conceptual-logico-fisico | Del requisito al DDL | From requirement to DDL |
| ↳ | Qué es un modelo de datos | What a data model is |
| ↳ | Modelo conceptual | Conceptual model |
| ↳ | Modelo lógico | Logical model |
| ↳ | Modelo físico | Physical model |
| diagramas-er | Diagrama entidad-relación (ER) | Entity-relationship (ER) diagram |
| ↳ | Símbolos y cardinalidad | Symbols and cardinality |
| ↳ | Caso: Rutas Digitales y la tabla Todo | Case: Rutas Digitales and the Todo table |
| familias-relacional-nosql-grafos | Familia relacional | Relational family |
| ↳ | Familia no relacional / NoSQL | Non-relational / NoSQL family |
| ↳ | Familia de grafos | Graph family |
| ↳ | Intro: estrella frente a copo de nieve | Intro: star vs snowflake |
| transformacion-tipos-llaves | Transformación ER → SQL | ER → SQL transformation |
| ↳ | Tipos de datos SQL: criterio de elección | SQL data types: selection criteria |
| ↳ | Llave primaria (PK) | Primary key (PK) |
| ↳ | Llave foránea (FK) e integridad referencial | Foreign key (FK) and referential integrity |
| — | Errores comunes | Common mistakes |
| — | Casos reales | Real-world cases |
| practica-y-cierre | Práctica guiada | Guided practice |
| — | Miniquiz | Mini-quiz |
| — | Reto integrador: Diseño ER→SQL de Rutas Digitales / Andes Tech | Capstone: ER→SQL design for Rutas Digitales / Andes Tech |
| — | Cierre | Wrap-up |

*Opcionales de marco (si el layout los expone como H2/H3 de navegación):* Malas prácticas en el mundo real · Comparar familias · Qué sigue.

### CTAs

| Ubicación | Copy sugerido (ES) | Copy sugerido (EN) |
|-----------|--------------------|--------------------|
| Hub → primera página de contenido | Empezar: modelos conceptual, lógico y físico | Start: conceptual, logical, and physical models |
| Fin de página → siguiente | Continuar a la siguiente página | Continue to the next page |
| Fin de `practica-y-cierre` (clase 05 ausente) | Repasa el mapa del módulo Bases de Datos | Review the Databases module map |
| Fin de `practica-y-cierre` (clase 05 publicada) | Continuar a la Clase 05 — Normalización y esquemas | Continue to Class 05 — Normalization and schemas |
| Reto | Abrir el reto: Diseño ER→SQL de Rutas Digitales | Open the challenge: ER→SQL design for Rutas Digitales |
| Quiz | Comprobar lo aprendido (miniquiz) | Check what you learned (mini-quiz) |

Tono de CTA: compromiso académico, sin urgencia comercial ni “empieza ya” / “start now”.

### Mensajes clave de marca

1. **Diseñar antes de crear** — Si no puedes dibujar entidades y cardinalidad, aún no estás listo para el `CREATE TABLE`. El plano (modelo) evita rehacer el edificio (esquema).
2. **Tres niveles, un dominio** — Conceptual (negocio) → lógico (atributos, claves, cardinalidad) → físico (tipos, motor, DDL). Mezclar niveles confunde al cliente y al laboratorio.
3. **El ER comunica** — Entidades, atributos, relaciones y cardinalidad; si no lo dibujas, aún no lo entiendes. La FK vive en el lado N; N:M pide tabla puente.
4. **Familia por forma de pregunta** — Relacional (integridad tabular), documentos/clave-valor (flexibilidad o caché), grafos (caminos). Moda no es arquitectura.
5. **Tipos y llaves con criterio** — No “todo `VARCHAR`”; PK estable; FK del mismo tipo que la PK; padres antes que hijas; integridad en el motor.
6. **Formación de tecnólogo** — Argumentar con lenguaje técnico expandido (ER, PK, FK, cardinalidad) ante un coordinador no programador vale más que un diagrama desconectado del SQL.

### Callouts sugeridos

Tono: directo, universitario, anclado a criterio profesional (no alarma vacía ni hype).

1. **Diseñar antes de crear**  
   Si no puedes dibujar entidades y cardinalidad, aún no estás listo para el `CREATE TABLE`. El plano (modelo) evita rehacer el edificio (esquema).

2. **Checklist mental de la clase**  
   ¿Ya validé el negocio (conceptual)? ¿Fijé cardinalidad (lógico)? ¿Elegí tipos y motor (físico)? ¿La FK está en el lado N? ¿N:M tiene tabla puente? ¿No es “todo VARCHAR”?

3. **Tip: padres primero**  
   Primero… luego…: crea Programas y Estudiantes antes que Inscripciones. Si inviertes el orden, el script falla porque la FK no encuentra al padre.

4. **Familia ≠ moda**  
   Matrículas y pagos piden integridad relacional; un catálogo con módulos variables puede vivir en documentos; “quién estudió con quién” puede pedir caminos. Elige por la pregunta, no por el hype.

5. **Pregunta de cierre (hero, footer o cierre de clase)**  
   ¿Ya validé el negocio? ¿Dónde va la FK? ¿Este problema pide tablas, documentos o caminos?

**EN mirrors (callouts):**

1. **Design before you create** — If you cannot sketch entities and cardinality, you are not ready for `CREATE TABLE`. The blueprint (model) keeps you from rebuilding the building (schema).
2. **Lesson mental checklist** — Business validated (conceptual)? Cardinality fixed (logical)? Types and engine chosen (physical)? FK on the N side? Bridge table for N:M? Not “everything VARCHAR”?
3. **Tip: parents first** — Create Programas and Estudiantes before Inscripciones. Reverse the order and the FK cannot find its parent.
4. **Family ≠ fashion** — Enrollments and payments need relational integrity; a flexible course catalog may fit documents; “who studied with whom” may need paths. Choose by the question, not the hype.
5. **Closing question** — Have I validated the business? Where does the FK go? Does this problem need tables, documents, or paths?

### Meta / SEO de marca (tono, no keywords técnicas nuevas)

- **title tag (ES):** Modelos de datos, ER, familias y tipos | Bases de Datos — Jhon Alejandro Piraquive
- **title tag (EN):** Data models, ER, families, and types | Databases — Jhon Alejandro Piraquive
- **meta description (ES, guía):** Diseña modelos conceptual, lógico y físico; interpreta diagramas ER; compara familias relacional, NoSQL y grafos; transforma a SQL con tipos, PK y FK. Módulo universitario Bases de Datos.
- **meta description (EN, guía):** Design conceptual, logical, and physical models; read ER diagrams; compare relational, NoSQL, and graph families; transform to SQL with types, PKs, and FKs. University Databases module.

**Por página (title tag corto, si SEO los pide aparte del hub):**

| Página | title tag (ES) | title tag (EN) |
|--------|----------------|----------------|
| Hub | Modelos de datos, ER, familias y tipos \| Bases de Datos — Jhon Alejandro Piraquive | Data models, ER, families, and types \| Databases — Jhon Alejandro Piraquive |
| modelos-conceptual-logico-fisico | Conceptual, lógico y físico \| Clase 04 Bases de Datos | Conceptual, logical, and physical \| Class 04 Databases |
| diagramas-er | Diagramas ER \| Clase 04 Bases de Datos | ER diagrams \| Class 04 Databases |
| familias-relacional-nosql-grafos | Relacional, NoSQL y grafos \| Clase 04 Bases de Datos | Relational, NoSQL, and graphs \| Class 04 Databases |
| transformacion-tipos-llaves | ER→SQL, tipos y llaves \| Clase 04 Bases de Datos | ER→SQL, types, and keys \| Class 04 Databases |
| practica-y-cierre | Práctica y cierre \| Clase 04 Bases de Datos | Practice and wrap-up \| Class 04 Databases |
