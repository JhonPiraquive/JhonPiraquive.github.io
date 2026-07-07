---
track: poo
slug: fundamentos
title: "Fundamentos de POO"
order: 1
prerequisites: []
related:
  - encapsulamiento
source_brief: kb/education/pipeline/poo/fundamentos/brief.md
tsx_sections:
  - QueEsLaProgramacionSection
  - QueEsUnObjetoSection
  - QueEsUnaClaseSection
  - QueEsUnaInstanciaSection
  - QueEsUnConstructorSection
---

## Objetivos de aprendizaje

Al finalizar la lección, el estudiante podrá:

- **Definir** la Programación Orientada a Objetos (POO) y **explicar** sus beneficios frente a funciones sueltas cuando hay reglas de negocio y entidades con estado.
- **Distinguir** objeto, clase, instancia y constructor, usando la analogía molde → objeto concreto.
- **Identificar** estado (propiedades) y comportamiento (métodos) en un ejemplo C# y **reconocer** el anti-patrón del objeto anémico.
- **Implementar** clases básicas en C# con `new`, constructor que valida entradas y propiedades con `{ get; private set; }` para proteger invariantes.
- **Aplicar** convenciones C# (PascalCase, `dotnet console`) para crear instancias independientes y manejar excepciones con mensajes claros.

## Prerrequisitos

- Conocimientos básicos de programación: variables, tipos primitivos, condicionales y funciones o métodos.
- Entorno **.NET SDK** instalado y familiaridad con `dotnet new console` y `dotnet run`.
- No se requiere experiencia previa en POO; esta es la primera lección del track POO en C#.

## Contenido

### Objetivos del tema

Esta lección introduce los pilares de la POO en C#: qué es el paradigma, qué es un objeto, cómo se define una clase, cómo se crean instancias y qué papel cumple el constructor. Los objetivos medibles se listan en la sección anterior.

---

### 1) ¿Qué es la Programación Orientada a Objetos (POO)?

**Mapa mental**

- Modelar el mundo (o el negocio) como “cosas” con datos + acciones.
- Agrupar datos y comportamiento en la misma unidad: el objeto.
- Reutilizar y extender comportamiento sin copiar y pegar.
- Mejorar mantenibilidad: cambios más localizados.

**Qué es**

La POO es un estilo de programación donde organizas el software alrededor de **objetos**. Un objeto suele representar una entidad del dominio (por ejemplo, `Pedido`, `Usuario`, `Carrito`) y contiene:

- **Estado:** sus datos internos (propiedades o campos).
- **Comportamiento:** lo que puede hacer (métodos).

**Para qué sirve**

- **Reducir caos:** en vez de funciones sueltas repartidas por el código, tienes unidades con responsabilidades claras.
- **Evitar inconsistencias:** el objeto protege sus reglas (invariantes).
- **Diseñar para el cambio:** agregar variantes (por ejemplo, nuevos métodos de pago) sin tocar todo el sistema.

**Señales de buen y mal uso**

- **Aplica cuando:** hay reglas de negocio, estados válidos e inválidos, entidades que “hacen” cosas.
- **No aplica cuando:** el problema es pura transformación de datos (pipeline funcional simple) y una estructura sin objetos basta.

**Ejemplo de vida real**

Piensa en un carro: tiene estado (velocidad, combustible) y comportamientos (acelerar, frenar). No tiene sentido “sumar velocidad” desde cualquier parte sin reglas: el carro controla cómo cambia su estado.

**Ejemplo C# (mínimo)**

<!-- code: csharp -->
```csharp
using System;

public class Carro
{
    public int Velocidad { get; private set; }

    public void Acelerar(int delta)
    {
        if (delta <= 0) throw new ArgumentException("delta debe ser positivo");
        Velocidad += delta;
    }
}

public class Program
{
    public static void Main()
    {
        var carro = new Carro();
        carro.Acelerar(10);
        Console.WriteLine(carro.Velocidad); // 10
    }
}
```

<!-- interactive: MermaidDiagram -->
{
  "chart": "classDiagram\n  class Carro {\n    +int Velocidad\n    +Acelerar(int delta)\n  }"
}

<!-- interactive: Callout -->
{
  "title": "Anti-ejemplo: setter público rompe invariantes",
  "children": "Evitar exponer todo con public set. Si Velocidad tuviera { get; set; }, cualquier código podría asignar velocidad negativa y romper las reglas del dominio."
}

<!-- code: csharp -->
```csharp
// Evitar: cualquiera puede poner velocidad negativa
public class CarroMalo
{
    public int Velocidad { get; set; } // ← rompe el control del objeto
}
```

<!-- interactive: Callout -->
{
  "title": "Caso real: saldo negativo por setter público",
  "children": "Un equipo migra un módulo de carrito a clases pero deja public decimal Saldo { get; set; } en CuentaBancaria. Un bug en checkout hace cuenta.Saldo = -100 directamente. Los pedidos se procesan con saldo inválido hasta que auditoría detecta inconsistencias. Decisión clave: private set + métodos Retirar/Depositar que validen montos."
}

**Práctica guiada**

Crea un `Carro`, llama `Acelerar(10)` y muestra `Velocidad` en consola. Luego intenta `Acelerar(-5)` y observa la excepción.

<!-- interactive: PracticeExercise -->
{
  "prompt": "Explica con tus palabras qué gana un proyecto al modelar un carrito de compras como objeto en lugar de variables sueltas (total, items, descuento) repartidas por funciones.",
  "hints": ["Piensa en reglas de negocio centralizadas", "¿Quién valida el descuento o el total?"],
  "expectedKeywords": ["reglas", "estado", "encapsul", "manten"],
  "successMessage": "Correcto. Un objeto agrupa estado y reglas en un solo lugar, reduce inconsistencias y facilita cambios localizados."
}

---

### 2) ¿Qué es un Objeto?

**Mapa mental**

- Tiene **identidad** (es “ese” objeto).
- Tiene **estado** (datos actuales).
- Tiene **comportamiento** (métodos).

**Qué es**

Un objeto es una instancia que vive en memoria y representa algo del dominio. No es “solo un paquete de datos”: también sabe ejecutar operaciones válidas sobre sí mismo y proteger sus invariantes.

**Para qué sirve**

- **Encapsular reglas:** “solo se puede retirar si hay saldo”.
- **Evitar estados inválidos:** “un pedido no puede enviarse si no está pagado”.

**Señales de buen y mal uso**

- **Bien:** métodos que expresan intención (`Pagar()`, `Retirar()`), no setters públicos masivos.
- **Mal:** objetos anémicos (solo propiedades) con reglas dispersas en servicios gigantes.

**Ejemplo de vida real**

Una tarjeta de acceso: no cualquiera decide que “ahora es válida”. Hay reglas (fecha, permisos, bloqueo). El objeto controla cuándo puede usarse.

**Ejemplo C#: objeto con reglas de negocio**

<!-- code: csharp -->
```csharp
using System;

public class CuentaBancaria
{
    public decimal Saldo { get; private set; }

    public CuentaBancaria(decimal saldoInicial)
    {
        if (saldoInicial < 0) throw new ArgumentException("Saldo inicial inválido");
        Saldo = saldoInicial;
    }

    public void Retirar(decimal monto)
    {
        if (monto <= 0) throw new ArgumentException("Monto inválido");
        if (monto > Saldo) throw new InvalidOperationException("Fondos insuficientes");
        Saldo -= monto;
    }
}
```

**Variante:** agrega `Depositar(decimal monto)` rechazando montos ≤ 0.

<!-- interactive: MermaidDiagram -->
{
  "chart": "classDiagram\n  class CuentaBancaria {\n    +decimal Saldo\n    +CuentaBancaria(decimal saldoInicial)\n    +Retirar(decimal monto)\n  }"
}

**Estado vs comportamiento**

| Concepto | Representación en C# | Ejemplo en `CuentaBancaria` |
|----------|---------------------|----------------------------|
| Estado | Propiedades / campos | `Saldo` |
| Comportamiento | Métodos | `Retirar()`, `Depositar()` |

**Práctica guiada**

<!-- interactive: PracticeExercise -->
{
  "prompt": "Implementa Depositar(decimal monto) en CuentaBancaria rechazando montos ≤ 0. Prueba depósito y retiro válidos con dotnet run.",
  "hints": ["Valida monto <= 0 con ArgumentException", "Suma al Saldo si el monto es válido"],
  "expectedKeywords": ["Depositar", "Saldo", "ArgumentException"],
  "successMessage": "Correcto. El objeto controla cómo cambia su saldo mediante métodos validados, no con setters públicos."
}

---

### 3) ¿Qué es una Clase?

**Mapa mental**

- Es el **molde:** define estructura + comportamiento.
- **No es el objeto:** es la definición reutilizable.
- Permite crear muchas instancias con `new`.

**Qué es**

Una clase es una definición de tipo que especifica:

- Qué datos tendrá el objeto (campos o propiedades).
- Qué acciones podrá hacer (métodos).

**Para qué sirve**

- Reutilizar una misma definición para múltiples objetos.
- Mantener reglas en un solo lugar (alta cohesión).

**Señales de buen y mal uso**

- **Bien:** clase con una responsabilidad clara.
- **Mal:** clase “Dios” (reglas + I/O + UI + base de datos en un solo tipo).

**Ejemplo de vida real**

Analogía **receta vs galleta:** la receta es la clase; cada galleta horneada es una instancia. `Producto` es la clase; `new Producto("Café", 5.5m)` crea una instancia u objeto.

**Ejemplo C#: clase como molde**

<!-- code: csharp -->
```csharp
using System;

public class Producto
{
    public string Nombre { get; }
    public decimal Precio { get; }

    public Producto(string nombre, decimal precio)
    {
        if (string.IsNullOrWhiteSpace(nombre)) throw new ArgumentException("Nombre requerido");
        if (precio < 0) throw new ArgumentException("Precio inválido");
        Nombre = nombre;
        Precio = precio;
    }
}

public class Program
{
    public static void Main()
    {
        var cafe = new Producto("Café", 5.5m);
        var te = new Producto("Té", 4.0m);
        Console.WriteLine($"{cafe.Nombre} - {cafe.Precio}");
        Console.WriteLine($"{te.Nombre} - {te.Precio}");
    }
}
```

<!-- interactive: MermaidDiagram -->
{
  "chart": "classDiagram\n  class Producto {\n    +string Nombre\n    +decimal Precio\n    +Producto(string nombre, decimal precio)\n  }"
}

<!-- interactive: CompareTable -->
{
  "headers": ["Término", "Qué es", "Ejemplo en C#"],
  "rows": [
    ["Clase", "Molde / definición de tipo", "class Producto { ... }"],
    ["Instancia", "Objeto concreto creado con new", "var cafe = new Producto(...)"],
    ["Objeto", "Entidad en memoria con identidad, estado y comportamiento", "cafe con su Nombre y Precio actuales"]
  ]
}

<!-- interactive: Callout -->
{
  "title": "Error frecuente",
  "children": "Confundir clase con objeto: la clase es la receta; el objeto es la galleta horneada. Producto es la clase; new Producto(...) crea una instancia."
}

**Práctica guiada**

Crea un `Producto` con precio negativo y ajusta la validación para que el mensaje diga: “Precio debe ser >= 0”.

<!-- interactive: CodeChallenge -->
{
  "title": "Completa el código — instanciar y proteger estado",
  "template": "var cafe = ___ Producto(\"Café\", 5.5m);\npublic ___ Saldo { get; private set; }",
  "blanks": [
    { "id": "blank1", "answer": "new", "placeholder": "keyword de instanciación" },
    { "id": "blank2", "answer": "decimal", "placeholder": "tipo del saldo" }
  ]
}

---

### 4) ¿Qué es una Instancia?

**Mapa mental**

- Instancia = objeto concreto creado desde una clase.
- Dos instancias de la misma clase pueden tener estados distintos.

**Qué es**

Una instancia es un objeto específico creado a partir de una clase:

<!-- code: csharp -->
```csharp
var p1 = new Producto("Café", 5.5m);
var p2 = new Producto("Té", 4.0m);
```

`p1` y `p2` son instancias **diferentes** con estados distintos. Modificar `p1` no cambia `p2` automáticamente.

**Para qué sirve**

- Representar múltiples elementos del mismo tipo en el sistema.
- Guardarlos en colecciones, procesarlos, compararlos.

**Señales de buen y mal uso**

- **Bien:** crear instancias cuando necesitas identidad y estado propio.
- **Mal:** crear instancias solo para agrupar funciones sin datos (quizá basta un helper estático).

**Ejemplo de vida real**

`Usuario` (clase) vs “Ana” y “Juan” (instancias con nombres y permisos distintos).

**Instancias independientes en colección**

<!-- code: csharp -->
```csharp
using System;
using System.Collections.Generic;

var catalogo = new List<Producto>
{
    new Producto("Café", 5.5m),
    new Producto("Té", 4.0m),
    new Producto("Jugo", 6.0m)
};

foreach (var p in catalogo)
    Console.WriteLine(p.Nombre);
```

<!-- interactive: MermaidDiagram -->
{
  "chart": "flowchart LR\n  Clase[Clase Producto] -->|new| p1[\"Instancia p1: Café\"]\n  Clase -->|new| p2[\"Instancia p2: Té\"]"
}

<!-- interactive: StepReveal -->
{
  "title": "Creación de un objeto en C#",
  "steps": [
    {
      "title": "1. Defines la clase",
      "content": "Escribes class Producto con propiedades, constructor y métodos. Es el molde reutilizable."
    },
    {
      "title": "2. Escribes new Producto(...)",
      "content": "La expresión new reserva memoria e invoca el constructor con los argumentos proporcionados."
    },
    {
      "title": "3. Se ejecuta el constructor",
      "content": "El constructor valida entradas y asigna valores iniciales. El objeto nace en estado válido."
    },
    {
      "title": "4. El objeto queda listo en memoria",
      "content": "La variable (por ejemplo, var cafe) referencia la instancia concreta con su propio estado."
    },
    {
      "title": "5. Llamas métodos que respetan reglas",
      "content": "Operaciones como Retirar() o Pagar() modifican el estado solo si las reglas del dominio lo permiten."
    }
  ]
}

**Práctica guiada**

<!-- interactive: PracticeExercise -->
{
  "prompt": "Analogía receta vs galleta: en var cafe = new Producto(\"Café\", 5.5m);, ¿qué parte es la clase y qué parte es la instancia?",
  "hints": ["Producto sin new es solo el tipo", "new crea el objeto concreto en memoria"],
  "expectedKeywords": ["Producto", "clase", "cafe", "instancia"],
  "successMessage": "Correcto. Producto es la clase (molde); cafe es la instancia u objeto concreto creado con new."
}

---

### 5) ¿Qué es un Constructor y para qué se usa?

**Mapa mental**

- Se ejecuta al crear el objeto (`new`).
- Deja el objeto en un **estado válido**.
- Puede validar y asignar valores iniciales.

**Qué es**

Un constructor es un método especial con el **mismo nombre de la clase**, sin tipo de retorno, que se ejecuta cuando creas una instancia con `new`.

**Para qué sirve**

- Asegurar invariantes (“un pedido nace con estado Creado”).
- Validar entradas (“precio no negativo”, “id no vacío”).
- Preparar el objeto para usarse de inmediato, sin “arreglos” posteriores.

**Señales de buen y mal uso**

- **Bien:** constructor valida lo esencial y deja el objeto listo.
- **Mal:** constructor con I/O pesada (HTTP, base de datos, archivos) que vuelve lenta y frágil la creación.

**Ejemplo de vida real**

“Encender” un dispositivo: al encender, se inicializa a un estado listo, no “a medias”.

**Ejemplo C#: constructor que garantiza estado válido**

<!-- code: csharp -->
```csharp
using System;

public class Pedido
{
    public string Id { get; }
    public string Estado { get; private set; }

    public Pedido(string id)
    {
        if (string.IsNullOrWhiteSpace(id)) throw new ArgumentException("Id requerido");
        Id = id;
        Estado = "Creado";
    }

    public void Pagar()
    {
        if (Estado != "Creado") throw new InvalidOperationException("Solo se paga un pedido creado");
        Estado = "Pagado";
    }
}
```

<!-- interactive: MermaidDiagram -->
{
  "chart": "flowchart TD\n  New[\"new Pedido(id)\"] --> Ctor[\"Constructor valida + inicializa\"]\n  Ctor --> Ready[\"Objeto listo (Estado=Creado)\"]"
}

<!-- interactive: Callout -->
{
  "title": "Caso real: constructor vacío y estados inválidos",
  "children": "Un microservicio crea Pedido con constructor por defecto y luego llama setters desde otro servicio. A veces el pedido queda sin Id, con Estado null o ya Pagado sin pasar por el flujo. Decisión clave: constructor que exija id válido y deje Estado = Creado. Un objeto debe nacer listo para usar."
}

**Convenciones C# en esta lección**

- Proyecto consola: `dotnet new console`
- PascalCase para clases y métodos públicos
- camelCase para variables locales y parámetros
- `new` para instanciar
- Propiedades con `{ get; private set; }` para proteger estado

**Práctica guiada**

Crea `var p = new Pedido("");` y mejora el mensaje de validación. Crea `var p2 = new Pedido("P-1");`, llama `Pagar()` dos veces; la segunda debe fallar con excepción clara.

<!-- interactive: PracticeExercise -->
{
  "prompt": "¿Cuándo POO no sería la mejor opción? Da un ejemplo de problema de transformación de datos donde un enfoque funcional simple bastaría.",
  "hints": ["Piensa en pipelines sin identidad de entidades", "¿Hay reglas de negocio o solo mapeo de datos?"],
  "expectedKeywords": ["pipeline", "transform", "funcional", "datos"],
  "successMessage": "Correcto. Si solo transformas datos sin identidad ni reglas complejas (por ejemplo, filtrar y mapear una lista), un enfoque funcional puede ser más simple que modelar objetos."
}

---

### Resumen

- La **POO** organiza el software en objetos con **estado** y **comportamiento**, útil cuando hay reglas de negocio e invariantes.
- Un **objeto** encapsula reglas; evita objetos anémicos y setters públicos que rompen el control del dominio.
- Una **clase** es el molde; una **instancia** es el objeto concreto creado con `new`; cada instancia tiene su propio estado.
- El **constructor** se ejecuta al instanciar y debe dejar el objeto en estado válido, validando entradas esenciales.
- Convenciones C#: PascalCase, `{ get; private set; }`, excepciones con mensajes claros, `dotnet run` para probar.
- **Siguiente lección:** `encapsulamiento` — protección de estado y visibilidad de miembros.

---

### Comprueba tu comprensión

Antes del cierre, verifica que puedes aplicar los conceptos de la lección.

<!-- interactive: PracticeExercise -->
{
  "prompt": "Crea var cuenta = new CuentaBancaria(50); y llama cuenta.Retirar(80);. Mejora el mensaje de error para incluir saldo actual y monto solicitado.",
  "hints": ["Usa string interpolation en InvalidOperationException", "Incluye Saldo y monto en el mensaje"],
  "expectedKeywords": ["Fondos", "Saldo", "monto"],
  "successMessage": "Correcto. Un mensaje claro ayuda a depurar y refuerza que el objeto protege sus invariantes."
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "Ordena el ciclo de vida: (a) constructor valida e inicializa, (b) objeto listo en memoria, (c) new Pedido(id), (d) métodos como Pagar() modifican estado con reglas. Indica el orden correcto.",
  "hints": ["Primero new", "Luego constructor", "Después el objeto está listo", "Por último métodos"],
  "expectedKeywords": ["c", "a", "b", "d"],
  "successMessage": "Correcto. Orden: (c) new Pedido(id) → (a) constructor valida → (b) objeto listo → (d) métodos con reglas."
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "V/F con justificación: Dos instancias de la misma clase comparten el mismo estado automáticamente.",
  "hints": ["Cada new crea un objeto independiente", "p1 y p2 pueden tener Precio distinto"],
  "expectedKeywords": ["falso", "independiente", "new"],
  "successMessage": "Correcto. Es falso: cada new crea un objeto con su propio estado en memoria."
}

---

## Reto integrador

**“Diseña tu primer dominio”**

Un restaurante necesita un sistema simple de pedidos en consola. Debes modelar:

1. Clase `Producto` con `Nombre`, `Precio` y constructor que rechace nombre vacío y precio negativo.
2. Clase `Pedido` con `Id`, `Estado` (inicia en `"Creado"`) y constructor que exija `id` válido.
3. Método `Pagar()` en `Pedido` que solo permita pagar si `Estado == "Creado"` y luego cambie a `"Pagado"`.
4. En `Main`: crea al menos 2 `Producto`, 1 `Pedido` válido, págalo una vez con éxito e intenta pagarlo de nuevo (debe fallar).

**Criterio de éxito:** distingue clase/instancia, constructor deja estado válido, métodos protegen reglas, excepciones con mensajes claros, código compila con `dotnet run`.

**Extensión opcional:** lista `List<Producto>` con 3 ítems del menú e imprime el catálogo antes de crear el pedido.

<!-- code: csharp -->
```csharp
// Esqueleto de partida — completa las clases y las pruebas en Main
using System;
using System.Collections.Generic;

public class Producto
{
    // Nombre, Precio, constructor con validación
}

public class Pedido
{
    // Id, Estado, constructor, Pagar()
}

public class Program
{
    public static void Main()
    {
        // 2+ productos, 1 pedido, pagar dos veces
    }
}
```

<!-- interactive: PracticeExercise -->
{
  "prompt": "Implementa el reto del restaurante: Producto, Pedido con Pagar(), y Main que demuestre pago exitoso y segundo pago fallido. Pega tu código o describe las validaciones del constructor.",
  "hints": [
    "Producto: valida nombre vacío y precio < 0",
    "Pedido: Estado = Creado en constructor",
    "Pagar(): solo si Estado == Creado, luego Pagado",
    "Segunda llamada a Pagar() debe lanzar InvalidOperationException"
  ],
  "expectedKeywords": ["Producto", "Pedido", "Pagar", "Creado", "Pagado"],
  "successMessage": "Excelente. Has integrado clase, instancia, constructor y métodos que protegen reglas de negocio."
}

---

## Cierre

Has completado la introducción a los fundamentos de POO en C#. Los conceptos de esta lección son la base del track POO: sin distinguir clase de instancia, sin constructor que garantice estado válido y sin métodos que protejan invariantes, será difícil avanzar en encapsulamiento, herencia y polimorfismo.

**Ideas clave para retener:**

- **POO** = objetos con estado + comportamiento; reduce caos cuando hay reglas de negocio.
- **Clase** = molde · **Instancia** = objeto concreto con `new` · **Constructor** = nacimiento en estado válido.
- **private set** + métodos con intención (`Retirar`, `Pagar`) protegen el dominio mejor que setters públicos.
- Cada `new` crea un objeto **independiente**; no asumas estado compartido entre instancias.

**Siguiente paso:** lección `encapsulamiento` — visibilidad de miembros y protección avanzada del estado.

---

## Miniquiz

<!-- interactive: Quiz -->
{
  "questions": [
    {
      "question": "¿Qué define mejor a un objeto en POO?",
      "options": [
        "Solo datos",
        "Datos + comportamiento",
        "Solo funciones",
        "Solo el constructor"
      ],
      "correctIndex": 1,
      "feedback": "Un objeto combina estado (propiedades) y comportamiento (métodos). No es un simple contenedor de datos ni solo funciones sueltas."
    },
    {
      "question": "V/F: En POO, un objeto siempre debe exponer todos sus datos con public set.",
      "options": [
        "Verdadero",
        "Falso"
      ],
      "correctIndex": 1,
      "feedback": "Exponer public set rompe el encapsulamiento. El objeto debe controlar cómo cambia su estado (por ejemplo, private set + métodos validados)."
    },
    {
      "question": "¿Qué keyword crea una instancia en C#?",
      "options": [
        "class",
        "new",
        "using",
        "static"
      ],
      "correctIndex": 1,
      "feedback": "new Producto(...) invoca el constructor y crea un objeto en memoria. class define el molde; no crea instancias."
    },
    {
      "question": "¿Cuándo se ejecuta el constructor?",
      "options": [
        "Al compilar el proyecto",
        "Al crear el objeto con new",
        "Al cerrar la aplicación",
        "Solo si llamas un método Init()"
      ],
      "correctIndex": 1,
      "feedback": "El constructor corre automáticamente en la creación (new). Su rol es dejar el objeto en estado válido desde el inicio."
    },
    {
      "question": "¿Cuál es un beneficio típico de POO bien aplicada?",
      "options": [
        "Menos reglas de negocio",
        "Cambios más localizados y mantenibles",
        "Eliminar la necesidad de validar datos",
        "Evitar usar clases"
      ],
      "correctIndex": 1,
      "feedback": "Agrupar datos y reglas en objetos localiza cambios. POO no elimina validaciones; las concentra donde corresponde."
    }
  ]
}
