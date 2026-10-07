import { ClayCard } from "@/components/clay";
import type { CSSProperties } from "react";

const RESULTADOS = [
  "Identifica los diferentes navegadores y los factores que afectan su velocidad",
  "Configura herramientas del navegador (cookies, caché, seguridad y privacidad)",
  "Reconoce tecnologías y herramientas de los servicios de Internet",
  "Configura dominio y registros DNS, publica un sitio y administra correo por rol",
  "Administra de forma remota un equipo (SSH, documentación y reconocimiento del entorno)",
  "Configura transferencia de archivos por FTP/SFTP con integridad y administración de directorios",
  "Despliega contenedores Docker básicos y documenta evidencias del entorno",
  "Diagnostica y corrige incidencias en servicios web con metodología e informe técnico",
  "Crea un ambiente de virtualización para instalar y probar aplicaciones",
] as const;

const CARD_STYLES: CSSProperties[] = [
  {
    background: "linear-gradient(145deg, rgba(0, 194, 255, 0.32), rgba(0, 194, 255, 0.14))",
    borderLeft: "4px solid #00c2ff",
  },
  {
    background: "linear-gradient(145deg, rgba(107, 78, 255, 0.32), rgba(107, 78, 255, 0.14))",
    borderLeft: "4px solid #6b4eff",
  },
  {
    background: "linear-gradient(145deg, rgba(10, 37, 64, 0.22), rgba(10, 37, 64, 0.1))",
    borderLeft: "4px solid #0a2540",
  },
];

export function ResultadosAprendizajeSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Resultados de aprendizaje"}</h2>
      <div className="not-prose my-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {RESULTADOS.map((text, index) => (
          <ClayCard
            key={text}
            className="flex h-full flex-col"
            style={CARD_STYLES[index % CARD_STYLES.length]}
          >
            <p className="text-base text-[var(--color-neutral-dark)]">{text}</p>
          </ClayCard>
        ))}
      </div>
    </section>
  );
}
