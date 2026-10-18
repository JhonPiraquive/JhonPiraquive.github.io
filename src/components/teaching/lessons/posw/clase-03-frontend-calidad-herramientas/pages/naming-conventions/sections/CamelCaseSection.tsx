import { CodeFiddle } from "@/components/teaching/CodeFiddle";

const CAMEL_TS = `let nombreCompleto = "Ana García";
let estaActivo = true;

function calcularDescuento(precio: number, porcentaje: number): number {
  return precio * (porcentaje / 100);
}

class Producto {
  nombreProducto: string;
  precioBase: number;
  fechaCreacion: Date;
}`;

const CAMEL_JSON = `{
  "nombreCompleto": "Ana García",
  "fechaNacimiento": "1997-03-15",
  "estaActivo": true,
  "pedidosRecientes": [
    { "pedidoId": 101, "precioTotal": 5355000 }
  ]
}`;

export function CamelCaseSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"camelCase: variables, funciones y JSON"}
      </h2>
      <p className="my-4">
        {
          "Primera palabra en minúscula; siguientes capitalizadas. Estándar en JavaScript/TypeScript para variables, funciones, métodos y props JSON."
        }
      </p>
      <CodeFiddle language="typescript" title="Variables y funciones TS" code={CAMEL_TS} />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"JSON en APIs REST"}</h3>
      <CodeFiddle language="json" title="Respuesta API camelCase" code={CAMEL_JSON} />
    </section>
  );
}
