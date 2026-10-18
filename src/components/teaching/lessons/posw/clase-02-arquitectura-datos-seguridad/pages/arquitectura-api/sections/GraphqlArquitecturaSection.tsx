import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function GraphqlArquitecturaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"GraphQL: schema SDL y resolvers"}
      </h2>
      <CodeFiddle
        language="graphql"
        title="Un endpoint, schema tipado"
        code={`type Producto {
  id: ID!
  nombre: String!
  precio: Float!
  categoria: Categoria!
  reviews: [Review!]!
}

type Query {
  producto(id: ID!): Producto
  productos(filtro: ProductoFiltro): [Producto!]!
}

type Mutation {
  crearProducto(input: CreateProductoInput!): Producto!
}`}
      />
      <MermaidDiagram
        chart={`flowchart TD
  CL[Cliente GraphQL]
  ENG[GraphQL Engine]
  SCH[Schema SDL]
  RES[Resolvers]
  REST[REST legacy]
  PG[(PostgreSQL)]
  RD[(Redis)]
  CL -->|POST /graphql| ENG
  ENG --> SCH
  ENG --> RES
  RES --> REST
  RES --> PG
  RES --> RD`}
      />
      <Callout title="Caso real: Black Friday — 200 ms → 8 s">
        {
          "Lista de 50 posts con autor y comentarios; cada resolver dispara query a usuarios. Decisión: DataLoader por tipo de entidad, batch de IDs, métricas por resolver, límite de profundidad en queries."
        }
      </Callout>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Malas prácticas en el mundo real"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"GraphQL sin DataLoader — N+1 queries que tumba PostgreSQL."}</li>
        <li>{"Queries sin límite de profundidad — DoS accidental."}</li>
      </ul>
    </section>
  );
}
