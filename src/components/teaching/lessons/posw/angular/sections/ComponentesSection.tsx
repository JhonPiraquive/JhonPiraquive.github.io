import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function ComponentesSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Componentes"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "Componente: unidad básica — clase TypeScript + template HTML + estilos CSS opcionales."
          }
        </li>
        <li>{"@Component: selector, templateUrl, styleUrls."}</li>
        <li>
          {"@Input(): datos del padre al hijo (solo lectura en el hijo)."}
        </li>
        <li>{"@Output(): eventos del hijo al padre (EventEmitter)."}</li>
        <li>
          {
            "Árbol de componentes: jerarquía AppComponent → features → presentacionales."
          }
        </li>
      </ul>
      <MermaidDiagram
        title="Mapa mental — Componentes"
        description="Resumen visual de los conceptos principales."
        chart={`mindmap
  root((Componentes))
    Componente unidad básica clase TypeScript template HTML estilos CSS opcional
    Component selector templateUrl styleUrls
    Input datos del padre al hijo solo lectura en el hijo
    Output eventos del hijo al padre EventEmitter
    Árbol de componentes jerarquía AppComponent a features a presentacionales`}
      />
      <CodeFiddle
        language="typescript"
        title="Anatomía de un componente"
        code={`import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-tarjeta-producto",
  templateUrl: "./tarjeta-producto.component.html",
  styleUrls: ["./tarjeta-producto.component.scss"]
})
export class TarjetaProductoComponent implements OnInit {
  @Input() nombre: string = "";
  @Input() precio: number = 0;
  @Output() agregarAlCarrito = new EventEmitter<string>();

  descuento: number = 0;

  ngOnInit(): void {
    this.descuento = this.precio > 1000000 ? 0.1 : 0;
  }

  onAgregarClick(): void {
    this.agregarAlCarrito.emit(this.nombre);
  }

  get precioConDescuento(): number {
    return this.precio * (1 - this.descuento);
  }
}`}
      />
      <CodeFiddle
        language="html"
        title="Template del componente"
        code={`<div class="tarjeta">
  <h3>{{ nombre }}</h3>
  <p class="precio">{{ precioConDescuento | currency:'COP':'symbol':'1.0-0' }}</p>
  <span *ngIf="descuento > 0" class="badge">
    {{ descuento * 100 }}% descuento
  </span>
  <button (click)="onAgregarClick()">Agregar al carrito</button>
</div>`}
      />
      <MermaidDiagram
        chart={`flowchart LR
  PADRE[CatalogoComponent] -->|@Input datos| HIJO[TarjetaProductoComponent]
  HIJO -->|@Output evento| PADRE
  PADRE --> SVC[ProductosService]
  SVC -->|HttpClient| API[REST API]`}
      />
      <PracticeExercise
        prompt="Dibuja el árbol de componentes de una tienda online: AppComponent, navbar, catálogo con tarjetas y carrito. ¿Cuál es presentacional y cuál contenedor?"
        hints={[
          "TarjetaProducto recibe @Input",
          "Catalogo carga datos",
          "Separación de responsabilidades",
        ]}
        expectedKeywords={["AppComponent", "Catalogo", "Tarjeta", "Input"]}
        successMessage="Correcto. TarjetaProducto es presentacional; Catalogo orquesta datos y pasa props."
      />
    </section>
  );
}
