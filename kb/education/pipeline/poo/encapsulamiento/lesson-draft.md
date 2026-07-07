---
track: poo
slug: encapsulamiento
title: "Encapsulamiento"
order: 2
prerequisites:
  - fundamentos
related:
  - herencia
source_brief: kb/education/pipeline/poo/encapsulamiento/brief.md
source_legacy: kb/education/sources/clases/poo/02-encapsulamiento.md
topic_expert: topic-expert-oop-csharp
---

## Objetivos de aprendizaje

Al finalizar la lección, el estudiante podrá:

- **Explicar** el encapsulamiento como control de acceso al estado interno y **distinguir** estado interno de interfaz pública en objetos de dominio.
- **Aplicar** modificadores de acceso en C# (`public`, `private`, `protected`, `internal`) y el patrón `{ get; private set; }` para proteger propiedades.
- **Implementar** métodos de dominio (`Depositar`, `Retirar`, `CancelarReserva`) que validan antes de mutar el estado.
- **Definir** invariantes (`Saldo >= 0`, `Fin > Inicio`, `Cantidad >= 0`) y **validarlas** en constructor y métodos mutadores.
- **Contrastar** DTO vs objeto de dominio y **reconocer** señales de buen y mal encapsulamiento en código C#.
- **Refactorizar** código con setters públicos hacia un diseño que centralice reglas en el objeto.

## Prerrequisitos

- **Lección `fundamentos`:** clase, objeto, constructor, campos y estado interno.
- Conocimiento básico de C#: tipos (`decimal`, `int`, `DateTime`), `throw`, excepciones (`ArgumentException`, `InvalidOperationException`).
- Capacidad para compilar y ejecutar un `Main` con instancias de clases propias.

## Contenido

### 1) Encapsulamiento: qué es y para qué sirve

**Mapa mental:**

- Ocultar detalles internos.
- Exponer una forma segura de usar el objeto.
- Proteger invariantes (reglas que siempre deben cumplirse).
- Reducir acoplamiento: cambias por dentro sin romper a los demás.

**Qué es**

Encapsulamiento es el principio de **controlar el acceso** al estado interno de un objeto. Ocultas detalles de implementación y expones solo lo necesario mediante métodos y propiedades públicas. La idea central: **nadie debería poder poner al objeto en un estado inválido** desde afuera.

**Estado interno vs interfaz pública:** el estado vive en campos/propiedades (idealmente no mutables desde fuera); la interfaz pública son operaciones con nombres del dominio (`Depositar`, `Retirar`, `CancelarReserva`) que validan antes de cambiar el estado.

**Para qué sirve**

- Evitar estados imposibles (ej. saldo negativo sin permitir sobregiro).
- Centralizar reglas (validación en un solo lugar).
- Permitir cambios internos sin cambiar el “contrato” público.

**Modificadores de acceso en C#**

| Modificador | Visibilidad típica |
|-------------|-------------------|
| `public` | Cualquier código con referencia al tipo |
| `private` | Solo la misma clase (default implícito en miembros de clase) |
| `protected` | La clase y sus derivadas (preview para lección herencia) |
| `internal` | Dentro del mismo ensamblado (proyecto) |

Patrón frecuente: `public decimal Saldo { get; private set; }` — cualquiera puede **leer**, solo la clase puede **modificar** (vía constructor o métodos internos).

<!-- interactive: CompareTable -->
{
  "headers": ["Aspecto", "Saldo { get; set; }", "Saldo { get; private set; } + Retirar/Depositar"],
  "rows": [
    ["Quién puede cambiar saldo", "Cualquier código", "Solo la clase"],
    ["Validación", "Dispersa o inexistente", "Centralizada"],
    ["Estado inválido posible", "Sí (Saldo = -999)", "No (excepción al retirar)"],
    ["Cambio interno de implementación", "Rompe si alguien asignó directo", "Clientes usan métodos estables"]
  ]
}

**Señales de buen/mal uso**

- **Aplica cuando:** hay reglas sobre cómo cambia el estado (casi siempre en dominio).
- **No aplica cuando:** el objeto es un DTO (solo transporte de datos) y no hay reglas.
- **Buen uso:** `private set`, métodos con nombres del dominio, validación cerca del dato, excepciones claras.
- **Mal uso:** setters públicos para todo, validación repetida en cada capa, campos `public` mutables.

<!-- interactive: Callout -->
{
  "title": "Error frecuente — setter público en todo",
  "children": "public decimal Saldo { get; set; } permite cuenta.Saldo = -999 desde cualquier parte. La regla de saldo no negativo debe vivir en el objeto, no solo en la UI o el controlador."
}

**Ejemplo vida real**

Un cajero automático: tú no cambias el saldo “a mano”. Solo puedes pedir operaciones permitidas (retirar, consultar), y el sistema valida.

**Caso real — incidente bancario**

Un equipo expone `public decimal Saldo { get; set; }` en `CuentaBancaria` para “facilitar tests”. Un módulo de migración ejecuta `cuenta.Saldo = cuenta.Saldo - ajuste` sin validar fondos. En producción aparecen cuentas con saldo `-847.50`. **Decisión:** cambiar a `{ get; private set; }`, forzar `Depositar`/`Retirar` con validación.

**Ejemplo C# — encapsulamiento básico**

<!-- code: csharp -->
```csharp
using System;

public class CuentaBancaria
{
    public decimal Saldo { get; private set; }

    public CuentaBancaria(decimal saldoInicial)
    {
        if (saldoInicial < 0)
            throw new ArgumentException("Saldo inicial inválido");
        Saldo = saldoInicial;
    }

    public void Depositar(decimal monto)
    {
        if (monto <= 0)
            throw new ArgumentException("Monto inválido");
        Saldo += monto;
    }

    public void Retirar(decimal monto)
    {
        if (monto <= 0)
            throw new ArgumentException("Monto inválido");
        if (monto > Saldo)
            throw new InvalidOperationException("Fondos insuficientes");
        Saldo -= monto;
    }
}

public class Program
{
    public static void Main()
    {
        var cuenta = new CuentaBancaria(100);
        cuenta.Retirar(30);
        Console.WriteLine(cuenta.Saldo); // 70
        // cuenta.Saldo = -100; // Error de compilación: set es private
    }
}
```

**Anti-ejemplo — setter público rompe invariante**

<!-- code: csharp -->
```csharp
public class CuentaInsegura
{
    public decimal Saldo { get; set; } // cualquiera puede asignar
}

// Uso problemático:
var c = new CuentaInsegura { Saldo = -999 };
```

**Modificadores de acceso — visibilidad típica**

<!-- code: csharp -->
```csharp
public class EjemploAcceso
{
    private string _datoInterno;           // solo esta clase
    protected int contadorHijos;           // esta clase + derivadas
    internal Guid idSesion;                // mismo proyecto
    public string Nombre { get; private set; } // lectura pública, escritura interna
}
```

<!-- interactive: MermaidDiagram -->
{
  "chart": "classDiagram\n  class CuentaBancaria {\n    +decimal Saldo\n    +CuentaBancaria(decimal saldoInicial)\n    +Depositar(decimal monto)\n    +Retirar(decimal monto)\n  }"
}

<!-- interactive: StepReveal -->
{
  "title": "Ciclo de una operación encapsulada (Retirar)",
  "steps": [
    {
      "title": "1. Cliente llama cuenta.Retirar(30)",
      "content": "El código externo no toca Saldo directamente; usa el método público del dominio."
    },
    {
      "title": "2. Validar monto > 0",
      "content": "Si monto <= 0, lanza ArgumentException con mensaje claro."
    },
    {
      "title": "3. Comprobar invariante monto <= Saldo",
      "content": "Si no hay fondos, lanza InvalidOperationException — el objeto rechaza el estado inválido."
    },
    {
      "title": "4. Actualizar Saldo internamente",
      "content": "Solo la clase asigna a Saldo gracias a private set."
    },
    {
      "title": "5. Cliente lee el nuevo saldo vía get",
      "content": "Lectura pública permitida; escritura externa bloqueada en compilación."
    }
  ]
}

<!-- interactive: MermaidDiagram -->
{
  "chart": "flowchart LR\n  subgraph cliente [Codigo cliente]\n    C[Llama Depositar / Retirar]\n    R[Lee Saldo get]\n  end\n  subgraph objeto [CuentaBancaria]\n    M[Metodos publicos con validacion]\n    S[Saldo private set]\n  end\n  C --> M\n  M --> S\n  R -.->|solo lectura| S\n  X[Asignacion directa Saldo = x] -.->|bloqueado| S"
}

**Propiedad con campo privado y validación**

Cuando `set` requiere validación o transformación, usa un campo privado (`_cantidad`) y controla el acceso en la propiedad:

<!-- code: csharp -->
```csharp
public class Producto
{
    private int _cantidad;

    public int Cantidad
    {
        get => _cantidad;
        private set
        {
            if (value < 0)
                throw new ArgumentOutOfRangeException(nameof(value), "Cantidad no puede ser negativa");
            _cantidad = value;
        }
    }

    public void AjustarStock(int delta)
    {
        Cantidad += delta; // usa el setter privado vía método público
    }
}
```

<!-- interactive: PracticeExercise -->
{
  "prompt": "Explica con tus palabras por qué un cajero automático es analogía de encapsulamiento. ¿Qué operaciones expone y qué oculta?",
  "hints": ["Piensa en retirar vs cambiar saldo a mano", "¿Quién valida fondos?"],
  "expectedKeywords": ["operaciones", "oculta", "valida", "saldo"],
  "successMessage": "Correcto. El cajero expone operaciones del dominio (retirar, consultar) y oculta cómo se almacena y actualiza el saldo internamente."
}

---

### 2) Invariantes (reglas que el objeto protege)

**Mapa mental**

- Invariante = regla que siempre debe cumplirse.
- Se valida en el punto donde el estado cambia.

**Qué es**

Una **invariante** es una condición que debe ser verdadera para que el objeto esté “bien”. Ejemplos:

- `Saldo >= 0`
- `Cantidad >= 0`
- `Fin > Inicio` en una reserva
- Estado sigue un flujo válido (no saltos ilegales)

**Para qué sirve**

- Evitar bugs por estados inválidos.
- Hacer el dominio más confiable.
- Convertir bugs silenciosos en excepciones localizadas al punto de mutación.

**Señales de buen/mal uso**

- **Bien:** invariantes se aplican en constructor y métodos mutadores.
- **Mal:** invariantes solo documentadas en comentarios (“no poner saldo negativo”) sin código.
- **Mal:** validar solo en la UI o en el controlador — si otro servicio muta el objeto, el bug reaparece.

<!-- interactive: Callout -->
{
  "title": "Error frecuente — olvidar validar en el constructor",
  "children": "Un objeto puede nacer inválido: new CuentaBancaria(-100) si no validas al crear. El constructor es el primer punto de defensa de las invariantes."
}

**Ejemplo vida real**

Una reserva de hotel: no existe una reserva con “fecha de fin antes de la fecha de inicio”. Un partner envía fechas invertidas vía API; si el modelo tiene setters públicos, el sistema persiste datos imposibles y la facturación calcula noches negativas.

**Ejemplo C# — invariante de fechas en constructor**

<!-- code: csharp -->
```csharp
using System;

public class Reserva
{
    public DateTime Inicio { get; }
    public DateTime Fin { get; }

    public Reserva(DateTime inicio, DateTime fin)
    {
        if (fin <= inicio)
            throw new ArgumentException(
                $"Fin ({fin:yyyy-MM-dd}) debe ser posterior a Inicio ({inicio:yyyy-MM-dd})");
        Inicio = inicio;
        Fin = fin;
    }
}
```

<!-- interactive: MermaidDiagram -->
{
  "chart": "flowchart TD\n  Input[Datos de entrada] --> Validate{Invariantes OK?}\n  Validate -->|No| Error[Excepcion / error claro]\n  Validate -->|Si| Create[Objeto valido]"
}

<!-- interactive: CodeChallenge -->
{
  "title": "Completa la validación en el constructor de Reserva",
  "template": "public Reserva(DateTime inicio, DateTime fin)\n{\n    {{blank1}}\n        throw new ArgumentException(\n            $\"Fin ({fin:yyyy-MM-dd}) debe ser posterior a Inicio ({inicio:yyyy-MM-dd})\");\n    Inicio = inicio;\n    Fin = fin;\n}",
  "blanks": [
    { "id": "blank1", "answer": "if (fin <= inicio)", "placeholder": "condición de invariante" }
  ]
}

**DTO vs objeto de dominio**

- **DTO (Data Transfer Object):** solo transporta datos sin reglas — encapsulamiento estricto no aplica.
- **Objeto de dominio** (cuenta, reserva, inventario): casi siempre requiere encapsulamiento e invariantes en el propio tipo.

<!-- interactive: PracticeExercise -->
{
  "prompt": "¿Cuándo un DTO no necesita encapsulamiento estricto y cuándo sí conviene un objeto de dominio encapsulado?",
  "hints": ["DTO = transporte sin reglas", "Dominio = reglas de negocio"],
  "expectedKeywords": ["dto", "dominio", "reglas", "transporte"],
  "successMessage": "Correcto. Los DTOs mueven datos entre capas; los objetos de dominio protegen invariantes y centralizan mutación."
}

**Orden al crear un objeto con invariantes**

Flujo correcto: (c) recibir datos en constructor → (a) validar datos de entrada → si falla (d) lanzar excepción → (b) asignar a campos/propiedades → (e) objeto listo para usar.

<!-- interactive: PracticeExercise -->
{
  "prompt": "Compara public decimal Saldo { get; set; } vs public decimal Saldo { get; private set; }. ¿Qué invariante protege el segundo y no el primero?",
  "hints": ["¿Quién puede asignar desde fuera?", "Saldo >= 0"],
  "expectedKeywords": ["private set", "asignar", "negativo", "invariante"],
  "successMessage": "Correcto. private set impide asignación externa; las mutaciones pasan por métodos que validan Saldo >= 0."
}

---

### Resumen

- **Encapsulamiento** controla el acceso al estado interno: ocultas implementación, expones interfaz pública segura.
- **`{ get; private set; }`** permite lectura pública y escritura solo desde la clase — patrón base en dominio C#.
- **Métodos de dominio** (`Depositar`, `Retirar`) expresan intención y centralizan validación.
- **Invariantes** (`Saldo >= 0`, `Fin > Inicio`) se validan en **constructor** y en **todo método que muta estado**.
- **DTO vs dominio:** DTO transporta datos; dominio protege reglas — no mezcles responsabilidades.
- **Mal diseño:** setters públicos, validación dispersa en capas, colecciones mutables expuestas (`public List<T> { get; set; }`).
- **Preview lección `herencia`:** `protected` permite acceso a clases derivadas — diseña la API pensando en extensión.

---

### Comprueba tu comprensión

Antes del cierre, verifica que puedes aplicar los conceptos de la lección.

<!-- interactive: PracticeExercise -->
{
  "prompt": "Un script de mantenimiento hace producto.Cantidad = 0 sin pasar por reglas. ¿Qué cambio en la clase Producto evitaría esa asignación directa?",
  "hints": ["Piensa en private set", "Métodos Ingresar/Retirar/Ajustar"],
  "expectedKeywords": ["private set", "método", "encapsul"],
  "successMessage": "Correcto. Cantidad { get; private set; } más métodos de dominio impiden asignación externa y centralizan reglas."
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "¿Por qué validar invariantes solo en la capa de presentación (UI) no es suficiente?",
  "hints": ["¿Otros servicios pueden mutar el objeto?", "¿Dónde debe vivir la regla?"],
  "expectedKeywords": ["objeto", "servicio", "centraliz", "dominio"],
  "successMessage": "Correcto. Cualquier código con referencia al objeto puede mutarlo; la regla debe vivir en el dominio, no solo en la vista."
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "Ordena mentalmente el flujo al crear Reserva con fechas: validar → asignar → recibir en constructor → lanzar excepción si falla. ¿Cuál es el orden correcto?",
  "hints": ["Primero recibes parámetros", "Validas antes de asignar"],
  "expectedKeywords": ["constructor", "validar", "asignar", "excepción"],
  "successMessage": "Correcto. Recibir en constructor → validar invariantes → si falla, excepción → si OK, asignar propiedades."
}

---

## Reto integrador

**“Auditar el módulo de inventario”**

Te entregan este código de un sistema de almacén. QA reporta: stock negativo en reportes, cantidades que “saltan” sin trazabilidad, y un script de mantenimiento que hace `producto.Cantidad = 0` sin pasar por reglas.

<!-- code: csharp -->
```csharp
public class Producto
{
    public string Sku { get; set; }
    public int Cantidad { get; set; }
    public decimal PrecioUnitario { get; set; }
}

public class InventarioService
{
    public void RegistrarSalida(Producto producto, int unidades)
    {
        if (producto.Cantidad >= unidades) // validación duplicada en otro servicio también
            producto.Cantidad -= unidades;
    }

    public void AjusteManual(Producto producto, int nuevaCantidad)
    {
        producto.Cantidad = nuevaCantidad; // sin validar negativos
    }
}
```

**Tareas:**

1. Refactoriza `Producto` para proteger `Cantidad` con encapsulamiento: lectura pública, escritura solo vía métodos (`Ingresar`, `Retirar`, `Ajustar` con validación).
2. Define al menos **dos invariantes** explícitas (ej. `Cantidad >= 0`, `PrecioUnitario > 0`) y valídalas en constructor o métodos mutadores.
3. Elimina la validación duplicada de `InventarioService` — el servicio debe confiar en que `Producto` rechaza operaciones inválidas.
4. Escribe un `Main` que demuestre: retiro válido, retiro que lanza excepción por stock insuficiente, e intento de cantidad negativa en ajuste.

**Criterio de éxito:** ningún código externo puede asignar `Cantidad` directamente; invariantes se aplican en un solo lugar; excepciones con mensajes claros; `InventarioService` queda más simple porque la lógica vive en el dominio.

<!-- interactive: PracticeExercise -->
{
  "prompt": "Implementa la refactorización del módulo de inventario: Producto encapsulado con Ingresar/Retirar/Ajustar, dos invariantes validadas, InventarioService simplificado y Main con los tres escenarios (retiro válido, stock insuficiente, ajuste negativo). Pega tu código o describe la estructura clave.",
  "hints": [
    "public int Cantidad { get; private set; }",
    "Constructor valida PrecioUnitario > 0 y Cantidad >= 0",
    "Retirar lanza si unidades > Cantidad",
    "InventarioService solo llama producto.Retirar — sin if duplicado",
    "AjusteManual usa producto.Ajustar(nuevaCantidad) con validación interna"
  ],
  "expectedKeywords": ["private set", "invariante", "Retirar", "Ingresar", "excepción"],
  "successMessage": "Excelente. Has aplicado encapsulamiento e invariantes en un caso real de inventario y eliminado validación duplicada en el servicio."
}

**Extensión opcional — límite diario de retiro**

Agrega a `CuentaBancaria` la regla de límite diario (`LimiteDiario = 200`, campo `_retiradoHoy`). Tres retiros de 80 deben fallar en el tercero.

<!-- code: csharp -->
```csharp
public class CuentaConLimiteDiario : CuentaBancaria
{
    private const decimal LimiteDiario = 200m;
    private decimal _retiradoHoy;

    public CuentaConLimiteDiario(decimal saldoInicial) : base(saldoInicial) { }

    public new void Retirar(decimal monto)
    {
        if (_retiradoHoy + monto > LimiteDiario)
            throw new InvalidOperationException(
                $"Límite diario excedido. Retirado hoy: {_retiradoHoy}, límite: {LimiteDiario}");
        base.Retirar(monto);
        _retiradoHoy += monto;
    }
}
```

---

## Cierre

Has completado el estudio del encapsulamiento en C#. Este principio conecta la noción de clase y estado de la lección `fundamentos` con el diseño de dominio que usarás en `herencia` y el resto del track POO.

**Ideas clave para retener:**

- **Encapsular** no es esconder todo: es controlar el acceso y exponer operaciones seguras del dominio.
- **`{ get; private set; }`** + métodos de dominio protegen invariantes mejor que setters públicos.
- **Invariantes** se validan en constructor y en cada mutación — no solo en comentarios ni en la UI.
- **DTO vs dominio:** transporte de datos vs objeto con reglas; no apliques el mismo nivel de rigor a ambos.
- **Reducir acoplamiento:** los clientes dependen del contrato público, no de campos internos.

**Siguiente paso:** lección `herencia` — `protected`, extensión de clases base y diseño de APIs heredables.

---

## Miniquiz

<!-- interactive: Quiz -->
{
  "questions": [
    {
      "question": "V/F: Encapsular significa esconder todo sin exponer nada al exterior.",
      "options": [
        "Verdadero",
        "Falso"
      ],
      "correctIndex": 1,
      "feedback": "Encapsular es controlar el acceso: ocultas detalles internos pero expones una interfaz pública segura (métodos y propiedades de lectura)."
    },
    {
      "question": "¿Cuál es una señal de buen encapsulamiento en C#?",
      "options": [
        "Setters públicos para todos los campos",
        "Métodos que expresan intención del dominio y validan antes de mutar",
        "Campos public para evitar boilerplate",
        "Validar solo en la capa de presentación"
      ],
      "correctIndex": 1,
      "feedback": "Nombres como Retirar y Depositar comunican intención y centralizan reglas. Setters públicos y campos public permiten estados inválidos."
    },
    {
      "question": "V/F: El encapsulamiento ayuda a cambiar la implementación interna sin romper a los consumidores del objeto.",
      "options": [
        "Verdadero",
        "Falso"
      ],
      "correctIndex": 0,
      "feedback": "Si los clientes usan métodos públicos estables en lugar de tocar campos internos, puedes refactorizar por dentro manteniendo el contrato."
    },
    {
      "question": "¿Dónde conviene validar invariantes como Saldo >= 0?",
      "options": [
        "Solo en comentarios de documentación",
        "En el constructor y en métodos que cambian el estado",
        "En cualquier capa, cuando te acuerdes",
        "Solo en tests unitarios"
      ],
      "correctIndex": 1,
      "feedback": "Toda mutación de estado debe pasar por puntos que reafirman las reglas. El constructor cubre el nacimiento del objeto; los mutadores cubren cambios posteriores."
    },
    {
      "question": "¿Qué patrón C# impide cuenta.Saldo = -100 desde fuera de la clase pero permite leer el saldo?",
      "options": [
        "public decimal Saldo { get; set; }",
        "private decimal Saldo { get; set; }",
        "public decimal Saldo { get; private set; }",
        "public decimal GetSaldo() { return _saldo; } sin campo"
      ],
      "correctIndex": 2,
      "feedback": "get público expone lectura; private set restringe escritura a la propia clase. La opción A permite asignación externa; B no permite lectura pública directa."
    }
  ]
}
