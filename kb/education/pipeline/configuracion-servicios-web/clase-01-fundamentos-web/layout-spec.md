---
track: configuracion-servicios-web
slug: clase-01-fundamentos-web
title: "Fundamentos web: navegadores, IP, dominios y DNS"
order: 2
prev: index
next: clase-02-hosting-correo-https
---

## Páginas (paginación interna ADR 011)

| slug | component | secciones | layout |
|------|-----------|-----------|--------|
| `clase-01-fundamentos-web` | `Clase01FundamentosWebHubLesson` | ObjetivosSection + ClassPagesNavSection | LessonLayout |
| `clase-01-fundamentos-web/navegadores-web` | `NavegadoresWebPageLesson` | ObjetivosSection, NavegadoresWebSection | ClassPageLayout |
| `clase-01-fundamentos-web/direcciones-ip` | `DireccionesIpPageLesson` | Ipv4Section, Ipv6Section | ClassPageLayout |
| `clase-01-fundamentos-web/dns-y-dominios` | `DnsYDominiosPageLesson` | DnsSection, DominioSubdominioSection | ClassPageLayout |
| `clase-01-fundamentos-web/configuracion-dns` | `ConfiguracionDnsPageLesson` | ConfigurarDominioSection, DnsHerramientasSection | ClassPageLayout |
| `clase-01-fundamentos-web/practica-y-cierre` | `PracticaYCierrePageLesson` | CompruebaTuComprensionSection, RetoIntegradorSection, CierreSection, MiniquizFinalSection | ClassPageLayout |

Nav prev/next: `class-navigation.ts` → `getPageNavChain()`.

---

## Clase01FundamentosWebLesson.tsx — orden de secciones

```tsx
<ObjetivosSection />
<GuiaDocenteSection />
<NavegadoresWebSection />
<Ipv4Section />
<Ipv6Section />
<DnsSection />
<DominioSubdominioSection />
<ConfigurarDominioSection />
<CompruebaTuComprensionSection />
<RetoIntegradorSection />
<CierreSection />
<MiniquizFinalSection />
```

**Refactor:** eliminar `DominiosIpSection` y `DominiosDnsSection`; dividir en `Ipv4Section`, `Ipv6Section`, `DnsSection`, `DominioSubdominioSection`, `ConfigurarDominioSection`; añadir `RetoIntegradorSection`; renombrar `MiniquizSection` → `MiniquizFinalSection`. Mantener `GuiaDocenteSection` (guía de tiempo docente).

**TSX target:** `src/components/teaching/lessons/configuracion-servicios-web/clase-01-fundamentos-web/`

Imports a añadir/actualizar: `ObjetivosSection`, `GuiaDocenteSection`, `NavegadoresWebSection`, `Ipv4Section`, `Ipv6Section`, `DnsSection`, `DominioSubdominioSection`, `ConfigurarDominioSection`, `CompruebaTuComprensionSection`, `RetoIntegradorSection`, `CierreSection`, `MiniquizFinalSection`.

## Secciones

| orden | heading | component file | interactive components | notes |
|-------|---------|----------------|------------------------|-------|
| 1 | Objetivos del tema | `sections/ObjetivosSection.tsx` | `Callout` | Existente — poblar objetivos, prerrequisitos + callout (draft L30–58). |
| 2 | Guía de tiempo para el docente | `sections/GuiaDocenteSection.tsx` | `CompareTable` | Existente — sin cambios de estructura. |
| 3 | Navegadores web: motores y DevTools | `sections/NavegadoresWebSection.tsx` | `CompareTable`, `PracticeExercise` | Existente — expandir con draft L62–151. H2 sin prefijo «1)». |
| 4 | Dirección IP: composición IPv4 | `sections/Ipv4Section.tsx` | `<img>`, `CodeFiddle` ×3, `PracticeExercise` | **Nuevo.** Reemplaza `DominiosIpSection`. Imagen IPv4 + tipos IP en prose. |
| 5 | IPv6: direcciones de 128 bits | `sections/Ipv6Section.tsx` | `CompareTable`, `CodeFiddle` ×2 | **Nuevo.** Draft L265–345. |
| 6 | DNS: resolución de nombres | `sections/DnsSection.tsx` | `StepReveal`, `MermaidDiagram`, `CodeFiddle` ×2, `PracticeExercise` | **Nuevo.** Reemplaza bloque DNS de `DominiosDnsSection`. |
| 7 | Dominio y subdominio | `sections/DominioSubdominioSection.tsx` | `MermaidDiagram`, `Callout`, `CodeFiddle`, `PracticeExercise` | **Nuevo.** Dos H2 internos: «Dominio: SLD, TLD y registro» + «Subdominio: separar servicios». |
| 8 | Configurar dominio: NS y registros DNS | `sections/ConfigurarDominioSection.tsx` | `CompareTable`, `CodeFiddle` ×4, `Callout`, `PracticeExercise` | **Nuevo.** Incluye «Errores frecuentes» al cierre (draft L752–761). |
| 9 | Comprueba tu comprensión | `sections/CompruebaTuComprensionSection.tsx` | `PracticeExercise` ×2 | Existente — poblar 2 ejercicios (draft L765–784). |
| 10 | Reto integrador: agencia creativosvalle.co en Cali | `sections/RetoIntegradorSection.tsx` | `PracticeExercise` | **Nuevo.** Enunciado + criterio éxito (draft L787–816). |
| 11 | Cierre de la lección | `sections/CierreSection.tsx` | — | Existente — ideas clave + enlace `clase-02-hosting-correo-https` (draft L820–834). |
| 12 | Mini-quiz | `sections/MiniquizFinalSection.tsx` | `QuizSection` → `Quiz` | Renombrar desde `MiniquizSection`. `QuizSection slug="clase-01-fundamentos-web" track="configuracion-servicios-web"`. |

## Quiz — `src/lib/teaching-quizzes/configuracion-servicios-web.ts`

Actualizar clave `clase-01-fundamentos-web` con 5 preguntas del draft L842–901 (reemplaza quiz placeholder actual):

| # | Tema |
|---|------|
| 1 | IPv4: 32 bits, 4 octetos de 8 bits |
| 2 | Motivación IPv6: agotamiento espacio IPv4 |
| 3 | Servidor raíz DNS: delegación a TLD, no IP final |
| 4 | Registro A asocia nombre con IPv4 |
| 5 | 192.168.x.x en registro A público: IP privada RFC 1918 |

**Infra:** `<QuizSection slug="clase-01-fundamentos-web" track="configuracion-servicios-web" />` en `MiniquizFinalSection`.

## lesson-meta.ts

| Campo | Valor (lesson-spec § SEO) |
|-------|---------------------------|
| `seoTitle` | `Fundamentos web: navegadores, IP y DNS \| Servicios web` |
| `seoDescription` | `Compara navegadores y DevTools, explica IPv4 e IPv6, estructura dominios y flujo DNS con registros A, AAAA, CNAME y MX. Clase 1 del curso Configuración de servicios web.` |
| `title` | `Fundamentos web: navegadores, IP, dominios y DNS` |

## Imagen IPv4

| Campo | Valor |
|-------|-------|
| Asset | `public/teaching/configuracion-servicios-web/ipv4-composicion.png` |
| URL pública | `/teaching/configuracion-servicios-web/ipv4-composicion.png` |
| Sección | `Ipv4Section` — bloque «Estructura / Composición (IPv4)» |
| Ubicación | Tras ASCII octetos; **antes** tabla decimal ↔ binario |
| Componente | `<figure className="my-6">` + `<img>` (convención teaching; no `next/image`) |
| Alt | `Composición IPv4: 4 octetos de 8 bits = 32 bits, ejemplo 192.168.1.1` |
| Clases img | `mx-auto max-w-full rounded-[var(--clay-radius)]` |

## Bloques interactivos — props detalladas

> **Regla:** todo `<!-- code: -->` del draft → `CodeFiddle` con `language`, `code` y `title`.

### `ObjetivosSection`

| id | componente | props |
|----|------------|-------|
| Objetivos medibles | prose `<ul>` | 5 objetivos draft L34–38 |
| Prerrequisitos | prose `<ul>` | modelo-cliente-servidor, servicios-web, CLI básica (draft L42–44) |
| Intro | prose | draft L52 |
| `del-nombre-al-paquete` | `Callout` | `variant="callout-info"`; title: «Del nombre al paquete»; children draft L57 |

### `GuiaDocenteSection`

| id | componente | props |
|----|------------|-------|
| `guia-tiempo-docente` | `CompareTable` | headers: `["Minutos", "Bloque", "Actividad sugerida"]`; 6 filas existentes en componente actual |

### `NavegadoresWebSection`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | draft L68–71 |
| Qué es / Para qué / Cómo funciona | prose | draft L75–86 |
| Estructura capas | prose `<table>` | UI, red, renderizado, JS, almacenamiento (draft L92–100) |
| `navegadores-motores` | `CompareTable` | headers draft L106; rows draft L107–114 |
| Ventajas por enfoque | prose `<table>` | Chromium vs Firefox vs Safari (draft L125–129) |
| Ejemplo DevTools | prose | tienda.ejemplo.co 404 (draft L131–133) |
| Señales buen/mal uso | prose | draft L137–140 |
| `aislar-lentitud-navegador` | `PracticeExercise` | prompt draft L146; hints draft L147; expectedKeywords draft L148; successMessage draft L149 |

### `Ipv4Section`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | draft L160–163 |
| Qué es / Para qué / Cómo funciona | prose | draft L167–177 |
| ASCII octetos | prose `<pre>` | diagrama 192.168.1.1 (draft L183–190) |
| `ipv4-composicion` | `<figure>` + `<img>` | `src="/teaching/configuracion-servicios-web/ipv4-composicion.png"`; alt ver § Imagen IPv4 |
| Tabla decimal ↔ binario | prose `<table>` | octetos 192.168.1.1 (draft L196–201) |
| Tipos IP | prose `<table>` | pública, privada, fija, dinámica (draft L207–212) |
| Ventajas/desventajas | prose `<table>` | draft L216–220 |
| `consultar-ip-windows` | `CodeFiddle` | `language="powershell"`; title: «Consultar IP en Windows»; code draft L225–228 |
| `consultar-ip-linux` | `CodeFiddle` | `language="bash"`; title: «Consultar IP local y pública en Linux»; code draft L231–235 |
| `conversion-octeto-binario` | `CodeFiddle` | `language="bash"`; title: «Conversión octeto 192 a binario»; code draft L242–246 |
| Señales buen/mal uso | prose | draft L248–251 |
| `ip-privada-vs-publica` | `PracticeExercise` | prompt draft L257; hints draft L258; expectedKeywords draft L259; successMessage draft L260 |

### `Ipv6Section`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | draft L271–274 |
| Qué es / Motivación / Cómo funciona | prose | draft L278–286 |
| Estructura / Abreviaciones | prose | draft L290–299 |
| Tipos IPv6 | prose `<table>` | global unicast, link-local, unique local (draft L303–307) |
| `ipv4-vs-ipv6` | `CompareTable` | headers draft L313; rows draft L314–321 |
| `registro-aaaa` | `CodeFiddle` | `language="dns"`; title: «Registro AAAA»; code draft L329–331 |
| `consulta-ipv6-publica` | `CodeFiddle` | `language="bash"`; title: «Consultar IP pública IPv6»; code draft L336–338 |
| Señales buen/mal uso | prose | draft L340–343 |

### `DnsSection`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | draft L353–356 |
| Qué es / Para qué | prose | draft L360–364 |
| Flujo paso a paso | prose `<ol>` | 5 pasos + 13 raíces (draft L368–377) |
| Estructura jerarquía | prose | draft L381–383 |
| Tipos roles DNS | prose `<table>` | resolver, autoritativo, caché (draft L387–391) |
| Ventajas/desventajas | prose `<table>` | draft L395–399 |
| `resolucion-dns-paso-a-paso` | `StepReveal` | title: «Resolución DNS paso a paso»; steps[6] draft L406–413 |
| `flujo-dns-sequence` | `MermaidDiagram` | chart draft L418 |
| `consultas-dig` | `CodeFiddle` | `language="bash"`; title: «Consultas DNS con dig»; code draft L424–431 |
| `peticion-http-tras-dns` | `CodeFiddle` | `language="http"`; title: «Petición HTTP tras resolución DNS»; code draft L436–441 |
| Señales buen/mal uso | prose | draft L443–446 |
| `ordenar-pasos-dns` | `PracticeExercise` | prompt draft L452; hints draft L453; expectedKeywords draft L454; successMessage draft L455 |

### `DominioSubdominioSection`

| id | componente | props |
|----|------------|-------|
| **H2** Dominio: SLD, TLD y registro | — | draft L460–540 |
| Mapa mental dominio | prose `<ul>` | draft L466–469 |
| Qué es / Para qué / Cómo funciona | prose | draft L473–484 |
| Estructura dominio | prose `<pre>` + `<table>` | api.tienda.ejemplo.co (draft L490–502) |
| `jerarquia-dominio-subdominios` | `MermaidDiagram` | chart draft L506 |
| Tabla TLD | prose `<table>` | gTLD, ccTLD, patrocinados (draft L511–516) |
| Ventajas dominio propio | prose `<table>` | draft L520–524 |
| `caso-fintech-bogota` | `Callout` | `variant="callout-info"`; title: «Caso real: fintech en Bogotá»; children draft L533 |
| **H2** Subdominio: separar servicios | — | draft L543–608 |
| Qué es subdominio | prose | draft L549–557 |
| Estructura / Tipos usos | prose `<pre>` + `<table>` | draft L561–577 |
| Ventajas/desventajas subdominio | prose `<table>` | draft L581–585 |
| `registros-subdominio` | `CodeFiddle` | `language="dns"`; title: «Registros A y CNAME de subdominios»; code draft L590–593 |
| Señales buen/mal uso | prose | draft L595–598 |
| `elegir-tld-co` | `PracticeExercise` | prompt draft L604; hints draft L605; expectedKeywords draft L606; successMessage draft L607 |

### `ConfigurarDominioSection`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | draft L618–622 |
| Qué es / Para qué / Cómo funciona | prose | draft L626–637 |
| `tipos-registro-dns` | `CompareTable` | headers draft L643; rows draft L644–652 |
| `nameservers-cloudflare` | `CodeFiddle` | `language="dns"`; title: «Nameservers en Cloudflare»; code draft L658–661 |
| `zona-minima-produccion` | `CodeFiddle` | `language="dns"`; title: «Zona mínima de producción»; code draft L682–693 |
| `zona-bind-completa` | `CodeFiddle` | `language="dns"`; title: «Zona BIND con SOA»; code draft L698–713 |
| `verificacion-dig` | `CodeFiddle` | `language="bash"`; title: «Verificación con dig»; code draft L718–725 |
| Estrategias delegación | prose `<table>` | draft L665–669 |
| Ventajas/desventajas | prose `<table>` | draft L673–677 |
| `caso-pyme-camaras-ip-fija` | `Callout` | `variant="callout-warning"`; title: «IP dinámica vs fija para cámaras IP»; children draft L737 |
| `registros-cname-txt` | `PracticeExercise` | prompt draft L744; hints draft L745; expectedKeywords draft L746; successMessage draft L747 |
| Errores frecuentes | prose `<ul>` | 8 ítems draft L754–761 |

### `CompruebaTuComprensionSection`

| id | componente | props |
|----|------------|-------|
| `comprension-ipv4-bits` | `PracticeExercise` | prompt draft L771; hints draft L772; expectedKeywords draft L773; successMessage draft L774 |
| `comprension-mx-duplicados` | `PracticeExercise` | prompt draft L779; hints draft L780; expectedKeywords draft L781; successMessage draft L782 |

Apilar ejercicios con `my-8` cada uno.

### `RetoIntegradorSection`

| id | componente | props |
|----|------------|-------|
| Enunciado | prose + `<ol>` | «Pon en línea la presencia web de una agencia en Cali»; tareas 1–6 + criterio éxito (draft L791–802) |
| `reto-creativosvalle` | `PracticeExercise` | prompt draft L806; hints draft L807–813; expectedKeywords draft L814; successMessage draft L815; `rows={8}` |

### `CierreSection`

| elemento | contenido |
|----------|-----------|
| Párrafo cierre | draft L824 |
| Ideas clave | `<ul>` 5 viñetas draft L828–832 |
| Siguiente paso | enlace `clase-02-hosting-correo-https` draft L834 |

### `MiniquizFinalSection`

| elemento | props |
|----------|-------|
| H2 | «Mini-quiz» |
| Quiz | `<QuizSection slug="clase-01-fundamentos-web" track="configuracion-servicios-web" />` |

## Componentes nuevos (escalar a lesson-developer)

| archivo | export | dependencias |
|---------|--------|--------------|
| `sections/Ipv4Section.tsx` | `Ipv4Section` | `<img>`, `CodeFiddle`, `PracticeExercise` |
| `sections/Ipv6Section.tsx` | `Ipv6Section` | `CompareTable`, `CodeFiddle` |
| `sections/DnsSection.tsx` | `DnsSection` | `StepReveal`, `MermaidDiagram`, `CodeFiddle`, `PracticeExercise` |
| `sections/DominioSubdominioSection.tsx` | `DominioSubdominioSection` | `MermaidDiagram`, `Callout`, `CodeFiddle`, `PracticeExercise` |
| `sections/ConfigurarDominioSection.tsx` | `ConfigurarDominioSection` | `CompareTable`, `CodeFiddle`, `Callout`, `PracticeExercise` |
| `sections/RetoIntegradorSection.tsx` | `RetoIntegradorSection` | `PracticeExercise` |
| `sections/MiniquizFinalSection.tsx` | `MiniquizFinalSection` | `QuizSection` (shared) |

## Secciones existentes — trabajo pendiente

| archivo | acción |
|---------|--------|
| `sections/ObjetivosSection.tsx` | Poblar objetivos + `Callout` del-nombre-al-paquete |
| `sections/NavegadoresWebSection.tsx` | Expandir con `CompareTable` + `PracticeExercise` |
| `sections/DominiosIpSection.tsx` | **Eliminar** — contenido en `Ipv4Section` + `Ipv6Section` |
| `sections/DominiosDnsSection.tsx` | **Eliminar** — contenido en `DnsSection`, `DominioSubdominioSection`, `ConfigurarDominioSection` |
| `sections/CompruebaTuComprensionSection.tsx` | Poblar 2 `PracticeExercise` |
| `sections/CierreSection.tsx` | Actualizar ideas clave y enlace siguiente |
| `sections/MiniquizSection.tsx` | **Renombrar** → `MiniquizFinalSection.tsx` |
| `Clase01FundamentosWebLesson.tsx` | Orden 12 secciones + imports |

## Checklist lesson-developer

- [ ] H2 según lesson-spec (sin prefijos «1)»–«7)»)
- [ ] Migrar todo código → `CodeFiddle` (`powershell`, `bash`, `dns`, `http`)
- [ ] Imagen IPv4 con `<img>` en `Ipv4Section`; verificar asset en `public/teaching/configuracion-servicios-web/`
- [ ] Crear 6 secciones nuevas; eliminar `DominiosIpSection`, `DominiosDnsSection`
- [ ] Añadir `RetoIntegradorSection`; renombrar `MiniquizSection` → `MiniquizFinalSection`
- [ ] Actualizar quiz `clase-01-fundamentos-web` en `teaching-quizzes/configuracion-servicios-web.ts` (draft L842–901)
- [ ] `lesson-meta.ts`: `title`, `seoTitle`, `seoDescription` desde lesson-spec § SEO

## Nav LessonLayout

| campo | valor |
|-------|-------|
| `prev` | `index` |
| `next` | `clase-02-hosting-correo-https` |
