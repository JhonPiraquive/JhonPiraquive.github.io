---
track: poo
slug: override-y-sobrecarga
title: "Override y Sobrecarga"
order: 7
prerequisites:
  - polimorfismo
related:
  - diagramas-de-clases
source_brief: kb/education/pipeline/poo/override-y-sobrecarga/brief.md
source_legacy: kb/education/sources/clases/poo/07-override-y-sobrecarga.md
topic_expert: topic-expert-oop-csharp
---

## Objetivos de aprendizaje

Al finalizar la lección, el estudiante podrá:

- **Definir** override como redefinición con misma firma en jerarquía y overload como métodos homónimos con firmas distintas.
- **Implementar** `override` correctamente (`virtual`/`abstract` + `override`) y procesar derivadas en `List<TipoBase>`.
- **Crear** sobrecargas coherentes en una misma clase y predecir qué firma elige el compilador.
- **Distinguir** resolución en **runtime** (override) vs **compile time** (overload) y el efecto de `new` frente a `override`.
- **Evaluar** si un diseño debe usar especialización por herencia (override) o ergonomía de API (overload).

## Prerrequisitos

- **Lección `polimorfismo`:** dispatch en runtime, programar contra contrato, preview `virtual`/`override`.
- **Lección `herencia`:** jerarquía base/derivada, `virtual`, `override`, constructor con `base`.
- **Lección `abstraccion-clases-abstractas-interfaces`:** métodos abstractos como candidatos a override.

## Contenido

### Objetivos del tema

**Sección TSX:** `ObjetivosDelTemaSection`

Esta lección matiza dos mecanismos que suelen confundirse: **override** (herencia, misma firma, runtime) y **overload** (misma clase, firmas distintas, compile time). Complementa el polimorfismo de la lección anterior.

<!-- interactive: CompareTable -->
{
  "headers": ["Aspecto", "Override", "Overload"],
  "rows": [
    ["Herencia", "Requerida", "No requerida"],
    ["Firma", "Igual a la base", "Distinta"],
    ["Resolución", "Runtime (si ref. base)", "Compile time"],
    ["Keyword típico", "override", "(ninguno extra)"]
  ]
}

<!-- interactive: Callout -->
{
  "title": "Dos mecanismos, dos momentos",
  "children": "Override especializa comportamiento en una familia de tipos. Overload ofrece varias formas de llamar la misma operación sin crear jerarquías."
}

---

### 1) Override (sobrescritura)

**Sección TSX:** `OverrideSection`

#### Mapa mental

- Override **reemplaza** implementación heredada con la **misma firma**.
- Base marca `virtual` o `abstract`; derivada usa `override`.
- Dispatch en runtime cuando la variable es del tipo base.

#### Qué es

**Override** permite que una clase derivada sustituya el comportamiento de un método de la base. Con referencia `Mensaje m = new MensajeEmail()`, `m.Enviar()` ejecuta la versión de la instancia real — complemento directo del polimorfismo.

#### Señales de override correcto

- Método base con `virtual` o `abstract`.
- Derivada con `override` (no `new`).
- Cliente itera `List<Mensaje>` sin `if` por tipo.

#### Ejemplo C#: mensajes polimórficos

<!-- code: csharp -->
```csharp
using System;
using System.Collections.Generic;

public class Mensaje
{
    public virtual void Enviar(string texto)
        => Console.WriteLine($"Enviando mensaje genérico: {texto}");
}

public class MensajeEmail : Mensaje
{
    public override void Enviar(string texto)
        => Console.WriteLine($"Enviando EMAIL: {texto}");
}

public class MensajeSms : Mensaje
{
    public override void Enviar(string texto)
        => Console.WriteLine($"Enviando SMS: {texto}");
}
```

#### Lista polimórfica con override

<!-- code: csharp -->
```csharp
var mensajes = new List<Mensaje>
{
    new MensajeEmail(),
    new MensajeSms()
};

foreach (var m in mensajes)
    m.Enviar("Hola"); // EMAIL, luego SMS
```

#### Llamada override paso a paso

<!-- interactive: StepReveal -->
{
  "title": "m.Enviar() con referencia Mensaje",
  "steps": [
    { "title": "Variable declarada como Mensaje", "content": "La referencia es del tipo base; el contrato es `Enviar(string)`." },
    { "title": "Instancia real MensajeEmail", "content": "El objeto en memoria es `MensajeEmail`, no la base genérica." },
    { "title": "Dispatch a override", "content": "El runtime resuelve `override Enviar` de la derivada." },
    { "title": "Salida específica del canal", "content": "Se imprime el formato EMAIL, no el mensaje genérico." }
  ]
}

#### Jerarquía Mensaje

<!-- interactive: MermaidDiagram -->
{
  "chart": "classDiagram\n  Mensaje <|-- MensajeEmail\n  Mensaje <|-- MensajeSms\n  class Mensaje {\n    +Enviar(string texto)\n  }\n  class MensajeEmail {\n    +Enviar(string texto)\n  }\n  class MensajeSms {\n    +Enviar(string texto)\n  }"
}

#### Caso real: canal de notificaciones

Un sistema de alertas mantenía `if (tipo == "email")` en un método de 200 líneas. Con `Mensaje` + `override`, el orquestador itera `List<Mensaje>` sin ramas por tipo.

#### Errores comunes

- `override` sin `virtual`/`abstract` en la base — error de compilación.
- `new` pensando que polimorfiza — con referencia base se llama la versión de `Animal`.
- Override que rompe contrato — derivada lanza excepción donde la base no lo hace (preview LSP).

<!-- interactive: CodeChallenge -->
{
  "title": "Completa el override de Enviar",
  "template": "public class MensajeSms : Mensaje\n{\n    public ___ void Enviar(string texto)\n        => Console.WriteLine($\"Enviando SMS: {texto}\");\n}",
  "blanks": [
    { "id": "b1", "answer": "override", "hint": "Keyword para redefinir un método virtual de la base" }
  ]
}

---

### 2) Overload (sobrecarga)

**Sección TSX:** `OverloadSection`

#### Mapa mental

- Varios métodos con el **mismo nombre** y **firmas distintas** en la **misma clase**.
- **No requiere herencia** — resolución en **compile time**.
- Todas las sobrecargas deben representar la **misma intención** operativa.

#### Qué es

**Overload** permite ofrecer ergonomía de API: `Sumar(1, 2)` vs `Sumar(1, 2, 3)` vs `Sumar(1.5m, 2.0m)`. El compilador elige la firma según los tipos estáticos de los argumentos.

#### Ejemplo C#: calculadora con varias firmas

<!-- code: csharp -->
```csharp
using System;

public class Calculadora
{
    public int Sumar(int a, int b) => a + b;
    public int Sumar(int a, int b, int c) => a + b + c;
    public decimal Sumar(decimal a, decimal b) => a + b;
    public int Sumar(params int[] valores)
    {
        var total = 0;
        foreach (var v in valores) total += v;
        return total;
    }
}
```

#### Resolución por firma

<!-- interactive: MermaidDiagram -->
{
  "chart": "flowchart TD\n  Call1[\"Sumar(1,2)\"] --> PickA[\"Sumar(int,int)\"]\n  Call2[\"Sumar(1,2,3)\"] --> PickB[\"Sumar(int,int,int)\"]\n  Call3[\"Sumar(1.5m,2.0m)\"] --> PickC[\"Sumar(decimal,decimal)\"]"
}

#### Caso real: API de búsqueda

Un repositorio exponía `BuscarPorId`, `BuscarPorNombre`, `BuscarCompleto`. El equipo unificó en `Buscar(int id)`, `Buscar(string nombre)` y `Buscar(string nombre, decimal precioMax)` — misma intención, firmas distintas.

#### Errores comunes

- Sobrecargas con intenciones distintas — API confusa.
- Demasiadas sobrecargas — preferir parámetros opcionales u objeto de opciones.
- Ambigüedad con `params` — `Sumar(int a, int b)` vs `Sumar(params int[] valores)`.
- Asumir resolución en runtime — siempre es decisión del compilador.

<!-- interactive: PracticeExercise -->
{
  "prompt": "Predice qué firma de `Sumar` usa el compilador para `Sumar(1, 2, 3, 4)` antes de ejecutar. Verifica en consola.",
  "hints": [
    "Cuatro argumentos int no coincide con Sumar(int,int)",
    "params int[] acepta cualquier cantidad de int",
    "La resolución es en compile time"
  ],
  "expectedKeywords": ["params", "int[]", "4"],
  "successMessage": "Correcto. Sumar(params int[] valores) suma los cuatro enteros."
}

---

### 3) Comparación práctica: override, overload y `new`

**Sección TSX:** `OverrideVsOverloadSection`

#### Mapa mental

- Una clase puede tener **overload** y **override** al mismo tiempo — mecanismos independientes.
- `new` **oculta** sin dispatch polimórfico.
- Override respeta contrato; overload mejora ergonomía.

#### Override y overload en la misma jerarquía

<!-- code: csharp -->
```csharp
using System;

public class Animal
{
    public virtual void Hablar() => Console.WriteLine("Sonido genérico");

    public void Comer(string comida) => Console.WriteLine($"Come {comida}");
    public void Comer(string comida, int cantidad)
        => Console.WriteLine($"Come {cantidad} de {comida}");
}

public class Perro : Animal
{
    public override void Hablar() => Console.WriteLine("Guau!");
}

Animal a = new Perro();
a.Hablar();              // Guau! — override, runtime
a.Comer("croquetas");    // overload 1, compile time
a.Comer("croquetas", 2); // overload 2, compile time
```

#### `new` vs `override`

<!-- code: csharp -->
```csharp
public class Animal
{
    public virtual void Hablar() => Console.WriteLine("Sonido genérico");
}

public class GatoMal : Animal
{
    public new void Hablar() => Console.WriteLine("Miau!");
}

Animal refBase = new GatoMal();
refBase.Hablar(); // Sonido genérico — new no polimorfiza
```

#### Animal: override + overload

<!-- interactive: MermaidDiagram -->
{
  "chart": "classDiagram\n  Animal <|-- Perro\n  class Animal {\n    +Hablar()\n    +Comer(string comida)\n    +Comer(string comida, int cantidad)\n  }\n  class Perro {\n    +Hablar()\n  }"
}

#### Cuándo usar cada uno

- **Override:** especializar comportamiento en familia de tipos (canales, impuestos, mensajes).
- **Overload:** ergonomía de API sin duplicar nombres de operación (búsqueda, cálculo).

#### Errores comunes

- Confundir override con overload — override = misma firma + herencia.
- Mezclar ocultamiento y polimorfismo en el mismo método sin entender la salida.
- Olvidar `using System.Collections.Generic` al usar `List<Mensaje>`.

<!-- interactive: PracticeExercise -->
{
  "prompt": "Con `Animal a = new Perro()` y `Perro p = new Perro()`, ¿cambia la salida de `Hablar()` en cada caso? Explica override y tipo de referencia.",
  "hints": [
    "Perro usa override de Hablar",
    "a es referencia Animal pero instancia Perro — dispatch polimórfico",
    "p es referencia Perro — misma implementación override"
  ],
  "expectedKeywords": ["Guau", "override", "runtime", "referencia"],
  "successMessage": "Correcto. Ambas imprimen Guau! porque override resuelve por tipo real del objeto."
}

---

### Resumen

**Sección TSX:** `ResumenSection`

- **Override:** misma firma en jerarquía; `virtual`/`abstract` + `override`; resolución en **runtime**.
- **Overload:** firmas distintas en la misma clase; resolución en **compile time**; misma intención operativa.
- **`new`:** oculta sin polimorfismo — no sustituye a `override` en diseño polimórfico.
- **Coexistencia:** `Animal` puede tener overload de `Comer` y `Perro` override de `Hablar`.
- **Siguiente lección:** `diagramas-de-clases` — representar jerarquías y relaciones en UML/Mermaid.

---

### Comprueba tu comprensión

**Sección TSX:** `CompruebaTuComprensionSection`

Antes del cierre, verifica que puedes aplicar los conceptos de la lección.

<!-- interactive: PracticeExercise -->
{
  "prompt": "Crea `MensajeSms : Mensaje` con `override` de `Enviar`; añádela a `List<Mensaje>` y verifica salida en `foreach`.",
  "hints": [
    "MensajeSms implementa override Enviar con formato SMS",
    "Añade instancia a List<Mensaje> junto a MensajeEmail",
    "foreach llama Enviar polimórficamente"
  ],
  "expectedKeywords": ["MensajeSms", "override", "foreach"],
  "successMessage": "Correcto. Override permite procesar canales distintos en un bucle uniforme."
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "Añade `Sumar(params int[] valores)` a `Calculadora` si no existe. Predice qué firma usa `Sumar(1, 2, 3, 4)` antes de ejecutar.",
  "hints": [
    "params acepta arreglo variable de int",
    "Cuatro argumentos no encajan en Sumar(int,int) ni Sumar(int,int,int)",
    "Compilador elige en compile time"
  ],
  "expectedKeywords": ["params", "10", "compile"],
  "successMessage": "Correcto. La sobrecarga variádica suma todos los valores."
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "Documenta en un comentario qué pasaría si `MensajePush` usara `new void Enviar` en lugar de `override` con variable `Mensaje`.",
  "hints": [
    "new oculta sin dispatch polimórfico",
    "foreach sobre List<Mensaje> llamaría versión base",
    "override es necesario para polimorfismo real"
  ],
  "expectedKeywords": ["new", "base", "override", "Mensaje"],
  "successMessage": "Correcto. Con new, el cliente con referencia Mensaje no ve la implementación de la derivada."
}

---

## Reto integrador

**Sección TSX:** `RetoIntegradorSection`

**"Notificaciones y operaciones con override y overload"**

Sistema consola .NET que combine especialización por herencia y API sobrecargada.

**Parte A — Override (notificaciones)**

1. `Mensaje` con `virtual void Enviar(string texto)`.
2. `MensajeEmail` y `MensajeSms` con `override`.
3. Clase `ServicioNotificaciones` con método `EnviarATodos(List<Mensaje> mensajes, string texto)` — bucle sin `if` por tipo.
4. En `Main`, crear lista con ambos canales y ejecutar.

**Parte B — Overload (calculadora de pedidos)**

5. `CalculadoraPedido` con `decimal Total(decimal precio, int cantidad)`.
6. Sobrecarga `decimal Total(decimal precio, int cantidad, decimal descuentoPorcentaje)`.
7. Sobrecarga `decimal Total(params decimal[] precios)` para sumar líneas sueltas.
8. En `Main`, llamar las tres versiones e imprimir resultados coherentes.

**Parte C — Comparación `new` vs `override`**

9. Clase `MensajePush : Mensaje` con `override` correcto.
10. Documentar en comentario qué pasaría si se usara `new` en lugar de `override` con variable `Mensaje`.

**Criterio de éxito:** compila; `foreach` polimórfico sin ramas por tipo; tres sobrecargas de `Total` resolviendo sin ambigüedad; estudiante explica runtime vs compile time.

<!-- interactive: PracticeExercise -->
{
  "prompt": "En el reto, enumera qué partes usan resolución en runtime y cuáles en compile time. Justifica con un ejemplo de cada una.",
  "hints": [
    "Override Enviar en foreach — runtime",
    "Total con distintos argumentos — compile time",
    "MensajePush override vs new — contraste runtime"
  ],
  "expectedKeywords": ["runtime", "compile", "override", "overload"],
  "successMessage": "Excelente. Has integrado ambos mecanismos en un mismo sistema."
}

---

## Cierre

**Sección TSX:** `CierreSection`

Has completado el estudio de override y sobrecarga en C#. Son el complemento técnico del polimorfismo: override lo materializa en jerarquías; overload mejora APIs sin herencia.

**Ideas clave para retener:**

- **Override** = misma firma, herencia, runtime, `override`.
- **Overload** = firmas distintas, misma clase, compile time.
- **`new`** no sustituye a override en diseño polimórfico.
- **Elegir bien:** herencia para especialización; overload para ergonomía.

**Siguiente paso:** lección `diagramas-de-clases` — modelar jerarquías y relaciones visualmente antes de codificar.

---

## Miniquiz

**Sección TSX:** `MiniquizFinalSection`

<!-- interactive: Quiz -->
{
  "questions": [
    {
      "question": "V/F: override funciona sin herencia.",
      "options": ["Verdadero", "Falso"],
      "correctIndex": 1,
      "feedback": "La sobrescritura requiere una clase base y una derivada en jerarquía."
    },
    {
      "question": "V/F: Para poder sobrescribir, la base debe marcar el método como virtual o abstract.",
      "options": ["Verdadero", "Falso"],
      "correctIndex": 0,
      "feedback": "Sin permiso en la base, no hay override polimórfico válido."
    },
    {
      "question": "¿Qué keyword usa la derivada para reemplazar un método virtual de la base?",
      "options": ["overload", "override", "overload override", "virtual"],
      "correctIndex": 1,
      "feedback": "override reemplaza la implementación con la misma firma."
    },
    {
      "question": "V/F: La sobrecarga (overload) se resuelve en tiempo de ejecución según el tipo real del objeto.",
      "options": ["Verdadero", "Falso"],
      "correctIndex": 1,
      "feedback": "El compilador elige la sobrecarga por nombre y tipos de argumentos en compile time."
    },
    {
      "question": "Dado Animal a = new Perro(); con Perro que usa new void Hablar() (no override), ¿qué ocurre al llamar a.Hablar()?",
      "options": [
        "Imprime Guau! por polimorfismo",
        "Llama al Hablar de Animal — new no polimorfiza",
        "Error de compilación",
        "Elige overload en runtime"
      ],
      "correctIndex": 1,
      "feedback": "new oculta el método; con referencia Animal se invoca la versión de la base."
    }
  ]
}

---

## SEO (sugerencias)

- **seoTitle:** Override y sobrecarga en C#: diferencias y ejemplos | POO
- **seoDescription:** Aprende override vs overload en C# con Mensaje, Calculadora y Animal. Resolución en runtime y compile time, y cuándo usar new frente a override.
