import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function RetoIntegradorSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Reto integrador: reservas coworking"}
      </h2>
      <p className="my-4 font-semibold">{"Propón el stack frontend de una app de reservas de coworking"}</p>
      <p className="my-4">
        {
          "Requisitos: web responsive, app móvil futura (misma API), SEO en página de sedes, equipo de 4 devs (2 conocen React, 1 Angular, 1 junior), lanzamiento en 4 meses."
        }
      </p>
      <ol className="my-4 list-decimal pl-6">
        <li>{"Justifica si el frontend es SPA, SSR o híbrido y qué meta-framework usarías."}</li>
        <li>{"Elige el framework principal aplicando el árbol de decisión y la tabla de criterios."}</li>
        <li>
          {
            "Escribe un componente TarjetaSede en el framework elegido: props nombre, ciudad, cupos, evento al reservar."
          }
        </li>
        <li>{"Muestra cómo ese componente consumiría GET /api/v1/sedes con manejo de loading y error."}</li>
        <li>
          {
            "Lista dos errores que evitarías (lógica de negocio solo en cliente, SPA sin SEO, framework incompatible con el equipo)."
          }
        </li>
      </ol>
      <p className="my-4 text-sm text-[var(--color-neutral-mid)]">
        {
          "Criterio de éxito: decisión fundamentada en criterios reales, componente con props/eventos, fetch con estados, separación clara frontend/backend."
        }
      </p>
      <CodeFiddle
        language="javascript"
        title="Componente TarjetaSede (JSX)"
        code={`function TarjetaSede({ nombre, ciudad, cupos, onReservar }) {
  return (
    <article className="tarjeta-sede">
      <h3>{nombre}</h3>
      <p>{ciudad} — {cupos} cupos</p>
      <button onClick={() => onReservar(nombre)}>Reservar</button>
    </article>
  );
}`}
      />
      <PracticeExercise
        prompt="Implementa el reto de coworking: elige React+Next.js (justifica), escribe fetch con loading/error para GET /api/v1/sedes y lista dos errores a evitar."
        hints={[
          "SSR híbrido para SEO en sedes",
          "Equipo con 2 devs React",
          "Estados: loading, error, data",
          "Evitar Angular con junior sin TS",
        ]}
        expectedKeywords={["Next.js", "SSR", "loading", "error", "fetch"]}
        successMessage="Excelente. Decisión fundamentada en equipo, SEO y plazo con componente y consumo de API bien estructurado."
        rows={6}
      />
    </section>
  );
}
