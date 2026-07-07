# Instrucciones para frontend-developer: http-metodos-status.html

## Archivo de salida
`clases/programacion-orientada-sitios-web/http-metodos-status.html`

---

1. Crear `clases/programacion-orientada-sitios-web/http-metodos-status.html`. `<html lang="es">`. Título: "Métodos HTTP y Códigos de Estado | POSW".
2. Misma paleta, tipografía, Bootstrap 5, Bootstrap Icons, highlight.js que el resto del curso.
3. Header fijo: logo "POSW". Nav: "Métodos", "CRUD vs HTTP", "Status Codes", "Ejemplos".
4. Hero: badge "Tema 4", `<h1>` "Métodos HTTP y Códigos de Estado", subtítulo "El vocabulario de la web: cómo los clientes indican su intención y los servidores responden." Botón scroll a `#metodos`.
5. Crear `<section id="metodos">` padding 80px 0. Contiene:
   - `<h2>` "Métodos HTTP".
   - Párrafo: "Los métodos HTTP (también llamados verbos) indican la acción que el cliente quiere realizar sobre un recurso. Cada método tiene semántica precisa definida por el RFC 9110."
   - Grid de tarjetas para cada método. Cada tarjeta: nombre del método en grande (1.6rem, fuente monospace, color según familia), descripción, propiedades (Safe / Idempotente). Datos:
     - GET | Color `#00d4ff` | "Solicita la representación de un recurso. Solo lee, nunca modifica estado en el servidor." | Safe: Sí | Idempotente: Sí
     - POST | Color `#2ed573` | "Envía datos al servidor para crear un recurso o procesar información. El URI no identifica el nuevo recurso de antemano." | Safe: No | Idempotente: No
     - PUT | Color `#ffa502` | "Reemplaza completamente el recurso en el URI indicado. Si no existe, puede crearlo." | Safe: No | Idempotente: Sí
     - PATCH | Color `#ff6b81` | "Aplica modificaciones parciales al recurso. Solo los campos enviados son actualizados." | Safe: No | Idempotente: No (en general)
     - DELETE | Color `#ff4757` | "Elimina el recurso identificado por el URI." | Safe: No | Idempotente: Sí
     - HEAD | Color `#7b5ea7` | "Igual que GET pero sin cuerpo de respuesta. Útil para verificar existencia o headers." | Safe: Sí | Idempotente: Sí
     - OPTIONS | Color `#eccc68` | "Retorna los métodos HTTP soportados por el recurso. Usado en preflight CORS." | Safe: Sí | Idempotente: Sí
     - CONNECT | Color `#888` | "Establece un túnel TCP al servidor (usado por proxies HTTPS)." | Safe: No | Idempotente: No
     - TRACE | Color `#888` | "Realiza un loop-back de prueba para diagnóstico. Raramente habilitado en producción." | Safe: Sí | Idempotente: Sí
   - Nota de tooltip al pie: "Safe = no modifica estado en el servidor. Idempotente = múltiples requests idénticos tienen el mismo efecto que uno solo."
6. Crear `<section id="crud">` padding 80px 0 fondo `--surface`. Contiene:
   - `<h2>` "Mapping CRUD ↔ HTTP".
   - Párrafo: "Al diseñar APIs REST, las operaciones CRUD se mapean a métodos HTTP sobre recursos identificados por URIs."
   - Tabla: Operación CRUD | Método HTTP | URI ejemplo | Descripción. Datos:
     - Create | POST | `POST /api/productos` | Crear nuevo producto
     - Read (colección) | GET | `GET /api/productos` | Listar todos los productos
     - Read (ítem) | GET | `GET /api/productos/42` | Obtener producto con id 42
     - Update (total) | PUT | `PUT /api/productos/42` | Reemplazar producto 42 completo
     - Update (parcial) | PATCH | `PATCH /api/productos/42` | Modificar solo campos enviados
     - Delete | DELETE | `DELETE /api/productos/42` | Eliminar producto 42
   - Bloque de código con ejemplo completo de un ciclo CRUD en HTTP (usando highlight.js, lenguaje `http`):
     ```
     # Crear
     POST /api/productos HTTP/1.1
     Content-Type: application/json
     {"nombre": "Teclado mecánico", "precio": 320000}

     # Leer
     GET /api/productos/7 HTTP/1.1

     # Actualizar parcialmente
     PATCH /api/productos/7 HTTP/1.1
     Content-Type: application/json
     {"precio": 295000}

     # Eliminar
     DELETE /api/productos/7 HTTP/1.1
     ```
7. Crear `<section id="status">` padding 80px 0. Contiene:
   - `<h2>` "Códigos de Estado HTTP".
   - Párrafo introductorio: "Los códigos de estado son números de 3 dígitos que el servidor incluye en cada respuesta para indicar el resultado de la petición. Se agrupan en cinco familias según el primer dígito."
   - Cinco acordeones Bootstrap (uno por familia). Cada acordeón: header con número de familia + nombre + color badge. Contenido: tabla con Código | Nombre | Cuándo usarlo. Datos:
     - 1xx INFORMATIVOS (badge gris):
       - 100 | Continue | El servidor recibió los headers y el cliente puede continuar enviando el cuerpo
       - 101 | Switching Protocols | Usado al hacer upgrade a WebSockets
     - 2xx ÉXITO (badge verde `#2ed573`):
       - 200 | OK | Request exitosa (GET, PUT, PATCH exitosos)
       - 201 | Created | Recurso creado exitosamente (POST exitoso)
       - 204 | No Content | Éxito pero sin cuerpo de respuesta (DELETE exitoso)
       - 206 | Partial Content | Respuesta parcial (streaming, rangos)
     - 3xx REDIRECCIONES (badge `#ffa502`):
       - 301 | Moved Permanently | El recurso se movió de forma permanente (SEO relevante)
       - 302 | Found | Redirección temporal
       - 304 | Not Modified | Cache del cliente aún es válido
     - 4xx ERRORES DEL CLIENTE (badge `#ff4757`):
       - 400 | Bad Request | La petición está malformada o tiene datos inválidos
       - 401 | Unauthorized | Requiere autenticación (no enviaste token)
       - 403 | Forbidden | Autenticado pero sin permiso para este recurso
       - 404 | Not Found | El recurso no existe en esa URI
       - 405 | Method Not Allowed | Método HTTP no soportado por ese endpoint
       - 409 | Conflict | Conflicto de estado (ej. email duplicado)
       - 422 | Unprocessable Entity | Datos válidos sintácticamente pero semánticamente incorrectos
       - 429 | Too Many Requests | Rate limiting: demasiadas peticiones
     - 5xx ERRORES DEL SERVIDOR (badge `#ff4757` más oscuro):
       - 500 | Internal Server Error | Error genérico del servidor (bug no controlado)
       - 501 | Not Implemented | El servidor no soporta la funcionalidad requerida
       - 502 | Bad Gateway | El servidor proxy recibió respuesta inválida del upstream
       - 503 | Service Unavailable | El servidor no puede atender (sobrecarga o mantenimiento)
       - 504 | Gateway Timeout | El upstream no respondió a tiempo
8. Crear `<section id="ejemplos">` padding 80px 0 fondo `--surface`. Contiene:
   - `<h2>` "Respuestas HTTP completas — Ejemplos".
   - Tres ejemplos en tabs Bootstrap (201 Created, 404 Not Found, 422 Unprocessable Entity), cada uno con el bloque de respuesta HTTP cruda:
     - Tab 1 (201 Created):
       ```
       HTTP/1.1 201 Created
       Content-Type: application/json
       Location: /api/usuarios/99

       {
         "id": 99,
         "nombre": "Carlos López",
         "email": "carlos@ejemplo.com",
         "creado_en": "2025-09-01T10:30:00Z"
       }
       ```
     - Tab 2 (404 Not Found):
       ```
       HTTP/1.1 404 Not Found
       Content-Type: application/json

       {
         "error": "NOT_FOUND",
         "mensaje": "El producto con id 999 no existe.",
         "timestamp": "2025-09-01T10:31:00Z"
       }
       ```
     - Tab 3 (422 Unprocessable Entity):
       ```
       HTTP/1.1 422 Unprocessable Entity
       Content-Type: application/json

       {
         "error": "VALIDATION_ERROR",
         "campos": {
           "email": "El formato del email es inválido.",
           "precio": "El precio debe ser mayor a 0."
         }
       }
       ```
9. Sección recursos: enlaces a `protocolos-seguridad.html`, `http-headers.html`, `apis.html`, `rest-principios.html`.
10. Footer estándar del curso.
11. Todos los códigos de ejemplo con highlight.js.
12. Animaciones Intersection Observer en tarjetas de métodos y acordeones.
13. Responsivo: grid de métodos es 3 cols desktop, 2 tablet, 1 móvil. Tablas con overflow-x scroll.
