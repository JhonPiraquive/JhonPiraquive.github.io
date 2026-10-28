import { Callout } from "@/components/teaching/Callout";
import { CompareTable } from "@/components/teaching/CompareTable";

export function GestionDelCambioSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Las personas también adoptan</h2>
      <p className="my-4">
        Una tecnología puede ser excelente y fracasar porque las personas no la usan. La adopción no termina al instalarla:
        termina cuando forma parte del trabajo diario. A eso se le llama <strong>gestión del cambio</strong>.
      </p>
      <CompareTable
        headers={["Causa de resistencia", "Cómo se ve", "Qué ayuda"]}
        rows={[
          ["No se entiende para qué", "«Lo anterior funcionaba bien.»", "Explicar el problema que resuelve con datos del piloto."],
          ["Miedo a no saber usarla", "Se evita o se usa a medias.", "Capacitación práctica, guías cortas y una persona de referencia en cada equipo."],
          ["Miedo a perder el trabajo", "Desconfianza, especialmente con la IA.", "Hablar con honestidad de qué tareas cambian y cómo se acompaña a las personas."],
          ["Más trabajo al principio", "La productividad baja las primeras semanas.", "Planearlo y comunicarlo: la curva de aprendizaje es normal."],
          ["No se consultó a quienes la usan", "Rechazo aunque la tecnología sea buena.", "Involucrar a usuarios desde el piloto y atender sus observaciones."],
        ]}
      />
      <Callout title="Cada persona recorre su propia curva de adopción" variant="callout-info">
        <p className="mb-0">
          Dentro de un equipo también hay innovadores, mayoría y rezagados, igual que en la difusión de innovaciones de la
          clase 1. Los innovadores del equipo son aliados para el piloto; la mayoría necesitará evidencia y acompañamiento;
          no conviene juzgar a quienes tardan más, sino entender qué necesitan.
        </p>
      </Callout>
    </section>
  );
}
