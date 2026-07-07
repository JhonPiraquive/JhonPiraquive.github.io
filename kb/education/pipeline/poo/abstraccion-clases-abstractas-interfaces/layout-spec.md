---
track: poo
slug: abstraccion-clases-abstractas-interfaces
title: "Abstracción, Clases abstractas e Interfaces"
order: 5
prev: asociacion-agregacion-composicion
next: polimorfismo
---

## AbstraccionClasesAbstractasInterfacesLesson.tsx — orden de secciones

```tsx
<ObjetivosDelTemaSection />
<AbstraccionSection />
<ClasesAbstractasSection />
<InterfacesSection />
<AbstractaVsInterfazSection />
<ResumenSection />
<CompruebaTuComprensionSection />
<RetoIntegradorSection />
<CierreSection />
<MiniquizFinalSection />
```

Imports a añadir: `ObjetivosDelTemaSection`, `ResumenSection`, `CompruebaTuComprensionSection`, `RetoIntegradorSection`, `CierreSection`, `MiniquizFinalSection`.

**Renombrar:** `ClaseAbstractaAbstractClassSection` → `ClasesAbstractasSection`; `ClaseAbstractaVsInterfazSection` → `AbstractaVsInterfazSection`.

## Secciones

| orden | heading | component file | interactive components | notes |
|-------|---------|----------------|------------------------|-------|
| 1 | Objetivos del tema | `sections/ObjetivosDelTemaSection.tsx` | `Callout` | **Nuevo.** 5 objetivos + prerrequisitos + callout (draft L15–43). |
| 2 | Abstracción: contrato y desacoplamiento | `sections/AbstraccionSection.tsx` | `CodeFiddle`, `StepReveal`, `MermaidDiagram`, `CodeChallenge` | Poblar stub. H2 sin prefijo «1)». |
| 3 | Clases abstractas | `sections/ClasesAbstractasSection.tsx` | `CodeFiddle`, `MermaidDiagram`, `PracticeExercise` | Renombrar desde `ClaseAbstractaAbstractClassSection`. H2 sin prefijo «2)». |
| 4 | Interfaces | `sections/InterfacesSection.tsx` | `CodeFiddle` ×2, `CodeChallenge` | Poblar stub. H2 sin prefijo «3)». |
| 5 | Clase abstracta vs interfaz | `sections/AbstractaVsInterfazSection.tsx` | `CompareTable`, `CodeFiddle`, `MermaidDiagram`, `Callout` | Renombrar desde `ClaseAbstractaVsInterfazSection`. H2 sin prefijo «4)». |
| 6 | Resumen | `sections/ResumenSection.tsx` | — | **Nuevo.** Viñetas 6 puntos (draft L403–408). |
| 7 | Comprueba tu comprensión | `sections/CompruebaTuComprensionSection.tsx` | `PracticeExercise` ×3 | **Nuevo.** Intro prose (draft L416). Ejercicios `my-8`. |
| 8 | Reto integrador: caja registradora y alertas de sistema | `sections/RetoIntegradorSection.tsx` | `PracticeExercise` | **Nuevo.** Partes A–D (draft L460–484). |
| 9 | Cierre de la lección | `sections/CierreSection.tsx` | — | **Nuevo.** Ideas clave + enlace `polimorfismo` (draft L504–513). |
| 10 | Mini-quiz | `sections/MiniquizFinalSection.tsx` | `QuizSection` → `Quiz` | **Nuevo.** `QuizSection slug="abstraccion-clases-abstractas-interfaces" track="poo"`. |

## Quiz — `src/lib/teaching-quizzes/poo.ts`

Registrar slug `abstraccion-clases-abstractas-interfaces` con 5 preguntas del draft L523–564:

| # | Tema |
|---|------|
| 1 | V/F: abstraer oculta detalles al cliente |
| 2 | Variaciones reales como motivo de abstracción |
| 3 | Keyword `abstract` obliga implementación en derivada |
| 4 | V/F: no se instancia clase abstracta con `new` |
| 5 | Interfaz vs abstracta — contrato puro sin estado compartido |

**Infra:** `<QuizSection slug="abstraccion-clases-abstractas-interfaces" track="poo" />` en `MiniquizFinalSection`.

## lesson-meta.ts

| Campo | Valor (draft § SEO / lesson-spec) |
|-------|-----------------------------------|
| `seoTitle` | `Abstracción, clases abstractas e interfaces en C# \| POO` |
| `seoDescription` | `Aprende abstracción en C# con interfaces (IPago, ILogger), clases abstractas (Template Method) y criterios para elegir entre contrato puro y código compartido.` |

## Bloques interactivos — props detalladas

> **Regla:** todo `<!-- code: csharp -->` del draft → `CodeFiddle` con `language="csharp"` y `code` (no `CodeBlock`).

### `ObjetivosDelTemaSection`

| id | componente | props |
|----|------------|-------|
| Objetivos medibles | prose `<ul>` | 5 objetivos draft L17–24 |
| Prerrequisitos | prose `<ul>` | asociación, herencia, encapsulamiento (draft L25–29) |
| `abstraer-variacion-real` | `Callout` | `variant="callout-info"`; title: «Abstraer con variación real»; children draft L39–42 |

### `AbstraccionSection`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | 3 viñetas (draft L51–55) |
| Qué es / Señales buena y prematura | prose + listas | IPago, anti-patrones (draft L57–70) |
| `ipago-caja` | `CodeFiddle` | `language="csharp"`; code: |
| | | `using System;\n\npublic interface IPago\n{\n    void Pagar(decimal monto);\n}\n\npublic class PagoTarjeta : IPago\n{\n    public void Pagar(decimal monto) => Console.WriteLine($"Pagando {monto} con tarjeta");\n}\n\npublic class PagoTransferencia : IPago\n{\n    public void Pagar(decimal monto) => Console.WriteLine($"Pagando {monto} por transferencia");\n}\n\npublic class Caja\n{\n    private readonly IPago _pago;\n\n    public Caja(IPago pago) => _pago = pago ?? throw new ArgumentNullException(nameof(pago));\n\n    public void Cobrar(decimal monto) => _pago.Pagar(monto);\n}` |
| `nuevo-metodo-pago` | `StepReveal` | title: «Nuevo método de pago»; steps[4] draft L105–114 |
| Caso real pasarela | prose | checkout if/switch (draft L116–120) |
| `caja-depende-ipago` | `MermaidDiagram` | chart draft L124–127 |
| Errores comunes | prose `<ul>` | 2 ítems (draft L129–132) |
| `completa-inyeccion` | `CodeChallenge` | title: «Completa la inyección»; template: `public Caja(___ pago) => _pago = pago ?? throw new ArgumentNullException(nameof(pago));`; blanks: `[{ "id": "b1", "answer": "IPago", "hint": "Tipo del contrato que recibe el constructor" }]` |

Intercalar `CodeFiddle` entre `StepReveal` y diagrama.

### `ClasesAbstractasSection`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | abstract + Template Method (draft L149–153) |
| Qué es / Señales | prose | estado común, Enviar/EnviarCore (draft L155–163) |
| `notificacion-template` | `CodeFiddle` | `language="csharp"`; code: |
| | | `using System;\n\npublic abstract class Notificacion\n{\n    public string Destino { get; }\n\n    protected Notificacion(string destino)\n    {\n        if (string.IsNullOrWhiteSpace(destino)) throw new ArgumentException("Destino requerido");\n        Destino = destino;\n    }\n\n    public void Enviar(string mensaje)\n    {\n        if (string.IsNullOrWhiteSpace(mensaje)) throw new ArgumentException("Mensaje requerido");\n        Console.WriteLine($"Preparando notificación para {Destino}...");\n        EnviarCore(mensaje);\n        Console.WriteLine("Notificación enviada.");\n    }\n\n    protected abstract void EnviarCore(string mensaje);\n}\n\npublic class NotificacionEmail : Notificacion\n{\n    public NotificacionEmail(string destino) : base(destino) { }\n\n    protected override void EnviarCore(string mensaje) =>\n        Console.WriteLine($"Email a {Destino}: {mensaje}");\n}\n\npublic class NotificacionSms : Notificacion\n{\n    public NotificacionSms(string destino) : base(destino) { }\n\n    protected override void EnviarCore(string mensaje) =>\n        Console.WriteLine($"SMS a {Destino}: {mensaje}");\n}` |
| abstract vs virtual (H3) | prose + lista | 3 bullets (draft L209–213) |
| Caso real notificaciones | prose | duplicación sin base (draft L215–217) |
| `jerarquia-notificacion` | `MermaidDiagram` | chart draft L221–224 |
| Errores comunes | prose `<ul>` | 2 ítems (draft L226–229) |
| `enviar-enviarcore-template` | `PracticeExercise` | prompt: «¿Por qué `Enviar` no es abstracto pero `EnviarCore` sí? ¿Qué patrón de diseño preview introduce esto?»; hints: `["Enviar tiene flujo común idéntico para todos los canales", "EnviarCore varía según Email o Sms", "Template Method: algoritmo común con paso variable"]`; expectedKeywords: `["Template", "común", "abstract", "EnviarCore"]`; successMessage: «Correcto. La base define el esqueleto; la derivada solo implementa el paso que cambia.» |

### `InterfacesSection`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | capacidad, multi-rol (draft L249–253) |
| Qué es / Señales | prose | ILogger, inyección (draft L255–263) |
| `ilogger-servicio` | `CodeFiddle` | `language="csharp"`; code: |
| | | `using System;\n\npublic interface ILogger\n{\n    void Info(string mensaje);\n}\n\npublic class LoggerConsola : ILogger\n{\n    public void Info(string mensaje) => Console.WriteLine($"INFO: {mensaje}");\n}\n\npublic class LoggerSilencioso : ILogger\n{\n    public void Info(string mensaje) { /* sin salida — útil en tests */ }\n}\n\npublic class LoggerArchivo : ILogger\n{\n    public void Info(string mensaje) => Console.WriteLine($"[archivo] {mensaje}");\n}\n\npublic class Servicio\n{\n    private readonly ILogger _logger;\n\n    public Servicio(ILogger logger) => _logger = logger;\n\n    public void Ejecutar() => _logger.Info("Ejecutando...");\n}` |
| Intercambiar logger (H3) | `CodeFiddle` | `language="csharp"`; code: |
| | | `var servicio1 = new Servicio(new LoggerConsola());\nvar servicio2 = new Servicio(new LoggerSilencioso());\nservicio1.Ejecutar(); // INFO: Ejecutando...\nservicio2.Ejecutar(); // sin salida` |
| Segregación SOLID | prose | interfaces gigantes (draft L310–312) |
| Errores comunes | prose `<ul>` | 2 ítems (draft L314–317) |
| `implementa-interfaz-ilogger` | `CodeChallenge` | title: «Implementa la interfaz»; template: `public class LoggerConsola : ___\n{\n    public void Info(string mensaje) => Console.WriteLine($"INFO: {mensaje}");\n}`; blanks: `[{ "id": "b1", "answer": "ILogger", "hint": "Contrato que declara Info(string)" }]` |

### `AbstractaVsInterfazSection`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | estado compartido vs contrato (draft L334–338) |
| `abstracta-vs-interfaz` | `CompareTable` | headers: `["Criterio", "Clase abstracta", "Interfaz"]`; rows draft L345–351 |
| `documento-ifirmable` | `CodeFiddle` | `language="csharp"`; code: |
| | | `public interface IFirmable\n{\n    void Firmar();\n}\n\npublic abstract class Documento\n{\n    public abstract void Validar();\n    public void Archivar() => Console.WriteLine("Archivado.");\n}\n\npublic class Contrato : Documento, IFirmable\n{\n    public override void Validar() => Console.WriteLine("Contrato válido.");\n    public void Firmar() => Console.WriteLine("Firmado.");\n}` |
| `diagrama-documento-ifirmable` | `MermaidDiagram` | chart draft L378–381 |
| Criterio decisión rápida | prose tabla | 3 escenarios (draft L383–389) |
| `error-frecuente-duplicar-contrato` | `Callout` | `variant="callout-warning"`; title: «Error frecuente»; children draft L391–394 |

### `ResumenSection`

| elemento | contenido |
|----------|-----------|
| Viñetas | 6 puntos draft L403–408 |

### `CompruebaTuComprensionSection`

| id | componente | props |
|----|------------|-------|
| Intro | prose | draft L416 |
| `comprension-pago-transferencia` | `PracticeExercise` | prompt: «Implementa `PagoTransferencia : IPago` y verifica que `Caja` no se editó al usarla en `Main`. ¿Qué principio de diseño demuestra esto?»; hints: `["PagoTransferencia implementa void Pagar(decimal monto)", "Caja solo conoce IPago en su constructor", "El cliente permanece estable al añadir variantes"]`; expectedKeywords: `["IPago", "Caja", "desacoplamiento"]`; successMessage: «Correcto. Nueva implementación sin modificar el cliente — abstracción bien aplicada.» |
| `comprension-notificacion-sms` | `PracticeExercise` | prompt: «Crea `NotificacionSms` con validación mínima de destino (debe empezar con `+`) y úsala en `Main`. ¿Dónde conviene poner la validación de destino: base o derivada?»; hints: `["Si todos los canales exigen el mismo formato, la base es mejor", "Sms con prefijo + es regla específica del canal", "Constructor de NotificacionSms puede validar antes de base(destino)"]`; expectedKeywords: `["NotificacionSms", "destino", "validación"]`; successMessage: «Correcto. Reglas comunes en la base; reglas específicas del canal en la derivada.» |
| `comprension-reporte-factura-contrato` | `PracticeExercise` | prompt: «Para `Reporte`, `Factura` y `Contrato`: indica si usarías clase abstracta, interfaz o ambas; justifica en 3 bullets por tipo.»; hints: `["¿Comparten flujo o validación común?", "¿Necesitan capacidades cruzadas como Firmar?", "¿Hay variación real de implementación?"]`; expectedKeywords: `["abstracta", "interfaz", "contrato"]`; successMessage: «Correcto. La elección depende de estado compartido, Template Method y multi-rol.» |

### `RetoIntegradorSection`

| id | componente | props |
|----|------------|-------|
| Enunciado | prose + `<ol>` | «Caja registradora y alertas de sistema»; Partes A–D + criterio éxito (draft L460–484) |
| `reto-justificacion-parte-d` | `PracticeExercise` | prompt: «Redacta la justificación (Parte D): ¿por qué pagos usan interfaz y notificaciones usan clase abstracta?»; hints: `["Pagos no comparten estado ni flujo común en la base", "Notificaciones comparten validación y secuencia Enviar", "IPago es contrato puro; Notificacion es Template Method"]`; expectedKeywords: `["interfaz", "abstracta", "Template", "contrato"]`; successMessage: «Excelente. Has aplicado el criterio estado compartido vs contrato puro.»; `rows={6}` |

### `CierreSection`

| elemento | contenido |
|----------|-----------|
| Párrafo cierre | draft L504 |
| Ideas clave | `<ul>` 4 viñetas draft L508–511 |
| Siguiente paso | enlace `polimorfismo` draft L513 |

### `MiniquizFinalSection`

| elemento | props |
|----------|-------|
| H2 | «Mini-quiz» |
| Quiz | `<QuizSection slug="abstraccion-clases-abstractas-interfaces" track="poo" />` |

## Componentes nuevos (escalar a lesson-developer)

| archivo | export | dependencias |
|---------|--------|--------------|
| `sections/ObjetivosDelTemaSection.tsx` | `ObjetivosDelTemaSection` | `Callout` |
| `sections/ResumenSection.tsx` | `ResumenSection` | prose only |
| `sections/CompruebaTuComprensionSection.tsx` | `CompruebaTuComprensionSection` | `PracticeExercise` ×3 |
| `sections/RetoIntegradorSection.tsx` | `RetoIntegradorSection` | `PracticeExercise` |
| `sections/CierreSection.tsx` | `CierreSection` | prose only |
| `sections/MiniquizFinalSection.tsx` | `MiniquizFinalSection` | `QuizSection` (shared) |

## Secciones existentes — trabajo pendiente

| archivo | acción |
|---------|--------|
| `AbstraccionSection.tsx` | Poblar: `CodeFiddle`, `StepReveal`, `MermaidDiagram`, `CodeChallenge`; migrar `CodeBlock` → `CodeFiddle`; H2 «Abstracción: contrato y desacoplamiento» |
| `ClaseAbstractaAbstractClassSection.tsx` | Renombrar → `ClasesAbstractasSection.tsx`; poblar: `CodeFiddle`, `MermaidDiagram`, `PracticeExercise`; H2 «Clases abstractas» |
| `InterfacesSection.tsx` | Poblar: 2 `CodeFiddle`, `CodeChallenge`; H2 «Interfaces» |
| `ClaseAbstractaVsInterfazSection.tsx` | Renombrar → `AbstractaVsInterfazSection.tsx`; poblar: `CompareTable`, `CodeFiddle`, `MermaidDiagram`, `Callout`; H2 «Clase abstracta vs interfaz» |
| `AbstraccionClasesAbstractasInterfacesLesson.tsx` | Orden 10 secciones + imports |

## Checklist lesson-developer

- [ ] H2 según lesson-spec § Clay UI (sin prefijos «1)» / «2)»)
- [ ] Migrar todo código → `CodeFiddle` con `language="csharp"` (5 bloques en draft)
- [ ] Crear secciones pedagógicas (Objetivos, Resumen, Comprueba, Reto, Cierre, Miniquiz)
- [ ] Renombrar `ClasesAbstractasSection`, `AbstractaVsInterfazSection`; poblar los 4 stubs de contenido
- [ ] Registrar quiz `abstraccion-clases-abstractas-interfaces` en `teaching-quizzes/poo.ts`
- [ ] `lesson-meta.ts`: `seoTitle` / `seoDescription` desde draft § SEO

## Nav LessonLayout

| campo | valor |
|-------|-------|
| `prev` | `asociacion-agregacion-composicion` |
| `next` | `polimorfismo` |
