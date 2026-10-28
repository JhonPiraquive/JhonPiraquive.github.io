import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function EjerciciosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Ejercicios de la clase 3</h2>
      <p className="my-4">
        Los ejercicios plantean decisiones reales. No hay una única respuesta correcta: se valora que la justificación use
        los criterios y el método de la clase.
      </p>

      <PracticeExercise
        title="Ejercicio 1. Decidir con plazo corto"
        prompt="Un compañero propone usar, en un proyecto que se entrega en un mes, una librería que salió hace dos semanas, en versión alfa y con un solo tutorial. ¿Qué se le responde y en qué criterios se apoya la respuesta?"
        hints={["Revisar madurez, comunidad y documentación", "¿Existe una alternativa estable que el equipo conozca?"]}
        expectedKeywords={["madurez", "alfa", "estable", "comunidad", "documentación", "alternativa"]}
      />
      <details className="my-4">
        <summary className="cursor-pointer font-medium">Respuesta de referencia</summary>
        <p className="mt-2">
          No conviene para este proyecto: una versión alfa no es madura, casi no hay comunidad ni documentación y el plazo
          es corto. Se elige una alternativa estable que el equipo conozca y la librería nueva se prueba aparte, en un
          proyecto pequeño, como una puerta de dos vías.
        </p>
      </details>

      <PracticeExercise
        title="Ejercicio 2. Criterio eliminatorio"
        prompt="Un colegio evalúa una plataforma de IA para corregir tareas. Obtiene el mayor puntaje en la matriz, pero almacena los datos de los estudiantes, menores de edad, en otro país sin autorización de los padres. ¿Qué se decide?"
        hints={["Hay criterios que descartan sin importar el puntaje", "Pensar en la ley de protección de datos"]}
        expectedKeywords={["eliminatorio", "descarta", "datos", "ley", "privacidad", "autorización"]}
      />
      <details className="my-4">
        <summary className="cursor-pointer font-medium">Respuesta de referencia</summary>
        <p className="mt-2">
          Se descarta, o se exige que cumpla antes de seguir: la protección de datos de menores es un criterio eliminatorio
          (legal y ético). Un puntaje alto no compensa un incumplimiento de la ley.
        </p>
      </details>

      <PracticeExercise
        title="Ejercicio 3. Escribir un criterio de éxito"
        prompt="Una tienda prueba una librería para buscar productos más rápido en su catálogo de cinco mil artículos. Escribir un criterio de éxito medible para la prueba de concepto."
        hints={["Debe ser un número que se pueda medir", "Incluir la condición difícil: cinco mil artículos"]}
        expectedKeywords={["segundo", "milisegundo", "menos de", "5000", "cinco mil", "%"]}
      />
      <details className="my-4">
        <summary className="cursor-pointer font-medium">Respuesta de referencia</summary>
        <p className="mt-2">
          Por ejemplo: «Con los cinco mil artículos cargados, la búsqueda muestra resultados en menos de 300 milisegundos en
          un celular de gama media, y encuentra el producto correcto en al menos 9 de 10 búsquedas con errores de
          ortografía».
        </p>
      </details>

      <PracticeExercise
        title="Ejercicio 4. ¿Una vía o dos vías?"
        prompt="Clasificar como puerta de una vía o de dos vías y justificar: (a) probar una librería de gráficas en una pantalla nueva; (b) migrar todos los datos de clientes a otra base de datos y apagar la anterior."
        hints={["¿Qué tan costoso es deshacerlo?", "¿Qué haría que (b) se volviera de dos vías?"]}
        expectedKeywords={["dos vías", "una vía", "deshacer", "paralelo", "salida"]}
      />
      <details className="my-4">
        <summary className="cursor-pointer font-medium">Respuesta de referencia</summary>
        <p className="mt-2">
          (a) Dos vías: si no sirve, se quita la pantalla y se prueba otra. (b) Una vía: apagar la base anterior hace muy
          costoso volver atrás. Se puede acercar a dos vías manteniendo ambas bases en paralelo durante un tiempo y
          conservando una exportación completa.
        </p>
      </details>

      <PracticeExercise
        title="Ejercicio 5. Métricas que no engañen"
        prompt="Un equipo mide el éxito de un asistente de programación solo con «número de funciones nuevas por semana». ¿Qué problema tiene esa métrica y qué otra la complementa?"
        hints={["La velocidad puede subir mientras la calidad baja", "Combinar velocidad con calidad"]}
        expectedKeywords={["calidad", "errores", "defectos", "complement", "velocidad"]}
      />
      <details className="my-4">
        <summary className="cursor-pointer font-medium">Respuesta de referencia</summary>
        <p className="mt-2">
          Puede aumentar mientras crecen los errores o el código difícil de mantener. Se complementa con una métrica de
          calidad, como defectos reportados después de publicar o tiempo de revisión por cambio.
        </p>
      </details>
    </section>
  );
}
