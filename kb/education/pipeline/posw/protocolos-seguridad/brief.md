---
track: posw
slug: protocolos-seguridad
title: "Protocolos de Seguridad Web"
order: 3
prerequisites:
  - servicios-web
  - formatos-datos
related:
  - http-metodos-status
  - http-headers
  - tokens
source: kb/education/sources/clases/programacion-orientada-sitios-web/protocolos-seguridad.md
topic_expert: topic-expert-web-services
---

## Objetivos medibles

Al finalizar la lección el estudiante podrá:

1. Definir **HTTP** como protocolo de aplicación stateless entre cliente y servidor, con puerto 80 y mensajes en texto plano sin cifrado.
2. Explicar **HTTPS** como HTTP sobre TLS, enumerando confidencialidad, integridad y autenticación del servidor (certificado CA, puerto 443).
3. Diferenciar **SSL** (obsoleto) de **TLS 1.2/1.3** (aceptables en 2025) y ubicar hitos en la línea de tiempo (SSL 3.0, TLS 1.0–1.3).
4. Describir los pasos principales del **handshake TLS 1.3** (ClientHello, ServerHello, Certificate, Finished, canal cifrado).
5. Comparar HTTP vs HTTPS en puerto, cifrado, certificado, SEO y recomendación de uso en producción vs desarrollo local.

## Conceptos clave

- **HTTP (HyperText Transfer Protocol):** protocolo de capa de aplicación (modelo OSI) que define formato y transmisión de mensajes entre clientes (navegadores) y servidores. Creado por Tim Berners-Lee (1989, CERN).
- **HTTP stateless:** cada petición es **independiente**; el servidor no retiene memoria del cliente entre requests (la sesión se simula con cookies, tokens, etc.).
- **HTTP características:** puerto **80**, datos en **texto plano** (sin cifrado), versiones HTTP/1.0, HTTP/1.1, HTTP/2, HTTP/3 (QUIC).
- **Riesgo HTTP:** en red compartida (Wi-Fi pública) cualquier interceptor puede leer contraseñas, tokens Bearer y datos personales del mensaje crudo.
- **HTTPS (HTTP Secure):** HTTP con capa de cifrado **TLS** debajo. Puerto **443**. El servidor presenta certificado digital de una **CA** de confianza; navegador valida y se negocia clave de sesión simétrica; el tráfico posterior va cifrado.
- **Tres pilares HTTPS:** **Confidencialidad** (no lectura por terceros), **Integridad** (detección de alteración — MITM), **Autenticación** (el servidor es quien dice ser, no un impostor).
- **SSL vs TLS:** SSL (Netscape, 1995–1996) está **obsoleto** por vulnerabilidades (POODLE, etc.). **TLS** es el sucesor estandarizado por IETF. En 2025 solo **TLS 1.2 y 1.3** son aceptables; SSL y TLS 1.0/1.1 obsoletos desde 2020.
- **TLS 1.3 mejoras:** handshake más rápido (1-RTT), elimina cifrados débiles, **Perfect Forward Secrecy** obligatorio, hashes SHA-256/384.
- **Handshake TLS 1.3 (resumen):** ClientHello (versiones, cipher suites, key_share DH) → ServerHello + Certificate + CertificateVerify + Finished → Finished cliente → **canal cifrado** → peticiones HTTP cifradas.
- **HTTP vs HTTPS:** producción siempre HTTPS (Let's Encrypt gratuito); desarrollo local puede usar HTTP o certificados auto-firmados (`mkcert`). Google penaliza sitios sin HTTPS en SEO desde 2014.
- **Indicadores navegador:** HTTP → "No seguro"; HTTPS → candado.

## Errores comunes

- **Enviar credenciales o tokens por HTTP en producción:** exposición en cualquier red intermedia; siempre HTTPS en entornos reales.
- **Decir "SSL" cuando se usa TLS:** terminología desactualizada; configurar servidores solo con TLS 1.2+.
- **Confiar en certificados auto-firmados en producción:** los usuarios ven advertencias; en prod usar CA pública (Let's Encrypt, etc.).
- **Asumir que HTTPS hace innecesaria la autenticación de aplicación:** TLS protege el transporte; aún necesitas tokens, sesiones o API keys en la capa HTTP.
- **Pensar que HTTP es "más rápido" de forma relevante:** el overhead moderno de TLS es mínimo (~1 ms); el riesgo de seguridad no compensa.
- **Ignorar caducidad del certificado:** certificados vencidos rompen confianza y SEO aunque TLS esté habilitado.
- **Mezclar contenido activo HTTP en página HTTPS (mixed content):** el navegador bloquea o advierte recursos inseguros.
- **Creer que stateless significa "sin login":** stateless es del protocolo HTTP; el estado de usuario se gestiona con mecanismos de aplicación.

## Casos reales

### 1. Cafetería: robo de token en Wi-Fi pública

Un desarrollador prueba su app contra `http://api.staging.empresa.com` desde un café. Un atacante en la misma red captura tráfico con Wireshark y extrae un `Authorization: Bearer ...` de un GET a `/api/usuarios/42`. Accede a datos de clientes hasta que rotan claves.

**Decisión clave:** forzar **HTTPS** en todos los entornos accesibles fuera de localhost; nunca tokens en texto plano sobre HTTP. Refuerza confidencialidad y riesgo de redes públicas.

### 2. E-commerce: certificado vencido en Black Friday

Una tienda online tiene TLS configurado pero el certificado Let's Encrypt no se renovó automáticamente. Los navegadores muestran advertencia roja; Google baja ranking; conversión cae 40% en horas pico.

**Decisión clave:** monitoreo de caducidad, renovación automática y **HTTPS como obligatorio** en producción — no solo "tener SSL instalado una vez".

## Ejemplos de código sugeridos

### Mensaje HTTP GET en texto plano (vulnerable)

<!-- code: http -->
```http
GET /api/usuarios/42 HTTP/1.1
Host: api.ejemplo.com
Accept: application/json
Authorization: Bearer eyJhbGciOiJIUzI1NiJ9...

(sin cuerpo en GET)
```

### Misma petición tras establecer HTTPS

<!-- code: http -->
```http
# Lo que viaja dentro del túnel TLS (conceptualmente la misma línea HTTP, pero cifrada en red):
GET /api/datos HTTP/1.1
Host: api.ejemplo.com
Accept: application/json
```

### Respuesta HTTP sobre canal ya cifrado

<!-- code: http -->
```http
HTTP/1.1 200 OK
Content-Type: application/json

{"id":42,"nombre":"Ana García"}
```

### URL: esquema define seguridad del transporte

<!-- code: text -->
```text
http://api.ejemplo.com/recursos   → puerto 80, sin cifrado TLS
https://api.ejemplo.com/recursos  → puerto 443, con TLS
```

### Anti-patrón: login en HTTP

<!-- code: http -->
```http
POST /login HTTP/1.1
Host: app-insegura.com
Content-Type: application/json

{"email":"ana@ejemplo.com","password":"secreta123"}
```
*Cualquier nodo en la red puede leer el cuerpo en texto plano.*

## Ejercicios de práctica

- **tipo:** reflexion — ¿Por qué HTTP se llama stateless y cómo se mantiene entonces una "sesión de usuario" en una web?
- **tipo:** reflexion — Nombra los tres beneficios de HTTPS (confidencialidad, integridad, autenticación) con un ejemplo de ataque que cada uno mitiga.
- **tipo:** ordenar-pasos — Ordena handshake TLS 1.3: (a) Finished cliente, (b) ClientHello, (c) canal cifrado activo, (d) ServerHello + Certificate, (e) Finished servidor.
- **tipo:** diagrama — Dibuja o etiqueta el diagrama de secuencia Cliente ↔ Servidor hasta "CANAL CIFRADO ESTABLECIDO".
- **tipo:** reflexion — ¿Por qué SSL 3.0 y TLS 1.0 no deben usarse en 2025 aunque "todavía funcionen"?
- **tipo:** completar-codigo — Completa: "HTTPS usa puerto ___ y cifra con ___; HTTP usa puerto ___ sin cifrado." → 443, TLS, 80.
- **tipo:** reflexion — ¿Cuándo es aceptable HTTP sin TLS y cuándo es obligatorio HTTPS?
- **tipo:** reflexion — Un sitio muestra candado pero la API interna sigue en HTTP. ¿Qué es mixed content y qué riesgo queda?

## Animación o visual sugerida

- **StepReveal — handshake TLS 1.3:** ClientHello → ServerHello → Certificate → Finished → tráfico cifrado.
- **Timeline — SSL/TLS:** 1995 SSL 2.0 → … → 2018 TLS 1.3 con estado obsoleto/aceptable/recomendado.
- **CompareTable — HTTP vs HTTPS:** puerto, cifrado, certificado, SEO, indicador navegador, uso 2025.
- **MermaidDiagram — secuencia handshake** (versión simplificada para clase).

## Diagrama Mermaid (si aplica)

### Secuencia handshake TLS 1.3 (simplificada)

```mermaid
sequenceDiagram
  participant C as Cliente
  participant S as Servidor
  C->>S: ClientHello (TLS, ciphers, key_share)
  S->>C: ServerHello + Certificate
  S->>C: CertificateVerify + Finished
  C->>S: Finished
  Note over C,S: Canal cifrado establecido
  C->>S: GET /api/datos (cifrado)
  S->>C: HTTP 200 OK (cifrado)
```

### HTTP vs HTTPS en la pila

```mermaid
flowchart TB
  subgraph HTTP_stack [HTTP]
    APP1[HTTP mensajes texto plano]
    TCP1[TCP puerto 80]
  end
  subgraph HTTPS_stack [HTTPS]
    APP2[HTTP mensajes]
    TLS[TLS cifrado]
    TCP2[TCP puerto 443]
  end
  APP1 --> TCP1
  APP2 --> TLS --> TCP2
```

## Secciones TSX sugeridas

- `ObjetivosSection` — 5 objetivos medibles
- `HttpSection` — definición, stateless, puerto 80, ejemplo crudo, riesgo Wi-Fi
- `HttpsSection` — TLS, certificado CA, tres pilares, puerto 443, SEO
- `SslTlsSection` — línea de tiempo SSL→TLS, tabla comparativa versiones
- `FlujoHandshakeTlsSection` — diagrama secuencia + pasos numerados
- `ComparativaHttpHttpsSection` — tabla y consejo producción vs local
- `CompruebaTuComprensionSection` — quiz

## Reto integrador

**"Audita y corrige el despliegue de una API"**

Te entregan este inventario:

- Frontend: `https://tienda.ejemplo.com` (certificado válido)
- API producción: `http://api.ejemplo.com` (puerto 80)
- Staging: `http://staging-api.ejemplo.com` accesible desde internet
- Documentación interna: "usamos SSL 3.0 para compatibilidad"

**Tareas:**

1. Lista cada hallazgo de seguridad y su impacto (confidencialidad, integridad, autenticación, SEO).
2. Propón URL, puerto y versión TLS correctos para producción.
3. Diferencia qué cambios exiges en staging vs desarrollo local (`localhost`).
4. Escribe un mensaje HTTP de ejemplo que **no** debe viajar sin TLS en producción.
5. Esboza los primeros tres mensajes del handshake que ocurrirían tras migrar a HTTPS.

**Criterio de éxito:** identifica HTTP en prod y SSL obsoleto, propone TLS 1.2+ y Let's Encrypt, distingue local vs staging público, handshake ordenado correctamente.

## Preguntas sugeridas para quiz (5)

1. **¿Qué significa que HTTP es stateless?**
   - A) El servidor guarda sesión automáticamente entre peticiones
   - B) Cada petición es independiente; el protocolo no retiene estado del cliente
   - C) No permite cookies
   - D) Solo funciona con HTTPS
   - **Correcta:** B
   - **Feedback:** HTTP no recuerda peticiones anteriores por sí solo; el estado se añade en capa de aplicación.

2. **¿Cuál es el puerto por defecto de HTTPS?**
   - A) 80
   - B) 443
   - C) 8080
   - D) 22
   - **Correcta:** B
   - **Feedback:** HTTP usa 80; HTTPS usa 443 con TLS debajo.

3. **¿Qué versión(es) de TLS son aceptables en 2025?**
   - A) SSL 2.0 y SSL 3.0
   - B) TLS 1.0 y TLS 1.1
   - C) TLS 1.2 y TLS 1.3
   - D) Solo SSL 3.0
   - **Correcta:** C
   - **Feedback:** SSL y TLS 1.0/1.1 están obsoletos; usa TLS 1.2 o 1.3.

4. **¿Qué garantiza el certificado digital en HTTPS?**
   - A) Que el código JavaScript no tenga bugs
   - B) Autenticación del servidor y base para el canal cifrado con la CA
   - C) Que no haga falta autenticación de usuarios
   - D) Que HTTP sea más rápido que UDP
   - **Correcta:** B
   - **Feedback:** El certificado permite verificar identidad del servidor y negociar TLS; no reemplaza login de usuarios.

5. **En una red Wi-Fi pública, el mayor riesgo de usar HTTP es…**
   - A) Que el servidor no encuentre la ruta
   - B) Que terceros puedan leer el tráfico en texto plano
   - C) Que JSON deje de funcionar
   - D) Que el puerto 443 se bloquee
   - **Correcta:** B
   - **Feedback:** Sin TLS, credenciales y tokens viajan legibles para cualquier interceptor en la red.

## Referencias

- Fuente docente: `kb/education/sources/clases/programacion-orientada-sitios-web/protocolos-seguridad.md`
- TSX migrado: `src/components/teaching/lessons/posw/protocolos-seguridad/`
- Prerrequisitos: `servicios-web`, `formatos-datos`
- Lección siguiente: `http-metodos-status` (métodos y códigos de estado)
- Relacionadas: `http-headers`, `tokens`
- MDN — HTTP: https://developer.mozilla.org/es/docs/Web/HTTP/Overview
- MDN — HTTPS: https://developer.mozilla.org/es/docs/Glossary/HTTPS
- RFC 8446 — TLS 1.3: https://www.rfc-editor.org/rfc/rfc8446
