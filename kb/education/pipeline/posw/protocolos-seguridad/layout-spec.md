---
track: posw
slug: protocolos-seguridad
title: "Protocolos de Seguridad Web"
order: 3
prev: formatos-datos
next: http-metodos-status
---

## ProtocolosSeguridadLesson.tsx — orden de secciones

```tsx
<ObjetivosDelTemaSection />
<HttpSection />
<HttpsSection />
<SslTlsSection />
<FlujoTlsSection />
<ComparativaHttpHttpsSection />
<ResumenSection />
<CompruebaTuComprensionSection />
<RetoIntegradorSection />
<CierreSection />
<MiniquizFinalSection />
```

**Refactor:** eliminar `ContenidoSection`; dividir en 5 secciones temáticas + 6 bloques pedagógicos (11 secciones totales).

Imports a añadir: `ObjetivosDelTemaSection`, `HttpSection`, `HttpsSection`, `SslTlsSection`, `FlujoTlsSection`, `ComparativaHttpHttpsSection`, `ResumenSection`, `CompruebaTuComprensionSection`, `RetoIntegradorSection`, `CierreSection`, `MiniquizFinalSection`.

## Secciones

| orden | heading | component file | interactive components | notes |
|-------|---------|----------------|------------------------|-------|
| 1 | Objetivos del tema | `sections/ObjetivosDelTemaSection.tsx` | `Callout` | **Nuevo.** 5 objetivos + prerrequisitos + callout (draft L29–57). |
| 2 | HTTP: HyperText Transfer Protocol | `sections/HttpSection.tsx` | `CodeFiddle` ×2, `Callout`, `PracticeExercise` | **Nuevo.** H2 sin prefijo «1)». |
| 3 | HTTPS: HTTP Secure | `sections/HttpsSection.tsx` | `CodeFiddle` ×3, `MermaidDiagram`, `Callout` | **Nuevo.** H2 sin prefijo «2)». |
| 4 | SSL vs TLS: evolución y versiones | `sections/SslTlsSection.tsx` | `CompareTable`, `Callout`, `CodeChallenge` | **Nuevo.** H2 sin prefijo «3)». |
| 5 | Flujo del handshake TLS 1.3 | `sections/FlujoTlsSection.tsx` | `MermaidDiagram`, `StepReveal` | **Nuevo.** H2 sin prefijo «4)». |
| 6 | Comparativa HTTP vs HTTPS | `sections/ComparativaHttpHttpsSection.tsx` | `CompareTable`, `Callout`, `PracticeExercise` | **Nuevo.** H2 sin prefijo «5)». |
| 7 | Resumen | `sections/ResumenSection.tsx` | — | **Nuevo.** 6 viñetas (draft L348–353). |
| 8 | Comprueba tu comprensión | `sections/CompruebaTuComprensionSection.tsx` | `PracticeExercise` ×3 | **Nuevo.** Ejercicios `my-8`. |
| 9 | Reto integrador: audita el despliegue | `sections/RetoIntegradorSection.tsx` | `CodeFiddle`, `PracticeExercise` | **Nuevo.** Enunciado + POST login (draft L387–431). |
| 10 | Cierre de la lección | `sections/CierreSection.tsx` | — | **Nuevo.** Ideas clave + enlace `http-metodos-status` (draft L435–449). |
| 11 | Mini-quiz | `sections/MiniquizFinalSection.tsx` | `QuizSection` → `Quiz` | **Nuevo.** `QuizSection slug="protocolos-seguridad" track="posw"`. |

## Quiz — `src/lib/teaching-quizzes/posw.ts`

Registrar slug `protocolos-seguridad` con 5 preguntas del draft L457–515:

| # | Tema |
|---|------|
| 1 | HTTP stateless |
| 2 | Puerto HTTPS (443) |
| 3 | TLS 1.2 y 1.3 aceptables |
| 4 | Certificado digital / autenticación servidor |
| 5 | Riesgo HTTP en Wi-Fi pública |

**Infra:** `<QuizSection slug="protocolos-seguridad" track="posw" />` en `MiniquizFinalSection`.

## lesson-meta.ts

| Campo | Valor (draft § SEO) |
|-------|---------------------|
| `seoTitle` | `HTTP vs HTTPS: TLS, SSL y handshake \| POSW` |
| `seoDescription` | `Aprende HTTP stateless, HTTPS con TLS 1.3, evolución SSL→TLS, handshake y comparativa producción vs localhost. Tercera lección del track POSW.` |

## Bloques interactivos — props detalladas

> **Regla:** todo `<!-- code: -->` del draft → `CodeFiddle` con `language` y `code` (no `CodeBlock`).

### `ObjetivosDelTemaSection`

| id | componente | props |
|----|------------|-------|
| Objetivos medibles | prose `<ul>` | 5 objetivos draft L31–37 |
| Prerrequisitos | prose `<ul>` | draft L41–43 |
| `produccion-siempre-https` | `Callout` | `variant="callout-warning"`; title: «Producción siempre HTTPS»; children draft L54–56 |

### `HttpSection`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | draft L65–70 |
| Qué es | prose | draft L72–74 |
| `get-texto-plano-vulnerable` | `CodeFiddle` | `language="http"`; title: «GET en texto plano (vulnerable)»; code draft L79–86 |
| `login-http-inseguro` | `CodeFiddle` | `language="http"`; title: «Anti-patrón: login en HTTP»; code draft L91–97 |
| Riesgo red compartida | prose | draft L101–103 |
| `caso-cafeteria-token` | `Callout` | title: «Caso real: cafetería y token robado»; children draft L106–108 |
| Stateless y sesión | prose | draft L111–113 |
| `practica-stateless` | `PracticeExercise` | prompt: «¿Por qué HTTP se llama stateless y cómo se mantiene entonces una sesión de usuario en una web?»; hints: `["Cada petición es independiente", "Cookies, tokens o sesiones en aplicación"]`; expectedKeywords: `["stateless", "cookie", "token", "aplicación"]`; successMessage: «Correcto. HTTP no guarda estado entre peticiones; la aplicación simula sesión con cookies, JWT u otros mecanismos.» |

### `HttpsSection`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | draft L131–136 |
| Qué es | prose | draft L138–140 |
| Tres pilares | prose `<table>` | draft L143–148 |
| `url-esquema-puerto` | `CodeFiddle` | `language="text"`; title: «URL: esquema define seguridad»; code draft L153–156 |
| `peticion-dentro-tunel` | `CodeFiddle` | `language="http"`; title: «Petición dentro del túnel TLS»; code draft L161–166 |
| `respuesta-json-https` | `CodeFiddle` | `language="http"`; title: «Respuesta HTTP/JSON (cifrada en red)»; code draft L169–174 |
| `pila-http-vs-https` | `MermaidDiagram` | chart draft L178–180 |
| `https-no-reemplaza-login` | `Callout` | title: «HTTPS no reemplaza login»; children draft L184–186 |

### `SslTlsSection`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | draft L195–200 |
| `linea-tiempo-ssl-tls` | `CompareTable` | headers draft L205–206; rows draft L207–214 |
| Mejoras TLS 1.3 | prose `<ul>` | draft L217–222 |
| `error-ssl-vs-tls` | `Callout` | title: «Error frecuente: decir SSL cuando usas TLS»; children draft L225–227 |
| `completa-puertos-protocolos` | `CodeChallenge` | title: «Completa puertos y protocolos»; template: `HTTPS usa puerto ___ y cifra con ___; HTTP usa puerto ___ sin cifrado.`; blanks: `[{ "id": "blank1", "answer": "443", "placeholder": "puerto HTTPS" }, { "id": "blank2", "answer": "TLS", "placeholder": "protocolo de cifrado" }, { "id": "blank3", "answer": "80", "placeholder": "puerto HTTP" }]` |

### `FlujoTlsSection`

| id | componente | props |
|----|------------|-------|
| Pasos principales | prose `<ol>` | draft L249–255 |
| `handshake-tls-sequence` | `MermaidDiagram` | chart draft L259–261 |
| `handshake-tls-step-reveal` | `StepReveal` | title: «Handshake TLS 1.3 paso a paso»; steps[5] draft L267–288 |
| Orden del handshake | prose | draft L291–293 |

### `ComparativaHttpHttpsSection`

| id | componente | props |
|----|------------|-------|
| `tabla-http-vs-https` | `CompareTable` | headers draft L302–303; rows draft L304–312 |
| Producción vs desarrollo | prose `<table>` | draft L317–322 |
| `caso-certificado-vencido` | `Callout` | title: «Caso real: certificado vencido en Black Friday»; children draft L325–327 |
| Mixed content | prose | draft L330–332 |
| `practica-tres-pilares` | `PracticeExercise` | prompt: «Nombra los tres beneficios de HTTPS (confidencialidad, integridad, autenticación) con un ejemplo de ataque que cada uno mitiga.»; hints: `["Sniffing → confidencialidad", "MITM alteración → integridad", "Impostor → autenticación"]`; expectedKeywords: `["confidencialidad", "integridad", "autenticación", "MITM"]`; successMessage: «Correcto. Confidencialidad evita lectura; integridad detecta alteración; autenticación verifica identidad del servidor.» |

### `ResumenSection`

| elemento | contenido |
|----------|-----------|
| Viñetas | 6 puntos draft L348–353 |

### `CompruebaTuComprensionSection`

| id | componente | props |
|----|------------|-------|
| `comprension-orden-handshake` | `PracticeExercise` | prompt: «Ordena el handshake TLS 1.3: (a) Finished cliente, (b) ClientHello, (c) canal cifrado activo, (d) ServerHello + Certificate, (e) Finished servidor. Indica el orden correcto.»; hints: `["Empieza con ClientHello", "Canal cifrado es el último estado"]`; expectedKeywords: `["b", "d", "e", "a", "c"]`; successMessage: «Correcto. Orden: (b) ClientHello → (d) ServerHello+Certificate → (e) Finished servidor → (a) Finished cliente → (c) canal cifrado.» |
| `comprension-ssl-obsoleto` | `PracticeExercise` | prompt: «¿Por qué SSL 3.0 y TLS 1.0 no deben usarse en 2025 aunque todavía funcionen?»; hints: `["Vulnerabilidades conocidas", "POODLE, obsolescencia desde 2020"]`; expectedKeywords: `["obsoleto", "vulnerabilidad", "POODLE", "TLS 1.2"]`; successMessage: «Correcto. Versiones antiguas tienen vulnerabilidades conocidas y están oficialmente obsoletas; usa TLS 1.2 o 1.3.» |
| `comprension-cuando-http` | `PracticeExercise` | prompt: «¿Cuándo es aceptable HTTP sin TLS y cuándo es obligatorio HTTPS?»; hints: `["localhost vs internet", "staging público vs desarrollo local"]`; expectedKeywords: `["localhost", "producción", "staging", "HTTPS"]`; successMessage: «Correcto. HTTP solo en localhost o redes aisladas; HTTPS obligatorio en producción y cualquier entorno accesible desde internet.» |

### `RetoIntegradorSection`

| id | componente | props |
|----|------------|-------|
| Enunciado | prose + `<ol>` | «Audita y corrige el despliegue de una API»; inventario + tareas 1–5 + criterio éxito (draft L391–408) |
| `reto-login-sin-tls` | `CodeFiddle` | `language="http"`; title: «Mensaje que no debe viajar sin TLS»; code draft L411–418 |
| `reto-auditoria-api` | `PracticeExercise` | prompt: «Audita el inventario: lista hallazgos (API HTTP en prod, SSL 3.0, staging HTTP), propone correcciones TLS 1.2+ y describe los tres primeros pasos del handshake tras migrar.»; hints: `["API prod en HTTP → confidencialidad rota", "SSL 3.0 → obsoleto", "Staging público = mismo riesgo que prod", "ClientHello → ServerHello+Certificate → Finished"]`; expectedKeywords: `["HTTP", "TLS 1.2", "ClientHello", "certificado"]`; successMessage: «Excelente. Has identificado riesgos de transporte, propuesto TLS moderno y descrito el inicio del handshake.»; `rows={6}` |

### `CierreSection`

| elemento | contenido |
|----------|-----------|
| Párrafo cierre | draft L439 |
| Ideas clave | `<ul>` 5 viñetas draft L443–447 |
| Siguiente paso | enlace `http-metodos-status` draft L449 |

### `MiniquizFinalSection`

| elemento | props |
|----------|-------|
| H2 | «Mini-quiz» |
| Quiz | `<QuizSection slug="protocolos-seguridad" track="posw" />` |

## Componentes nuevos (escalar a lesson-developer)

| archivo | export | dependencias |
|---------|--------|--------------|
| `sections/ObjetivosDelTemaSection.tsx` | `ObjetivosDelTemaSection` | `Callout` |
| `sections/HttpSection.tsx` | `HttpSection` | `CodeFiddle` ×2, `Callout`, `PracticeExercise` |
| `sections/HttpsSection.tsx` | `HttpsSection` | `CodeFiddle` ×3, `MermaidDiagram`, `Callout` |
| `sections/SslTlsSection.tsx` | `SslTlsSection` | `CompareTable`, `Callout`, `CodeChallenge` |
| `sections/FlujoTlsSection.tsx` | `FlujoTlsSection` | `MermaidDiagram`, `StepReveal` |
| `sections/ComparativaHttpHttpsSection.tsx` | `ComparativaHttpHttpsSection` | `CompareTable`, `Callout`, `PracticeExercise` |
| `sections/ResumenSection.tsx` | `ResumenSection` | prose only |
| `sections/CompruebaTuComprensionSection.tsx` | `CompruebaTuComprensionSection` | `PracticeExercise` ×3 |
| `sections/RetoIntegradorSection.tsx` | `RetoIntegradorSection` | `CodeFiddle`, `PracticeExercise` |
| `sections/CierreSection.tsx` | `CierreSection` | prose only |
| `sections/MiniquizFinalSection.tsx` | `MiniquizFinalSection` | `QuizSection` (shared) |

## Secciones existentes — trabajo pendiente

| archivo | acción |
|---------|--------|
| `ContenidoSection.tsx` | **Eliminar** — contenido repartido en 5 secciones temáticas |
| `ProtocolosSeguridadLesson.tsx` | Orden 11 secciones + imports |

## Checklist lesson-developer

- [ ] H2 según lesson-spec (sin prefijos «1)»–«5)»)
- [ ] Migrar todo código → `CodeFiddle` (`http`, `text` — 6 bloques en draft)
- [ ] Crear 11 secciones; eliminar `ContenidoSection`
- [ ] Registrar quiz `protocolos-seguridad` en `teaching-quizzes/posw.ts`
- [ ] `lesson-meta.ts`: `seoTitle` / `seoDescription` desde draft § SEO

## Nav LessonLayout

| campo | valor |
|-------|-------|
| `prev` | `formatos-datos` |
| `next` | `http-metodos-status` |
