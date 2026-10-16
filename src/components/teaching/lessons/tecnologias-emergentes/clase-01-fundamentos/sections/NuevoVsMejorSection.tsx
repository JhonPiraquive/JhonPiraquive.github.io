import { Callout } from "@/components/teaching/Callout";
import { CompareTable } from "@/components/teaching/CompareTable";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";
import { StepReveal } from "@/components/teaching/StepReveal";

export function NuevoVsMejorSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Lo nuevo no siempre es lo mejor</h2>
      <p className="my-4">
        En programación es fácil caer en una trampa: pensar que la versión más reciente de algo es automáticamente la
        mejor opción. A veces sí lo es. Otras veces la versión nueva todavía tiene errores, casi nadie la usa y no
        encuentras ayuda cuando algo falla. Y a veces lo antiguo sigue siendo lo más sensato porque es estable y todo
        el mundo lo conoce.
      </p>
      <p className="my-4">
        Para decidir con cabeza fría, usa estas seis preguntas. No necesitas responderlas con números exactos; basta con
        que te las hagas antes de meter una tecnología en un proyecto.
      </p>
      <CompareTable
        title="Seis criterios para evaluar una tecnología"
        headers={["Criterio", "Pregunta que te haces", "Señal de alerta"]}
        rows={[
          ["Madurez", "¿Tiene una versión estable (no beta ni alpha)?", "Dice «beta» o «experimental» en la documentación."],
          ["Comunidad", "¿Hay tutoriales, respuestas y gente que la use?", "Solo hay un video y la documentación oficial."],
          ["Documentación", "¿Está clara y actualizada?", "Los ejemplos fallan al copiarlos."],
          ["Mantenimiento", "¿Sigue recibiendo mejoras y correcciones de seguridad?", "El último cambio fue hace años."],
          ["Costo de cambiar", "¿Qué tan difícil sería reemplazarla después?", "Todo el proyecto depende de ella y no hay salida."],
          ["Necesidad real", "¿Resuelve un problema que realmente tengo?", "La uso solo porque está de moda."],
        ]}
      />

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Ejemplos reales de este mismo módulo</h3>
      <p className="my-4">
        Mientras armábamos este módulo encontramos varios casos donde «lo más nuevo» y «lo mejor para aprender» no son lo
        mismo. Fíjate cómo se aplica el criterio en cada uno.
      </p>
      <CompareTable
        headers={["Tema", "Lo más reciente", "Lo que usamos y por qué"]}
        rows={[
          [
            "Rutas",
            "React Router 8 quitó el paquete react-router-dom y todo se importa desde react-router.",
            "Enseñamos la forma actual (react-router). Aun así verás react-router-dom en tutoriales y plantillas; es el mismo concepto con otro import.",
          ],
          [
            "Validar props",
            "React 19 ignora PropTypes. La recomendación oficial es TypeScript.",
            "Explicamos PropTypes porque aparece en proyectos existentes, pero te mostramos que en React 19 ya no valida nada.",
          ],
          [
            "API de práctica",
            "json-server 1.x todavía está en beta.",
            "Usamos json-server 0.17.4, la versión estable, para practicar sin sorpresas.",
          ],
          [
            "Pedir datos",
            "Librerías como TanStack Query hacen mucho trabajo por ti.",
            "Primero aprendes fetch con useEffect para entender qué pasa por dentro. Después verás cuándo conviene la librería.",
          ],
          [
            "Grillas de MUI",
            "Material UI 9 usa Grid con la propiedad size.",
            "Enseñamos la forma actual y te mostramos la antigua (Grid con item y xs) porque las plantillas viejas la usan.",
          ],
        ]}
      />

      <StepReveal
        title="Cómo decidir en cinco pasos"
        steps={[
          { title: "Define el problema", content: "Escribe en una frase qué necesitas resolver. Si no puedes, todavía no necesitas una tecnología." },
          { title: "Busca alternativas", content: "Encuentra al menos dos opciones, incluida la que ya conoces. Comparar es mejor que casarse con la primera." },
          { title: "Revisa los seis criterios", content: "Mira madurez, comunidad, documentación, mantenimiento, costo de cambiar y necesidad real." },
          { title: "Haz una prueba pequeña", content: "Construye algo mínimo en una hora. Si en ese tiempo ya te peleas con la herramienta, es una señal." },
          { title: "Decide y anota por qué", content: "Guarda la razón de tu decisión. Dentro de seis meses te servirá para saber si sigue siendo buena." },
        ]}
      />

      <Callout title="La regla práctica" variant="callout-tip">
        <p className="mb-0">
          Para producción, elige lo estable que tu equipo entiende. Para aprender y explorar, prueba lo nuevo en un
          proyecto pequeño. Mezclar ambas cosas sin pensar es lo que suele salir caro.
        </p>
      </Callout>

      <PracticeExercise
        title="Aplica el criterio"
        prompt="Una compañera te propone usar una librería que salió hace dos semanas, está en versión alpha y tiene un solo tutorial en video. Tu proyecto debe entregarse en un mes. ¿Qué le respondes y en qué criterios te apoyas?"
        hints={[
          "Mira madurez: ¿alpha es estable?",
          "Mira comunidad y documentación: ¿a quién le preguntarías si falla?",
          "Piensa si hay una alternativa estable que ya conozcan",
        ]}
        expectedKeywords={["madurez", "estable", "alpha", "comunidad", "documentación", "alternativa"]}
        successMessage="Muy bien: usaste criterios en lugar de la moda. Eso es lo que buscamos."
      />
    </section>
  );
}
