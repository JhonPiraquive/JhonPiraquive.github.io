# Ataques comunes a aplicaciones web: SQL Injection y mitigación

## Objetivos de aprendizaje

- Explicar qué es SQL Injection (SQLi) y por qué ocurre.
- Reconocer 4 patrones de entrada sospechosa en campos/URLs.
- Describir el impacto de SQLi en CIA (qué se puede romper).
- Enumerar 5 mitigaciones concretas (priorizando server-side).
- Distinguir “validación” vs “parametrización” con claridad.
- Proponer un plan de pruebas básico para detectar SQLi en un endpoint.

## Prerrequisitos

Conocer qué es una base de datos y una consulta SQL a nivel conceptual.

## Qué es SQL Injection

SQL Injection ocurre cuando una aplicación construye consultas SQL mezclando texto fijo con datos del usuario sin control adecuado. El atacante inyecta fragmentos de SQL para cambiar el significado de la consulta: leer datos ajenos, modificar registros o incluso afectar disponibilidad.

## Señales de riesgo

- Concatenación de strings para armar consultas.
- Errores de base de datos visibles al usuario.
- Filtros “mágicos” basados solo en bloquear palabras.
- Campos de búsqueda que aceptan cualquier cosa sin límites.
- Endpoints que devuelven demasiada información por un solo parámetro.
- Falta de logs/alertas ante patrones anómalos.

## Mitigación (lo que sí funciona)

- Consultas parametrizadas / prepared statements (primera línea de defensa).
- Validación de entrada por tipo, longitud y formato (defensa adicional).
- Mínimo privilegio en la cuenta de BD (limita impacto).
- Manejo seguro de errores (no filtrar detalles).
- Monitoreo y alertas (patrones de intentos).
- Pruebas y revisión de código en rutas críticas.

## Ejemplo real (historia)

Historia: “El buscador ‘inofensivo’”. Una app agrega un buscador por nombre. El equipo lo lanza rápido concatenando el texto del usuario en la consulta. Un atacante prueba entradas raras y nota que el sistema responde diferente ante comillas. En minutos extrae datos de usuarios. El fallo no fue “la base de datos”: fue confiar en entrada sin separar datos de instrucciones.

## Ejemplo técnico (demostración conceptual)

La demostración debe mostrar dos versiones: una consulta vulnerable construida por concatenación (para evidenciar el riesgo) y una versión segura con parámetros (para evidenciar la mitigación). También debe mostrar la diferencia de manejo de errores: el usuario recibe mensaje genérico, mientras el log interno guarda el detalle.

```sql
-- Consulta vulnerable (ejemplo conceptual: NO copiar a producción)
SELECT * FROM users WHERE name = '<<input_usuario>>';

-- Si input_usuario = 'a' OR '1'='1
-- La condición cambia y puede devolver demasiados resultados.
```

```php
<?php
// Ejemplo conceptual: prepared statement con parámetros (mitigación)
// - Separar SQL (instrucción) de los valores (datos).
// - Enlazar el input como parámetro, no concatenarlo.
// (El código exacto depende de PDO/mysqli y tu framework.)
?>
```

```json
{
  "event": "sqli_attempt",
  "user_id": null,
  "ip": "198.51.100.10",
  "endpoint": "/buscar",
  "payload_truncado": "' OR '1'='1",
  "resultado": "blocked",
  "request_id": "req_13f5c1"
}
```

## Diagrama (Mermaid)

### Separar datos de instrucciones

```mermaid
flowchart LR
  in[Entrada_usuario] --> val[Validacion_formato]
  val --> param[Consulta_parametrizada]
  param --> bd[(BD)]

  in -.-> vuln[SQL_concatenado_(vulnerable)]
  vuln -.-> bd
```

## Reto interactivo (sin código)

Dado un endpoint “/buscar?nombre=…”, escribe 5 casos de prueba de entrada (solo texto) que intentarías para detectar SQLi. Luego marca cuáles deberían ser bloqueados por validación de formato y cuáles deberían ser neutralizados por parametrización.

## Mini-quiz (5 preguntas)

1. V/F: SQLi ocurre cuando datos del usuario se interpretan como parte de la instrucción SQL.
2. V/F: Bloquear palabras (blacklist) es suficiente como defensa principal.
3. La mitigación más importante es:
4. Mínimo privilegio en BD sirve para:
5. En 1 frase, explica “separar datos de instrucciones”.

- A) Mensajes bonitos
- B) Consultas parametrizadas
- C) Cambiar el nombre de tablas

- A) Evitar todo ataque
- B) Limitar el impacto
- C) Acelerar consultas

Respuestas: (1) V, (2) F, (3) B, (4) B, (5) Respuesta esperada: el input se trata como dato, no como parte del SQL; el motor no lo ejecuta como instrucción.
