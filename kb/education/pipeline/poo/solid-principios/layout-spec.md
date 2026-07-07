---
track: poo
slug: solid-principios
title: "Principios SOLID"
order: 9
prev: diagramas-de-clases
next: modularidad-cohesion-acoplamiento
---

## SolidPrincipiosLesson.tsx — orden de secciones

```tsx
<ObjetivosDelTemaSection />
<SrpSection />
<OcpSection />
<LspSection />
<IspSection />
<DipSection />
<ResumenSection />
<CompruebaTuComprensionSection />
<RetoIntegradorSection />
<CierreSection />
<MiniquizFinalSection />
```

Imports a añadir: `ObjetivosDelTemaSection`, `ResumenSection`, `CompruebaTuComprensionSection`, `RetoIntegradorSection`, `CierreSection`, `MiniquizFinalSection`.

**Renombrar/refactor:** `SSingleResponsibilityPrincipleSection` → `SrpSection`; `OOpenclosedPrincipleOcpSection` → `OcpSection`; `LLiskovSubstitutionPrincipleSection` → `LspSection`; `IInterfaceSegregationPrincipleSection` → `IspSection`; `DDependencyInversionPrincipleSection` → `DipSection`.

**Reemplazar:** `MiniquizFinalRepasoSolidSection` → `MiniquizFinalSection` (patrón estándar con `QuizSection`).

## Secciones

| orden | heading | component file | interactive components | notes |
|-------|---------|----------------|------------------------|-------|
| 1 | Objetivos del tema | `sections/ObjetivosDelTemaSection.tsx` | `Callout`, `CompareTable` | **Nuevo.** 5 objetivos + prerrequisitos + tabla SOLID (draft L36–58). |
| 2 | S — Responsabilidad única (SRP) | `sections/SrpSection.tsx` | `CodeFiddle` ×2, `MermaidDiagram`, `CompareTable` | Refactor desde `SSingleResponsibilityPrincipleSection`. H2 sin prefijo «1)». |
| 3 | O — Abierto/Cerrado (OCP) | `sections/OcpSection.tsx` | `CodeFiddle`, `MermaidDiagram`, `StepReveal`, `PracticeExercise` | Refactor desde `OOpenclosedPrincipleOcpSection`. H2 sin prefijo «2)». |
| 4 | L — Sustitución de Liskov (LSP) | `sections/LspSection.tsx` | `CodeFiddle` ×2, `MermaidDiagram`, `PracticeExercise` | Refactor desde `LLiskovSubstitutionPrincipleSection`. H2 sin prefijo «3)». |
| 5 | I — Segregación de interfaces (ISP) | `sections/IspSection.tsx` | `CodeFiddle`, `MermaidDiagram` | Refactor desde `IInterfaceSegregationPrincipleSection`. H2 sin prefijo «4)». |
| 6 | D — Inversión de dependencias (DIP) | `sections/DipSection.tsx` | `CodeFiddle`, `MermaidDiagram`, `PracticeExercise` | Refactor desde `DDependencyInversionPrincipleSection`. H2 sin prefijo «5)». |
| 7 | Resumen | `sections/ResumenSection.tsx` | — | **Nuevo.** Viñetas 7 puntos (draft L439–449). |
| 8 | Comprueba tu comprensión | `sections/CompruebaTuComprensionSection.tsx` | `PracticeExercise` ×3 | **Nuevo.** Intro prose (draft L457). Ejercicios `my-8`. |
| 9 | Reto integrador: tienda refactorizada | `sections/RetoIntegradorSection.tsx` | `CodeChallenge` | **Nuevo.** Partes A–D + eliminar switch (draft L497–536). |
| 10 | Cierre de la lección | `sections/CierreSection.tsx` | — | **Nuevo.** Ideas clave + enlace `modularidad-cohesion-acoplamiento` (draft L540–554). |
| 11 | Mini-quiz | `sections/MiniquizFinalSection.tsx` | `QuizSection` → `Quiz` | **Nuevo.** `QuizSection slug="solid-principios" track="poo"`. Reemplaza `MiniquizFinalRepasoSolidSection`. |

## Quiz — `src/lib/teaching-quizzes/poo.ts`

Registrar slug `solid-principios` con 5 preguntas del draft L564–594:

| # | Tema |
|---|------|
| 1 | Clase «hace de todo» → SRP |
| 2 | Nuevo método de envío sin tocar cliente → OCP |
| 3 | V/F: ISP prefiere interfaces pequeñas |
| 4 | V/F: DIP instancia RepositorioSql en dominio |
| 5 | Subclase lanza excepción → LSP |

**Infra:** `<QuizSection slug="solid-principios" track="poo" />` en `MiniquizFinalSection`.

## lesson-meta.ts

| Campo | Valor (draft § SEO / lesson-draft) |
|-------|-----------------------------------|
| `seoTitle` | `Principios SOLID en C#: SRP, OCP, LSP, ISP y DIP \| POO` |
| `seoDescription` | `Domina SOLID en C# con ejemplos de PedidoService, IEnvio, LSP con Pingüino, ISP en impresoras y DIP con repositorios. Refactoriza hacia diseño mantenible.` |

## Bloques interactivos — props detalladas

> **Regla:** todo `<!-- code: csharp -->` del draft → `CodeFiddle` con `language="csharp"` y `code` (no `CodeBlock`).

### `ObjetivosDelTemaSection`

| id | componente | props |
|----|------------|-------|
| Objetivos medibles | prose `<ul>` | 5 objetivos draft L19–25 |
| Prerrequisitos | prose `<ul>` | polimorfismo, abstracción, herencia, diagramas (draft L27–32) |
| Intro | prose | SOLID como brújula (draft L40) |
| `solid-en-una-frase` | `Callout` | `variant="callout-info"`; title: «SOLID en una frase»; children draft L45 |
| `tabla-solid` | `CompareTable` | headers: `["Letra", "Principio", "Idea clave"]`; rows draft L51–57 |

### `SrpSection`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | un motivo de cambio (draft L66–70) |
| `pedido-service-antieejemplo` | `CodeFiddle` | `language="csharp"`; code draft L75–85 |
| `refactor-srp-orquestacion` | `CodeFiddle` | `language="csharp"`; code draft L91–128 |
| `flujo-responsabilidades` | `MermaidDiagram` | chart draft L135 |
| Caso real | prose | ERP 800 líneas (draft L138–140) |
| Errores comunes | prose `<ul>` | 3 ítems (draft L142–146) |
| `monolito-vs-srp` | `CompareTable` | headers: `["Aspecto", "PedidoService monolítico", "Separado SRP + DIP"]`; rows draft L151–155 |

### `OcpSection`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | extensión sin editar cliente (draft L164–168) |
| `contrato-ienvio` | `CodeFiddle` | `language="csharp"`; code draft L173–192 |
| `jerarquia-ocp` | `MermaidDiagram` | chart draft L199 |
| `extender-sin-editar-cliente` | `StepReveal` | title: «Extender sin editar cliente»; steps[4] draft L207–211 |
| Caso real | prose | calculadora envíos switch (draft L215–217) |
| Errores comunes | prose `<ul>` | 2 ítems (draft L219–222) |
| `implementa-envio-gratis` | `PracticeExercise` | prompt: «Implementa EnvioGratis : IEnvio (peso ≤ 1 → 0, si no → 3) sin modificar EnvioExpress ni EnvioNormal.»; hints: `["Nueva clase que implementa Calcular", "No tocar clases existentes ni cliente", "Registra instancia en Main"]`; expectedKeywords: `["EnvioGratis", "IEnvio", "Calcular"]`; successMessage: «Correcto. OCP: extensión por nueva clase, cliente intacto.» |

### `LspSection`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | sustituibilidad sin sorpresas (draft L242–246) |
| `ave-pinguino-antieejemplo` | `CodeFiddle` | `language="csharp"`; code draft L251–264 |
| `ruptura-contrato-lsp` | `MermaidDiagram` | chart draft L270 |
| `rediseno-ivolador` | `CodeFiddle` | `language="csharp"`; code draft L276–290 |
| Errores comunes | prose `<ul>` | 3 ítems (draft L293–297) |
| `pinguino-lsp-rediseno` | `PracticeExercise` | prompt: «¿Qué principio viola Pinguino : Ave con Volar() que lanza? Propón rediseño con IVolador o clases separadas.»; hints: `["LSP — sustituibilidad", "Pingüino no debe prometer Volar si no vuela", "IVolador solo para quienes vuelan"]`; expectedKeywords: `["LSP", "IVolador", "sustituibilidad"]`; successMessage: «Correcto. LSP exige que la derivada cumpla el contrato de la base sin sorpresas.» |

### `IspSection`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | interfaces pequeñas por rol (draft L317–321) |
| Anti-patrón | prose | interfaz hinchada IImpresoraMultiuso (draft L323–325) |
| `interfaces-segregadas` | `CodeFiddle` | `language="csharp"`; code draft L330–350 |
| `diagrama-isp` | `MermaidDiagram` | chart draft L357 |
| Errores comunes | prose `<ul>` | 3 ítems (draft L360–364) |

### `DipSection`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | alto nivel → abstracciones (draft L372–376) |
| `servicio-repositorio-dip` | `CodeFiddle` | `language="csharp"`; code draft L381–409 |
| `diagrama-dip` | `MermaidDiagram` | chart draft L416 |
| Errores comunes | prose `<ul>` | 3 ítems (draft L419–423) |
| `repositorio-memoria-dip` | `PracticeExercise` | prompt: «Crea RepositorioMemoria : IRepositorioUsuarios y usa ServicioUsuarios con ella en Main (DIP).»; hints: `["RepositorioMemoria implementa Guardar", "ServicioUsuarios recibe IRepositorioUsuarios por constructor", "Main elige RepositorioMemoria — servicio no cambia"]`; expectedKeywords: `["RepositorioMemoria", "ServicioUsuarios", "Main"]`; successMessage: «Correcto. DIP: alto nivel depende del contrato; el concreto se elige en el borde.» |

### `ResumenSection`

| elemento | contenido |
|----------|-----------|
| Viñetas | 7 puntos draft L443–449 |

### `CompruebaTuComprensionSection`

| id | componente | props |
|----|------------|-------|
| Intro | prose | draft L457 |
| `comprension-envio-gratis` | `PracticeExercise` | prompt: «Implementa EnvioGratis : IEnvio (peso ≤ 1 → 0, si no → 3) sin modificar EnvioExpress ni EnvioNormal.»; hints: `["OCP — nueva clase, no editar existentes", "Calcular implementa la regla de negocio", "Cliente usa IEnvio polimórficamente"]`; expectedKeywords: `["EnvioGratis", "OCP", "Calcular"]`; successMessage: «Correcto. Has aplicado OCP con extensión por nueva implementación.» |
| `comprension-pinguino-lsp` | `PracticeExercise` | prompt: «¿Qué principio viola Pinguino : Ave con Volar() que lanza? Propón rediseño con IVolador o clases separadas.»; hints: `["Liskov Substitution Principle", "Cliente con List<Ave> espera Volar exitoso", "Separar capacidades por interfaz o modelo"]`; expectedKeywords: `["LSP", "Liskov", "IVolador"]`; successMessage: «Correcto. LSP protege sustituibilidad en jerarquías polimórficas.» |
| `comprension-pedido-service` | `PracticeExercise` | prompt: «Identifica en PedidoService monolítico qué principios viola (al menos SRP y DIP) y nombra dos clases del refactor.»; hints: `["Mezcla crear y notificar — SRP", "Sin abstracción de persistencia o notificación — DIP", "CreadorPedido e INotificador del refactor"]`; expectedKeywords: `["SRP", "DIP", "CreadorPedido", "INotificador"]`; successMessage: «Correcto. El monolito concentra motivos de cambio y depende de detalles concretos.» |

### `RetoIntegradorSection`

| id | componente | props |
|----|------------|-------|
| Enunciado | prose + `<ol>` | «Tienda refactorizada con SOLID»; Partes A–D + criterio éxito (draft L501–527) |
| `elimina-switch-envio` | `CodeChallenge` | title: «Elimina el switch de envío»; template: `// En OrquestadorTienda, reemplaza switch por:\nvar costo = ___.Calcular(peso);`; blanks: `[{ "id": "b1", "answer": "_envio", "hint": "Campo readonly de tipo IEnvio inyectado por constructor" }]` |

### `CierreSection`

| elemento | contenido |
|----------|-----------|
| Párrafo cierre | draft L544 |
| Ideas clave | `<ul>` 5 viñetas draft L548–552 |
| Siguiente paso | enlace `modularidad-cohesion-acoplamiento` draft L554 |

### `MiniquizFinalSection`

| elemento | props |
|----------|-------|
| H2 | «Mini-quiz» |
| Quiz | `<QuizSection slug="solid-principios" track="poo" />` |

## Componentes nuevos (escalar a lesson-developer)

| archivo | export | dependencias |
|---------|--------|--------------|
| `sections/ObjetivosDelTemaSection.tsx` | `ObjetivosDelTemaSection` | `Callout`, `CompareTable` |
| `sections/ResumenSection.tsx` | `ResumenSection` | prose only |
| `sections/CompruebaTuComprensionSection.tsx` | `CompruebaTuComprensionSection` | `PracticeExercise` ×3 |
| `sections/RetoIntegradorSection.tsx` | `RetoIntegradorSection` | `CodeChallenge` |
| `sections/CierreSection.tsx` | `CierreSection` | prose only |
| `sections/MiniquizFinalSection.tsx` | `MiniquizFinalSection` | `QuizSection` (shared) |

## Secciones existentes — trabajo pendiente

| archivo | acción |
|---------|--------|
| `SSingleResponsibilityPrincipleSection.tsx` | Renombrar → `SrpSection.tsx`; poblar: 2 `CodeFiddle`, `MermaidDiagram`, `CompareTable`; H2 «S — Responsabilidad única (SRP)» |
| `OOpenclosedPrincipleOcpSection.tsx` | Renombrar → `OcpSection.tsx`; poblar: `CodeFiddle`, `MermaidDiagram`, `StepReveal`, `PracticeExercise`; H2 «O — Abierto/Cerrado (OCP)» |
| `LLiskovSubstitutionPrincipleSection.tsx` | Renombrar → `LspSection.tsx`; poblar: 2 `CodeFiddle`, `MermaidDiagram`, `PracticeExercise`; H2 «L — Sustitución de Liskov (LSP)» |
| `IInterfaceSegregationPrincipleSection.tsx` | Renombrar → `IspSection.tsx`; poblar: `CodeFiddle`, `MermaidDiagram`; H2 «I — Segregación de interfaces (ISP)» |
| `DDependencyInversionPrincipleSection.tsx` | Renombrar → `DipSection.tsx`; poblar: `CodeFiddle`, `MermaidDiagram`, `PracticeExercise`; H2 «D — Inversión de dependencias (DIP)» |
| `MiniquizFinalRepasoSolidSection.tsx` | **Eliminar** — reemplazar por `MiniquizFinalSection.tsx` |
| `SolidPrincipiosLesson.tsx` | Orden 11 secciones + imports |

## Checklist lesson-developer

- [ ] H2 según draft (sin prefijos «1)» … «5)»)
- [ ] Migrar todo código → `CodeFiddle` con `language="csharp"` (8 bloques en draft)
- [ ] Crear secciones pedagógicas
- [ ] Renombrar y poblar las 5 secciones SOLID
- [ ] Reemplazar `MiniquizFinalRepasoSolidSection` por `MiniquizFinalSection` estándar
- [ ] Registrar quiz `solid-principios` en `teaching-quizzes/poo.ts`
- [ ] `lesson-meta.ts`: `seoTitle` / `seoDescription` desde draft § SEO

## Nav LessonLayout

| campo | valor |
|-------|-------|
| `prev` | `diagramas-de-clases` |
| `next` | `modularidad-cohesion-acoplamiento` |
