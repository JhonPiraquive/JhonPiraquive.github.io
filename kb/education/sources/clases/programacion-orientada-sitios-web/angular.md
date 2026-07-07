# Instrucciones para frontend-developer: angular.html

## Archivo de salida
`clases/programacion-orientada-sitios-web/angular.html`

---

1. Crear `clases/programacion-orientada-sitios-web/angular.html`. `<html lang="es">`. Título: "Angular: Fundamentos | POSW".
2. Misma paleta, Bootstrap 5, Bootstrap Icons, Google Fonts, highlight.js.
3. Header fijo: "POSW". Nav: "Componentes", "Ciclo de vida", "Directivas", "Bindings", "Pipes", "Módulos", "Servicios".
4. Hero: badge "Tema 15", `<h1>` "Angular", subtítulo "El framework completo de Google: componentes, servicios, inyección de dependencias y arquitectura modular." Botón scroll a `#componentes`.
5. Panel introductorio (fondo `--surface`, padding 40px) con: "Angular es un framework de desarrollo frontend desarrollado por Google. Está escrito en TypeScript y sigue una arquitectura de componentes con inyección de dependencias (DI), módulos, servicios y un sistema de plantillas declarativas. Es opinionado: define cómo estructurar, testear y desplegar una aplicación." Incluir tabla de versiones: Angular.js (2010, MVC, deprecado) | Angular 2+ (2016, componentizado, actual).
6. Crear `<section id="componentes">` padding 80px 0. Contiene:
   - `<h2>` "Componentes".
   - Párrafo: "Un componente es la unidad básica de una aplicación Angular. Cada componente encapsula: una clase TypeScript (lógica), una plantilla HTML (vista) y estilos CSS opcionales."
   - Anatomía de un componente en bloque código:
     ```typescript
     import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

     @Component({
       selector: 'app-tarjeta-producto',
       templateUrl: './tarjeta-producto.component.html',
       styleUrls: ['./tarjeta-producto.component.scss']
     })
     export class TarjetaProductoComponent implements OnInit {
       @Input() nombre: string = '';
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
   - Template correspondiente:
     ```html
     <!-- tarjeta-producto.component.html -->
     <div class="tarjeta">
       <h3>{{ nombre }}</h3>
       <p class="precio">{{ precioConDescuento | currency:'COP':'symbol':'1.0-0' }}</p>
       <span *ngIf="descuento > 0" class="badge">
         {{ descuento * 100 }}% descuento
       </span>
       <button (click)="onAgregarClick()">Agregar al carrito</button>
     </div>
     ```
   - Árbol de componentes en ASCII:
     ```
     AppComponent
     ├── NavbarComponent
     ├── CatalogoComponent
     │   ├── TarjetaProductoComponent
     │   ├── TarjetaProductoComponent
     │   └── TarjetaProductoComponent
     └── CarritoComponent
         └── ItemCarritoComponent
     ```
7. Crear `<section id="ciclo-vida">` padding 80px 0 fondo `--surface`. Contiene:
   - `<h2>` "Ciclo de Vida de un Componente".
   - Línea de tiempo vertical (flex-column) con los hooks en orden de ejecución. Cada hook: nombre, cuándo se ejecuta, caso de uso típico. Datos:
     - `ngOnChanges()` | Antes y cada vez que cambia un `@Input()` | Reaccionar a cambios de datos del padre
     - `ngOnInit()` | Una vez, después del primer `ngOnChanges` | Inicializar datos, llamar APIs
     - `ngDoCheck()` | En cada ciclo de detección de cambios | Detección manual de cambios
     - `ngAfterContentInit()` | Una vez, tras proyectar contenido con `ng-content` | Acceder al contenido proyectado
     - `ngAfterContentChecked()` | Después de cada verificación del contenido proyectado | Raro uso directo
     - `ngAfterViewInit()` | Una vez, tras renderizar la vista del componente e hijos | Acceder al DOM (ViewChild)
     - `ngAfterViewChecked()` | Después de cada verificación de la vista | Raro uso directo
     - `ngOnDestroy()` | Justo antes de destruir el componente | Cancelar suscripciones, limpiar timers
   - Ejemplo práctico de los más usados:
     ```typescript
     export class ProductoDetalleComponent implements OnInit, OnDestroy {
       private subscription: Subscription = new Subscription();

       ngOnInit(): void {
         // Obtener datos al inicializar
         this.subscription.add(
           this.productosService.getProducto(this.id)
             .subscribe(producto => this.producto = producto)
         );
       }

       ngOnDestroy(): void {
         // Evitar memory leaks
         this.subscription.unsubscribe();
       }
     }
     ```
8. Crear `<section id="directivas">` padding 80px 0. Contiene:
   - `<h2>` "Directivas".
   - Definición: "Las directivas son clases que agregan comportamiento a elementos del DOM. Hay tres tipos:"
   - Tres tarjetas:
     - Componentes: las directivas más comunes (tienen template).
     - Directivas Estructurales: modifican el DOM (agregan/eliminan elementos). `*ngIf`, `*ngFor`, `*ngSwitch`.
     - Directivas de Atributo: modifican el aspecto o comportamiento de un elemento existente. `ngClass`, `ngStyle`, directivas custom.
   - Ejemplos en bloque código:
     ```html
     <!-- *ngIf -->
     <div *ngIf="producto; else sinProducto">
       <h2>{{ producto.nombre }}</h2>
     </div>
     <ng-template #sinProducto>
       <p>No se encontró el producto.</p>
     </ng-template>

     <!-- *ngFor con index e incluso/impar -->
     <div *ngFor="let item of items; let i = index; let par = even"
          [class.fila-par]="par">
       {{ i + 1 }}. {{ item.nombre }}
     </div>

     <!-- ngClass y ngStyle -->
     <span [ngClass]="{ 'activo': producto.activo, 'agotado': !producto.activo }">
       Estado
     </span>
     <p [ngStyle]="{ 'color': producto.precio > 1000000 ? 'gold' : 'white' }">
       {{ producto.precio }}
     </p>
     ```
9. Crear `<section id="bindings">` padding 80px 0 fondo `--surface`. Contiene:
   - `<h2>` "Data Bindings".
   - Cuatro tipos de binding en tabla: Tipo | Sintaxis | Dirección | Ejemplo. Datos:
     - Interpolación | `{{ expresion }}` | Component → Template | `{{ usuario.nombre }}`
     - Property Binding | `[propiedad]="expresion"` | Component → Template | `[src]="imagenUrl"`
     - Event Binding | `(evento)="manejador()"` | Template → Component | `(click)="guardar()"`
     - Two-way Binding | `[(ngModel)]="propiedad"` | Bidireccional | `[(ngModel)]="nombre"`
   - Ejemplo de formulario con two-way binding:
     ```html
     <input [(ngModel)]="busqueda" placeholder="Buscar productos...">
     <p>Buscando: {{ busqueda }}</p>
     ```
10. Crear `<section id="pipes">` padding 80px 0. Contiene:
    - `<h2>` "Pipes (Transformaciones)".
    - Párrafo: "Los pipes transforman datos en las plantillas sin modificar el valor original. Se encadenan con `|`."
    - Tabla: Pipe | Propósito | Ejemplo | Resultado. Datos:
      - `date` | Formatear fechas | `{{ fecha | date:'dd/MM/yyyy' }}` | 01/09/2025
      - `currency` | Formatear moneda | `{{ 4500000 | currency:'COP':'symbol':'1.0-0' }}` | $4.500.000
      - `uppercase` | Convertir a mayúsculas | `{{ 'hola' | uppercase }}` | HOLA
      - `lowercase` | Convertir a minúsculas | `{{ 'HOLA' | lowercase }}` | hola
      - `json` | Serializar a JSON (debug) | `{{ objeto | json }}` | `{"id": 1, ...}`
      - `async` | Suscribirse a Observable | `{{ observable$ | async }}` | valor cuando emite
      - `slice` | Subarray/substring | `{{ items | slice:0:3 }}` | primeros 3 items
      - `decimal` | Formatear número | `{{ 3.14159 | number:'1.2-2' }}` | 3.14
11. Crear `<section id="modulos">` padding 80px 0 fondo `--surface`. Contiene:
    - `<h2>` "Módulos (NgModule)".
    - Párrafo: "Los módulos agrupan componentes, directivas, pipes y servicios relacionados. Toda aplicación Angular tiene al menos un módulo raíz: `AppModule`. En Angular 15+, los standalone components reducen la necesidad de módulos."
    - Ejemplo de módulo:
      ```typescript
      @NgModule({
        declarations: [
          ProductosComponent,
          TarjetaProductoComponent,
          FiltroPrecioPipe
        ],
        imports: [
          CommonModule,
          ReactiveFormsModule,
          HttpClientModule,
          RouterModule.forChild(productosRoutes)
        ],
        exports: [
          TarjetaProductoComponent
        ],
        providers: [
          ProductosService
        ]
      })
      export class ProductosModule { }
      ```
12. Crear `<section id="servicios">` padding 80px 0. Contiene:
    - `<h2>` "Servicios e Inyección de Dependencias".
    - Párrafo: "Un servicio es una clase con lógica de negocio o acceso a datos, reutilizable entre componentes. Angular provee un sistema de inyección de dependencias (DI) que crea y gestiona instancias de servicios automáticamente."
    - Ejemplo de servicio HTTP:
      ```typescript
      @Injectable({
        providedIn: 'root'  // singleton en toda la app
      })
      export class ProductosService {
        private readonly apiUrl = 'https://api.ejemplo.com/v1/productos';

        constructor(private http: HttpClient) {}

        getProductos(): Observable<Producto[]> {
          return this.http.get<Producto[]>(this.apiUrl);
        }

        getProducto(id: number): Observable<Producto> {
          return this.http.get<Producto>(`${this.apiUrl}/${id}`);
        }

        crearProducto(dto: CreateProductoDto): Observable<Producto> {
          return this.http.post<Producto>(this.apiUrl, dto);
        }
      }
      ```
    - Uso del servicio en un componente:
      ```typescript
      @Component({ ... })
      export class CatalogoComponent implements OnInit {
        productos: Producto[] = [];

        constructor(private productosService: ProductosService) {}

        ngOnInit(): void {
          this.productosService.getProductos()
            .pipe(takeUntilDestroyed())
            .subscribe({
              next: (datos) => this.productos = datos,
              error: (err) => console.error(err)
            });
        }
      }
      ```
13. Sección recursos: `typescript.html`, `react.html`, `frontend.html`, `principios-solid.html`.
14. Footer estándar. Highlight.js. Animaciones. Responsivo.
