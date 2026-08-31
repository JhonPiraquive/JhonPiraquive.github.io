## Brand

Contribución de **brand-identity-expert**. Arquetipo: **Sabio 25% + Creador 60%** en clave docente (claridad con autoridad; criterio profesional, sin jerga de moda ni tono gamer/marketing). Marca: **Jhon Alejandro Piraquive** — lección operativa del módulo **Bases de Datos**. El eslogan de marca no se usa como H1 de lección.

- **title (ES refinado):** DCL, TCL, vistas, funciones, procedimientos y triggers: más allá de SELECT
- **title (EN):** DCL, TCL, views, functions, procedures, and triggers: beyond SELECT
- **brand_tone:** academico-universitario (Sabio 25% + Creador 60% en clave docente: claridad con autoridad, sin jerga de moda ni tono gamer/marketing)
- **prev:** clase-05-normalizacion-esquemas
- **next:** null *(última clase del módulo actual; CTA de cierre apunta a repaso del mapa del módulo)*

### Tono de voz

- **Registro:** académico universitario en español; completa el abecedario SQL (Clase 03: DDL/DML) con **DCL/TCL** y objetos de servidor, tras el diseño limpio (Clases 04–05).
- **Persona:** segunda persona (*tú*) en introducción, práctica, reto, callouts y CTAs; impersonal o institucional en objetivos de aprendizaje.
- **Voz:** profesional, clara, confiable; enseña a **etiquetar la familia** antes de ejecutar, a **mínimo privilegio**, a **atomicidad multi-tabla** y a **decidir app vs BD**, no a memorizar sintaxis de admin suelta.
- **Consistencia con el track:** mismo hilo LATAM/PYME y academias de formación; caso conductor **“Rutas Digitales” (Cali)** / laboratorio **“Andes Tech”**; literal oficial `'Técnica Profesional en Configuración de Servicios Web'` y campo `Nombre_Programa`; continúa la pregunta de limpieza (*¿DF? ¿forma?*) con la operativa de producción (*¿etiqueté la familia? ¿mínimo privilegio? ¿transacción corta? ¿esta regla va en app o en el motor?*).
- **Evitar:** hype de “todo en triggers”, tono infantil, emojis en headings, jerga vacía, dramatizar sin criterio, citar slugs crudos en UI, normalizar `root` compartido o `GRANT ALL` como hábito de laboratorio que llega a producción, confundir POSW ACID genérico con esta clase del track.
- **Preferir:** verbos de marca (*ubicar*, *aplicar*, *usar*, *explicar*, *crear*, *decidir*, *argumentar*); “módulo” / “clase” frente a “curso” genérico; nombres de clase legibles (**Clase 05 — Normalización…**, **Clase 06 — DCL, TCL, vistas, funciones, procedimientos y triggers**).

**Título:** conserva el nombre oficial de la clase y aclara función (más allá de SELECT). Minúsculas tras dos puntos.

### Títulos ADR 011 — hub y páginas internas

Cada página interna debe tener título legible en UI (nav, breadcrumb, ClassPagesNav). **No** mostrar el slug al estudiante.

| Página (slug) | Título UI (ES) | Título UI (EN) | Meta description (ES, guía) | Meta description (EN, guía) |
|---------------|----------------|----------------|-----------------------------|-----------------------------|
| *(hub)* `clase-06-dcl-tcl-objetos-bd` | DCL, TCL, vistas, funciones, procedimientos y triggers: más allá de SELECT | DCL, TCL, views, functions, procedures, and triggers: beyond SELECT | Amplía SQL: DCL/GRANT, TCL/ACID, vistas, UDF, procedimientos y triggers con criterio app vs BD. Módulo universitario Bases de Datos. | Expand SQL: DCL/GRANT, TCL/ACID, views, UDFs, procedures, and triggers with app-vs-DB judgment. University Databases module. |
| `mapa-sql-familias` | Mapa de familias SQL | SQL families map | Ubica DDL, DML, DCL y TCL con acrónimos expandidos y ejemplos; puente desde la Clase 03. | Place DDL, DML, DCL, and TCL with expanded acronyms and examples; bridge from Class 03. |
| `dcl-grant-revoke` | DCL: GRANT y REVOKE | DCL: GRANT and REVOKE | Aplica GRANT/REVOKE en MySQL/MariaDB con mínimo privilegio; evita root compartido y GRANT ALL por costumbre. | Apply GRANT/REVOKE in MySQL/MariaDB with least privilege; avoid shared root and habit GRANT ALL. |
| `tcl-transacciones-acid` | TCL y ACID | TCL and ACID | Usa transacciones COMMIT/ROLLBACK/SAVEPOINT y explica ACID con inscripción atómica (cupo + matrícula). | Use COMMIT/ROLLBACK/SAVEPOINT transactions and explain ACID with atomic enrollment (quota + insert). |
| `vistas` | Vistas | Views | Crea y consulta vistas; proyección segura vs tabla base; limitaciones honestas. | Create and query views; safe projection vs base tables; honest limitations. |
| `funciones-procedimientos-triggers` | Funciones, procedimientos y triggers | Functions, procedures, and triggers | Explica UDF, PROCEDURE y TRIGGER; decide cuándo la lógica va en la app vs en la BD. | Explain UDFs, PROCEDURES, and TRIGGERS; decide when logic belongs in the app vs the DB. |
| `practica-y-cierre` | Práctica y cierre | Practice and wrap-up | Practica DCL/TCL y objetos, resuelve el reto de matrícula segura y comprueba el miniquiz de la Clase 06. | Practice DCL/TCL and objects, complete the secure enrollment challenge, and take the Class 06 mini-quiz. |

**Nav / ClassPagesNav (etiqueta corta, si hace falta):**

| Página | Label corta (ES) | Label corta (EN) |
|--------|------------------|------------------|
| Hub | Objetivos y mapa | Objectives and map |
| mapa-sql-familias | Familias SQL | SQL families |
| dcl-grant-revoke | DCL GRANT/REVOKE | DCL GRANT/REVOKE |
| tcl-transacciones-acid | TCL y ACID | TCL and ACID |
| vistas | Vistas | Views |
| funciones-procedimientos-triggers | UDF, SP y triggers | UDFs, SPs, triggers |
| practica-y-cierre | Práctica y cierre | Practice and wrap-up |

**Breadcrumb UI:** `Clase 6 / Página X de 6` + título de página (no el slug). El hub no cuenta como “Página X”; las seis páginas de contenido sí.

### Copy de títulos de sección

Alineados a las páginas ADR 011 y al cierre pedagógico (práctica / quiz / reto):

| # / página | Título sugerido (ES) | Título sugerido (EN) |
|------------|----------------------|----------------------|
| Hub | Objetivos y mapa de la clase | Learning objectives and lesson map |
| ↳ | Checklist mental de la clase | Lesson mental checklist |
| *(marco intro)* | Más allá de SELECT | Beyond SELECT |
| mapa-sql-familias | Del abecedario completo | The full alphabet |
| ↳ | DDL / DML / DCL / TCL | DDL / DML / DCL / TCL |
| dcl-grant-revoke | Qué es DCL | What DCL is |
| ↳ | Usuarios y roles | Users and roles |
| ↳ | GRANT y REVOKE | GRANT and REVOKE |
| ↳ | Mínimo privilegio | Least privilege |
| tcl-transacciones-acid | Transacciones | Transactions |
| ↳ | ACID | ACID |
| ↳ | COMMIT, ROLLBACK y SAVEPOINT | COMMIT, ROLLBACK, and SAVEPOINT |
| vistas | CREATE VIEW y consulta | CREATE VIEW and query |
| ↳ | Vista frente a tabla | View versus table |
| funciones-procedimientos-triggers | UDF (función definida por el usuario) | UDF (user-defined function) |
| ↳ | PROCEDURE (procedimiento almacenado) | PROCEDURE (stored procedure) |
| ↳ | TRIGGER | TRIGGER |
| ↳ | Criterio: ¿app o BD? | Criterion: app or DB? |
| — | Errores comunes | Common mistakes |
| — | Casos reales | Real-world cases |
| practica-y-cierre | Práctica guiada | Guided practice |
| — | Miniquiz | Mini-quiz |
| — | Reto integrador: Matrícula segura en Rutas Digitales / Andes Tech | Capstone: Secure enrollment at Rutas Digitales / Andes Tech |
| — | Cierre | Wrap-up |

*Opcionales de marco (si el layout los expone como H2/H3 de navegación):* Malas prácticas en el mundo real · Rutinas en el sandbox · Qué sigue.

### CTAs

| Ubicación | Copy sugerido (ES) | Copy sugerido (EN) |
|-----------|--------------------|--------------------|
| Hub → primera página de contenido | Empezar: mapa de familias SQL | Start: SQL families map |
| Fin de página → siguiente | Continuar a la siguiente página | Continue to the next page |
| Fin de `practica-y-cierre` | Repasa el mapa del módulo Bases de Datos | Review the Databases module map |
| Reto | Abrir el reto: Matrícula segura en Rutas Digitales | Open the challenge: Secure enrollment at Rutas Digitales |
| Quiz | Comprobar lo aprendido (miniquiz) | Check what you learned (mini-quiz) |

Tono de CTA: compromiso académico, sin urgencia comercial ni “empieza ya” / “start now”.

### Mensajes clave de marca

1. **Más allá de SELECT** — Permisos, atomicidad y objetos de servidor no son “extras de admin”: son el freno cuando el SQL falla humano o la red cae a mitad de una inscripción.
2. **Etiqueta la familia** — DDL (estructura), DML (filas), DCL (permisos), TCL (confirmación). `DELETE` no es `REVOKE`; `DROP` no es `ROLLBACK`.
3. **Mínimo privilegio** — Nada de `root` compartido ni `GRANT ALL` “para que funcione el lab” como hábito de producción.
4. **Todo o nada** — Inscripción + cupo juntos: `START TRANSACTION` … `COMMIT` / `ROLLBACK`. ACID se argumenta con Atomicity en el ejemplo.
5. **Vista = proyección, no copia mágica** — Simplifica y oculta columnas; no sustituye tablas base ni integridad.
6. **UDF = valor; PROCEDURE = proceso; trigger = automático** — Y el criterio **app vs BD** evita monolitos opacos y basura sin FK.
7. **Formación de tecnólogo** — Expandir DCL/TCL/ACID/UDF ante un coordinador y documentar límites de hosting vale más que un script “que funciona” con root.

### Callouts sugeridos

Tono: directo, universitario, anclado a criterio profesional (no alarma vacía ni hype).

1. **Más allá de SELECT**  
   Permisos, atomicidad y objetos de servidor no son “extras de admin”: son el freno de emergencia cuando el SQL falla humano o la red cae a mitad de una inscripción.

2. **Checklist mental de la clase**  
   ¿Etiqueté la familia (DDL/DML/DCL/TCL)? ¿Mínimo privilegio? ¿Operación multi-tabla con transacción corta? ¿Vista para proyección, no copia mágica? ¿Función = valor, procedimiento = proceso, trigger = automático? ¿Esta regla va en app o en BD?

3. **Root compartido**  
   Un solo `root` para toda la academia es un incidente esperando a pasar. Usuarios de propósito (app, reporte) con `GRANT` acotado.

4. **Rutinas en el sandbox**  
   Si el entorno no permite `CREATE ROUTINE` / triggers, el SQL se muestra como referencia ejecutable en Workbench/MariaDB local; documenta el plan B en la app.

5. **Triggers encadenados**  
   Un trigger delgado de auditoría es útil; encadenar lógica oculta entre varios vuelve imposible depurar. Preferir FK + transacciones cortas + app para APIs externas.

6. **Pregunta de cierre (hero, footer o cierre de clase)**  
   ¿Etiqueté la familia? ¿Mínimo privilegio? ¿Transacción corta? ¿Esta regla va en app o en el motor?

**EN mirrors (callouts):**

1. **Beyond SELECT** — Permissions, atomicity, and server objects are emergency brakes when humans or networks fail mid-enrollment.
2. **Lesson mental checklist** — Family labeled? Least privilege? Short multi-table transaction? View for projection? Function=value, procedure=process, trigger=automatic? App or DB?
3. **Shared root** — One root for the whole academy is an incident waiting to happen. Purpose users with scoped GRANT.
4. **Routines in the sandbox** — If the host blocks routines/triggers, show SQL as local Workbench/MariaDB reference and document the app plan B.
5. **Chained triggers** — A thin audit trigger helps; hidden cascades make debugging impossible.
6. **Closing question** — Did I label the family? Least privilege? Short transaction? Does this rule live in the app or the engine?

### Meta / SEO de marca (tono, no keywords técnicas nuevas)

- **title tag (ES):** DCL, TCL, vistas, funciones y triggers | Bases de Datos — Jhon Alejandro Piraquive
- **title tag (EN):** DCL, TCL, views, functions, and triggers | Databases — Jhon Alejandro Piraquive
- **meta description (ES, guía):** Completa el mapa SQL con DCL (GRANT/REVOKE), TCL y ACID, vistas, UDF, procedimientos y triggers; decide app vs BD. Módulo universitario Bases de Datos.
- **meta description (EN, guía):** Complete the SQL map with DCL (GRANT/REVOKE), TCL and ACID, views, UDFs, procedures, and triggers; decide app vs DB. University Databases module.

**Por página (title tag corto, si SEO los pide aparte del hub):**

| Página | title tag (ES) | title tag (EN) |
|--------|----------------|----------------|
| Hub | DCL, TCL, vistas, funciones y triggers \| Bases de Datos — Jhon Alejandro Piraquive | DCL, TCL, views, functions, and triggers \| Databases — Jhon Alejandro Piraquive |
| mapa-sql-familias | Familias SQL DDL DML DCL TCL \| Clase 06 Bases de Datos | SQL families DDL DML DCL TCL \| Class 06 Databases |
| dcl-grant-revoke | GRANT y REVOKE \| Clase 06 Bases de Datos | GRANT and REVOKE \| Class 06 Databases |
| tcl-transacciones-acid | TCL y ACID \| Clase 06 Bases de Datos | TCL and ACID \| Class 06 Databases |
| vistas | Vistas SQL \| Clase 06 Bases de Datos | SQL views \| Class 06 Databases |
| funciones-procedimientos-triggers | UDF, PROCEDURE y TRIGGER \| Clase 06 Bases de Datos | UDF, PROCEDURE, and TRIGGER \| Class 06 Databases |
| practica-y-cierre | Práctica y cierre \| Clase 06 Bases de Datos | Practice and wrap-up \| Class 06 Databases |
