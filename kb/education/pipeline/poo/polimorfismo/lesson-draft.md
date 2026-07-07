---
track: poo
slug: polimorfismo
title: "Polimorfismo"
order: 6
prerequisites:
  - abstraccion-clases-abstractas-interfaces
related:
  - override-y-sobrecarga
source_brief: kb/education/pipeline/poo/polimorfismo/brief.md
source_legacy: kb/education/sources/clases/poo/06-polimorfismo.md
topic_expert: topic-expert-oop-csharp
---

## Objetivos de aprendizaje

Al finalizar la lección, el estudiante podrá:

- **Definir** polimorfismo como invocación uniforme sobre contrato con comportamiento según el tipo real del objeto.
- **Implementar** polimorfismo con **interfaz** (`IPasarelaPago` + `Checkout`) y con **clase abstracta** (`Impuesto` + derivadas).
- **Construir** colecciones polimórficas y procesarlas con un único bucle sin `switch` por tipo.
- **Extender** el sistema con una nueva implementación (`PasarelaEfectivo`, `ImpuestoFijo`) **sin modificar** el código cliente existente.
- **Distinguir** polimorfismo real (`virtual`/`override`, interfaz) de ocultamiento con `new` o ramas `if` por tipo.

## Prerrequisitos

- **Lección `abstraccion-clases-abstractas-interfaces`:** interfaces, clases abstractas, inyección por constructor.
- **Lección `herencia`:** `virtual`, `override`, preview polimórfico con `Vehiculo`/`Carro`.
- **Lección `asociacion-agregacion-composicion`:** composición de pasarela dentro de `Checkout`.

## Contenido

### Objetivos del tema

**Sección TSX:** `ObjetivosDelTemaSection`

Esta lección une abstracción y herencia en **polimorfismo**: una misma llamada, distintos comportamientos en runtime. El dominio técnico proviene del brief del topic-expert.

<!-- interactive: Callout -->
{
  "title": "Misma llamada, distinto comportamiento",
  "children": "El tipo declarado de la variable puede ser contrato o base, pero la ejecución usa el tipo real del objeto. El cliente no necesita conocer las clases concretas."
}

---

### 1) Polimorfismo con interfaces

**Sección TSX:** `PolimorfismoInterfacesSection`

#### Mapa mental

- Polimorfismo = invocación uniforme; dispatch según tipo **real**.
- Variable `IPasarelaPago` apunta a implementaciones intercambiables.
- El cliente (`Checkout`) solo conoce el contrato.

#### Qué es

**Polimorfismo** significa que una misma llamada (`Pagar`, `Cobrar`) ejecuta comportamiento distinto según la implementación concreta del objeto, aunque la variable sea del tipo contrato (`IPasarelaPago`).

#### Señales de polimorfismo con interfaz

- Cliente recibe contrato por constructor; no instancia concretos internamente.
- Nuevas pasarelas = nueva clase; `Checkout` no cambia.
- Lista `List<Checkout>` procesable en bucle uniforme.

#### Ejemplo C#: pasarelas de pago

<!-- code: csharp -->
```csharp
using System;
using System.Collections.Generic;

public interface IPasarelaPago
{
    string Nombre { get; }
    void Cobrar(decimal monto);
}

public class PasarelaTarjeta : IPasarelaPago
{
    public string Nombre => "Tarjeta";
    public void Cobrar(decimal monto) => Console.WriteLine($"[{Nombre}] cobrando {monto}");
}

public class PasarelaTransferencia : IPasarelaPago
{
    public string Nombre => "Transferencia";
    public void Cobrar(decimal monto) => Console.WriteLine($"[{Nombre}] cobrando {monto}");
}

public class PasarelaEfectivo : IPasarelaPago
{
    public string Nombre => "Efectivo";
    public void Cobrar(decimal monto) => Console.WriteLine($"[{Nombre}] cobrando {monto}");
}

public class Checkout
{
    private readonly IPasarelaPago _pasarela;

    public Checkout(IPasarelaPago pasarela) => _pasarela = pasarela;

    public void Pagar(decimal monto) => _pasarela.Cobrar(monto);
}
```

#### Lista polimórfica de checkouts

<!-- code: csharp -->
```csharp
var checkouts = new List<Checkout>
{
    new Checkout(new PasarelaTarjeta()),
    new Checkout(new PasarelaTransferencia()),
    new Checkout(new PasarelaEfectivo())
};

foreach (var c in checkouts)
    c.Pagar(100);
```

#### Llamada polimórfica paso a paso

<!-- interactive: StepReveal -->
{
  "title": "Checkout.Pagar en runtime",
  "steps": [
    { "title": "Checkout guarda contrato", "content": "`Checkout` almacena `IPasarelaPago` inyectada en el constructor." },
    { "title": "Cliente llama Pagar", "content": "`checkout.Pagar(100)` — firma uniforme para todos los checkouts." },
    { "title": "Delegación", "content": "`Pagar` delega en `_pasarela.Cobrar(100)` del contrato." },
    { "title": "Dispatch runtime", "content": "El runtime resuelve Tarjeta, Transferencia o Efectivo según el objeto real." }
  ]
}

#### Caso real: checkout multi-pasarela

Un SaaS mantenía `switch(metodoPago)` de 400 líneas. Cada integración rompía tests. Con `IPasarelaPago`, nuevos métodos = nueva clase + registro; `Checkout` intacto.

#### Diagrama: flujo Checkout → IPasarelaPago

<!-- interactive: MermaidDiagram -->
{
  "chart": "flowchart LR\n  Cliente[Checkout.Pagar] --> Contrato[IPasarelaPago.Cobrar]\n  Contrato --> Tarjeta[PasarelaTarjeta]\n  Contrato --> Transfer[PasarelaTransferencia]\n  Contrato --> Efectivo[PasarelaEfectivo]"
}

#### Errores comunes

- `if (pasarela is PasarelaTarjeta)` en `Checkout` — anula el beneficio.
- `List<PasarelaTarjeta>` en lugar de `List<IPasarelaPago>`.

<!-- interactive: CodeChallenge -->
{
  "title": "Completa el checkout polimórfico",
  "template": "public void Pagar(decimal monto) => ___.Cobrar(monto);",
  "blanks": [
    { "id": "b1", "answer": "_pasarela", "hint": "Campo readonly del contrato inyectado" }
  ]
}

---

### 2) Polimorfismo con clase abstracta

**Sección TSX:** `PolimorfismoHerenciaSection`

#### Mapa mental

- Clase abstracta `Impuesto` define contrato común `Calcular`.
- Derivadas `Iva`, `ImpuestoCero`, `ImpuestoFijo` implementan con `override`.
- `List<Impuesto>` permite bucle homogéneo.

#### Qué es

El polimorfismo también opera con **jerarquías de herencia**: variable de tipo base o abstracta, objeto concreto derivado. `foreach` sobre `List<Impuesto>` llama `Calcular` polimórficamente.

#### Señales de polimorfismo con abstracta

- Método `abstract` o `virtual` en la base.
- Derivadas con `override` (no `new`).
- Colección del tipo base/contrato, no del concreto.

#### Ejemplo C#: impuestos

<!-- code: csharp -->
```csharp
using System;
using System.Collections.Generic;

public abstract class Impuesto
{
    public abstract decimal Calcular(decimal baseImponible);
}

public class Iva : Impuesto
{
    public override decimal Calcular(decimal baseImponible) => baseImponible * 0.19m;
}

public class ImpuestoCero : Impuesto
{
    public override decimal Calcular(decimal baseImponible) => 0m;
}

public class ImpuestoFijo : Impuesto
{
    private readonly decimal _monto;
    public ImpuestoFijo(decimal monto) => _monto = monto;

    public override decimal Calcular(decimal baseImponible) => _monto;
}
```

#### Foreach polimórfico

<!-- code: csharp -->
```csharp
var impuestos = new List<Impuesto>
{
    new Iva(),
    new ImpuestoCero(),
    new ImpuestoFijo(5m)
};

foreach (var imp in impuestos)
    Console.WriteLine(imp.Calcular(100)); // 19, 0, 5
```

#### Preview herencia virtual (conexión lección herencia)

<!-- code: csharp -->
```csharp
public class Vehiculo
{
    public virtual void Arrancar() => Console.WriteLine("Vehículo arrancando...");
}

public class Carro : Vehiculo
{
    public override void Arrancar() => Console.WriteLine("Carro arrancando...");
}

Vehiculo v = new Carro();
v.Arrancar(); // Carro arrancando... — dispatch en runtime
```

#### Dispatch en runtime (secuencia)

<!-- interactive: MermaidDiagram -->
{
  "chart": "sequenceDiagram\n  participant C as Cliente\n  participant V as Vehiculo ref\n  participant Car as Carro instancia\n  C->>V: Arrancar()\n  V->>Car: override Arrancar()\n  Car-->>C: Carro arrancando..."
}

#### Jerarquía Impuesto

<!-- interactive: MermaidDiagram -->
{
  "chart": "classDiagram\n  Impuesto <|-- Iva\n  Impuesto <|-- ImpuestoCero\n  Impuesto <|-- ImpuestoFijo\n  class Impuesto {\n    <<abstract>>\n    +Calcular(decimal baseImponible) decimal\n  }"
}

#### Errores comunes

- `new` en lugar de `override` — oculta sin dispatch polimórfico.
- Olvidar `virtual`/`abstract` en la base.
- Contrato inconsistente: una implementación lanza excepción donde otras cumplen.

<!-- interactive: PracticeExercise -->
{
  "prompt": "Predice la salida de `imp.Calcular(100)` para `Iva`, `ImpuestoCero` e `ImpuestoFijo(5)` antes de ejecutar. Luego verifica en consola.",
  "hints": [
    "Iva: 19% de 100 = 19",
    "ImpuestoCero siempre devuelve 0",
    "ImpuestoFijo ignora la base y devuelve el monto fijo"
  ],
  "expectedKeywords": ["19", "0", "5"],
  "successMessage": "Correcto. Cada derivada responde distinto bajo la misma firma Calcular."
}

---

### 3) Cliente estable y extensión

**Sección TSX:** `ClienteEstableSection`

#### Mapa mental

- Extender = nueva clase; no editar cliente (preview abierto/cerrado).
- Anti-patrón: `switch` o `is` por tipo en el cliente.
- Sustituibilidad (LSP preview): cada implementación cumple el contrato.

#### Qué es

El beneficio central del polimorfismo es un **cliente estable**: `Checkout`, `Factura.TotalImpuestos()` o un `foreach` no cambian al añadir variantes. La composición raíz (`Main` o DI) instancia las concretas.

#### Comparación: if por tipo vs polimorfismo

<!-- interactive: CompareTable -->
{
  "headers": ["Aspecto", "switch / is en cliente", "Polimorfismo"],
  "rows": [
    ["Nueva variante", "Editar cliente", "Nueva clase"],
    ["Acoplamiento", "Alto", "Bajo (contrato)"],
    ["Legibilidad del bucle", "Ramas crecientes", "Una llamada uniforme"],
    ["Tests", "Combinar todas las ramas", "Mock del contrato"]
  ]
}

#### Cuándo NO polimorfizar

- Un solo caso sin variación prevista.
- Jerarquías que no comparten intención real.
- Métodos con mismo nombre pero sin relación de contrato (no es polimorfismo de diseño).

#### Extensión demostrada

<!-- code: csharp -->
// Después de tener Checkout funcionando — sin editar Checkout:
public class PasarelaNequi : IPasarelaPago
{
    public string Nombre => "Nequi";
    public void Cobrar(decimal monto) => Console.WriteLine($"[{Nombre}] cobrando {monto}");
}

var checkoutNequi = new Checkout(new PasarelaNequi());
checkoutNequi.Pagar(50);
```

#### Errores comunes

- Casting innecesario `(PasarelaTarjeta)pasarela` — señal de contrato incompleto.
- Asumir que el compilador elige por variable — el **objeto** decide en runtime.
- Mezclar overload con override — temas distintos (lección `override-y-sobrecarga`).

<!-- interactive: PracticeExercise -->
{
  "prompt": "Explica por qué `List<Impuesto>` puede contener `Iva` e `ImpuestoCero` pero `List<Iva>` no puede contener `ImpuestoCero` polimórficamente.",
  "hints": [
    "List<Impuesto> es tipo base del contrato",
    "Iva e ImpuestoCero son derivadas sustituibles",
    "List<Iva> solo admite instancias de Iva o sus hijas"
  ],
  "expectedKeywords": ["base", "derivada", "sustituibilidad"],
  "successMessage": "Correcto. La lista del tipo contrato/base admite todas las implementaciones compatibles."
}

---

### Resumen

**Sección TSX:** `ResumenSection`

- **Polimorfismo:** misma llamada, comportamiento según tipo real del objeto en runtime.
- **Con interfaz:** `IPasarelaPago` + `Checkout`; inyección y bucles sin `switch`.
- **Con abstracta:** `Impuesto` + `override`; `List<Impuesto>` homogénea.
- **Cliente estable:** nuevas variantes sin editar `Checkout` ni `Factura`.
- **Evitar:** `new` sin polimorfismo, `if` por tipo, listas de tipo concreto.
- **Siguiente lección:** `override-y-sobrecarga` — matiza redefinición vs sobrecarga.

---

### Comprueba tu comprensión

**Sección TSX:** `CompruebaTuComprensionSection`

Antes del cierre, verifica que puedes aplicar los conceptos de la lección.

<!-- interactive: PracticeExercise -->
{
  "prompt": "Añade `PasarelaEfectivo : IPasarelaPago` y `new Checkout(new PasarelaEfectivo())` sin editar `Checkout`. Verifica que el `foreach` de checkouts incluye la nueva pasarela.",
  "hints": [
    "PasarelaEfectivo implementa Nombre y Cobrar",
    "Checkout ya depende solo de IPasarelaPago",
    "Añade la instancia a la List<Checkout> en Main"
  ],
  "expectedKeywords": ["PasarelaEfectivo", "Checkout", "foreach"],
  "successMessage": "Correcto. Extensión sin modificar el cliente — polimorfismo en acción."
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "Implementa `ImpuestoFijo` con monto constante. Predice salida de `imp.Calcular(100)` para `Iva`, `ImpuestoCero` e `ImpuestoFijo(5)` antes de ejecutar.",
  "hints": [
    "ImpuestoFijo devuelve _monto sin usar baseImponible",
    "Iva: 100 * 0.19 = 19",
    "ImpuestoCero: 0"
  ],
  "expectedKeywords": ["19", "0", "5", "Calcular"],
  "successMessage": "Correcto. Has validado dispatch polimórfico con predicción previa."
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "Nombra dos anti-patrones que anulan el polimorfismo y dos señales de diseño polimórfico correcto según la lección.",
  "hints": [
    "Anti: switch/is por tipo en cliente",
    "Anti: new en lugar de override",
    "Bien: contrato + inyección",
    "Bien: List del tipo base/interfaz"
  ],
  "expectedKeywords": ["switch", "override", "contrato", "interfaz"],
  "successMessage": "Correcto. Polimorfismo requiere contrato estable y dispatch en runtime, no ramas por tipo."
}

---

## Reto integrador

**Sección TSX:** `RetoIntegradorSection`

**“Facturación con checkout e impuestos”**

Sistema consola .NET que una pagos polimórficos y cálculo fiscal en un flujo coherente.

**Parte A — Pasarelas (interfaz)**

1. `IPasarelaPago` con `Nombre` y `Cobrar(decimal)`.
2. Al menos tres implementaciones (tarjeta, transferencia, efectivo).
3. `Checkout` con inyección; método `Pagar(decimal)` sin lógica `switch` interna.
4. `List<Checkout>` procesada en bucle en `Main`.

**Parte B — Impuestos (clase abstracta)**

5. `abstract class Impuesto` con `Calcular(decimal baseImponible)`.
6. `Iva` (19%), `ImpuestoCero`, `ImpuestoFijo` (monto fijo).
7. Clase `Factura` con `decimal Base` y `List<Impuesto>`; método `TotalImpuestos()` que itera sin `if` por tipo.

**Parte C — Integración**

8. En `Main`: crear factura con base 100 y dos impuestos; imprimir total impuestos; luego ejecutar dos checkouts con pasarelas distintas.

**Parte D — Extensión demostrada**

9. Añadir `PasarelaNequi` o `ImpuestoReducido` **después** de tener Partes A–C funcionando, sin editar `Checkout` ni `Factura.TotalImpuestos`.

**Criterio de éxito:** compila; bucles sin ramas por tipo concreto; nueva pasarela o impuesto solo añade archivo/clase; salida numérica coherente con reglas definidas.

<!-- interactive: PracticeExercise -->
{
  "prompt": "Documenta qué archivos editaste al añadir PasarelaNequi o ImpuestoReducido (Parte D). ¿Por qué Checkout y Factura no aparecen en la lista?",
  "hints": [
    "Solo nueva clase que implementa el contrato",
    "Main o composición registra la nueva instancia",
    "Cliente estable no cambia al extender"
  ],
  "expectedKeywords": ["nueva clase", "sin editar", "Checkout", "Factura"],
  "successMessage": "Excelente. Extensión por adición, no por modificación del cliente."
}

---

## Cierre

**Sección TSX:** `CierreSection`

Has completado el estudio del polimorfismo en C#. Este mecanismo materializa la abstracción en tiempo de ejecución.

**Ideas clave para retener:**

- **Polimorfismo** = dispatch en runtime según tipo real del objeto.
- **Interfaz y abstracta** son los dos vehículos principales en C#.
- **Colecciones polimórficas** simplifican bucles y reglas variables (pagos, impuestos).
- **Cliente estable** es el indicador de diseño correcto; `switch` por tipo es señal de alerta.

**Siguiente paso:** lección `override-y-sobrecarga` — diferencias entre redefinición polimórfica y sobrecarga por firma.

---

## Miniquiz

**Sección TSX:** `MiniquizFinalSection`

<!-- interactive: Quiz -->
{
  "questions": [
    {
      "question": "V/F: El polimorfismo reduce la necesidad de if por tipo en el cliente.",
      "options": ["Verdadero", "Falso"],
      "correctIndex": 0,
      "feedback": "El cliente invoca el contrato; cada implementación responde distinto sin ramas explícitas."
    },
    {
      "question": "¿Qué habilita polimorfismo más comúnmente en C#?",
      "options": [
        "Variables globales",
        "Interfaces y clases base abstractas/virtual",
        "Solo structs",
        "Namespaces"
      ],
      "correctIndex": 1,
      "feedback": "Contrato (interfaz o base) + implementaciones concretas permiten dispatch en runtime."
    },
    {
      "question": "V/F: El cliente debe conocer todas las clases concretas para beneficiarse del polimorfismo.",
      "options": ["Verdadero", "Falso"],
      "correctIndex": 1,
      "feedback": "El cliente depende del contrato; las concretas se instancian en composición o DI."
    },
    {
      "question": "¿Qué keyword usa la derivada para redefinir un método virtual/abstract de la base?",
      "options": ["overload", "override", "extern", "partial"],
      "correctIndex": 1,
      "feedback": "override reemplaza la implementación de la base con la misma firma."
    },
    {
      "question": "Dado `var impuestos = new List<Impuesto> { new Iva(), new ImpuestoCero() };` ¿qué afirmación es correcta?",
      "options": [
        "No compila porque los tipos son distintos",
        "Compila; el foreach puede llamar Calcular polimórficamente",
        "Solo funciona con interfaces, no con abstractas",
        "Requiere cast a Iva en cada elemento"
      ],
      "correctIndex": 1,
      "feedback": "Lista del tipo base/contrato admite instancias derivadas; Calcular se resuelve por tipo real."
    }
  ]
}

---

## SEO (sugerencias)

- **seoTitle:** Polimorfismo en C#: interfaces y clases abstractas | POO
- **seoDescription:** Domina el polimorfismo en C# con IPasarelaPago, Checkout, Impuesto y colecciones polimórficas. Aprende dispatch en runtime y extensión sin modificar el cliente.
