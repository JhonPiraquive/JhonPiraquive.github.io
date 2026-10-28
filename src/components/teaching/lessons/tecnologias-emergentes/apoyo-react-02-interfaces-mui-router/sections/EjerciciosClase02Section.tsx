import { CodeChallenge } from "@/components/teaching/CodeChallenge";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function EjerciciosClase02Section() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Ejercicios de la parte 2</h2>
      <p className="my-4">
        Los ejercicios siguen el orden de las páginas de la clase. Cada uno ofrece pistas y una validación que indica si
        la respuesta va por buen camino.
      </p>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Estado y eventos</h3>
      <CodeChallenge
        title="Ejercicio 1. Completar el interruptor"
        template={`import { {{a}} } from "react";

export default function Interruptor() {
  const [encendido, setEncendido] = {{a}}(false);
  return (
    <button onClick={() => setEncendido({{b}}encendido)}>
      {encendido ? "Encendido" : "Apagado"}
    </button>
  );
}`}
        blanks={[
          { id: "a", answer: "useState", placeholder: "hook" },
          { id: "b", answer: "!", placeholder: "símbolo" },
        ]}
      />
      <PracticeExercise
        title="Ejercicio 2. Encontrar el error en un campo controlado"
        prompt="Un compañero escribió: <input value={nombre} />. El campo no deja escribir nada. ¿Qué le falta y por qué ocurre?"
        hints={["El campo está controlado por el estado", "Si el estado no cambia, el valor mostrado tampoco cambia", "Falta el manejador onChange que llame al setter"]}
        expectedKeywords={["onchange", "setnombre", "manejador", "estado"]}
      />

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Efectos y hooks</h3>
      <PracticeExercise
        title="Ejercicio 3. ¿Efecto o no?"
        prompt="Se necesita mostrar «Hay N cursos activos» a partir de la lista de cursos que ya está en el estado. ¿Se usaría useEffect? Explicar la decisión."
        hints={["¿Es algo que ocurre fuera de React?", "¿Se puede calcular con los datos disponibles al dibujar?"]}
        expectedKeywords={["no", "derivado", "calcul", "filter", "directamente"]}
        successMessage="Exacto: es un dato derivado. Se calcula al dibujar, sin efecto."
      />

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">UX y UI</h3>
      <PracticeExercise
        title="Ejercicio 4. Detectar el problema de UX"
        prompt="Un formulario de docentes tiene un botón rojo «Eliminar» pegado al botón «Guardar», y al hacer clic borra el registro sin preguntar. Mencionar dos reglas de usabilidad que se incumplen y qué se cambiaría."
        hints={["Considerar prevenir errores y el control del usuario", "¿Se puede deshacer? ¿Está separado de la acción principal?"]}
        expectedKeywords={["confirm", "prevenir", "control", "separar", "diálogo", "dialogo"]}
      />

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Navegación</h3>
      <PracticeExercise
        title="Ejercicio 5. Diseñar las rutas"
        prompt="Un módulo de docentes necesita: listado, formulario para crear, formulario para editar un docente en particular y una página de error. Escribir las cuatro rutas (path) que se declararían."
        hints={["Partir de /docentes como base", "La de editar necesita un segmento dinámico con dos puntos", "Una ruta con asterisco atrapa lo demás"]}
        expectedKeywords={[":id", ":docenteid", "nuevo", "editar", "*"]}
        successMessage="Muy bien: están las cuatro rutas de un módulo completo."
      />

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Evaluar una tecnología</h3>
      <PracticeExercise
        title="Ejercicio 6. Librería de componentes o CSS propio"
        prompt="Un equipo pequeño debe entregar un panel administrativo en seis semanas y dudan entre usar una librería de componentes o escribir todo el CSS. Argumentar la decisión con al menos tres de los seis criterios de evaluación de la parte 1 de la guía."
        hints={["Madurez y mantenimiento de la librería", "Tiempo disponible frente a necesidad real", "Costo de cambiar si la librería deja de mantenerse"]}
        expectedKeywords={["madurez", "comunidad", "documentación", "mantenimiento", "tiempo", "necesidad", "costo"]}
        successMessage="Correcto: la decisión se justifica con criterios y no con preferencias personales."
      />
    </section>
  );
}
