---
track: poo
slug: solid-principios
title: "Principios SOLID"
order: 9
prerequisites:
  - diagramas-de-clases
  - polimorfismo
  - abstraccion-clases-abstractas-interfaces
related:
  - modularidad-cohesion-acoplamiento
source_brief: kb/education/pipeline/poo/solid-principios/brief.md
source_legacy: kb/education/sources/clases/poo/09-solid-principios.md
topic_expert: topic-expert-oop-csharp
---

## Objetivos de aprendizaje

Al finalizar la lección, el estudiante podrá:

- **Enunciar** los cinco principios SOLID y su propósito en mantenibilidad y cambio seguro.
- **Identificar** violaciones típicas (God class, `switch`, interfaz hinchada, `new` de concretos) en fragmentos C#.
- **Refactorizar** un anti-ejemplo hacia SRP + interfaces y orquestación mínima.
- **Aplicar** OCP con contrato + nuevas clases (`IEnvio`, `EnvioGratis`) sin modificar cliente.
- **Reconocer** ruptura de LSP y proponer diseño alternativo (`IVolador`); aplicar DIP con inyección por constructor.

## Prerrequisitos

- **Lección `polimorfismo`:** extensión por nuevas implementaciones, cliente estable.
- **Lección `abstraccion-clases-abstractas-interfaces`:** interfaces, inyección por constructor.
- **Lección `herencia`:** sustituibilidad, `override`, preview LSP.
- **Lección `diagramas-de-clases`:** visualizar dependencias y contratos antes de refactor.

## Contenido

### Objetivos del tema

**Sección TSX:** `ObjetivosDelTemaSection`

**SOLID** son cinco principios prácticos para código más fácil de cambiar: menos acoplamiento, más cohesión, contratos claros. Conectan polimorfismo, abstracción y modelado visual del track.

<!-- interactive: Callout -->
{
  "title": "SOLID en una frase",
  "children": "S — un motivo de cambio. O — extender sin editar cliente. L — sustituir sin sorpresas. I — interfaces pequeñas. D — depender de abstracciones."
}

<!-- interactive: CompareTable -->
{
  "headers": ["Letra", "Principio", "Idea clave"],
  "rows": [
    ["S", "Single Responsibility", "Un motivo principal de cambio por clase"],
    ["O", "Open/Closed", "Abierto a extensión, cerrado a modificación del cliente"],
    ["L", "Liskov Substitution", "Derivada sustituye a base sin romper contrato"],
    ["I", "Interface Segregation", "Interfaces pequeñas y específicas por rol"],
    ["D", "Dependency Inversion", "Alto nivel depende de abstracciones, no concretos"]
  ]
}

---

### 1) S — Responsabilidad única (SRP)

**Sección TSX:** `SrpSection`

#### Mapa mental

- Una clase = **un motivo principal de cambio** (un rol coherente).
- SRP ≠ un método — es separar dominio, orquestación e I/O.
- `CreadorPedido` crea; `INotificador` notifica; `OrquestadorPedido` coordina.

#### Anti-ejemplo: PedidoService monolítico

<!-- code: csharp -->
```csharp
// Anti-ejemplo — mezcla crear + notificar
public class PedidoService
{
    public void CrearYNotificar(string emailCliente, decimal total)
    {
        if (total <= 0) throw new ArgumentException("Total inválido");
        Console.WriteLine("Guardando pedido...");
        Console.WriteLine($"Enviando email a {emailCliente}...");
    }
}
```

#### Refactor SRP + orquestación

<!-- code: csharp -->
```csharp
public class CreadorPedido
{
    public void Crear(decimal total)
    {
        if (total <= 0) throw new ArgumentException("Total inválido");
        Console.WriteLine("Guardando pedido...");
    }
}

public interface INotificador
{
    void Enviar(string destino, string mensaje);
}

public class NotificadorEmail : INotificador
{
    public void Enviar(string destino, string mensaje)
        => Console.WriteLine($"Email a {destino}: {mensaje}");
}

public class OrquestadorPedido
{
    private readonly CreadorPedido _creador;
    private readonly INotificador _notificador;

    public OrquestadorPedido(CreadorPedido creador, INotificador notificador)
    {
        _creador = creador;
        _notificador = notificador;
    }

    public void Procesar(string email, decimal total)
    {
        _creador.Crear(total);
        _notificador.Enviar(email, "Pedido registrado");
    }
}
```

#### Flujo de responsabilidades

<!-- interactive: MermaidDiagram -->
{
  "chart": "flowchart LR\n  Orquestador[OrquestadorPedido] --> Creador[CreadorPedido]\n  Orquestador --> Notif[INotificador]\n  Creador --> SoloCrear[Crear pedido]\n  Notif --> SoloNotif[Notificar]"
}

#### Caso real: monolito de pedidos

Un ERP tenía `PedidoService` con 800 líneas: validación, SQL, SMTP y PDF. Cada cambio en plantilla de email rompía tests de impuestos. Separación en `CreadorPedido`, `INotificador`, `IRepositorioPedidos`, `OrquestadorPedido`.

#### Errores comunes

- Clase "hace de todo" — valida, persiste, envía email y genera PDF.
- SRP llevado al extremo — una clase por línea sin motivos de cambio reales.
- Orquestador que vuelve a mezclar reglas, SQL y SMTP.

<!-- interactive: CompareTable -->
{
  "headers": ["Aspecto", "PedidoService monolítico", "Separado SRP + DIP"],
  "rows": [
    ["Motivos de cambio", "Muchos", "Uno por clase"],
    ["Test sin DB", "Difícil", "RepositorioMemoria"],
    ["Cambio de email", "Toca validación", "Solo INotificador"]
  ]
}

---

### 2) O — Abierto/Cerrado (OCP)

**Sección TSX:** `OcpSection`

#### Mapa mental

- **Abierto a extensión** — nuevas clases que implementan contrato.
- **Cerrado a modificación** del cliente — sin `switch` creciente.
- OCP con polimorfismo: `IEnvio` + variantes.

#### Contrato IEnvio

<!-- code: csharp -->
```csharp
public interface IEnvio
{
    decimal Calcular(decimal peso);
}

public class EnvioExpress : IEnvio
{
    public decimal Calcular(decimal peso) => peso * 10;
}

public class EnvioNormal : IEnvio
{
    public decimal Calcular(decimal peso) => peso * 5;
}

public class EnvioGratis : IEnvio
{
    public decimal Calcular(decimal peso) => peso <= 1 ? 0 : 3;
}
```

#### Jerarquía OCP

<!-- interactive: MermaidDiagram -->
{
  "chart": "classDiagram\n  class IEnvio {\n    <<interface>>\n    +Calcular(decimal peso) decimal\n  }\n  IEnvio <|.. EnvioExpress\n  IEnvio <|.. EnvioNormal\n  IEnvio <|.. EnvioGratis"
}

#### OCP al añadir envío

<!-- interactive: StepReveal -->
{
  "title": "Extender sin editar cliente",
  "steps": [
    { "title": "Cliente usa IEnvio", "content": "La calculadora o servicio depende del contrato, no del concreto." },
    { "title": "Existen Express y Normal", "content": "Implementaciones iniciales registradas en composición raíz." },
    { "title": "Nueva clase EnvioGratis", "content": "Se añade archivo/clase que implementa IEnvio." },
    { "title": "Cliente sin cambios", "content": "Solo Main o DI registra la nueva instancia — sin switch." }
  ]
}

#### Caso real: calculadora de envíos

Logística añadía modalidades cada trimestre. `switch(tipo)` duplicado en tres microservicios. Refactor a `IEnvio` + estrategias; nuevos tipos = nueva clase.

#### Errores comunes

- `switch` por tipo en muchos lugares — viola OCP.
- Confundir OCP con "nunca editar código" — se editan implementaciones nuevas, no el cliente estable.

<!-- interactive: PracticeExercise -->
{
  "prompt": "Implementa EnvioGratis : IEnvio (peso ≤ 1 → 0, si no → 3) sin modificar EnvioExpress ni EnvioNormal.",
  "hints": [
    "Nueva clase que implementa Calcular",
    "No tocar clases existentes ni cliente",
    "Registra instancia en Main"
  ],
  "expectedKeywords": ["EnvioGratis", "IEnvio", "Calcular"],
  "successMessage": "Correcto. OCP: extensión por nueva clase, cliente intacto."
}

---

### 3) L — Sustitución de Liskov (LSP)

**Sección TSX:** `LspSection`

#### Mapa mental

- Toda derivada debe **sustituir** a la base sin sorprender al cliente.
- Mismo contrato — sin excepciones nuevas ni significados rotos.
- Herencia forzada que no cumple método base viola LSP.

#### Anti-ejemplo: Ave / Pingüino

<!-- code: csharp -->
```csharp
public class Ave
{
    public virtual void Volar() => Console.WriteLine("Volando");
}

public class Pinguino : Ave
{
    public override void Volar()
        => throw new InvalidOperationException("No puedo volar");
}

// Mejor: IVolador solo para aves que vuelan; Pinguino no implementa Volar
```

#### Ruptura de contrato

<!-- interactive: MermaidDiagram -->
{
  "chart": "flowchart TD\n  Base[Ave.Volar] --> Expect[Cliente espera éxito]\n  Sub[Pinguino.Volar] --> Break[Lanza excepción]"
}

#### Rediseño con IVolador

<!-- code: csharp -->
```csharp
public interface IVolador
{
    void Volar();
}

public class Aguila : IVolador
{
    public void Volar() => Console.WriteLine("Volando alto");
}

public class Pinguino
{
    public void Nadar() => Console.WriteLine("Nadando");
}
```

#### Errores comunes

- Lista de `Ave` con `Volar()` que falla en una derivada — rompe bucle uniforme.
- Override que rompe contrato prometido por la base.
- Ignorar LSP al usar polimorfismo.

<!-- interactive: PracticeExercise -->
{
  "prompt": "¿Qué principio viola Pinguino : Ave con Volar() que lanza? Propón rediseño con IVolador o clases separadas.",
  "hints": [
    "LSP — sustituibilidad",
    "Pingüino no debe prometer Volar si no vuela",
    "IVolador solo para quienes vuelan"
  ],
  "expectedKeywords": ["LSP", "IVolador", "sustituibilidad"],
  "successMessage": "Correcto. LSP exige que la derivada cumpla el contrato de la base sin sorpresas."
}

---

### 4) I — Segregación de interfaces (ISP)

**Sección TSX:** `IspSection`

#### Mapa mental

- Interfaces **pequeñas y específicas** por rol.
- No forzar a implementar métodos que la clase no usa.
- Dividir interfaz "comodín" en contratos enfocados.

#### Anti-patrón: interfaz hinchada

Una `IImpresoraMultiuso` con fax obliga a impresora básica a métodos vacíos o `NotImplementedException`.

#### Interfaces segregadas

<!-- code: csharp -->
```csharp
public interface IImpresora
{
    void Imprimir(string texto);
}

public interface IEscaner
{
    void Escanear();
}

public class ImpresoraBasica : IImpresora
{
    public void Imprimir(string texto) => Console.WriteLine(texto);
}

public class ImpresoraTodoEnUno : IImpresora, IEscaner
{
    public void Imprimir(string texto) => Console.WriteLine(texto);
    public void Escanear() => Console.WriteLine("Escaneando...");
}
```

#### Diagrama ISP

<!-- interactive: MermaidDiagram -->
{
  "chart": "classDiagram\n  class IImpresora {\n    <<interface>>\n    +Imprimir(string texto)\n  }\n  class IEscaner {\n    <<interface>>\n    +Escanear()\n  }\n  IImpresora <|.. ImpresoraBasica\n  IImpresora <|.. ImpresoraTodoEnUno\n  IEscaner <|.. ImpresoraTodoEnUno"
}

#### Errores comunes

- Interfaz gigante "por si acaso".
- Implementaciones con métodos vacíos — señal de ISP violado.
- Confundir ISP con "una interfaz por método".

---

### 5) D — Inversión de dependencias (DIP)

**Sección TSX:** `DipSection`

#### Mapa mental

- Módulos de **alto nivel** dependen de **abstracciones**.
- Detalles (SQL, consola) implementan contratos en el borde.
- Inyección por constructor es patrón habitual.

#### Servicio depende de abstracción

<!-- code: csharp -->
```csharp
public interface IRepositorioUsuarios
{
    void Guardar(string nombre);
}

public class RepositorioSql : IRepositorioUsuarios
{
    public void Guardar(string nombre) { /* SQL simulado */ }
}

public class RepositorioMemoria : IRepositorioUsuarios
{
    private readonly List<string> _usuarios = new();
    public void Guardar(string nombre) => _usuarios.Add(nombre);
}

public class ServicioUsuarios
{
    private readonly IRepositorioUsuarios _repo;

    public ServicioUsuarios(IRepositorioUsuarios repo) => _repo = repo;

    public void Crear(string nombre)
    {
        _repo.Guardar(nombre);
        Console.WriteLine("Usuario creado");
    }
}
```

#### Diagrama DIP

<!-- interactive: MermaidDiagram -->
{
  "chart": "classDiagram\n  class IRepositorioUsuarios {\n    <<interface>>\n    +Guardar(string nombre)\n  }\n  ServicioUsuarios --> IRepositorioUsuarios : depende_de\n  IRepositorioUsuarios <|.. RepositorioSql\n  IRepositorioUsuarios <|.. RepositorioMemoria"
}

#### Errores comunes

- `new RepositorioSql()` dentro del servicio — acoplamiento a infraestructura.
- DIP solo con interfaces vacías — abstracción sin semántica no ayuda.
- Dominio que conoce strings de conexión SQL.

<!-- interactive: PracticeExercise -->
{
  "prompt": "Crea RepositorioMemoria : IRepositorioUsuarios y usa ServicioUsuarios con ella en Main (DIP).",
  "hints": [
    "RepositorioMemoria implementa Guardar",
    "ServicioUsuarios recibe IRepositorioUsuarios por constructor",
    "Main elige RepositorioMemoria — servicio no cambia"
  ],
  "expectedKeywords": ["RepositorioMemoria", "ServicioUsuarios", "Main"],
  "successMessage": "Correcto. DIP: alto nivel depende del contrato; el concreto se elige en el borde."
}

---

### Resumen

**Sección TSX:** `ResumenSection`

- **S (SRP):** un motivo de cambio por clase; separar crear, notificar, persistir.
- **O (OCP):** extender con nuevas clases (`IEnvio`); eliminar `switch` en cliente.
- **L (LSP):** derivada sustituible; evitar `Pinguino.Volar()` que lanza.
- **I (ISP):** `IImpresora` + `IEscaner` en lugar de interfaz comodín.
- **D (DIP):** `ServicioUsuarios` → `IRepositorioUsuarios`; concreto en `Main`.
- **Principios interconectados:** polimorfismo habilita OCP y DIP; LSP protege polimorfismo real.
- **Siguiente lección:** `modularidad-cohesion-acoplamiento` — modularidad con checklist práctico.

---

### Comprueba tu comprensión

**Sección TSX:** `CompruebaTuComprensionSection`

Antes del cierre, verifica que puedes aplicar los conceptos de la lección.

<!-- interactive: PracticeExercise -->
{
  "prompt": "Implementa EnvioGratis : IEnvio (peso ≤ 1 → 0, si no → 3) sin modificar EnvioExpress ni EnvioNormal.",
  "hints": [
    "OCP — nueva clase, no editar existentes",
    "Calcular implementa la regla de negocio",
    "Cliente usa IEnvio polimórficamente"
  ],
  "expectedKeywords": ["EnvioGratis", "OCP", "Calcular"],
  "successMessage": "Correcto. Has aplicado OCP con extensión por nueva implementación."
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "¿Qué principio viola Pinguino : Ave con Volar() que lanza? Propón rediseño con IVolador o clases separadas.",
  "hints": [
    "Liskov Substitution Principle",
    "Cliente con List<Ave> espera Volar exitoso",
    "Separar capacidades por interfaz o modelo"
  ],
  "expectedKeywords": ["LSP", "Liskov", "IVolador"],
  "successMessage": "Correcto. LSP protege sustituibilidad en jerarquías polimórficas."
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "Identifica en PedidoService monolítico qué principios viola (al menos SRP y DIP) y nombra dos clases del refactor.",
  "hints": [
    "Mezcla crear y notificar — SRP",
    "Sin abstracción de persistencia o notificación — DIP",
    "CreadorPedido e INotificador del refactor"
  ],
  "expectedKeywords": ["SRP", "DIP", "CreadorPedido", "INotificador"],
  "successMessage": "Correcto. El monolito concentra motivos de cambio y depende de detalles concretos."
}

---

## Reto integrador

**Sección TSX:** `RetoIntegradorSection`

**"Tienda refactorizada con SOLID"**

Partir de un mini-monolito y llegar a diseño alineado a los cinco principios.

**Código inicial:** clase `TiendaMonolito` que calcula total con descuento, guarda pedido en consola, envía notificación y elige envío con `switch(tipo)`.

**Parte A — SRP**

1. Extraer `CalculadoraTotal`, `AplicadorDescuento`, `CreadorPedido`, `NotificadorConsola` (o `INotificador`).
2. `OrquestadorTienda` solo coordina; sin reglas de negocio mezcladas con formato de salida.

**Parte B — OCP + ISP**

3. `IEnvio` con `EnvioNormal` y `EnvioExpress`; eliminar `switch` de tipo de envío.
4. `INotificador` pequeña; no incluir métodos de impresión o reporte en la misma interfaz.

**Parte C — LSP + DIP**

5. Si hay jerarquía de productos, asegurar que ninguna derivada rompa `CalcularPrecio()` del contrato base.
6. `IRepositorioPedidos` inyectado en orquestador; `RepositorioConsola` y `RepositorioMemoria` intercambiables en `Main`.

**Parte D — Diagrama y extensión**

7. Diagrama Mermaid con dependencias (dominio → abstracciones ← infra).
8. Añadir `EnvioGratis` y `NotificadorSms` **sin** editar `OrquestadorTienda` (solo composición en `Main`).

**Criterio de éxito:** compila; sin `switch` por tipo de envío en orquestador; clases con un rol claro; nueva estrategia de envío/notificación por nueva clase; diagrama coherente con código.

<!-- interactive: CodeChallenge -->
{
  "title": "Elimina el switch de envío",
  "template": "// En OrquestadorTienda, reemplaza switch por:\nvar costo = ___.Calcular(peso);",
  "blanks": [
    { "id": "b1", "answer": "_envio", "hint": "Campo readonly de tipo IEnvio inyectado por constructor" }
  ]
}

---

## Cierre

**Sección TSX:** `CierreSection`

Has completado el estudio de los principios SOLID en C#. Son la brújula para convertir POO y polimorfismo en diseño mantenible.

**Ideas clave para retener:**

- **SRP** — un motivo de cambio; no una clase "Dios".
- **OCP** — nuevas clases, cliente estable; aliado del polimorfismo.
- **LSP** — sustituibilidad sin sorpresas en herencia.
- **ISP** — contratos pequeños por rol.
- **DIP** — abstracciones en el centro; concretos en el borde.

**Siguiente paso:** lección `modularidad-cohesion-acoplamiento` — integrar SOLID en módulos con alta cohesión y bajo acoplamiento.

---

## Miniquiz

**Sección TSX:** `MiniquizFinalSection`

<!-- interactive: Quiz -->
{
  "questions": [
    {
      "question": "¿Qué principio se rompe más cuando una clase hace de todo?",
      "options": ["SRP", "ISP", "DIP", "Ninguno"],
      "correctIndex": 0,
      "feedback": "SRP pide un motivo principal de cambio por clase."
    },
    {
      "question": "¿Qué principio ayuda a agregar un nuevo método de envío sin tocar el cliente?",
      "options": ["LSP", "OCP", "ISP", "SRP"],
      "correctIndex": 1,
      "feedback": "OCP favorece extensión con nuevas clases que implementan el contrato."
    },
    {
      "question": "V/F: ISP prefiere interfaces pequeñas y específicas por rol.",
      "options": ["Verdadero", "Falso"],
      "correctIndex": 0,
      "feedback": "Evita que clases implementen métodos que no necesitan."
    },
    {
      "question": "V/F: DIP recomienda que la lógica de negocio instancie directamente RepositorioSql.",
      "options": ["Verdadero", "Falso"],
      "correctIndex": 1,
      "feedback": "Alto nivel debe depender de abstracciones; el concreto se elige en el borde."
    },
    {
      "question": "Si una subclase lanza excepción en un método que la base promete cumplir, ¿qué principio suele violarse?",
      "options": ["OCP", "LSP", "ISP", "SRP"],
      "correctIndex": 1,
      "feedback": "LSP exige sustituibilidad sin sorprender al cliente polimórfico."
    }
  ]
}

---

## SEO (sugerencias)

- **seoTitle:** Principios SOLID en C#: SRP, OCP, LSP, ISP y DIP | POO
- **seoDescription:** Domina SOLID en C# con ejemplos de PedidoService, IEnvio, LSP con Pingüino, ISP en impresoras y DIP con repositorios. Refactoriza hacia diseño mantenible.
