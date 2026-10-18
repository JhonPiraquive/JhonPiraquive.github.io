import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function ServiciosDiSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Servicios e inyección de dependencias"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"En síntesis"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Servicio: lógica reutilizable y acceso HTTP centralizado."}</li>
        <li>
          {"@Injectable({ providedIn: 'root' }): singleton a nivel aplicación."}
        </li>
        <li>{"HttpClient: cliente HTTP tipado con Observables."}</li>
        <li>{"DI: Angular inyecta dependencias en el constructor."}</li>
        <li>
          {"Separación: componentes orquestan UI; servicios hablan con la API."}
        </li>
      </ul>
      <MermaidDiagram
        title="Flujo de servicios e inyección"
        description="El componente delega el acceso remoto al servicio y HttpClient."
        chart={`flowchart LR
  C[Componente] --> S[Servicio inyectado]
  S --> H[HttpClient]
  H -->|Request HTTP| A[API]
  A -->|Observable con respuesta| H
  H --> S --> C`}
      />

      <CodeFiddle
        language="typescript"
        title="Servicio HTTP con DI"
        code={`@Injectable({ providedIn: "root" })
export class ProductosService {
  private readonly apiUrl = "https://api.ejemplo.com/v1/productos";

  constructor(private http: HttpClient) {}

  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.apiUrl);
  }

  getProducto(id: number): Observable<Producto> {
    return this.http.get<Producto>(\`\${this.apiUrl}/\${id}\`);
  }
}`}
      />
      <CodeFiddle
        language="typescript"
        title="Consumo en componente"
        code={`export class CatalogoComponent implements OnInit {
  productos$ = this.productosService.getProductos();

  constructor(private productosService: ProductosService) {}

  ngOnInit(): void {
    // productos$ listo para async pipe en template
  }
}`}
      />
    </section>
  );
}
