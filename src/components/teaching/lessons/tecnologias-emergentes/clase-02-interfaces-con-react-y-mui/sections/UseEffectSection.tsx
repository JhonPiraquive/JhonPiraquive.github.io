import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function UseEffectSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">useEffect: sincronizar con el mundo exterior</h2>
      <p className="my-4">
        Un componente de React tiene un trabajo principal: describir cómo se ve la pantalla según sus props y su estado.
        Ese trabajo debe ser «puro»: mismos datos, misma pantalla, sin efectos secundarios. Pero a veces es necesario hacer
        algo que ocurre <strong>fuera</strong> de React: cambiar el título de la pestaña, pedir datos a un servidor,
        iniciar un temporizador. Eso se llama un <strong>efecto</strong>, y <code>useEffect</code> es el lugar para
        ponerlo.
      </p>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Cómo se escribe</h3>
      <CodeFiddle
        language="jsx"
        title="Cambiar el título de la pestaña"
        code={`import { useEffect, useState } from "react";

export default function Pedidos() {
  const [cantidad, setCantidad] = useState(0);

  useEffect(() => {
    document.title = \`Pedidos: \${cantidad}\`;   // algo que ocurre fuera de React
  }, [cantidad]);                                // <- arreglo de dependencias

  return <button onClick={() => setCantidad((n) => n + 1)}>Pedidos: {cantidad}</button>;
}`}
      />
      <p className="my-4">
        React ejecuta el efecto <strong>después</strong> de dibujar la pantalla. El segundo argumento, el arreglo de
        dependencias, le dice <em>cuándo</em> volver a ejecutarlo.
      </p>
      <CompareTable
        headers={["Dependencias", "Cuándo se ejecuta el efecto", "Uso típico"]}
        rows={[
          ["No hay arreglo", "Después de cada dibujo", "Casi nunca; suele ser un error"],
          ["[] (vacío)", "Una vez, al aparecer el componente", "Cargar datos iniciales, suscribirse"],
          ["[a, b]", "Al aparecer y cada vez que a o b cambian", "Reaccionar a un dato: buscar, sincronizar"],
        ]}
      />
      <Callout title="Regla de las dependencias" variant="callout-warning">
        <p className="mb-0">
          Todo valor de props o estado que se use dentro del efecto debe aparecer en el arreglo de dependencias. Si se
          omite, el efecto trabaja con valores viejos. El linter de la plantilla de Vite lo avisa con una advertencia que
          conviene atender.
        </p>
      </Callout>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Limpiar lo que quedó abierto</h3>
      <p className="my-4">
        Algunos efectos dejan algo corriendo: un temporizador, una suscripción, una conexión. Si el componente desaparece,
        eso debe detenerse. Para eso el efecto puede devolver una función de limpieza, que React ejecuta antes de repetir el
        efecto y cuando el componente se quita.
      </p>
      <CodeFiddle
        language="jsx"
        title="Un reloj que se limpia solo"
        code={`import { useEffect, useState } from "react";

export default function Reloj() {
  const [hora, setHora] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setHora(new Date()), 1000);  // arranca el temporizador
    return () => clearInterval(id);                           // limpieza: lo detiene
  }, []);

  return <p>{hora.toLocaleTimeString("es-CO")}</p>;
}`}
      />
      <MermaidDiagram
        title="Vida de un efecto"
        description="Flujo: se dibuja el componente, se ejecuta el efecto, cuando cambian las dependencias o el componente se quita se ejecuta la limpieza."
        chart={`flowchart TD
  A["React dibuja el componente"] --> B["Ejecuta el efecto"]
  B --> C{"¿Cambiaron las dependencias<br/>o se quitó el componente?"}
  C -->|"Sí"| D["Ejecuta la función de limpieza"]
  D --> E["Si el componente sigue, vuelve a ejecutar el efecto"]
  C -->|"No"| F["Espera"]`}
      />
      <Callout title="¿Por qué un efecto se ejecuta dos veces?" variant="callout-info">
        <p className="mb-0">
          En desarrollo, StrictMode ejecuta cada efecto, lo limpia y lo vuelve a ejecutar, solo para comprobar que la
          limpieza funciona. En producción corre una sola vez. Si algo se rompe al duplicarse, normalmente falta la función
          de limpieza.
        </p>
      </Callout>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Cuándo NO usar useEffect</h3>
      <p className="my-4">
        El error más frecuente entre quienes aprenden es llenar los componentes de efectos innecesarios, algo en lo que
        la documentación oficial insiste. Antes de escribir un efecto conviene revisar si el caso encaja en alguna de
        estas situaciones:
      </p>
      <CompareTable
        headers={["Situación", "Alternativa a useEffect"]}
        rows={[
          ["Calcular un dato a partir de props o estado (por ejemplo, el total de una lista)", "Calcularlo directamente al dibujar: const total = items.reduce(...)"],
          ["Reaccionar a un clic o a enviar un formulario", "Hacerlo dentro del manejador del evento (onClick, onSubmit)"],
          ["Reiniciar el estado cuando cambia una prop", "Cambiar la key del componente"],
          ["Pedir datos a un servidor", "Es un uso válido de useEffect, pero con limpieza (clase 3). En proyectos grandes se usa una librería como TanStack Query"],
        ]}
      />
      <CodeFiddle
        language="jsx"
        title="Un efecto que sobra"
        code={`// Innecesario: se dibuja dos veces cada vez que cambia la lista
const [total, setTotal] = useState(0);
useEffect(() => {
  setTotal(items.reduce((suma, i) => suma + i.precio, 0));
}, [items]);

// Mejor: es un valor derivado, se calcula al vuelo
const total = items.reduce((suma, i) => suma + i.precio, 0);`}
      />

    </section>
  );
}
