# Instrucciones para frontend-developer: naming-conventions.html

## Archivo de salida
`clases/programacion-orientada-sitios-web/naming-conventions.html`

---

1. Crear `clases/programacion-orientada-sitios-web/naming-conventions.html`. `<html lang="es">`. Título: "Convenciones de Nomenclatura | POSW".
2. Misma paleta, Bootstrap 5, Bootstrap Icons, Google Fonts, highlight.js.
3. Header fijo: "POSW". Nav: "camelCase", "PascalCase", "snake_case", "kebab-case", "UPPER_SNAKE_CASE", "Por contexto".
4. Hero: badge "Tema 21", `<h1>` "Convenciones de Nomenclatura", subtítulo "Nombrar correctamente: la habilidad que separa el código legible del código confuso." Botón scroll a `#intro`.
5. Crear `<section id="intro">` padding 60px 0. Contiene:
   - `<h2>` "¿Por qué importa el naming?".
   - Párrafo: "El código se lee muchas más veces de las que se escribe. Un nombre descriptivo y consistente comunica intención, reduce la necesidad de comentarios y hace que el código sea autoexplicativo. Las convenciones de nomenclatura son acuerdos del equipo (o del lenguaje) sobre cómo escribir identificadores: variables, funciones, clases, archivos, endpoints, etc."
   - Cita en tarjeta destacada: '"There are only two hard things in Computer Science: cache invalidation and naming things." — Phil Karlton'
   - Comparativa corta de legibilidad en bloque código:
     ```javascript
     // ❌ Nombres sin convención ni significado
     let x = 4500000;
     function fn1(a, b) { return a * b; }

     // ✅ Nombres expresivos con convención
     const precioProductoBase = 4500000;
     function calcularSubtotal(precio: number, cantidad: number): number {
       return precio * cantidad;
     }
     ```
6. Crear `<section id="camel">` padding 80px 0 fondo `--surface`. Contiene:
   - `<h2>` "camelCase".
   - Regla: "La primera palabra en minúsculas; cada palabra siguiente comienza con mayúscula. Sin espacios ni separadores."
   - Visualización en bloque monospace grande: `miVariable`, `calcularTotal`, `obtenerUsuarioPorId`.
   - Usos por lenguaje en tabla: Lenguaje/Contexto | Aplica a. Datos:
     - JavaScript / TypeScript | Variables, parámetros, funciones, métodos, propiedades de objeto
     - Java | Variables, parámetros, métodos
     - Swift | Variables, constantes, funciones, parámetros
     - JSON | Claves de propiedades (convención más común)
   - Ejemplos en bloque código:
     ```typescript
     // Variables
     let nombreCompleto = "Ana García";
     let precioConIva = 5355000;
     let estaActivo = true;

     // Funciones y métodos
     function calcularDescuento(precio: number, porcentaje: number): number {
       return precio * (porcentaje / 100);
     }

     // Propiedades de clase
     class Producto {
       nombreProducto: string;
       precioBase: number;
       fechaCreacion: Date;
     }

     // JSON
     {
       "nombreCompleto": "Ana García",
       "fechaNacimiento": "1997-03-15",
       "estaActivo": true
     }
     ```
7. Crear `<section id="pascal">` padding 80px 0. Contiene:
   - `<h2>` "PascalCase (UpperCamelCase)".
   - Regla: "Cada palabra comienza con mayúscula, incluida la primera. También llamado UpperCamelCase."
   - Visualización: `MiClase`, `TarjetaProducto`, `ApiResponse`.
   - Usos en tabla: Lenguaje/Contexto | Aplica a. Datos:
     - TypeScript / JavaScript | Clases, interfaces, tipos, enums, componentes React
     - C# | Clases, métodos, propiedades, interfaces
     - Angular | Componentes, servicios, módulos, pipes
     - React | Nombres de componentes funcionales
   - Ejemplos:
     ```typescript
     // Clases
     class RepositorioProductos { }
     class ServicioAutenticacion { }

     // Interfaces y Types
     interface ProductoResponse {
       id: number;
       nombre: string;
       precio: number;
     }
     type EstadoPedido = 'PENDIENTE' | 'ENVIADO' | 'ENTREGADO';

     // Enums
     enum RolUsuario {
       Admin = 'ADMIN',
       Vendedor = 'VENDEDOR',
       Cliente = 'CLIENTE'
     }

     // Componentes React
     function TarjetaProducto() { return <div>...</div>; }
     function ListaCarrito() { return <ul>...</ul>; }
     ```
8. Crear `<section id="snake">` padding 80px 0 fondo `--surface`. Contiene:
   - `<h2>` "snake_case".
   - Regla: "Todas las palabras en minúsculas, separadas por guiones bajos `_`."
   - Visualización: `mi_variable`, `calcular_total`, `nombre_completo`.
   - Usos en tabla: Lenguaje/Contexto | Aplica a. Datos:
     - Python | Variables, funciones, métodos, parámetros, nombres de archivo
     - Ruby | Variables, métodos
     - SQL | Nombres de tablas y columnas (convención más extendida)
     - JSON en Python/Ruby | Claves de propiedades
   - Ejemplos:
     ```python
     # Python
     nombre_completo = "Ana García"
     precio_con_iva = 5355000

     def calcular_descuento(precio, porcentaje):
         return precio * (porcentaje / 100)

     class RepositorioProductos:
         def buscar_por_id(self, producto_id: int):
             pass
     ```
     ```sql
     -- SQL
     CREATE TABLE pedidos_detalle (
       pedido_id       INTEGER REFERENCES pedidos(id),
       producto_id     INTEGER REFERENCES productos(id),
       cantidad        INTEGER NOT NULL,
       precio_unitario DECIMAL(12,2) NOT NULL,
       PRIMARY KEY (pedido_id, producto_id)
     );
     ```
9. Crear `<section id="kebab">` padding 80px 0. Contiene:
   - `<h2>` "kebab-case".
   - Regla: "Todas las palabras en minúsculas, separadas por guiones medios `-`. También llamado dash-case o lisp-case."
   - Visualización: `mi-componente`, `tarjeta-producto`, `api-gateway`.
   - Usos en tabla: Contexto | Aplica a. Datos:
     - HTML | Atributos personalizados `data-`, nombres de eventos web components
     - CSS / SCSS | Nombres de clases e IDs
     - URLs y rutas | Segmentos de URL (SEO friendly)
     - Nombres de archivos | HTML, CSS, imágenes, componentes en Vue/Svelte
     - Paquetes npm | Nombres de paquetes publicados
   - Ejemplos:
     ```css
     /* CSS */
     .tarjeta-producto { ... }
     .boton-agregar-carrito { ... }
     #formulario-contacto { ... }
     ```
     ```
     <!-- URLs -->
     /api/v1/tipos-de-usuario
     /productos/laptop-pro-15
     /blog/principios-solid-en-typescript
     ```
     ```
     <!-- Nombres de archivos -->
     tarjeta-producto.component.html
     mis-productos.page.html
     hero-banner.css
     ```
10. Crear `<section id="upper">` padding 80px 0 fondo `--surface`. Contiene:
    - `<h2>` "UPPER_SNAKE_CASE".
    - Regla: "Todas las palabras en MAYÚSCULAS, separadas por guiones bajos. También llamado SCREAMING_SNAKE_CASE."
    - Visualización: `MAX_REINTENTOS`, `URL_BASE_API`, `TIEMPO_SESION_SEGUNDOS`.
    - Usos en tabla: Contexto | Aplica a. Datos:
      - Todos los lenguajes | Constantes globales
      - Python | Variables de entorno y constantes de módulo
      - JavaScript/TypeScript | Constantes inmutables, valores de enum (algunos estilos)
      - Variables de entorno | Archivos `.env`, Docker, CI/CD
    - Ejemplos:
      ```typescript
      // Constantes de configuración
      const MAX_INTENTOS_LOGIN = 5;
      const TIEMPO_EXPIRACION_TOKEN = 3600; // segundos
      const URL_BASE_API = 'https://api.ejemplo.com/v1';
      const ROLES_PERMITIDOS = ['ADMIN', 'SUPERVISOR'] as const;
      ```
      ```bash
      # Variables de entorno (.env)
      DATABASE_URL=postgresql://user:pass@localhost:5432/mi_db
      JWT_SECRET_KEY=super_secret_key_cambiar_en_produccion
      MAX_POOL_SIZE=10
      NODE_ENV=production
      ```
11. Crear `<section id="contexto">` padding 80px 0. Contiene:
    - `<h2>` "Resumen: Qué usar en cada contexto".
    - Tabla grande: Contexto | Convención | Ejemplo. Datos:
      - Variable JS/TS | camelCase | `precioTotal`
      - Función/Método JS/TS | camelCase | `calcularIva()`
      - Clase/Interfaz/Type TS | PascalCase | `ProductoService`
      - Componente React | PascalCase | `TarjetaProducto`
      - Componente Angular | PascalCase (clase) + kebab (selector) | `class NavbarComponent` / `app-navbar`
      - Variable Python | snake_case | `precio_total`
      - Función Python | snake_case | `calcular_iva()`
      - Clase Python | PascalCase | `ProductoService`
      - Tabla SQL | snake_case | `pedidos_detalle`
      - Columna SQL | snake_case | `precio_unitario`
      - Clase CSS | kebab-case | `.tarjeta-producto`
      - URL/Ruta | kebab-case | `/api/tipos-de-usuario`
      - Archivo HTML/CSS | kebab-case | `tarjeta-producto.html`
      - Archivo TS/JS | kebab-case o camelCase | `producto.service.ts`
      - Constante global | UPPER_SNAKE_CASE | `MAX_REINTENTOS`
      - Variable de entorno | UPPER_SNAKE_CASE | `DATABASE_URL`
    - Anti-patrones a evitar en lista con ícono rojo:
      - Abreviaciones ambiguas: `usrMgr`, `getPr`. Escribir `usuarioManager`, `getProducto`.
      - Nombres de un solo carácter (excepto en loops/lambdas cortas): `x`, `a`, `tmp`.
      - Mezclar convenciones en el mismo codebase.
      - Nombres técnicos sin significado: `Clase1`, `Helper`, `Manager`, `Utils` (sin contexto).
      - Nombres que mienten: `obtenerUsuario()` que también elimina el usuario.
12. Sección recursos: `principios-solid.html`, `typescript.html`, `angular.html`, `ia-en-desarrollo-web.html`.
13. Footer estándar. Highlight.js. Animaciones. Responsivo.
