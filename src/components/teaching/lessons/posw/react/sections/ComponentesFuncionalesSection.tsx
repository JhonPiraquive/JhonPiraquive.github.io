import { CodeChallenge } from "@/components/teaching/CodeChallenge";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function ComponentesFuncionalesSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Componentes funcionales"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          {"Componente funcional: función que recibe props y retorna JSX."}
        </li>
        <li>
          {"Props tipadas: interface TypeScript para contrato padre-hijo."}
        </li>
        <li>{"Composición: componentes pequeños que se ensamblan."}</li>
        <li>
          {"key en listas: ID estable para reconciliación del Virtual DOM."}
        </li>
      </ul>
      <MermaidDiagram
        title="Mapa mental — ComponentesFuncionales"
        chart={`mindmap
  root((ComponentesFuncionales))
    Componente funcional
    Props tipadas
    Composición
    key en listas`}
      />

      <CodeFiddle
        language="javascript"
        title="Componente con props tipadas"
        code={`interface TarjetaProductoProps {
  nombre: string;
  precio: number;
  imagen: string;
  onAgregar: (nombre: string) => void;
}

function TarjetaProducto({ nombre, precio, imagen, onAgregar }: TarjetaProductoProps) {
  const precioFormateado = precio.toLocaleString("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0
  });

  return (
    <article className="tarjeta-producto">
      <img src={imagen} alt={\`Foto de \${nombre}\`} loading="lazy" />
      <h3>{nombre}</h3>
      <p className="precio">{precioFormateado}</p>
      <button onClick={() => onAgregar(nombre)}>Agregar al carrito</button>
    </article>
  );
}`}
      />
      <CodeFiddle
        language="javascript"
        title="Composición y lista con key"
        code={`function Catalogo() {
  const productos = [
    { id: 1, nombre: "Laptop Pro 15", precio: 4500000, imagen: "/img/laptop.jpg" },
    { id: 2, nombre: "Mouse inalámbrico", precio: 85000, imagen: "/img/mouse.jpg" }
  ];

  const handleAgregar = (nombre: string) => {
    console.log(\`\${nombre} agregado al carrito\`);
  };

  return (
    <section className="catalogo">
      {productos.map(p => (
        <TarjetaProducto
          key={p.id}
          nombre={p.nombre}
          precio={p.precio}
          imagen={p.imagen}
          onAgregar={handleAgregar}
        />
      ))}
    </section>
  );
}`}
      />
      <CodeChallenge
        title="Completa el render de lista"
        template="productos.map(p => <TarjetaProducto key={{blank1}} nombre={p.nombre} ... />)"
        blanks={[{ id: "blank1", answer: "p.id", placeholder: "key estable" }]}
      />
    </section>
  );
}
