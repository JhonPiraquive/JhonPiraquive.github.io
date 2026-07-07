import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";

export function PipesModulosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Pipes y módulos"}</h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Pipes: transforman datos en template sin mutar el original."}</li>
        <li>{"Pipes comunes: currency, date, async, json, uppercase."}</li>
        <li>{"NgModule: agrupa declaraciones, imports, exports, providers."}</li>
        <li>{"AppModule: módulo raíz; importa BrowserModule, HttpClientModule, etc."}</li>
        <li>{"Standalone (Angular 15+): componentes sin NgModule reducen boilerplate."}</li>
      </ul>
      <CodeFiddle
        language="html"
        title="Pipes en template"
        code={`<p>{{ precio | currency:'COP':'symbol':'1.0-0' }}</p>
<p>{{ fechaCreacion | date:'dd/MM/yyyy' }}</p>
<div *ngIf="productos$ | async as productos">
  <span *ngFor="let p of productos">{{ p.nombre }}</span>
</div>`}
      />
      <CompareTable
        headers={["Pipe", "Uso", "Ejemplo"]}
        rows={[
          ["currency", "Formatear moneda", "{{ precio | currency:'COP' }}"],
          ["date", "Formatear fecha", "{{ fecha | date:'short' }}"],
          ["async", "Suscribir Observable en template", "productos$ | async"],
          ["json", "Depurar objetos", "{{ objeto | json }}"],
          ["uppercase", "Texto en mayúsculas", "{{ nombre | uppercase }}"],
        ]}
      />
      <CodeFiddle
        language="typescript"
        title="Estructura de NgModule"
        code={`@NgModule({
  declarations: [CatalogoComponent, TarjetaProductoComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}`}
      />
      <Callout title="Preferir async pipe cuando sea posible">
        {
          "El pipe async se desuscribe automáticamente al destruir el componente. Evita memory leaks sin escribir ngOnDestroy manualmente."
        }
      </Callout>
    </section>
  );
}
