import type { QuizQuestion } from "@/components/teaching/Quiz";

export const BASES_DE_DATOS_QUIZZES: Record<string, QuizQuestion[]> = {
  "clase-01-historia-bases-de-datos": [
    {
      question: "¿Cuál fue el problema central de los archivos planos en los años 50–60?",
      options: [
        "Demasiadas transacciones ACID",
        "Duplicidad e inconsistencia entre aplicaciones, con dependencia del formato físico",
        "Exceso de independencia de datos",
        "Uso obligatorio de SQL",
      ],
      correctIndex: 1,
      feedback:
        "Cada app tenía sus archivos; actualizar un dato en un lugar no lo actualizaba en todos.",
    },
    {
      question: "¿Qué distingue al modelo relacional de Codd frente a IMS/CODASYL?",
      options: [
        "Usa solo cintas magnéticas",
        "Relaciona datos por valores en tablas y busca independencia de datos, no navegación por punteros",
        "Elimina por completo los esquemas",
        "Solo funciona en la nube",
      ],
      correctIndex: 1,
      feedback:
        "Codd propuso relaciones (tablas) e independencia frente al acceso navegacional.",
    },
    {
      question: "¿Dónde nace SQL en el relato?",
      options: [
        "Solo en el paper de Codd 1970",
        "En System R (SEQUEL/SQL) e influencias de INGRES; luego productos comerciales como Oracle",
        "Únicamente en CODASYL",
        "En BigTable",
      ],
      correctIndex: 1,
      feedback: "El modelo es de Codd; el lenguaje SQL surge en el ecosistema System R.",
    },
    {
      question: "¿Cuál es el sentido histórico correcto?",
      options: [
        "NoSQL → Codd → archivos planos",
        "Archivos planos → navegacional → Codd → SQL comercial → imperio relacional → NoSQL → convergencia",
        "Oracle → IMS → archivos planos",
        "Vectoriales → CODASYL → Codd",
      ],
      correctIndex: 1,
      feedback: "El relato sigue esa línea de causa→efecto.",
    },
    {
      question:
        "¿Qué lectura histórica corresponde a una startup que pone Excel compartido como única “base” de pedidos?",
      options: [
        "Cumple el modelo CODASYL",
        "Reproduce fallas pre-BD: choques de edición, duplicados e inconsistencias",
        "Activa HTAP por defecto",
        "Demuestra que Codd inventó SQL",
      ],
      correctIndex: 1,
      feedback:
        "Sin motor de concurrencia ni fuente única, reaparece el problema de los años 50.",
    },
  ],
  "clase-02-fundamentos-motores-estructura": [
    {
      question: "¿Qué describe mejor una BD frente a un SGBD?",
      options: [
        "BD es phpMyAdmin; SGBD es Excel",
        "BD es el conjunto organizado de datos; SGBD es el software que los administra",
        "Son sinónimos exactos",
        "SGBD solo existe en NoSQL",
      ],
      correctIndex: 1,
      feedback:
        "La base de datos es el contenido organizado; el SGBD (MySQL, MariaDB, MongoDB…) es el sistema que la gestiona.",
    },
    {
      question: "¿Cuál es una diferencia clave entre modelo relacional y NoSQL documental?",
      options: [
        "Relacional usa tablas/SQL; documental guarda documentos flexibles (p. ej. MongoDB)",
        "NoSQL prohíbe guardar texto",
        "Relacional no permite claves",
        "MongoDB solo funciona sin disco",
      ],
      correctIndex: 0,
      feedback: "Relacional → tablas y SQL; documentos → JSON/BSON con esquema más flexible.",
    },
    {
      question: "¿Qué afirmación sobre motores y gestores es correcta?",
      options: [
        "phpMyAdmin es el motor que guarda los archivos de datos",
        "MySQL/MariaDB/MongoDB son motores; phpMyAdmin/Workbench/DBeaver/Compass son GUI que se conectan al motor",
        "La CLI reemplaza la necesidad de un motor",
        "DBeaver almacena las tablas en el navegador",
      ],
      correctIndex: 1,
      feedback: "El motor persiste y ejecuta; GUI y CLI son clientes.",
    },
    {
      question: "¿Cuál es la forma correcta de referirse a un campo y a un valor de texto en SQL?",
      options: [
        "Campo Nombre Programa y valor sin comillas",
        "Campo Nombre_Programa y valor 'Técnica Profesional en Configuración de Servicios Web'",
        "Campo con espacios y valor entre corchetes",
        "Los valores nunca pueden tener tildes",
      ],
      correctIndex: 1,
      feedback:
        "Identificadores sin espacios (_); literales de texto entre comillas simples; tildes permitidas en el valor.",
    },
    {
      question:
        "¿Qué pasaría si una PYME usa solo Excel compartido como «base» de cupos de programas mientras tres sedes editan a la vez?",
      options: [
        "Obtendría transacciones ACID automáticas del motor MariaDB",
        "Reaparecerían inconsistencias y choques de edición propios de no tener un SGBD",
        "Se convertiría automáticamente en MongoDB",
        "phpMyAdmin corregiría los conflictos solo",
      ],
      correctIndex: 1,
      feedback:
        "Sin motor con concurrencia e integridad, el patrón pre-BD (duplicidad/inconsistencia) vuelve con otra herramienta.",
    },
  ],
  "clase-04-ddl-dml-relacional": [
    {
      question: "¿Qué distingue DDL de DML?",
      options: [
        "DDL manipula filas; DML crea tablas",
        "DDL define/modifica la estructura (esquema); DML manipula los datos (filas)",
        "Ambos solo sirven para JOIN",
        "DDL es NoSQL y DML es SQL",
      ],
      correctIndex: 1,
      feedback:
        "CREATE/ALTER/DROP son DDL (Data Definition Language); INSERT/SELECT/UPDATE/DELETE son DML (Data Manipulation Language).",
    },
    {
      question: "¿Qué ocurre si ejecutas DELETE FROM Programas sin cláusula WHERE?",
      options: [
        "Solo borra la primera fila",
        "No hace nada sin LIMIT",
        "Se eliminan TODOS los registros de la tabla; hay riesgo de pérdida definitiva — conviene backup y siempre usar WHERE",
        "Borra la base de datos completa",
      ],
      correctIndex: 2,
      feedback:
        "Sin WHERE el DELETE aplica a todas las filas; no es lo mismo que DROP DATABASE, pero el daño puede ser total para esa tabla. Siempre WHERE + backup.",
    },
    {
      question: "Según el material, ¿cuál es una regla al crear tablas relacionadas con CONSTRAINT/FK?",
      options: [
        "Primero las tablas hijas, luego las padres",
        "Primero tablas padres; FK y PK del mismo tipo; la vista del modelo depende de la herramienta",
        "La FK debe ser de distinto tipo que la PK para mayor seguridad",
        "No se pueden nombrar las restricciones",
      ],
      correctIndex: 1,
      feedback:
        "El orden padres→hijos y la igualdad de tipos son reglas explícitas del material; el dibujo ER varía según la herramienta.",
    },
    {
      question: "¿Qué devuelve un LEFT JOIN entre tabla1 (izquierda) y tabla2 (derecha)?",
      options: [
        "Solo filas sin coincidencia",
        "Todos los registros de la izquierda y los coincidentes de la derecha; NULL a la derecha si no hay coincidencia",
        "Solo la intersección, nunca NULL",
        "Siempre el producto cartesiano completo",
      ],
      correctIndex: 1,
      feedback: "Coincide con la definición literal del material para LEFT JOIN.",
    },
    {
      question: "¿Para qué se usa HAVING en lugar de WHERE?",
      options: [
        "Para crear tablas",
        "Para filtrar filas antes de leer la tabla",
        "Para filtrar sobre resultados ya agrupados (p. ej. sobre COUNT/AVG tras GROUP BY)",
        "Para eliminar la base de datos",
      ],
      correctIndex: 2,
      feedback:
        "WHERE filtra filas; HAVING filtra grupos tras GROUP BY — pregunta del material sobre conjuntos agrupados.",
    },
  ],
  "clase-03-modelos-datos-er": [
    {
      question: "Conceptual vs físico:",
      options: [
        "Conceptual ya define VARCHAR; físico solo dibuja",
        "Conceptual = qué existe en el negocio; físico = tipos SQL, motor, índices",
        "Son sinónimos de NoSQL",
        "El físico no usa PK",
      ],
      correctIndex: 1,
      feedback: "El lógico está en medio (atributos/claves sin motor).",
    },
    {
      question: "En 1:N, ¿dónde va la FK?",
      options: [
        "Siempre en el lado 1",
        "En el lado N (tabla hija)",
        "Nunca se usa FK",
        "Solo en NoSQL",
      ],
      correctIndex: 1,
      feedback: "El hijo apunta al padre.",
    },
    {
      question: "Grafos frente a relacional típico:",
      options: [
        "No pueden representar relaciones",
        "Las aristas son ciudadanas de primera clase; consultas por caminos",
        "Solo almacenan Excel",
        "Obligan a VARCHAR",
      ],
      correctIndex: 1,
      feedback: "Forma de pregunta distinta → familia distinta.",
    },
    {
      question: "N:M a SQL:",
      options: [
        "IDs separados por coma en una columna",
        "Tabla puente con FKs a ambas entidades",
        "Dos PRIMARY KEY en la misma tabla padre",
        "Solo LEFT JOIN sin tablas nuevas",
      ],
      correctIndex: 1,
      feedback: "Asociación explícita.",
    },
    {
      question: "Orden de diseño sano:",
      options: [
        "CREATE TABLE → luego preguntar al negocio",
        "Requisitos → conceptual/ER → lógico → físico/DDL",
        "Solo físico",
        "Solo NoSQL primero",
      ],
      correctIndex: 1,
      feedback: "Diseñar antes de crear.",
    },
  ],
  "clase-05-normalizacion-esquemas": [
    {
      question: "¿Qué es una dependencia funcional A → B en el sentido de esta clase?",
      options: [
        "A y B son siempre la misma columna",
        "Si conozco A, determino de forma única el valor de B según la regla del esquema",
        "B causa físicamente a A en el mundo real",
        "Solo existe en bases NoSQL",
      ],
      correctIndex: 1,
      feedback:
        "DF = determinación única (“si conozco A, determino B”); base para ejecutar 2FN/3FN.",
    },
    {
      question:
        "Una tabla con PK compuesta (estudiante_id, programa_id) y columna Nombre_Programa que solo depende de programa_id viola principalmente:",
      options: [
        "Solo BCNF, nunca 2FN",
        "1FN, porque los enteros no son atómicos",
        "2FN (dependencia parcial de la clave compuesta)",
        "Nada; es el diseño ideal de facturación",
      ],
      correctIndex: 2,
      feedback:
        "2FN elimina dependencias parciales: Nombre_Programa debe vivir en Programas.",
    },
    {
      question:
        "¿Cuál describe mejor la desnormalización consciente? ¿Por qué no basta «borrar todas las FK»?",
      options: [
        "Borrar todas las FK para ir más rápido",
        "No diseñar nunca el modelo",
        "Reintroducir redundancia documentada (p. ej. snapshot en factura) tras entender el modelo normalizado, por lecturas/historia/rendimiento",
        "Convertir todo a CSV en una celda",
      ],
      correctIndex: 2,
      feedback:
        "Desnormalizar ≠ improvisar: es una decisión con dueño de la verdad y sync o inmutabilidad. Quitar FK debilita integridad; no es desnormalización consciente.",
    },
    {
      question: "En BI, ¿qué diferencia clave hay entre esquema en estrella y copo de nieve?",
      options: [
        "Estrella usa NoSQL; copo usa SQL",
        "Estrella tiene dimensiones planas (a menudo desnormalizadas); copo normaliza dimensiones en subdimensiones (más JOINs)",
        "Son sinónimos de 1FN y 2FN",
        "El copo no tiene tabla de hechos",
      ],
      correctIndex: 1,
      feedback:
        "Ambos son formas analíticas (hechos + dims); el copo normaliza jerarquías dimensionales.",
    },
    {
      question: "¿Qué problema ataca principalmente la 1FN (1NF)?",
      options: [
        "Dependencias transitivas entre no-claves",
        "Valores no atómicos / grupos repetidos (listas en celdas, curso1…cursoN)",
        "Únicamente el rendimiento de JOINs en tableros",
        "Permisos de usuarios (DCL)",
      ],
      correctIndex: 1,
      feedback:
        "1FN = atomicidad y sin grupos repetidos; 2FN/3FN vienen después con DFs.",
    },
  ],
  "clase-06-dcl-tcl-objetos-bd": [
    {
      question: "¿Qué es DCL (Data Control Language — Lenguaje de Control de Datos)?",
      options: [
        "El lenguaje para INSERT/UPDATE/DELETE de filas",
        "El subconjunto de SQL que otorga y revoca privilegios (GRANT/REVOKE)",
        "El lenguaje solo para crear tablas",
        "Un motor NoSQL",
      ],
      correctIndex: 1,
      feedback: "DCL controla quién puede qué; DML manipula filas; DDL define estructura.",
    },
    {
      question:
        "En ACID, ¿qué significa Atomicity (atomicidad)? ¿Por qué importa en una inscripción con descuento de cupo?",
      options: [
        "Que los datos se ven bonitos en reportes",
        "Que tras COMMIT nunca se puede hacer backup",
        "Que la transacción es todo-o-nada: se confirman todos los cambios o ninguno",
        "Que solo un usuario puede existir en el SGBD",
      ],
      correctIndex: 2,
      feedback: "Atomicidad evita estados a medias (p. ej. cupo descontado sin inscripción).",
    },
    {
      question: "¿Cuál es una motivación típica para crear una vista?",
      options: [
        "Reemplazar siempre a las tablas base para almacenar filas",
        "Simplificar consultas y/o exponer solo columnas autorizadas con GRANT sobre la vista",
        "Eliminar la necesidad de transacciones",
        "Convertir automáticamente el modelo a NoSQL",
      ],
      correctIndex: 1,
      feedback:
        "La vista es una consulta guardada; ayuda a seguridad por proyección y a reutilizar SELECT complejos.",
    },
    {
      question:
        "¿Qué diferencia principal hay entre una UDF (User-Defined Function — función definida por el usuario) y un PROCEDURE?",
      options: [
        "No hay ninguna diferencia",
        "La UDF suele retornar un valor usable en expresiones/SELECT; el procedimiento se invoca con CALL y encapsula procesos (a menudo con efectos)",
        "Los procedimientos solo existen en Excel",
        "Las UDF reemplazan a GRANT",
      ],
      correctIndex: 1,
      feedback: "Función = valor; procedimiento = rutina/proceso.",
    },
    {
      question:
        "¿Cuál es una mala práctica típica con triggers? ¿Qué pasaría si encadenas lógica oculta entre varios?",
      options: [
        "Usarlos para una auditoría delgada AFTER INSERT",
        "Encadenar lógica oculta compleja entre varios triggers hasta volver imposible depurar",
        "Documentar el evento BEFORE/AFTER",
        "Preferir FK para integridad referencial cuando basta",
      ],
      correctIndex: 1,
      feedback:
        "Los triggers son potentes; la complejidad oculta y las cascadas son el anti-patrón clásico.",
    },
  ],
};
