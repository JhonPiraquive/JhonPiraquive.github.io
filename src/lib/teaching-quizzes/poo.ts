import type { QuizQuestion } from "@/components/teaching/Quiz";

export const POO_QUIZZES: Record<string, QuizQuestion[]> = {
  fundamentos: [
    {
      question: "¿Qué define mejor a un objeto en POO?",
      options: [
        "Solo datos",
        "Datos + comportamiento",
        "Solo funciones",
        "Solo el constructor",
      ],
      correctIndex: 1,
      feedback:
        "Un objeto combina estado (propiedades) y comportamiento (métodos). No es un simple contenedor de datos ni solo funciones sueltas.",
    },
    {
      question: "V/F: En POO, un objeto siempre debe exponer todos sus datos con public set.",
      options: ["Verdadero", "Falso"],
      correctIndex: 1,
      feedback:
        "Exponer public set rompe el encapsulamiento. El objeto debe controlar cómo cambia su estado (por ejemplo, private set + métodos validados).",
    },
    {
      question: "¿Qué keyword crea una instancia en C#?",
      options: ["class", "new", "using", "static"],
      correctIndex: 1,
      feedback:
        "new Producto(...) invoca el constructor y crea un objeto en memoria. class define el molde; no crea instancias.",
    },
    {
      question: "¿Cuándo se ejecuta el constructor?",
      options: [
        "Al compilar el proyecto",
        "Al crear el objeto con new",
        "Al cerrar la aplicación",
        "Solo si llamas un método Init()",
      ],
      correctIndex: 1,
      feedback:
        "El constructor corre automáticamente en la creación (new). Su rol es dejar el objeto en estado válido desde el inicio.",
    },
    {
      question: "¿Cuál es un beneficio típico de POO bien aplicada?",
      options: [
        "Menos reglas de negocio",
        "Cambios más localizados y mantenibles",
        "Eliminar la necesidad de validar datos",
        "Evitar usar clases",
      ],
      correctIndex: 1,
      feedback:
        "Agrupar datos y reglas en objetos localiza cambios. POO no elimina validaciones; las concentra donde corresponde.",
    },
  ],
  herencia: [
    {
      question: "¿Herencia representa mejor qué tipo de relación?",
      options: ['"Tiene un"', '"Es un"', '"Usa temporalmente"', '"Es igual a"'],
      correctIndex: 1,
      feedback:
        'Herencia modela especialización: un Carro es un Vehiculo. "Tiene un" corresponde a composición.',
    },
    {
      question: "En C#, ¿qué combinación permite polimorfismo con redefinición de método?",
      options: [
        "Método normal en base + override en hija",
        "virtual en base + override en hija",
        "override en base + virtual en hija",
        "Solo new en hija",
      ],
      correctIndex: 1,
      feedback:
        "La base debe marcar el método como virtual (o abstract); la derivada usa override. new oculta pero no polimorfiza igual.",
    },
    {
      question: "V/F: La herencia se usa solo para evitar duplicar código.",
      options: ["Verdadero", "Falso"],
      correctIndex: 1,
      feedback:
        'Reutilizar código es un beneficio secundario; el criterio principal es una relación "es un" válida y sustituibilidad. Si solo copias código, composición suele ser mejor.',
    },
    {
      question: '"Un celular tiene cámara, GPS y batería." ¿Qué patrón encaja mejor?',
      options: [
        "Herencia múltiple de Camara, Gps, Bateria",
        "Composición / agregación",
        "class Camara : Celular",
        "Solo namespaces",
      ],
      correctIndex: 1,
      feedback:
        "El celular no es una cámara; la incorpora. En C# se modela con campos o interfaces y composición.",
    },
    {
      question:
        'Dado Vehiculo v = new Carro("X"); v.Arrancar(); con Arrancar virtual/override, ¿qué ocurre?',
      options: [
        "Siempre se ejecuta Vehiculo.Arrancar",
        "Se ejecuta Carro.Arrancar (tipo real del objeto)",
        "Error de compilación",
        "Se ejecutan ambos en orden",
      ],
      correctIndex: 1,
      feedback:
        "La variable es de tipo base pero el objeto es Carro; el dispatch en runtime llama al override correcto (polimorfismo).",
    },
  ],
  polimorfismo: [
    {
      question: "V/F: El polimorfismo reduce la necesidad de if por tipo en el cliente.",
      options: ["Verdadero", "Falso"],
      correctIndex: 0,
      feedback:
        "El cliente invoca el contrato; cada implementación responde distinto sin ramas explícitas.",
    },
    {
      question: "¿Qué habilita polimorfismo más comúnmente en C#?",
      options: [
        "Variables globales",
        "Interfaces y clases base abstractas/virtual",
        "Solo structs",
        "Namespaces",
      ],
      correctIndex: 1,
      feedback:
        "Contrato (interfaz o base) + implementaciones concretas permiten dispatch en runtime.",
    },
    {
      question: "V/F: El cliente debe conocer todas las clases concretas para beneficiarse del polimorfismo.",
      options: ["Verdadero", "Falso"],
      correctIndex: 1,
      feedback:
        "El cliente depende del contrato; las concretas se instancian en composición o DI.",
    },
    {
      question: "¿Qué keyword usa la derivada para redefinir un método virtual/abstract de la base?",
      options: ["overload", "override", "extern", "partial"],
      correctIndex: 1,
      feedback: "override reemplaza la implementación de la base con la misma firma.",
    },
    {
      question:
        "Dado var impuestos = new List<Impuesto> { new Iva(), new ImpuestoCero() }; ¿qué afirmación es correcta?",
      options: [
        "No compila porque los tipos son distintos",
        "Compila; el foreach puede llamar Calcular polimórficamente",
        "Solo funciona con interfaces, no con abstractas",
        "Requiere cast a Iva en cada elemento",
      ],
      correctIndex: 1,
      feedback:
        "Lista del tipo base/contrato admite instancias derivadas; Calcular se resuelve por tipo real.",
    },
  ],
  "asociacion-agregacion-composicion": [
    {
      question: "V/F: En asociación siempre hay propiedad fuerte del objeto relacionado.",
      options: ["Verdadero", "Falso"],
      correctIndex: 1,
      feedback:
        "Asociación es uso o colaboración sin adueñarse del ciclo de vida. Propiedad fuerte apunta a composición.",
    },
    {
      question: "¿Qué describe mejor la agregación?",
      options: [
        '"Parte de" con destrucción conjunta obligatoria',
        "Todo agrupa partes que pueden existir sin él",
        "Herencia múltiple",
        "Solo métodos estáticos",
      ],
      correctIndex: 1,
      feedback: "Ejemplo clásico: equipo–jugador; el jugador puede cambiar de equipo.",
    },
    {
      question: "¿Cuál par encaja mejor con composición?",
      options: [
        "Biblioteca–Libro",
        "Pedido–LineaPedido",
        "Doctor–Paciente en una consulta",
        "Equipo–Jugador",
      ],
      correctIndex: 1,
      feedback:
        "La línea pertenece a un pedido específico y el pedido la crea; no tiene sentido compartida como catálogo.",
    },
    {
      question: "V/F: En composición, las partes suelen depender del ciclo de vida del todo.",
      options: ["Verdadero", "Falso"],
      correctIndex: 0,
      feedback: "El todo controla creación y existencia de la parte en el modelo.",
    },
    {
      question:
        "Pedido expone public List<LineaPedido> Lineas { get; set; }. ¿Qué problema principal introduce?",
      options: [
        "Ninguno, es más rápido",
        "Rompe el control del pedido sobre sus líneas (composición débil)",
        "Impide usar foreach",
        "Obliga a usar herencia",
      ],
      correctIndex: 1,
      feedback:
        "Código externo puede mutar o reemplazar líneas sin pasar por reglas del Pedido.",
    },
  ],
  "abstraccion-clases-abstractas-interfaces": [
    {
      question: "V/F: Abstraer significa agregar más detalles de implementación al cliente.",
      options: ["Verdadero", "Falso"],
      correctIndex: 1,
      feedback:
        "Abstraer oculta detalles y expone lo esencial; el cliente opera sobre el contrato.",
    },
    {
      question: "¿Qué es un buen motivo para introducir una abstracción?",
      options: [
        '"Por si acaso" sin segunda implementación',
        "Hay variaciones reales de implementación",
        "Evitar nombres de clase largos",
        "Reemplazar encapsulamiento",
      ],
      correctIndex: 1,
      feedback: "Sin variación real, la abstracción suele ser prematura.",
    },
    {
      question:
        "¿Qué keyword obliga a las derivadas a implementar un método sin cuerpo en la base?",
      options: ["virtual", "abstract", "override", "sealed"],
      correctIndex: 1,
      feedback:
        "abstract en la base fuerza implementación; virtual ofrece implementación por defecto.",
    },
    {
      question:
        'V/F: Puedes crear `new Notificacion("x")` si `Notificacion` es una clase abstracta.',
      options: ["Verdadero", "Falso"],
      correctIndex: 1,
      feedback:
        "Las clases abstractas no se instancian directamente; usas derivadas concretas.",
    },
    {
      question: "¿Cuándo conviene preferir interfaz sobre clase abstracta?",
      options: [
        "Necesitas compartir mucho estado y código en la base",
        "Solo necesitas un contrato de capacidad y posible multi-rol",
        "Nunca; siempre abstracta",
        "Cuando no hay métodos",
      ],
      correctIndex: 1,
      feedback:
        "Interfaz para contrato puro; abstracta cuando hay implementación y estado compartidos.",
    },
  ],
  "diagramas-de-clases": [
    {
      question: "V/F: Un diagrama de clases muestra principalmente algoritmos y orden de ejecución.",
      options: ["Verdadero", "Falso"],
      correctIndex: 1,
      feedback: "Muestra estructura estática: clases, atributos, métodos y relaciones.",
    },
    {
      question: "¿Qué muestra mejor un diagrama de clases?",
      options: [
        "Estructura y relaciones entre clases",
        "Logs de ejecución en producción",
        "Uso de memoria en runtime",
        "Configuración de CI/CD",
      ],
      correctIndex: 0,
      feedback: "Es el mapa del modelo de dominio, no el trazo de ejecución.",
    },
    {
      question: "¿Qué notación Mermaid indica implementación de interfaz?",
      options: ["<|--", "<|..", "*--", "o--"],
      correctIndex: 1,
      feedback: "Línea punteada hacia la interfaz (<|..) para implementación.",
    },
    {
      question: "¿Qué relación suele usarse entre Pedido y LineaPedido?",
      options: [
        "Composición (*--)",
        "Asociación simple sin cardinalidad",
        "Herencia (<|--)",
        "Ninguna relación",
      ],
      correctIndex: 0,
      feedback: "Las líneas suelen crearse y destruirse con el pedido.",
    },
    {
      question: "V/F: Un mismo modelo puede representarse en UML (Mermaid) y traducirse a clases C#.",
      options: ["Verdadero", "Falso"],
      correctIndex: 0,
      feedback: "El diagrama es vista del diseño; C# es la implementación alineada al modelo.",
    },
  ],
  "override-y-sobrecarga": [
    {
      question: "V/F: override funciona sin herencia.",
      options: ["Verdadero", "Falso"],
      correctIndex: 1,
      feedback: "La sobrescritura requiere una clase base y una derivada en jerarquía.",
    },
    {
      question: "V/F: Para poder sobrescribir, la base debe marcar el método como virtual o abstract.",
      options: ["Verdadero", "Falso"],
      correctIndex: 0,
      feedback: "Sin permiso en la base, no hay override polimórfico válido.",
    },
    {
      question: "¿Qué keyword usa la derivada para reemplazar un método virtual de la base?",
      options: ["overload", "override", "overload override", "virtual"],
      correctIndex: 1,
      feedback: "override reemplaza la implementación con la misma firma.",
    },
    {
      question:
        "V/F: La sobrecarga (overload) se resuelve en tiempo de ejecución según el tipo real del objeto.",
      options: ["Verdadero", "Falso"],
      correctIndex: 1,
      feedback:
        "El compilador elige la sobrecarga por nombre y tipos de argumentos en compile time.",
    },
    {
      question:
        "Dado Animal a = new Perro(); con Perro que usa new void Hablar() (no override), ¿qué ocurre al llamar a.Hablar()?",
      options: [
        "Imprime Guau! por polimorfismo",
        "Llama al Hablar de Animal — new no polimorfiza",
        "Error de compilación",
        "Elige overload en runtime",
      ],
      correctIndex: 1,
      feedback: "new oculta el método; con referencia Animal se invoca la versión de la base.",
    },
  ],
  "solid-principios": [
    {
      question: "¿Qué principio se rompe más cuando una clase hace de todo?",
      options: ["SRP", "ISP", "DIP", "Ninguno"],
      correctIndex: 0,
      feedback: "SRP pide un motivo principal de cambio por clase.",
    },
    {
      question: "¿Qué principio ayuda a agregar un nuevo método de envío sin tocar el cliente?",
      options: ["LSP", "OCP", "ISP", "SRP"],
      correctIndex: 1,
      feedback: "OCP favorece extensión con nuevas clases que implementan el contrato.",
    },
    {
      question: "V/F: ISP prefiere interfaces pequeñas y específicas por rol.",
      options: ["Verdadero", "Falso"],
      correctIndex: 0,
      feedback: "Evita que clases implementen métodos que no necesitan.",
    },
    {
      question: "V/F: DIP recomienda que la lógica de negocio instancie directamente RepositorioSql.",
      options: ["Verdadero", "Falso"],
      correctIndex: 1,
      feedback: "Alto nivel debe depender de abstracciones; el concreto se elige en el borde.",
    },
    {
      question:
        "Si una subclase lanza excepción en un método que la base promete cumplir, ¿qué principio suele violarse?",
      options: ["OCP", "LSP", "ISP", "SRP"],
      correctIndex: 1,
      feedback: "LSP exige sustituibilidad sin sorprender al cliente polimórfico.",
    },
  ],
  encapsulamiento: [
    {
      question: "V/F: Encapsular significa esconder todo sin exponer nada al exterior.",
      options: ["Verdadero", "Falso"],
      correctIndex: 1,
      feedback:
        "Encapsular es controlar el acceso: ocultas detalles internos pero expones una interfaz pública segura (métodos y propiedades de lectura).",
    },
    {
      question: "¿Cuál es una señal de buen encapsulamiento en C#?",
      options: [
        "Setters públicos para todos los campos",
        "Métodos que expresan intención del dominio y validan antes de mutar",
        "Campos public para evitar boilerplate",
        "Validar solo en la capa de presentación",
      ],
      correctIndex: 1,
      feedback:
        "Nombres como Retirar y Depositar comunican intención y centralizan reglas. Setters públicos y campos public permiten estados inválidos.",
    },
    {
      question:
        "V/F: El encapsulamiento ayuda a cambiar la implementación interna sin romper a los consumidores del objeto.",
      options: ["Verdadero", "Falso"],
      correctIndex: 0,
      feedback:
        "Si los clientes usan métodos públicos estables en lugar de tocar campos internos, puedes refactorizar por dentro manteniendo el contrato.",
    },
    {
      question: "¿Dónde conviene validar invariantes como Saldo >= 0?",
      options: [
        "Solo en comentarios de documentación",
        "En el constructor y en métodos que cambian el estado",
        "En cualquier capa, cuando te acuerdes",
        "Solo en tests unitarios",
      ],
      correctIndex: 1,
      feedback:
        "Toda mutación de estado debe pasar por puntos que reafirman las reglas. El constructor cubre el nacimiento del objeto; los mutadores cubren cambios posteriores.",
    },
    {
      question:
        "¿Qué patrón C# impide cuenta.Saldo = -100 desde fuera de la clase pero permite leer el saldo?",
      options: [
        "public decimal Saldo { get; set; }",
        "private decimal Saldo { get; set; }",
        "public decimal Saldo { get; private set; }",
        "public decimal GetSaldo() { return _saldo; } sin campo",
      ],
      correctIndex: 2,
      feedback:
        "get público expone lectura; private set restringe escritura a la propia clase. La opción A permite asignación externa; B no permite lectura pública directa.",
    },
  ],
  "modularidad-cohesion-acoplamiento": [
    {
      question: "V/F: Modularidad significa solo crear muchas carpetas en el proyecto.",
      options: ["Verdadero", "Falso"],
      correctIndex: 1,
      feedback: "Requiere límites claros, API y dependencias controladas, no solo estructura.",
    },
    {
      question: "¿Qué ayuda más a la modularidad?",
      options: [
        "Interfaces y límites claros entre módulos",
        "Importar cualquier clase desde cualquier archivo",
        "Una sola clase Utilidades para todo",
        "Eliminar todas las interfaces",
      ],
      correctIndex: 0,
      feedback: "Los contratos definen qué expone cada módulo al resto.",
    },
    {
      question: "V/F: Alta cohesión suele mejorar legibilidad y mantenimiento.",
      options: ["Verdadero", "Falso"],
      correctIndex: 0,
      feedback: "Elementos de la clase trabajan hacia el mismo objetivo.",
    },
    {
      question:
        "V/F: Usar new PdfGenerator() dentro de la lógica de negocio suele aumentar el acoplamiento.",
      options: ["Verdadero", "Falso"],
      correctIndex: 0,
      feedback: "El dominio queda atado a un detalle de implementación difícil de sustituir.",
    },
    {
      question: "¿Qué suele reducir el acoplamiento entre módulos?",
      options: [
        "Depender de interfaces en lugar de clases concretas",
        "Referenciar directamente clases de infraestructura en el dominio",
        "Centralizar todo en Utilidades",
        "Evitar diagramas de dependencias",
      ],
      correctIndex: 0,
      feedback: "DIP y contratos permiten cambiar implementaciones en el borde.",
    },
  ],
};
