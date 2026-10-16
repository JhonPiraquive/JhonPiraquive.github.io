import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

const MENU = `const menu = [
  { id: 1, nombre: "Capuchino", precio: 8500, agotado: false },
  { id: 2, nombre: "Té chai", precio: 7000, agotado: true },
  { id: 3, nombre: "Brownie", precio: 6000, agotado: false },
  { id: 4, nombre: "Sándwich", precio: 12000, agotado: false },
];`;

export function ArraysYSusMetodosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Arreglos y sus métodos</h2>
      <p className="my-4">
        Un arreglo (array) es una lista ordenada. Cada elemento tiene una posición que empieza en 0. En una aplicación
        real casi todos los datos llegan como listas: productos, usuarios, pedidos. Por eso dominar los métodos del
        arreglo es lo que más vas a usar en React.
      </p>
      <CodeFiddle
        language="javascript"
        title="Lo básico de un arreglo"
        code={`const colores = ["rojo", "verde", "azul"];

console.log(colores[0]);        // "rojo" (la primera posición es 0)
console.log(colores.length);    // 3
console.log(colores.at(-1));    // "azul" (-1 es el último)
console.log(colores.includes("verde"));  // true

colores.push("negro");          // agrega al final (modifica el arreglo original)`}
      />

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Los cinco métodos que más usarás</h3>
      <p className="my-4">
        Todos reciben una función (un callback) que se ejecuta una vez por cada elemento. Para las pruebas de esta
        sección usaremos este menú de la cafetería:
      </p>
      <CodeFiddle language="javascript" title="Datos de ejemplo" code={MENU} />

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">map: transformar cada elemento</h3>
      <p className="my-4">
        Devuelve un arreglo nuevo del mismo tamaño, donde cada elemento fue transformado. En React lo usarás para
        convertir una lista de datos en una lista de tarjetas.
      </p>
      <CodeFiddle
        language="javascript"
        title="map"
        code={`const nombres = menu.map((producto) => producto.nombre);
// ["Capuchino", "Té chai", "Brownie", "Sándwich"]

const conIva = menu.map((p) => ({ ...p, precioConIva: p.precio * 1.19 }));`}
      />

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">filter: quedarse con los que cumplen</h3>
      <CodeFiddle
        language="javascript"
        title="filter"
        code={`const disponibles = menu.filter((p) => !p.agotado);
// Capuchino, Brownie, Sándwich

const baratos = menu.filter((p) => p.precio < 8000);
// Té chai, Brownie`}
      />

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">find y some: buscar uno o preguntar si existe</h3>
      <CodeFiddle
        language="javascript"
        title="find, some y every"
        code={`const brownie = menu.find((p) => p.nombre === "Brownie");   // devuelve el objeto (o undefined)
const hayAgotados = menu.some((p) => p.agotado);            // true: al menos uno cumple
const todosBaratos = menu.every((p) => p.precio < 20000);   // true: todos cumplen`}
      />

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">reduce: convertir la lista en un solo valor</h3>
      <p className="my-4">
        Recorre la lista llevando una «bolsa» (acumulador). En cada elemento actualizas la bolsa. Al final obtienes
        un único resultado, como un total.
      </p>
      <CodeFiddle
        language="javascript"
        title="reduce"
        code={`const total = menu.reduce((acumulado, producto) => acumulado + producto.precio, 0);
// 33500   (el 0 es el valor con el que empieza la bolsa)`}
      />

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Combinarlos en cadena</h3>
      <CodeFiddle
        language="javascript"
        title="Encadenar métodos"
        code={`const etiquetas = menu
  .filter((p) => !p.agotado)                       // 1. solo los disponibles
  .map((p) => \`\${p.nombre} - $\${p.precio}\`);       // 2. los convierto en texto
// ["Capuchino - $8500", "Brownie - $6000", "Sándwich - $12000"]`}
      />

      <CompareTable
        title="¿Qué método uso?"
        headers={["Necesito…", "Método", "Devuelve"]}
        rows={[
          ["Transformar cada elemento", "map", "Arreglo nuevo del mismo tamaño"],
          ["Quedarme con algunos", "filter", "Arreglo nuevo, igual o más corto"],
          ["Encontrar un elemento", "find", "Un elemento o undefined"],
          ["Saber si existe alguno / si todos cumplen", "some / every", "true o false"],
          ["Sumar, contar o agrupar en un valor", "reduce", "Un único valor"],
          ["Ordenar sin tocar el original", "toSorted", "Arreglo nuevo ordenado"],
        ]}
      />

      <Callout title="Métodos que modifican y métodos que no" variant="callout-warning">
        <p className="mb-0">
          <code>push</code>, <code>pop</code>, <code>splice</code> y <code>sort</code> cambian el arreglo original.
          <code> map</code>, <code>filter</code>, <code>slice</code> y <code>toSorted</code> devuelven uno nuevo y dejan
          el original intacto. React necesita trabajar con copias nuevas para detectar cambios, así que en estas clases
          preferirás los segundos. Lo verás con calma en la clase 2.
        </p>
      </Callout>

      <PracticeExercise
        title="Practica con el menú"
        prompt="Con el arreglo menu de arriba, escribe una expresión que devuelva los nombres de los productos que están disponibles y cuestan menos de 10000. Pista: combina dos métodos."
        hints={["Primero filtra por las dos condiciones", "Después transforma con map para quedarte solo con el nombre", "menu.filter((p) => !p.agotado && p.precio < 10000).map((p) => p.nombre)"]}
        expectedKeywords={["filter", "map"]}
      />
    </section>
  );
}
