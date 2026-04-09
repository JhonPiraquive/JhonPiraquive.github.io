# Instrucciones para frontend-developer: frontend.html

## Archivo de salida
`clases/programacion-orientada-sitios-web/frontend.html`

---

1. Crear `clases/programacion-orientada-sitios-web/frontend.html`. `<html lang="es">`. Título: "Frontend: Tecnologías y Frameworks | POSW".
2. Misma paleta, Bootstrap 5, Bootstrap Icons, Google Fonts, highlight.js.
3. Header fijo: "POSW". Nav: "¿Qué es?", "Tecnologías base", "Frameworks", "Cómo elegir", "Ejemplos".
4. Hero: badge "Tema 8", `<h1>` "Frontend", subtítulo "Todo lo que el usuario ve y con lo que interactúa: tecnologías, frameworks y criterios de elección." Botón scroll a `#que-es`.
5. Crear `<section id="que-es">` padding 80px 0. Contiene:
   - `<h2>` "¿Qué es el Frontend?".
   - Párrafo: "El frontend (también llamado client-side) es la capa de una aplicación web que el usuario ve y con la que interactúa directamente en su navegador. Incluye la estructura visual (HTML), el estilo (CSS) y el comportamiento interactivo (JavaScript). El código frontend se ejecuta en el dispositivo del usuario, no en el servidor."
   - Diagrama en dos cajas separadas con flecha:
     ```
     [ NAVEGADOR DEL USUARIO ]          [ SERVIDOR ]
     ┌─────────────────────────┐         ┌──────────────────┐
     │  HTML  →  Estructura    │         │  Base de datos   │
     │  CSS   →  Estilos       │ ◄──── ► │  Lógica negocio  │
     │  JS    →  Interacción   │  HTTP   │  Archivos        │
     │  (React, Angular, Vue)  │         │  (Node, Java...) │
     └─────────────────────────┘         └──────────────────┘
              FRONTEND                        BACKEND
     ```
   - Responsabilidades del frontend en lista:
     - Renderizar la interfaz de usuario.
     - Consumir APIs del backend (fetch, axios).
     - Manejar estado de la aplicación (formularios, sesión, carrito).
     - Gestionar rutas del cliente (SPA routing).
     - Optimizar experiencia: rendimiento, accesibilidad, SEO.
6. Crear `<section id="base">` padding 80px 0 fondo `--surface`. Contiene:
   - `<h2>` "Tecnologías Base".
   - Tres tarjetas grandes lado a lado (1/3 cada una):
     - Tarjeta HTML: ícono `bi-filetype-html` color naranja. "HTML5: el esqueleto. Define la estructura semántica del contenido. Elementos clave: `<header>`, `<main>`, `<section>`, `<article>`, `<nav>`, `<figure>`, formularios, tablas. La semántica correcta impacta accesibilidad y SEO."
     - Tarjeta CSS: ícono `bi-filetype-css` color azul. "CSS3: la apariencia. Controla colores, tipografías, layouts (Flexbox, Grid), animaciones y responsividad. Metodologías: BEM, SMACSS. Preprocesadores: SASS/SCSS. CSS-in-JS: styled-components."
     - Tarjeta JS: ícono `bi-filetype-js` color amarillo. "JavaScript (ES2020+): el comportamiento. Manipulación del DOM, eventos, fetch de datos, lógica de UI. Tipado estático opcional con TypeScript. Ejecutado por el motor V8 (Chrome) o SpiderMonkey (Firefox)."
7. Crear `<section id="frameworks">` padding 80px 0. Contiene:
   - `<h2>` "Frameworks y Librerías Populares".
   - Grid de 4 tarjetas con efecto hover. Datos:
     - React (Meta, 2013): "Librería para construir UIs mediante componentes reutilizables. Usa JSX (HTML en JS). Virtual DOM para actualizaciones eficientes. El más demandado en el mercado laboral. Ecosistema: Next.js, Redux, React Query."
     - Angular (Google, 2016): "Framework completo con opiniones. TypeScript por defecto. Arquitectura MVC con decoradores, módulos, servicios e inyección de dependencias. Ideal para aplicaciones empresariales grandes. Curva de aprendizaje alta."
     - Vue.js (Evan You, 2014): "Framework progresivo: se puede adoptar incrementalmente. Sintaxis de plantillas intuitiva. Composition API en Vue 3. Menor curva de aprendizaje que Angular. Ecosistema: Nuxt.js, Pinia."
     - Svelte (Rich Harris, 2016): "Compila los componentes a JavaScript puro en build time (sin runtime virtual DOM). Código más conciso. Rendimiento superior en aplicaciones pequeñas/medianas. Ecosistema: SvelteKit."
   - Comparativa de popularidad (Stack Overflow Survey 2024) en tabla: Framework | % Uso | Empresa origen | Mejor para. Datos:
     - React | 40.6% | Meta | SPAs, startups, apps complejas
     - Angular | 17.1% | Google | Enterprise, proyectos corporativos
     - Vue.js | 15.4% | Comunidad | Proyectos medianos, curva baja
     - Svelte | 6.5% | Comunidad | Apps de alto rendimiento
8. Crear `<section id="elegir">` padding 80px 0 fondo `--surface`. Contiene:
   - `<h2>` "¿Cómo elegir un Framework?".
   - Árbol de decisión como diagrama ASCII:
     ```
     ¿Proyecto grande con equipo grande?
            ├── Sí → ¿Experiencia previa en TS/Java?
            │           ├── Sí → Angular
            │           └── No → React (+ TypeScript)
            └── No → ¿Quieres aprender rápido?
                        ├── Sí → Vue.js o Svelte
                        └── No → React (mayor demanda laboral)

     ¿Necesitas SSR / SEO?
            ├── React → Next.js
            ├── Vue   → Nuxt.js
            └── Svelte → SvelteKit
     ```
   - Criterios en tabla: Criterio | Peso | React | Angular | Vue | Svelte. Datos:
     - Demanda laboral | Alta | ★★★★★ | ★★★★ | ★★★ | ★★
     - Curva aprendizaje | Media | Baja | Alta | Muy baja | Baja
     - Rendimiento | Media | Bueno | Bueno | Bueno | Excelente
     - Ecosistema | Alta | Enorme | Grande | Sólido | Creciente
     - TypeScript | Alta | Opcional | Nativo | Opcional | Opcional
9. Crear `<section id="ejemplos">` padding 80px 0. Contiene:
   - `<h2>` "Ejemplo: Componente de Tarjeta de Producto".
   - Tabs Bootstrap con el mismo componente en React, Angular y Vue:
     - Tab React (JSX):
       ```jsx
       function TarjetaProducto({ nombre, precio, imagen }) {
         return (
           <div className="tarjeta">
             <img src={imagen} alt={nombre} />
             <h3>{nombre}</h3>
             <p className="precio">${precio.toLocaleString('es-CO')}</p>
             <button onClick={() => agregarAlCarrito(nombre)}>
               Agregar al carrito
             </button>
           </div>
         );
       }
       ```
     - Tab Angular (TypeScript + Template):
       ```typescript
       @Component({
         selector: 'app-tarjeta-producto',
         template: `
           <div class="tarjeta">
             <img [src]="imagen" [alt]="nombre">
             <h3>{{ nombre }}</h3>
             <p class="precio">{{ precio | currency:'COP' }}</p>
             <button (click)="agregarAlCarrito()">Agregar al carrito</button>
           </div>
         `
       })
       export class TarjetaProductoComponent {
         @Input() nombre: string = '';
         @Input() precio: number = 0;
         @Input() imagen: string = '';

         agregarAlCarrito() {
           console.log(`Agregando ${this.nombre}`);
         }
       }
       ```
     - Tab Vue 3 (Composition API):
       ```vue
       <template>
         <div class="tarjeta">
           <img :src="imagen" :alt="nombre" />
           <h3>{{ nombre }}</h3>
           <p class="precio">{{ formatPrecio(precio) }}</p>
           <button @click="agregarAlCarrito">Agregar al carrito</button>
         </div>
       </template>

       <script setup>
       const props = defineProps({ nombre: String, precio: Number, imagen: String });
       const formatPrecio = (p) => p.toLocaleString('es-CO');
       const agregarAlCarrito = () => console.log(`Agregando ${props.nombre}`);
       </script>
       ```
10. Sección recursos: `backend.html`, `angular.html`, `react.html`, `typescript.html`, `modelo-cliente-servidor.html`.
11. Footer estándar. Highlight.js. Animaciones. Responsivo.
