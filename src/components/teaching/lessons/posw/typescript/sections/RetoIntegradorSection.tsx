import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function RetoIntegradorSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Reto integrador: tipa el cliente de una API REST de pedidos"}
      </h2>
      <p className="my-4 font-semibold">{"Tipa el cliente de una API REST de pedidos"}</p>
      <p className="my-4">
        {"Un backend expone GET /api/v1/pedidos/:id con JSON como el ejemplo siguiente."}
      </p>
      <CodeFiddle
        language="javascript"
        title="Respuesta GET /api/v1/pedidos/:id"
        code={`{
  "data": {
    "id": 1,
    "estado": "PENDIENTE",
    "items": [{ "productoId": 42, "cantidad": 2, "precioUnitario": 150000 }]
  },
  "status": 200,
  "mensaje": "OK",
  "timestamp": "2025-06-23T10:00:00Z"
}`}
      />
      <ol className="my-4 list-decimal pl-6">
        <li>{"Define enum EstadoPedido, interface ItemPedido, interface Pedido y type ApiResponse<T>."}</li>
        <li>{"Escribe async function obtenerPedido(id: number): Promise<ApiResponse<Pedido>> con fetch tipado."}</li>
        <li>{"Escribe function calcularTotal(pedido: Pedido): number que multiplique cantidad × precioUnitario."}</li>
        <li>{"Indica qué error detectaría TypeScript si precioUnitario fuera string en el interface."}</li>
        <li>{"Propón una opción de tsconfig.json crítica para este proyecto y justifica strict: true."}</li>
      </ol>
      <p className="my-4 text-sm text-[var(--color-neutral-mid)]">
        {
          "Criterio de éxito: sin any, enums string para estado, genérico en respuesta API, función de total con tipos numéricos explícitos."
        }
      </p>
      <CodeFiddle
        language="typescript"
        title="Cliente tipado de pedidos"
        code={`enum EstadoPedido {
  PENDIENTE = "PENDIENTE",
  ENVIADO = "ENVIADO"
}

interface ItemPedido {
  productoId: number;
  cantidad: number;
  precioUnitario: number;
}

interface Pedido {
  id: number;
  estado: EstadoPedido;
  items: ItemPedido[];
}

type ApiResponse<T> = {
  data: T;
  status: number;
  mensaje: string;
  timestamp: string;
};

async function obtenerPedido(id: number): Promise<ApiResponse<Pedido>> {
  const res = await fetch(\`/api/v1/pedidos/\${id}\`);
  return res.json();
}

function calcularTotal(pedido: Pedido): number {
  return pedido.items.reduce(
    (sum, item) => sum + item.cantidad * item.precioUnitario,
    0
  );
}`}
      />
      <PracticeExercise
        prompt="Implementa el reto de pedidos: define interfaces, enum string, ApiResponse<T> y calcularTotal sin usar any."
        hints={[
          "EstadoPedido como string enum",
          "precioUnitario: number",
          "strict: true en tsconfig",
          "reduce para sumar items",
        ]}
        expectedKeywords={["enum", "interface", "ApiResponse", "number"]}
        successMessage="Excelente. Has tipado un cliente REST completo con genéricos y sin any."
        rows={6}
      />
    </section>
  );
}
