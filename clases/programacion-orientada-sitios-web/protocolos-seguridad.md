# Instrucciones para frontend-developer: protocolos-seguridad.html

## Archivo de salida
`clases/programacion-orientada-sitios-web/protocolos-seguridad.html`

---

1. Crear archivo HTML5 en `clases/programacion-orientada-sitios-web/protocolos-seguridad.html`. `<html lang="es">`. Título: "SSL, TLS, HTTP y HTTPS | POSW".
2. Misma paleta CSS y tipografía que los archivos anteriores del curso. Bootstrap 5 + Bootstrap Icons + Google Fonts + highlight.js CDN.
3. Header fijo: logo "POSW", subtítulo del curso. Nav: "HTTP", "HTTPS", "SSL/TLS", "Flujo TLS", "Comparativa".
4. Hero: badge "Tema 3", `<h1>` "Protocolos de Seguridad Web", subtítulo "Cómo HTTP, HTTPS, SSL y TLS protegen la comunicación en internet." Botón scroll a `#http`.
5. Crear `<section id="http">` padding 80px 0. Contiene:
   - `<h2>` "HTTP — HyperText Transfer Protocol".
   - Párrafo: "HTTP es el protocolo de transferencia de hipertexto que define cómo los mensajes son formateados y transmitidos entre clientes (navegadores) y servidores web. Opera en la capa de aplicación del modelo OSI. Es un protocolo sin estado (stateless): cada petición es independiente, el servidor no retiene información del cliente entre requests."
   - Características en lista con íconos:
     - Puerto por defecto: 80.
     - Texto plano: los datos viajan sin cifrado.
     - Stateless: no hay memoria entre peticiones.
     - Creado por Tim Berners-Lee en 1989 en el CERN.
     - Versiones: HTTP/1.0, HTTP/1.1, HTTP/2, HTTP/3 (QUIC).
   - Ejemplo de mensaje HTTP crudo en bloque `<pre><code class="language-http">`:
     ```
     GET /api/usuarios/42 HTTP/1.1
     Host: api.ejemplo.com
     Accept: application/json
     Authorization: Bearer eyJhbGciOiJIUzI1NiJ9...

     (sin cuerpo en GET)
     ```
   - Nota de riesgo en tarjeta con borde rojo (`#ff4757`): "Problema crítico: cualquier persona en la misma red puede interceptar y leer este mensaje tal como viaja. En una red Wi-Fi pública, esto expone contraseñas, tokens y datos personales."
6. Crear `<section id="https">` padding 80px 0 fondo `--surface`. Contiene:
   - `<h2>` "HTTPS — HTTP Secure".
   - Párrafo: "HTTPS es HTTP con una capa de cifrado TLS por debajo. El servidor presenta un certificado digital emitido por una Autoridad Certificadora (CA) de confianza. El navegador valida el certificado y negocia una clave de sesión simétrica. A partir de ese punto, todo el tráfico viaja cifrado."
   - Tres beneficios en tarjetas con ícono verde `bi-shield-check`:
     - "Confidencialidad: los datos no pueden ser leídos por terceros interceptores."
     - "Integridad: garantiza que el mensaje no fue alterado en tránsito (ataques MITM)."
     - "Autenticación: confirma que el servidor es quien dice ser (no un impostador)."
   - Puerto por defecto: 443. Icono `bi-lock-fill` color `--accent`.
   - Mención de consecuencias SEO: "Google penaliza en rankings a sitios sin HTTPS desde 2014."
7. Crear `<section id="ssltls">` padding 80px 0. Contiene:
   - `<h2>` "SSL y TLS: historia y diferencias".
   - Línea de tiempo horizontal (CSS flex) con los siguientes hitos, cada uno en una tarjeta con año, nombre y descripción breve:
     - 1995: SSL 2.0 — Netscape. Primera versión pública. Retirada por vulnerabilidades.
     - 1996: SSL 3.0 — Netscape. Mejorada pero también vulnerable (POODLE, 2014).
     - 1999: TLS 1.0 — IETF. Sucesor estandarizado de SSL. Obsoleto desde 2020.
     - 2006: TLS 1.1 — IETF. Mejoras contra ataques CBC. Obsoleto desde 2020.
     - 2008: TLS 1.2 — IETF. Estándar actual en muchos sistemas.
     - 2018: TLS 1.3 — IETF. El más moderno: handshake más rápido, menos criptografía obsoleta.
   - Nota: "SSL ya no debe usarse. TLS 1.2 y 1.3 son los únicos aceptables en 2025."
   - Diferencias técnicas clave en tabla: Característica | SSL 3.0 | TLS 1.2 | TLS 1.3. Datos:
     - Estado | Obsoleto (RFC 7568) | Aceptable | Recomendado
     - Cifrados débiles | Sí | Algunos | No (eliminados)
     - Perfect Forward Secrecy | No | Opcional | Obligatorio
     - Velocidad handshake | Lenta | 2-RTT | 1-RTT (más rápido)
     - Algoritmos hash | MD5, SHA-1 | SHA-256 | SHA-256, SHA-384
8. Crear `<section id="flujo">` padding 80px 0 fondo `--surface`. Contiene:
   - `<h2>` "Flujo del Handshake TLS 1.3".
   - Diagrama de secuencia como bloque `<pre>` estilizado (fondo `#0d1117`, color `--accent`, fuente monospace, border-radius 8px):
     ```
     CLIENTE                              SERVIDOR
        |                                    |
        |── ClientHello ─────────────────────►|
        |   (versiones TLS, cipher suites,    |
        |    key_share: clave pública DH)      |
        |                                    |
        |◄──── ServerHello ──────────────────|
        |      (cipher elegido, key_share)    |
        |◄──── Certificate ──────────────────|
        |      (certificado X.509 del server) |
        |◄──── CertificateVerify ────────────|
        |◄──── Finished ─────────────────────|
        |                                    |
        |──── Finished ───────────────────── ►|
        |                                    |
        |═══ CANAL CIFRADO ESTABLECIDO ══════|
        |                                    |
        |── GET /api/datos HTTP/1.1 ──────── ►|  (cifrado)
        |◄── HTTP/1.1 200 OK ────────────────|  (cifrado)
     ```
   - Explicación paso a paso debajo del diagrama, en una lista numerada:
     1. "ClientHello: el cliente anuncia las versiones de TLS que soporta, los algoritmos de cifrado preferidos y su clave pública efímera (Diffie-Hellman)."
     2. "ServerHello + Certificate: el servidor elige el cipher suite, envía su clave pública DH y su certificado digital firmado por una CA."
     3. "CertificateVerify: el servidor firma un hash de los mensajes del handshake con su clave privada, probando que posee el certificado."
     4. "Finished (servidor): el servidor envía un MAC sobre todos los mensajes del handshake usando la clave de sesión derivada."
     5. "Finished (cliente): el cliente verifica el MAC, genera su propio Finished y el canal queda cifrado con claves simétricas derivadas del intercambio DH."
9. Crear `<section id="comparativa">` padding 80px 0. Contiene:
   - `<h2>` "HTTP vs HTTPS — Comparativa".
   - Tabla: Aspecto | HTTP | HTTPS. Datos:
     - Puerto | 80 | 443
     - Cifrado | No | Sí (TLS)
     - Certificado requerido | No | Sí (CA o auto-firmado)
     - Velocidad raw | Levemente más rápido | Overhead mínimo (~1ms moderno)
     - SEO | Penalizado | Favorecido por Google
     - Indicador navegador | "No seguro" | Candado verde
     - Recomendado en 2025 | No | Sí, siempre
   - Tarjeta consejo al pie: "Para desarrollo local puedes usar certificados auto-firmados (`mkcert`) o HTTP sin problema. En producción, HTTPS con certificados de Let's Encrypt (gratuitos) es obligatorio."
10. Sección recursos: enlaces a `http-metodos-status.html` (Métodos HTTP), `http-headers.html` (Headers HTTP), `tokens.html` (Tokens y autenticación).
11. Footer estándar del curso.
12. Animaciones de entrada (Intersection Observer) para tarjetas y la línea de tiempo.
13. En la línea de tiempo, en móvil, cambiar de horizontal a vertical (flex-direction: column).
