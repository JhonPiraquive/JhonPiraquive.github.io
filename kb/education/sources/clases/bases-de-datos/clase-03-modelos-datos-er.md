# Clase 4 — Modelos de datos, diagramas ER y familias de bases de datos

**Posición en la curva:** después de SQL básico (clases 2–3). El estudiante ya sabe tablas/SQL; ahora aprende a **diseñar** antes de crear.

**Modo docente + autoestudio:** tono de enseñanza a una persona (tú/estudiante). Cada bloque: idea simple → por qué importa → cómo se hace paso a paso → ejemplo → error típico → mini-práctica.

## Objetivos de la clase
1. Explicar qué es un modelo de datos y para qué se usa.
2. Diferenciar modelo conceptual, lógico y físico.
3. Crear e interpretar un diagrama ER (Entity-Relationship — entidad-relación).
4. Transformar un ER a tablas SQL con tipos de datos, PK y FK.
5. Comparar bases relacionales, no relacionales (documentos/clave-valor/columnas) y de grafos.
6. Reconocer el esquema en copo de nieve (snowflake) frente a estrella (introducción; se profundiza en clase 5).

## Bloques (orden de aprendizaje)

### 1. Qué es un modelo de datos
- Definición accesible.
- Para qué sirve (comunicación negocio–técnico, evitar improvisar tablas).
- Cómo se crea (requisitos → entidades → relaciones → refinamiento).

### 2. Tipos principales: conceptual, lógico, físico
| Nivel | Qué representa | Quién lo usa | Ejemplo |
|-------|----------------|--------------|---------|
| Conceptual | Qué existe en el negocio (entidades y relaciones) | Analista + cliente | “Estudiante se inscribe en Programa” |
| Lógico | Atributos, claves, cardinalidad, sin motor concreto | Diseñador BD | Tablas lógicas + PK/FK |
| Físico | Tipos SQL, índices, motor (MySQL/MariaDB…) | DBA / desarrollador | `VARCHAR(200)`, `INT AUTO_INCREMENT` |

### 3. Diagramas ER
- Qué son, para qué, cómo se crean (pasos).
- Símbolos: entidad, atributo, relación, cardinalidad 1:1, 1:N, N:M.
- Mermaid `erDiagram` obligatorio.
- Ejemplo academia “Rutas Digitales” (Cali).

### 4. Familias: relacionales, no relacionales y grafos
- **Relacional:** tablas + PK/FK + SQL (repaso profundo, no solo mención).
- **No relacional / NoSQL (Not Only SQL):** documentos, clave-valor, columnas — cuándo sí/no.
- **Grafos:** nodos y aristas (Neo4j u orientación grafos); relaciones como ciudadano de primera clase; caso redes/recomendaciones.
- CompareTable + escenarios PYME LATAM.

### 5. Esquema en estrella vs copo de nieve (intro)
- Copo de nieve (snowflake): dimensiones normalizadas en subdimensiones.
- Diferencia visual con estrella.
- Para qué sirve en analítica (data warehouse / almacén de datos). Detalle de normalización en clase 5.

### 6. Transformación ER → tablas SQL
Pasos explícitos (N:M → tabla puente, 1:N → FK en el lado N, etc.).
CodeFiddle con CREATE TABLE.

### 7. Tipos de datos
Enteros, decimales, texto (`CHAR`/`VARCHAR`/`TEXT`), fecha/hora, booleanos/bits, NULL.
Elegir tipo con criterio (no “todo VARCHAR”).

### 8. Llaves primarias y foráneas (profundización)
Repaso pedagógico + reglas de diseño (padres primero, mismos tipos, integridad referencial).

### Cierre
PracticeExercise ×5, reto diseño ER→SQL, quiz ×5.
