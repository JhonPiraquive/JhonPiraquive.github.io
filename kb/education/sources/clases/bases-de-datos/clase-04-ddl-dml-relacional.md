# Clase 3 — DDL, DML, agregados y bases de datos relacionales

Fuente docente aportada por el usuario (2026-08-27). Texto de tablas de sentencias **literal**. Expandir todo acrónimo.

## DDL — Data Definition Language (Lenguaje de Definición de Datos)

### Qué es / qué significa / para qué sirve
Explicar DDL (Data Definition Language — Lenguaje de Definición de Datos): define y modifica la estructura (esquema), no los datos de negocio.

### Sentencias (incluir TODAS)

| SENTENCIA | DESCRIPCIÓN |
|-----------|-------------|
| CREATE DATABASE | Crea una base de datos. |
| DROP DATABASE | Elimina una base de datos. |
| CREATE TABLE | Crea una tabla. |
| DROP TABLE | Elimina una tabla. |
| ALTER TABLE | Agrega, modifica y elimina columnas. |
| AUTO INCREMENT Field | Permite que se genere automáticamente un número único cuando se inserta un nuevo registro en una tabla. |

### Restricciones

| RESTRICCIONES | DESCRIPCIÓN |
|---------------|-------------|
| ADD PRIMARY KEY | Crea y elimina llaves primarias. |
| SQL UNIQUE | Asegura que todos los valores en una columna son diferentes. |
| NOT NULL | Impone una columna para no aceptar valores NULL. |

Cada comando: Qué es, ejemplo CodeFiddle SQL, malas prácticas (DROP sin backup, etc.).

---

## Cómo encontrar y clasificar información — DML

### DML — Data Manipulation Language (Lenguaje de Manipulación de Datos)
Qué es, qué significa, para qué sirve.

### Comandos para manipular datos

| SENTENCIAS | DESCRIPCIÓN |
|------------|-------------|
| INSERT | ¿Cómo insertar datos? |
| SELECT | ¿Cómo consultar datos? |

Notas obligatorias:
- Los campos no deben contener espacios. Ejemplo: el campo `Nombre_Programa`.
- Los textos van entre comillas simples (`' '`).
- Los valores pueden contener espacios, tildes y caracteres especiales: `'Técnica Profesional en Configuración de Servicios Web'`.

### Buscar información específica y ordenarla

| CLAUSULA | DESCRIPCIÓN |
|----------|-------------|
| WHERE | ¿Cómo consultar un registro específico? |
| DISTINCT | ¿Cómo elimino valores duplicados? |

| PALABRA CLAVE | DESCRIPCIÓN |
|---------------|-------------|
| ORDER BY | ¿Cómo entregar la información ordenada? |
| LIMIT | ¿Cómo especifico el número de registros a devolver? |

### Funciones de agregado
Se usan dentro de SELECT y devuelven un único valor.

**AVG, SUM, COUNT, MAX, MIN** — con sintaxis del material:

```sql
SELECT AVG(campo) FROM tablas WHERE (opcional)
SELECT SUM(campo) FROM tablas WHERE (opcional)
SELECT COUNT(campo) FROM tablas WHERE (opcional)
SELECT MAX(campo) FROM tablas WHERE (opcional)
SELECT MIN(campo) FROM tablas WHERE (opcional)
```

Descripciones literales del material docente.

### Agrupar

| SENTENCIA | DESCRIPCIÓN |
|-----------|-------------|
| GROUP BY | ¿Cómo mostrar los datos agrupados? |

| CLAUSULA | DESCRIPCIÓN |
|----------|-------------|
| HAVING | ¿Cómo filtrar información sobre un conjunto de datos agrupados? |

### Actualizar y eliminar
Advertencia literal: incluir WHERE en UPDATE y DELETE; sin WHERE se afectan todos los registros; riesgo de pérdida definitiva; recomendar backup.

| SENTENCIA | DESCRIPCIÓN |
|-----------|-------------|
| UPDATE | ¿Cómo modificar datos? |
| DELETE | ¿Cómo eliminar un registro? |

---

## Base de datos relacional

### Qué es
Texto base: «Una base de datos relacional es un conjunto de tablas que se relacionan y comparten datos por medio de la llave primaria.» Expandir con profundidad pedagógica.

### Cómo construirla
- **Modelo relacional:** modelo físico que aproxima el modelo entidad-relación (ER — Entity-Relationship) a la representación de una BD; complementa al modelo ER.
- Diferencia: en ER no se intercambian atributos; en relacional sí se intercambian atributos para vínculos vía **llaves foráneas** (FK — Foreign Key).
- **Cardinalidad**
- **Relaciones** vía PK (Primary Key — llave primaria) y FK
- **Llave foránea:** registro hijo apunta a registro padre; FK apunta siempre a PK de otra tabla

### CREATE TABLE con CONSTRAINT / FK

| SENTENCIA | DESCRIPCIÓN |
|-----------|-------------|
| CREATE TABLE CONSTRAINT | ¿Cómo crear tablas con una o varias relaciones? |

Reglas:
1. Primero crear tablas padres.
2. FK y PK mismo tipo de datos.
3. Presentación de modelos depende de la herramienta visual de diseño.

### Consultas entre tablas (JOIN)

| SENTENCIA | DESCRIPCIÓN |
|-----------|-------------|
| INNER JOIN | Devuelve todos los registro cuando hay al menos un valor común en ambas tablas. |
| LEFT JOIN | Devuelve todos los registros de la tabla izquierda (tabla1) y los registros coincidentes de la tabla derecha (tabla2). El resultado es NULL desde el lado derecho, si no hay coincidencia. |
| RIGHT JOIN | Devuelve todos los registros de la tabla derecha (tabla 2) y los registros coincidentes de la tabla izquierda (tabla 1). El resultado es NULL desde el lado izquierdo, cuando no hay coincidencia. |

Diagramas Mermaid + CodeFiddle + PracticeExercise + Quiz + Reto. Explicar TODO sumamente bien con ejemplos.
