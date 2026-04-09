# Instrucciones para frontend-developer: modelo-cliente-servidor.html

## Archivo de salida
`clases/programacion-orientada-sitios-web/modelo-cliente-servidor.html`

---

1. Crear `clases/programacion-orientada-sitios-web/modelo-cliente-servidor.html`. `<html lang="es">`. Título: "Modelo Cliente-Servidor | POSW".
2. Misma paleta, Bootstrap 5, Bootstrap Icons, Google Fonts, highlight.js.
3. Header fijo: "POSW". Nav: "¿Qué es?", "Funcionamiento", "Arquitectura", "Variantes", "Ejemplos reales".
4. Hero: badge "Tema 17", `<h1>` "Modelo Cliente-Servidor", subtítulo "El paradigma fundamental de la comunicación en redes: cómo la web funciona en su base." Botón scroll a `#que-es`.
5. Crear `<section id="que-es">` padding 80px 0. Contiene:
   - `<h2>` "¿Qué es el Modelo Cliente-Servidor?".
   - Párrafo: "El modelo cliente-servidor es un paradigma de arquitectura de red donde los roles están claramente separados: el cliente solicita servicios o recursos, y el servidor los provee. Es la base sobre la que opera la World Wide Web, el correo electrónico, las bases de datos en red y la mayoría de aplicaciones modernas."
   - Analogía: "El modelo cliente-servidor es como un cliente en un banco. Tú (cliente) te acercas a la ventanilla (servidor) y haces una solicitud (request): 'quiero retirar $200.000'. El cajero (servidor) verifica tu identidad, consulta la base de datos, y te da la respuesta (response): los billetes o un error."
   - Diagrama básico:
     ```
     ┌─────────────────┐        Request         ┌─────────────────┐
     │                 │ ─────────────────────► │                 │
     │     CLIENTE     │                         │    SERVIDOR     │
     │                 │ ◄───────────────────── │                 │
     └─────────────────┘        Response         └─────────────────┘
     Ejemplos: navegador,       HTTP/TCP          Ejemplos: Apache,
     app móvil, curl,                             Nginx, Node.js,
     Postman                                      Spring Boot
     ```
6. Crear `<section id="funcionamiento">` padding 80px 0 fondo `--surface`. Contiene:
   - `<h2>` "¿Cómo Funciona?".
   - Flujo paso a paso al abrir `https://ejemplo.com/productos`:
     1. "El usuario escribe la URL en el navegador."
     2. "El navegador consulta un servidor DNS para resolver `ejemplo.com` a una IP: `190.25.80.42`."
     3. "El navegador establece una conexión TCP con el servidor en el puerto 443 (HTTPS)."
     4. "Se realiza el handshake TLS para cifrar la conexión."
     5. "El navegador envía la petición HTTP: `GET /productos HTTP/1.1`."
     6. "El servidor recibe la petición, la procesa (consulta DB, aplica lógica de negocio)."
     7. "El servidor envía la respuesta: `HTTP/1.1 200 OK` con el cuerpo HTML o JSON."
     8. "El navegador recibe la respuesta y renderiza la página."
   - Diagrama de secuencia completo:
     ```
     Navegador          DNS              Servidor          Base de Datos
         │               │                  │                   │
         │ Resolver DNS  │                  │                   │
         │ ────────────► │                  │                   │
         │ ◄──── IP ─────│                  │                   │
         │               │                  │                   │
         │ TCP Handshake (SYN/SYN-ACK/ACK) │                   │
         │ ─────────────────────────────── ►│                   │
         │ TLS Handshake                    │                   │
         │ ─────────────────────────────── ►│                   │
         │                                  │                   │
         │ GET /productos HTTP/1.1           │                   │
         │ ─────────────────────────────── ►│                   │
         │                                  │── SELECT * FROM ─►│
         │                                  │◄── [resultados] ──│
         │ HTTP/1.1 200 OK + JSON           │                   │
         │ ◄────────────────────────────────│                   │
     ```
7. Crear `<section id="arquitectura">` padding 80px 0. Contiene:
   - `<h2>` "Arquitecturas Derivadas".
   - Subsección "2 Capas (2-Tier)":
     - Diagrama: Cliente ↔ Servidor (con BD integrada).
     - Ejemplo: aplicación de escritorio con acceso directo a MySQL.
     - Ventaja: sencillo. Desventaja: el cliente tiene acceso directo a la BD (inseguro), difícil de escalar.
   - Subsección "3 Capas (3-Tier)": la más común en la web.
     - Diagrama:
       ```
       Capa 1: Presentación    → Navegador / App móvil
       Capa 2: Lógica (API)    → Servidor backend (Node.js, Spring)
       Capa 3: Datos           → PostgreSQL, MongoDB, Redis
       ```
     - Ventaja: separación de responsabilidades, escalabilidad por capa, seguridad (la BD nunca está expuesta al cliente).
   - Subsección "N Capas / Microservicios":
     - Diagrama simplificado con API Gateway, múltiples microservicios, bases de datos independientes.
     - Ventaja: cada servicio escala independientemente. Desventaja: mayor complejidad operacional.
8. Crear `<section id="variantes">` padding 80px 0 fondo `--surface`. Contiene:
   - `<h2>` "Variantes del Modelo".
   - Tarjetas para tres variantes:
     - Peer-to-Peer (P2P): cada nodo actúa como cliente y servidor simultáneamente. Ejemplos: BitTorrent, blockchain. No hay un servidor central.
     - Híbrido (Cliente-Servidor + P2P): un servidor central coordina, pero los clientes comparten datos entre sí. Ejemplo: Skype, Spotify (metadatos en servidor, streaming P2P).
     - Serverless: el código se ejecuta en funciones efímeras en la nube (AWS Lambda, Cloudflare Workers). El desarrollador no gestiona servidores; la nube escala automáticamente.
9. Crear `<section id="ejemplos">` padding 80px 0. Contiene:
   - `<h2>` "Ejemplos Reales".
   - Tabla: Aplicación | Tipo de cliente | Servidor | Protocolo. Datos:
     - Google Search | Navegador web | Cluster Google | HTTPS
     - Gmail | Navegador / App | Servidores Google | HTTPS + WebSockets
     - WhatsApp | App móvil | Servidores Meta | HTTPS + WebSockets
     - Netflix | Smart TV / App / Web | CDN + API servers | HTTPS + WebRTC
     - Videojuego online | Cliente del juego | Game server | UDP / WebSockets
     - Cajero automático (ATM) | Terminal ATM | Servidor bancario | ISO 8583 / HTTPS
   - Nota de curiosidad: "Tu navegador hace en promedio 50–100 requests HTTP para cargar una sola página web moderna: HTML, CSS, JS, fuentes, imágenes, APIs de tracking, analytics, anuncios, etc."
10. Sección recursos: `protocolos-seguridad.html`, `http-metodos-status.html`, `frontend.html`, `backend.html`, `modelo-cliente-servidor.html`.
11. Footer estándar. Highlight.js. Animaciones. Responsivo.
