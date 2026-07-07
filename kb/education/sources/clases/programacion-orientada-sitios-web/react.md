# Instrucciones para frontend-developer: react.html

## Archivo de salida
`clases/programacion-orientada-sitios-web/react.html`

---

1. Crear `clases/programacion-orientada-sitios-web/react.html`. `<html lang="es">`. Título: "React: Fundamentos | POSW".
2. Misma paleta, Bootstrap 5, Bootstrap Icons, Google Fonts, highlight.js.
3. Header fijo: "POSW". Nav: "¿Qué es?", "JSX", "Componentes", "Props", "Estado", "Hooks", "Efectos".
4. Hero: badge "Tema 16", `<h1>` "React", subtítulo "La librería de Meta para construir interfaces de usuario mediante componentes reutilizables." Botón scroll a `#que-es`.
5. Crear `<section id="que-es">` padding 80px 0. Contiene:
   - `<h2>` "¿Qué es React?".
   - Párrafo: "React es una librería JavaScript (no un framework completo) creada por Meta (Facebook) en 2013. Su propósito es construir interfaces de usuario mediante componentes reutilizables. React gestiona eficientemente el DOM usando un Virtual DOM: cuando el estado cambia, React calcula las diferencias mínimas y solo actualiza las partes del DOM real que cambiaron."
   - Tres pilares en tarjetas:
     - `bi-puzzle` "Componentes": la UI se divide en piezas pequeñas e independientes, cada una con su propia lógica y presentación.
     - `bi-lightning` "Virtual DOM": React crea una representación en memoria del DOM y aplica solo los cambios mínimos necesarios.
     - `bi-arrow-repeat` "Flujo unidireccional de datos": los datos fluyen del padre al hijo. El estado es la única fuente de verdad.
   - Instalación con Vite en bloque código:
     ```bash
     # Crear proyecto React con Vite (recomendado en 2025)
     npm create vite@latest mi-app -- --template react-ts
     cd mi-app
     npm install
     npm run dev
     ```
6. Crear `<section id="jsx">` padding 80px 0 fondo `--surface`. Contiene:
   - `<h2>` "JSX — JavaScript XML".
   - Párrafo: "JSX es una extensión de sintaxis de JavaScript que permite escribir HTML dentro de código JS. No es obligatorio (se puede usar `React.createElement`), pero es la forma estándar y recomendada."
   - Comparativa `React.createElement` vs JSX:
     ```javascript
     // Sin JSX (verbose y difícil de leer)
     const elemento = React.createElement(
       'div',
       { className: 'tarjeta' },
       React.createElement('h2', null, 'Laptop Pro 15'),
       React.createElement('p', { className: 'precio' }, '$4.500.000')
     );

     // Con JSX (intuitivo)
     const elemento = (
       <div className="tarjeta">
         <h2>Laptop Pro 15</h2>
         <p className="precio">$4.500.000</p>
       </div>
     );
     ```
   - Reglas de JSX en lista con íconos:
     - Un solo elemento raíz (o Fragment `<>...</>`).
     - `class` → `className`; `for` → `htmlFor`.
     - Las expresiones JS van entre `{}`.
     - Los componentes comienzan con letra mayúscula.
     - Etiquetas sin hijos se auto-cierran: `<Input />`.
7. Crear `<section id="componentes">` padding 80px 0. Contiene:
   - `<h2>` "Componentes Funcionales".
   - Párrafo: "En React moderno (desde Hooks en 2019), los componentes se escriben como funciones. Los componentes de clase aún existen pero son legacy."
   - Ejemplo de componente completo:
     ```tsx
     interface TarjetaProductoProps {
       nombre: string;
       precio: number;
       imagen: string;
       onAgregar: (nombre: string) => void;
     }

     function TarjetaProducto({ nombre, precio, imagen, onAgregar }: TarjetaProductoProps) {
       const precioFormateado = precio.toLocaleString('es-CO', {
         style: 'currency',
         currency: 'COP',
         maximumFractionDigits: 0
       });

       return (
         <article className="tarjeta-producto">
           <img src={imagen} alt={`Foto de ${nombre}`} loading="lazy" />
           <div className="tarjeta-cuerpo">
             <h3>{nombre}</h3>
             <p className="precio">{precioFormateado}</p>
             <button
               onClick={() => onAgregar(nombre)}
               aria-label={`Agregar ${nombre} al carrito`}
             >
               Agregar al carrito
             </button>
           </div>
         </article>
       );
     }

     export default TarjetaProducto;
     ```
8. Crear `<section id="props">` padding 80px 0 fondo `--surface`. Contiene:
   - `<h2>` "Props".
   - Párrafo: "Las props (propiedades) son la forma en que los componentes padre pasan datos a sus hijos. Son de solo lectura: un componente nunca debe modificar sus propias props."
   - Ejemplo de composición:
     ```tsx
     // Componente padre
     function Catalogo() {
       const productos = [
         { id: 1, nombre: "Laptop Pro 15", precio: 4500000, imagen: "/img/laptop.jpg" },
         { id: 2, nombre: "Mouse inalámbrico", precio: 85000, imagen: "/img/mouse.jpg" },
       ];

       const handleAgregar = (nombre: string) => {
         alert(`${nombre} agregado al carrito`);
       };

       return (
         <section className="catalogo">
           {productos.map(p => (
             <TarjetaProducto
               key={p.id}
               nombre={p.nombre}
               precio={p.precio}
               imagen={p.imagen}
               onAgregar={handleAgregar}
             />
           ))}
         </section>
       );
     }
     ```
   - Nota sobre `key`: "La prop `key` es obligatoria en listas. Ayuda a React a identificar qué elementos cambiaron. Usa un ID único, nunca el índice del array (excepto en listas estáticas)."
9. Crear `<section id="estado">` padding 80px 0. Contiene:
   - `<h2>` "Estado con useState".
   - Párrafo: "El estado es información que puede cambiar con el tiempo y que al cambiar debe actualizar la UI. En React, el estado se gestiona con el hook `useState`."
   - Ejemplo de contador y formulario:
     ```tsx
     import { useState } from 'react';

     function Contador() {
       const [cuenta, setCuenta] = useState(0);

       return (
         <div>
           <p>Cuenta: {cuenta}</p>
           <button onClick={() => setCuenta(c => c + 1)}>+1</button>
           <button onClick={() => setCuenta(c => c - 1)}>-1</button>
           <button onClick={() => setCuenta(0)}>Resetear</button>
         </div>
       );
     }

     // Estado con objeto
     function FormularioContacto() {
       const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' });

       const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
         setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
       };

       return (
         <form>
           <input name="nombre" value={form.nombre} onChange={handleChange} />
           <input name="email" value={form.email} onChange={handleChange} />
           <textarea name="mensaje" value={form.mensaje} onChange={handleChange} />
         </form>
       );
     }
     ```
10. Crear `<section id="hooks">` padding 80px 0 fondo `--surface`. Contiene:
    - `<h2>` "Hooks Principales".
    - Tabla: Hook | Propósito | Ejemplo de uso. Datos:
      - `useState` | Estado local del componente | Formularios, toggles, contadores
      - `useEffect` | Efectos secundarios (APIs, suscripciones) | Fetch al montar, limpiar timers
      - `useContext` | Consumir contexto global | Tema, usuario autenticado, idioma
      - `useReducer` | Estado complejo con lógica (como Redux local) | Carrito de compras, formularios multi-paso
      - `useMemo` | Memoizar cálculo costoso | Filtrar/ordenar grandes listas
      - `useCallback` | Memoizar función (evitar re-renders hijos) | Handlers pasados como props
      - `useRef` | Referencia mutable sin re-render | Acceder al DOM, timers, valores previos
      - `useId` | IDs únicos para accesibilidad | Labels e inputs en formularios
11. Crear `<section id="efectos">` padding 80px 0. Contiene:
    - `<h2>` "useEffect: Efectos Secundarios".
    - Tres variantes con ejemplos:
      ```tsx
      import { useState, useEffect } from 'react';

      function ProductoDetalle({ id }: { id: number }) {
        const [producto, setProducto] = useState<Producto | null>(null);
        const [cargando, setCargando] = useState(true);
        const [error, setError] = useState<string | null>(null);

        // 1. Efecto con dependencia (re-ejecuta cuando cambia `id`)
        useEffect(() => {
          let cancelado = false;
          setCargando(true);

          fetch(`/api/productos/${id}`)
            .then(r => r.json())
            .then(datos => {
              if (!cancelado) {
                setProducto(datos);
                setCargando(false);
              }
            })
            .catch(err => {
              if (!cancelado) setError(err.message);
            });

          // Función de limpieza (se ejecuta antes del próximo efecto o al desmontar)
          return () => { cancelado = true; };
        }, [id]);

        // 2. Efecto sin dependencias (solo al montar y desmontar)
        useEffect(() => {
          document.title = `Producto ${id}`;
          return () => { document.title = 'POSW App'; };
        }, []);

        if (cargando) return <div>Cargando...</div>;
        if (error) return <div>Error: {error}</div>;
        if (!producto) return null;

        return <h1>{producto.nombre}</h1>;
      }
      ```
    - Diagrama del ciclo de vida con useEffect:
      ```
      Montaje   → useEffect ejecuta (dependencias iniciales)
      Re-render → Si dependencias cambiaron: limpieza anterior → efecto nuevo
      Desmontaje → Función de limpieza final
      ```
12. Sección recursos: `typescript.html`, `angular.html`, `frontend.html`, `herramientas-desarrollo.html`.
13. Footer estándar. Highlight.js. Animaciones. Responsivo.
