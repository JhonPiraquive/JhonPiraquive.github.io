import { CodeChallenge } from "@/components/teaching/CodeChallenge";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";

export function DirectivasBindingsSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Directivas y data binding"}</h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Directivas estructurales: *ngIf, *ngFor, *ngSwitch — modifican el DOM."}</li>
        <li>{"Directivas de atributo: ngClass, ngStyle — modifican apariencia/comportamiento."}</li>
        <li>{"Interpolación: {{ expresión }} — muestra datos en template."}</li>
        <li>{"Property binding: [prop]=\"valor\" — padre → DOM."}</li>
        <li>{"Event binding: (evento)=\"handler()\" — DOM → clase."}</li>
        <li>{"Two-way binding: [(ngModel)]=\"campo\" — sincronización bidireccional."}</li>
      </ul>
      <CompareTable
        headers={["Tipo", "Sintaxis", "Dirección", "Ejemplo"]}
        rows={[
          ["Interpolación", "{{ nombre }}", "Clase → Vista", "Mostrar título del producto"],
          ["Property", "[src]=\"imagenUrl\"", "Clase → DOM", "Imagen dinámica"],
          ["Event", "(click)=\"guardar()\"", "DOM → Clase", "Botón agregar al carrito"],
          ["Two-way", "[(ngModel)]=\"busqueda\"", "Bidireccional", "Campo de búsqueda en vivo"],
        ]}
      />
      <CodeFiddle
        language="html"
        title="Directivas estructurales y de atributo"
        code={`<div *ngIf="producto; else sinProducto">
  <h2>{{ producto.nombre }}</h2>
</div>
<ng-template #sinProducto>
  <p>No se encontró el producto.</p>
</ng-template>

<div *ngFor="let item of items; let i = index; let par = even"
     [class.fila-par]="par">
  {{ i + 1 }}. {{ item.nombre }}
</div>

<span [ngClass]="{ 'activo': producto.activo, 'agotado': !producto.activo }">
  Estado
</span>`}
      />
      <CodeChallenge
        title="Completa la sintaxis de binding"
        template={`Mostrar imagen dinámica imagenUrl → {{blank1}}
Click en guardar → {{blank2}}
Two-way en campo búsqueda → {{blank3}}`}
        blanks={[
          { id: "blank1", answer: '[src]="imagenUrl"', placeholder: "property binding" },
          { id: "blank2", answer: '(click)="guardar()"', placeholder: "event binding" },
          { id: "blank3", answer: '[(ngModel)]="busqueda"', placeholder: "two-way binding" },
        ]}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Malas prácticas en el mundo real"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Mutar @Input() en el hijo en lugar de emitir evento al padre."}</li>
        <li>{"Usar *ngFor sin trackBy en listas dinámicas."}</li>
        <li>{"Olvidar importar FormsModule para [(ngModel)]."}</li>
      </ul>
    </section>
  );
}
