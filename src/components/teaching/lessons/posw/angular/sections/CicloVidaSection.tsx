import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { StepReveal } from "@/components/teaching/StepReveal";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function CicloVidaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Ciclo de vida"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"ngOnChanges: cuando cambian @Input()."}</li>
        <li>
          {
            "ngOnInit: inicialización tras primer ngOnChanges; ideal para fetch inicial."
          }
        </li>
        <li>{"ngAfterViewInit: tras renderizar la vista del componente."}</li>
        <li>
          {"ngOnDestroy: limpieza antes de destruir; cancelar suscripciones."}
        </li>
        <li>
          {
            "Regla: siempre limpiar Observables en ngOnDestroy o usar async pipe."
          }
        </li>
      </ul>
      <MermaidDiagram
        title="Mapa mental — CicloVida"
        chart={`mindmap
  root((CicloVida))
    ngOnChanges
    ngOnInit
    ngAfterViewInit
    ngOnDestroy
    Regla`}
      />
      <MermaidDiagram
        title="Orden del ciclo de vida Angular"
        description="Flujo de hooks principales de un componente"
        chart={`flowchart TD
  A[ngOnChanges] --> B[ngOnInit]
  B --> C[ngDoCheck]
  C --> D[ngAfterViewInit]
  D --> E[Actualizaciones]
  E --> F[ngOnDestroy]
`}
      />

      <StepReveal
        title="Hooks principales de un componente Angular"
        steps={[
          {
            title: "1. constructor",
            content:
              "Inyección de dependencias. Evita lógica pesada o HTTP aquí.",
          },
          {
            title: "2. ngOnChanges",
            content: "Se ejecuta cuando el padre cambia un @Input().",
          },
          {
            title: "3. ngOnInit",
            content:
              "Una vez tras la primera detección de inputs. Ideal para cargar datos de API.",
          },
          {
            title: "4. ngAfterViewInit",
            content:
              "La vista del componente ya está en el DOM. Útil para acceder a @ViewChild.",
          },
          {
            title: "5. ngOnDestroy",
            content:
              "Antes de destruir el componente. Cancela suscripciones y timers.",
          },
        ]}
      />
      <CodeFiddle
        language="typescript"
        title="Fetch y limpieza de suscripciones"
        code={`export class ProductoDetalleComponent implements OnInit, OnDestroy {
  private subscription = new Subscription();

  ngOnInit(): void {
    this.subscription.add(
      this.productosService.getProducto(this.id)
        .subscribe(producto => this.producto = producto)
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}`}
      />
      <Callout title="SPA lenta tras 30 minutos de uso">
        {
          "El catálogo suscribe getProductos() en cada navegación sin cancelar. Decisión: takeUntilDestroyed() o Subscription en ngOnDestroy; pipe async en template para suscripciones automáticas."
        }
      </Callout>
    </section>
  );
}
