import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { StepReveal } from "@/components/teaching/StepReveal";

export function RestArquitecturaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Arquitectura REST: gateway, servicio y repositorio"}
      </h2>
      <MermaidDiagram
        chart={`flowchart TD
  C[Cliente SPA / Mobile]
  G[API Gateway<br/>Auth, Rate limit]
  R[Router / Controlador]
  S[Servicio<br/>Lógica de negocio]
  RE[Repositorio / ORM]
  DB[(PostgreSQL)]
  C -->|HTTP| G --> R --> S --> RE --> DB`}
      />
      <CodeFiddle
        language="bash"
        title="Estructura de directorios típica"
        code={`src/
├── controllers/
│   ├── productos.controller.ts
│   └── pedidos.controller.ts
├── services/
│   └── productos.service.ts
├── repositories/
│   └── producto.repository.ts
├── middlewares/
│   ├── auth.middleware.ts
│   └── rateLimit.middleware.ts
└── routes/
    └── index.ts`}
      />
      <CodeFiddle
        language="typescript"
        title="Controlador delgado + servicio"
        code={`// productos.controller.ts
export class ProductosController {
  constructor(private readonly service: ProductosService) {}

  async getById(req: Request, res: Response): Promise<void> {
    const id = Number(req.params.id);
    const producto = await this.service.findById(id);
    res.status(200).json(producto);
  }
}

// productos.service.ts
export class ProductosService {
  constructor(private readonly repo: ProductoRepository) {}

  async findById(id: number): Promise<Producto> {
    const producto = await this.repo.buscarPorId(id);
    if (!producto) throw new NotFoundError(\`Producto \${id}\`);
    return producto;
  }
}`}
      />
      <CodeFiddle
        language="plaintext"
        title="Petición REST típica"
        code={`GET /api/v1/productos/42 HTTP/1.1
Host: api.ejemplo.com
Authorization: Bearer eyJhbGciOiJIUzI1NiIs...
Accept: application/json

HTTP/1.1 200 OK
Content-Type: application/json

{
  "id": 42,
  "nombre": "Laptop Pro 15",
  "precio": 4500000,
  "categoriaId": 3
}`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Errores comunes"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Lógica de negocio en el controlador — difícil de testear."}</li>
        <li>{"Controlador que hace SQL directo — salta la capa de servicio."}</li>
      </ul>
      <Callout title="La arquitectura de API no es solo la URL">
        {
          "El controlador traduce HTTP; el servicio concentra reglas de negocio; el repositorio abstrae la BD. Saltar capas — SQL en el controlador — impide tests y reutilización."
        }
      </Callout>
      <StepReveal
        title="Capas REST de arriba a abajo"
        steps={[
          {
            title: "API Gateway",
            content:
              "Entrada única: auth, rate limiting, logging, enrutamiento a microservicios.",
          },
          {
            title: "Controlador",
            content: "Traduce HTTP a llamadas de servicio; sin lógica de negocio pesada.",
          },
          {
            title: "Servicio",
            content: "Reglas de negocio; independiente de HTTP; testeable con mocks.",
          },
          {
            title: "Repositorio",
            content: "Abstrae persistencia; cambiar BD sin tocar servicios (DIP).",
          },
          {
            title: "Base de datos",
            content: "PostgreSQL, MongoDB u otro motor según el dominio.",
          },
        ]}
      />
    </section>
  );
}
