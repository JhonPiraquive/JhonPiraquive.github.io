import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function RetoIntegradorSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Reto integrador: catálogo de cursos PBPEW"}
      </h2>
      <p className="my-4 font-semibold">{"“Catálogo de cursos PBPEW”"}</p>
      <p className="my-4">{"Partiendo del array de objetos literales:"}</p>
      <CodeFiddle
        language="javascript"
        title="Punto de partida — array cursos"
        code={`const cursos = [
  { id: 1, nombre: "JS básico", horas: 20, activo: true },
  { id: 2, nombre: "DOM", horas: 15, activo: false },
  { id: 3, nombre: "Fetch", horas: 10, activo: true },
];`}
      />
      <ol className="my-4 list-decimal pl-6">
        <li>{"Usa "}<strong>{".filter"}</strong>{" para obtener `activos` (solo `activo === true`)."}</li>
        <li>
          {"Usa "}
          <strong>{".map"}</strong>
          {" en `activos` para crear `resumen` con strings `\"ID-1: JS básico (20h)\"` (plantilla con `id`, `nombre`, `horas`)."}
        </li>
        <li>
          {"Calcula `totalHorasActivas` con "}
          <strong>{".reduce"}</strong>
          {" sobre `activos`."}
        </li>
        <li>
          {"Serializa `activos` con "}
          <strong>{"`JSON.stringify`"}</strong>
          {" y simula envío a API; parsea de vuelta con "}
          <strong>{"`JSON.parse`"}</strong>
          {" en `importados`."}
        </li>
        <li>
          {"Usa "}
          <strong>{"destructuración:"}</strong>
          {" `const { nombre, horas } = importados[0]` y muestra en consola."}
        </li>
        <li>
          {"Demuestra "}
          <strong>{"referencia:"}</strong>
          {" asigna `const ref = cursos`, muta `ref[0].nombre` y comprueba que `cursos[0].nombre` cambió; luego crea `const clon = cursos.map(c => ({ ...c }))`, muta `clon[0].nombre` y verifica que `cursos[0].nombre` no cambia."}
        </li>
      </ol>
      <p className="my-4 text-sm text-[var(--color-neutral-mid)]">
        {
          "Criterio de éxito: callbacks correctos en map/filter/reduce, sin confundir `forEach` con `map`, JSON válido round-trip, comprensión de referencia vs copia superficial con spread."
        }
      </p>
      <PracticeExercise
        prompt="Implementa el reto 'Catálogo de cursos PBPEW': filter de activos, map a resumen, reduce de horas, round-trip JSON y demostración de referencia vs clon con spread. Pega tu código o describe los resultados clave."
        hints={[
          "activos = cursos.filter(c => c.activo === true)",
          "resumen = activos.map(c => `ID-${c.id}: ${c.nombre} (${c.horas}h)`)",
          "totalHorasActivas = activos.reduce((acc, c) => acc + c.horas, 0)",
          "const importados = JSON.parse(JSON.stringify(activos))",
          "clon = cursos.map(c => ({ ...c })) — mutar clon[0] no afecta cursos[0]",
        ]}
        expectedKeywords={["filter", "map", "reduce", "JSON", "spread"]}
        successMessage="Excelente. Has integrado arrays, callbacks, JSON y referencia vs copia superficial en un flujo realista de catálogo."
        rows={10}
      />
    </section>
  );
}
