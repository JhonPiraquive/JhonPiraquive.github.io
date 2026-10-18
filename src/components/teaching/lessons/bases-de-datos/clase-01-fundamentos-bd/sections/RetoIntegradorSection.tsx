import { ChallengeCard } from "@/components/teaching/ChallengeCard";

export function RetoIntegradorSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Reto integrador: criterio de Andes Tech"}
      </h2>
      <p className="my-4">{"Andes Tech (Medellín) necesita una oferta académica estable, cupos con integridad y fichas con atributos variables según la tipología. El reto consiste en resolver seis puntos:"}</p>
      <ol className="my-4 list-decimal pl-6">
        <li>{"Definir BD y SGBD en el proyecto."}</li>
        <li>{"Elegir motor o motores según la carga de trabajo (cupos frente a ficha flexible)."}</li>
        <li>{"Indicar una GUI y una CLI coherentes con el motor."}</li>
        <li>{"Proponer la tabla Programas y un INSERT válido del nombre largo con tildes."}</li>
        <li>{"Esbozar el ER Programa–Estudiante–Inscripción con sus cardinalidades."}</li>
        <li>{"Explicar en tres líneas el riesgo de confundir la GUI con el motor."}</li>
      </ol>
      <ChallengeCard
        title="Criterio de Andes Tech"
        difficulty="intermedio"
        prompt="Definir BD y SGBD, elegir motores según la carga, indicar GUI y CLI, proponer Programas con un INSERT con tildes, esbozar el ER de inscripciones y explicar el riesgo de confundir GUI con motor."
        acceptanceCriteria={[
          "BD y SGBD diferenciados",
          "Motor justificado por escenario",
          "GUI y CLI nombradas",
          "INSERT con literales correctos",
          "ER con cardinalidades correctas",
          "Riesgo de confundir GUI con motor explicado",
        ]}
        hints={["Cupos e inventario → SQL", "Atributos variables → documentos o diseño por tipo", "N:M → tabla puente"]}
      />
    </section>
  );
}
