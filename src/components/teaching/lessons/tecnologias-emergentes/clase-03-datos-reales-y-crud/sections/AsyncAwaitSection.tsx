import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";
import { StepReveal } from "@/components/teaching/StepReveal";

export function AsyncAwaitSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">async y await: promesas que se leen como código normal</h2>
      <p className="my-4">
        Dos palabras lo cambian todo. <code>async</code> antes de una función le dice a JavaScript que esa función trabaja
        con promesas y que siempre devolverá una. <code>await</code> dentro de ella dice: «espera aquí a que esta promesa se
        resuelva y dame su valor». Mientras esa función espera, el resto del programa sigue funcionando.
      </p>
      <CodeFiddle
        language="javascript"
        title="La misma lógica de dos formas"
        code={`const esperar = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Con then
function conThen() {
  return esperar(1000).then(() => "listo");
}

// Con async/await: se lee de arriba hacia abajo
async function conAwait() {
  await esperar(1000);   // la función se pausa aquí, el resto del programa no
  return "listo";
}

// También con flecha
const conFlecha = async () => {
  await esperar(1000);
  return "listo";
};`}
      />

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">En qué orden se ejecuta</h3>
      <StepReveal
        title="La ejecución paso a paso"
        steps={[
          { title: "Se llama a la función async", content: "Empieza a ejecutarse línea por línea, como cualquier función." },
          { title: "Aparece un await", content: "La función se pausa en esa línea y entrega el control: el resto del programa sigue funcionando." },
          { title: "La promesa se resuelve", content: "Si se cumplió, await devuelve su valor y la función continúa donde se quedó." },
          { title: "Si se rechazó", content: "await lanza un error, igual que throw. Si se rodea con try/catch, se captura." },
          { title: "La función termina", content: "Su resultado se entrega envuelto en una promesa a quien la llamó." },
        ]}
      />

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Manejo de errores con try, catch y finally</h3>
      <p className="my-4">
        Todo lo que depende de la red puede fallar: no hay internet, el servidor está apagado, la respuesta llegó dañada.
        Una buena aplicación espera esos fallos y los trata. El patrón es siempre el mismo:
      </p>
      <CodeFiddle
        language="javascript"
        title="El esqueleto que se usa siempre"
        code={`async function cargarDatos() {
  try {
    // 1. Se intenta lo que puede fallar
    const resultado = await operacionLenta();
    return resultado;
  } catch (error) {
    // 2. Si algo falla, se llega aquí con el error
    console.error("No se pudo cargar:", error);
    throw error;          // o se devuelve un valor alternativo, según el caso
  } finally {
    // 3. Se ejecuta siempre, haya salido bien o mal (ideal para apagar un indicador de carga)
    console.log("Terminó el intento");
  }
}`}
      />

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Una tras otra o todas a la vez</h3>
      <p className="my-4">
        Si dos peticiones no dependen una de otra, no tiene sentido esperar a que termine la primera para empezar la
        segunda. Se pueden lanzar juntas con <code>Promise.all</code> para ganar tiempo.
      </p>
      <CodeFiddle
        language="javascript"
        title="Secuencial frente a paralelo"
        code={`// Secuencial: tarda la suma de los dos tiempos
const materias = await pedir("/materias");   // 1 segundo
const docentes = await pedir("/docentes");   // + 1 segundo = 2 segundos

// En paralelo: tarda lo que tarde la más lenta
const [materias2, docentes2] = await Promise.all([
  pedir("/materias"),
  pedir("/docentes"),
]);   // ~1 segundo en total`}
      />
      <Callout title="Si una falla, Promise.all falla" variant="callout-info">
        <p className="mb-0">
          <code>Promise.all</code> se rechaza apenas una de las promesas falla. Si hace falta el resultado de cada una, aun si
          alguna falló, corresponde <code>Promise.allSettled</code>.
        </p>
      </Callout>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Los errores más comunes</h3>
      <CompareTable
        headers={["Error", "Qué ocurre", "Cómo se corrige"]}
        rows={[
          ["Olvidar await", "Se obtiene una promesa pendiente en lugar de los datos (aparece Promise { <pending> })", "Escribir await antes de la llamada"],
          ["Usar await fuera de una función async", "Error de sintaxis", "Marcar la función como async (los módulos de Vite también permiten await en el nivel superior del archivo)"],
          ["await dentro de forEach", "forEach no espera: las operaciones se lanzan sin control", "Usar un bucle for…of, o Promise.all con map"],
          ["No usar try/catch", "Un error de red rompe la pantalla sin explicación", "Rodear con try/catch y mostrar un mensaje"],
          ["Pasar una función async directamente a useEffect", "useEffect espera una función de limpieza, no una promesa", "Definir una función async adentro y llamarla (se aplica en la página del CRUD)"],
        ]}
      />

    </section>
  );
}
