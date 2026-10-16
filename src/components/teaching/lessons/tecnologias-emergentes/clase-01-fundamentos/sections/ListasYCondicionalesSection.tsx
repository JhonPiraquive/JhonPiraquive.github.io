import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";

export function ListasYCondicionalesSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Listas y condicionales en JSX</h2>
      <p className="my-4">
        Con lo anterior ya puedes construir una tarjeta. Ahora vamos a hacer lo que hace útil a React: dibujar muchas
        tarjetas a partir de una lista de datos, y decidir qué mostrar según los datos de cada una. Seguimos con el Café
        del Parque.
      </p>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Paso 1: los datos</h3>
      <CodeFiddle
        language="javascript"
        title="src/data/productos.js"
        code={`export const productos = [
  {
    id: 1,
    nombre: "Capuchino",
    descripcion: "Espresso con leche vaporizada y una capa de espuma.",
    imagen: "/img/capuchino.jpg",
    precio: 8500,
    precioDescuento: 7500,   // tiene descuento
    tamanos: 3,
    agotado: false,
  },
  {
    id: 2,
    nombre: "Té chai",
    descripcion: "Té negro con especias y leche.",
    imagen: "/img/te-chai.jpg",
    precio: 7000,
    precioDescuento: null,   // sin descuento
    tamanos: 2,
    agotado: true,
  },
  // ...más productos
];`}
      />

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Paso 2: funciones de apoyo</h3>
      <p className="my-4">
        Todo lo que no es dibujar (como dar formato a un precio) va en un archivo aparte. Así el componente queda corto
        y puedes reutilizar la función.
      </p>
      <CodeFiddle
        language="javascript"
        title="src/utils/precios.js"
        code={`export const formatearPrecio = (valor) =>
  valor.toLocaleString("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  });`}
      />

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Paso 3: la tarjeta con condicionales</h3>
      <p className="my-4">Observa tres decisiones dentro del componente: precio normal o con descuento, etiqueta de agotado y cantidad de tamaños.</p>
      <CodeFiddle
        language="jsx"
        title="src/components/TarjetaProducto.jsx"
        code={`import { formatearPrecio } from "../utils/precios";
import "./TarjetaProducto.css";

export default function TarjetaProducto({
  nombre,
  descripcion,
  imagen,
  precio,
  precioDescuento = null,
  tamanos,
  agotado = false,
}) {
  const tieneDescuento = precioDescuento !== null;

  return (
    <article className="tarjeta">
      <img className="tarjeta__imagen" src={imagen} alt={nombre} />

      <h3 className="tarjeta__nombre">{nombre}</h3>
      <p className="tarjeta__descripcion">{descripcion}</p>

      {/* Decisión 1: ¿precio normal o precio con descuento? */}
      {tieneDescuento ? (
        <p className="tarjeta__precios">
          <span className="precio precio--original">{formatearPrecio(precio)}</span>
          <span className="precio precio--descuento">{formatearPrecio(precioDescuento)}</span>
        </p>
      ) : (
        <p className="tarjeta__precios">
          <span className="precio">{formatearPrecio(precio)}</span>
        </p>
      )}

      <p className="tarjeta__tamanos">
        {tamanos} {tamanos === 1 ? "tamaño" : "tamaños"}
      </p>

      {/* Decisión 2: etiqueta solo si está agotado */}
      {agotado && <span className="tarjeta__agotado">Agotado</span>}
    </article>
  );
}`}
      />

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Tres formas de decidir qué mostrar</h3>
      <CompareTable
        headers={["Quiero…", "Uso…", "Ejemplo"]}
        rows={[
          ["Elegir entre dos cosas", "Ternario ? :", "{agotado ? <Aviso /> : <Boton />}"],
          ["Mostrar algo solo si se cumple una condición", "Operador &&", "{agotado && <Aviso />}"],
          ["No dibujar el componente en ciertos casos", "return null antes del JSX", "if (!producto) return null;"],
        ]}
      />

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Paso 4: recorrer la lista con map</h3>
      <CodeFiddle
        language="jsx"
        title="src/App.jsx"
        code={`import TarjetaProducto from "./components/TarjetaProducto.jsx";
import { productos } from "./data/productos.js";
import "./App.css";

export default function App() {
  return (
    <main className="contenedor">
      <h1>Café del Parque</h1>

      <section className="grilla">
        {productos.map((producto) => (
          <TarjetaProducto
            key={producto.id}
            nombre={producto.nombre}
            descripcion={producto.descripcion}
            imagen={producto.imagen}
            precio={producto.precio}
            precioDescuento={producto.precioDescuento}
            tamanos={producto.tamanos}
            agotado={producto.agotado}
          />
        ))}
      </section>
    </main>
  );
}`}
      />
      <p className="my-4">
        Hay una forma más corta de pasar todas las props: <code>{"<TarjetaProducto key={p.id} {...p} />"}</code>. Usa el
        spread que viste antes. Funciona muy bien cuando los nombres de las propiedades coinciden con los de las props,
        como aquí.
      </p>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Por qué hace falta la key</h3>
      <p className="my-4">
        Cuando la lista cambia (aparece, desaparece o se reordena un elemento), React necesita saber cuál tarjeta es
        cuál para actualizar solo lo necesario. La <code>key</code> es esa identidad. Debe ser <strong>única entre
        hermanos</strong> y <strong>estable</strong>: el id del dato es ideal.
      </p>
      <Callout title="Evita usar el índice como key" variant="callout-warning">
        <p className="mb-0">
          Usar la posición (<code>index</code>) parece funcionar, pero si la lista se reordena o se borra un elemento,
          React mezcla los datos de las tarjetas y puedes ver errores raros, como textos escritos en la fila equivocada. Úsalo
          solo en listas que nunca cambian.
        </p>
      </Callout>
    </section>
  );
}
