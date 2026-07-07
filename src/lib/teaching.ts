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
    descEs: "JavaScript desde cero: DOM, asincronía, fetch y proyectos.",
    descEn: "JavaScript from scratch: DOM, async, fetch and projects.",
  },
  {
    id: "poo",
    icon: "🧩",
    titleEs: "Programación Orientada a Objetos",
    titleEn: "Object-Oriented Programming",
    descEs: "POO con C#, diagramas y principios SOLID.",
    descEn: "OOP with C#, diagrams and SOLID principles.",
  },
  {
    id: "sea",
    icon: "🛡️",
    titleEs: "Seguridad en aplicaciones",
    titleEn: "Application Security",
    descEs: "Amenazas, controles, ISO, JWT y programación segura.",
    descEn: "Threats, controls, ISO, JWT and secure coding.",
  },
  {
    id: "posw",
    icon: "👨‍💻",
    titleEs: "Programación Orientada a Sitios Web",
    titleEn: "Web-Oriented Programming",
    descEs: "Servicios web, APIs, HTTP, React, Angular y arquitectura.",
    descEn: "Web services, APIs, HTTP, React, Angular and architecture.",
  },
  {
    id: "configuracion-servicios-web",
    icon: "🌐",
    titleEs: "Configuración de Servicios Web",
    titleEn: "Web Services Configuration",
    descEs: "Curso de 4 clases: DNS, hosting, correo, HTTPS, SSH, Docker y VMs.",
    descEn: "4-class course: DNS, hosting, email, HTTPS, SSH, Docker and VMs.",
  },
] as const;
