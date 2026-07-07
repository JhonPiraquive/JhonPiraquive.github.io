import { CodeFiddle } from "@/components/teaching/CodeFiddle";

export function EjemplosComponentesSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Ejemplos de componentes"}</h2>
      <p className="my-4">
        {
          "El mismo componente TarjetaProducto en tres frameworks: recibe props (nombre, precio, imagen) y dispara evento al agregar al carrito."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"React (JSX)"}</h3>
      <CodeFiddle
        language="javascript"
        title="React (JSX)"
        code={`function TarjetaProducto({ nombre, precio, imagen }) {
  return (
    <div className="tarjeta">
      <img src={imagen} alt={nombre} />
      <h3>{nombre}</h3>
      <p className="precio">\${precio.toLocaleString("es-CO")}</p>
      <button onClick={() => agregarAlCarrito(nombre)}>
        Agregar al carrito
      </button>
    </div>
  );
}`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Angular"}</h3>
      <CodeFiddle
        language="typescript"
        title="Angular"
        code={`@Component({
  selector: "app-tarjeta-producto",
  template: \`
    <div class="tarjeta">
      <img [src]="imagen" [alt]="nombre" />
      <h3>{{ nombre }}</h3>
      <p class="precio">{{ precio | currency:'COP' }}</p>
      <button (click)="agregarAlCarrito()">Agregar al carrito</button>
    </div>
  \`,
})
export class TarjetaProductoComponent {
  @Input() nombre = "";
  @Input() precio = 0;
  @Input() imagen = "";

  agregarAlCarrito() {
    console.log(\`Agregando \${this.nombre}\`);
  }
}`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Vue 3 (Composition API)"}</h3>
      <CodeFiddle
        language="javascript"
        title="Vue 3 (Composition API)"
        code={`// Vue SFC — script setup
const props = defineProps({
  nombre: String,
  precio: Number,
  imagen: String,
});
const formatPrecio = (p) => p.toLocaleString("es-CO");
const agregarAlCarrito = () => console.log(\`Agregando \${props.nombre}\`);`}
      />
      <p className="my-4">
        <strong>{"Patrón común:"}</strong>
        {
          " props entrantes + evento/handler de salida. La lógica de negocio crítica (precio final, stock) debe validarse en el backend."
        }
      </p>
    </section>
  );
}
