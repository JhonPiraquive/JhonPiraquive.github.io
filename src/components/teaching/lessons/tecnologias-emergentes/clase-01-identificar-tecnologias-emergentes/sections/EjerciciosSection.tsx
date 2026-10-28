import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function EjerciciosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Ejercicios de la clase 1</h2>
      <p className="my-4">
        Los ejercicios siguen el orden de las páginas. Cada uno ofrece pistas y una validación que indica si la respuesta
        va por buen camino; debajo de cada ejercicio hay una respuesta de referencia para comparar al final.
      </p>

      <PracticeExercise
        title="Ejercicio 1. ¿Emergente o solo reciente?"
        prompt="Una aplicación de notas lanzada la semana pasada se presenta como «tecnología emergente». Hace lo mismo que otras diez aplicaciones, pero con otros colores. ¿Es emergente? Justificar con los atributos."
        hints={["Revisar la novedad radical", "Ser reciente no basta"]}
        expectedKeywords={["novedad", "no es", "reciente", "atributo", "radical"]}
      />
      <details className="my-4">
        <summary className="cursor-pointer font-medium">Respuesta de referencia</summary>
        <p className="mt-2">
          No es emergente. Le falta la novedad radical (no cambia la forma de resolver el problema) y no tiene impacto
          prominente. Ser reciente no convierte algo en emergente.
        </p>
      </details>

      <PracticeExercise
        title="Ejercicio 2. Ubicar en el ciclo"
        prompt="Una tecnología aparece en todos los titulares, varias empresas anuncian que la adoptarán y casi nadie muestra resultados medibles. ¿En qué etapa del ciclo de sobreexpectación está y qué decisión es prudente?"
        hints={["Las expectativas superan a los resultados", "En esta etapa se prueba en pequeño"]}
        expectedKeywords={["pico", "expectativas", "pequeño", "piloto", "probar"]}
      />
      <details className="my-4">
        <summary className="cursor-pointer font-medium">Respuesta de referencia</summary>
        <p className="mt-2">
          Está en el pico de expectativas infladas. Lo prudente es probar en pequeño, con recursos que se puedan perder, y
          esperar evidencia antes de comprometer un proyecto importante.
        </p>
      </details>

      <PracticeExercise
        title="Ejercicio 3. Leer la madurez de una librería"
        prompt="Una librería muestra en su documentación la etiqueta «beta» y advierte que su interfaz puede cambiar. ¿Qué nivel aproximado de madurez tiene y qué implica para un proyecto que se entrega en un mes?"
        hints={["Comparar con la tabla de etiquetas de versión", "¿Qué pasa si la interfaz cambia a mitad del proyecto?"]}
        expectedKeywords={["beta", "trl", "6", "7", "cambiar", "riesgo", "estable"]}
      />
      <details className="my-4">
        <summary className="cursor-pointer font-medium">Respuesta de referencia</summary>
        <p className="mt-2">
          Equivale a un TRL 6 o 7: funciona, pero puede cambiar. Para una entrega en un mes conviene preferir una
          alternativa estable o aislar su uso para poder reemplazarla si cambia.
        </p>
      </details>

      <PracticeExercise
        title="Ejercicio 4. Señales combinadas"
        prompt="Un repositorio tiene muchas estrellas en GitHub, pero sus descargas en npm son bajas, casi no hay ofertas de empleo que la pidan y el último cambio fue hace un año. ¿Qué se concluye de las señales?"
        hints={["Una señal sola no basta", "Revisar si las señales apuntan en la misma dirección"]}
        expectedKeywords={["contradic", "estrellas", "uso real", "abandon", "mantenimiento", "no"]}
      />
      <details className="my-4">
        <summary className="cursor-pointer font-medium">Respuesta de referencia</summary>
        <p className="mt-2">
          Las señales se contradicen: hubo interés (estrellas), pero no hay uso real (descargas), demanda (empleos) ni
          mantenimiento reciente. Es probable que sea una moda pasada o un proyecto abandonado. Anillo sugerido: resistir.
        </p>
      </details>

      <PracticeExercise
        title="Ejercicio 5. Horizontes"
        prompt="Clasificar en horizontes 1, 2 o 3: bases de datos relacionales, agentes de IA, computación cuántica práctica. Explicar en una frase cada caso."
        hints={["Horizonte 1: maduro y en uso", "Horizonte 3: impacto lejano e incierto"]}
        expectedKeywords={["1", "2", "3", "horizonte"]}
      />
      <details className="my-4">
        <summary className="cursor-pointer font-medium">Respuesta de referencia</summary>
        <p className="mt-2">
          Bases de datos relacionales: horizonte 1, sostienen casi todos los sistemas actuales. Agentes de IA: horizonte
          2, ya crecen y se prueban en organizaciones reales. Computación cuántica práctica: horizonte 3, promete mucho pero
          su uso útil aún es lejano.
        </p>
      </details>
    </section>
  );
}
