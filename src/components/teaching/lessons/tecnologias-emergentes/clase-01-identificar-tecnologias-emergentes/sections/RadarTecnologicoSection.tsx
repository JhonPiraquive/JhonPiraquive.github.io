import { Callout } from "@/components/teaching/Callout";
import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function RadarTecnologicoSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">El radar tecnológico</h2>
      <p className="my-4">
        Un <strong>radar tecnológico</strong> es un mapa que organiza las tecnologías según qué tan recomendable es usarlas.
        Lo popularizó la consultora Thoughtworks, que publica el suyo dos veces al año, y hoy muchas empresas construyen su
        propio radar para que sus equipos sepan qué está aprobado, qué se puede probar y qué conviene evitar.
      </p>
      <p className="my-4">
        Se dibuja como un círculo con anillos concéntricos. Cuanto más cerca del centro, más confianza hay en la
        tecnología. Además, el círculo se divide en cuadrantes por tipo de tecnología: técnicas, herramientas,
        plataformas y lenguajes o frameworks.
      </p>
      <MermaidDiagram
        title="Anillos de un radar tecnológico"
        description="Cuatro anillos anidados, del más externo al centro: resistir, evaluar, probar y adoptar. El centro es donde hay más confianza."
        chart={`flowchart TB
  subgraph R["Resistir: no iniciar nada nuevo"]
    subgraph E["Evaluar: investigar"]
      subgraph P["Probar: usar en algo de bajo riesgo"]
        A(("Adoptar<br/>opción por defecto"))
      end
    end
  end`}
      />
      <CompareTable
        headers={["Anillo", "Significado", "Ejemplo de decisión"]}
        rows={[
          ["Adoptar", "Hay evidencia suficiente; es la opción por defecto para proyectos nuevos.", "Usar TypeScript en los proyectos web nuevos del equipo."],
          ["Probar", "Vale la pena usarla en un proyecto real de bajo riesgo.", "Usar un agente de programación en un proyecto interno."],
          ["Evaluar", "Interesante; conviene investigarla y entender su impacto.", "Revisar cómo funcionan las interfaces por voz para un servicio al cliente."],
          ["Resistir", "No se recomienda iniciar nada nuevo con ella.", "No crear proyectos nuevos con una librería que dejó de mantenerse."],
        ]}
      />
      <Callout title="Un radar es una foto, no una película" variant="callout-info">
        <p className="mb-0">
          Las tecnologías se mueven entre anillos con el tiempo. Una tecnología puede entrar en «evaluar», pasar a
          «probar» y terminar en «adoptar»; otra puede caer en «resistir» cuando aparece algo mejor. Por eso el radar se
          revisa periódicamente. En la clase 3 se usa el radar para registrar decisiones de adopción.
        </p>
      </Callout>
    </section>
  );
}
