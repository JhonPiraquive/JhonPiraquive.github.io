import { Callout } from "@/components/teaching/Callout";
import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function CicloDeAdopcionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Cómo evoluciona una tecnología emergente</h2>
      <p className="my-4">
        Casi ninguna tecnología nueva pasa directo de la idea al éxito. Dos modelos ayudan a entender su recorrido: uno
        describe cómo cambian las expectativas del público y el otro, quiénes la adoptan y en qué orden.
      </p>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Las expectativas: el ciclo de sobreexpectación</h3>
      <p className="my-4">
        Una tecnología llega con entusiasmo, luego se descubre que no resuelve todo y las expectativas caen. Las que
        valen la pena se comprenden mejor y terminan convertidas en herramientas normales. Este modelo se conoce como
        ciclo de sobreexpectación (en inglés, <em>hype cycle</em>).
      </p>
      <MermaidDiagram
        title="Ciclo de vida de una tecnología nueva"
        description="Flujo en cinco etapas: lanzamiento, pico de expectativas, desilusión, comprensión y productividad."
        chart={`flowchart LR
  A["1. Lanzamiento<br/>Aparece un invento o un avance"] --> B["2. Pico de expectativas<br/>Todos hablan de ella"]
  B --> C["3. Desilusión<br/>No resuelve todo lo prometido"]
  C --> D["4. Comprensión<br/>Se entiende dónde sí sirve"]
  D --> E["5. Productividad<br/>Se vuelve herramienta normal"]`}
      />

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Los usuarios: quién adopta y cuándo</h3>
      <p className="my-4">
        La teoría de la difusión de innovaciones agrupa a las personas y a las organizaciones según el momento en que
        adoptan algo nuevo. Saber a qué grupo pertenece un equipo ayuda a decidir cuánto riesgo puede asumir.
      </p>
      <CompareTable
        headers={["Grupo", "Perfil", "Actitud ante lo nuevo"]}
        rows={[
          ["Innovadores", "Pocos y dispuestos a fallar.", "Prueban la tecnología apenas aparece, aunque no esté terminada."],
          ["Adoptantes tempranos", "Líderes de opinión en su campo.", "Adoptan cuando ven una ventaja clara y la comparten."],
          ["Mayoría temprana", "Prácticos y cuidadosos.", "Esperan evidencia de que funciona en casos reales."],
          ["Mayoría tardía", "Escépticos.", "Adoptan cuando ya es el estándar o cuando no hay alternativa."],
          ["Rezagados", "Apegados a lo conocido.", "Cambian solo cuando lo anterior deja de existir."],
        ]}
      />

      <Callout title="Para qué sirve conocer estos modelos" variant="callout-tip">
        <p className="mb-0">
          Permiten no emocionarse de más con lo que está en el pico de expectativas ni descartar demasiado pronto lo que
          atraviesa la desilusión. Una tecnología en la fase de comprensión suele ser el mejor momento para aprenderla:
          ya existe documentación y todavía hay poca competencia por el talento.
        </p>
      </Callout>
    </section>
  );
}
