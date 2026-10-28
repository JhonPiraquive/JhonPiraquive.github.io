import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";
import { StepReveal } from "@/components/teaching/StepReveal";

export function FuncionesYFlechaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Funciones y funciones flecha</h2>
      <p className="my-4">
        Una función es una receta con nombre. Recibe ingredientes (parámetros), hace unos pasos y devuelve un resultado.
        La receta se escribe una vez y se usa todas las veces que haga falta. En React, todo componente es una función,
        así que este tema es la base de todo lo que sigue.
      </p>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Tres formas de escribir lo mismo</h3>
      <CodeFiddle
        language="javascript"
        title="Calcular el precio con descuento"
        code={`// 1. Declaración de función (la forma clásica)
function precioConDescuento(precio, porcentaje) {
  return precio - precio * (porcentaje / 100);
}

// 2. Expresión de función: la función se guarda en una variable
const precioConDescuento2 = function (precio, porcentaje) {
  return precio - precio * (porcentaje / 100);
};

// 3. Función flecha: la forma moderna y corta
const precioConDescuento3 = (precio, porcentaje) => {
  return precio - precio * (porcentaje / 100);
};

console.log(precioConDescuento(10000, 20));  // 8000`}
      />

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Cómo se construye una función flecha</h3>
      <StepReveal
        title="De la función larga a la flecha corta"
        steps={[
          { title: "Se parte de una función normal", content: "function doble(n) { return n * 2; }" },
          { title: "Se quita la palabra function y se guarda en una const", content: "const doble = (n) => { return n * 2; };  La flecha => reemplaza a la palabra function." },
          { title: "Si el cuerpo es una sola expresión, se quitan llaves y return", content: "const doble = (n) => n * 2;  El resultado se devuelve solo. Se llama retorno implícito." },
          { title: "Con un solo parámetro, los paréntesis son opcionales", content: "const doble = n => n * 2;  Muchos equipos prefieren dejar los paréntesis siempre; Prettier los agrega automáticamente." },
        ]}
      />
      <CodeFiddle
        language="javascript"
        title="Variantes de la flecha"
        code={`const saludar = () => "Hola";                 // sin parámetros
const doble = (n) => n * 2;                   // un parámetro, retorno implícito
const sumar = (a, b) => a + b;                // dos parámetros

// Con varias líneas hacen falta llaves y return
const esMayor = (edad) => {
  const limite = 18;
  return edad >= limite;
};

// Para devolver un objeto de forma implícita, se escribe entre paréntesis
const crearProducto = (nombre, precio) => ({ nombre, precio });
console.log(crearProducto("Té", 5000));      // { nombre: "Té", precio: 5000 }`}
      />
      <Callout title="Error muy común" variant="callout-danger">
        <p className="mb-0">
          Con <code>{"(n) => { nombre: n }"}</code> JavaScript interpreta que las llaves son el cuerpo de la función, no
          un objeto, y devuelve <code>undefined</code>. La solución es envolver el objeto en paréntesis:{" "}
          <code>{"(n) => ({ nombre: n })"}</code>.
        </p>
      </Callout>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Valores por defecto</h3>
      <CodeFiddle
        language="javascript"
        title="Parámetros con valor por defecto"
        code={`const saludar = (nombre = "visitante") => \`Hola, \${nombre}\`;

console.log(saludar("Ana"));   // Hola, Ana
console.log(saludar());        // Hola, visitante`}
      />
      <p className="my-4">
        Este recurso reemplaza a <code>defaultProps</code> en las versiones actuales de React y se retoma al estudiar las props.
      </p>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Funciones que reciben funciones</h3>
      <p className="my-4">
        En JavaScript una función es un valor más: puede guardarse en una variable y también pasarse a otra función.
        A la función que se entrega para que otra la use después se le llama <strong>callback</strong> (en español,
        «función de respuesta»). Es la idea detrás de los clics, las listas y las peticiones a un servidor.
      </p>
      <CodeFiddle
        language="javascript"
        title="Un callback sencillo"
        code={`const repetir = (veces, accion) => {
  for (let i = 0; i < veces; i++) {
    accion(i);
  }
};

// Se pasa una flecha como callback
repetir(3, (numero) => console.log(\`Pedido número \${numero + 1}\`));

// En el navegador, el callback se ejecuta cuando ocurre algo:
// boton.addEventListener("click", () => console.log("Se hizo clic"));`}
      />

      <CompareTable
        title="Función normal frente a función flecha"
        headers={["Aspecto", "function", "Flecha =>"]}
        rows={[
          ["Sintaxis", "Más larga", "Más corta"],
          ["Retorno implícito", "No", "Sí, si el cuerpo es una expresión"],
          ["this propio", "Sí (cambia según cómo se llame)", "No: toma el this de donde fue escrita"],
          ["Uso habitual en React", "Componentes (por costumbre de algunos equipos)", "Callbacks, handlers y componentes"],
        ]}
      />

    </section>
  );
}
