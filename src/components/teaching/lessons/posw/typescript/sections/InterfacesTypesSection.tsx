import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function InterfacesTypesSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Interfaces, types y enums"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "Interfaces: contratos para forma de objetos; ? opcional, readonly, extends."
          }
        </li>
        <li>{"Type aliases: uniones, intersecciones y alias complejos."}</li>
        <li>
          {
            "Regla práctica: interface para objetos/clases; type para uniones (Producto | Error)."
          }
        </li>
        <li>
          {
            "Enums: constantes con nombre; preferir string enums para JSON predecible."
          }
        </li>
      </ul>
      <MermaidDiagram
        title="Mapa mental — InterfacesTypes"
        chart={`mindmap
  root((InterfacesTypes))
    Interfaces
    Type aliases
    Regla práctica
    Enums`}
      />

      <CodeFiddle
        language="typescript"
        title="Interface y respuesta de API genérica"
        code={`interface Producto {
  id: number;
  nombre: string;
  precio: number;
  descripcion?: string;
  readonly creado_en: Date;
}

type ApiResponse<T> = {
  data: T;
  status: number;
  mensaje: string;
  timestamp: string;
};

function mostrarProducto(p: Producto): string {
  return \`\${p.nombre} - $\${p.precio.toLocaleString("es-CO")}\`;
}`}
      />
      <CodeFiddle
        language="typescript"
        title="Enum para estado de pedido"
        code={`enum EstadoPedido {
  PENDIENTE = "PENDIENTE",
  ENVIADO = "ENVIADO",
  ENTREGADO = "ENTREGADO"
}

interface Pedido {
  id: number;
  estado: EstadoPedido;
  total: number;
}`}
      />
      <Callout title="Frontend enterprise: precio cambia de number a string">
        {
          'El backend cambia precio a "150000.00". El frontend tipó la respuesta como any y compila sin error; toLocaleString() falla en runtime. Decisión: interface Producto compartida o generada desde OpenAPI; CI falla si el contrato no coincide.'
        }
      </Callout>
      <CompareTable
        headers={["Constructo", "Mejor para", "Ejemplo"]}
        rows={[
          [
            "interface",
            "Forma de objetos y clases",
            "interface Usuario { id: number; nombre: string }",
          ],
          [
            "type",
            "Uniones e intersecciones",
            "type Resultado = Producto | ErrorApi",
          ],
          [
            "enum",
            "Conjunto de constantes nombradas",
            'enum EstadoPedido { PENDIENTE = "PENDIENTE" }',
          ],
        ]}
      />
    </section>
  );
}
