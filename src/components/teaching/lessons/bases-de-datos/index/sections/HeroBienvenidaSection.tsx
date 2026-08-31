import { Callout } from "@/components/teaching/Callout";

export function HeroBienvenidaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Bienvenida al módulo"}</h2>
      <p className="my-4">
        {
          "Bienvenido al módulo universitario / tecnólogo (LATAM) Bases de Datos. Este espacio es el hub de orientación del track: aquí entiendes qué aprenderás, lees los objetivos y resultados oficiales del programa, revisas prerrequisitos sugeridos y tomas el primer paso hacia la Clase 01."
        }
      </p>
      <p className="my-4">
        {"No es una lección técnica de SQL ni de instalación: es el mapa de entrada al recorrido."}
      </p>
      <Callout title="Hub, no tutorial" variant="callout-info">
        {
          "Aquí te orientas: lees el mapa del módulo y das el primer paso. La historia de las bases de datos se estudia en la Clase 01; instalación, modelo y consultas llegan más adelante."
        }
      </Callout>
    </section>
  );
}
