---
track: posw
slug: angular
title: "Angular: Fundamentos"
order: 14
prerequisites:
  - typescript
related:
  - react
  - frontend
  - backend
  - apis
  - modelo-cliente-servidor
source_brief: kb/education/pipeline/posw/angular/brief.md
topic_expert: topic-expert-web-services
tsx_sections:
  - ObjetivosDelTemaSection
  - IntroAngularSection
  - ComponentesSection
  - CicloVidaSection
  - DirectivasBindingsSection
  - PipesModulosSection
  - ServiciosDiSection
  - ResumenSection
  - CompruebaTuComprensionSection
  - RetoIntegradorSection
  - CierreSection
  - MiniquizFinalSection
---

## Objetivos de aprendizaje

Al finalizar la lección, el estudiante podrá:

- **Describir** Angular como framework opinionado de Google basado en TypeScript: componentes, módulos, servicios e inyección de dependencias.
- **Estructurar** un componente con clase TS, plantilla HTML, `@Input`/`@Output` y ciclo de vida (`ngOnInit`, `ngOnDestroy`).
- **Aplicar** directivas estructurales y de atributo (`*ngIf`, `*ngFor`, `ngClass`, `ngStyle`) en plantillas declarativas.
- **Explicar** los cuatro tipos de data binding (interpolación, property, event, two-way con `ngModel`).
- **Consumir** una API REST con `HttpClient`, servicios `@Injectable` y pipes (`currency`, `date`, `async`).

## Prerrequisitos

- **Lección `typescript`:** tipos, interfaces, genéricos y `tsconfig.json`.
- Familiaridad con HTML, CSS y conceptos de SPA.
- Conocimiento básico de APIs REST y JSON.

## Contenido

### Objetivos del tema

**Sección TSX:** `ObjetivosDelTemaSection`

Esta lección cubre qué es Angular, anatomía de componentes, ciclo de vida, directivas y bindings, pipes y módulos, y servicios con inyección de dependencias para consumir APIs REST.

<!-- interactive: Callout -->
{
  "title": "Angular.js ≠ Angular moderno",
  "children": "Angular.js (2010, MVC) está deprecado. Angular 2+ (2016+) es componentizado, escrito en TypeScript y usa APIs completamente distintas. No mezcles documentación antigua."
}

---

### 1) Introducción a Angular

**Sección TSX:** `IntroAngularSection`

#### Mapa mental

- **Angular:** framework frontend de Google, escrito en TypeScript.
- **Opinionado:** define estructura, routing, HTTP, forms, testing y despliegue.
- **Arquitectura:** componentes + servicios + inyección de dependencias + módulos.
- **vs React:** Angular es framework completo; React es librería de UI.

#### Angular vs React (panorama)

<!-- interactive: CompareTable -->
{
  "headers": ["Aspecto", "Angular", "React"],
  "rows": [
    ["Naturaleza", "Framework completo", "Librería de UI"],
    ["Lenguaje base", "TypeScript nativo", "JavaScript/TypeScript opcional"],
    ["Plantillas", "HTML declarativo con directivas", "JSX en JavaScript"],
    ["HTTP", "HttpClient integrado", "fetch o librerías externas"],
    ["Estado/DI", "Servicios + DI integrados", "Hooks + librerías (Redux, etc.)"]
  ]
}

#### Crear proyecto Angular

<!-- code: bash -->
```bash
npm install -g @angular/cli
ng new mi-tienda --routing --style=scss
cd mi-tienda
ng serve
```

#### Árbol de componentes típico

<!-- interactive: MermaidDiagram -->
{
  "chart": "flowchart TD\n  APP[AppComponent] --> NAV[NavbarComponent]\n  APP --> CAT[CatalogoComponent]\n  CAT --> T1[TarjetaProductoComponent]\n  CAT --> T2[TarjetaProductoComponent]\n  APP --> CAR[CarritoComponent]\n  CAR --> ITEM[ItemCarritoComponent]"
}

#### Caso real: banco corporativo

<!-- interactive: Callout -->
{
  "title": "Migración a Angular con DI",
  "children": "Cada componente hacía fetch directo duplicando URLs y headers JWT. Un cambio en la API obligó a editar 12 componentes. Decisión: TransferenciasService con HttpClient e interceptores; componentes solo consumen Observables."
}

---

### 2) Componentes

**Sección TSX:** `ComponentesSection`

#### Mapa mental

- **Componente:** unidad básica — clase TypeScript + template HTML + estilos CSS opcionales.
- **`@Component`:** `selector`, `templateUrl`, `styleUrls`.
- **`@Input()`:** datos del padre al hijo (solo lectura en el hijo).
- **`@Output()`:** eventos del hijo al padre (`EventEmitter`).
- **Árbol de componentes:** jerarquía `AppComponent` → features → presentacionales.

#### Anatomía de un componente

<!-- code: typescript -->
```typescript
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

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
}
```

#### Template del componente

<!-- code: html -->
```html
<div class="tarjeta">
  <h3>{{ nombre }}</h3>
  <p class="precio">{{ precioConDescuento | currency:'COP':'symbol':'1.0-0' }}</p>
  <span *ngIf="descuento > 0" class="badge">
    {{ descuento * 100 }}% descuento
  </span>
  <button (click)="onAgregarClick()">Agregar al carrito</button>
</div>
```

#### Flujo padre-hijo

<!-- interactive: MermaidDiagram -->
{
  "chart": "flowchart LR\n  PADRE[CatalogoComponent] -->|@Input datos| HIJO[TarjetaProductoComponent]\n  HIJO -->|@Output evento| PADRE\n  PADRE --> SVC[ProductosService]\n  SVC -->|HttpClient| API[REST API]"
}

#### Práctica guiada

<!-- interactive: PracticeExercise -->
{
  "prompt": "Dibuja el árbol de componentes de una tienda online: AppComponent, navbar, catálogo con tarjetas y carrito. ¿Cuál es presentacional y cuál contenedor?",
  "hints": ["TarjetaProducto recibe @Input", "Catalogo carga datos", "Separación de responsabilidades"],
  "expectedKeywords": ["AppComponent", "Catalogo", "Tarjeta", "Input"],
  "successMessage": "Correcto. TarjetaProducto es presentacional; Catalogo orquesta datos y pasa props."
}

---

### 3) Ciclo de vida

**Sección TSX:** `CicloVidaSection`

#### Mapa mental

- **`ngOnChanges`:** cuando cambian `@Input()`.
- **`ngOnInit`:** inicialización tras primer `ngOnChanges`; ideal para fetch inicial.
- **`ngAfterViewInit`:** tras renderizar la vista del componente.
- **`ngOnDestroy`:** limpieza antes de destruir; cancelar suscripciones.
- **Regla:** siempre limpiar Observables en `ngOnDestroy` o usar `async` pipe.

#### Timeline del ciclo de vida

<!-- interactive: StepReveal -->
{
  "title": "Hooks principales de un componente Angular",
  "steps": [
    {
      "title": "1. constructor",
      "content": "Inyección de dependencias. Evita lógica pesada o HTTP aquí."
    },
    {
      "title": "2. ngOnChanges",
      "content": "Se ejecuta cuando el padre cambia un @Input()."
    },
    {
      "title": "3. ngOnInit",
      "content": "Una vez tras la primera detección de inputs. Ideal para cargar datos de API."
    },
    {
      "title": "4. ngAfterViewInit",
      "content": "La vista del componente ya está en el DOM. Útil para acceder a @ViewChild."
    },
    {
      "title": "5. ngOnDestroy",
      "content": "Antes de destruir el componente. Cancela suscripciones y timers."
    }
  ]
}

#### Fetch y limpieza de suscripciones

<!-- code: typescript -->
```typescript
export class ProductoDetalleComponent implements OnInit, OnDestroy {
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
}
```

#### Caso real: memory leak en catálogo

<!-- interactive: Callout -->
{
  "title": "SPA lenta tras 30 minutos de uso",
  "children": "El catálogo suscribe getProductos() en cada navegación sin cancelar. Decisión: takeUntilDestroyed() o Subscription en ngOnDestroy; pipe async en template para suscripciones automáticas."
}

---

### 4) Directivas y data binding

**Sección TSX:** `DirectivasBindingsSection`

#### Mapa mental

- **Directivas estructurales:** `*ngIf`, `*ngFor`, `*ngSwitch` — modifican el DOM.
- **Directivas de atributo:** `ngClass`, `ngStyle` — modifican apariencia/comportamiento.
- **Interpolación:** `{{ expresión }}` — muestra datos en template.
- **Property binding:** `[prop]="valor"` — padre → DOM.
- **Event binding:** `(evento)="handler()"` — DOM → clase.
- **Two-way binding:** `[(ngModel)]="campo"` — sincronización bidireccional.

#### Cuatro tipos de binding

<!-- interactive: CompareTable -->
{
  "headers": ["Tipo", "Sintaxis", "Dirección", "Ejemplo"],
  "rows": [
    ["Interpolación", "{{ nombre }}", "Clase → Vista", "Mostrar título del producto"],
    ["Property", "[src]=\"imagenUrl\"", "Clase → DOM", "Imagen dinámica"],
    ["Event", "(click)=\"guardar()\"", "DOM → Clase", "Botón agregar al carrito"],
    ["Two-way", "[(ngModel)]=\"busqueda\"", "Bidireccional", "Campo de búsqueda en vivo"]
  ]
}

#### Directivas estructurales y de atributo

<!-- code: html -->
```html
<div *ngIf="producto; else sinProducto">
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
</span>
```

#### Completar bindings

<!-- interactive: CodeChallenge -->
{
  "title": "Completa la sintaxis de binding",
  "template": "Mostrar imagen dinámica imagenUrl → ___\nClick en guardar → ___\nTwo-way en campo búsqueda → ___",
  "blanks": [
    { "id": "blank1", "answer": "[src]=\"imagenUrl\"", "placeholder": "property binding" },
    { "id": "blank2", "answer": "(click)=\"guardar()\"", "placeholder": "event binding" },
    { "id": "blank3", "answer": "[(ngModel)]=\"busqueda\"", "placeholder": "two-way binding" }
  ]
}

#### Errores comunes

- Mutar `@Input()` en el hijo en lugar de emitir evento al padre.
- Usar `*ngFor` sin `trackBy` en listas dinámicas.
- Olvidar importar `FormsModule` para `[(ngModel)]`.

---

### 5) Pipes y módulos

**Sección TSX:** `PipesModulosSection`

#### Mapa mental

- **Pipes:** transforman datos en template sin mutar el original.
- **Pipes comunes:** `currency`, `date`, `async`, `json`, `uppercase`.
- **NgModule:** agrupa declaraciones, imports, exports, providers.
- **`AppModule`:** módulo raíz; importa `BrowserModule`, `HttpClientModule`, etc.
- **Standalone (Angular 15+):** componentes sin NgModule reducen boilerplate.

#### Pipes en template

<!-- code: html -->
```html
<p>{{ precio | currency:'COP':'symbol':'1.0-0' }}</p>
<p>{{ fechaCreacion | date:'dd/MM/yyyy' }}</p>
<div *ngIf="productos$ | async as productos">
  <span *ngFor="let p of productos">{{ p.nombre }}</span>
</div>
```

#### Pipes comunes

<!-- interactive: CompareTable -->
{
  "headers": ["Pipe", "Uso", "Ejemplo"],
  "rows": [
    ["currency", "Formatear moneda", "{{ precio | currency:'COP' }}"],
    ["date", "Formatear fecha", "{{ fecha | date:'short' }}"],
    ["async", "Suscribir Observable en template", "productos$ | async"],
    ["json", "Depurar objetos", "{{ objeto | json }}"],
    ["uppercase", "Texto en mayúsculas", "{{ nombre | uppercase }}"]
  ]
}

#### Estructura de NgModule

<!-- code: typescript -->
```typescript
@NgModule({
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
export class AppModule {}
```

#### async pipe vs subscribe manual

<!-- interactive: Callout -->
{
  "title": "Preferir async pipe cuando sea posible",
  "children": "El pipe async se desuscribe automáticamente al destruir el componente. Evita memory leaks sin escribir ngOnDestroy manualmente."
}

---

### 6) Servicios e inyección de dependencias

**Sección TSX:** `ServiciosDiSection`

#### Mapa mental

- **Servicio:** lógica reutilizable y acceso HTTP centralizado.
- **`@Injectable({ providedIn: 'root' })`:** singleton a nivel aplicación.
- **`HttpClient`:** cliente HTTP tipado con Observables.
- **DI:** Angular inyecta dependencias en el constructor.
- **Separación:** componentes orquestan UI; servicios hablan con la API.

#### Servicio HTTP con DI

<!-- code: typescript -->
```typescript
@Injectable({ providedIn: "root" })
export class ProductosService {
  private readonly apiUrl = "https://api.ejemplo.com/v1/productos";

  constructor(private http: HttpClient) {}

  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.apiUrl);
  }

  getProducto(id: number): Observable<Producto> {
    return this.http.get<Producto>(`${this.apiUrl}/${id}`);
  }
}
```

#### Consumo en componente

<!-- code: typescript -->
```typescript
export class CatalogoComponent implements OnInit {
  productos$ = this.productosService.getProductos();

  constructor(private productosService: ProductosService) {}

  ngOnInit(): void {
    // productos$ listo para async pipe en template
  }
}
```

#### Práctica guiada

<!-- interactive: PracticeExercise -->
{
  "prompt": "¿Por qué Angular se considera framework completo y React librería? Enumera al menos 3 piezas que Angular trae integradas.",
  "hints": ["HttpClient", "Router", "FormsModule", "DI"],
  "expectedKeywords": ["routing", "HTTP", "forms", "framework"],
  "successMessage": "Correcto. Angular incluye routing, HTTP, forms, DI y testing integrados."
}

---

### Resumen

**Sección TSX:** `ResumenSection`

- **Angular** es un framework opinionado de Google basado en TypeScript.
- **Componente** = clase TS + template HTML + estilos; comunicación con `@Input`/`@Output`.
- **Ciclo de vida:** `ngOnInit` para carga inicial; `ngOnDestroy` para limpiar suscripciones.
- **Bindings:** interpolación, property, event y two-way `[(ngModel)]`.
- **Directivas:** `*ngIf`/`*ngFor` (estructurales), `ngClass`/`ngStyle` (atributo).
- **Pipes** transforman datos en template; `async` evita leaks con Observables.
- **Servicios + DI** centralizan HTTP y lógica reutilizable.
- **Siguiente lección:** `react` — librería de UI con JSX, hooks y flujo unidireccional.

---

### Comprueba tu comprensión

**Sección TSX:** `CompruebaTuComprensionSection`

<!-- interactive: PracticeExercise -->
{
  "prompt": "¿Por qué no debes mutar un @Input() en el componente hijo? ¿Cómo comunicas un cambio al padre?",
  "hints": ["Solo lectura", "@Output EventEmitter", "Flujo unidireccional"],
  "expectedKeywords": ["Input", "Output", "emit", "padre"],
  "successMessage": "Correcto. Los inputs son de solo lectura; emites eventos con @Output al padre."
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "Un componente suscribe getProductos() en ngOnInit pero nunca hace unsubscribe. ¿Qué problema causa y cómo lo solucionas?",
  "hints": ["Memory leak", "ngOnDestroy", "async pipe", "takeUntilDestroyed"],
  "expectedKeywords": ["memory", "ngOnDestroy", "unsubscribe", "async"],
  "successMessage": "Correcto. Suscripciones sin limpiar acumulan memoria; usa ngOnDestroy o async pipe."
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "¿Qué sintaxis usarías para: mostrar precio formateado en COP, cargar lista con *ngFor y manejar click en botón agregar?",
  "hints": ["currency pipe", "*ngFor", "(click)"],
  "expectedKeywords": ["currency", "ngFor", "click"],
  "successMessage": "Correcto. currency:'COP' para precio, *ngFor para lista, (click) para evento."
}

---

## Reto integrador

**Sección TSX:** `RetoIntegradorSection`

**"Módulo de catálogo Angular para API REST"**

Consumirás `GET /api/v1/productos` y `POST /api/v1/carrito/items`.

1. Genera `ProductosModule` con declaraciones, imports (`HttpClientModule`, `RouterModule`) y providers.
2. Define `ProductosService` con `getProductos()` y tipado `Producto[]`.
3. Escribe `CatalogoComponent` que en `ngOnInit` cargue productos y maneje estado de error/carga.
4. Crea `TarjetaProductoComponent` con `@Input` nombre/precio y `@Output` agregarAlCarrito.
5. En el template del catálogo usa `*ngFor`, pipe `currency:'COP'` y `ngOnDestroy` o `async` pipe.

**Criterio de éxito:** separación presentacional vs contenedor, servicio único para HTTP, ciclo de vida con limpieza, bindings correctos.

<!-- code: typescript -->
```typescript
@Injectable({ providedIn: "root" })
export class ProductosService {
  constructor(private http: HttpClient) {}

  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>("/api/v1/productos");
  }
}
```

<!-- code: html -->
```html
<div *ngIf="cargando">Cargando productos...</div>
<div *ngIf="error" class="error">{{ error }}</div>
<app-tarjeta-producto
  *ngFor="let p of productos; trackBy: trackById"
  [nombre]="p.nombre"
  [precio]="p.precio"
  (agregarAlCarrito)="onAgregar(p)">
</app-tarjeta-producto>
```

<!-- interactive: PracticeExercise -->
{
  "prompt": "Diseña el módulo de catálogo: ProductosService, CatalogoComponent contenedor, TarjetaProducto presentacional con *ngFor y currency pipe.",
  "hints": [
    "HttpClientModule en imports",
    "trackBy con ID",
    "async pipe o ngOnDestroy",
    "@Output agregarAlCarrito"
  ],
  "expectedKeywords": ["Service", "ngFor", "Input", "HttpClient"],
  "successMessage": "Excelente. Has diseñado un módulo Angular con separación de capas y HTTP centralizado."
}

---

## Cierre

**Sección TSX:** `CierreSection`

Has completado los fundamentos de Angular: componentes, ciclo de vida, directivas, bindings, pipes, módulos y servicios con DI.

**Ideas clave para retener:**

- Un **componente** une clase TS, template HTML y estilos.
- **`ngOnInit`** carga datos; **`ngOnDestroy`** limpia suscripciones.
- **No mutar `@Input()`** — emitir eventos con `@Output`.
- **Servicios** centralizan HTTP; **DI** evita duplicar lógica.
- **`async` pipe** simplifica Observables y previene memory leaks.

**Siguiente paso:** lección `react` — librería de UI con JSX, hooks y Virtual DOM.

---

## Miniquiz

**Sección TSX:** `MiniquizFinalSection`

<!-- interactive: Quiz -->
{
  "questions": [
    {
      "question": "¿De qué tres partes se compone típicamente un componente Angular?",
      "options": [
        "Solo JavaScript y CSS",
        "Clase TypeScript, plantilla HTML y estilos opcionales",
        "SQL, HTML y PHP",
        "Solo template sin lógica"
      ],
      "correctIndex": 1,
      "feedback": "El componente encapsula lógica (clase), vista (template) y estilos."
    },
    {
      "question": "¿Qué hook usarías para cargar datos de una API al iniciar el componente?",
      "options": [
        "ngOnDestroy",
        "ngOnInit",
        "ngAfterViewChecked",
        "constructor únicamente, sin hooks"
      ],
      "correctIndex": 1,
      "feedback": "ngOnInit corre una vez tras el primer ngOnChanges; ideal para llamadas HTTP iniciales."
    },
    {
      "question": "¿Qué directiva muestra u oculta elementos en el DOM?",
      "options": [
        "ngClass",
        "*ngIf",
        "ngModel",
        "currency"
      ],
      "correctIndex": 1,
      "feedback": "*ngIf es directiva estructural; agrega o quita nodos del DOM."
    },
    {
      "question": "¿Qué sintaxis es two-way binding?",
      "options": [
        "{{ nombre }}",
        "[src]=\"url\"",
        "[(ngModel)]=\"busqueda\"",
        "(click)=\"guardar()\""
      ],
      "correctIndex": 2,
      "feedback": "[(ngModel)] sincroniza modelo y vista en ambas direcciones."
    },
    {
      "question": "¿Para qué sirve @Injectable({ providedIn: 'root' })?",
      "options": [
        "Declara un pipe",
        "Registra un servicio singleton disponible en toda la app",
        "Define una directiva estructural",
        "Compila TypeScript a JavaScript"
      ],
      "correctIndex": 1,
      "feedback": "providedIn: 'root' crea una instancia única del servicio a nivel aplicación."
    }
  ]
}

---

## SEO (sugerencias)

- **seoTitle:** Angular: Componentes, Directivas y Servicios | POSW
- **seoDescription:** Aprende Angular: componentes TypeScript, ciclo de vida, directivas, data binding, pipes, módulos, HttpClient y inyección de dependencias. Lección 14 del track POSW.
