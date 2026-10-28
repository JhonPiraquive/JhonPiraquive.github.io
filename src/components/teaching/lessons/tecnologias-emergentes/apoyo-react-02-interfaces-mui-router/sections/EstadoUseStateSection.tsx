import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function EstadoUseStateSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Estado: la memoria de un componente</h2>
      <p className="my-4">
        Hasta ahora los componentes mostraban datos que llegaban de afuera y nunca cambiaban. Una aplicación real
        reacciona: el usuario escribe, hace clic, abre un menú. Para eso el componente necesita <strong>memoria</strong>:
        recordar algo y, cuando ese algo cambia, volver a dibujarse. Esa memoria se llama <strong>estado</strong>.
      </p>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Por qué una variable normal no basta</h3>
      <CodeFiddle
        language="jsx"
        title="Esto NO funciona"
        code={`export default function ContadorRoto() {
  let cantidad = 0;

  const sumar = () => {
    cantidad = cantidad + 1;
    console.log(cantidad);   // en la consola sube...
  };

  return <button onClick={sumar}>Cantidad: {cantidad}</button>;  // ...pero la pantalla no cambia
}`}
      />
      <p className="my-4">
        Hay dos problemas. Primero, React no se entera de que la variable cambió, así que no vuelve a dibujar. Segundo,
        aunque se redibujara, la función se ejecutaría de nuevo y <code>cantidad</code> volvería a empezar en 0. El estado
        resuelve las dos cosas: avisa a React y conserva el valor entre dibujos.
      </p>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">useState</h3>
      <CodeFiddle
        language="jsx"
        title="Esto sí funciona"
        code={`import { useState } from "react";

export default function Contador() {
  const [cantidad, setCantidad] = useState(0);
  //     ^ valor actual   ^ función para cambiarlo      ^ valor inicial

  return (
    <button onClick={() => setCantidad(cantidad + 1)}>
      Cantidad: {cantidad}
    </button>
  );
}`}
      />
      <p className="my-4">
        <code>useState(0)</code> devuelve un arreglo con dos cosas: el valor actual y una función para cambiarlo. Como
        se vio con la desestructuración de arreglos, los nombres los elige el desarrollador. La costumbre es
        <code> [algo, setAlgo]</code>.
      </p>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Qué ocurre al hacer clic</h3>
      <MermaidDiagram
        title="El ciclo de un cambio de estado"
        description="Secuencia: el usuario hace clic, se llama a setCantidad, React vuelve a ejecutar el componente y actualiza la pantalla."
        chart={`sequenceDiagram
  participant U as Usuario
  participant C as Componente
  participant R as React
  participant P as Pantalla
  U->>C: Clic en el botón
  C->>R: setCantidad(1)
  R->>C: Vuelve a ejecutar la función
  C-->>R: Devuelve el JSX nuevo
  R->>P: Actualiza solo lo que cambió`}
      />
      <Callout title="Una idea clave: cada dibujo es una foto" variant="callout-info">
        <p className="mb-0">
          Cuando React ejecuta el componente, el estado vale una cosa concreta durante esa ejecución, como una fotografía.
          Llamar a <code>setCantidad(5)</code> no cambia la foto actual: pide una nueva. Por eso, justo después de llamar al
          setter, la variable sigue teniendo el valor viejo dentro de esa misma función.
        </p>
      </Callout>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Actualizar según el valor anterior</h3>
      <p className="my-4">
        Si el nuevo valor depende del anterior, se pasa una función al setter. React le entrega el valor más reciente, lo
        que evita errores cuando se hacen varios cambios seguidos.
      </p>
      <CodeFiddle
        language="jsx"
        title="Forma segura de sumar"
        code={`const sumar = () => setCantidad((anterior) => anterior + 1);

// Ejemplo de por qué importa: esto suma 3
const sumarTres = () => {
  setCantidad((n) => n + 1);
  setCantidad((n) => n + 1);
  setCantidad((n) => n + 1);
};
// En cambio, con setCantidad(cantidad + 1) tres veces seguidas, solo suma 1`}
      />

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Qué puede guardar el estado</h3>
      <CodeFiddle
        language="jsx"
        title="Distintos tipos de estado"
        code={`const [abierto, setAbierto] = useState(false);          // true o false: ¿se muestra el menú?
const [nombre, setNombre] = useState("");                // texto de un campo
const [cursos, setCursos] = useState([]);                // una lista
const [filtro, setFiltro] = useState({ texto: "", activo: true });  // un objeto`}
      />

      <Callout title="Reglas de los hooks" variant="callout-warning">
        <p className="mb-0">
          Las funciones que empiezan con <code>use</code> (useState, useEffect…) se llaman hooks. Tienen dos reglas: se
          llaman solo en el nivel principal de un componente (nunca dentro de un if, un for o una función anidada) y solo
          dentro de componentes o de otros hooks. Si se rompen, React se confunde sobre cuál estado es cuál.
        </p>
      </Callout>

    </section>
  );
}
