import type { QuizQuestion } from "@/components/teaching/Quiz";

export const ANALISIS_DISENO_SISTEMAS_QUIZZES: Record<string, QuizQuestion[]> = {
  "clase-01-sistemas-informacion": [
    {
      question: "Según Laudon y Laudon, un sistema de información sirve sobre todo para:",
      options: [
        "Reemplazar a todas las personas de la empresa",
        "Recolectar, procesar, almacenar y distribuir información para decidir y controlar",
        "Guardar únicamente contraseñas",
        "Dibujar diagramas UML",
      ],
      correctIndex: 1,
      feedback: "La definición clásica insiste en componentes que recogen, procesan, almacenan y distribuyen información.",
    },
    {
      question: "El número de orden que el sistema muestra al cliente es:",
      options: ["Entrada", "Proceso", "Salida", "Telecomunicación"],
      correctIndex: 2,
      feedback: "Es el resultado que alguien usa después de procesar los datos capturados.",
    },
    {
      question: "Un reporte para que el gerente decida si contrata más técnicos es un:",
      options: ["TPS", "DSS", "Sistema cerrado", "Sistema determinístico"],
      correctIndex: 1,
      feedback: "El TPS registra la operación. El DSS apoya la decisión con esa información.",
    },
    {
      question: "¿Quién convierte la lista de requisitos en una arquitectura para los desarrolladores?",
      options: ["Usuario final", "Auditor", "Diseñador del sistema", "Personal de operaciones"],
      correctIndex: 2,
      feedback: "El diseñador transforma el análisis en especificaciones. El desarrollador codifica.",
    },
    {
      question: "¿Qué pasaría si un sistema guarda órdenes duplicadas sin que nadie pueda detectarlo?",
      options: [
        "Falla la integridad",
        "Falla solo la generalidad",
        "Pasa a ser un ERP",
        "Se vuelve un sistema cerrado",
      ],
      correctIndex: 0,
      feedback: "Integridad es la confiabilidad y consistencia de los datos. Duplicados silenciosos la rompen.",
    },
  ],
  "clase-02-analisis-y-modelado": [
    {
      question: "El diagrama de casos de uso pertenece al:",
      options: ["Modelo de objetos", "Modelo funcional", "Modelo dinámico", "Modelo en cascada"],
      correctIndex: 1,
      feedback: "El modelo funcional describe qué hace el sistema para el usuario. El de clases es el de objetos.",
    },
    {
      question: "María López, con código C-19, es:",
      options: ["Una clase", "Un objeto o instancia", "Un stakeholder únicamente", "Una fase del ciclo de vida"],
      correctIndex: 1,
      feedback: "La clase es la plantilla Cliente. María, con datos concretos, es un objeto.",
    },
    {
      question: "¿En qué fase se definen entradas, arquitectura e interfaces, todavía sin programar el producto final?",
      options: ["Planificación", "Análisis de requerimientos", "Diseño", "Operación y mantenimiento"],
      correctIndex: 2,
      feedback: "El análisis dice qué se necesita. El diseño formula la solución: arquitectura, interfaces y plan de pruebas.",
    },
    {
      question: "¿Cuándo conviene un enfoque ágil y no una cascada?",
      options: [
        "Cuando todos los requisitos están cerrados y no cambiarán",
        "Cuando los requisitos cambian o no se pueden definir del todo al inicio",
        "Cuando no hay cliente",
        "Cuando el sistema es determinístico",
      ],
      correctIndex: 1,
      feedback: "Ágil entrega incrementos y acepta el cambio. La cascada pide requisitos estables.",
    },
    {
      question: "Decir que la nómina queda fuera del proyecto corresponde al:",
      options: ["Acta de ámbito", "Acta de costo", "Sprint review", "Burndown"],
      correctIndex: 0,
      feedback: "El ámbito delimita qué comprende el proyecto y qué se deja por fuera.",
    },
  ],
  "clase-03-diseno-y-scrum": [
    {
      question: "¿Qué significa 1 a 0..* entre Cliente y OrdenServicio?",
      options: [
        "Una orden tiene muchos clientes",
        "Un cliente puede tener muchas órdenes y cada orden es de un cliente",
        "No hay relación",
        "Cliente hereda de OrdenServicio",
      ],
      correctIndex: 1,
      feedback: "La cardinalidad dice cuántos objetos de un lado se relacionan con el otro.",
    },
    {
      question: "La relación include se usa cuando:",
      options: [
        "El comportamiento es opcional",
        "Un caso siempre incorpora el comportamiento de otro",
        "Dos actores hablan entre sí",
        "Se estima el costo del proyecto",
      ],
      correctIndex: 1,
      feedback: "include es obligatorio y compartido. extend es el comportamiento opcional.",
    },
    {
      question: "«Debe construirse con herramientas libres» es un requisito:",
      options: ["Funcional", "No funcional", "Un actor", "Un sprint"],
      correctIndex: 1,
      feedback: "No dice una función del sistema: dice una restricción de cómo se construye.",
    },
    {
      question: "¿Quién ordena la prioridad del product backlog?",
      options: ["Scrum Master", "Product Owner", "El auditor del sistema", "El personal de operaciones"],
      correctIndex: 1,
      feedback: "El Product Owner representa al cliente y prioriza. El Scrum Master facilita.",
    },
    {
      question: "La frase «Como cliente quiero consultar mi orden para no llamar» es:",
      options: ["Un acta de riesgos", "Una historia de usuario", "Un diagrama de clases", "Un burndown"],
      correctIndex: 1,
      feedback: "Como / quiero / para es el formato de la historia de usuario.",
    },
  ],
};
