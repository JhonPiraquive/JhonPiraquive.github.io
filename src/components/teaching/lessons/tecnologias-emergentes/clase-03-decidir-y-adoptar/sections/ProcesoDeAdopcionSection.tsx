import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function ProcesoDeAdopcionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Adoptar por etapas</h2>
      <p className="my-4">
        Una tecnología emergente casi nunca se adopta de un día para otro en toda una organización. Se adopta por etapas,
        cada una más grande y más costosa que la anterior, y al final de cada etapa se decide si se sigue, se ajusta o se
        detiene. Es como probar una receta nueva: primero una porción para la familia, luego para una reunión y solo
        después para el menú del restaurante.
      </p>
      <MermaidDiagram
        title="Etapas de adopción con puntos de decisión"
        description="Flujo: problema, alternativas y matriz, prueba de concepto, decisión, piloto, decisión, adopción y revisión periódica; en cada decisión se puede detener o volver a alternativas."
        chart={`flowchart LR
  A["Problema<br/>en una frase"] --> B["Alternativas<br/>y matriz"]
  B --> C["Prueba de concepto<br/>días"]
  C --> D{"¿Funciona?"}
  D -- No --> B
  D -- Sí --> E["Piloto<br/>semanas, usuarios reales"]
  E --> F{"¿Cumple las métricas?"}
  F -- No --> B
  F -- Sí --> G["Adopción<br/>por fases"]
  G --> H["Revisión<br/>periódica"]`}
      />
      <CompareTable
        headers={["Etapa", "Pregunta que responde", "Tamaño", "Resultado esperado"]}
        rows={[
          ["Prueba de concepto (PoC)", "¿Es técnicamente posible resolver el problema con esta tecnología?", "Una persona o dos, de horas a pocos días.", "Un prototipo descartable y una respuesta sí o no."],
          ["Piloto", "¿Funciona con usuarios y datos reales, en condiciones controladas?", "Un equipo o área pequeña, algunas semanas.", "Métricas medidas y lecciones aprendidas."],
          ["Adopción por fases", "¿Cómo se extiende a toda la organización sin afectar la operación?", "Área por área.", "La tecnología en uso normal, con soporte y capacitación."],
          ["Revisión periódica", "¿Sigue siendo la mejor opción?", "Cada seis o doce meses.", "Mantener, mejorar o planear el reemplazo."],
        ]}
      />
    </section>
  );
}
