import { CodeChallenge } from "@/components/teaching/CodeChallenge";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function EjerciciosClase03Section() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Ejercicios de la clase 3</h2>
      <p className="my-4">
        Los ejercicios siguen el orden de las páginas de la clase. Cada uno ofrece pistas y una validación que indica si
        la respuesta va por buen camino.
      </p>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">HTTP y APIs</h3>
      <PracticeExercise
        title="Ejercicio 1. Interpretar un código de estado"
        prompt="Una petición DELETE /materias/99 recibe un 404 como respuesta. ¿Qué significa y qué se le mostraría a la persona?"
        hints={["Mirar la familia del código: 4xx", "¿Existe la materia 99?"]}
        expectedKeywords={["no existe", "no encontrad", "ya fue eliminad", "cliente"]}
      />

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Asincronía y fetch</h3>
      <CodeChallenge
        title="Ejercicio 2. Completar la función asíncrona"
        template={`const cargar = {{a}} () => {
  try {
    const respuesta = {{b}} fetch("/api/materias");
    return await respuesta.json();
  } {{c}} (error) {
    console.error(error);
  }
};`}
        blanks={[
          { id: "a", answer: "async", placeholder: "palabra" },
          { id: "b", answer: "await", placeholder: "palabra" },
          { id: "c", answer: "catch", placeholder: "palabra" },
        ]}
      />
      <PracticeExercise
        title="Ejercicio 3. Encontrar el fallo en un fetch"
        prompt="Este código muestra 'Guardado' aunque el servidor responda 500: const r = await fetch(url, opciones); const datos = await r.json(); mostrar('Guardado'). ¿Qué falta?"
        hints={["fetch no rechaza por un 500", "Hay una propiedad de la respuesta que indica si el estado es exitoso"]}
        expectedKeywords={["ok", "respuesta.ok", "r.ok", "status"]}
        successMessage="Exacto: hay que comprobar r.ok y lanzar un error antes de mostrar el mensaje de éxito."
      />

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">CRUD</h3>
      <PracticeExercise
        title="Ejercicio 4. Explicar el flujo de eliminación"
        prompt="Un compañero actualiza la lista local ANTES de enviar el DELETE a la API, y la API falla con un error 500. ¿Qué verá la persona en la pantalla y por qué es un problema?"
        hints={["¿Qué dice la pantalla y qué dice la base de datos?", "Considerar lo que ocurre al recargar la página"]}
        expectedKeywords={["inconsisten", "desaparece", "recargar", "no se eliminó", "no se elimino", "confirm"]}
        successMessage="Exacto: la pantalla mostraría algo que la base de datos no tiene. Al recargar, el registro reaparece."
      />

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Formularios y validación</h3>
      <PracticeExercise
        title="Ejercicio 5. Escribir una regla de validación"
        prompt="Describir con palabras (o con código) cómo se validaría que la edad de un docente sea un número entero entre 18 y 90, y qué mensaje se mostraría si no se cumple."
        hints={["El valor llega como texto", "Convertir con Number y revisar Number.isInteger", "El mensaje debe decir qué hacer, no solo qué está mal"]}
        expectedKeywords={["number", "entero", "18", "90", "isinteger"]}
      />

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Tecnologías emergentes</h3>
      <PracticeExercise
        title="Ejercicio 6. Decidir sobre una tecnología emergente"
        prompt="Una organización quiere incorporar un asistente de inteligencia artificial a su panel administrativo. Proponer cómo evaluarla con los seis criterios, qué prueba pequeña haría y dónde se ubicaría la clave de acceso."
        hints={["Aplicar madurez, documentación, mantenimiento y costo de cambiar", "Una prueba pequeña con un caso real antes de comprometer el proyecto", "Las claves secretas no van en el navegador"]}
        expectedKeywords={["madurez", "prueba", "piloto", "servidor", "clave", "criterio"]}
        successMessage="Correcto: criterios, prueba pequeña y seguridad de la clave en el servidor."
      />
    </section>
  );
}
