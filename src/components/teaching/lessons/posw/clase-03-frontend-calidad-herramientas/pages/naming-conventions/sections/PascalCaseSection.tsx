import { CodeFiddle } from "@/components/teaching/CodeFiddle";

const PASCAL_TS = `interface ProductoResponse {
  id: number;
  nombre: string;
  precio: number;
}

type EstadoPedido = "PENDIENTE" | "ENVIADO" | "ENTREGADO";

enum RolUsuario {
  Admin = "ADMIN",
  Vendedor = "VENDEDOR",
}

function TarjetaProducto() {
  return null; // componente React
}`;

export function PascalCaseSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"PascalCase: clases, tipos y componentes React"}
      </h2>
      <p className="my-4">
        {"Cada palabra capitalizada. Clases, interfaces, types, enums y componentes React."}
      </p>
      <CodeFiddle language="typescript" title="Interfaces, enums y componente" code={PASCAL_TS} />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Malas prácticas en el mundo real"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"PascalCase en URLs: /api/ObtenerProductos rompe convención REST."}</li>
        <li>{"camelCase en nombres de componente React: el JSX espera PascalCase."}</li>
      </ul>
    </section>
  );
}
