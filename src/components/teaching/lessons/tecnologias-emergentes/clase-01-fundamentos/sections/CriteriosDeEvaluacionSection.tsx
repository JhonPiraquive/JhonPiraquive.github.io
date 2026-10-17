import { Callout } from "@/components/teaching/Callout";
import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function CriteriosDeEvaluacionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Cómo decidir si adoptar una tecnología</h2>
      <p className="my-4">
        En programación es fácil caer en una trampa: creer que lo más reciente es automáticamente lo mejor. A veces lo
        es. Otras veces la novedad todavía tiene errores, casi nadie la usa y no hay ayuda cuando algo falla. Y a veces lo
        antiguo sigue siendo lo más sensato porque es estable y todo el mundo lo conoce.
      </p>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Seis criterios</h3>
      <p className="my-4">
        No hace falta responderlos con cifras exactas; basta con plantearlos antes de incorporar una tecnología a un
        proyecto.
      </p>
      <CompareTable
        title="Criterios para evaluar una tecnología"
        headers={["Criterio", "Pregunta", "Señal de alerta"]}
        rows={[
          ["Madurez", "¿Tiene una versión estable (no beta ni alfa)?", "La documentación dice «beta» o «experimental»."],
          ["Comunidad", "¿Hay tutoriales, respuestas y personas que la usen?", "Solo existe un video y la documentación oficial."],
          ["Documentación", "¿Está clara y actualizada?", "Los ejemplos fallan al copiarlos."],
          ["Mantenimiento", "¿Sigue recibiendo mejoras y correcciones de seguridad?", "El último cambio fue hace años."],
          ["Costo de cambiar", "¿Qué tan difícil sería reemplazarla después?", "Todo el proyecto depende de ella y no hay salida."],
          ["Necesidad real", "¿Resuelve un problema que de verdad existe?", "Se usa solo porque está de moda."],
        ]}
      />

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Un proceso de decisión</h3>
      <MermaidDiagram
        title="Proceso para decidir si adoptar una tecnología"
        description="Flujo de cinco pasos: definir el problema, buscar alternativas, aplicar los criterios, probar en pequeño y registrar la decisión."
        chart={`flowchart TD
  A["1. Definir el problema en una frase"] --> B["2. Buscar al menos dos alternativas"]
  B --> C["3. Aplicar los seis criterios"]
  C --> D["4. Hacer una prueba pequeña de una hora"]
  D --> E{"¿Funciona sin pelear con la herramienta?"}
  E -- Sí --> F["5. Decidir y anotar el motivo"]
  E -- No --> B`}
      />
      <p className="my-4">
        Anotar el motivo de la decisión tiene un valor práctico: seis meses después permite saber si la razón original
        sigue siendo válida.
      </p>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Casos reales de este módulo</h3>
      <p className="my-4">
        Al preparar este módulo se presentaron varios casos donde «lo más nuevo» y «lo mejor para aprender» no coinciden.
        La tabla muestra cómo se aplicó el criterio en cada uno.
      </p>
      <CompareTable
        headers={["Tema", "Lo más reciente", "Lo que se enseña y por qué"]}
        rows={[
          [
            "Rutas",
            "La biblioteca de rutas actual concentró todo en un único paquete, react-router.",
            "Se enseña la forma actual. Los tutoriales y plantillas antiguos importan react-router-dom: es el mismo concepto con otro import.",
          ],
          [
            "Validar props",
            "React actual ya no valida PropTypes; la recomendación oficial es TypeScript.",
            "Se explica PropTypes porque aparece en proyectos existentes, y se aclara que hoy no valida nada.",
          ],
          [
            "API de práctica",
            "La rama más nueva de json-server todavía es beta.",
            "Se usa la rama estable para practicar sin sorpresas.",
          ],
          [
            "Pedir datos",
            "Librerías como TanStack Query hacen gran parte del trabajo.",
            "Primero se aprende fetch con useEffect para entender qué ocurre por dentro; después se evalúa cuándo conviene la librería.",
          ],
          [
            "Grillas de Material UI",
            "La versión actual usa Grid con la propiedad size.",
            "Se enseña la forma actual y se muestra la antigua (Grid con item y xs), porque las plantillas viejas todavía la usan.",
          ],
        ]}
      />

      <Callout title="La regla práctica" variant="callout-tip">
        <p className="mb-0">
          Para producción conviene elegir lo estable que el equipo entiende. Para aprender y explorar, lo nuevo se prueba
          en un proyecto pequeño. Mezclar ambas cosas sin pensar es lo que suele salir caro.
        </p>
      </Callout>
    </section>
  );
}
