---
track: configuracion-servicios-web
slug: clase-02-hosting-correo-https
title: "Clase 2: Hosting, correo corporativo y HTTPS"
order: 3
prev: clase-01-fundamentos-web
next: clase-03-administracion-remota
---

## Páginas (paginación interna ADR 011)

| slug | component | secciones | layout |
|------|-----------|-----------|--------|
| `clase-02-hosting-correo-https` | `Clase02HostingCorreoHttpsHubLesson` | ObjetivosSection + ClassPagesNavSection | LessonLayout |
| `clase-02-hosting-correo-https/hosting-y-publicacion` | `HostingYPublicacionPageLesson` | ObjetivosSection, HostingSection, PublicacionSitioSection, LogsNginxPermisosSection | ClassPageLayout |
| `clase-02-hosting-correo-https/https-y-tls` | `HttpsYTlsPageLesson` | HttpHttpsSection, SslTlsSection, ProtocolosHttpsSection | ClassPageLayout |
| `clase-02-hosting-correo-https/correo-corporativo` | `CorreoCorporativoPageLesson` | CorreoCorporativoSection, CuentasCorporativasSection | ClassPageLayout |
| `clase-02-hosting-correo-https/practica-y-cierre` | `PracticaYCierrePageLesson` | CompruebaTuComprensionSection, RetoIntegradorSection, CierreSection, MiniquizSection | ClassPageLayout |

Nav prev/next: `class-navigation.ts` → `getPageNavChain()`.

---

## Clase02HostingCorreoHttpsLesson.tsx — orden de secciones

```tsx
<ObjetivosSection />
<HostingSection />
<HttpHttpsSection />
<SslTlsSection />
<ProtocolosHttpsSection />
<CorreoCorporativoSection />
<CompruebaTuComprensionSection />
<RetoIntegradorSection />
<CierreSection />
<MiniquizSection />
```

**Refactor:** eliminar `GuiaDocenteSection` del shell; dividir contenido HTTP/HTTPS y SSL/TLS fuera de `HostingSection`/`ProtocolosHttpsSection`; insertar `RetoIntegradorSection` entre Comprueba y Cierre (10 secciones totales).

**Target:** `src/components/teaching/lessons/configuracion-servicios-web/clase-02-hosting-correo-https/`

Imports a añadir: `HttpHttpsSection`, `SslTlsSection`, `RetoIntegradorSection`. Quitar `GuiaDocenteSection`.

## Secciones

| orden | heading | component file | interactive components | notes |
|-------|---------|----------------|------------------------|-------|
| 1 | Objetivos de la clase | `sections/ObjetivosSection.tsx` | `Callout` | 6 objetivos + prerrequisitos + callout apertura (draft L27–56). |
| 2 | Hosting: alojamiento web | `sections/HostingSection.tsx` | `StepReveal`, `MermaidDiagram`, `CompareTable`, `Callout`, `CodeFiddle` | H2 sin prefijo «1)». Incluye H3 «Tipos de hosting» y «Optimización en hosting». Reescribir desde draft L60–238. |
| 3 | HTTP y HTTPS en el despliegue web | `sections/HttpHttpsSection.tsx` | `CodeFiddle` ×5, `MermaidDiagram`, `Callout` | **Nuevo.** HTTP (puerto 80) + HTTPS (puerto 443). draft L241–401. |
| 4 | SSL vs TLS: certificados y versiones | `sections/SslTlsSection.tsx` | `MermaidDiagram`, `CodeFiddle` | **Nuevo.** SSL obsoleto vs TLS 1.2/1.3, handshake, certbot. draft L404–482. |
| 5 | Instalación HTTPS: certbot, redirect y renovación | `sections/ProtocolosHttpsSection.tsx` | `StepReveal`, `CodeFiddle` ×2 | Operaciones Let's Encrypt. draft L485–558. |
| 6 | Correo corporativo: MX, SPF, DKIM e IMAP/SMTP | `sections/CorreoCorporativoSection.tsx` | `MermaidDiagram`, `CodeFiddle` ×6, `StepReveal`, `Callout` ×2 | draft L561–736. |
| 7 | Comprueba tu comprensión | `sections/CompruebaTuComprensionSection.tsx` | `PracticeExercise` ×5, `CodeChallenge` ×2 | draft L739–802. |
| 8 | Reto integrador: presencia digital de artesaniasdelcaribe.co | `sections/RetoIntegradorSection.tsx` | `PracticeExercise` | **Nuevo.** Enunciado + criterio éxito (draft L805–830). |
| 9 | Cierre de la lección | `sections/CierreSection.tsx` | — | Ideas clave + enlace `clase-03-administracion-remota` (draft L834–846). |
| 10 | Mini-quiz | `sections/MiniquizSection.tsx` | `QuizSection` → `Quiz` | `<QuizSection slug="clase-02-hosting-correo-https" track="configuracion-servicios-web" />`. |

## Quiz — `src/lib/teaching-quizzes/configuracion-servicios-web.ts`

Slug `clase-02-hosting-correo-https` — verificar 5 preguntas del draft L852–896:

| # | Tema |
|---|------|
| 1 | Registro MX para correo entrante |
| 2 | Hosting compartido (recursos compartidos) |
| 3 | Relación HTTP/HTTPS (misma semántica + TLS) |
| 4 | SPF (TXT autorización de envío) |
| 5 | Renovación certificado Let's Encrypt (~90 días) |

**Infra:** `<QuizSection slug="clase-02-hosting-correo-https" track="configuracion-servicios-web" />` en `MiniquizSection`.

## lesson-meta.ts

| Campo | Valor (lesson-spec § SEO) |
|-------|---------------------------|
| `seoTitle` | `Hosting, correo MX y HTTPS/TLS \| CSW` |
| `seoDescription` | `Tipos de hosting, HTTP/HTTPS con TLS y Let's Encrypt, correo corporativo con MX, SPF y DKIM. Clase 2 del curso Configuración de servicios web.` |

## Bloques interactivos — props detalladas

> **Regla:** todo `<!-- code: -->` del draft → `CodeFiddle` con `language` y `code` (no `CodeBlock`). Lenguajes: `bash`, `http`, `nginx`, `apache`, `dns`, `text`.

### `ObjetivosSection`

| id | componente | props |
|----|------------|-------|
| Objetivos medibles | prose `<ul>` | 6 objetivos draft L31–36 |
| Prerrequisitos | prose `<ul>` | draft L40–42 |
| Intro | prose | draft L50 |
| `de-dominio-a-sitio-publicado` | `Callout` | `variant="callout-info"`; title: «De dominio a sitio publicado»; children draft L52–55 |

### `HostingSection`

| id | componente | props |
|----|------------|-------|
| Qué es / composición | prose + tablas | draft L64–132 |
| `despliegue-en-hosting` | `StepReveal` | title: «Despliegue en hosting»; steps[5] draft L82–106 |
| `ejemplo-sftp` | `CodeFiddle` | `language="bash"`; title: «Subida por SFTP»; code draft L139–142 |
| `eleccion-tipo-hosting` | `MermaidDiagram` | chart draft L169–172 |
| Tipos compartido/VPS/dedicado/nube | prose H4 + tablas | draft L176–198 |
| `comparativa-tipos-hosting` | `CompareTable` | headers draft L202; rows draft L203–208 |
| Caso ONG/CDMX | prose | draft L211–213 |
| `caso-tienda-medellin-cloudflare` | `Callout` | `variant="callout-info"`; title: «Caso real: tienda Medellín + Cloudflare»; children draft L216–218 |
| Señales buen/mal uso tipos | prose tabla | draft L221–227 |
| Optimización CDN | prose `<ul>` | draft L231–237 |

### `HttpHttpsSection`

| id | componente | props |
|----|------------|-------|
| HTTP qué es / cómo / ventajas | prose + tablas | draft L245–312 |
| `peticion-http` | `CodeFiddle` | `language="http"`; title: «Request HTTP»; code draft L265–271 |
| `respuesta-http` | `CodeFiddle` | `language="http"`; title: «Response HTTP»; code draft L276–282 |
| `curl-http` | `CodeFiddle` | `language="bash"`; title: «Probar HTTP con curl»; code draft L301–304 |
| HTTPS qué es / relación | prose + tabla HTTP/HTTPS | draft L320–346 |
| `pila-http-vs-https` | `MermaidDiagram` | chart draft L348–351 |
| Composición hosting HTTPS | prose `<ul>` | draft L355–359 |
| Ventajas/desventajas HTTPS | prose + tabla | draft L361–363 |
| `redirect-nginx-80` | `CodeFiddle` | `language="nginx"`; title: «Redirect HTTP→HTTPS (Nginx)»; code draft L370–376 |
| `get-sobre-tls` | `CodeFiddle` | `language="http"`; title: «GET cifrado tras handshake TLS»; code draft L381–386 |
| Señales buen/mal uso HTTPS | prose tabla | draft L388–394 |
| `caso-migracion-lima-no-seguro` | `Callout` | `variant="callout-warning"`; title: «Caso real: migración Lima — «No seguro»»; children draft L397–399 |

### `SslTlsSection`

| id | componente | props |
|----|------------|-------|
| SSL vs TLS definición | prose | draft L408–413 |
| Por qué importa TLS | prose | draft L415–417 |
| `handshake-tls-sequence` | `MermaidDiagram` | chart draft L421–424 |
| Pasos handshake (lista) | prose `<ol>` | draft L426–429 |
| Tabla SSL vs TLS | prose `<table>` | draft L433–438 |
| Estructura certificado | prose `<ul>` | draft L440–446 |
| Validación Let's Encrypt | prose `<table>` | draft L450–454 |
| Ventajas/desventajas | prose | draft L456–458 |
| `certbot-ejemplo` | `CodeFiddle` | `language="bash"`; title: «certbot en VPS con Nginx»; code draft L463–473 |
| Señales buen/mal uso TLS | prose tabla | draft L477–481 |

### `ProtocolosHttpsSection`

| id | componente | props |
|----|------------|-------|
| Intro operativa | prose | draft L489–497 |
| `certificado-lets-encrypt` | `StepReveal` | title: «Certificado Let's Encrypt»; steps[4] draft L499–519 |
| `nginx-ssl-completo` | `CodeFiddle` | `language="nginx"`; title: «Nginx SSL + redirect»; code draft L525–540 |
| `apache-redirect` | `CodeFiddle` | `language="apache"`; title: «Redirect HTTPS (.htaccess)»; code draft L545–549 |
| Señales buen/mal uso | prose tabla | draft L551–557 |

### `CorreoCorporativoSection`

| id | componente | props |
|----|------------|-------|
| Qué es / por qué importa | prose | draft L565–571 |
| Flujos entrante/saliente | prose `<ol>` | draft L575–585 |
| `flujo-correo-mx-imap` | `MermaidDiagram` | chart draft L587–590 |
| `dns-mx` | `CodeFiddle` | `language="dns"`; title: «Registros MX (Zoho)»; code draft L599–603 |
| `dns-spf` | `CodeFiddle` | `language="dns"`; title: «Registro SPF»; code draft L610–612 |
| `dns-dkim` | `CodeFiddle` | `language="dns"`; title: «Registro DKIM»; code draft L622–625 |
| IMAP/SMTP tabla | prose `<table>` | draft L629–632 |
| `imap-smtp-cliente` | `CodeFiddle` | `language="text"`; title: «Configuración cliente IMAP/SMTP»; code draft L635–639 |
| Proveedores tabla | prose `<table>` | draft L643–648 |
| Ventajas/desventajas | prose | draft L650–652 |
| Migración Zoho (pasos) | prose `<ol>` | draft L656–662 |
| `dns-migracion-completa` | `CodeFiddle` | `language="dns"`; title: «DNS completo migración Zoho»; code draft L667–678 |
| `dig-diagnostico` | `CodeFiddle` | `language="bash"`; title: «Diagnóstico MX/SPF/DKIM»; code draft L683–687 |
| `configuracion-correo-corporativo` | `StepReveal` | title: «Configuración correo corporativo»; steps[5] draft L689–713 |
| `caso-ong-bogota-mx-duplicados` | `Callout` | `variant="callout-warning"`; title: «Caso real: ONG Bogotá — MX duplicados»; children draft L717–719 |
| Señales buen/mal uso | prose tabla | draft L722–729 |
| `registro-a-no-es-mx` | `Callout` | `variant="callout-info"`; title: «Registro A ≠ MX»; children draft L732–734 |

### `CompruebaTuComprensionSection`

| id | componente | props |
|----|------------|-------|
| `comprension-hosting-compartido-vps` | `PracticeExercise` | prompt/hints/expectedKeywords/successMessage draft L743–749 |
| `comprension-causas-no-seguro` | `PracticeExercise` | draft L751–757 |
| `registros-dns-correo` | `CodeChallenge` | title: «Registros DNS de correo»; template/blanks draft L760–767 |
| `comprension-mx-duplicados` | `PracticeExercise` | draft L769–775 |
| `comprension-orden-correo-workspace` | `PracticeExercise` | draft L777–783 |
| `comando-certbot` | `CodeChallenge` | title: «Comando certbot»; template/blanks draft L786–793 |
| `comprension-ssl-vs-tls` | `PracticeExercise` | draft L795–801 |

Apilar ejercicios con `my-8` cada uno.

### `RetoIntegradorSection`

| id | componente | props |
|----|------------|-------|
| Enunciado | prose + `<ol>` | «Lanza la presencia digital de artesaniasdelcaribe.co»; entregables 1–6 + criterio éxito (draft L809–822) |
| `reto-artesanias-del-caribe` | `PracticeExercise` | prompt draft L825; hints draft L826; expectedKeywords draft L827; successMessage draft L828; `rows={6}` |

### `CierreSection`

| elemento | contenido |
|----------|-----------|
| H2 | «Cierre de la lección» |
| Resumen | `<ul>` 7 viñetas draft L840–846 |
| Siguiente paso | enlace `clase-03-administracion-remota` draft L846 |

### `MiniquizSection`

| elemento | props |
|----------|-------|
| H2 | «Mini-quiz» |
| Quiz | `<QuizSection slug="clase-02-hosting-correo-https" track="configuracion-servicios-web" />` |
| Bonus reflexión | prose opcional draft L898 (MX duplicados al migrar) |

## Componentes nuevos (escalar a lesson-developer)

| archivo | export | dependencias |
|---------|--------|--------------|
| `sections/HttpHttpsSection.tsx` | `HttpHttpsSection` | `CodeFiddle`, `MermaidDiagram`, `Callout` |
| `sections/SslTlsSection.tsx` | `SslTlsSection` | `MermaidDiagram`, `CodeFiddle` |
| `sections/RetoIntegradorSection.tsx` | `RetoIntegradorSection` | `PracticeExercise` |

## Secciones existentes — trabajo pendiente

| archivo | acción |
|---------|--------|
| `ObjetivosSection.tsx` | Reescribir desde draft; añadir callout apertura |
| `HostingSection.tsx` | Reescribir H2 «Hosting: alojamiento web»; quitar numeración «1.3»; añadir Mermaid, SFTP CodeFiddle, callout Cloudflare |
| `ProtocolosHttpsSection.tsx` | Quitar contenido HTTP/SSL ya movido; poblar StepReveal + nginx/apache CodeFiddle |
| `CorreoCorporativoSection.tsx` | Reescribir desde draft; 6 CodeFiddle dns/bash/text, sequence, stepper, 2 callouts |
| `CompruebaTuComprensionSection.tsx` | 5 PracticeExercise + 2 CodeChallenge del draft |
| `CierreSection.tsx` | 7 viñetas + enlace clase 03 |
| `MiniquizSection.tsx` | Verificar slug/track; alinear preguntas con draft |
| `GuiaDocenteSection.tsx` | **Eliminar** del shell (no está en draft/spec) |
| `Clase02HostingCorreoHttpsLesson.tsx` | Orden 10 secciones según mapa |

## Checklist lesson-developer

- [ ] H2 según lesson-spec § Brand (sin prefijos «1)»–«7)» ni «1.3»)
- [ ] Migrar todo código → `CodeFiddle` (`bash`, `http`, `nginx`, `apache`, `dns`, `text`)
- [ ] Crear `HttpHttpsSection`, `SslTlsSection`, `RetoIntegradorSection`
- [ ] Eliminar `GuiaDocenteSection` del lesson shell
- [ ] Verificar quiz `clase-02-hosting-correo-https` en `teaching-quizzes/configuracion-servicios-web.ts`
- [ ] `lesson-meta.ts`: `seoTitle` / `seoDescription` desde lesson-spec § SEO

## Nav LessonLayout

| campo | valor |
|-------|-------|
| `prev` | `clase-01-fundamentos-web` |
| `next` | `clase-03-administracion-remota` |
