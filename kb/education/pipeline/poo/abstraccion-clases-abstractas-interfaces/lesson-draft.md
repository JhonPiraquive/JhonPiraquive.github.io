---
track: poo
slug: abstraccion-clases-abstractas-interfaces
title: "Abstracción, Clases abstractas e Interfaces"
order: 5
prerequisites:
  - asociacion-agregacion-composicion
related:
  - polimorfismo
source_brief: kb/education/pipeline/poo/abstraccion-clases-abstractas-interfaces/brief.md
source_legacy: kb/education/sources/clases/poo/05-abstraccion-clases-abstractas-interfaces.md
topic_expert: topic-expert-oop-csharp
---

## Objetivos de aprendizaje

Al finalizar la lección, el estudiante podrá:

- **Explicar** abstracción como ocultamiento de detalle y programación contra contratos en C#.
- **Implementar** una interfaz con al menos dos implementaciones y un cliente que dependa solo del contrato (`Caja` + `IPago`).
- **Diseñar** una clase abstracta con flujo común y método `abstract` obligatorio en derivadas (`Notificacion` / `EnviarCore`).
- **Comparar** criterios de elección entre clase abstracta e interfaz según estado compartido, multi-rol y extensión.
- **Detectar** abstracción prematura e interfaces sobredimensionadas en un diseño dado.

## Prerrequisitos

- **Lección `asociacion-agregacion-composicion`:** composición e inyección de dependencias (`Alarma` + `INotificador` en herencia).
- **Lección `herencia`:** `virtual`/`override`, relación “es un”.
- **Lección `encapsulamiento`:** constructores con validación, campos readonly.

## Contenido

### Objetivos del tema

**Sección TSX:** `ObjetivosDelTemaSection`

Esta lección introduce la **abstracción** como programación contra contratos: interfaces y clases abstractas. El dominio técnico proviene del brief del topic-expert.

<!-- interactive: Callout -->
{
  "title": "Abstraer con variación real",
  "children": "Introduce abstracciones cuando hay variaciones reales de implementación y el cliente debe permanecer estable. Interfaces o abstractas “por si acaso” añaden complejidad sin beneficio."
}

---

### 1) Abstracción: contrato y desacoplamiento

**Sección TSX:** `AbstraccionSection`

#### Mapa mental

- Abstracción = enfocarse en lo **esencial** y ocultar detalles accidentales.
- Contrato = define **qué** se puede hacer, no **cómo**.
- El cliente depende del contrato, no de la implementación concreta.

#### Qué es

**Abstracción** en POO significa programar contra un **contrato** (interfaz o clase base) en vez de una clase concreta. El consumidor no conoce si el pago es tarjeta o transferencia; solo llama `Pagar(monto)`.

#### Señales de buena abstracción

- Hay **al menos dos** implementaciones reales o previstas.
- El cliente (`Caja`, `Checkout`) no debe cambiar al añadir variantes.
- Se reduce acoplamiento: nuevas clases en lugar de editar `if`/`switch`.

#### Señales de abstracción prematura

- Crear `IPersona`, `IPersonaRepository` sin segunda implementación.
- Interfaces gigantes que nadie implementa completa.

#### Ejemplo C#: IPago y Caja

<!-- code: csharp -->
```csharp
using System;

public interface IPago
{
    void Pagar(decimal monto);
}

public class PagoTarjeta : IPago
{
    public void Pagar(decimal monto) => Console.WriteLine($"Pagando {monto} con tarjeta");
}

public class PagoTransferencia : IPago
{
    public void Pagar(decimal monto) => Console.WriteLine($"Pagando {monto} por transferencia");
}

public class Caja
{
    private readonly IPago _pago;

    public Caja(IPago pago) => _pago = pago ?? throw new ArgumentNullException(nameof(pago));

    public void Cobrar(decimal monto) => _pago.Pagar(monto);
}
```

#### Extender sin tocar Caja

<!-- interactive: StepReveal -->
{
  "title": "Nuevo método de pago",
  "steps": [
    { "title": "Cliente inicial", "content": "`new Caja(new PagoTarjeta())` — `Caja` solo conoce `IPago`." },
    { "title": "Nueva implementación", "content": "Creas `PagoTransferencia : IPago` sin editar `Caja`." },
    { "title": "Mismo Cobrar", "content": "`caja.Cobrar(100)` delega en la implementación inyectada." },
    { "title": "Salida distinta", "content": "Cada `IPago` imprime su propio mensaje; el cliente no cambió." }
  ]
}

#### Caso real: pasarela de pagos

Un checkout con `if (tipo == "tarjeta") ... else if (tipo == "transferencia")` obligaba a editar varios servicios por cada método nuevo. Bug en producción mezcló lógica de Nequi con tarjeta.

**Decisión:** `IPago` con implementaciones por proveedor; `Caja` solo llama `Pagar(monto)`.

#### Diagrama: Caja depende de IPago

<!-- interactive: MermaidDiagram -->
{
  "chart": "classDiagram\n  class IPago {\n    <<interface>>\n    +Pagar(decimal monto)\n  }\n  class Caja {\n    -IPago _pago\n    +Cobrar(decimal monto)\n  }\n  Caja --> IPago : depende_de\n  IPago <|.. PagoTarjeta\n  IPago <|.. PagoTransferencia"
}

#### Errores comunes

- El dominio `Caja` hace `new PagoTarjeta()` internamente en lugar de recibir `IPago`.
- Abstraer “por si acaso” sin variación real.

<!-- interactive: CodeChallenge -->
{
  "title": "Completa la inyección",
  "template": "public Caja(___ pago) => _pago = pago ?? throw new ArgumentNullException(nameof(pago));",
  "blanks": [
    { "id": "b1", "answer": "IPago", "hint": "Tipo del contrato que recibe el constructor" }
  ]
}

---

### 2) Clases abstractas

**Sección TSX:** `ClasesAbstractasSection`

#### Mapa mental

- Clase abstracta = no se instancia con `new`; puede tener estado y código común.
- Métodos `abstract` obligan implementación en derivadas.
- Template Method: flujo común en la base, paso variable en derivada.

#### Qué es

Una **clase abstracta** (`abstract class`) combina contrato parcial con **implementación compartida**. Puede tener campos, constructores, métodos con cuerpo y métodos `abstract` sin cuerpo que las derivadas deben implementar.

#### Señales de clase abstracta

- Varias derivadas comparten **validación**, **logging** o **flujo** idéntico.
- Necesitas **estado común** (`Destino` en notificaciones).
- Un método público no sobrescribible orquesta pasos (`Enviar` → `EnviarCore`).

#### Ejemplo C#: Notificacion (Template Method)

<!-- code: csharp -->
```csharp
using System;

public abstract class Notificacion
{
    public string Destino { get; }

    protected Notificacion(string destino)
    {
        if (string.IsNullOrWhiteSpace(destino)) throw new ArgumentException("Destino requerido");
        Destino = destino;
    }

    public void Enviar(string mensaje)
    {
        if (string.IsNullOrWhiteSpace(mensaje)) throw new ArgumentException("Mensaje requerido");
        Console.WriteLine($"Preparando notificación para {Destino}...");
        EnviarCore(mensaje);
        Console.WriteLine("Notificación enviada.");
    }

    protected abstract void EnviarCore(string mensaje);
}

public class NotificacionEmail : Notificacion
{
    public NotificacionEmail(string destino) : base(destino) { }

    protected override void EnviarCore(string mensaje) =>
        Console.WriteLine($"Email a {Destino}: {mensaje}");
}

public class NotificacionSms : Notificacion
{
    public NotificacionSms(string destino) : base(destino) { }

    protected override void EnviarCore(string mensaje) =>
        Console.WriteLine($"SMS a {Destino}: {mensaje}");
}
```

#### `abstract` vs `virtual`

- **`abstract`:** obliga implementación en derivada; sin cuerpo en la base.
- **`virtual`:** ofrece implementación por defecto sobrescribible.
- **`new Notificacion("x")`** no compila — las abstractas no se instancian directamente.

#### Caso real: notificaciones

Con solo interfaz `INotificacion`, cada canal duplicaba validación de mensaje y formato de log. Con clase abstracta, `Enviar` centraliza reglas; canales solo implementan `EnviarCore`.

#### Diagrama: jerarquía Notificacion

<!-- interactive: MermaidDiagram -->
{
  "chart": "classDiagram\n  Notificacion <|-- NotificacionEmail\n  Notificacion <|-- NotificacionSms\n  class Notificacion {\n    <<abstract>>\n    +string Destino\n    +Enviar(string mensaje)\n    #EnviarCore(string mensaje)*\n  }"
}

#### Errores comunes

- Clase abstracta vacía solo para prohibir `new` cuando una interfaz bastaría.
- Cada derivada repite validación que debería vivir en la base.

<!-- interactive: PracticeExercise -->
{
  "prompt": "¿Por qué `Enviar` no es abstracto pero `EnviarCore` sí? ¿Qué patrón de diseño preview introduce esto?",
  "hints": [
    "Enviar tiene flujo común idéntico para todos los canales",
    "EnviarCore varía según Email o Sms",
    "Template Method: algoritmo común con paso variable"
  ],
  "expectedKeywords": ["Template", "común", "abstract", "EnviarCore"],
  "successMessage": "Correcto. La base define el esqueleto; la derivada solo implementa el paso que cambia."
}

---

### 3) Interfaces

**Sección TSX:** `InterfacesSection`

#### Mapa mental

- Interfaz = contrato de **capacidad** (“qué puede hacer”).
- Una clase puede implementar **varias** interfaces.
- Inyección por constructor desacopla implementación de uso.

#### Qué es

Una **interfaz** (`interface`) declara miembros sin implementación (en el contrato). Define una capacidad intercambiable: `ILogger`, `IPago`, `INotificador`. El cliente recibe la abstracción en el constructor.

#### Señales de interfaz

- Solo necesitas un **contrato** sin estado compartido en la base.
- Un tipo puede cumplir **múltiples roles** (`Contrato : Documento, IFirmable`).
- Varias implementaciones intercambiables (consola, archivo, silencioso).

#### Ejemplo C#: ILogger y Servicio

<!-- code: csharp -->
```csharp
using System;

public interface ILogger
{
    void Info(string mensaje);
}

public class LoggerConsola : ILogger
{
    public void Info(string mensaje) => Console.WriteLine($"INFO: {mensaje}");
}

public class LoggerSilencioso : ILogger
{
    public void Info(string mensaje) { /* sin salida — útil en tests */ }
}

public class LoggerArchivo : ILogger
{
    public void Info(string mensaje) => Console.WriteLine($"[archivo] {mensaje}");
}

public class Servicio
{
    private readonly ILogger _logger;

    public Servicio(ILogger logger) => _logger = logger;

    public void Ejecutar() => _logger.Info("Ejecutando...");
}
```

#### Intercambiar logger sin editar Servicio

<!-- code: csharp -->
var servicio1 = new Servicio(new LoggerConsola());
var servicio2 = new Servicio(new LoggerSilencioso());
servicio1.Ejecutar(); // INFO: Ejecutando...
servicio2.Ejecutar(); // sin salida
```

#### Segregación (preview SOLID)

Interfaces gigantes (`IManagerDeTodo`) obligan a implementar métodos no usados. Preferir contratos pequeños y focalizados.

#### Errores comunes

- Interfaces como marcadores sin métodos útiles.
- Cliente que instancia concretos dentro del dominio en lugar de recibir el contrato.

<!-- interactive: CodeChallenge -->
{
  "title": "Implementa la interfaz",
  "template": "public class LoggerConsola : ___\n{\n    public void Info(string mensaje) => Console.WriteLine($\"INFO: {mensaje}\");\n}",
  "blanks": [
    { "id": "b1", "answer": "ILogger", "hint": "Contrato que declara Info(string)" }
  ]
}

---

### 4) Clase abstracta vs interfaz

**Sección TSX:** `AbstractaVsInterfazSection`

#### Mapa mental

- Abstracta cuando hay **código y estado compartidos**.
- Interfaz cuando solo necesitas **contrato** y posible multi-rol.
- Un tipo puede combinar ambos.

#### Tabla comparativa

<!-- interactive: CompareTable -->
{
  "headers": ["Criterio", "Clase abstracta", "Interfaz"],
  "rows": [
    ["Instanciable con new", "No", "No (la interfaz sola)"],
    ["Estado / campos compartidos", "Sí", "No"],
    ["Código común en base", "Sí", "No (solo contrato)"],
    ["Múltiples roles por clase", "Una base", "Varias interfaces"],
    ["Caso típico", "Template Method", "Capacidad intercambiable"]
  ]
}

#### Ejemplo combinado: Documento + IFirmable

<!-- code: csharp -->
```csharp
public interface IFirmable
{
    void Firmar();
}

public abstract class Documento
{
    public abstract void Validar();
    public void Archivar() => Console.WriteLine("Archivado.");
}

public class Contrato : Documento, IFirmable
{
    public override void Validar() => Console.WriteLine("Contrato válido.");
    public void Firmar() => Console.WriteLine("Firmado.");
}
```

#### Diagrama: Documento abstracto + IFirmable

<!-- interactive: MermaidDiagram -->
{
  "chart": "classDiagram\n  class IFirmable {\n    <<interface>>\n    +Firmar()\n  }\n  class Documento {\n    <<abstract>>\n    +Validar()*\n    +Archivar()\n  }\n  Documento <|-- Contrato\n  IFirmable <|.. Contrato"
}

#### Criterio de decisión rápida

| Escenario | Elección |
|-----------|----------|
| Pagos intercambiables sin estado compartido | Interfaz `IPago` |
| Notificaciones con validación común | Clase abstracta `Notificacion` |
| Documento con validación variable + capacidad de firmar | Abstracta + interfaz |

<!-- interactive: Callout -->
{
  "title": "Error frecuente",
  "children": "Duplicar el mismo contrato en interfaz y clase abstracta sin criterio. Elige según si necesitas estado/código compartido (abstracta) o solo capacidad intercambiable (interfaz)."
}

---

### Resumen

**Sección TSX:** `ResumenSection`

- **Abstracción:** programar contra contratos; ocultar detalles de implementación.
- **Interfaz:** capacidad intercambiable; inyección por constructor (`Caja` + `IPago`, `Servicio` + `ILogger`).
- **Clase abstracta:** estado y flujo común; métodos `abstract` obligatorios (`Notificacion` / `EnviarCore`).
- **Elección:** abstracta con Template Method; interfaz para contrato puro y multi-rol.
- **Evitar:** abstracción prematura e interfaces sobredimensionadas.
- **Siguiente lección:** `polimorfismo` — misma llamada, distinto comportamiento en runtime.

---

### Comprueba tu comprensión

**Sección TSX:** `CompruebaTuComprensionSection`

Antes del cierre, verifica que puedes aplicar los conceptos de la lección.

<!-- interactive: PracticeExercise -->
{
  "prompt": "Implementa `PagoTransferencia : IPago` y verifica que `Caja` no se editó al usarla en `Main`. ¿Qué principio de diseño demuestra esto?",
  "hints": [
    "PagoTransferencia implementa void Pagar(decimal monto)",
    "Caja solo conoce IPago en su constructor",
    "El cliente permanece estable al añadir variantes"
  ],
  "expectedKeywords": ["IPago", "Caja", "desacoplamiento"],
  "successMessage": "Correcto. Nueva implementación sin modificar el cliente — abstracción bien aplicada."
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "Crea `NotificacionSms` con validación mínima de destino (debe empezar con `+`) y úsala en `Main`. ¿Dónde conviene poner la validación de destino: base o derivada?",
  "hints": [
    "Si todos los canales exigen el mismo formato, la base es mejor",
    "Sms con prefijo + es regla específica del canal",
    "Constructor de NotificacionSms puede validar antes de base(destino)"
  ],
  "expectedKeywords": ["NotificacionSms", "destino", "validación"],
  "successMessage": "Correcto. Reglas comunes en la base; reglas específicas del canal en la derivada."
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "Para `Reporte`, `Factura` y `Contrato`: indica si usarías clase abstracta, interfaz o ambas; justifica en 3 bullets por tipo.",
  "hints": [
    "¿Comparten flujo o validación común?",
    "¿Necesitan capacidades cruzadas como Firmar?",
    "¿Hay variación real de implementación?"
  ],
  "expectedKeywords": ["abstracta", "interfaz", "contrato"],
  "successMessage": "Correcto. La elección depende de estado compartido, Template Method y multi-rol."
}

---

## Reto integrador

**Sección TSX:** `RetoIntegradorSection`

**“Caja registradora y alertas de sistema”**

Prototipo .NET que combine interfaces y clase abstracta sin mezclar responsabilidades.

**Parte A — Pagos (interfaz)**

1. `IPago` con `Pagar(decimal monto)`.
2. Implementaciones `PagoTarjeta`, `PagoTransferencia`, `PagoEfectivo`.
3. `Caja` con constructor que recibe `IPago`; en `Main`, tres cajas con métodos distintos cobrando el mismo monto.

**Parte B — Notificaciones (clase abstracta)**

4. `abstract class Notificacion` con `Enviar` (flujo común) y `EnviarCore` abstracto.
5. `NotificacionEmail` y `NotificacionSms`; al menos una validación en la base (mensaje no vacío).

**Parte C — Logging (interfaz auxiliar)**

6. `ILogger` con `Info(string)`; `Servicio` que recibe `ILogger` en constructor.
7. `LoggerConsola` y `LoggerSilencioso`; demostrar `Servicio` sin cambios al intercambiar logger.

**Parte D — Criterio de diseño**

8. Comentario breve: por qué pagos usan **interfaz** y notificaciones usan **clase abstracta** en este diseño.

**Criterio de éxito:** compila; nuevos pagos y loggers sin editar `Caja` ni `Servicio`; flujo común de notificación no duplicado en derivadas; justificación coherente con la lección.

<!-- interactive: PracticeExercise -->
{
  "prompt": "Redacta la justificación (Parte D): ¿por qué pagos usan interfaz y notificaciones usan clase abstracta?",
  "hints": [
    "Pagos no comparten estado ni flujo común en la base",
    "Notificaciones comparten validación y secuencia Enviar",
    "IPago es contrato puro; Notificacion es Template Method"
  ],
  "expectedKeywords": ["interfaz", "abstracta", "Template", "contrato"],
  "successMessage": "Excelente. Has aplicado el criterio estado compartido vs contrato puro."
}

---

## Cierre

**Sección TSX:** `CierreSection`

Has completado el estudio de abstracción, clases abstractas e interfaces en C#. Estos mecanismos permiten diseñar sistemas extensibles y desacoplados.

**Ideas clave para retener:**

- **Abstracción** = contrato + ocultamiento; no es “más complejidad por defecto”.
- **Interfaz** para capacidades intercambiables; **abstracta** para flujo y estado compartidos.
- **Inyección por constructor** conecta implementaciones con clientes sin acoplamiento.
- **Abstracción prematura** y interfaces gigantes son anti-patrones frecuentes.

**Siguiente paso:** lección `polimorfismo` — una misma llamada, distintos comportamientos según el tipo real del objeto.

---

## Miniquiz

**Sección TSX:** `MiniquizFinalSection`

<!-- interactive: Quiz -->
{
  "questions": [
    {
      "question": "V/F: Abstraer significa agregar más detalles de implementación al cliente.",
      "options": ["Verdadero", "Falso"],
      "correctIndex": 1,
      "feedback": "Abstraer oculta detalles y expone lo esencial; el cliente opera sobre el contrato."
    },
    {
      "question": "¿Qué es un buen motivo para introducir una abstracción?",
      "options": [
        "\"Por si acaso\" sin segunda implementación",
        "Hay variaciones reales de implementación",
        "Evitar nombres de clase largos",
        "Reemplazar encapsulamiento"
      ],
      "correctIndex": 1,
      "feedback": "Sin variación real, la abstracción suele ser prematura."
    },
    {
      "question": "¿Qué keyword obliga a las derivadas a implementar un método sin cuerpo en la base?",
      "options": ["virtual", "abstract", "override", "sealed"],
      "correctIndex": 1,
      "feedback": "abstract en la base fuerza implementación; virtual ofrece implementación por defecto."
    },
    {
      "question": "V/F: Puedes crear `new Notificacion(\"x\")` si `Notificacion` es una clase abstracta.",
      "options": ["Verdadero", "Falso"],
      "correctIndex": 1,
      "feedback": "Las clases abstractas no se instancian directamente; usas derivadas concretas."
    },
    {
      "question": "¿Cuándo conviene preferir interfaz sobre clase abstracta?",
      "options": [
        "Necesitas compartir mucho estado y código en la base",
        "Solo necesitas un contrato de capacidad y posible multi-rol",
        "Nunca; siempre abstracta",
        "Cuando no hay métodos"
      ],
      "correctIndex": 1,
      "feedback": "Interfaz para contrato puro; abstracta cuando hay implementación y estado compartidos."
    }
  ]
}

---

## SEO (sugerencias)

- **seoTitle:** Abstracción, clases abstractas e interfaces en C# | POO
- **seoDescription:** Aprende abstracción en C# con interfaces (IPago, ILogger), clases abstractas (Template Method) y criterios para elegir entre contrato puro y código compartido.
