---
track: poo
slug: asociacion-agregacion-composicion
title: "Asociación, Agregación y Composición"
order: 4
prerequisites:
  - herencia
related:
  - abstraccion-clases-abstractas-interfaces
source_brief: kb/education/pipeline/poo/asociacion-agregacion-composicion/brief.md
source_legacy: kb/education/sources/clases/poo/04-asociacion-agregacion-composicion.md
topic_expert: topic-expert-oop-csharp
---

## Objetivos de aprendizaje

Al finalizar la lección, el estudiante podrá:

- **Distinguir** asociación, agregación y composición usando **ciclo de vida** y **propiedad** como criterios principales.
- **Implementar** los tres patrones en C# con colecciones privadas, parámetros de método o creación interna de partes.
- **Justificar** la elección de relación en un caso de dominio (equipo–jugador, pedido–línea, doctor–paciente) sin recurrir a herencia incorrecta.
- **Identificar** anti-patrones: herencia forzada, listas públicas mutables y composición donde las partes deberían ser independientes.
- **Formalizar** una asociación temporal mediante una clase de enlace (`Cita`) cuando el contexto lo requiere.

## Prerrequisitos

- **Lección `herencia`:** distinguir “es un” de “tiene un”; preview de composición con `INotificador`.
- **Lección `encapsulamiento`:** colecciones privadas, validación en métodos mutadores.
- Proyecto consola .NET funcional (`dotnet run`).

## Contenido

### Objetivos del tema

**Sección TSX:** `ObjetivosDelTemaSection`

Esta lección matiza las relaciones **“tiene un”** y **“usa un”** que no son herencia. El dominio técnico proviene del brief del topic-expert; no se inventan conceptos fuera de ese alcance.

<!-- interactive: Callout -->
{
  "title": "Relacionar ≠ heredar",
  "children": "Muchos diseños POO no son “es un” sino cómo dos objetos colaboran: uso puntual, pertenencia débil o parte indisoluble. La herencia no sustituye estas relaciones."
}

---

### 1) Asociación: colaboración sin propiedad

**Sección TSX:** `AsociacionSection`

#### Mapa mental

- Asociación = A **conoce o usa** a B sin propiedad fuerte.
- Puede durar una sola operación (parámetro) o formalizarse en una clase puente.
- Ciclo de vida independiente: B existe sin A.

#### Qué es

La **asociación** es la relación más general: un objeto interactúa con otro sin adueñarse de su existencia. Ejemplo clásico: un `Doctor` atiende a un `Paciente`; ninguno “contiene” al otro.

#### Señales de asociación

- El vínculo es **temporal** o por **contexto** (consulta, cita, transacción).
- B se crea y vive **fuera** de A; A solo lo referencia o recibe por parámetro.
- No hay agrupación todo–parte con reglas de pertenencia.

#### Ejemplo C#: Doctor y Paciente

<!-- code: csharp -->
```csharp
using System;

public class Paciente
{
    public string Nombre { get; }
    public Paciente(string nombre) => Nombre = nombre;
}

public class Doctor
{
    public string Nombre { get; }
    public Doctor(string nombre) => Nombre = nombre;

    public void Atender(Paciente paciente)
    {
        Console.WriteLine($"{Nombre} atiende a {paciente.Nombre}");
    }
}
```

#### Asociación formalizada: clase de enlace

Cuando el contexto importa (fecha, lugar, participantes), una clase puente une los objetos sin herencia ni composición:

<!-- code: csharp -->
```csharp
public class Cita
{
    public Doctor Doctor { get; }
    public Paciente Paciente { get; }
    public DateTime Fecha { get; }

    public Cita(Doctor doctor, Paciente paciente, DateTime fecha)
    {
        Doctor = doctor ?? throw new ArgumentNullException(nameof(doctor));
        Paciente = paciente ?? throw new ArgumentNullException(nameof(paciente));
        Fecha = fecha;
    }
}

// Doctor.Atender(Cita cita) imprime fecha + nombres
```

#### Caso real: hospital

Un sistema modeló `Consulta : Paciente` para “tener” datos del paciente. Los reportes mezclan identidad con la visita; al fusionar historiales se pierde qué médico atendió en cada fecha.

**Decisión:** `Cita` asocia `Doctor`, `Paciente` y `DateTime`; `Doctor.Atender(Cita)` formaliza la colaboración.

#### Diagrama UML (preview)

<!-- interactive: MermaidDiagram -->
{
  "chart": "classDiagram\n  Doctor --> Paciente : atiende\n  class Cita {\n    +Doctor Doctor\n    +Paciente Paciente\n    +DateTime Fecha\n  }\n  Doctor --> Cita\n  Paciente --> Cita"
}

#### Errores comunes

- Usar herencia para “tiene” (`class Consulta : Paciente`).
- Pasar 10 objetos a cada método en lugar de una clase de contexto (`Cita`, `OrdenCompra`).

<!-- interactive: CodeChallenge -->
{
  "title": "Completa la asociación",
  "template": "public void Atender(___ paciente)\n{\n    Console.WriteLine($\"{Nombre} atiende a {paciente.Nombre}\");\n}",
  "blanks": [
    { "id": "b1", "answer": "Paciente", "hint": "Tipo del parámetro que recibe el doctor" }
  ]
}

---

### 2) Agregación: todo–parte débil

**Sección TSX:** `AgregacionSection`

#### Mapa mental

- Agregación = todo **agrupa** partes que **pueden existir sin él**.
- El todo mantiene referencias; usualmente **no crea** las partes.
- Quitar una parte del todo **no destruye** la parte en el sistema.

#### Qué es

En **agregación**, hay relación todo–parte pero la parte tiene vida propia. Ejemplo: una `Biblioteca` agrupa `Libro` creados afuera; quitar un libro de la biblioteca no elimina el libro si otra variable lo referencia.

#### Señales de agregación

- Las partes se **instancian fuera** del todo y se pasan con `Agregar`.
- El todo ofrece `Quitar` sin destruir el objeto parte.
- Las partes pueden **compartirse** entre varios todos o existir antes del todo.

#### Ejemplo C#: Biblioteca y Libro

<!-- code: csharp -->
```csharp
using System;
using System.Collections.Generic;

public class Libro
{
    public string Titulo { get; }
    public Libro(string titulo) => Titulo = titulo;
}

public class Biblioteca
{
    private readonly List<Libro> _libros = new();

    public void Agregar(Libro libro) => _libros.Add(libro);

    public bool Quitar(string titulo)
    {
        var idx = _libros.FindIndex(l => l.Titulo == titulo);
        if (idx < 0) return false;
        _libros.RemoveAt(idx);
        return true;
    }

    public void Listar()
    {
        foreach (var libro in _libros)
            Console.WriteLine(libro.Titulo);
    }
}
```

#### Ciclo de vida al quitar

<!-- interactive: StepReveal -->
{
  "title": "Agregar y quitar libro",
  "steps": [
    { "title": "Crear Libro", "content": "En `Main`: `var libro = new Libro(\"C# POO\");` — existe independiente de la biblioteca." },
    { "title": "Agregar", "content": "`biblioteca.Agregar(libro);` — el todo mantiene una referencia." },
    { "title": "Listar", "content": "La biblioteca imprime títulos de sus referencias." },
    { "title": "Quitar", "content": "`biblioteca.Quitar(\"C# POO\");` — solo se elimina la referencia interna." },
    { "title": "Parte viva", "content": "Si `libro` sigue en una variable local, `libro.Titulo` sigue siendo válido." }
  ]
}

#### Caso real: e-commerce (carrito)

Un `Carrito` **agrega** referencias a `Producto` del catálogo. Los productos viven sin el carrito; el carrito solo agrupa lo que el usuario selecciona temporalmente.

#### Diagrama UML (preview)

<!-- interactive: MermaidDiagram -->
{
  "chart": "classDiagram\n  Biblioteca o-- Libro : agrega\n  class Biblioteca {\n    -List~Libro~ _libros\n    +Agregar(Libro)\n    +Quitar(string)\n  }"
}

#### Errores comunes

- Etiquetar todo como composición cuando las partes se comparten o existen antes del todo.
- Destruir o invalidar la parte al quitarla de una agregación.

<!-- interactive: PracticeExercise -->
{
  "prompt": "¿Por qué `Biblioteca` con `List<Libro>` privada es agregación y no composición? Menciona quién crea el `Libro` y qué pasa al quitar.",
  "hints": [
    "El Libro se crea fuera de Biblioteca",
    "Quitar solo elimina la referencia en la lista",
    "El objeto Libro puede seguir existiendo"
  ],
  "expectedKeywords": ["referencia", "crea", "quitar", "independiente"],
  "successMessage": "Correcto. Agregación: el todo agrupa referencias; las partes tienen ciclo de vida propio."
}

---

### 3) Composición: todo–parte fuerte

**Sección TSX:** `ComposicionSection`

#### Mapa mental

- Composición = la parte **no tiene sentido** (o no existe en el modelo) sin el todo.
- El todo **crea y controla** las partes internamente.
- Ciclo de vida acoplado: si el todo desaparece, las partes del modelo van con él.

#### Qué es

En **composición**, el todo es responsable de instanciar y gobernar sus partes. Ejemplo: un `Pedido` compone `LineaPedido`; la línea pertenece a un pedido concreto con precio congelado.

#### Señales de composición

- Las partes se crean **solo** mediante métodos del todo (`AgregarLinea`).
- No se pasa una parte ya construida desde afuera si el dominio exige que solo exista dentro del todo.
- La lista interna es **privada**; no se expone mutable al exterior.

#### Ejemplo C#: Pedido y LineaPedido

<!-- code: csharp -->
```csharp
using System;
using System.Collections.Generic;
using System.Linq;

public class LineaPedido
{
    public string Producto { get; }
    public int Cantidad { get; }
    public decimal PrecioUnitario { get; }

    public LineaPedido(string producto, int cantidad, decimal precioUnitario)
    {
        if (string.IsNullOrWhiteSpace(producto)) throw new ArgumentException("Producto requerido");
        if (cantidad <= 0) throw new ArgumentException("Cantidad inválida");
        if (precioUnitario < 0) throw new ArgumentException("Precio inválido");
        Producto = producto;
        Cantidad = cantidad;
        PrecioUnitario = precioUnitario;
    }

    public decimal Subtotal() => Cantidad * PrecioUnitario;
}

public class Pedido
{
    private readonly List<LineaPedido> _lineas = new();

    public void AgregarLinea(string producto, int cantidad, decimal precioUnitario)
    {
        _lineas.Add(new LineaPedido(producto, cantidad, precioUnitario));
    }

    public void QuitarProducto(string producto)
    {
        _lineas.RemoveAll(l => l.Producto == producto);
    }

    public decimal Total() => _lineas.Sum(l => l.Subtotal());
}
```

#### Anti-patrón: lista pública

<!-- code: csharp -->
// MAL: rompe el control del Pedido sobre sus líneas
public List<LineaPedido> Lineas { get; set; }
```

Código externo puede mutar o reemplazar líneas sin pasar por reglas del `Pedido`.

#### Ciclo de vida al agregar línea

<!-- interactive: StepReveal -->
{
  "title": "Línea de pedido",
  "steps": [
    { "title": "Cliente llama", "content": "`pedido.AgregarLinea(\"Teclado\", 2, 49.99m);`" },
    { "title": "Pedido instancia", "content": "Internamente `new LineaPedido(...)` — la parte nace dentro del todo." },
    { "title": "Validación", "content": "El constructor de `LineaPedido` valida producto, cantidad y precio." },
    { "title": "Total", "content": "`pedido.Total()` suma subtotales sin exponer la lista." }
  ]
}

#### Caso real: pedido confirmado vs catálogo

Un marketplace reutilizaba instancias de `Producto` del catálogo como líneas de pedido. Un cambio de precio en catálogo alteraba pedidos históricos.

**Lección:** `Pedido` **compone** `LineaPedido` con precio y cantidad **congelados** al momento de la compra.

#### Diagrama UML (preview)

<!-- interactive: MermaidDiagram -->
{
  "chart": "classDiagram\n  Pedido *-- LineaPedido : compone\n  class Pedido {\n    -List~LineaPedido~ _lineas\n    +AgregarLinea(...)\n    +Total()\n  }"
}

#### Errores comunes

- Crear `LineaPedido` en `Main` y pasarla a `Pedido` cuando el dominio exige composición.
- Olvidar validar en `AgregarLinea` — delegar todo afuera rompe invariantes.

---

### 4) Comparación y decisión de diseño

**Sección TSX:** `ComparacionRelacionesSection`

#### Mapa mental

- Criterio decisivo: **ciclo de vida** y **quién crea la parte**.
- Misma sintaxis (`List<T>`) no implica el mismo patrón.
- Herencia solo para “es un”, nunca para “tiene un”.

#### Tabla comparativa

<!-- interactive: CompareTable -->
{
  "headers": ["Criterio", "Asociación", "Agregación", "Composición"],
  "rows": [
    ["Metáfora", "\"Te uso\"", "\"Te agrupo\"", "\"Estoy hecho de ti\""],
    ["Parte sin todo", "Sí", "Sí", "No (en el modelo)"],
    ["Quién crea la parte", "Cualquiera", "Usualmente afuera", "El todo"],
    ["UML (preview)", "-->", "o--", "*--"]
  ]
}

#### Flujo de decisión

<!-- interactive: MermaidDiagram -->
{
  "chart": "flowchart TD\n  A[¿A y B se relacionan?] --> B{¿Parte puede vivir sin todo?}\n  B -->|Sí, solo uso puntual| C[Asociación]\n  B -->|Sí, pero hay agrupación| D[Agregación]\n  B -->|No, ciclo de vida junto| E[Composición]"
}

#### Cuatro casos de dominio

| Par | Relación sugerida | Justificación breve |
|-----|-------------------|---------------------|
| `Universidad` – `Departamento` | Agregación | El departamento puede reestructurarse; la universidad agrupa sin destruir entidades académicas independientes. |
| `CarritoDeCompras` – `Producto` | Agregación | Productos del catálogo existen sin carrito; referencias temporales. |
| `Factura` – `LineaFactura` | Composición | La línea congela datos del momento; no tiene sentido fuera de esa factura. |
| `Usuario` – `Sesion` | Composición | La sesión pertenece a un usuario y expira con él en el modelo. |

#### Tres relaciones en un vistazo

<!-- interactive: MermaidDiagram -->
{
  "chart": "classDiagram\n  Doctor --> Paciente : atiende\n  Biblioteca o-- Libro : agrega\n  Pedido *-- LineaPedido : compone"
}

<!-- interactive: Callout -->
{
  "title": "Error frecuente",
  "children": "Confundir agregación con composición por el contenedor: `Biblioteca` y `Pedido` usan `List<T>` privada — la diferencia está en origen y ciclo de vida, no en la sintaxis."
}

---

### Resumen

**Sección TSX:** `ResumenSection`

- **Asociación:** colaboración sin propiedad fuerte; parámetro o clase de enlace (`Cita`).
- **Agregación:** todo agrupa partes independientes; `Agregar`/`Quitar` sin destruir la parte.
- **Composición:** el todo crea y controla partes con ciclo de vida acoplado; lista privada.
- **Criterio:** ciclo de vida + quién instancia — no la sola presencia de `List<T>`.
- **Anti-patrones:** herencia para “tiene un”, listas públicas mutables, composición donde las partes son compartidas.
- **Siguiente lección:** `abstraccion-clases-abstractas-interfaces` — contratos sobre implementaciones.

---

### Comprueba tu comprensión

**Sección TSX:** `CompruebaTuComprensionSection`

Antes del cierre, verifica que puedes aplicar los conceptos de la lección.

<!-- interactive: PracticeExercise -->
{
  "prompt": "Para cada par elige asociación, agregación o composición y justifica mencionando ciclo de vida: (1) Universidad–Departamento, (2) CarritoDeCompras–Producto, (3) Factura–LineaFactura, (4) Usuario–Sesion.",
  "hints": [
    "¿La parte puede existir sin el todo?",
    "¿Quién crea la parte?",
    "¿El vínculo es solo uso puntual o agrupación con reglas?"
  ],
  "expectedKeywords": ["agregación", "composición", "ciclo de vida", "asociación"],
  "successMessage": "Correcto. Usa ciclo de vida y propiedad como criterio principal, no solo la sintaxis de colecciones."
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "Implementa `Cita` con `Doctor`, `Paciente` y `DateTime`. Cambia `Doctor.Atender(Paciente)` por `Doctor.Atender(Cita)` imprimiendo fecha y nombres de ambos participantes.",
  "hints": [
    "Cita recibe doctor, paciente y fecha en el constructor",
    "Atender(Cita cita) accede a cita.Doctor, cita.Paciente, cita.Fecha",
    "Valida null en el constructor de Cita"
  ],
  "expectedKeywords": ["Cita", "DateTime", "Atender"],
  "successMessage": "Correcto. Has formalizado una asociación temporal con una clase de enlace."
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "En `Biblioteca`, quita un libro con `Quitar(string titulo)` y demuestra en comentarios o `Main` que el objeto `Libro` sigue usable si otra variable lo referencia.",
  "hints": [
    "Crea el Libro antes de agregarlo",
    "Guarda referencia en variable local",
    "Después de Quitar, imprime libro.Titulo desde la variable local"
  ],
  "expectedKeywords": ["Quitar", "referencia", "sigue"],
  "successMessage": "Correcto. Quitar de una agregación no destruye la parte en memoria."
}

---

## Reto integrador

**Sección TSX:** `RetoIntegradorSection`

**“Biblioteca y tienda en consola”**

Prototipo .NET que demuestre los tres tipos de relación en dominios distintos.

**Parte A — Asociación**

1. Clases `Profesor`, `Estudiante`, `Clase` (nombre de materia, `DateTime`, referencias a profesor y lista de estudiantes inscritos).
2. Método `Profesor.Dictar(Clase)` que imprime materia, fecha y cantidad de estudiantes.

**Parte B — Agregación**

3. `Biblioteca` con `Agregar`, `Quitar`, `Listar`; libros creados en `Main` antes de agregarse.
4. Demostrar que tras `Quitar`, una variable local al `Libro` sigue imprimiendo su título.

**Parte C — Composición**

5. `Pedido` que solo crea `LineaPedido` vía `AgregarLinea`; sin exponer la lista.
6. `QuitarProducto`, `Total()` y al menos dos líneas con total correcto en `Main`.

**Parte D — Justificación**

7. Párrafo breve: por qué `Clase` no hereda de `Estudiante` y por qué `LineaPedido` no se pasa ya construida desde `Main`.

**Criterio de éxito:** compila; las tres relaciones son distinguibles en código y justificación; ninguna relación “tiene un” usa herencia.

<!-- interactive: PracticeExercise -->
{
  "prompt": "Redacta la justificación (Parte D): ¿por qué Clase no hereda de Estudiante y por qué LineaPedido no se construye en Main?",
  "hints": [
    "Estudiante no es un tipo de Clase — son roles distintos en asociación",
    "LineaPedido solo tiene sentido dentro de un Pedido concreto",
    "El Pedido debe controlar creación y reglas de sus líneas"
  ],
  "expectedKeywords": ["herencia", "composición", "asociación", "ciclo de vida"],
  "successMessage": "Excelente. Has distinguido colaboración, agrupación débil y parte fuerte."
}

---

## Cierre

**Sección TSX:** `CierreSection`

Has completado el estudio de asociación, agregación y composición en C#. Estas relaciones complementan la herencia y preparan el terreno para programar contra contratos.

**Ideas clave para retener:**

- **Relacionar ≠ heredar:** “tiene un” y “usa un” tienen tres matices según ciclo de vida.
- **Agregación vs composición:** misma sintaxis de lista, distinto origen y control de las partes.
- **Clase de enlace:** formaliza asociaciones con contexto (`Cita`, `Clase`).
- **Encapsulamiento:** colecciones privadas + métodos `Agregar`/`Quitar` protegen invariantes.

**Siguiente paso:** lección `abstraccion-clases-abstractas-interfaces` — abstracción, clases abstractas e interfaces como contratos sobre implementaciones.

---

## Miniquiz

**Sección TSX:** `MiniquizFinalSection`

<!-- interactive: Quiz -->
{
  "questions": [
    {
      "question": "V/F: En asociación siempre hay propiedad fuerte del objeto relacionado.",
      "options": ["Verdadero", "Falso"],
      "correctIndex": 1,
      "feedback": "Asociación es uso o colaboración sin adueñarse del ciclo de vida. Propiedad fuerte apunta a composición."
    },
    {
      "question": "¿Qué describe mejor la agregación?",
      "options": [
        "\"Parte de\" con destrucción conjunta obligatoria",
        "Todo agrupa partes que pueden existir sin él",
        "Herencia múltiple",
        "Solo métodos estáticos"
      ],
      "correctIndex": 1,
      "feedback": "Ejemplo clásico: equipo–jugador; el jugador puede cambiar de equipo."
    },
    {
      "question": "¿Cuál par encaja mejor con composición?",
      "options": [
        "Biblioteca–Libro",
        "Pedido–LineaPedido",
        "Doctor–Paciente en una consulta",
        "Equipo–Jugador"
      ],
      "correctIndex": 1,
      "feedback": "La línea pertenece a un pedido específico y el pedido la crea; no tiene sentido compartida como catálogo."
    },
    {
      "question": "V/F: En composición, las partes suelen depender del ciclo de vida del todo.",
      "options": ["Verdadero", "Falso"],
      "correctIndex": 0,
      "feedback": "El todo controla creación y existencia de la parte en el modelo."
    },
    {
      "question": "`Pedido` expone `public List<LineaPedido> Lineas { get; set; }`. ¿Qué problema principal introduce?",
      "options": [
        "Ninguno, es más rápido",
        "Rompe el control del pedido sobre sus líneas (composición débil)",
        "Impide usar foreach",
        "Obliga a usar herencia"
      ],
      "correctIndex": 1,
      "feedback": "Código externo puede mutar o reemplazar líneas sin pasar por reglas del Pedido."
    }
  ]
}

---

## SEO (sugerencias)

- **seoTitle:** Asociación, agregación y composición en C# | POO
- **seoDescription:** Aprende a distinguir asociación, agregación y composición en C# con ejemplos de Doctor–Paciente, Biblioteca–Libro y Pedido–LineaPedido. Criterios de ciclo de vida y anti-patrones de diseño.
