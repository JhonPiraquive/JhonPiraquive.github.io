---
track: posw
slug: tokens
title: "Tokens y Autenticación"
order: 8
prev: apis
next: frontend
---

## TokensLesson.tsx — orden de secciones

```tsx
<ObjetivosDelTemaSection />
<JwtSection />
<OAuthSection />
<ApiKeySesionesSection />
<ComparativaTokensSection />
<ResumenSection />
<CompruebaTuComprensionSection />
<RetoIntegradorSection />
<CierreSection />
<MiniquizFinalSection />
```

**Refactor:** eliminar `ContenidoSection`; dividir en 4 secciones temáticas + 6 bloques pedagógicos (10 secciones totales).

Imports a añadir: `ObjetivosDelTemaSection`, `JwtSection`, `OAuthSection`, `ApiKeySesionesSection`, `ComparativaTokensSection`, `ResumenSection`, `CompruebaTuComprensionSection`, `RetoIntegradorSection`, `CierreSection`, `MiniquizFinalSection`.

## Secciones

| orden | heading | component file | interactive components | notes |
|-------|---------|----------------|------------------------|-------|
| 1 | Objetivos del tema | `sections/ObjetivosDelTemaSection.tsx` | `Callout` | **Nuevo.** 5 objetivos + prerrequisitos + callout (draft L28–56). |
| 2 | JWT (JSON Web Token) | `sections/JwtSection.tsx` | `CodeFiddle` ×2, `StepReveal`, `MermaidDiagram`, `Callout` | **Nuevo.** H2 sin prefijo «1)». |
| 3 | OAuth 2.0 | `sections/OAuthSection.tsx` | `MermaidDiagram`, `StepReveal` | **Nuevo.** H2 sin prefijo «2)». |
| 4 | API Key y sesiones por cookie | `sections/ApiKeySesionesSection.tsx` | `CodeFiddle` ×2, `Callout`, `CodeChallenge` | **Nuevo.** H2 sin prefijo «3)». bash con `language="bash"`. |
| 5 | Comparativa y regla de decisión | `sections/ComparativaTokensSection.tsx` | `CompareTable`, `PracticeExercise` | **Nuevo.** H2 sin prefijo «4)». |
| 6 | Resumen | `sections/ResumenSection.tsx` | — | **Nuevo.** 6 viñetas (draft L321–330). |
| 7 | Comprueba tu comprensión | `sections/CompruebaTuComprensionSection.tsx` | `PracticeExercise` ×3 | **Nuevo.** Ejercicios `my-8`. |
| 8 | Reto integrador: plataforma de cursos | `sections/RetoIntegradorSection.tsx` | `CodeFiddle`, `PracticeExercise` | **Nuevo.** Enunciado + POST login (draft L364–408). |
| 9 | Cierre de la lección | `sections/CierreSection.tsx` | — | **Nuevo.** Ideas clave + enlace `frontend` (draft L412–425). |
| 10 | Mini-quiz | `sections/MiniquizFinalSection.tsx` | `QuizSection` → `Quiz` | **Nuevo.** `QuizSection slug="tokens" track="posw"`. |

## Quiz — `src/lib/teaching-quizzes/posw.ts`

Registrar slug `tokens` con 5 preguntas del draft L435–490:

| # | Tema |
|---|------|
| 1 | Partes JWT header.payload.signature |
| 2 | Payload codificado no cifrado |
| 3 | API Key identifica aplicación |
| 4 | Authorization Server emite access_token |
| 5 | Sesión cookie revocación inmediata |

**Infra:** `<QuizSection slug="tokens" track="posw" />` en `MiniquizFinalSection`.

## lesson-meta.ts

| Campo | Valor (draft § SEO) |
|-------|---------------------|
| `seoTitle` | `Tokens y Autenticación: JWT, OAuth y API Keys \| POSW` |
| `seoDescription` | `Aprende JWT, OAuth 2.0, API Keys y sesiones por cookie. Compara mecanismos, envía credenciales en HTTP y elige el método según tu tipo de app. Lección 8 del track POSW.` |

## Bloques interactivos — props detalladas

> **Regla:** todo `<!-- code: -->` del draft → `CodeFiddle` con `language` y `code` (no `CodeBlock`). Lenguajes: `http`, `json`, `javascript`, `bash`.

### `ObjetivosDelTemaSection`

| id | componente | props |
|----|------------|-------|
| Objetivos medibles | prose `<ul>` | 5 objetivos draft L30–36 |
| Prerrequisitos | prose `<ul>` | draft L38–42 |
| Intro | prose | draft L50 |
| `auth-vs-authz` | `Callout` | `variant="callout-info"`; title: «Autenticación vs autorización»; children draft L52–55 |

### `JwtSection`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | draft L64–69 |
| Estructura JWT | prose `<ul>` | draft L87–89 |
| `jwt-estructura-json` | `CodeFiddle` | `language="json"`; title: «Estructura JWT»; code draft L73–85 |
| `partes-jwt-step-reveal` | `StepReveal` | title: «Partes de un JWT»; steps[4] draft L91–112 |
| `flujo-jwt` | `MermaidDiagram` | chart draft L116–119 |
| `login-request-autenticado` | `CodeFiddle` | `language="http"`; title: «Login y request autenticado»; code draft L123–140 |
| `caso-pii-payload` | `Callout` | title: «Caso real: PII en el payload JWT»; children draft L142–146 |
| `almacenar-token-js` | `CodeFiddle` | `language="javascript"`; title: «Almacenar y enviar token en JavaScript»; code draft L150–170 |

### `OAuthSection`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | draft L178–183 |
| `oauth-authorization-code` | `MermaidDiagram` | chart draft L187–190 |
| Scopes | prose | draft L192–194 |
| `oauth-step-reveal` | `StepReveal` | title: «OAuth Authorization Code paso a paso»; steps[5] draft L196–221 |

### `ApiKeySesionesSection`

| id | componente | props |
|----|------------|-------|
| API Key intro | prose `<ul>` | draft L229–234 |
| `api-key-curl` | `CodeFiddle` | `language="bash"`; title: «API Key en header vs query»; code draft L236–244 |
| Sesión por cookie intro | prose `<ul>` | draft L246–250 |
| `sesion-cookie-http` | `CodeFiddle` | `language="http"`; title: «Sesión por cookie»; code draft L252–264 |
| `caso-api-key-filtrada` | `Callout` | title: «Caso real: API Key filtrada en GitHub»; children draft L266–270 |
| `completa-headers-auth` | `CodeChallenge` | title: «Completa el mecanismo de envío»; template draft L276–277; blanks draft L278–283 |

### `ComparativaTokensSection`

| id | componente | props |
|----|------------|-------|
| `tabla-comparativa-tokens` | `CompareTable` | headers draft L293; rows draft L295–301 |
| Regla de decisión | prose `<ul>` | draft L304–309 |
| `practica-login-google` | `PracticeExercise` | prompt: «Una app necesita 'Login con Google' y acceso al calendario del usuario. ¿Qué mecanismo usarías? ¿Qué roles intervienen y qué scopes pedirías?»; hints: `["No es JWT solo", "OAuth Authorization Code", "Scopes limitan permisos"]`; expectedKeywords: `["OAuth", "Authorization Server", "scope", "calendar"]`; successMessage: «Correcto. OAuth 2.0 con scopes como calendar.readonly; roles: usuario (Resource Owner), tu app (Client), Google (Auth Server), Calendar API (Resource Server).» |

### `ResumenSection`

| elemento | contenido |
|----------|-----------|
| Viñetas | 6 puntos draft L325–330 |

### `CompruebaTuComprensionSection`

| id | componente | props |
|----|------------|-------|
| `comprension-decodificar-jwt` | `PracticeExercise` | prompt: «Decodifica mentalmente un JWT sin la secret key: ¿qué verías en header y payload? ¿Por qué no debes guardar la contraseña del usuario ahí?»; hints: `["Base64URL no es cifrado", "jwt.io decodifica sin secret", "Solo claims no sensibles"]`; expectedKeywords: `["Base64", "decodificar", "no cifrado", "contraseña"]`; successMessage: «Correcto. Header y payload son legibles sin la secret; la firma solo prueba integridad. Nunca PII ni contraseñas en claims.» |
| `comprension-refresh-localstorage` | `PracticeExercise` | prompt: «¿Por qué el refresh token no debe guardarse en localStorage accesible desde JavaScript?»; hints: `["XSS roba tokens del DOM/storage", "HttpOnly cookie", "Duración larga del refresh"]`; expectedKeywords: `["XSS", "localStorage", "HttpOnly", "refresh"]`; successMessage: «Correcto. localStorage es accesible por scripts maliciosos (XSS). Refresh token debe ir en cookie HttpOnly o almacenamiento seguro del SO.» |
| `comprension-partner-api-key` | `PracticeExercise` | prompt: «Un partner server-to-server consume tu API con cuota mensual. ¿JWT, OAuth, API Key o sesión? ¿Dónde envías la credencial?»; hints: `["Identifica la app, no el usuario", "Header, no query string"]`; expectedKeywords: `["API Key", "X-API-Key", "header"]`; successMessage: «Correcto. API Key en header X-API-Key identifica la aplicación partner; combinar con rate limiting por key.» |

### `RetoIntegradorSection`

| id | componente | props |
|----|------------|-------|
| Enunciado | prose + `<ol>` | «Elige y diseña la autenticación de una plataforma de cursos online»; tareas 1–5 + criterio éxito (draft L368–378) |
| `reto-post-login` | `CodeFiddle` | `language="http"`; title: «POST login + tokens»; code draft L380–395 |
| `reto-cursos-integrador` | `PracticeExercise` | prompt: «Implementa el reto de la plataforma de cursos: asigna mecanismo por cliente, describe OAuth con GitHub (2 scopes) y explica revocación JWT vs sesión.»; hints: `["SPA/móvil → JWT", "Partner certificados → API Key", "GitHub → OAuth scopes read:user, user:email", "Revocar JWT = blacklist o esperar exp; sesión = borrar registro"]`; expectedKeywords: `["JWT", "OAuth", "API Key", "revocación", "scope"]`; successMessage: «Excelente. Has diseñado autenticación multi-cliente con mecanismos apropiados y conciencia de seguridad.»; `rows={6}` |

### `CierreSection`

| elemento | contenido |
|----------|-----------|
| Párrafo cierre | draft L416 |
| Ideas clave | `<ul>` 4 viñetas draft L418–423 |
| Siguiente paso | enlace `frontend` draft L425 |

### `MiniquizFinalSection`

| elemento | props |
|----------|-------|
| H2 | «Mini-quiz» |
| Quiz | `<QuizSection slug="tokens" track="posw" />` |

## Componentes nuevos (escalar a lesson-developer)

| archivo | export | dependencias |
|---------|--------|--------------|
| `sections/ObjetivosDelTemaSection.tsx` | `ObjetivosDelTemaSection` | `Callout` |
| `sections/JwtSection.tsx` | `JwtSection` | `CodeFiddle` ×2, `StepReveal`, `MermaidDiagram`, `Callout` |
| `sections/OAuthSection.tsx` | `OAuthSection` | `MermaidDiagram`, `StepReveal` |
| `sections/ApiKeySesionesSection.tsx` | `ApiKeySesionesSection` | `CodeFiddle` ×2, `Callout`, `CodeChallenge` |
| `sections/ComparativaTokensSection.tsx` | `ComparativaTokensSection` | `CompareTable`, `PracticeExercise` |
| `sections/ResumenSection.tsx` | `ResumenSection` | prose only |
| `sections/CompruebaTuComprensionSection.tsx` | `CompruebaTuComprensionSection` | `PracticeExercise` ×3 |
| `sections/RetoIntegradorSection.tsx` | `RetoIntegradorSection` | `CodeFiddle`, `PracticeExercise` |
| `sections/CierreSection.tsx` | `CierreSection` | prose only |
| `sections/MiniquizFinalSection.tsx` | `MiniquizFinalSection` | `QuizSection` (shared) |

## Secciones existentes — trabajo pendiente

| archivo | acción |
|---------|--------|
| `ContenidoSection.tsx` | **Eliminar** — contenido repartido en 4 secciones temáticas |
| `TokensLesson.tsx` | Orden 10 secciones + imports |

## Checklist lesson-developer

- [ ] H2 según draft (sin prefijos «1)»–«4)»)
- [ ] Migrar todo código → `CodeFiddle` (`http`, `json`, `javascript`, `bash` — 6 bloques en draft)
- [ ] Crear 10 secciones; eliminar `ContenidoSection`
- [ ] Registrar quiz `tokens` en `teaching-quizzes/posw.ts`
- [ ] `lesson-meta.ts`: `seoTitle` / `seoDescription` desde draft § SEO

## Nav LessonLayout

| campo | valor |
|-------|-------|
| `prev` | `apis` |
| `next` | `frontend` |
