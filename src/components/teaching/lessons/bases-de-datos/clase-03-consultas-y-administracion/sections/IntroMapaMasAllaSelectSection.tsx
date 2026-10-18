import { Callout } from "@/components/teaching/Callout";

export function IntroMapaMasAllaSelectSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Más allá de SELECT"}</h2>
      <p className="my-4">
        {
          "Hasta aquí se han definido esquemas (DDL) y manipulado filas (DML). En producción hace falta limitar quién puede qué, evitar transferencias a medias, proyectar columnas con cuidado y decidir si una regla vive en la aplicación o en el motor."
        }
      </p>
      <p className="my-4">
        {
          "El hilo conductor es la academia «Rutas Digitales» (Cali) y el laboratorio Andes Tech. El administrador crea tablas, carga matrículas, da a la aplicación solo lo necesario y exige que inscripción y cupo se confirmen juntos."
        }
      </p>
      <Callout title="Más allá de SELECT" variant="callout-warning">
        {
          "Permisos, atomicidad y objetos de servidor no son «extras de administrador»: son el freno cuando el SQL falla por error humano o la red cae a mitad de una inscripción."
        }
      </Callout>
    </section>
  );
}
