import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { CodeBlock } from "@/components/teaching/CodeBlock";

export function DiagramaMermaidSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Diagrama (Mermaid)"}</h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"CIA+A aplicado a una compra"}</h3>
      <MermaidDiagram chart={`flowchart TD
  U[Usuario] -->|Login| Auth[Autenticacion_(A)]
  Auth -->|Token_sesion| Req[Request_compra]
  Req -->|Autorizacion| Perm[Autorizacion_(A)]
  Perm -->|Validacion_calculo| Val[Validacion_(I)]
  Val -->|Procesar| Core[Logica_negocio]
  Core -->|Guardar| DB[(BD)]
  Core -->|Logging| Log[Logs_(A_I)]
  Core -->|Rate_limit| RL[Limites_(D)]
  DB -->|Respuesta| Res[Respuesta]`} />
    </section>
  );
}
