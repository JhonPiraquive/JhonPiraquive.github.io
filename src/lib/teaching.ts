import { getAllLessonMetas, type LessonMeta } from "@/lib/teaching-lessons-registry";

export type { LessonMeta };

export async function getAllLessons(): Promise<LessonMeta[]> {
  return getAllLessonMetas();
}

export const TRACKS = [
  {
    id: "pbpew",
    icon: "📗",
    titleEs: "Programación básica para entornos web",
    titleEn: "Basic programming for web environments",
    descEs: "Curso de 3 clases: JavaScript desde cero, DOM, asincronía, fetch y proyectos.",
    descEn: "3-class course: JavaScript from scratch, DOM, async, fetch and projects.",
  },
  {
    id: "poo",
    icon: "🧩",
    titleEs: "Programación Orientada a Objetos",
    titleEn: "Object-Oriented Programming",
    descEs: "Programación Orientada a Objetos (POO) con C#, diagramas y principios SOLID.",
    descEn: "OOP with C#, diagrams and SOLID principles.",
  },
  {
    id: "sea",
    icon: "🛡️",
    titleEs: "Seguridad en Aplicaciones",
    titleEn: "Application Security",
    descEs: "Curso de 3 clases: amenazas, criptografía y comunicación segura, y defensa con gestión del riesgo.",
    descEn: "3-class course: threats, cryptography and secure communication, and defense with risk management.",
  },
  {
    id: "posw",
    icon: "👨‍💻",
    titleEs: "Programación Orientada a Sitios Web",
    titleEn: "Web-Oriented Programming",
    descEs: "Curso de 3 clases: servicios web, APIs, HTTP, React, Angular y arquitectura.",
    descEn: "3-class course: web services, APIs, HTTP, React, Angular and architecture.",
  },
  {
    id: "configuracion-servicios-web",
    icon: "🌐",
    titleEs: "Configuración de Servicios Web",
    titleEn: "Web Services Configuration",
    descEs: "Curso de 3 clases: DNS, hosting, HTTPS, correo, SSH, Docker y VMs.",
    descEn: "4-class course: DNS, hosting, email, HTTPS, SSH, Docker and VMs.",
  },
  {
    id: "configuracion-sistemas-operativos",
    icon: "🖥️",
    titleEs: "Configuración de Sistemas Operativos",
    titleEn: "Operating Systems Configuration",
    descEs: "Arquitectura de hardware, almacenamiento, periféricos, SO y consola.",
    descEn: "Hardware architecture, storage, peripherals, OS and command line.",
  },
  {
    id: "bases-de-datos",
    icon: "🗄️",
    titleEs: "Bases de Datos",
    titleEn: "Databases",
    descEs: "Modelo relacional, SGBD, SQL (DDL/DML) e historia de las bases de datos.",
    descEn: "Relational model, DBMS, SQL (DDL/DML) and database history.",
  },
  {
    id: "analisis-diseno-sistemas",
    icon: "📐",
    titleEs: "Análisis y Diseño de Sistemas de Información",
    titleEn: "Information Systems Analysis and Design",
    descEs: "Tres clases: sistemas de información, análisis/UML y diseño con casos de uso y Scrum.",
    descEn: "Three classes: information systems, analysis/UML, and design with use cases and Scrum.",
  },
  {
    id: "tecnologias-emergentes",
    icon: "🚀",
    titleEs: "Tecnologías Emergentes",
    titleEn: "Emerging Technologies",
    descEs: "Identificar tecnologías emergentes, entender la IA moderna (modelos, agentes, MCP, skills, hooks) y decidir si adoptarlas, con una guía de apoyo en React.",
    descEn: "Identify emerging technologies, understand modern AI (models, agents, MCP, skills, hooks) and decide whether to adopt them, with a React support guide.",
  },
] as const;
