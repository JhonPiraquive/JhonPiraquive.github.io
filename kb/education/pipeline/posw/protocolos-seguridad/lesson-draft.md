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
source_brief: kb/education/pipeline/posw/protocolos-seguridad/brief.md
topic_expert: topic-expert-web-services
tsx_sections:
  - ObjetivosDelTemaSection
  - HttpSection
  - HttpsSection
  - SslTlsSection
  - FlujoTlsSection
  - ComparativaHttpHttpsSection
  - ResumenSection
  - CompruebaTuComprensionSection
  - RetoIntegradorSection
  - CierreSection
  - MiniquizFinalSection
---

## Objetivos de aprendizaje

Al finalizar la lección, el estudiante podrá:

- **Definir** HTTP como protocolo de aplicación stateless entre cliente y servidor, con puerto 80 y mensajes en texto plano sin cifrado.
- **Explicar** HTTPS como HTTP sobre TLS, enumerando confidencialidad, integridad y autenticación del servidor (certificado CA, puerto 443).
- **Diferenciar** SSL (obsoleto) de TLS 1.2/1.3 (aceptables en 2025) y **ubicar** hitos en la línea de tiempo.
- **Describir** los pasos principales del handshake TLS 1.3 (ClientHello, ServerHello, Certificate, Finished, canal cifrado).
- **Comparar** HTTP vs HTTPS en puerto, cifrado, certificado, SEO y recomendación de uso en producción vs desarrollo local.

## Prerrequisitos

- **Lección `servicios-web`:** cliente-servidor, peticiones HTTP básicas.
- **Lección `formatos-datos`:** JSON en respuestas HTTP.
- Conocimiento básico de URLs (`http://`, `https://`) y navegador web.

## Contenido

### Objetivos del tema

**Sección TSX:** `ObjetivosDelTemaSection`

Esta lección cubre HTTP como protocolo de aplicación, HTTPS con TLS, la evolución SSL→TLS y el handshake que establece un canal cifrado. Los objetivos medibles se listan arriba.

<!-- interactive: Callout -->
{
  "title": "Producción siempre HTTPS",
  "children": "Enviar credenciales o tokens Bearer por HTTP en producción expone datos en cualquier red intermedia. TLS protege el transporte; la autenticación de usuarios sigue siendo responsabilidad de la capa de aplicación."
}

---

### 1) HTTP: HyperText Transfer Protocol

**Sección TSX:** `HttpSection`

#### Mapa mental

- Protocolo de capa de aplicación (Tim Berners-Lee, 1989).
- **Stateless:** cada petición es independiente.
- Puerto **80**, datos en **texto plano** (sin cifrado).
- Versiones: HTTP/1.0, HTTP/1.1, HTTP/2, HTTP/3 (QUIC).

#### Qué es

**HTTP** define el formato y la transmisión de mensajes entre clientes (navegadores, apps, scripts) y servidores. El servidor no retiene memoria del cliente entre peticiones; el estado de sesión se simula con cookies, tokens u otros mecanismos de aplicación.

#### Ejemplo: GET en texto plano (vulnerable)

<!-- code: http -->
```http
GET /api/usuarios/42 HTTP/1.1
Host: api.ejemplo.com
Accept: application/json
Authorization: Bearer eyJhbGciOiJIUzI1NiJ9...

(sin cuerpo en GET)
```

#### Anti-patrón: login en HTTP

<!-- code: http -->
```http
POST /login HTTP/1.1
Host: app-insegura.com
Content-Type: application/json

{"email":"ana@ejemplo.com","password":"secreta123"}
```

*Cualquier nodo en la red puede leer el cuerpo en texto plano.*

#### Riesgo en red compartida

En Wi-Fi pública, un interceptor con herramientas como Wireshark puede leer contraseñas, tokens Bearer y datos personales del mensaje crudo.

<!-- interactive: Callout -->
{
  "title": "Caso real: cafetería y token robado",
  "children": "Un desarrollador prueba contra http://api.staging.empresa.com desde un café. Un atacante captura Authorization: Bearer ... de un GET. Accede a datos hasta que rotan claves. Decisión clave: forzar HTTPS en todos los entornos accesibles fuera de localhost."
}

#### Stateless y sesión de usuario

HTTP no recuerda peticiones anteriores. La "sesión" se mantiene con cookies, JWT en headers o API keys — mecanismos de **capa de aplicación**, no del protocolo HTTP.

#### Práctica guiada

<!-- interactive: PracticeExercise -->
{
  "prompt": "¿Por qué HTTP se llama stateless y cómo se mantiene entonces una sesión de usuario en una web?",
  "hints": ["Cada petición es independiente", "Cookies, tokens o sesiones en aplicación"],
  "expectedKeywords": ["stateless", "cookie", "token", "aplicación"],
  "successMessage": "Correcto. HTTP no guarda estado entre peticiones; la aplicación simula sesión con cookies, JWT u otros mecanismos."
}

---

### 2) HTTPS: HTTP Secure

**Sección TSX:** `HttpsSection`

#### Mapa mental

- HTTP + capa de cifrado **TLS** debajo.
- Puerto **443**.
- Certificado digital de una **CA** de confianza.
- Tres pilares: confidencialidad, integridad, autenticación.

#### Qué es

**HTTPS** es HTTP sobre TLS. El servidor presenta un certificado; el navegador valida con la CA; se negocia una clave de sesión simétrica; el tráfico posterior viaja cifrado.

#### Los tres pilares

| Pilar | Qué garantiza | Ataque que mitiga |
|-------|---------------|-------------------|
| Confidencialidad | Terceros no leen el contenido | Sniffing en Wi-Fi pública |
| Integridad | Detección de alteración en tránsito | Man-in-the-middle que modifica respuestas |
| Autenticación | El servidor es quien dice ser | Impostor con certificado inválido |

#### URL: esquema define seguridad del transporte

<!-- code: text -->
```text
http://api.ejemplo.com/recursos   → puerto 80, sin cifrado TLS
https://api.ejemplo.com/recursos  → puerto 443, con TLS
```

#### Misma petición tras HTTPS (conceptual)

<!-- code: http -->
```http
# Lo que viaja dentro del túnel TLS (misma línea HTTP, cifrada en red):
GET /api/datos HTTP/1.1
Host: api.ejemplo.com
Accept: application/json
```

<!-- code: http -->
```http
HTTP/1.1 200 OK
Content-Type: application/json

{"id":42,"nombre":"Ana García"}
```

#### Pila HTTP vs HTTPS

<!-- interactive: MermaidDiagram -->
{
  "chart": "flowchart TB\n  subgraph HTTP_stack [HTTP]\n    APP1[HTTP mensajes texto plano]\n    TCP1[TCP puerto 80]\n  end\n  subgraph HTTPS_stack [HTTPS]\n    APP2[HTTP mensajes]\n    TLS[TLS cifrado]\n    TCP2[TCP puerto 443]\n  end\n  APP1 --> TCP1\n  APP2 --> TLS --> TCP2"
}

<!-- interactive: Callout -->
{
  "title": "HTTPS no reemplaza login",
  "children": "TLS protege el transporte. Aún necesitas tokens, sesiones o API keys en la capa HTTP para autenticar usuarios. Un candado en el navegador no significa que la API esté autorizada para todos."
}

---

### 3) SSL vs TLS: evolución y versiones

**Sección TSX:** `SslTlsSection`

#### Mapa mental

- **SSL** (Netscape, 1995–1996): **obsoleto** por vulnerabilidades (POODLE, etc.).
- **TLS** = sucesor estandarizado por IETF.
- En 2025: solo **TLS 1.2 y TLS 1.3** son aceptables.
- SSL 3.0, TLS 1.0 y TLS 1.1 obsoletos desde 2020.

#### Línea de tiempo

<!-- interactive: CompareTable -->
{
  "headers": ["Versión", "Año", "Estado en 2025"],
  "rows": [
    ["SSL 2.0", "1995", "Obsoleto — no usar"],
    ["SSL 3.0", "1996", "Obsoleto — POODLE y otras vulnerabilidades"],
    ["TLS 1.0", "1999", "Obsoleto desde 2020"],
    ["TLS 1.1", "2006", "Obsoleto desde 2020"],
    ["TLS 1.2", "2008", "Aceptable"],
    ["TLS 1.3", "2018", "Recomendado — handshake más rápido, PFS obligatorio"]
  ]
}

#### Mejoras de TLS 1.3

- Handshake más rápido (1-RTT en muchos casos).
- Elimina cifrados débiles.
- **Perfect Forward Secrecy** obligatorio.
- Hashes SHA-256/384.

<!-- interactive: Callout -->
{
  "title": "Error frecuente: decir SSL cuando usas TLS",
  "children": "La terminología SSL está desactualizada. Configura servidores solo con TLS 1.2+. Documentación que dice \"usamos SSL 3.0 para compatibilidad\" es un hallazgo de seguridad crítico."
}

#### Práctica guiada

<!-- interactive: CodeChallenge -->
{
  "title": "Completa puertos y protocolos",
  "template": "HTTPS usa puerto ___ y cifra con ___; HTTP usa puerto ___ sin cifrado.",
  "blanks": [
    { "id": "blank1", "answer": "443", "placeholder": "puerto HTTPS" },
    { "id": "blank2", "answer": "TLS", "placeholder": "protocolo de cifrado" },
    { "id": "blank3", "answer": "80", "placeholder": "puerto HTTP" }
  ]
}

---

### 4) Flujo del handshake TLS 1.3

**Sección TSX:** `FlujoTlsSection`

#### Pasos principales

1. **ClientHello:** cliente envía versiones TLS soportadas, cipher suites y key_share (Diffie-Hellman).
2. **ServerHello + Certificate:** servidor elige parámetros y envía certificado digital.
3. **CertificateVerify + Finished (servidor):** prueba posesión de clave privada; mensaje Finished.
4. **Finished (cliente):** cliente confirma con su Finished.
5. **Canal cifrado:** peticiones HTTP viajan cifradas.

#### Diagrama de secuencia

<!-- interactive: MermaidDiagram -->
{
  "chart": "sequenceDiagram\n  participant C as Cliente\n  participant S as Servidor\n  C->>S: ClientHello (TLS, ciphers, key_share)\n  S->>C: ServerHello + Certificate\n  S->>C: CertificateVerify + Finished\n  C->>S: Finished\n  Note over C,S: Canal cifrado establecido\n  C->>S: GET /api/datos (cifrado)\n  S->>C: HTTP 200 OK (cifrado)"
}

<!-- interactive: StepReveal -->
{
  "title": "Handshake TLS 1.3 paso a paso",
  "steps": [
    {
      "title": "1. ClientHello",
      "content": "El cliente anuncia versiones TLS, cipher suites y parámetros de intercambio de claves (key_share)."
    },
    {
      "title": "2. ServerHello + Certificate",
      "content": "El servidor responde con su elección de parámetros y presenta el certificado digital firmado por una CA."
    },
    {
      "title": "3. CertificateVerify + Finished (servidor)",
      "content": "El servidor demuestra que posee la clave privada del certificado y envía su mensaje Finished."
    },
    {
      "title": "4. Finished (cliente)",
      "content": "El cliente envía su Finished; ambas partes confirman que el handshake fue íntegro."
    },
    {
      "title": "5. Canal cifrado activo",
      "content": "Las peticiones HTTP (GET, POST, etc.) viajan cifradas. Un interceptor solo ve tráfico opaco."
    }
  ]
}

#### Orden del handshake

Orden correcto: (b) ClientHello → (d) ServerHello + Certificate → (e) Finished servidor → (a) Finished cliente → (c) canal cifrado activo.

---

### 5) Comparativa HTTP vs HTTPS

**Sección TSX:** `ComparativaHttpHttpsSection`

<!-- interactive: CompareTable -->
{
  "headers": ["Aspecto", "HTTP", "HTTPS"],
  "rows": [
    ["Puerto por defecto", "80", "443"],
    ["Cifrado", "No (texto plano)", "Sí (TLS)"],
    ["Certificado", "No requerido", "Certificado CA (Let's Encrypt, etc.)"],
    ["Indicador navegador", "\"No seguro\"", "Candado"],
    ["SEO (Google)", "Penalizado desde 2014", "Recomendado / esperado"],
    ["Uso en 2025", "Solo localhost / redes aisladas", "Obligatorio en producción y staging público"],
    ["Overhead", "Mínimo", "Mínimo moderno (~1 ms); riesgo HTTP no compensa"]
  ]
}

#### Producción vs desarrollo local

| Entorno | Recomendación |
|---------|---------------|
| Producción | Siempre HTTPS; certificado de CA pública (Let's Encrypt gratuito) |
| Staging accesible desde internet | HTTPS obligatorio; mismos riesgos que producción |
| Desarrollo local (`localhost`) | HTTP aceptable; o certificados auto-firmados con `mkcert` |
| Certificados auto-firmados en prod | No — advertencias al usuario; usar CA pública |

<!-- interactive: Callout -->
{
  "title": "Caso real: certificado vencido en Black Friday",
  "children": "Una tienda tiene TLS pero el certificado Let's Encrypt no se renovó. Navegadores muestran advertencia roja; Google baja ranking; conversión cae 40%. Monitoreo de caducidad y renovación automática son obligatorios."
}

#### Mixed content

Un sitio con candado (HTTPS) que carga recursos o APIs internas por HTTP tiene **mixed content**: el navegador bloquea o advierte; parte del tráfico sigue expuesto.

<!-- interactive: PracticeExercise -->
{
  "prompt": "Nombra los tres beneficios de HTTPS (confidencialidad, integridad, autenticación) con un ejemplo de ataque que cada uno mitiga.",
  "hints": ["Sniffing → confidencialidad", "MITM alteración → integridad", "Impostor → autenticación"],
  "expectedKeywords": ["confidencialidad", "integridad", "autenticación", "MITM"],
  "successMessage": "Correcto. Confidencialidad evita lectura; integridad detecta alteración; autenticación verifica identidad del servidor."
}

---

### Resumen

**Sección TSX:** `ResumenSection`

- **HTTP:** stateless, puerto 80, texto plano; adecuado solo en localhost o redes aisladas.
- **HTTPS:** HTTP + TLS, puerto 443; confidencialidad, integridad y autenticación del servidor.
- **SSL obsoleto;** usar TLS 1.2 o 1.3 en 2025.
- **Handshake TLS 1.3:** ClientHello → ServerHello + Certificate → Finished → canal cifrado.
- **Producción siempre HTTPS;** TLS no reemplaza autenticación de aplicación (tokens, sesiones).
- **Siguiente lección:** `http-metodos-status` — métodos HTTP y códigos de estado.

---

### Comprueba tu comprensión

**Sección TSX:** `CompruebaTuComprensionSection`

<!-- interactive: PracticeExercise -->
{
  "prompt": "Ordena el handshake TLS 1.3: (a) Finished cliente, (b) ClientHello, (c) canal cifrado activo, (d) ServerHello + Certificate, (e) Finished servidor. Indica el orden correcto.",
  "hints": ["Empieza con ClientHello", "Canal cifrado es el último estado"],
  "expectedKeywords": ["b", "d", "e", "a", "c"],
  "successMessage": "Correcto. Orden: (b) ClientHello → (d) ServerHello+Certificate → (e) Finished servidor → (a) Finished cliente → (c) canal cifrado."
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "¿Por qué SSL 3.0 y TLS 1.0 no deben usarse en 2025 aunque todavía funcionen?",
  "hints": ["Vulnerabilidades conocidas", "POODLE, obsolescencia desde 2020"],
  "expectedKeywords": ["obsoleto", "vulnerabilidad", "POODLE", "TLS 1.2"],
  "successMessage": "Correcto. Versiones antiguas tienen vulnerabilidades conocidas y están oficialmente obsoletas; usa TLS 1.2 o 1.3."
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "¿Cuándo es aceptable HTTP sin TLS y cuándo es obligatorio HTTPS?",
  "hints": ["localhost vs internet", "staging público vs desarrollo local"],
  "expectedKeywords": ["localhost", "producción", "staging", "HTTPS"],
  "successMessage": "Correcto. HTTP solo en localhost o redes aisladas; HTTPS obligatorio en producción y cualquier entorno accesible desde internet."
}

---

## Reto integrador

**Sección TSX:** `RetoIntegradorSection`

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

<!-- code: http -->
```http
POST /login HTTP/1.1
Host: api.ejemplo.com
Content-Type: application/json
Authorization: Bearer eyJhbGciOiJIUzI1NiJ9...

{"email":"ana@ejemplo.com","password":"secreta123"}
```

<!-- interactive: PracticeExercise -->
{
  "prompt": "Audita el inventario: lista hallazgos (API HTTP en prod, SSL 3.0, staging HTTP), propone correcciones TLS 1.2+ y describe los tres primeros pasos del handshake tras migrar.",
  "hints": [
    "API prod en HTTP → confidencialidad rota",
    "SSL 3.0 → obsoleto",
    "Staging público = mismo riesgo que prod",
    "ClientHello → ServerHello+Certificate → Finished"
  ],
  "expectedKeywords": ["HTTP", "TLS 1.2", "ClientHello", "certificado"],
  "successMessage": "Excelente. Has identificado riesgos de transporte, propuesto TLS moderno y descrito el inicio del handshake."
}

---

## Cierre

**Sección TSX:** `CierreSection`

Has completado el estudio de HTTP, HTTPS y TLS. Proteger el transporte es prerequisito para servicios web confiables; sin HTTPS en producción, tokens y credenciales quedan expuestos.

**Ideas clave para retener:**

- **HTTP** = stateless, puerto 80, sin cifrado; sesión se simula en aplicación.
- **HTTPS** = HTTP + TLS, puerto 443; confidencialidad, integridad, autenticación.
- **TLS 1.2/1.3** sí; SSL y TLS 1.0/1.1 no.
- **Handshake** establece canal cifrado antes de enviar datos sensibles.
- **Producción y staging público** siempre HTTPS; TLS no sustituye tokens ni login.

**Siguiente paso:** lección `http-metodos-status` — métodos GET, POST, PUT, DELETE y códigos de estado.

---

## Miniquiz

**Sección TSX:** `MiniquizFinalSection`

<!-- interactive: Quiz -->
{
  "questions": [
    {
      "question": "¿Qué significa que HTTP es stateless?",
      "options": [
        "El servidor guarda sesión automáticamente entre peticiones",
        "Cada petición es independiente; el protocolo no retiene estado del cliente",
        "No permite cookies",
        "Solo funciona con HTTPS"
      ],
      "correctIndex": 1,
      "feedback": "HTTP no recuerda peticiones anteriores por sí solo; el estado se añade en capa de aplicación."
    },
    {
      "question": "¿Cuál es el puerto por defecto de HTTPS?",
      "options": [
        "80",
        "443",
        "8080",
        "22"
      ],
      "correctIndex": 1,
      "feedback": "HTTP usa 80; HTTPS usa 443 con TLS debajo."
    },
    {
      "question": "¿Qué versión(es) de TLS son aceptables en 2025?",
      "options": [
        "SSL 2.0 y SSL 3.0",
        "TLS 1.0 y TLS 1.1",
        "TLS 1.2 y TLS 1.3",
        "Solo SSL 3.0"
      ],
      "correctIndex": 2,
      "feedback": "SSL y TLS 1.0/1.1 están obsoletos; usa TLS 1.2 o 1.3."
    },
    {
      "question": "¿Qué garantiza el certificado digital en HTTPS?",
      "options": [
        "Que el código JavaScript no tenga bugs",
        "Autenticación del servidor y base para el canal cifrado con la CA",
        "Que no haga falta autenticación de usuarios",
        "Que HTTP sea más rápido que UDP"
      ],
      "correctIndex": 1,
      "feedback": "El certificado permite verificar identidad del servidor y negociar TLS; no reemplaza login de usuarios."
    },
    {
      "question": "En una red Wi-Fi pública, el mayor riesgo de usar HTTP es…",
      "options": [
        "Que el servidor no encuentre la ruta",
        "Que terceros puedan leer el tráfico en texto plano",
        "Que JSON deje de funcionar",
        "Que el puerto 443 se bloquee"
      ],
      "correctIndex": 1,
      "feedback": "Sin TLS, credenciales y tokens viajan legibles para cualquier interceptor en la red."
    }
  ]
}

---

## SEO (sugerencias)

- **seoTitle:** HTTP vs HTTPS: TLS, SSL y handshake | POSW
- **seoDescription:** Aprende HTTP stateless, HTTPS con TLS 1.3, evolución SSL→TLS, handshake y comparativa producción vs localhost. Tercera lección del track POSW.
