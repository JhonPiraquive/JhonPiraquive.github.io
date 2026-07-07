---
track: poo
slug: herencia
title: "Herencia"
order: 3
prerequisites:
  - encapsulamiento
related:
  - asociacion-agregacion-composicion
source_brief: kb/education/pipeline/poo/herencia/brief.md
source_legacy: kb/education/sources/clases/poo/03-herencia.md
topic_expert: topic-expert-oop-csharp
---

## Objetivos de aprendizaje

Al finalizar la lección, el estudiante podrá:

- **Definir** herencia en C# como relación **“es un”** entre clase derivada y clase base, y **distinguirla** de composición (“tiene un”).
- **Implementar** una jerarquía mínima (`Vehiculo` → `Carro` / `Moto`) con constructor `base(...)`, método `virtual` y `override`.
- **Explicar** polimorfismo básico: variable de tipo base que apunta a instancia derivada y dispatch en tiempo de ejecución.
- **Identificar** señales de mal uso de herencia (solo copiar código, jerarquías profundas, romper contrato de la base) y **proponer** composición + interfaz como alternativa.
- **Aplicar** el patrón `Alarma` + `INotificador` para extender canales sin modificar la clase cliente.

## Prerrequisitos

- **Lección `encapsulamiento`:** campos privados, propiedades, invariantes y contrato de clase antes de exponer jerarquías.
- Conocimiento básico de clases, constructores y métodos en C# (track POO, lección `fundamentos`).
- Capacidad para crear y ejecutar un proyecto de consola .NET (`dotnet run`).

## Contenido

### Objetivos del tema

Esta lección introduce la **herencia** como mecanismo de especialización y reutilización con sentido, y la **composición** como alternativa cuando el “es un” no es válido. El dominio técnico proviene del brief del topic-expert; no se inventan conceptos fuera de ese alcance.

<!-- interactive: Callout -->
{
  "title": "Regla de diseño",
  "children": "Heredar solo cuando la relación “es un” es clara, estable y sustituible. Si solo buscas reutilizar código, composición o interfaces suelen ser mejor opción."
}

---

### 1) Herencia: qué es y para qué sirve

**Sección TSX:** `HerenciaQueEsYSection`

#### Mapa mental

- Herencia = relación **“es un”** (is-a).
- Reutiliza comportamiento común en una clase base.
- Permite especialización en subclases.
- Se usa con cuidado: puede aumentar acoplamiento.

#### Qué es

Herencia es un mecanismo donde una **clase derivada** (hija) obtiene estado y comportamiento de una **clase base** (padre). En C# se expresa con dos puntos:

<!-- code: csharp -->
```csharp
class Carro : Vehiculo { }
```

Un `Carro` **es un** `Vehiculo`; un `Moto` **es un** `Vehiculo`. No confundir con “tiene un” (composición).

#### Para qué sirve

- **Compartir lógica común** (`Placa`, `Arrancar`) sin duplicar en cada subclase.
- **Modelar jerarquías reales** del dominio cuando el “es un” es natural y estable.
- **Habilitar polimorfismo:** tratar derivadas como base; la llamada resuelve el tipo real en tiempo de ejecución.

#### Constructor y `base(...)`

Si la clase base exige parámetros en su constructor, la derivada **debe** invocar `base(placa)` antes de añadir lógica propia. Olvidar `base(...)` provoca error de compilación si la base no tiene constructor sin parámetros.

#### `virtual` y `override`

- **`virtual` en la base:** marca un método que **puede** redefinirse en derivadas.
- **`override` en la derivada:** reemplaza la implementación respetando la firma.
- Sin `virtual` (ni `abstract`), `override` es rechazado; `new` solo oculta y no da polimorfismo real.

<!-- interactive: StepReveal -->
{
  "title": "Construcción de una derivada",
  "steps": [
    { "title": "Cliente", "content": "Se llama `new Carro(\"ABC-123\")`." },
    { "title": "Constructor derivado", "content": "Entra el constructor `Carro` y delega en `base(placa)`." },
    { "title": "Constructor base", "content": "`Vehiculo` valida la placa y asigna `Placa`." },
    { "title": "Objeto listo", "content": "La instancia es `Carro`; puede declararse como `Vehiculo` o `Carro`." }
  ]
}

#### Ejemplo C#: Vehiculo, Carro, Moto

<!-- code: csharp -->
```csharp
using System;

public class Vehiculo
{
    public string Placa { get; }

    public Vehiculo(string placa)
    {
        if (string.IsNullOrWhiteSpace(placa))
            throw new ArgumentException("Placa requerida");
        Placa = placa;
    }

    public virtual void Arrancar()
    {
        Console.WriteLine("Vehículo arrancando...");
    }
}

public class Carro : Vehiculo
{
    public Carro(string placa) : base(placa) { }

    public override void Arrancar()
    {
        Console.WriteLine("Carro arrancando (inyección + encendido)...");
    }
}

public class Moto : Vehiculo
{
    public Moto(string placa) : base(placa) { }
}
```

#### Polimorfismo con tipo base

<!-- code: csharp -->
```csharp
Vehiculo v1 = new Carro("ABC-123");
Vehiculo v2 = new Moto("XYZ-999");

v1.Arrancar(); // Carro arrancando...
v2.Arrancar(); // Vehículo arrancando... (implementación base)
```

<!-- interactive: StepReveal -->
{
  "title": "Llamada polimórfica",
  "steps": [
    { "title": "Declaración", "content": "`Vehiculo v = new Carro(\"ABC-123\");` — la variable es de tipo base." },
    { "title": "Objeto real", "content": "En memoria el objeto es un `Carro`." },
    { "title": "Dispatch", "content": "`v.Arrancar()` ejecuta `Carro.Arrancar` en runtime (override)." }
  ]
}

#### Método heredado sin override: `Parar()`

No todo método necesita `virtual`. Si el comportamiento es igual para todas las derivadas, se define una vez en la base:

<!-- code: csharp -->
```csharp
public class Vehiculo
{
    // ... constructor y Arrancar virtual ...

    public void Parar()
    {
        Console.WriteLine("Vehículo detenido.");
    }
}
// Carro y Moto heredan Parar() sin redefinir.
```

#### Lista polimórfica

<!-- code: csharp -->
```csharp
using System.Collections.Generic;

var flota = new List<Vehiculo>
{
    new Carro("ABC-123"),
    new Moto("XYZ-999"),
    new Camion("TRL-001")
};

foreach (var v in flota)
    v.Arrancar();
```

#### Caso real: flota de transporte

Un sistema modela `Vehiculo` → `Camion` → `CamionRefrigerado`. Tras añadir tipos eléctricos, `Arrancar()` en la base asume motor de combustión y `Parar()` en `Camion` libera remolque — pero `Moto` no tiene remolque. Un `foreach (var v in flota) v.Parar()` falla en motos.

**Lección:** heredar solo cuando el contrato de la base aplica a **todas** las derivadas. Si el comportamiento diverge mucho, composición o interfaces específicas evitan cascadas de `override` vacíos o excepciones.

#### Diagrama: jerarquía de vehículos

<!-- interactive: MermaidDiagram -->
{
  "chart": "classDiagram\n  Vehiculo <|-- Carro\n  Vehiculo <|-- Moto\n  Vehiculo <|-- Camion\n\n  class Vehiculo {\n    +string Placa\n    +Vehiculo(string placa)\n    +Arrancar()*\n    +Parar()\n  }\n  class Carro {\n    +Arrancar()\n  }\n  class Moto\n  class Camion {\n    +Arrancar()\n  }"
}

#### Señales de buen y mal uso

**Aplica herencia cuando:**

- La derivada puede reemplazar a la base sin romper expectativas (sustituibilidad, preview LSP).
- El “es un” es natural y estable.

**No aplica cuando:**

- Solo quieres reutilizar código (mejor composición).
- La jerarquía se vuelve rara: `PatoElectricoConBluetoothConGPS…`.
- Modificar la base rompe muchas derivadas.

<!-- interactive: Callout -->
{
  "title": "Error frecuente",
  "children": "Olvidar `base(placa)` en el constructor de la derivada cuando la base exige parámetros. También usar `override` sin `virtual`/`abstract` en la base — el compilador lo rechaza."
}

<!-- interactive: CodeChallenge -->
{
  "title": "Completa la lista polimórfica",
  "template": "var flota = new List<Vehiculo> { new Carro(\"A\"), new ___, new ___ };\nforeach (var v in flota) v.___();",
  "blanks": [
    { "id": "b1", "answer": "Moto", "hint": "Otra derivada de Vehiculo" },
    { "id": "b2", "answer": "Camion", "hint": "Tercera derivada con override" },
    { "id": "b3", "answer": "Arrancar", "hint": "Método virtual en la base" }
  ]
}

---

### 2) ¿Cuándo NO usar herencia? (composición como alternativa)

**Sección TSX:** `CuandoNoUsarHerenciaSection`

#### Mapa mental

- “Necesito reutilizar” ≠ “necesito heredar”.
- Composición = un objeto **usa** otro como parte (“tiene un”).
- Interfaz = contrato que varias clases implementan sin jerarquía rígida.

#### Qué es composición

Un objeto incorpora otro en su implementación en lugar de heredar. Ejemplo: un celular **tiene** cámara, GPS y batería; no **es** una cámara.

#### Para qué sirve

- **Menos acoplamiento** que jerarquías profundas.
- **Combinar comportamientos** de forma flexible (estrategias intercambiables).
- **Extender sin modificar** la clase cliente (principio abierto/cerrado, preview SOLID).

#### Caso real: alertas de monitoreo

Un servicio propone `AlarmaEmail : AlarmaBase`, `AlarmaSms : AlarmaBase`. Añadir WhatsApp implica nueva subclase y duplicar `Disparar()`. Refactor a `Alarma` con `INotificador` inyectado: nuevos canales = nueva implementación; `Alarma` no cambia.

#### Ejemplo C#: Alarma + INotificador

<!-- code: csharp -->
```csharp
using System;

public interface INotificador
{
    void Enviar(string mensaje);
}

public class NotificadorEmail : INotificador
{
    public void Enviar(string mensaje) =>
        Console.WriteLine($"Email: {mensaje}");
}

public class NotificadorSms : INotificador
{
    public void Enviar(string mensaje) =>
        Console.WriteLine($"SMS: {mensaje}");
}

public class Alarma
{
    private readonly INotificador _notificador;

    public Alarma(INotificador notificador)
    {
        _notificador = notificador
            ?? throw new ArgumentNullException(nameof(notificador));
    }

    public void Disparar() => _notificador.Enviar("Alerta!");
}
```

#### Extender sin modificar Alarma

<!-- code: csharp -->
```csharp
public class NotificadorWhatsApp : INotificador
{
    public void Enviar(string mensaje) =>
        Console.WriteLine($"WhatsApp: {mensaje}");
}

// Uso:
var alarma = new Alarma(new NotificadorWhatsApp());
alarma.Disparar();
```

#### Herencia vs composición

<!-- interactive: CompareTable -->
{
  "headers": ["Criterio", "Herencia (`: Base`)", "Composición (`tiene un`)"],
  "rows": [
    ["Relación", "\"Es un\"", "\"Tiene un\" / \"Usa un\""],
    ["Reutilización", "Comportamiento de la base", "Delegar en objeto interno"],
    ["Extensión", "Nuevas subclases", "Nuevas implementaciones de interfaz"],
    ["Acoplamiento", "Alto con jerarquía profunda", "Menor si dependes de abstracción"],
    ["Riesgo típico", "Romper contrato de la base", "Más clases pequeñas que coordinar"]
  ]
}

#### Diagrama: Alarma y notificadores

<!-- interactive: MermaidDiagram -->
{
  "chart": "classDiagram\n  class Alarma {\n    -INotificador _notificador\n    +Alarma(INotificador notificador)\n    +Disparar()\n  }\n  class INotificador {\n    <<interface>>\n    +Enviar(string mensaje)\n  }\n  Alarma --> INotificador : usa\n  INotificador <|.. NotificadorEmail\n  INotificador <|.. NotificadorSms\n  INotificador <|.. NotificadorWhatsApp"
}

#### Decisión de diseño

<!-- interactive: MermaidDiagram -->
{
  "chart": "flowchart TD\n  A[¿Necesito modelar tipos?] --> B{¿Relación es un clara y estable?}\n  B -->|Sí| C[Herencia + virtual/override]\n  B -->|No| D{¿Solo reutilizar comportamiento?}\n  D -->|Sí| E[Composición o interfaz]\n  D -->|No| F[Revisar modelo del dominio]\n  C --> G[Verificar sustituibilidad]"
}

#### Errores comunes a evitar

- Heredar solo para copiar código (`class ReportePdf : UtilidadesString`).
- Confundir “tiene un” con “es un” (`class Celular : Camara`).
- Jerarquías profundas: `Animal` → `Mamifero` → `Domestico` → `PerroGolden` → …
- `Cuadrado : Rectangulo` con `Ancho` y `Alto` independientes — antipatrón clásico.

<!-- interactive: PracticeExercise -->
{
  "prompt": "Explica con tus palabras la diferencia entre “es un” y “tiene un”. Da un ejemplo de dominio (biblioteca, hospital o e-commerce) para cada uno.",
  "hints": [
    "Herencia modela especialización: Carro es un Vehiculo",
    "Composición modela partes: un Pedido tiene Items",
    "Piensa si la relación es sustituible en todos los contextos"
  ],
  "expectedKeywords": ["es un", "tiene un", "herencia", "composición"],
  "successMessage": "Correcto. “Es un” → herencia cuando es estable; “tiene un” → composición o agregación."
}

---

### Resumen

- **Herencia** modela relación **“es un”**: la derivada especializa o redefine comportamiento de la base (`virtual` / `override`, `base(...)`).
- **Polimorfismo básico:** `Vehiculo v = new Carro(...)` — `v.Arrancar()` ejecuta la versión del tipo real.
- **No todo método necesita override:** comportamiento común (`Parar()`) se define una vez en la base.
- **Composición + interfaz** (`Alarma` + `INotificador`) extiende canales sin jerarquías rígidas ni editar la clase cliente.
- **Criterio principal:** sustituibilidad y “es un” válido; reutilizar código es beneficio secundario.
- **Siguiente lección:** `asociacion-agregacion-composicion` — matiza “tiene un” (asociación, agregación, composición).

---

### Comprueba tu comprensión

**Sección TSX:** `CompruebaTuComprensionSection`

Antes del cierre, verifica que puedes aplicar los conceptos de la lección.

<!-- interactive: PracticeExercise -->
{
  "prompt": "¿Por qué `Moto` puede usar `Arrancar()` de la base sin `override`, pero `Carro` define el suyo? ¿Qué decide el programador?",
  "hints": [
    "override solo cuando el comportamiento debe ser distinto",
    "Moto acepta el mensaje genérico de Vehiculo",
    "Carro necesita un mensaje específico del dominio"
  ],
  "expectedKeywords": ["override", "especializ", "comportamiento"],
  "successMessage": "Correcto. Override es opcional: se usa cuando la derivada necesita comportamiento distinto; si la implementación base sirve, se hereda tal cual."
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "Nombra dos señales de mal uso de herencia y dos de buen uso según la lección.",
  "hints": [
    "Mal: heredar solo para copiar código",
    "Mal: jerarquías profundas o romper expectativas",
    "Bien: relación es un estable",
    "Bien: sustituibilidad sin romper contratos"
  ],
  "expectedKeywords": ["composición", "es un", "acoplamiento", "sustituibilidad"],
  "successMessage": "Correcto. Buen uso = es un claro y sustituible; mal uso = copiar código, jerarquías forzadas o contratos rotos."
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "Ordena mentalmente el flujo al construir `new Carro(\"ABC-123\")`: (a) constructor Carro, (b) `base(\"ABC-123\")`, (c) asignación de Placa en Vehiculo, (d) objeto listo. ¿Cuál es el orden correcto?",
  "hints": [
    "Primero entra el constructor de la derivada",
    "base delega al constructor de la base",
    "La base valida y asigna antes de terminar la derivada"
  ],
  "expectedKeywords": ["base", "constructor", "placa"],
  "successMessage": "Correcto. Orden: (a) → (b) → (c) → (d). El constructor de Carro delega en base; Vehiculo fija Placa; luego el objeto está listo."
}

---

## Reto integrador

**Sección TSX:** `RetoIntegradorSection`

**“Sistema de flota y alertas”**

Un taller de POO pide un prototipo en consola (.NET) que combine herencia bien aplicada y composición donde corresponda.

**Parte A — Dominio vehículos**

1. Clase base `Vehiculo` con `Placa`, constructor validado, `virtual void Arrancar()` y `void Parar()`.
2. Derivadas `Carro`, `Moto` y `Camion` con `override` de `Arrancar()` (mensajes distintos y creíbles).
3. Método que reciba `List<Vehiculo>` y ejecute `Arrancar()` y luego `Parar()` en cada elemento.

**Parte B — Alertas (sin herencia entre canales)**

4. Interfaz `INotificador` con `Enviar(string)`.
5. Implementaciones `NotificadorEmail`, `NotificadorSms`, `NotificadorWhatsApp`.
6. Clase `Alarma` con constructor que recibe `INotificador` y método `Disparar()`.
7. En `Main`, crea al menos dos alarmas con notificadores distintos y dispara ambas.

**Parte C — Criterio de diseño**

8. En un comentario o párrafo breve, justifica por qué **no** hiciste `AlarmaEmail : AlarmaBase` y por qué `Camion` **sí** hereda de `Vehiculo`.

**Criterio de éxito:** compila en `dotnet run`; cada vehículo imprime su `Arrancar()`; `Parar()` funciona sin override; nuevos notificadores se añaden sin editar `Alarma`; la justificación distingue “es un” vs “tiene un”.

<!-- interactive: PracticeExercise -->
{
  "prompt": "Redacta la justificación de diseño (Parte C): ¿por qué Camion hereda de Vehiculo pero los canales de alerta no heredan de AlarmaBase?",
  "hints": [
    "Camion es un Vehiculo — relación es un estable",
    "Email/SMS/WhatsApp no son tipos de Alarma — son estrategias de envío",
    "INotificador permite extender sin modificar Alarma"
  ],
  "expectedKeywords": ["es un", "tiene un", "composición", "interfaz"],
  "successMessage": "Excelente. Has distinguido herencia (especialización) de composición (estrategia intercambiable)."
}

---

## Cierre

**Sección TSX:** `CierreSection`

Has completado el estudio de herencia y su alternativa por composición en C#. Estos conceptos son la base para polimorfismo avanzado, clases abstractas e interfaces en lecciones posteriores del track POO.

**Ideas clave para retener:**

- **Herencia** = “es un” + `virtual`/`override` + `base(...)`; polimorfismo resuelve el tipo real en runtime.
- **Composición** = “tiene un”; intercambiar implementaciones sin jerarquías profundas.
- **Criterio de decisión:** sustituibilidad y estabilidad del dominio, no solo evitar duplicar líneas de código.
- **Antipatrón:** heredar para copiar utilidades o forzar relaciones que no son “es un”.

**Siguiente paso:** lección `asociacion-agregacion-composicion` — matiza las relaciones “tiene un” (asociación, agregación, composición).

---

## Miniquiz

**Sección TSX:** `MiniquizFinalSection`

<!-- interactive: Quiz -->
{
  "questions": [
    {
      "question": "¿Herencia representa mejor qué tipo de relación?",
      "options": [
        "\"Tiene un\"",
        "\"Es un\"",
        "\"Usa temporalmente\"",
        "\"Es igual a\""
      ],
      "correctIndex": 1,
      "feedback": "Herencia modela especialización: un Carro es un Vehiculo. \"Tiene un\" corresponde a composición."
    },
    {
      "question": "En C#, ¿qué combinación permite polimorfismo con redefinición de método?",
      "options": [
        "Método normal en base + override en hija",
        "virtual en base + override en hija",
        "override en base + virtual en hija",
        "Solo new en hija"
      ],
      "correctIndex": 1,
      "feedback": "La base debe marcar el método como virtual (o abstract); la derivada usa override. new oculta pero no polimorfiza igual."
    },
    {
      "question": "V/F: La herencia se usa solo para evitar duplicar código.",
      "options": [
        "Verdadero",
        "Falso"
      ],
      "correctIndex": 1,
      "feedback": "Reutilizar código es un beneficio secundario; el criterio principal es una relación \"es un\" válida y sustituibilidad. Si solo copias código, composición suele ser mejor."
    },
    {
      "question": "\"Un celular tiene cámara, GPS y batería.\" ¿Qué patrón encaja mejor?",
      "options": [
        "Herencia múltiple de Camara, Gps, Bateria",
        "Composición / agregación",
        "class Camara : Celular",
        "Solo namespaces"
      ],
      "correctIndex": 1,
      "feedback": "El celular no es una cámara; la incorpora. En C# se modela con campos o interfaces y composición."
    },
    {
      "question": "Dado `Vehiculo v = new Carro(\"X\"); v.Arrancar();` con Arrancar virtual/override, ¿qué ocurre?",
      "options": [
        "Siempre se ejecuta Vehiculo.Arrancar",
        "Se ejecuta Carro.Arrancar (tipo real del objeto)",
        "Error de compilación",
        "Se ejecutan ambos en orden"
      ],
      "correctIndex": 1,
      "feedback": "La variable es de tipo base pero el objeto es Carro; el dispatch en runtime llama al override correcto (polimorfismo)."
    }
  ]
}
