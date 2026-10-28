import { Callout } from "@/components/teaching/Callout";
import { CompareTable } from "@/components/teaching/CompareTable";

export function MetricasYRadarSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Métricas de éxito y radar del equipo</h2>
      <p className="my-4">
        Un piloto sin métricas termina en opiniones: «a mí me gustó», «a mí no». Una <strong>métrica</strong> es un número
        que se mide antes y después para saber si algo mejoró. Se eligen pocas, relacionadas con el problema original, y se
        mide la situación inicial (la <strong>línea base</strong>) antes de empezar.
      </p>
      <CompareTable
        headers={["Tipo de métrica", "Ejemplos"]}
        rows={[
          ["Eficiencia", "Tiempo para completar una tarea, cantidad de pasos, horas de trabajo ahorradas."],
          ["Calidad", "Errores por cada cien registros, defectos encontrados después de publicar, reclamos de usuarios."],
          ["Costo", "Costo mensual por usuario, costo por transacción, gasto en infraestructura."],
          ["Adopción", "Porcentaje de personas que la usan después de un mes, frecuencia de uso."],
          ["Satisfacción", "Encuesta corta de uno a cinco a quienes la usan."],
        ]}
      />
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Llevar las decisiones a un radar</h3>
      <p className="my-4">
        En la clase 1 se presentó el radar tecnológico como fuente de vigilancia. Un equipo también puede mantener su
        propio radar para registrar en qué etapa está cada tecnología. Así las etapas de adopción y los anillos del radar
        se conectan.
      </p>
      <CompareTable
        headers={["Resultado de la etapa", "Anillo del radar del equipo"]}
        rows={[
          ["Se identificó y se está estudiando (ficha de identificación)", "Evaluar"],
          ["Pasó la prueba de concepto y hay un piloto en curso", "Probar"],
          ["Pasó el piloto con las métricas cumplidas", "Adoptar"],
          ["No pasó, o existe una alternativa mejor", "Resistir"],
        ]}
      />
      <Callout title="Una métrica también puede engañar" variant="callout-warning">
        <p className="mb-0">
          Si se mide solo «líneas de código escritas por día» con un asistente de IA, el número puede subir mientras la
          calidad baja. Conviene combinar una métrica de velocidad con una de calidad, para que mejorar una no oculte que
          empeora la otra.
        </p>
      </Callout>
    </section>
  );
}
