# Instrucciones para frontend-developer: apis.html

## Archivo de salida
`clases/programacion-orientada-sitios-web/apis.html`

---

1. Crear `clases/programacion-orientada-sitios-web/apis.html`. `<html lang="es">`. Título: "APIs: Qué son, Tipos y Herramientas | POSW".
2. Misma paleta, Bootstrap 5, Bootstrap Icons, Google Fonts, highlight.js.
3. Header fijo: "POSW". Nav: "¿Qué es?", "Tipos", "Herramientas", "Diseño".
4. Hero: badge "Tema 6", `<h1>` "APIs", subtítulo "Application Programming Interfaces: el pegamento de la web moderna." Botón scroll a `#que-es`.
5. Crear `<section id="que-es">` padding 80px 0. Contiene:
   - `<h2>` "¿Qué es una API?".
   - Párrafo: "Una API (Application Programming Interface) es un conjunto de definiciones y protocolos que permite que dos aplicaciones se comuniquen entre sí. Define qué operaciones están disponibles, cómo solicitarlas y qué esperar como respuesta, sin exponer la implementación interna."
   - Analogía en tarjeta destacada: "El menú de un restaurante es una API. Tú (el cliente) no entras a la cocina (el servidor/backend). Le das la orden al mesero (la API) usando el vocabulario del menú (los endpoints), y la cocina te devuelve lo que pediste (la respuesta). No sabes, ni necesitas saber, cómo se preparó."
   - Tres propiedades fundamentales en tarjetas con ícono:
     - `bi-eye-slash` "Abstracción": oculta la implementación interna.
     - `bi-plug` "Contrato": define qué se puede pedir y qué se recibirá.
     - `bi-arrow-left-right` "Interoperabilidad": permite que sistemas distintos colaboren.
   - Diagrama ASCII de flujo básico:
     ```
     [App Cliente]
          │
          │ HTTP Request
          │ GET /api/clima?ciudad=Medellin
          ▼
     [API Gateway / Servidor]
          │
          │ Procesa, consulta datos
          ▼
     [Fuente de datos / Servicio]
          │
          │ HTTP Response (JSON)
          ▼
     [App Cliente recibe datos]
     ```
6. Crear `<section id="tipos">` padding 80px 0 fondo `--surface`. Contiene:
   - `<h2>` "Tipos de APIs".
   - Subsección "Por accesibilidad" con 3 tarjetas horizontales:
     - `bi-globe` "API Pública (Open API)": accesible para cualquier desarrollador, generalmente con API key. Ejemplos: OpenWeatherMap, Google Maps, Stripe.
     - `bi-building-lock` "API Privada (Interna)": solo accesible dentro de la organización. Conecta microservicios o sistemas internos. No expuesta al público.
     - `bi-people` "API de Partner": acceso restringido a socios comerciales mediante acuerdos. Ejemplo: APIs de pago entre plataformas.
   - Subsección "Por arquitectura" con 4 tarjetas:
     - REST: la más común en la web moderna. Usa HTTP y JSON.
     - SOAP: protocolo XML estricto, común en sistemas financieros.
     - GraphQL: el cliente define la estructura de la respuesta.
     - gRPC: alto rendimiento con Protocol Buffers.
   - Nota de referencia: "Ver `tipos-servicios-web.html` para detalle completo de cada arquitectura."
7. Crear `<section id="herramientas">` padding 80px 0. Contiene:
   - `<h2>` "Herramientas para trabajar con APIs".
   - Grid de tarjetas (3 cols desktop, 2 tablet, 1 móvil). Cada tarjeta: nombre, propósito, tipo (GUI / CLI / Librería), caso de uso. Datos:
     - Postman | Plataforma completa para diseñar, testear y documentar APIs. Permite colecciones, entornos, mocks y tests automatizados. | GUI | Prueba manual de endpoints, compartir colecciones con el equipo.
     - Insomnia | Alternativa open-source a Postman. Soporta REST, GraphQL y gRPC. Interfaz limpia y rápida. | GUI | Mismo uso que Postman, preferida por algunos por su simplicidad.
     - curl | Herramienta de línea de comandos para transferir datos con URLs. Disponible en todos los sistemas operativos. | CLI | Pruebas rápidas, scripting, CI/CD.
     - HTTPie | CLI más legible que curl. Sintaxis simplificada, resaltado de sintaxis en terminal. | CLI | Alternativa amigable a curl para testing rápido.
     - Swagger UI / OpenAPI | Interfaz interactiva generada desde la especificación OpenAPI 3.0 del API. | GUI (web) | Documentación interactiva, pruebas directas desde el navegador.
     - Thunder Client | Extensión de VS Code para testear APIs sin salir del editor. | GUI (VS Code) | Flujo de trabajo integrado en el IDE.
     - Hoppscotch | Cliente web de APIs open-source (hoppscotch.io). No requiere instalación. | GUI (web) | Pruebas rápidas desde el navegador.
     - REST Assured | Librería Java para testing automatizado de APIs REST en proyectos JUnit/TestNG. | Librería | Tests de integración automatizados.
   - Bloque de código `curl` con ejemplos comunes:
     ```bash
     # GET básico
     curl https://api.ejemplo.com/productos

     # GET con header de autenticación
     curl -H "Authorization: Bearer TOKEN" \
          https://api.ejemplo.com/usuarios/me

     # POST con body JSON
     curl -X POST https://api.ejemplo.com/productos \
          -H "Content-Type: application/json" \
          -d '{"nombre": "Teclado", "precio": 150000}'

     # PATCH
     curl -X PATCH https://api.ejemplo.com/productos/42 \
          -H "Content-Type: application/json" \
          -d '{"precio": 130000}'

     # DELETE
     curl -X DELETE https://api.ejemplo.com/productos/42

     # Ver headers de respuesta
     curl -I https://api.ejemplo.com/productos
     ```
8. Crear `<section id="diseno">` padding 80px 0 fondo `--surface`. Contiene:
   - `<h2>` "Buenas Prácticas de Diseño de APIs".
   - Lista con ícono `bi-check-circle-fill` color `--accent`:
     - Usar sustantivos en los URIs, no verbos: `/productos` no `/obtenerProductos`.
     - Versionar la API desde el inicio: `/api/v1/`, `/api/v2/`.
     - Usar HTTPS siempre en producción.
     - Devolver códigos de estado HTTP correctos (201, 404, 422, 500...).
     - Incluir mensajes de error descriptivos en el cuerpo JSON.
     - Implementar paginación en colecciones: `?page=1&limit=20`.
     - Documentar con OpenAPI/Swagger desde el día uno.
     - Implementar rate limiting y throttling.
     - Autenticar con JWT u OAuth 2.0, no con usuario/contraseña en cada request.
   - Anti-patrones en lista con ícono `bi-x-circle-fill` color `#ff4757`:
     - `GET /eliminarProducto/42` (verbo en URI, método incorrecto).
     - Devolver siempre 200 OK aunque haya errores.
     - Exponer datos internos sensibles (contraseñas hasheadas, IDs de infraestructura).
     - No versionar y romper clientes existentes con cambios.
9. Sección recursos: `http-metodos-status.html`, `tokens.html`, `tipos-servicios-web.html`, `rest-principios.html`.
10. Footer estándar.
11. Highlight.js para bloques de código. Animaciones Intersection Observer. Responsivo.
