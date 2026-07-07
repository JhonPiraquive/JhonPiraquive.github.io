import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";

export function GraphqlSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"GraphQL"}</h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          {"Lenguaje de "}
          <strong>{"consulta"}</strong>
          {" y runtime (Facebook 2012, open source 2015)."}
        </li>
        <li>
          <strong>{"Un endpoint"}</strong>
          {" (POST /graphql); el cliente pide campos exactos."}
        </li>
        <li>
          {"Resuelve "}
          <strong>{"over-fetching"}</strong>
          {" y "}
          <strong>{"under-fetching"}</strong>
          {" de REST."}
        </li>
        <li>{"Schema evoluciona; mutations para escritura."}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Over-fetching y under-fetching"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Over-fetching (REST):"}</strong>
          {
            " GET /api/usuarios/42 devuelve 30 campos; el móvil solo necesita nombre y avatar → desperdicio de ancho de banda."
          }
        </li>
        <li>
          <strong>{"Under-fetching (REST):"}</strong>
          {" cargar un pedido requiere 3 requests (pedido, cliente, items) → latencia acumulada."}
        </li>
        <li>
          <strong>{"GraphQL:"}</strong>
          {" una query pide exactamente lo necesario con relaciones anidadas."}
        </li>
      </ul>
      <CodeFiddle
        language="graphql"
        title="Query GraphQL"
        code={`query ObtenerPedido($id: ID!) {
  pedido(id: $id) {
    id
    total
    cliente {
      nombre
      email
    }
    items {
      producto {
        nombre
        precio
      }
      cantidad
    }
  }
}`}
      />
      <CodeFiddle
        language="json"
        title="Respuesta GraphQL (JSON)"
        code={`{
  "data": {
    "pedido": {
      "id": "7",
      "total": 890000,
      "cliente": { "nombre": "Ana Ruiz", "email": "ana@ejemplo.com" },
      "items": [
        { "producto": { "nombre": "Teclado", "precio": 320000 }, "cantidad": 1 }
      ]
    }
  }
}`}
      />
      <CompareTable
        headers={["Aspecto", "REST", "GraphQL"]}
        rows={[
          ["Endpoints", "Múltiples URIs por recurso", "Un endpoint /graphql"],
          ["Datos devueltos", "Forma fija del servidor", "Forma definida por el cliente"],
          ["Over-fetching", "Frecuente", "Evitado (solo campos pedidos)"],
          ["Under-fetching", "Varias peticiones", "Query anidada en una request"],
          ["Caché HTTP", "Nativo con GET y ETag", "Más complejo (POST único)"],
        ]}
      />
      <Callout title="GraphQL no es base de datos">
        {
          "GraphQL es capa de API. No reemplaza SQL; sin DataLoader u optimización puedes tener problema N+1 en el resolver."
        }
      </Callout>
    </section>
  );
}
