# Instrucciones para frontend-developer: tipos-servicios-web.html

## Archivo de salida
`clases/programacion-orientada-sitios-web/tipos-servicios-web.html`

---

1. Crear `clases/programacion-orientada-sitios-web/tipos-servicios-web.html`. `<html lang="es">`. Título: "Tipos de Servicios Web | POSW".
2. Misma paleta CSS, Bootstrap 5, Bootstrap Icons, Google Fonts, highlight.js que el resto del curso.
3. Header fijo: "POSW". Nav: "SOAP", "REST", "GraphQL", "gRPC", "WebSockets", "Comparativa".
4. Hero: badge "Tema 5", `<h1>` "Tipos de Servicios Web", subtítulo "SOAP, REST, GraphQL, gRPC y WebSockets: cuándo usar cada arquitectura." Botón scroll a `#soap`.
5. Crear `<section id="soap">` padding 80px 0. Contiene:
   - `<h2>` "SOAP — Simple Object Access Protocol".
   - Párrafo: "SOAP es un protocolo de mensajería basado en XML desarrollado por Microsoft en 1998 y estandarizado por la W3C. Define un formato de mensaje estricto con un sobre (envelope), cabecera y cuerpo. Usa WSDL (Web Services Description Language) para describir el contrato del servicio."
   - Características clave en lista:
     - Protocolo (no estilo arquitectónico): define reglas estrictas de formato.
     - Transporte: principalmente HTTP, pero también SMTP, TCP.
     - Formato: siempre XML. Sin excepciones.
     - Contrato explícito: el WSDL define operaciones, parámetros y tipos.
     - WS-Security: estándar de seguridad robusto (firmado y cifrado a nivel de mensaje).
     - Verbosidad alta: mensajes XML muy extensos.
     - Predominante en servicios financieros, bancarios y sistemas gubernamentales legacy.
   - Ejemplo de mensaje SOAP en bloque código XML:
     ```xml
     <soapenv:Envelope
       xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
       xmlns:usr="http://api.ejemplo.com/usuarios">
       <soapenv:Header/>
       <soapenv:Body>
         <usr:ObtenerUsuario>
           <usr:id>42</usr:id>
         </usr:ObtenerUsuario>
       </soapenv:Body>
     </soapenv:Envelope>
     ```
   - Casos de uso reales: integración bancaria interbancaria (ACH), servicios de la DIAN, SAP, sistemas de salud HL7.
6. Crear `<section id="rest">` padding 80px 0 fondo `--surface`. Contiene:
   - `<h2>` "REST — Representational State Transfer".
   - Párrafo: "REST no es un protocolo sino un estilo arquitectónico definido por Roy Fielding en su tesis doctoral del año 2000. Aprovecha HTTP tal como fue diseñado: URIs como identificadores de recursos, métodos HTTP como verbos de operación, y códigos de estado como resultado."
   - Seis principios en mini-tarjetas (referencia a página `rest-principios.html`):
     - Stateless, Client-Server, Cacheable, Layered System, Uniform Interface, Code on Demand (opcional).
   - Ejemplo de endpoint REST en bloque código:
     ```
     GET    /api/v1/productos        → Lista productos
     GET    /api/v1/productos/42     → Obtener producto 42
     POST   /api/v1/productos        → Crear producto
     PUT    /api/v1/productos/42     → Reemplazar producto 42
     PATCH  /api/v1/productos/42     → Actualizar parcialmente
     DELETE /api/v1/productos/42     → Eliminar producto 42
     ```
   - Respuesta JSON ejemplo:
     ```json
     {
       "id": 42,
       "nombre": "Laptop Pro 15",
       "precio": 4500000,
       "stock": 12,
       "_links": {
         "self": "/api/v1/productos/42",
         "categoria": "/api/v1/categorias/3"
       }
     }
     ```
7. Crear `<section id="graphql">` padding 80px 0. Contiene:
   - `<h2>` "GraphQL".
   - Párrafo: "GraphQL es un lenguaje de consulta para APIs y un runtime de ejecución, creado por Facebook en 2012 y open-sourced en 2015. A diferencia de REST, el cliente especifica exactamente qué datos necesita. Hay un único endpoint (generalmente `POST /graphql`) y la estructura de la respuesta espeja la estructura de la consulta."
   - Diferencias vs REST en dos columnas (problema → solución GraphQL):
     - Over-fetching (REST devuelve campos que no necesitas) → El cliente define exactamente los campos.
     - Under-fetching (REST necesita múltiples requests) → Una sola query anidada obtiene todo.
     - Versionado de API complicado → El schema evoluciona sin versiones.
   - Ejemplo de query GraphQL en bloque código:
     ```graphql
     query ObtenerPedido($id: ID!) {
       pedido(id: $id) {
         id
         total
         cliente {
           nombre
           email
         }
         items {
           producto {
             nombre
             precio
           }
           cantidad
         }
       }
     }
     ```
   - Ejemplo de respuesta correspondiente en JSON.
   - Mutation example:
     ```graphql
     mutation CrearProducto($input: ProductoInput!) {
       crearProducto(input: $input) {
         id
         nombre
         precio
       }
     }
     ```
8. Crear `<section id="grpc">` padding 80px 0 fondo `--surface`. Contiene:
   - `<h2>` "gRPC — Google Remote Procedure Call".
   - Párrafo: "gRPC es un framework de RPC de alto rendimiento desarrollado por Google en 2015. Usa HTTP/2 para transporte y Protocol Buffers (protobuf) como formato de serialización binaria, lo que lo hace significativamente más eficiente que JSON/HTTP en términos de velocidad y tamaño de mensaje."
   - Características:
     - Serialización binaria (protobuf): 3–10x más compacto que JSON.
     - HTTP/2: multiplexación, streaming bidireccional.
     - Contrato estricto: el archivo `.proto` define la interfaz.
     - Generación de código automática para múltiples lenguajes.
     - Ideal para microservicios internos y comunicación servidor-a-servidor.
   - Ejemplo de archivo `.proto`:
     ```protobuf
     syntax = "proto3";

     service ProductoService {
       rpc ObtenerProducto (ProductoRequest) returns (ProductoResponse);
       rpc ListarProductos (ListaRequest) returns (stream ProductoResponse);
     }

     message ProductoRequest {
       int32 id = 1;
     }

     message ProductoResponse {
       int32 id = 1;
       string nombre = 2;
       double precio = 3;
       int32 stock = 4;
     }
     ```
9. Crear `<section id="websockets">` padding 80px 0. Contiene:
   - `<h2>` "WebSockets".
   - Párrafo: "WebSockets es un protocolo de comunicación bidireccional y full-duplex sobre una única conexión TCP persistente. A diferencia de HTTP, una vez establecida la conexión mediante el handshake de upgrade, tanto cliente como servidor pueden enviar mensajes en cualquier momento sin necesidad de nuevas peticiones."
   - Diagrama ASCII del flujo:
     ```
     CLIENTE                         SERVIDOR
        |── GET /ws (Upgrade: websocket) ──►|
        |◄── 101 Switching Protocols ───────|
        |                                   |
        |  CONEXIÓN PERSISTENTE ABIERTA      |
        |                                   |
        |── {"tipo":"mensaje","texto":"Hola"}►|
        |◄── {"tipo":"respuesta","texto":"!"} |
        |── {"tipo":"ping"} ───────────────►|
        |◄── {"tipo":"pong"} ───────────────|
        |                                   |
        |── close ──────────────────────────►|
     ```
   - Casos de uso: chat en tiempo real, notificaciones push, dashboards live, juegos multijugador, trading en tiempo real.
   - Ejemplo de código cliente JavaScript:
     ```javascript
     const ws = new WebSocket('wss://api.ejemplo.com/chat');

     ws.onopen = () => {
       ws.send(JSON.stringify({ tipo: 'unirse', sala: 'general' }));
     };

     ws.onmessage = (evento) => {
       const datos = JSON.parse(evento.data);
       console.log('Mensaje recibido:', datos);
     };

     ws.onerror = (error) => console.error('WebSocket error:', error);
     ws.onclose = () => console.log('Conexión cerrada');
     ```
10. Crear `<section id="comparativa">` padding 80px 0 fondo `--surface`. Contiene:
    - `<h2>` "Comparativa General".
    - Tabla HTML: Criterio | SOAP | REST | GraphQL | gRPC | WebSockets. Datos:
      - Protocolo base | HTTP/SMTP/etc | HTTP/1.1+ | HTTP | HTTP/2 | TCP (WS)
      - Formato | XML | JSON/XML | JSON | Protobuf (binario) | JSON/Binario
      - Contrato | WSDL | OpenAPI (opcional) | Schema GraphQL | .proto | Informal
      - Rendimiento | Bajo | Medio | Medio | Alto | Alto
      - Comunicación | Request/Response | Request/Response | Request/Response | Stream o R/R | Bidireccional
      - Curva de aprendizaje | Alta | Baja | Media | Media | Baja
      - Ideal para | Sistemas legacy/bancarios | APIs públicas web/mobile | BFF, frontend flexible | Microservicios internos | Tiempo real
    - Scroll horizontal en móvil.
    - Regla de selección en tarjeta destacada: "¿API pública para mobile/web? → REST. ¿Frontend necesita datos muy específicos? → GraphQL. ¿Microservicios internos de alto rendimiento? → gRPC. ¿Comunicación en tiempo real? → WebSockets. ¿Integración con sistema bancario legacy? → SOAP."
11. Sección recursos: `servicios-web.html`, `rest-principios.html`, `http-metodos-status.html`, `arquitectura-api.html`.
12. Footer estándar.
13. Highlight.js para todos los bloques de código. Responsivo completo.
