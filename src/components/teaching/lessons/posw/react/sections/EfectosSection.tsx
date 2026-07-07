import { Callout } from "@/components/teaching/Callout";
import { CodeChallenge } from "@/components/teaching/CodeChallenge";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { StepReveal } from "@/components/teaching/StepReveal";

export function EfectosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Efectos con useEffect"}</h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"useEffect: ejecuta código tras render (side effects)."}</li>
        <li>{"Array de dependencias: controla cuándo se re-ejecuta el efecto."}</li>
        <li>{"Función de limpieza: se ejecuta antes del siguiente efecto o al desmontar."}</li>
        <li>{"Fetch en React: useEffect + fetch; manejar loading, error y cancelación."}</li>
      </ul>
      <StepReveal
        title="Ciclo de useEffect con dependencia [id]"
        steps={[
          {
            title: "1. Montaje → render inicial",
            content: "React pinta el componente en el DOM por primera vez.",
          },
          {
            title: "2. useEffect ejecuta fetch",
            content: "Tras el render, el efecto llama a la API con el id actual.",
          },
          {
            title: "3. id cambia → limpieza anterior",
            content: "La función de cleanup cancela el fetch pendiente (flag o AbortController).",
          },
          {
            title: "4. Nuevo efecto con id actualizado",
            content: "Se inicia un nuevo fetch con el id correcto.",
          },
          {
            title: "5. Desmontaje → limpieza final",
            content: "Al salir de la ruta, cleanup evita actualizar estado en componente desmontado.",
          },
        ]}
      />
      <MermaidDiagram
        chart={`flowchart LR
  M[Montaje] --> E1[useEffect ejecuta]
  E1 --> R[Re-render si hay cambio estado]
  R --> D{¿Cambió dependencia?}
  D -->|Sí| L[Limpieza anterior]
  L --> E2[Nuevo efecto]
  D -->|No| E1
  U[Desmontaje] --> LF[Limpieza final]`}
      />
      <CodeFiddle
        language="javascript"
        title="Fetch con limpieza"
        code={`import { useState, useEffect } from "react";

function ProductoDetalle({ id }: { id: number }) {
  const [producto, setProducto] = useState<Producto | null>(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    let cancelado = false;
    setCargando(true);

    fetch(\`/api/productos/\${id}\`)
      .then(r => r.json())
      .then(datos => {
        if (!cancelado) {
          setProducto(datos);
          setCargando(false);
        }
      });

    return () => { cancelado = true; };
  }, [id]);

  if (cargando) return <div>Cargando...</div>;
  return <h1>{producto?.nombre}</h1>;
}`}
      />
      <CodeChallenge
        title="Ordena el ciclo de useEffect con [id]"
        template={`1. {{blank1}}
2. {{blank2}}
3. {{blank3}}
4. {{blank4}}`}
        blanks={[
          { id: "blank1", answer: "render inicial", placeholder: "paso a" },
          { id: "blank2", answer: "efecto fetch", placeholder: "paso b" },
          { id: "blank3", answer: "id cambia → limpieza → nuevo efecto", placeholder: "paso c" },
          { id: "blank4", answer: "desmontaje ejecuta limpieza", placeholder: "paso d" },
        ]}
      />
      <Callout title="Equipo híbrido Angular + React">
        {
          "Portal en Angular y app móvil-web en React duplican tipos de Producto manualmente. Decisión: paquete @empresa/api-types generado desde OpenAPI; ambos consumen el mismo contrato REST."
        }
      </Callout>
    </section>
  );
}
