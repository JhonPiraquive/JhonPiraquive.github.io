# Clase 2 — Fundamentos, motores y estructura de una base de datos

Fuente docente aportada por el usuario (2026-08-27). Expandir acrónimos en la lección publicada.

## Bloques obligatorios

### 1. Qué es y para qué sirve una base de datos
- Definición clara; para qué sirve; cómo funciona; ejemplo PYME LATAM.
- Acrónimos: BD (Base de Datos), SGBD (Sistema Gestor de Bases de Datos).

### 2. Tipos de bases de datos
- **Relacionales** (tablas, filas, columnas, SQL — Structured Query Language).
- **No relacionales / NoSQL** (Not Only SQL): documentos, clave-valor, columnas, grafos.
- Comparación con escenarios de uso (inventario vs catálogo flexible).

### 3. Software para estructurar una BD — motores y gestores
Cubrir con diferencias claras:

**Motores / servidores:**
- MySQL
- MariaDB
- MongoDB

**Gestores visuales (GUI — Graphical User Interface):**
- phpMyAdmin (y mencionar otros: MySQL Workbench, DBeaver, MongoDB Compass)

**CLI (Command Line Interface — interfaz de línea de comandos):**
- `mysql` / `mariadb` client
- `mongosh` (MongoDB Shell)

Tabla comparativa motores vs gestores (visual vs CLI). Qué estructura vs qué administra.

### 4. Cómo construir una BD: campos, tablas, registros y valores
Explicar **detalladamente** con ejemplos (p. ej. tabla `Programas`, campo `Nombre_Programa`):
- Tabla
- Campo / columna
- Registro / fila
- Valor
- Relación entre ellos

Reglas: campos sin espacios (`Nombre_Programa`); textos entre comillas simples; valores pueden llevar espacios, tildes y caracteres especiales: `'Técnica Profesional en Configuración de Servicios Web'`.

Incluir PracticeExercise de refuerzo.
