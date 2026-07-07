---
track: poo
slug: modularidad-cohesion-acoplamiento
title: "Modularidad, Cohesión y Acoplamiento"
order: 10
prerequisites:
  - solid-principios
  - diagramas-de-clases
related: []
source_brief: kb/education/pipeline/poo/modularidad-cohesion-acoplamiento/brief.md
source_legacy: kb/education/sources/clases/poo/10-modularidad-cohesion-acoplamiento.md
topic_expert: topic-expert-oop-csharp
---

## Objetivos de aprendizaje

Al finalizar la lección, el estudiante podrá:

- **Definir** modularidad, cohesión y acoplamiento y su relación con SOLID y POO.
- **Identificar** baja cohesión (`Utilidades` mezclada) y alto acoplamiento (`new` de concretos en dominio).
- **Proponer** división en módulos/clases con nombres de dominio y 2–3 interfaces de frontera.
- **Implementar** intercambio de implementación (`Memoria`/`Sql`, `Pdf`/`Html`) sin modificar servicio de aplicación.
- **Aplicar** el checklist práctico (SRP, OCP, DIP, ISP, cohesión, acoplamiento) a un mini-sistema mezclado.

## Prerrequisitos

- **Lección `solid-principios`:** SRP, OCP, LSP, ISP, DIP como base del checklist.
- **Lección `diagramas-de-clases`:** diagramar dependencias entre módulos.
- **Lección `abstraccion-clases-abstractas-interfaces`:** contratos e inyección.
- **Lección `polimorfismo`:** variantes intercambiables bajo un contrato.

## Contenido

### Objetivos del tema

**Sección TSX:** `ObjetivosDelTemaSection`

**Modularidad**, **cohesión** y **acoplamiento** son los tres pilares que integran todo el track POO: fundamentos, relaciones, abstracción, polimorfismo, SOLID y modelado visual en criterios de diseño mantenible.

<!-- interactive: Callout -->
{
  "title": "Objetivo de diseño",
  "children": "Alta cohesión dentro del módulo + bajo acoplamiento entre módulos. SOLID y POO son medios para llegar ahí."
}

<!-- interactive: CompareTable -->
{
  "headers": ["Concepto", "Pregunta clave", "Ideal"],
  "rows": [
    ["Modularidad", "¿Tiene límites y API claros?", "Módulos con propósito y fronteras"],
    ["Cohesión", "¿Las partes trabajan al mismo objetivo?", "Alta — una idea por clase"],
    ["Acoplamiento", "¿Cuánto depende A de B?", "Bajo — contratos, no concretos"]
  ]
}

---

### 1) Modularidad

**Sección TSX:** `ModularidadSection`

#### Mapa mental

- Organizar el sistema en **módulos** con propósito claro, API definida y límites.
- Módulo ≠ carpeta vacía — requiere dependencias controladas.
- API pública (`IRepositorioPedidos`) oculta detalles (`RepositorioSql`).

#### Qué es

**Modularidad** divide el sistema en piezas intercambiables. El dominio expone contratos; la infraestructura implementa. Cambiar `RepositorioPedidosMemoria` por `RepositorioPedidosSql` sin tocar `ServicioPedidos` es modularidad + DIP.

#### Ejemplo C#: dominio separado de infraestructura

<!-- code: csharp -->
```csharp
public interface IRepositorioPedidos
{
    void Guardar(string pedidoId);
}

public class ServicioPedidos
{
    private readonly IRepositorioPedidos _repo;

    public ServicioPedidos(IRepositorioPedidos repo) => _repo = repo;

    public void Crear(string pedidoId) => _repo.Guardar(pedidoId);
}

public class RepositorioPedidosMemoria : IRepositorioPedidos
{
    private readonly List<string> _pedidos = new();
    public void Guardar(string pedidoId) => _pedidos.Add(pedidoId);
}

public class RepositorioPedidosSql : IRepositorioPedidos
{
    public void Guardar(string pedidoId)
        => Console.WriteLine($"SQL: INSERT pedido {pedidoId}");
}
```

#### Módulos dominio ↔ infra

<!-- interactive: MermaidDiagram -->
{
  "chart": "flowchart LR\n  Dominio[ModuloDominio\nServicioPedidos] -->|contrato| Repo[IRepositorioPedidos]\n  Infra[ModuloInfraestructura] -->|implementa| Repo\n  Infra --> Sql[RepositorioPedidosSql]\n  Infra --> Mem[RepositorioPedidosMemoria]"
}

#### Cambio de repositorio paso a paso

<!-- interactive: StepReveal -->
{
  "title": "Sustituir implementación sin tocar dominio",
  "steps": [
    { "title": "ServicioPedidos depende de IRepositorioPedidos", "content": "El dominio solo conoce el contrato, no SQL ni memoria." },
    { "title": "Main usa RepositorioPedidosMemoria", "content": "Composición raíz elige implementación para desarrollo o tests." },
    { "title": "Se cambia a RepositorioPedidosSql en Main", "content": "Solo el borde de la aplicación cambia la instancia concreta." },
    { "title": "ServicioPedidos sin modificaciones", "content": "Modularidad real: cambio aislado gracias al contrato." }
  ]
}

#### Caso real: migración de persistencia

Un equipo sustituyó almacenamiento en memoria por SQL en producción cambiando solo la línea de composición en `Main`. `ServicioPedidos` y tests de dominio permanecieron intactos.

#### Errores comunes

- Muchas carpetas sin límites — `Services/`, `Helpers/` que todo importa todo.
- Módulo que filtra detalles — strings de conexión SQL en dominio.
- Refactor cosmético — mover archivos sin interfaces ni responsabilidades claras.

---

### 2) Cohesión

**Sección TSX:** `CohesionSection`

#### Mapa mental

- **Cohesión:** qué tan relacionadas están las responsabilidades **dentro** de una clase o módulo.
- Alta cohesión = un objetivo común por clase.
- Clase `Utilidades` = anti-patrón de baja cohesión.

#### Baja cohesión → alta cohesión

<!-- code: csharp -->
```csharp
// Anti-ejemplo — baja cohesión
public class Utilidades
{
    public string FormatearNombre(string nombre) => nombre.Trim().ToUpperInvariant();
    public decimal CalcularImpuesto(decimal valor) => valor * 0.19m;
    public void EnviarEmail(string destino) { }
}

// Mejora — alta cohesión
public class FormateoTexto
{
    public string FormatearNombre(string nombre) => nombre.Trim().ToUpperInvariant();
}

public class CalculadoraImpuestos
{
    public decimal Calcular(decimal valor) => valor * 0.19m;
}

public class NotificadorEmail
{
    public void Enviar(string destino) => Console.WriteLine($"Email a {destino}");
}
```

#### Split Utilidades

<!-- interactive: MermaidDiagram -->
{
  "chart": "flowchart TD\n  Baja[Utilidades\nbaja cohesión] --> Mezcla[Formateo + Impuestos + Email]\n  Alta1[FormateoTexto] --> T[Solo texto]\n  Alta2[CalculadoraImpuestos] --> I[Solo impuestos]\n  Alta3[NotificadorEmail] --> N[Solo notificación]"
}

#### Caso real: split de Utilidades en equipo paralelo

Cuatro desarrolladores en el mismo `Utilidades.cs` — conflictos de merge diarios. Refactor a `FormateoTexto`, `CalculadoraImpuestos`, `NotificadorEmail` con diagrama Mermaid acordado en PR.

#### Errores comunes

- Utils como vertedero — cada función suelta va a `Utilidades`.
- Cohesión confundida con "pocas líneas" — 200 líneas cohesas pueden ser mejor que cinco clases arbitrarias.
- Clase dios con formateo, impuestos, logs y SMTP.

<!-- interactive: PracticeExercise -->
{
  "prompt": "Lista 3 responsabilidades de Utilidades y propón 3 clases con alta cohesión que las reemplacen.",
  "hints": [
    "FormatearNombre → FormateoTexto",
    "CalcularImpuesto → CalculadoraImpuestos",
    "EnviarEmail → NotificadorEmail"
  ],
  "expectedKeywords": ["FormateoTexto", "CalculadoraImpuestos", "NotificadorEmail"],
  "successMessage": "Correcto. Cada clase con un objetivo claro — alta cohesión."
}

---

### 3) Acoplamiento

**Sección TSX:** `AcoplamientoSection`

#### Mapa mental

- **Acoplamiento:** fuerza de dependencia **entre** módulos o clases.
- Se busca **bajo acoplamiento** — cambiar piezas sin efecto dominó.
- Acoplamiento cero es imposible; el objetivo es bajo acoplamiento útil.

#### Alto acoplamiento → bajo acoplamiento

<!-- code: csharp -->
```csharp
// Alto acoplamiento
public class ReporteServiceAltoAcoplamiento
{
    private readonly PdfGenerator _pdf = new();
    public void Generar() => _pdf.CrearPdf();
}

public class PdfGenerator
{
    public void CrearPdf() => Console.WriteLine("PDF");
}

// Bajo acoplamiento
public interface IReporteRenderer
{
    void Render();
}

public class PdfRenderer : IReporteRenderer
{
    public void Render() => Console.WriteLine("PDF");
}

public class HtmlRenderer : IReporteRenderer
{
    public void Render() => Console.WriteLine("<html>...</html>");
}

public class ReporteService
{
    private readonly IReporteRenderer _renderer;
    public ReporteService(IReporteRenderer renderer) => _renderer = renderer;
    public void Generar() => _renderer.Render();
}
```

#### Diagrama acoplamiento reportes

<!-- interactive: MermaidDiagram -->
{
  "chart": "classDiagram\n  class IReporteRenderer {\n    <<interface>>\n    +Render()\n  }\n  ReporteService --> IReporteRenderer\n  IReporteRenderer <|.. PdfRenderer\n  IReporteRenderer <|.. HtmlRenderer"
}

#### Comparación cohesión y acoplamiento

<!-- interactive: CompareTable -->
{
  "headers": ["Métrica", "Malo", "Bueno"],
  "rows": [
    ["Cohesión", "Utilidades mezclada", "CalculadoraImpuestos solo impuestos"],
    ["Acoplamiento", "new PdfGenerator() en servicio", "IReporteRenderer inyectado"],
    ["Modularidad", "Todo importa todo", "Dominio → contrato ← infra"]
  ]
}

#### Caso real: migración PDF a HTML

Legal exigió versión HTML accesible. Con `IReporteRenderer`, solo se añadió `HtmlRenderer` y se cambió composición en `Main` — `ReporteService` intacto.

#### Errores comunes

- `new PdfGenerator()` dentro de lógica de negocio.
- Tests acoplados a infra real — sin interfaces, pruebas requieren DB o red.
- Ignorar diagrama al modularizar — se reintroduce acoplamiento circular.

<!-- interactive: PracticeExercise -->
{
  "prompt": "Añade HtmlRenderer : IReporteRenderer y cambia solo la composición en Main. Verifica que ReporteService no cambia.",
  "hints": [
    "HtmlRenderer implementa Render con salida HTML",
    "ReporteService ya recibe IReporteRenderer por constructor",
    "Solo Main cambia new PdfRenderer() por new HtmlRenderer()"
  ],
  "expectedKeywords": ["HtmlRenderer", "Main", "ReporteService"],
  "successMessage": "Correcto. Bajo acoplamiento: cambio de formato solo en el borde."
}

---

### 4) Checklist práctico de diseño

**Sección TSX:** `ChecklistDisenoSection`

#### Mapa mental

- Checklist integra SOLID + cohesión + acoplamiento + modularidad.
- Aplicar antes de merge o al revisar código mezclado.
- Cierre del track: criterios para diseño mantenible.

#### Checklist (recorrer por ítem)

<!-- interactive: StepReveal -->
{
  "title": "Checklist antes de dar por bueno un diseño",
  "steps": [
    { "title": "SRP — un motivo de cambio", "content": "¿Cada clase tiene un rol claro? ¿Hay God class o Utilidades mezclada?" },
    { "title": "OCP — extensión sin editar cliente", "content": "¿Nuevas variantes son nuevas clases bajo contrato? ¿Hay switch por tipo en cliente?" },
    { "title": "LSP — sustituibilidad", "content": "¿Toda derivada cumple el contrato de la base sin excepciones sorpresa?" },
    { "title": "ISP — interfaces pequeñas", "content": "¿Las interfaces fuerzan métodos innecesarios?" },
    { "title": "DIP — abstracciones en el centro", "content": "¿El dominio evita new de Sql/Pdf/Smtp? ¿Inyección por constructor?" },
    { "title": "Cohesión y acoplamiento", "content": "¿Alta cohesión por clase? ¿Bajo acoplamiento entre módulos vía contratos?" }
  ]
}

#### Composición en Main (borde de la aplicación)

<!-- code: csharp -->
```csharp
IReporteRenderer renderer = new HtmlRenderer();
var reportes = new ReporteService(renderer);
reportes.Generar();

var repo = new RepositorioPedidosMemoria();
var pedidos = new ServicioPedidos(repo);
pedidos.Crear("PED-001");
```

#### Síntesis del track POO completo

<!-- interactive: MermaidDiagram -->
{
  "chart": "flowchart TD\n  Fund[Fundamentos POO] --> Enc[Encapsulamiento]\n  Enc --> Her[Herencia]\n  Her --> Rel[Asociación Agregación Composición]\n  Rel --> Abs[Abstracción Interfaces]\n  Abs --> Pol[Polimorfismo]\n  Pol --> Ovr[Override y Overload]\n  Ovr --> Dia[Diagramas UML]\n  Dia --> Sol[SOLID]\n  Sol --> Mod[Modularidad Cohesión Acoplamiento]"
}

#### Errores comunes al usar el checklist

- Marcar cumplimiento sin evidencia en código o diagrama.
- Refactor solo cosmético — carpetas nuevas sin contratos.
- Olvidar actualizar diagrama tras cambiar dependencias.

---

### Resumen

**Sección TSX:** `ResumenSection`

- **Modularidad:** piezas con límites, API y dependencias controladas — no solo carpetas.
- **Cohesión:** responsabilidades relacionadas dentro de la clase — evitar `Utilidades` mezclada.
- **Acoplamiento:** pocas dependencias fuertes entre módulos — contratos e inyección.
- **Checklist:** SRP, OCP, LSP, ISP, DIP + cohesión + acoplamiento.
- **Track POO completo:** de clases y encapsulamiento a diseño mantenible con SOLID y módulos.
- **Esta es la lección final del track POO** — aplica el checklist en proyectos reales.

---

### Comprueba tu comprensión

**Sección TSX:** `CompruebaTuComprensionSection`

Antes del cierre, verifica que puedes aplicar los conceptos de la lección.

<!-- interactive: PracticeExercise -->
{
  "prompt": "Crea RepositorioPedidosSql (simulado) y úsalo con ServicioPedidos sin cambiar esa clase.",
  "hints": [
    "RepositorioPedidosSql implementa IRepositorioPedidos",
    "ServicioPedidos recibe contrato por constructor",
    "Solo Main cambia la instancia concreta"
  ],
  "expectedKeywords": ["RepositorioPedidosSql", "ServicioPedidos", "IRepositorioPedidos"],
  "successMessage": "Correcto. Modularidad + DIP: infra intercambiable en el borde."
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "Lista 3 responsabilidades de Utilidades y propón 3 clases con alta cohesión que las reemplacen.",
  "hints": [
    "Una responsabilidad por clase de dominio",
    "Nombres que describen el rol",
    "Sin mezclar formateo con impuestos"
  ],
  "expectedKeywords": ["FormateoTexto", "CalculadoraImpuestos", "NotificadorEmail", "cohesión"],
  "successMessage": "Correcto. Alta cohesión: cada clase un objetivo."
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "Recorre el checklist en un fragmento con new PdfGenerator() dentro de ReporteService. ¿Qué ítems fallan y cómo los corriges?",
  "hints": [
    "DIP y acoplamiento — depende de concreto",
    "Introducir IReporteRenderer",
    "Inyectar por constructor; elegir renderer en Main"
  ],
  "expectedKeywords": ["DIP", "acoplamiento", "IReporteRenderer", "inyección"],
  "successMessage": "Correcto. El checklist detecta acoplamiento alto y guía el refactor."
}

---

## Reto integrador

**Sección TSX:** `RetoIntegradorSection`

**"Reorganiza el mini-sistema de compras"**

Un solo archivo mezcla: calcular total, aplicar descuento, guardar pedido, enviar notificación, generar reporte.

**Parte A — Análisis**

1. Identifica 5 responsabilidades mezcladas en el código inicial.
2. Marca cuáles son dominio vs infraestructura.

**Parte B — Diseño modular**

3. Propón 4–6 clases/módulos con nombres claros (`CalculadoraTotal`, `AplicadorDescuento`, etc.).
4. Define 2–3 interfaces (`IRepositorioPedidos`, `INotificador`, `IReporteRenderer`).
5. Diagrama Mermaid con flechas: dominio **no** debe depender de concretos de infra.

**Parte C — Implementación C#**

6. Implementa servicios con **alta cohesión** (una idea por clase).
7. `OrquestadorCompra` coordina; inyección por constructor.
8. `Main` elige `RepositorioPedidosMemoria`, `NotificadorConsola`, `PdfRenderer` o `HtmlRenderer`.

**Parte D — Checklist y cierre track**

9. Recorre checklist: SRP, OCP (¿nuevo descuento sin editar orquestador?), DIP, cohesión, acoplamiento — marca cumplimiento por ítem.
10. Párrafo final: cómo esta lección conecta con polimorfismo, SOLID y diagramas del track.

**Criterio de éxito:** dominio sin `new` de Sql/Pdf/Smtp; diagrama alineado con código; intercambio de renderer o repositorio solo en `Main`; checklist documentado.

#### Dependencias objetivo del reto

<!-- interactive: MermaidDiagram -->
{
  "chart": "flowchart TD\n  Orq[OrquestadorCompra] --> Calc[CalculadoraTotal]\n  Orq --> Desc[AplicadorDescuento]\n  Orq --> Repo[IRepositorioPedidos]\n  Orq --> Notif[INotificador]\n  Orq --> Rep[IReporteRenderer]\n  Repo <|.. RepoMem[RepositorioMemoria]\n  Notif <|.. NotifConsola[NotificadorConsola]"
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "Documenta el checklist del reto (Parte D): marca ✓ o ✗ en SRP, OCP, DIP, cohesión y acoplamiento con una frase de evidencia por ítem.",
  "hints": [
    "SRP — ¿cada clase un rol?",
    "OCP — ¿nuevo descuento sin editar orquestador?",
    "DIP — ¿dominio sin new de infra?",
    "Cohesión/acoplamiento — ¿Utilidades eliminada?"
  ],
  "expectedKeywords": ["checklist", "SRP", "DIP", "cohesión", "acoplamiento"],
  "successMessage": "Excelente. Has cerrado el track POO con criterios de diseño verificables."
}

---

## Cierre

**Sección TSX:** `CierreSection`

Has completado el track de **Programación Orientada a Objetos en C#**. Esta lección integra todo lo aprendido en criterios prácticos de diseño mantenible.

**Ideas clave para retener:**

- **Modularidad** — límites, API, dependencias controladas.
- **Alta cohesión** — un objetivo por clase; evitar `Utilidades` cajón de sastre.
- **Bajo acoplamiento** — contratos e inyección; concretos en `Main`.
- **Checklist** — SRP, OCP, LSP, ISP, DIP + cohesión + acoplamiento antes de merge.

**Recorrido del track:**

Fundamentos → encapsulamiento → herencia → relaciones → abstracción → polimorfismo → override/overload → diagramas → SOLID → **modularidad, cohesión y acoplamiento**.

**Siguiente paso:** aplica el checklist en tus proyectos. Revisa diagramas, separa módulos y sustituye `Utilidades` y `switch` por contratos polimórficos.

---

## Miniquiz

**Sección TSX:** `MiniquizFinalSection`

<!-- interactive: Quiz -->
{
  "questions": [
    {
      "question": "V/F: Modularidad significa solo crear muchas carpetas en el proyecto.",
      "options": ["Verdadero", "Falso"],
      "correctIndex": 1,
      "feedback": "Requiere límites claros, API y dependencias controladas, no solo estructura."
    },
    {
      "question": "¿Qué ayuda más a la modularidad?",
      "options": [
        "Interfaces y límites claros entre módulos",
        "Importar cualquier clase desde cualquier archivo",
        "Una sola clase Utilidades para todo",
        "Eliminar todas las interfaces"
      ],
      "correctIndex": 0,
      "feedback": "Los contratos definen qué expone cada módulo al resto."
    },
    {
      "question": "V/F: Alta cohesión suele mejorar legibilidad y mantenimiento.",
      "options": ["Verdadero", "Falso"],
      "correctIndex": 0,
      "feedback": "Elementos de la clase trabajan hacia el mismo objetivo."
    },
    {
      "question": "V/F: Usar new PdfGenerator() dentro de la lógica de negocio suele aumentar el acoplamiento.",
      "options": ["Verdadero", "Falso"],
      "correctIndex": 0,
      "feedback": "El dominio queda atado a un detalle de implementación difícil de sustituir."
    },
    {
      "question": "¿Qué suele reducir el acoplamiento entre módulos?",
      "options": [
        "Depender de interfaces en lugar de clases concretas",
        "Referenciar directamente clases de infraestructura en el dominio",
        "Centralizar todo en Utilidades",
        "Evitar diagramas de dependencias"
      ],
      "correctIndex": 0,
      "feedback": "DIP y contratos permiten cambiar implementaciones en el borde."
    }
  ]
}

---

## SEO (sugerencias)

- **seoTitle:** Modularidad, cohesión y acoplamiento en C# | Cierre track POO
- **seoDescription:** Integra SOLID con modularidad, alta cohesión y bajo acoplamiento. Checklist práctico, IReporteRenderer, split de Utilidades y reto final del track POO en C#.
