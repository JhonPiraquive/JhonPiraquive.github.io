# Instrucciones para frontend-developer: typescript.html

## Archivo de salida
`clases/programacion-orientada-sitios-web/typescript.html`

---

1. Crear `clases/programacion-orientada-sitios-web/typescript.html`. `<html lang="es">`. Título: "TypeScript | POSW".
2. Misma paleta, Bootstrap 5, Bootstrap Icons, Google Fonts, highlight.js.
3. Header fijo: "POSW". Nav: "¿Qué es?", "Por qué TypeScript", "Tipos", "Interfaces", "Genéricos", "Configuración".
4. Hero: badge "Tema 14", `<h1>` "TypeScript", subtítulo "JavaScript con superpoderes: tipado estático, autocompletado y errores antes de ejecutar." Botón scroll a `#que-es`.
5. Crear `<section id="que-es">` padding 80px 0. Contiene:
   - `<h2>` "¿Qué es TypeScript?".
   - Párrafo: "TypeScript es un superset tipado de JavaScript desarrollado y mantenido por Microsoft (open-source desde 2012). Todo código JavaScript válido es TypeScript válido. TypeScript agrega un sistema de tipos estáticos opcional que se verifica en tiempo de compilación, luego se transpila a JavaScript puro para ejecutarse en cualquier entorno."
   - Diagrama:
     ```
     ┌──────────────────────────────┐
     │         TypeScript           │
     │  ┌────────────────────────┐  │
     │  │     JavaScript (ES6+)  │  │
     │  └────────────────────────┘  │
     │  + Tipos estáticos           │
     │  + Interfaces                │
     │  + Enums                     │
     │  + Genéricos                 │
     │  + Decoradores               │
     └──────────────┬───────────────┘
                    │  tsc (compilación)
                    ▼
             JavaScript puro
     ```
   - Instalación y uso básico en bloque código:
     ```bash
     # Instalar TypeScript globalmente
     npm install -g typescript

     # Compilar un archivo
     tsc mi-archivo.ts

     # Inicializar proyecto TypeScript
     tsc --init   # genera tsconfig.json

     # Compilar en modo watch
     tsc --watch
     ```
6. Crear `<section id="por-que">` padding 80px 0 fondo `--surface`. Contiene:
   - `<h2>` "¿Por qué usar TypeScript?".
   - Comparativa lado a lado (dos columnas) del mismo bug: JavaScript (el error aparece en runtime) vs TypeScript (el error aparece en el editor antes de ejecutar):
     ```javascript
     // JavaScript — el error aparece en producción 💥
     function calcularTotal(precio, cantidad) {
       return precio * cantidad;
     }
     calcularTotal("4500", 3); // Retorna "450045004500" (concatena strings)
     ```
     ```typescript
     // TypeScript — el error aparece en el editor ✅
     function calcularTotal(precio: number, cantidad: number): number {
       return precio * cantidad;
     }
     calcularTotal("4500", 3);
     // Error TS: Argument of type 'string' is not assignable to parameter of type 'number'
     ```
   - Beneficios en lista con íconos:
     - `bi-search` "Detección temprana de errores": los errores de tipo se detectan en compilación, no en producción.
     - `bi-lightbulb` "Autocompletado e IntelliSense": el editor conoce los tipos y sugiere métodos y propiedades correctas.
     - `bi-book` "Documentación viva": los tipos documentan la firma de funciones y la forma de los objetos.
     - `bi-shield-check` "Refactoring seguro": cambiar el nombre de una propiedad actualiza todos los usos.
     - `bi-people" "Trabajo en equipo": contratos claros entre módulos y desarrolladores.
7. Crear `<section id="tipos">` padding 80px 0. Contiene:
   - `<h2>` "Sistema de Tipos".
   - Subsección "Tipos Primitivos":
     ```typescript
     let nombre: string = "Ana";
     let edad: number = 28;
     let activo: boolean = true;
     let nulo: null = null;
     let indefinido: undefined = undefined;
     let simbolo: symbol = Symbol("id");
     let grande: bigint = 9007199254740991n;
     ```
   - Subsección "Tipos Compuestos":
     ```typescript
     // Arrays
     let precios: number[] = [100, 200, 300];
     let nombres: Array<string> = ["Ana", "Luis"];

     // Tuples (array de longitud y tipos fijos)
     let coordenada: [number, number] = [4.710, -74.072];
     let entrada: [string, number] = ["Ana", 28];

     // Union Types
     let id: string | number = 42;
     id = "abc123"; // también válido

     // Literal Types
     type Direccion = "norte" | "sur" | "este" | "oeste";
     let rumbo: Direccion = "norte";

     // any (evitar — desactiva el tipado)
     let cualquiera: any = "texto";
     cualquiera = 42; // sin error, pero pierde beneficios

     // unknown (más seguro que any)
     let desconocido: unknown = obtenerDato();
     if (typeof desconocido === "string") {
       console.log(desconocido.toUpperCase()); // seguro
     }

     // never (función que nunca retorna)
     function lanzarError(mensaje: string): never {
       throw new Error(mensaje);
     }
     ```
8. Crear `<section id="interfaces">` padding 80px 0 fondo `--surface`. Contiene:
   - `<h2>` "Interfaces y Types".
   - Explicación: "Las interfaces definen contratos para la forma de los objetos. Los `type` aliases pueden hacer lo mismo y más. Regla práctica: usa `interface` para definir la forma de objetos y clases; usa `type` para uniones, intersecciones y alias complejos."
   - Ejemplo de interfaz:
     ```typescript
     interface Producto {
       id: number;
       nombre: string;
       precio: number;
       descripcion?: string;  // opcional
       readonly creado_en: Date; // solo lectura
     }

     interface ProductoConStock extends Producto {
       stock: number;
       activo: boolean;
     }

     function mostrarProducto(p: Producto): string {
       return `${p.nombre} - $${p.precio.toLocaleString('es-CO')}`;
     }
     ```
   - Ejemplo con `type`:
     ```typescript
     type ID = string | number;

     type ApiResponse<T> = {
       data: T;
       status: number;
       mensaje: string;
       timestamp: string;
     };

     type ProductoOError = Producto | { error: string };
     ```
   - Enums:
     ```typescript
     enum EstadoPedido {
       PENDIENTE = "PENDIENTE",
       PROCESANDO = "PROCESANDO",
       ENVIADO = "ENVIADO",
       ENTREGADO = "ENTREGADO",
       CANCELADO = "CANCELADO"
     }

     function procesarPedido(estado: EstadoPedido) {
       if (estado === EstadoPedido.CANCELADO) {
         return "El pedido fue cancelado";
       }
     }
     ```
9. Crear `<section id="genericos">` padding 80px 0. Contiene:
   - `<h2>` "Genéricos (Generics)".
   - Párrafo: "Los genéricos permiten escribir código reutilizable que funciona con múltiples tipos, sin perder la información de tipo. Son el equivalente a los templates en C++ o los generics de Java."
   - Ejemplo función genérica:
     ```typescript
     // Sin genéricos: pierdes el tipo de retorno
     function primerElemento(arr: any[]): any {
       return arr[0];
     }

     // Con genéricos: conservas el tipo
     function primerElemento<T>(arr: T[]): T | undefined {
       return arr[0];
     }

     const numero = primerElemento([1, 2, 3]);   // tipo: number
     const texto = primerElemento(["a", "b"]);    // tipo: string
     ```
   - Ejemplo clase genérica:
     ```typescript
     class Repositorio<T extends { id: number }> {
       private items: T[] = [];

       agregar(item: T): void {
         this.items.push(item);
       }

       buscarPorId(id: number): T | undefined {
         return this.items.find(item => item.id === id);
       }

       listarTodos(): T[] {
         return [...this.items];
       }
     }

     const repoProductos = new Repositorio<Producto>();
     const repoUsuarios = new Repositorio<Usuario>();
     ```
10. Crear `<section id="config">` padding 80px 0 fondo `--surface`. Contiene:
    - `<h2>` "Configuración: tsconfig.json".
    - Explicación de las opciones más importantes en tabla: Opción | Propósito | Valor recomendado. Datos:
      - `target` | Versión de JS a la que compilar | `ES2020` o `ESNext`
      - `module` | Sistema de módulos | `commonjs` (Node) o `ESNext` (frontend)
      - `strict` | Activa todas las verificaciones estrictas | `true` siempre
      - `outDir` | Carpeta de salida del JS compilado | `"./dist"`
      - `rootDir` | Carpeta raíz de los archivos TS | `"./src"`
      - `noImplicitAny` | Error si el tipo inferido es `any` | `true`
      - `strictNullChecks` | `null` y `undefined` son tipos separados | `true`
      - `esModuleInterop` | Compatibilidad con módulos CommonJS | `true`
    - Bloque de código del `tsconfig.json` recomendado para un proyecto web:
      ```json
      {
        "compilerOptions": {
          "target": "ES2020",
          "module": "ESNext",
          "moduleResolution": "bundler",
          "strict": true,
          "outDir": "./dist",
          "rootDir": "./src",
          "esModuleInterop": true,
          "skipLibCheck": true,
          "forceConsistentCasingInFileNames": true
        },
        "include": ["src/**/*"],
        "exclude": ["node_modules", "dist"]
      }
      ```
11. Sección recursos: `angular.html`, `react.html`, `principios-solid.html`, `naming-conventions.html`.
12. Footer estándar. Highlight.js. Animaciones. Responsivo.
