import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function CicloDelAgenteSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Qué es un agente</h2>
      <p className="my-4">
        Un <strong>agente</strong> es un sistema que recibe un objetivo y trabaja para cumplirlo en varios pasos,
        decidiendo por su cuenta qué herramienta usar en cada paso. La diferencia con un asistente conversacional es de
        autonomía: el asistente responde una pregunta; el agente ejecuta una tarea.
      </p>
      <p className="my-4">
        Una definición práctica cabe en una fórmula: <strong>agente = modelo + herramientas + ciclo + objetivo</strong>.
        El ciclo repite tres momentos hasta que el objetivo se cumple o hasta que se alcanza un límite.
      </p>
      <MermaidDiagram
        title="El ciclo de un agente"
        description="Ciclo: recibir el objetivo, pensar qué hacer, actuar usando una herramienta, observar el resultado y volver a pensar; cuando el objetivo se cumple, entregar el resultado."
        chart={`flowchart TD
  O["Objetivo"] --> P["Pensar<br/>¿qué paso sigue?"]
  P --> A["Actuar<br/>usar una herramienta"]
  A --> R["Observar<br/>leer el resultado"]
  R --> D{"¿Objetivo cumplido?"}
  D -- No --> P
  D -- Sí --> F["Entregar resultado"]`}
      />
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Un agente en veinte líneas</h3>
      <p className="my-4">
        El siguiente código simula un agente completo. El «modelo» es una función falsa que decide según lo que ya
        observó, pero el ciclo es el mismo que usan los agentes reales. Se puede pegar en la consola del navegador y
        modificar el objetivo para ver cómo cambia el recorrido.
      </p>
      <CodeFiddle
        language="javascript"
        title="Simulación de un agente con dos herramientas"
        code={`// Herramientas: el programa las ejecuta
const herramientas = {
  buscarPrecio: ({ producto }) => ({ café: 12000, panela: 8500 })[producto] ?? null,
  calcular: ({ a, b }) => a * b,
};

// "Modelo" falso: decide el siguiente paso según lo observado
function modeloFalso(objetivo, observaciones) {
  if (observaciones.length === 0) {
    return { herramienta: "buscarPrecio", datos: { producto: objetivo.producto } };
  }
  if (observaciones.length === 1) {
    return { herramienta: "calcular", datos: { a: observaciones[0], b: objetivo.cantidad } };
  }
  return { respuestaFinal: \`El total es \${observaciones[1]} pesos.\` };
}

function ejecutarAgente(objetivo, maxPasos = 5) {
  const observaciones = [];
  for (let paso = 1; paso <= maxPasos; paso++) {
    const decision = modeloFalso(objetivo, observaciones);           // pensar
    if (decision.respuestaFinal) return decision.respuestaFinal;     // terminar
    const resultado = herramientas[decision.herramienta](decision.datos); // actuar
    console.log(\`Paso \${paso}: \${decision.herramienta}\`, decision.datos, "→", resultado);
    observaciones.push(resultado);                                    // observar
  }
  return "Se alcanzó el límite de pasos sin terminar.";
}

console.log(ejecutarAgente({ producto: "café", cantidad: 3 }));`}
      />
      <Callout title="Por qué el límite de pasos" variant="callout-tip">
        <p className="mb-0">
          Un agente real puede equivocarse y entrar en un ciclo sin fin, repitiendo la misma acción. Los programas que
          ejecutan agentes siempre ponen límites: número máximo de pasos, de tokens, de tiempo o de dinero. Es la misma
          razón por la que un bucle <code>while</code> necesita una condición de salida.
        </p>
      </Callout>
    </section>
  );
}
