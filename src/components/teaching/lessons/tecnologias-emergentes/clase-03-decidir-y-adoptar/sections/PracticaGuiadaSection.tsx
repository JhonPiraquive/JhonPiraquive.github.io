import { Callout } from "@/components/teaching/Callout";
import { StepReveal } from "@/components/teaching/StepReveal";

export function PracticaGuiadaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Práctica guiada: el informe de decisión</h2>
      <p className="my-4">
        La práctica integra las tres clases en un solo documento: un informe que identifica una tecnología emergente,
        evalúa si conviene adoptarla para un caso concreto y propone cómo hacerlo. El caso de ejemplo es una clínica
        veterinaria que evalúa un asistente de IA para responder preguntas de los clientes por mensajería; el informe
        final se hace con un caso elegido libremente.
      </p>
      <StepReveal
        title="Siete pasos del informe"
        steps={[
          {
            title: "Definir el problema",
            content:
              "En una frase y con un dato: «La recepción responde unas 120 preguntas repetidas por día (horarios, precios, vacunas) y deja de atender a quienes llegan en persona».",
          },
          {
            title: "Identificar la tecnología",
            content:
              "Llenar la ficha de la clase 1 para los asistentes conversacionales de atención al cliente: atributos, etapa en el ciclo, grupo que la adopta, madurez y señales con fuente.",
          },
          {
            title: "Entender cómo funcionaría",
            content:
              "Con la clase 2: qué modelo y qué harness o plataforma, qué información necesitaría (RAG sobre la lista de precios y horarios), qué herramientas tendría (consultar citas, nunca modificarlas sin confirmación) y qué datos personales tocaría.",
          },
          {
            title: "Comparar alternativas",
            content:
              "Matriz ponderada con al menos tres opciones: respuestas guardadas en la aplicación de mensajería, un asistente de IA de una plataforma comercial y no cambiar nada. Incluir criterios eliminatorios, como no dar diagnósticos médicos.",
          },
          {
            title: "Diseñar la prueba",
            content:
              "Prueba de concepto con las cien preguntas más frecuentes del último mes y un criterio de éxito escrito antes, por ejemplo: noventa respuestas correctas y ninguna respuesta de diagnóstico.",
          },
          {
            title: "Analizar riesgos y salida",
            content:
              "Ubicar al menos cuatro riesgos en la matriz de probabilidad e impacto, con su estrategia. Escribir cómo se volvería atrás si el asistente falla.",
          },
          {
            title: "Registrar la decisión",
            content:
              "Escribir un ADR de una página con contexto, alternativas, decisión, consecuencias y fecha de revisión. La decisión puede ser adoptar, probar, esperar o no adoptar: lo que se evalúa es la justificación.",
          },
        ]}
      />
      <Callout title="Cómo verificar el informe" variant="callout-tip">
        <ul className="mb-0 list-disc space-y-1 pl-5">
          <li>Otra persona puede leerlo y llegar a la misma conclusión con la misma información.</li>
          <li>Cada afirmación sobre la tecnología tiene una fuente.</li>
          <li>El criterio de éxito de la prueba se escribió antes de imaginar el resultado.</li>
          <li>Existe un plan para volver atrás.</li>
        </ul>
      </Callout>
    </section>
  );
}
