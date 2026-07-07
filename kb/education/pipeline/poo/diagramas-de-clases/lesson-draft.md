---
track: poo
slug: diagramas-de-clases
title: "Diagramas de Clases"
order: 8
prerequisites:
  - override-y-sobrecarga
  - asociacion-agregacion-composicion
related:
  - solid-principios
source_brief: kb/education/pipeline/poo/diagramas-de-clases/brief.md
source_legacy: kb/education/sources/clases/poo/08-diagramas-de-clases.md
topic_expert: topic-expert-oop-csharp
---

## Objetivos de aprendizaje

Al finalizar la lección, el estudiante podrá:

- **Explicar** para qué sirve un diagrama de clases y qué **no** representa (comportamiento dinámico detallado).
- **Dibujar** en Mermaid clases con atributos y métodos, herencia (`<|--`) e implementación de interfaz (`<|..`).
- **Distinguir** asociación, agregación (`o--`) y composición (`*--`) con justificación de ciclo de vida.
- **Modelar** un mini-dominio (tienda/pedidos) con cardinalidades y relación a código C# equivalente.
- **Detectar** en un diagrama señales de mal diseño (clases sobrecargadas, jerarquías profundas).

## Prerrequisitos

- **Lección `asociacion-agregacion-composicion`:** asociación, agregación, composición en POO.
- **Lección `override-y-sobrecarga`:** herencia y métodos en jerarquías (reflejados en diagrama).
- **Lección `abstraccion-clases-abstractas-interfaces`:** interfaces y abstractas en UML.
- **Lección `polimorfismo`:** `IPasarelaPago` y variantes como caso recurrente.

## Contenido

### Objetivos del tema

**Sección TSX:** `ObjetivosDelTemaSection`

Un **diagrama de clases UML** es el plano del modelo: clases, atributos, métodos y relaciones. No describe algoritmos paso a paso ni orden de ejecución — eso es otro tipo de diagrama.

<!-- interactive: Callout -->
{
  "title": "Estructura, no secuencia",
  "children": "El diagrama de clases muestra el mapa estático del dominio. Alinea al equipo antes de codificar y detecta acoplamiento temprano."
}

<!-- interactive: MermaidDiagram -->
{
  "chart": "flowchart LR\n  UML[Diagrama UML] -->|guía| CSharp[Clases C#]\n  UML -->|comunica| Equipo[Equipo dev]\n  CSharp -->|implementa| Dominio[Dominio real]"
}

---

### 1) Elementos básicos del diagrama

**Sección TSX:** `ElementosBasicosSection`

#### Mapa mental

- **Compartimentos UML:** nombre, atributos, métodos.
- En Mermaid `classDiagram` se modelan en el cuerpo de la clase.
- Un diagrama por módulo o caso de uso — evitar el "mapa del universo".

#### Qué representa una clase en el diagrama

Cada caja expone la **interfaz pública** del dominio: qué datos guarda y qué operaciones ofrece. Los detalles de framework o logs no suelen aparecer.

#### Diagrama Mermaid — Producto

<!-- interactive: MermaidDiagram -->
{
  "chart": "classDiagram\n  class Producto {\n    +string Nombre\n    +decimal Precio\n    +Producto(string nombre, decimal precio)\n    +AplicarDescuento(decimal porcentaje)\n  }"
}

#### Correspondencia diagrama ↔ C# (mínimo)

<!-- code: csharp -->
```csharp
public class Producto
{
    public string Nombre { get; }
    public decimal Precio { get; private set; }

    public Producto(string nombre, decimal precio)
    {
        Nombre = nombre;
        Precio = precio;
    }

    public void AplicarDescuento(decimal porcentaje)
    {
        if (porcentaje < 0 || porcentaje > 100)
            throw new ArgumentException("Porcentaje inválido");
        Precio -= Precio * (porcentaje / 100m);
    }
}
```

#### De diagrama a C# paso a paso

<!-- interactive: StepReveal -->
{
  "title": "Leer un diagrama de clase",
  "steps": [
    { "title": "Nombre de la clase", "content": "La caja superior identifica el tipo del dominio (`Producto`)." },
    { "title": "Atributos", "content": "Datos que persiste el objeto (`Nombre`, `Precio`)." },
    { "title": "Métodos", "content": "Comportamiento público (`AplicarDescuento`)." },
    { "title": "Mapeo a C#", "content": "Cada miembro del diagrama tiene equivalente en la clase C#." }
  ]
}

#### Errores comunes

- Saturar la caja con detalles de implementación irrelevantes.
- Diagrama gigante sin foco — nadie lo mantiene.
- Dibujar solo al final sin haber pensado el diseño.

---

### 2) Herencia e interfaces en el diagrama

**Sección TSX:** `HerenciaInterfacesDiagramaSection`

#### Mapa mental

- **Herencia:** `Base <|-- Derivada` — triángulo hacia la base.
- **Interfaz:** `<<interface>>` + `Interface <|.. ClaseImplementa`.
- **Clase abstracta:** `<<abstract>>` cuando no se instancia directamente.

#### Notificación abstracta + derivadas

<!-- interactive: MermaidDiagram -->
{
  "chart": "classDiagram\n  class Notificacion {\n    <<abstract>>\n    +Enviar(string mensaje)\n  }\n  Notificacion <|-- NotificacionEmail\n  Notificacion <|-- NotificacionSms"
}

#### Interfaz y implementaciones (pasarelas)

<!-- interactive: MermaidDiagram -->
{
  "chart": "classDiagram\n  class IPasarelaPago {\n    <<interface>>\n    +Cobrar(decimal monto)\n  }\n  IPasarelaPago <|.. PasarelaTarjeta\n  IPasarelaPago <|.. PasarelaTransferencia"
}

#### Señales en el diagrama

- `<|--` para herencia de clase — **no** para interfaz.
- `<|..` (línea punteada) para **implementación** de interfaz.
- `<<abstract>>` y `<<interface>>` estereotipos UML en Mermaid.

#### Errores comunes

- Herencia vs implementación invertidas — interfaz requiere `<|..`.
- Confundir diagrama de clases con diagrama de secuencia.
- Jerarquías profundas sin necesidad de dominio.

<!-- interactive: PracticeExercise -->
{
  "prompt": "Añade al diagrama de Producto la clase abstracta Notificacion con NotificacionEmail y NotificacionSms. Usa estereotipos y herencia correctos en Mermaid.",
  "hints": [
    "Notificacion lleva <<abstract>>",
    "Herencia de clase usa <|--",
    "NotificacionEmail y NotificacionSms heredan de Notificacion"
  ],
  "expectedKeywords": ["abstract", "<|--", "NotificacionEmail", "NotificacionSms"],
  "successMessage": "Correcto. Has modelado jerarquía abstracta con sintaxis Mermaid válida."
}

---

### 3) Relaciones: asociación, agregación y composición

**Sección TSX:** `RelacionesDiagramaSection`

#### Mapa mental

- **Asociación** (`-->`): clases relacionadas sin propiedad fuerte.
- **Agregación** (`o--`): parte puede existir fuera del todo.
- **Composición** (`*--`): ciclo de vida ligado — parte muere con el todo.
- **Cardinalidad:** `1`, `0..*`, `1..*` en los extremos.

#### Comparación de relaciones UML

<!-- interactive: CompareTable -->
{
  "headers": ["Relación", "Símbolo Mermaid", "Ciclo de vida", "Ejemplo típico"],
  "rows": [
    ["Asociación", "-->", "Independientes", "Cliente → Pedido"],
    ["Agregación", "o--", "Parte puede existir sola", "Equipo o-- Jugador"],
    ["Composición", "*--", "Parte muere con el todo", "Pedido *-- LineaPedido"]
  ]
}

#### Relaciones recordatorio

<!-- interactive: MermaidDiagram -->
{
  "chart": "classDiagram\n  Equipo o-- Jugador\n  Pedido *-- LineaPedido\n  Doctor --> Paciente : atiende"
}

#### Composición Pedido — LineaPedido

<!-- interactive: MermaidDiagram -->
{
  "chart": "classDiagram\n  Pedido *-- \"1..*\" LineaPedido : compone\n  class Pedido {\n    +string Id\n    +Total() decimal\n    +AgregarLinea(string productoId, int cantidad)\n  }\n  class LineaPedido {\n    +string ProductoId\n    +int Cantidad\n    +decimal PrecioUnitario\n    +Subtotal() decimal\n  }"
}

#### Caso real: onboarding tienda online

Sin diagrama, un dev asumió que `Producto` pertenece al `Pedido` por composición y borró catálogo al cancelar pedidos. El diagrama aclaró: `Pedido *-- LineaPedido` (composición), `LineaPedido --> Producto` (referencia al catálogo).

#### Errores comunes

- Composición donde hay agregación (`Equipo`/`Jugador`).
- Asociación tratada como composición.
- Omitir cardinalidad — deja ambiguo el modelo.

<!-- interactive: PracticeExercise -->
{
  "prompt": "Para Doctor y Paciente en una consulta, ¿asociación, agregación o composición? Argumenta ciclo de vida en 2–3 frases.",
  "hints": [
    "El paciente existe sin esa consulta específica",
    "No es composición — el paciente no muere con la consulta",
    "Asociación simple con flecha suele bastar"
  ],
  "expectedKeywords": ["asociación", "ciclo de vida", "independiente"],
  "successMessage": "Correcto. Doctor y Paciente se relacionan sin propiedad fuerte de ciclo de vida."
}

---

### 4) Caso integrado: tienda de pedidos

**Sección TSX:** `CasoIntegradoTiendaSection`

#### Mapa mental

- Modelo completo: `Cliente`, `Pedido`, `LineaPedido`, `Producto`.
- Cardinalidades explícitas en cada relación.
- Señal de diseño: clase con 15 métodos de dominios distintos — preview SRP.

#### Caso integrado tienda (modelo completo)

<!-- interactive: MermaidDiagram -->
{
  "chart": "classDiagram\n  class Cliente {\n    +string Id\n    +string Nombre\n  }\n  class Producto {\n    +string Id\n    +string Nombre\n    +decimal Precio\n  }\n  class LineaPedido {\n    +string ProductoId\n    +int Cantidad\n    +decimal PrecioUnitario\n    +Subtotal() decimal\n  }\n  class Pedido {\n    +string Id\n    +EstadoPedido Estado\n    +Total() decimal\n    +AgregarLinea(string productoId, int cantidad)\n  }\n  Cliente \"1\" --> \"0..*\" Pedido : realiza\n  Pedido *-- \"1..*\" LineaPedido : compone\n  LineaPedido --> Producto : referencia"
}

#### De diagrama a diseño C# paso a paso

<!-- interactive: StepReveal -->
{
  "title": "Caso tienda: de UML a C#",
  "steps": [
    { "title": "Caja Pedido con métodos", "content": "Total() y AgregarLinea definen comportamiento del agregado raíz." },
    { "title": "Flecha composición a LineaPedido", "content": "Las líneas se crean y destruyen con el pedido — `*--` con cardinalidad 1..*." },
    { "title": "Referencia a Producto", "content": "LineaPedido apunta al catálogo; no borra Producto al eliminar línea." },
    { "title": "Validar cardinalidad", "content": "Cliente 1 realiza 0..* Pedidos — un cliente puede tener varios pedidos o ninguno." }
  ]
}

#### Caso real: refactor de checkout

Un equipo de e-commerce dibujó en 90 minutos `Cliente`, `Pedido`, `LineaPedido`, `Producto`, `IPasarelaPago` y implementaciones. Cardinalidad y composición acordadas antes de tocar código.

#### Errores comunes

- Clase "Dios" en el diagrama — `PedidoService` con 15 métodos de dominios distintos.
- Desincronía diagrama-código — acordar quién actualiza el Mermaid.
- Incluir todo el sistema en una sola figura.

<!-- interactive: PracticeExercise -->
{
  "prompt": "Dibuja en Mermaid Usuario, Carrito y Producto. Conecta carrito con varios productos. Justifica agregación vs composición.",
  "hints": [
    "Carrito o-- Producto si el producto existe en catálogo sin carrito",
    "Cardinalidad 0..* en productos del carrito",
    "No uses composición si Producto es catálogo compartido"
  ],
  "expectedKeywords": ["Carrito", "Producto", "agregación", "o--"],
  "successMessage": "Correcto. Agregación refleja que el producto del catálogo sobrevive al carrito."
}

---

### Resumen

**Sección TSX:** `ResumenSection`

- **Diagrama de clases:** estructura estática — clases, atributos, métodos, relaciones.
- **Herencia** `<|--`; **implementación** `<|..`; estereotipos `<<abstract>>`, `<<interface>>`.
- **Relaciones:** asociación `-->`, agregación `o--`, composición `*--` + cardinalidad.
- **Mermaid** reutilizable en el curso; mismo modelo mapeable a C#.
- **Foco:** diagramas pequeños, actualizados, alineados al código.
- **Siguiente lección:** `solid-principios` — reglas para clases sobrecargadas detectadas en diagramas.

#### Checklist símbolos Mermaid

<!-- interactive: CompareTable -->
{
  "headers": ["Concepto", "Sintaxis Mermaid"],
  "rows": [
    ["Herencia", "Base <|-- Derivada"],
    ["Implementación interfaz", "IContrato <|.. Clase"],
    ["Asociación", "A --> B"],
    ["Agregación", "Todo o-- Parte"],
    ["Composición", "Todo *-- Parte"],
    ["Cardinalidad", "\"1\" --> \"0..*\""]
  ]
}

---

### Comprueba tu comprensión

**Sección TSX:** `CompruebaTuComprensionSection`

Antes del cierre, verifica que puedes aplicar los conceptos de la lección.

<!-- interactive: PracticeExercise -->
{
  "prompt": "Dibuja en Mermaid Usuario, Carrito y Producto; conecta carrito con varios productos. Justifica agregación vs composición.",
  "hints": [
    "Producto del catálogo no desaparece al vaciar carrito",
    "Rombo vacío o-- para agregación",
    "Incluye cardinalidad en la relación"
  ],
  "expectedKeywords": ["Mermaid", "agregación", "Producto", "Carrito"],
  "successMessage": "Correcto. Has modelado relación con ciclo de vida independiente del catálogo."
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "Añade AplicarDescuento(decimal porcentaje) al diagrama de Producto y la jerarquía Notificacion abstracta con Email y Sms.",
  "hints": [
    "Método en cuerpo de Producto en classDiagram",
    "<<abstract>> en Notificacion",
    "Notificacion <|-- NotificacionEmail"
  ],
  "expectedKeywords": ["AplicarDescuento", "abstract", "NotificacionEmail"],
  "successMessage": "Correcto. Diagrama actualizado con método y jerarquía abstracta."
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "Señala en el caso tienda una clase que podría violar SRP si se le añaden más de cinco responsabilidades distintas. ¿Cuál y por qué?",
  "hints": [
    "PedidoService o clase que mezcla dominios",
    "Muchos métodos de áreas distintas en una caja",
    "Preview lección SOLID — un motivo de cambio"
  ],
  "expectedKeywords": ["SRP", "responsabilidad", "Pedido"],
  "successMessage": "Correcto. Diagramas con clases sobrecargadas anticipan refactor SOLID."
}

---

## Reto integrador

**Sección TSX:** `RetoIntegradorSection`

**"Modelo de pedidos: de UML a diseño C#"**

Actividad de diseño (diagrama + breve mapeo a clases); implementación mínima opcional en consola.

**Parte A — Diagrama base**

1. Dibuja `Cliente`, `Producto`, `LineaPedido`, `Pedido` con atributos esenciales y métodos `Total()`, `AgregarLinea`, `Subtotal()`.
2. Relación `Cliente` → `Pedido` con cardinalidad `1` a `0..*`.
3. `Pedido` → `LineaPedido` como **composición** `1..*`.
4. `LineaPedido` → `Producto` como referencia (no composición al catálogo).

**Parte B — Estado y decisión de diseño**

5. Añade `Estado` a `Pedido` (`Creado`, `Pagado`, `Enviado`).
6. En párrafo corto: ¿`enum EstadoPedido` o clase `EstadoPedido`? Justifica para este dominio.

**Parte C — Contrato de pago**

7. Incluye `<<interface>> IPasarelaPago` con al menos dos implementaciones en el mismo diagrama.
8. Asocia `Pedido` o un `Checkout` con `IPasarelaPago` (flecha a interfaz, no a concreto).

**Parte D — Validación**

9. Lista tres reglas del diagrama que deben cumplirse al escribir C# (ej. no borrar `Producto` al eliminar línea).
10. Señala una clase que podría violar SRP si se le añaden más de cinco responsabilidades — preview lección 9.

**Criterio de éxito:** Mermaid válido; símbolos correctos; cardinalidades presentes; justificación escrita de composición vs agregación; coherencia con lecciones previas del track.

<!-- interactive: MermaidDiagram -->
{
  "chart": "classDiagram\n  class Checkout {\n    +Pagar(decimal monto)\n  }\n  class IPasarelaPago {\n    <<interface>>\n    +Cobrar(decimal monto)\n  }\n  Checkout --> IPasarelaPago : usa\n  IPasarelaPago <|.. PasarelaTarjeta\n  IPasarelaPago <|.. PasarelaTransferencia"
}

---

## Cierre

**Sección TSX:** `CierreSection`

Has completado el modelado visual con diagramas de clases. El diagrama es el plano compartido entre equipo y código — no sustituye C#, pero reduce malentendidos antes del sprint.

**Ideas clave para retener:**

- **Estructura estática** — no secuencia ni logs de runtime.
- **Símbolos Mermaid** — herencia, interfaz, asociación, agregación, composición, cardinalidad.
- **Diagramas focalizados** — un módulo por figura, actualizados con el código.
- **Señales de alerta** — clases "Dios", relaciones mal elegidas, desincronía.

**Siguiente paso:** lección `solid-principios` — convertir señales del diagrama en reglas de diseño mantenible.

---

## Miniquiz

**Sección TSX:** `MiniquizFinalSection`

<!-- interactive: Quiz -->
{
  "questions": [
    {
      "question": "V/F: Un diagrama de clases muestra principalmente algoritmos y orden de ejecución.",
      "options": ["Verdadero", "Falso"],
      "correctIndex": 1,
      "feedback": "Muestra estructura estática: clases, atributos, métodos y relaciones."
    },
    {
      "question": "¿Qué muestra mejor un diagrama de clases?",
      "options": [
        "Estructura y relaciones entre clases",
        "Logs de ejecución en producción",
        "Uso de memoria en runtime",
        "Configuración de CI/CD"
      ],
      "correctIndex": 0,
      "feedback": "Es el mapa del modelo de dominio, no el trazo de ejecución."
    },
    {
      "question": "¿Qué notación Mermaid indica implementación de interfaz?",
      "options": ["<|--", "<|..", "*--", "o--"],
      "correctIndex": 1,
      "feedback": "Línea punteada hacia la interfaz (<|..) para implementación."
    },
    {
      "question": "¿Qué relación suele usarse entre Pedido y LineaPedido?",
      "options": [
        "Composición (*--)",
        "Asociación simple sin cardinalidad",
        "Herencia (<|--)",
        "Ninguna relación"
      ],
      "correctIndex": 0,
      "feedback": "Las líneas suelen crearse y destruirse con el pedido."
    },
    {
      "question": "V/F: Un mismo modelo puede representarse en UML (Mermaid) y traducirse a clases C#.",
      "options": ["Verdadero", "Falso"],
      "correctIndex": 0,
      "feedback": "El diagrama es vista del diseño; C# es la implementación alineada al modelo."
    }
  ]
}

---

## SEO (sugerencias)

- **seoTitle:** Diagramas de clases UML en Mermaid: herencia y relaciones | POO
- **seoDescription:** Aprende diagramas de clases con Mermaid: herencia, interfaces, asociación, agregación y composición. Modela tienda de pedidos y alinea UML con C#.
