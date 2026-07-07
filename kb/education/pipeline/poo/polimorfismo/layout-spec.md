---
track: poo
slug: polimorfismo
title: "Polimorfismo"
order: 6
prev: abstraccion-clases-abstractas-interfaces
next: override-y-sobrecarga
---

## PolimorfismoLesson.tsx — orden de secciones

```tsx
<ObjetivosDelTemaSection />
<PolimorfismoInterfacesSection />
<PolimorfismoHerenciaSection />
<ClienteEstableSection />
<ResumenSection />
<CompruebaTuComprensionSection />
<RetoIntegradorSection />
<CierreSection />
<MiniquizFinalSection />
```

Imports a añadir: `ObjetivosDelTemaSection`, `ClienteEstableSection`, `ResumenSection`, `CompruebaTuComprensionSection`, `RetoIntegradorSection`, `CierreSection`, `MiniquizFinalSection`.

**Renombrar/refactor:** `PolimorfismoQueEsYSection` → `PolimorfismoInterfacesSection`; `PolimorfismoConClaseBaseSection` → `PolimorfismoHerenciaSection`.

## Secciones

| orden | heading | component file | interactive components | notes |
|-------|---------|----------------|------------------------|-------|
| 1 | Objetivos del tema | `sections/ObjetivosDelTemaSection.tsx` | `Callout` | **Nuevo.** 5 objetivos + prerrequisitos + callout (draft L15–43). |
| 2 | Polimorfismo con interfaces | `sections/PolimorfismoInterfacesSection.tsx` | `CodeFiddle` ×2, `StepReveal`, `MermaidDiagram`, `CodeChallenge` | Refactor desde `PolimorfismoQueEsYSection`. H2 sin prefijo «1)». |
| 3 | Polimorfismo con clase abstracta | `sections/PolimorfismoHerenciaSection.tsx` | `CodeFiddle` ×3, `MermaidDiagram` ×2, `PracticeExercise` | Refactor desde `PolimorfismoConClaseBaseSection`. H2 sin prefijo «2)». |
| 4 | Cliente estable y extensión | `sections/ClienteEstableSection.tsx` | `CompareTable`, `CodeFiddle`, `PracticeExercise` | **Nuevo.** Contenido draft §3 (L281–344). |
| 5 | Resumen | `sections/ResumenSection.tsx` | — | **Nuevo.** Viñetas 6 puntos (draft L352–357). |
| 6 | Comprueba tu comprensión | `sections/CompruebaTuComprensionSection.tsx` | `PracticeExercise` ×3 | **Nuevo.** Intro prose (draft L365). Ejercicios `my-8`. |
| 7 | Reto integrador: facturación con checkout e impuestos | `sections/RetoIntegradorSection.tsx` | `PracticeExercise` | **Nuevo.** Partes A–D (draft L410–435). |
| 8 | Cierre de la lección | `sections/CierreSection.tsx` | — | **Nuevo.** Ideas clave + enlace `override-y-sobrecarga` (draft L455–464). |
| 9 | Mini-quiz | `sections/MiniquizFinalSection.tsx` | `QuizSection` → `Quiz` | **Nuevo.** `QuizSection slug="polimorfismo" track="poo"`. |

## Quiz — `src/lib/teaching-quizzes/poo.ts`

Registrar slug `polimorfismo` con 5 preguntas del draft L474–514:

| # | Tema |
|---|------|
| 1 | V/F: polimorfismo reduce if por tipo en cliente |
| 2 | Interfaces y clases base abstractas/virtual habilitan polimorfismo |
| 3 | V/F: cliente no debe conocer todas las concretas |
| 4 | Keyword `override` en derivada |
| 5 | `List<Impuesto>` con Iva e ImpuestoCero — foreach polimórfico |

**Infra:** `<QuizSection slug="polimorfismo" track="poo" />` en `MiniquizFinalSection`.

## lesson-meta.ts

| Campo | Valor (draft § SEO / lesson-spec) |
|-------|-----------------------------------|
| `seoTitle` | `Polimorfismo en C#: interfaces y clases abstractas \| POO` |
| `seoDescription` | `Domina el polimorfismo en C# con IPasarelaPago, Checkout, Impuesto y colecciones polimórficas. Aprende dispatch en runtime y extensión sin modificar el cliente.` |

## Bloques interactivos — props detalladas

> **Regla:** todo `<!-- code: csharp -->` del draft → `CodeFiddle` con `language="csharp"` y `code` (no `CodeBlock`).

### `ObjetivosDelTemaSection`

| id | componente | props |
|----|------------|-------|
| Objetivos medibles | prose `<ul>` | 5 objetivos draft L17–24 |
| Prerrequisitos | prose `<ul>` | abstracción, herencia, asociación (draft L25–29) |
| `misma-llamada-distinto-comportamiento` | `Callout` | `variant="callout-info"`; title: «Misma llamada, distinto comportamiento»; children draft L39–42 |

### `PolimorfismoInterfacesSection`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | invocación uniforme (draft L51–55) |
| Qué es / Señales | prose | IPasarelaPago + Checkout (draft L57–65) |
| `pasarelas-pago` | `CodeFiddle` | `language="csharp"`; code: |
| | | `using System;\nusing System.Collections.Generic;\n\npublic interface IPasarelaPago\n{\n    string Nombre { get; }\n    void Cobrar(decimal monto);\n}\n\npublic class PasarelaTarjeta : IPasarelaPago\n{\n    public string Nombre => "Tarjeta";\n    public void Cobrar(decimal monto) => Console.WriteLine($"[{Nombre}] cobrando {monto}");\n}\n\npublic class PasarelaTransferencia : IPasarelaPago\n{\n    public string Nombre => "Transferencia";\n    public void Cobrar(decimal monto) => Console.WriteLine($"[{Nombre}] cobrando {monto}");\n}\n\npublic class PasarelaEfectivo : IPasarelaPago\n{\n    public string Nombre => "Efectivo";\n    public void Cobrar(decimal monto) => Console.WriteLine($"[{Nombre}] cobrando {monto}");\n}\n\npublic class Checkout\n{\n    private readonly IPasarelaPago _pasarela;\n\n    public Checkout(IPasarelaPago pasarela) => _pasarela = pasarela;\n\n    public void Pagar(decimal monto) => _pasarela.Cobrar(monto);\n}` |
| `lista-checkouts` | `CodeFiddle` | `language="csharp"`; code: |
| | | `var checkouts = new List<Checkout>\n{\n    new Checkout(new PasarelaTarjeta()),\n    new Checkout(new PasarelaTransferencia()),\n    new Checkout(new PasarelaEfectivo())\n};\n\nforeach (var c in checkouts)\n    c.Pagar(100);` |
| `checkout-pagar-runtime` | `StepReveal` | title: «Checkout.Pagar en runtime»; steps[4] draft L125–134 |
| Caso real SaaS | prose | switch 400 líneas (draft L136–138) |
| `flujo-checkout-pasarela` | `MermaidDiagram` | chart draft L142–145 |
| Errores comunes | prose `<ul>` | 2 ítems (draft L147–150) |
| `completa-checkout-polimorfico` | `CodeChallenge` | title: «Completa el checkout polimórfico»; template: `public void Pagar(decimal monto) => ___.Cobrar(monto);`; blanks: `[{ "id": "b1", "answer": "_pasarela", "hint": "Campo readonly del contrato inyectado" }]` |

### `PolimorfismoHerenciaSection`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | Impuesto + override (draft L167–171) |
| Qué es / Señales | prose | List&lt;Impuesto&gt; (draft L173–181) |
| `impuestos-abstract` | `CodeFiddle` | `language="csharp"`; code: |
| | | `using System;\nusing System.Collections.Generic;\n\npublic abstract class Impuesto\n{\n    public abstract decimal Calcular(decimal baseImponible);\n}\n\npublic class Iva : Impuesto\n{\n    public override decimal Calcular(decimal baseImponible) => baseImponible * 0.19m;\n}\n\npublic class ImpuestoCero : Impuesto\n{\n    public override decimal Calcular(decimal baseImponible) => 0m;\n}\n\npublic class ImpuestoFijo : Impuesto\n{\n    private readonly decimal _monto;\n    public ImpuestoFijo(decimal monto) => _monto = monto;\n\n    public override decimal Calcular(decimal baseImponible) => _monto;\n}` |
| `foreach-impuestos` | `CodeFiddle` | `language="csharp"`; code: |
| | | `var impuestos = new List<Impuesto>\n{\n    new Iva(),\n    new ImpuestoCero(),\n    new ImpuestoFijo(5m)\n};\n\nforeach (var imp in impuestos)\n    Console.WriteLine(imp.Calcular(100)); // 19, 0, 5` |
| Preview Vehiculo/Carro (H3) | `CodeFiddle` | `language="csharp"`; code: |
| | | `public class Vehiculo\n{\n    public virtual void Arrancar() => Console.WriteLine("Vehículo arrancando...");\n}\n\npublic class Carro : Vehiculo\n{\n    public override void Arrancar() => Console.WriteLine("Carro arrancando...");\n}\n\nVehiculo v = new Carro();\nv.Arrancar(); // Carro arrancando... — dispatch en runtime` |
| `dispatch-runtime-sequence` | `MermaidDiagram` | chart draft L249–252 |
| `jerarquia-impuesto` | `MermaidDiagram` | chart draft L256–259 |
| Errores comunes | prose `<ul>` | 3 ítems new/override (draft L261–265) |
| `predice-calcular-impuestos` | `PracticeExercise` | prompt: «Predice la salida de `imp.Calcular(100)` para `Iva`, `ImpuestoCero` e `ImpuestoFijo(5)` antes de ejecutar. Luego verifica en consola.»; hints: `["Iva: 19% de 100 = 19", "ImpuestoCero siempre devuelve 0", "ImpuestoFijo ignora la base y devuelve el monto fijo"]`; expectedKeywords: `["19", "0", "5"]`; successMessage: «Correcto. Cada derivada responde distinto bajo la misma firma Calcular.» |

Separar los dos diagramas con el `CodeFiddle` Vehiculo/Carro entre ellos.

### `ClienteEstableSection`

| id | componente | props |
|----|------------|-------|
| Mapa mental | prose `<ul>` | extender sin editar cliente (draft L285–289) |
| Qué es | prose | cliente estable, LSP preview (draft L291–293) |
| `switch-vs-polimorfismo` | `CompareTable` | headers: `["Aspecto", "switch / is en cliente", "Polimorfismo"]`; rows draft L300–305 |
| Cuándo NO polimorfizar | prose `<ul>` | 3 ítems (draft L308–312) |
| `extension-pasarela-nequi` | `CodeFiddle` | `language="csharp"`; code: |
| | | `// Después de tener Checkout funcionando — sin editar Checkout:\npublic class PasarelaNequi : IPasarelaPago\n{\n    public string Nombre => "Nequi";\n    public void Cobrar(decimal monto) => Console.WriteLine($"[{Nombre}] cobrando {monto}");\n}\n\nvar checkoutNequi = new Checkout(new PasarelaNequi());\ncheckoutNequi.Pagar(50);` |
| Errores comunes | prose `<ul>` | 3 ítems casting/overload (draft L328–332) |
| `list-impuesto-sustituibilidad` | `PracticeExercise` | prompt: «Explica por qué `List<Impuesto>` puede contener `Iva` e `ImpuestoCero` pero `List<Iva>` no puede contener `ImpuestoCero` polimórficamente.»; hints: `["List<Impuesto> es tipo base del contrato", "Iva e ImpuestoCero son derivadas sustituibles", "List<Iva> solo admite instancias de Iva o sus hijas"]`; expectedKeywords: `["base", "derivada", "sustituibilidad"]`; successMessage: «Correcto. La lista del tipo contrato/base admite todas las implementaciones compatibles.» |

### `ResumenSection`

| elemento | contenido |
|----------|-----------|
| Viñetas | 6 puntos draft L352–357 |

### `CompruebaTuComprensionSection`

| id | componente | props |
|----|------------|-------|
| Intro | prose | draft L365 |
| `comprension-pasarela-efectivo` | `PracticeExercise` | prompt: «Añade `PasarelaEfectivo : IPasarelaPago` y `new Checkout(new PasarelaEfectivo())` sin editar `Checkout`. Verifica que el `foreach` de checkouts incluye la nueva pasarela.»; hints: `["PasarelaEfectivo implementa Nombre y Cobrar", "Checkout ya depende solo de IPasarelaPago", "Añade la instancia a la List<Checkout> en Main"]`; expectedKeywords: `["PasarelaEfectivo", "Checkout", "foreach"]`; successMessage: «Correcto. Extensión sin modificar el cliente — polimorfismo en acción.» |
| `comprension-impuesto-fijo` | `PracticeExercise` | prompt: «Implementa `ImpuestoFijo` con monto constante. Predice salida de `imp.Calcular(100)` para `Iva`, `ImpuestoCero` e `ImpuestoFijo(5)` antes de ejecutar.»; hints: `["ImpuestoFijo devuelve _monto sin usar baseImponible", "Iva: 100 * 0.19 = 19", "ImpuestoCero: 0"]`; expectedKeywords: `["19", "0", "5", "Calcular"]`; successMessage: «Correcto. Has validado dispatch polimórfico con predicción previa.» |
| `comprension-antipatrones-polimorfismo` | `PracticeExercise` | prompt: «Nombra dos anti-patrones que anulan el polimorfismo y dos señales de diseño polimórfico correcto según la lección.»; hints: `["Anti: switch/is por tipo en cliente", "Anti: new en lugar de override", "Bien: contrato + inyección", "Bien: List del tipo base/interfaz"]`; expectedKeywords: `["switch", "override", "contrato", "interfaz"]`; successMessage: «Correcto. Polimorfismo requiere contrato estable y dispatch en runtime, no ramas por tipo.» |

### `RetoIntegradorSection`

| id | componente | props |
|----|------------|-------|
| Enunciado | prose + `<ol>` | «Facturación con checkout e impuestos»; Partes A–D + criterio éxito (draft L410–435) |
| `reto-extension-parte-d` | `PracticeExercise` | prompt: «Documenta qué archivos editaste al añadir PasarelaNequi o ImpuestoReducido (Parte D). ¿Por qué Checkout y Factura no aparecen en la lista?»; hints: `["Solo nueva clase que implementa el contrato", "Main o composición registra la nueva instancia", "Cliente estable no cambia al extender"]`; expectedKeywords: `["nueva clase", "sin editar", "Checkout", "Factura"]`; successMessage: «Excelente. Extensión por adición, no por modificación del cliente.»; `rows={6}` |

### `CierreSection`

| elemento | contenido |
|----------|-----------|
| Párrafo cierre | draft L455 |
| Ideas clave | `<ul>` 4 viñetas draft L459–462 |
| Siguiente paso | enlace `override-y-sobrecarga` draft L464 |

### `MiniquizFinalSection`

| elemento | props |
|----------|-------|
| H2 | «Mini-quiz» |
| Quiz | `<QuizSection slug="polimorfismo" track="poo" />` |

## Componentes nuevos (escalar a lesson-developer)

| archivo | export | dependencias |
|---------|--------|--------------|
| `sections/ObjetivosDelTemaSection.tsx` | `ObjetivosDelTemaSection` | `Callout` |
| `sections/ClienteEstableSection.tsx` | `ClienteEstableSection` | `CompareTable`, `CodeFiddle`, `PracticeExercise` |
| `sections/ResumenSection.tsx` | `ResumenSection` | prose only |
| `sections/CompruebaTuComprensionSection.tsx` | `CompruebaTuComprensionSection` | `PracticeExercise` ×3 |
| `sections/RetoIntegradorSection.tsx` | `RetoIntegradorSection` | `PracticeExercise` |
| `sections/CierreSection.tsx` | `CierreSection` | prose only |
| `sections/MiniquizFinalSection.tsx` | `MiniquizFinalSection` | `QuizSection` (shared) |

## Secciones existentes — trabajo pendiente

| archivo | acción |
|---------|--------|
| `PolimorfismoQueEsYSection.tsx` | Renombrar → `PolimorfismoInterfacesSection.tsx`; poblar: 2 `CodeFiddle`, `StepReveal`, `MermaidDiagram`, `CodeChallenge`; H2 «Polimorfismo con interfaces» |
| `PolimorfismoConClaseBaseSection.tsx` | Renombrar → `PolimorfismoHerenciaSection.tsx`; poblar: 3 `CodeFiddle`, 2 `MermaidDiagram`, `PracticeExercise`; H2 «Polimorfismo con clase abstracta» |
| `PolimorfismoLesson.tsx` | Orden 9 secciones + imports |

## Checklist lesson-developer

- [ ] H2 según lesson-spec § Clay UI (sin prefijos «1)» / «2)» / «3)»)
- [ ] Migrar todo código → `CodeFiddle` con `language="csharp"` (6 bloques en draft)
- [ ] Crear `ObjetivosDelTemaSection`, `ClienteEstableSection`, secciones pedagógicas
- [ ] Renombrar y poblar `PolimorfismoInterfacesSection`, `PolimorfismoHerenciaSection`
- [ ] Registrar quiz `polimorfismo` en `teaching-quizzes/poo.ts`
- [ ] `lesson-meta.ts`: `seoTitle` / `seoDescription` desde draft § SEO

## Nav LessonLayout

| campo | valor |
|-------|-------|
| `prev` | `abstraccion-clases-abstractas-interfaces` |
| `next` | `override-y-sobrecarga` |
