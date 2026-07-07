import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function RetoIntegradorSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Reto integrador: módulo de catálogo Angular para API REST"}
      </h2>
      <p className="my-4 font-semibold">{"Módulo de catálogo Angular para API REST"}</p>
      <p className="my-4">
        {"Consumirás GET /api/v1/productos y POST /api/v1/carrito/items."}
      </p>
      <ol className="my-4 list-decimal pl-6">
        <li>
          {
            "Genera ProductosModule con declaraciones, imports (HttpClientModule, RouterModule) y providers."
          }
        </li>
        <li>{"Define ProductosService con getProductos() y tipado Producto[]."}</li>
        <li>
          {
            "Escribe CatalogoComponent que en ngOnInit cargue productos y maneje estado de error/carga."
          }
        </li>
        <li>
          {
            "Crea TarjetaProductoComponent con @Input nombre/precio y @Output agregarAlCarrito."
          }
        </li>
        <li>
          {
            "En el template del catálogo usa *ngFor, pipe currency:'COP' y ngOnDestroy o async pipe."
          }
        </li>
      </ol>
      <p className="my-4 text-sm text-[var(--color-neutral-mid)]">
        {
          "Criterio de éxito: separación presentacional vs contenedor, servicio único para HTTP, ciclo de vida con limpieza, bindings correctos."
        }
      </p>
      <CodeFiddle
        language="typescript"
        title="ProductosService con HttpClient"
        code={`@Injectable({ providedIn: "root" })
export class ProductosService {
  constructor(private http: HttpClient) {}

  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>("/api/v1/productos");
  }
}`}
      />
      <CodeFiddle
        language="html"
        title="Template del catálogo"
        code={`<div *ngIf="cargando">Cargando productos...</div>
<div *ngIf="error" class="error">{{ error }}</div>
<app-tarjeta-producto
  *ngFor="let p of productos; trackBy: trackById"
  [nombre]="p.nombre"
  [precio]="p.precio"
  (agregarAlCarrito)="onAgregar(p)">
</app-tarjeta-producto>`}
      />
      <PracticeExercise
        prompt="Diseña el módulo de catálogo: ProductosService, CatalogoComponent contenedor, TarjetaProducto presentacional con *ngFor y currency pipe."
        hints={[
          "HttpClientModule en imports",
          "trackBy con ID",
          "async pipe o ngOnDestroy",
          "@Output agregarAlCarrito",
        ]}
        expectedKeywords={["Service", "ngFor", "Input", "HttpClient"]}
        successMessage="Excelente. Has diseñado un módulo Angular con separación de capas y HTTP centralizado."
        rows={6}
      />
    </section>
  );
}
