import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function SpreadYModulosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Spread, rest y módulos</h2>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Spread: esparcir un arreglo u objeto</h3>
      <p className="my-4">
        Los tres puntos <code>...</code> «abren» un arreglo o un objeto y esparcen su contenido. Sirven para hacer
        copias y para crear versiones modificadas sin tocar el original. Esa es exactamente la técnica que usará React
        para actualizar datos.
      </p>
      <CodeFiddle
        language="javascript"
        title="Spread con arreglos y objetos"
        code={`const lista = [1, 2, 3];
const masUno = [...lista, 4];          // [1, 2, 3, 4]  (lista no cambia)
const alPrincipio = [0, ...lista];     // [0, 1, 2, 3]

const producto = { nombre: "Té", precio: 5000, agotado: false };
const actualizado = { ...producto, agotado: true };
// { nombre: "Té", precio: 5000, agotado: true }   (producto no cambia)

const unidos = { ...producto, ...{ stock: 5 } };   // une dos objetos`}
      />
      <Callout title="Una copia superficial" variant="callout-info">
        <p className="mb-0">
          Spread copia solo el primer nivel. Si el objeto tiene otro objeto dentro, ese objeto interno se comparte entre
          la copia y el original. Para copias totalmente independientes existe <code>structuredClone(objeto)</code>.
        </p>
      </Callout>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Rest: recoger lo que sobra</h3>
      <p className="my-4">
        Con los mismos tres puntos, pero al <em>recibir</em> datos, recoges «el resto» en un arreglo u objeto.
      </p>
      <CodeFiddle
        language="javascript"
        title="Rest en parámetros y en desestructuración"
        code={`const sumar = (...numeros) => numeros.reduce((a, b) => a + b, 0);
console.log(sumar(1, 2, 3, 4));   // 10

const { nombre, ...resto } = { nombre: "Té", precio: 5000, agotado: false };
console.log(resto);               // { precio: 5000, agotado: false }`}
      />

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Módulos: cada archivo hace una cosa</h3>
      <p className="my-4">
        Un proyecto real no cabe en un solo archivo. Con los módulos divides el código en archivos y compartes lo que
        quieras con <code>export</code>. Otro archivo lo trae con <code>import</code>.
      </p>
      <CodeFiddle
        language="javascript"
        title="src/utils/precios.js"
        code={`// export nombrado: puedes tener varios por archivo
export const formatearPrecio = (valor) =>
  valor.toLocaleString("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 });

export const aplicarDescuento = (precio, porcentaje) => precio - precio * (porcentaje / 100);

// export por defecto: solo uno por archivo
const IVA = 0.19;
export default IVA;`}
      />
      <CodeFiddle
        language="javascript"
        title="src/main.js"
        code={`import IVA, { formatearPrecio, aplicarDescuento } from "./utils/precios.js";
//     ^ el default no lleva llaves    ^ los nombrados sí

console.log(formatearPrecio(aplicarDescuento(10000, 20)));  // "$ 8.000"`}
      />
      <CompareTable
        headers={["Tipo", "Cómo se exporta", "Cómo se importa", "Cuántos por archivo"]}
        rows={[
          ["Nombrado", "export const a = 1", "import { a } from './x'", "Varios"],
          ["Por defecto", "export default a", "import cualquierNombre from './x'", "Uno"],
        ]}
      />
      <MermaidDiagram
        title="Cómo se conectan los archivos de un proyecto"
        description="Diagrama de flujo donde main.jsx importa App.jsx, que importa componentes y utilidades."
        chart={`flowchart TD
  M["main.jsx"] --> A["App.jsx"]
  A --> T["TarjetaProducto.jsx"]
  A --> U["utils/precios.js"]
  T --> U`}
      />
      <Callout title="Rutas en los import" variant="callout-tip">
        <p className="mb-0">
          Las rutas que empiezan con <code>./</code> o <code>../</code> son relativas al archivo actual. Las que no
          empiezan así (<code>import React from &quot;react&quot;</code>) buscan el paquete en la carpeta{" "}
          <code>node_modules</code>.
        </p>
      </Callout>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Novedades recientes de JavaScript: úsalas con criterio</h3>
      <p className="my-4">
        El lenguaje se actualiza cada año. Algunas novedades ya están disponibles en los navegadores actuales y te ahorran
        código. Antes de usarlas, revisa en la página de MDN la etiqueta de compatibilidad (Baseline) para saber si tus
        usuarios las soportan.
      </p>
      <CompareTable
        headers={["Novedad", "Para qué sirve", "¿Conviene aprenderla ahora?"]}
        rows={[
          ["Object.groupBy (ES2024)", "Agrupar una lista por una característica", "Sí, útil para reportes y tablas"],
          ["toSorted, toSpliced, with (ES2023)", "Versiones de sort, splice y asignación que no modifican el original", "Sí, encajan con la forma de trabajar de React"],
          ["Métodos de Set: union, intersection, difference (ES2025)", "Operaciones entre conjuntos", "Cuando lo necesites; no es prioritario"],
          ["Promise.try (ES2025)", "Iniciar una promesa desde una función que puede fallar", "Más adelante, cuando domines las promesas"],
          ["Ayudantes de iteradores (ES2025)", "map y filter para iteradores sin crear listas intermedias", "Es para casos avanzados de rendimiento"],
        ]}
      />
    </section>
  );
}
