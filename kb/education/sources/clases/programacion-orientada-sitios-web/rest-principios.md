# Instrucciones para frontend-developer: rest-principios.html

## Archivo de salida
`clases/programacion-orientada-sitios-web/rest-principios.html`

---

1. Crear `clases/programacion-orientada-sitios-web/rest-principios.html`. `<html lang="es">`. Título: "Principios REST | POSW".
2. Misma paleta, Bootstrap 5, Bootstrap Icons, Google Fonts, highlight.js.
3. Header fijo: "POSW". Nav: "Stateless", "Client-Server", "Cacheable", "Layered", "Uniform Interface", "Code on Demand".
4. Hero: badge "Tema 13", `<h1>` "Principios REST", subtítulo "Los seis constraints de Roy Fielding que definen una arquitectura REST verdadera." Botón scroll a `#stateless`.
5. Antes de la primera sección, crear un panel introductorio (full-width, fondo `--surface`, padding 40px). Contiene:
   - `<h2>` "¿Qué es REST realmente?".
   - Párrafo: "REST (Representational State Transfer) no es un protocolo ni un estándar; es un estilo arquitectónico definido por Roy Fielding en su tesis doctoral del año 2000 en la Universidad de California. Un sistema es RESTful solo si cumple los seis constraints (restricciones) definidos por Fielding. En la práctica, muchas APIs llamadas 'REST' no cumplen todos los constraints; en particular, la mayoría omite HATEOAS (parte de Uniform Interface)."
   - Referencia: "Tesis original: 'Architectural Styles and the Design of Network-based Software Architectures' — Roy Fielding, 2000."
6. Crear `<section id="stateless">` padding 80px 0. Contiene:
   - `<h2>` "1. Stateless (Sin Estado)".
   - Regla: "Cada petición del cliente al servidor debe contener toda la información necesaria para ser comprendida. El servidor no debe almacenar contexto de sesión del cliente entre peticiones."
   - Analogía: "Cada vez que llamas a un restaurante para hacer un pedido, debes decir quién eres, qué quieres y dónde entregarlo. El restaurante no recuerda tu llamada anterior. Si olvidas decir tu nombre, el pedido no llega."
   - Diagrama correcto (stateless) vs incorrecto (stateful):
     ```
     ✅ STATELESS (REST)
     Request 1: GET /pedidos   → Headers: { Authorization: Bearer TOKEN }
     Request 2: POST /pedidos  → Headers: { Authorization: Bearer TOKEN }
     Cada request es autosuficiente.

     ❌ STATEFUL (NO RESTful)
     Request 1: POST /login    → El servidor guarda: "usuario 42 está logueado"
     Request 2: GET /pedidos   → El servidor busca: "¿quién está logueado?" (sesión)
     El servidor depende de estado previo.
     ```
   - Beneficios: escalabilidad horizontal (cualquier servidor puede atender cualquier request), simplicidad de caching, resiliencia ante fallos.
   - Costo: más datos por request (el token viaja en cada petición).
7. Crear `<section id="client-server">` padding 80px 0 fondo `--surface`. Contiene:
   - `<h2>` "2. Client-Server (Cliente-Servidor)".
   - Regla: "El cliente y el servidor son componentes separados con responsabilidades distintas, conectados mediante una interfaz uniforme. El cliente maneja la interfaz de usuario; el servidor maneja el almacenamiento de datos y la lógica de negocio."
   - Diagrama de separación de responsabilidades:
     ```
     ┌────────────────────────┐         ┌────────────────────────┐
     │       CLIENTE          │         │       SERVIDOR         │
     │  - UI / UX             │         │  - Lógica de negocio   │
     │  - Estado de pantalla  │◄──────► │  - Persistencia datos  │
     │  - Rutas del cliente   │  HTTP   │  - Autenticación       │
     │  - React / Angular     │         │  - Integraciones       │
     └────────────────────────┘         └────────────────────────┘
           Pueden evolucionar independientemente
     ```
   - Beneficio clave: el frontend puede cambiar completamente (de web a mobile) sin modificar el backend, y viceversa. Desacoplamiento total.
8. Crear `<section id="cacheable">` padding 80px 0. Contiene:
   - `<h2>` "3. Cacheable (Cacheabilidad)".
   - Regla: "Las respuestas del servidor deben indicar explícitamente si pueden ser cacheadas o no. Si una respuesta es cacheable, el cliente (o un proxy) puede reutilizarla para peticiones equivalentes futuras."
   - Mecanismo: mediante el header `Cache-Control`, el servidor declara `max-age`, `no-cache`, `no-store`, `public`, `private`.
   - Ejemplo:
     ```
     # Respuesta cacheable 1 hora
     HTTP/1.1 200 OK
     Cache-Control: max-age=3600, public
     ETag: "productos-v42"

     # Respuesta NO cacheable (dato sensible)
     HTTP/1.1 200 OK
     Cache-Control: no-store, no-cache
     ```
   - Referencia: "Ver `cache.html` y `http-headers.html` para el detalle completo."
9. Crear `<section id="layered">` padding 80px 0 fondo `--surface`. Contiene:
   - `<h2>` "4. Layered System (Sistema en Capas)".
   - Regla: "El cliente no necesita saber si está hablando directamente con el servidor final o con un intermediario (proxy, gateway, load balancer, CDN). Cada capa solo conoce la capa inmediatamente adyacente."
   - Diagrama:
     ```
     CLIENTE
       │
       ▼
     CDN (Cloudflare) ← Capa 1: caché y protección DDoS
       │
       ▼
     API Gateway ← Capa 2: auth, rate limiting, routing
       │
       ▼
     Load Balancer ← Capa 3: distribución de carga
       │
       ├──► Servidor A
       ├──► Servidor B
       └──► Servidor C
     ```
   - El cliente solo habla con `api.ejemplo.com`. Ignora completamente la existencia del CDN, del gateway y de los tres servidores.
10. Crear `<section id="uniform">` padding 80px 0. Contiene:
    - `<h2>` "5. Uniform Interface (Interfaz Uniforme)".
    - Párrafo: "Es el constraint central de REST. Simplifica y desacopla la arquitectura al imponer una interfaz estandarizada entre componentes. Se compone de cuatro sub-constraints:"
    - Cuatro sub-constraints en tarjetas:
      - "Identificación de recursos: cada recurso tiene un URI único. `/productos/42` identifica el producto con ID 42, no la acción de obtenerlo."
      - "Manipulación mediante representaciones: el cliente no accede al recurso directamente, sino a una representación (JSON, XML). Para modificarlo, envía la representación deseada."
      - "Mensajes autodescriptivos: cada mensaje contiene información suficiente para ser procesado. El `Content-Type` indica cómo parsear el body; el método HTTP indica la intención."
      - "HATEOAS (Hypermedia As The Engine Of Application State): las respuestas incluyen links que describen qué acciones son posibles desde el estado actual. El cliente navega la API siguiendo links, no URLs hardcodeadas."
    - Ejemplo de HATEOAS en respuesta JSON:
      ```json
      {
        "id": 42,
        "nombre": "Laptop Pro 15",
        "precio": 4500000,
        "estado": "en_stock",
        "_links": {
          "self": { "href": "/api/v1/productos/42", "method": "GET" },
          "actualizar": { "href": "/api/v1/productos/42", "method": "PUT" },
          "eliminar": { "href": "/api/v1/productos/42", "method": "DELETE" },
          "categoria": { "href": "/api/v1/categorias/3", "method": "GET" },
          "agregar_al_carrito": { "href": "/api/v1/carrito/items", "method": "POST" }
        }
      }
      ```
    - Nota: "HATEOAS es el constraint menos implementado en APIs 'REST' del mundo real. Muchos equipos lo omiten por la complejidad, resultando en APIs que Fielding llama 'HTTP APIs' pero no verdaderamente RESTful."
11. Crear `<section id="code-on-demand">` padding 80px 0 fondo `--surface`. Contiene:
    - `<h2>` "6. Code on Demand (Opcional)".
    - Regla: "El servidor puede extender la funcionalidad del cliente enviando código ejecutable (JavaScript, applets). Es el único constraint opcional de REST."
    - Ejemplo: una respuesta que incluye un fragmento de JavaScript para renderizar un widget, o una respuesta que devuelve instrucciones de validación dinámicas.
    - Nota: "En la práctica moderna, este constraint se implementa implícitamente: toda aplicación SPA descarga código (JS) desde el servidor al inicio."
12. Crear `<section id="niveles">` padding 80px 0. Contiene:
    - `<h2>` "Modelo de Madurez de Richardson".
    - Párrafo: "Leonard Richardson propuso un modelo para medir qué tan 'RESTful' es una API, con cuatro niveles:"
    - Cuatro niveles en tarjetas con número grande:
      - Nivel 0 "The Swamp of POX": un único URI, un único método HTTP (generalmente POST). Todo es una llamada a procedimiento remoto sobre HTTP. (Ej: SOAP básico).
      - Nivel 1 "Recursos": múltiples URIs que identifican recursos. `GET /productos/42` ya tiene semántica.
      - Nivel 2 "Verbos HTTP": uso correcto de GET, POST, PUT, DELETE y códigos de estado. La mayoría de APIs "REST" están aquí.
      - Nivel 3 "HATEOAS": las respuestas incluyen hypermedia links. REST verdadero según Fielding.
    - Diagrama en escala ascendente (pirámide CSS con fondo progresivo de rojo a verde).
13. Sección recursos: `tipos-servicios-web.html`, `arquitectura-api.html`, `http-metodos-status.html`, `http-headers.html`, `cache.html`.
14. Footer estándar. Highlight.js. Animaciones. Responsivo.
