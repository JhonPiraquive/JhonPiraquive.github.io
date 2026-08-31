## Brand

Contribución de **brand-identity-expert**. Arquetipo: **Sabio 25% + Creador 60%** en clave docente (claridad con autoridad; criterio profesional, sin jerga de moda ni tono gamer/marketing). Marca: **Jhon Alejandro Piraquive** — lección operativa del módulo **Bases de Datos**. El eslogan de marca no se usa como H1 de lección.

- **title (ES refinado):** DDL, DML, agregados y modelo relacional: de la estructura a la consulta
- **brand_tone:** academico-universitario (Sabio 25% + Creador 60% en clave docente: claridad con autoridad, sin jerga de moda ni tono gamer/marketing)
- **prev:** clase-02-fundamentos-motores-estructura
- **next:** null *(última clase publicada del módulo por ahora; CTA de cierre apunta a repaso del mapa del módulo)*

### Tono de voz

- **Registro:** académico universitario en español; baja del abecedario operativo (Clase 02) a las **sentencias** que construyen esquema y manipulan datos (DDL → DML → JOINs).
- **Persona:** segunda persona (*tú*) en introducción, práctica, reto, callouts y CTAs; impersonal o institucional en objetivos de aprendizaje.
- **Voz:** profesional, clara, confiable; enseña a **separar estructura de datos**, a **probar el WHERE antes de ejecutar** y a **elegir el JOIN según la pregunta de negocio**, no a memorizar sintaxis suelta.
- **Consistencia con el track:** mismo hilo LATAM/PYME y academias de formación (hub, Clase 01, Clase 02); caso conductor **“Rutas Digitales” (Cali)**; literal oficial `'Técnica Profesional en Configuración de Servicios Web'` y campo `Nombre_Programa`; continúa la pregunta de capas (*¿dónde vive la fuente de verdad?*) con la operativa (*¿estoy tocando estructura o datos? ¿mi WHERE está probado? ¿tengo backup?*).
- **Evitar:** hype de “SQL es fácil”, tono infantil, emojis en headings, jerga vacía, dramatizar sin criterio, citar slugs crudos en UI, confundir tutorial de clic con formación de tecnólogo.
- **Preferir:** verbos de marca (*aplicar*, *manipular*, *explicar*, *escribir*, *identificar*, *argumentar*); “módulo” / “clase” frente a “curso” genérico; nombres de clase legibles (**Clase 02 — Fundamentos, motores y estructura**, **Clase 03 — DDL, DML, agregados y modelo relacional**).

**Título:** conserva el nombre oficial de la clase y aclara función (de la estructura a la consulta). Minúsculas tras dos puntos.

### Copy de títulos de sección

Alineados a las páginas ADR 011 y al cierre pedagógico (práctica / quiz / reto):

| # / página | Título sugerido (ES) |
|------------|----------------------|
| Hub | Objetivos y mapa de la clase |
| ↳ | Checklist mental: ¿estructura o datos? |
| ddl-estructura | DDL frente a DML: el mapa de la clase |
| ↳ | Qué es DDL: definir el esquema |
| ↳ | CREATE DATABASE y DROP DATABASE |
| ↳ | CREATE TABLE, DROP TABLE y ALTER TABLE |
| ↳ | AUTO INCREMENT: identidad que genera el motor |
| ddl-restricciones | Restricciones: PK, UNIQUE y NOT NULL |
| ↳ | Llave primaria y ADD PRIMARY KEY |
| ↳ | UNIQUE: unicidad de negocio |
| ↳ | NOT NULL frente a NULL |
| dml-insert-select | DML: insertar y consultar |
| ↳ | INSERT: cargar filas |
| ↳ | SELECT: proyectar columnas |
| dml-filtros-orden | WHERE, DISTINCT, ORDER BY y LIMIT |
| agregados-group-having | Agregados, GROUP BY y HAVING |
| update-delete | UPDATE y DELETE: poder con WHERE y backup |
| relacional-fk-joins | Modelo relacional, FK y JOINs |
| ↳ | Relacional frente a ER |
| ↳ | Cardinalidad, PK y FK |
| ↳ | CREATE TABLE con CONSTRAINT |
| ↳ | INNER, LEFT y RIGHT JOIN |
| — | Errores comunes |
| — | Casos reales |
| practica-y-cierre | Práctica guiada |
| — | Miniquiz |
| — | Reto integrador: Matrículas de Rutas Digitales |
| — | Cierre |

*Opcionales de marco (si el layout los expone como H2/H3 de navegación):* Comparar WHERE vs HAVING · Malas prácticas en el mundo real · Qué sigue.

**Breadcrumb UI:** `Clase 3 / Página X de 8` + título de página (no el slug).

### CTAs

| Ubicación | Copy sugerido |
|-----------|----------------|
| Hub → primera página de contenido | Empezar: DDL frente a DML |
| Fin de página → siguiente | Continuar a la siguiente página |
| Fin de `practica-y-cierre` (sin clase 04) | Repasa el mapa del módulo Bases de Datos |
| Fin de `practica-y-cierre` (clase 04 publicada) | Continuar a la siguiente clase del módulo |
| Reto | Abrir el reto: Matrículas de Rutas Digitales |
| Quiz | Comprobar lo aprendido (miniquiz) |

Tono de CTA: compromiso académico, sin urgencia comercial ni “empieza ya”.

### Mensajes clave de marca

1. **Estructura antes que filas** — El egresado distingue DDL (esquema) de DML (datos); `DROP TABLE` no es `DELETE`.
2. **WHERE probado, backup listo** — Antes de `UPDATE`/`DELETE` en datos reales: mismo filtro en `SELECT`, contar filas, respaldar.
3. **Integridad en el motor** — PK, UNIQUE, NOT NULL y FK no son “opciones de formulario”: son reglas que el SGBD exige.
4. **El JOIN responde una pregunta** — INNER oculta no-coincidencias; LEFT las muestra con `NULL`. Elegir JOIN es elegir la pregunta de negocio.
5. **Construir con precisión** — `Nombre_Programa` sin espacios; literales con comillas simples y tildes; padres antes que hijas; PK y FK del mismo tipo.
6. **Formación de tecnólogo** — Script reproducible y orden correcto valen más que aciertos en la GUI a prueba y error.

### Callouts sugeridos

Tono: directo, universitario, anclado a criterio profesional (no alarma vacía ni hype).

1. **Checklist mental antes de ejecutar**  
   ¿Estoy cambiando la ESTRUCTURA (DDL) o los DATOS (DML)? `DROP TABLE` no es `DELETE`. `UPDATE`/`DELETE` sin `WHERE` afectan TODAS las filas. Backup antes de operaciones destructivas.

2. **Peligro: UPDATE y DELETE sin WHERE**  
   Incluye siempre `WHERE`. Sin él se afectan todos los registros. Prueba primero con `SELECT` usando el mismo filtro y cuenta filas. Recomienda dump/snapshot antes de cambios masivos o en datos reales.

3. **Padres primero, tipos iguales**  
   Crea tablas padres antes que hijas. La FK apunta a la PK (o UNIQUE) con el **mismo tipo**. El dibujo ER varía según la herramienta; el SQL es la verdad portable.

4. **INNER no es “el JOIN por defecto del negocio”**  
   Si el reporte necesita programas sin inscritos, INNER los oculta. LEFT (o RIGHT) responde otra pregunta: conserva un lado completo y marca la ausencia con `NULL`.

5. **Pregunta de cierre (hero, footer o cierre de clase)**  
   ¿Estoy tocando estructura o datos? ¿Mi WHERE está probado? ¿Tengo backup?

### Meta / SEO de marca (tono, no keywords técnicas nuevas)

- **title tag (ES):** DDL, DML, agregados y modelo relacional | Bases de Datos — Jhon Alejandro Piraquive  
- **meta description (ES, guía):** Aplica DDL y DML en SQL: CREATE/ALTER, restricciones, INSERT/SELECT, agregados, UPDATE/DELETE seguros, FK y JOINs con criterio profesional. Módulo universitario Bases de Datos.
