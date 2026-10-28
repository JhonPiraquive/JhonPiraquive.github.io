import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";

export function ObjetosYDesestructuracionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Objetos y desestructuración</h2>
      <p className="my-4">
        Un objeto agrupa datos que pertenecen a la misma cosa. En vez de tener tres variables sueltas (nombre, precio,
        agotado), se crea un solo objeto <em>producto</em> con tres propiedades. Cada propiedad tiene una llave (el nombre)
        y un valor.
      </p>
      <CodeFiddle
        language="javascript"
        title="Crear y usar un objeto"
        code={`const producto = {
  id: 1,
  nombre: "Capuchino",
  precio: 8500,
  descuento: 10,            // porcentaje
  agotado: false,
  etiquetas: ["caliente", "leche"],
  proveedor: { nombre: "Finca La Esperanza", ciudad: "Manizales" },
};

// Leer
console.log(producto.nombre);               // "Capuchino"
console.log(producto["precio"]);            // 8500 (útil cuando la llave está en una variable)
console.log(producto.proveedor.ciudad);     // "Manizales"

// Cambiar o agregar
producto.precio = 9000;
producto.stock = 12;

// Borrar
delete producto.etiquetas;`}
      />

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Objetos y JSON: parecidos, pero no iguales</h3>
      <p className="my-4">
        JSON es un formato de texto para intercambiar datos entre programas. Se parece mucho a un objeto de JavaScript,
        pero es texto plano y es más estricto: las llaves siempre van entre comillas dobles y no admite funciones. Es el
        idioma con el que una página se comunica con los servidores, tema de la parte 3 de la guía.
      </p>
      <CodeFiddle
        language="javascript"
        title="Convertir entre objeto y texto JSON"
        code={`const producto = { nombre: "Té", precio: 5000 };

const texto = JSON.stringify(producto);   // objeto -> texto: '{"nombre":"Té","precio":5000}'
const objeto = JSON.parse(texto);         // texto -> objeto

console.log(typeof texto);   // "string"
console.log(typeof objeto);  // "object"`}
      />

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Desestructuración de objetos</h3>
      <p className="my-4">
        Desestructurar es sacar varias propiedades de un objeto en una sola línea, creando una variable por cada una.
        Evita escribir <code>producto.</code> una y otra vez. En React se usa en cada componente.
      </p>
      <CodeFiddle
        language="javascript"
        title="Sacar propiedades de un objeto"
        code={`const producto = { nombre: "Capuchino", precio: 8500, descuento: 10 };

// Sin desestructurar
const nombre1 = producto.nombre;
const precio1 = producto.precio;

// Desestructurando
const { nombre, precio } = producto;

// Cambiar el nombre de la variable
const { precio: valorOriginal } = producto;

// Valor por defecto si la propiedad no existe
const { agotado = false } = producto;

// Objetos anidados
const { proveedor: { ciudad } = {} } = { proveedor: { ciudad: "Manizales" } };`}
      />
      <p className="my-4">
        El uso más importante es desestructurar <strong>en los parámetros</strong> de una función: así se declara desde la
        primera línea qué datos necesita.
      </p>
      <CodeFiddle
        language="javascript"
        title="Desestructurar en los parámetros"
        code={`// Sin desestructurar
const describir = (producto) => \`\${producto.nombre}: $\${producto.precio}\`;

// Desestructurando en el parámetro
const describir2 = ({ nombre, precio }) => \`\${nombre}: $\${precio}\`;

console.log(describir2({ nombre: "Té", precio: 5000 }));  // "Té: $5000"`}
      />

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Desestructuración de arreglos</h3>
      <p className="my-4">
        Con los arreglos importa la <strong>posición</strong>, no el nombre. Se aplica en{" "}
        <code>useState</code>, que devuelve un arreglo de dos elementos.
      </p>
      <CodeFiddle
        language="javascript"
        title="Sacar elementos por posición"
        code={`const colores = ["rojo", "verde", "azul"];
const [primero, segundo] = colores;   // primero = "rojo", segundo = "verde"
const [, , tercero] = colores;         // saltar posiciones con comas

// Intercambiar valores sin variable auxiliar
let a = 1, b = 2;
[a, b] = [b, a];                       // a = 2, b = 1`}
      />

      <CompareTable
        headers={["Necesidad", "Herramienta", "Ejemplo"]}
        rows={[
          ["Sacar propiedades por nombre", "Desestructuración de objeto con llaves", "const { nombre } = producto"],
          ["Sacar elementos por posición", "Desestructuración de arreglo con corchetes", "const [a, b] = lista"],
          ["Cambiar el nombre al sacarlo", "Dos puntos", "const { precio: valor } = producto"],
          ["Dar un valor si no existe", "Signo igual", "const { agotado = false } = producto"],
        ]}
      />

      <Callout title="Qué conviene recordar" variant="callout-info">
        <p className="mb-0">
          La desestructuración no cambia el objeto original: solo crea variables nuevas con copias de los valores.
          Si una propiedad es a su vez un objeto o un arreglo, la variable apunta al mismo objeto, no a una copia.
        </p>
      </Callout>

    </section>
  );
}
