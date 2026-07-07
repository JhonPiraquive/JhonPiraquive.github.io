import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function ServiciosDiSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Servicios e inyección de dependencias"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Servicio: lógica reutilizable y acceso HTTP centralizado."}</li>
        <li>{"@Injectable({ providedIn: 'root' }): singleton a nivel aplicación."}</li>
        <li>{"HttpClient: cliente HTTP tipado con Observables."}</li>
        <li>{"DI: Angular inyecta dependencias en el constructor."}</li>
        <li>{"Separación: componentes orquestan UI; servicios hablan con la API."}</li>
      </ul>
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
      <PracticeExercise
        prompt="¿Por qué Angular se considera framework completo y React librería? Enumera al menos 3 piezas que Angular trae integradas."
        hints={["HttpClient", "Router", "FormsModule", "DI"]}
        expectedKeywords={["routing", "HTTP", "forms", "framework"]}
        successMessage="Correcto. Angular incluye routing, HTTP, forms, DI y testing integrados."
      />
    </section>
  );
}
