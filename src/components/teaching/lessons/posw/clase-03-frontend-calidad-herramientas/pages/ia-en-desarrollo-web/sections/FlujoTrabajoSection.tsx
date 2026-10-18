import { CodeFiddle } from "@/components/teaching/CodeFiddle";

export function FlujoTrabajoSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Prompts efectivos con stack y restricciones"}
      </h2>
      <CodeFiddle
        language="bash"
        title="Prompt inefectivo vs efectivo"
        code={`# ❌ Inefectivo
# "hazme un servicio para productos en nest"

# ✅ Efectivo (pegar como prompt al agente)
# Contexto: NestJS + TypeScript + PostgreSQL
# Convención: DIP — inyectar IProductoRepository
# Métodos: findAll, findById, create, update, delete
# Restricciones: sin any, NotFoundException si no existe,
# JSDoc en métodos públicos, no importar infraestructura directa`}
      />
      <CodeFiddle
        language="typescript"
        title="Servicio generado (verificar y adaptar)"
        code={`export interface IProductoRepository {
  findAll(): Promise<Producto[]>;
  findById(id: number): Promise<Producto | null>;
  create(dto: CreateProductoDto): Promise<Producto>;
  update(id: number, dto: UpdateProductoDto): Promise<Producto>;
  delete(id: number): Promise<void>;
}

export class ProductosService {
  constructor(private readonly repo: IProductoRepository) {}

  async findById(id: number): Promise<Producto> {
    const producto = await this.repo.findById(id);
    if (!producto) {
      throw new NotFoundException(\`Producto \${id} no encontrado\`);
    }
    return producto;
  }
}`}
      />
      <CodeFiddle
        language="typescript"
        title="Test que valida código IA"
        code={`import { ProductosService } from "./productos.service";

describe("ProductosService", () => {
  it("lanza NotFoundException si findById no encuentra", async () => {
    const repo = { findById: jest.fn().mockResolvedValue(null) };
    const service = new ProductosService(repo as never);
    await expect(service.findById(99)).rejects.toThrow(/no encontrado/);
  });
});`}
      />
    </section>
  );
}
