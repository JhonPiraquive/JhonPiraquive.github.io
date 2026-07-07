import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { StepReveal } from "@/components/teaching/StepReveal";

const PATOS = `interface Pato {
  graznar(): void;
}

interface PatoVolador extends Pato {
  volar(): void;
}

class PatoReal implements PatoVolador {
  graznar(): void { console.log("Cuac!"); }
  volar(): void { console.log("Volando..."); }
}

class PatoDeGoma implements Pato {
  graznar(): void { console.log("Cuac de goma!"); }
  // No implementa volar — no rompe contrato de Pato
}`;

export function LspSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"LSP: subtipos sustituibles sin romper contratos"}
      </h2>
      <p className="my-4">
        {"Un subtipo debe poder sustituir al padre sin romper el contrato que el cliente espera."}
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Patos: volar solo quien puede"}</h3>
      <CodeFiddle language="typescript" title="Pato, PatoVolador y PatoDeGoma" code={PATOS} />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Malas prácticas en el mundo real"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "PatoDeGoma extends Pato con volar() que lanza: el cliente espera volar cualquier Pato."
          }
        </li>
        <li>{"Herencia forzada cuando composición o interfaces segregadas resuelven mejor."}</li>
      </ul>
      <StepReveal
        title="LSP paso a paso"
        steps={[
          {
            title: "Contrato del padre",
            content: "Pato define graznar(); el cliente asume que cualquier Pato puede graznar.",
          },
          {
            title: "Violación",
            content:
              "PatoDeGoma extends Pato con volar() que lanza Error — el cliente que llama volar() se rompe.",
          },
          {
            title: "Corrección",
            content: "PatoVolador extiende Pato; PatoDeGoma solo implementa Pato sin prometer volar.",
          },
          {
            title: "En APIs",
            content:
              "Un MockRepository debe cumplir el mismo contrato que MySQLRepository para tests y producción.",
          },
        ]}
      />
    </section>
  );
}
