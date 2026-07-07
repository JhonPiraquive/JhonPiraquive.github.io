import { Callout } from "@/components/teaching/Callout";

export function ObjetivosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Objetivos del tema"}</h2>
      <p className="my-4">
        {
          "Esta lección introduce bucles para repetir bloques de código sin duplicarlos, y manejo de errores con try/catch para que un fallo puntual no congele la pestaña ni deje la UI sin respuesta. Los bucles se combinan con condicionales de la lección 04-operadores-y-decisiones; en la lección 06-funciones-y-callbacks envolverán llamadas a funciones y callbacks."
        }
      </p>
      <p className="my-4">
        {
          "Un bucle (loop) repite un bloque mientras se cumpla una condición o hasta recorrer un rango. Cada iteración es una pasada del bucle; el contador o la condición deben avanzar hacia una salida clara."
        }
      </p>
      <p className="my-4">{"Al finalizar la lección, el estudiante podrá:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Escribir"}</strong>{" bucles `for`, `while` y `do...while` eligiendo la estructura adecuada según el número de iteraciones y si el cuerpo debe ejecutarse al menos una vez."}
        </li>
        <li>
          <strong>{"Usar"}</strong>{" `break` y `continue` para controlar el flujo dentro de un bucle sin confundir sus efectos."}
        </li>
        <li>
          <strong>{"Reconocer"}</strong>{" bucles infinitos por lógica incorrecta y "}
          <strong>{"proponer"}</strong>{" condiciones de salida o límites de seguridad."}
        </li>
        <li>
          <strong>{"Aplicar"}</strong>{" `try / catch / finally` y `throw new Error(...)` para atrapar errores en tiempo de ejecución y evitar que un fallo detenga toda la interfaz."}
        </li>
        <li>
          <strong>{"Combinar"}</strong>{" bucles con condicionales y operadores de la lección 04 (`if`, `===`, `&&`, `||`) en patrones reales como acumuladores, filtros y reintentos limitados."}
        </li>
      </ul>
      <Callout title="Caso real: dashboard con pestaña congelada">
        {
          "Un panel interno ejecutaba while (true) { refrescarDatos(); } para mantener métricas siempre actualizadas. Tras el despliegue, los navegadores de los analistas quedaron al 100 % de CPU y el equipo revirtió el commit. Moraleja: todo bucle necesita condición de salida, break o delegar la repetición a APIs asíncronas (setInterval, eventos — lecciones posteriores)."
        }
      </Callout>
    </section>
  );
}
