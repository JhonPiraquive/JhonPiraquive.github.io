import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { Callout } from "@/components/teaching/Callout";

const MAPA = `flowchart TD
  A[Mapa DDL DML DCL TCL] --> B[DCL GRANT REVOKE]
  B --> C[TCL y ACID]
  C --> D[Vistas]
  D --> E[UDF PROCEDURE TRIGGER]
  E --> F[Criterio app vs BD]
  F --> G[Práctica + Reto + Quiz]`;

export function IntroMapaMasAllaSelectSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Más allá de SELECT"}
      </h2>
      <p className="my-4">
        {
          "Hasta ahora definiste esquema (DDL) y manipulaste filas (DML). En producción hay que limitar quién puede qué, no dejar medias transferencias, proyectar columnas con cuidado y decidir si una regla vive en la app o en el motor."
        }
      </p>
      <p className="my-4">
        {
          "Hilo: academia “Rutas Digitales” (Cali) / laboratorio Andes Tech. El admin crea tablas, carga matrículas, da a la app solo lo necesario y exige que inscripción + cupo se confirmen juntos."
        }
      </p>
      <figure className="my-6 rounded-lg bg-white p-4">
        <MermaidDiagram
          title="Mapa de la lección — más allá de SELECT"
          description="Progresión desde el mapa de familias SQL hasta práctica y quiz"
          chart={MAPA}
        />
      </figure>
      <Callout title="Más allá de SELECT" variant="callout-warning">
        {
          "Permisos, atomicidad y objetos de servidor no son “extras de admin”: son el freno cuando el SQL falla humano o la red cae a mitad de una inscripción."
        }
      </Callout>
    </section>
  );
}
