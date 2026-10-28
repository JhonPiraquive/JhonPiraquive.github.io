import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";

export function CssResponsiveSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Estilos y diseño que se adapta a la pantalla</h2>
      <p className="my-4">
        Un diseño responsive es el que se ve bien en un celular, en una tableta y en un computador sin escribir tres
        páginas distintas. Se logra con CSS: una grilla que cambia de cantidad de columnas según el ancho de la pantalla.
      </p>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">CSS Grid en dos minutos</h3>
      <p className="my-4">
        Con <code>display: grid</code> el contenedor reparte a sus hijos en filas y columnas.{" "}
        <code>grid-template-columns: repeat(4, 1fr)</code> significa «cuatro columnas del mismo ancho». La unidad{" "}
        <code>fr</code> es «una fracción del espacio disponible». <code>gap</code> deja un espacio entre tarjetas.
      </p>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Mobile first: empezar por la pantalla pequeña</h3>
      <p className="my-4">
        Se escribe primero el estilo para el celular y después se agregan reglas para pantallas más grandes con{" "}
        <code>@media (min-width: …)</code>. Es más simple porque solo se van sumando cambios.
      </p>
      <CompareTable
        headers={["Pantalla", "Ancho aproximado", "Columnas"]}
        rows={[
          ["Pequeña (celular)", "Menos de 768 px", "2"],
          ["Mediana (tableta)", "768 px o más", "3"],
          ["Grande (computador)", "1200 px o más", "4"],
        ]}
      />
      <CodeFiddle
        language="css"
        title="src/App.css"
        code={`.contenedor {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
}

.grilla {
  display: grid;
  grid-template-columns: repeat(2, 1fr);   /* pantalla pequeña: 2 columnas */
  gap: 1rem;
}

@media (min-width: 768px) {
  .grilla {
    grid-template-columns: repeat(3, 1fr); /* mediana: 3 columnas */
  }
}

@media (min-width: 1200px) {
  .grilla {
    grid-template-columns: repeat(4, 1fr); /* grande: 4 columnas */
  }
}`}
      />

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Estilos de la tarjeta</h3>
      <p className="my-4">
        Cada componente puede traer su propio archivo CSS. Se usan clases con un nombre claro; la convención{" "}
        <code>bloque__elemento--variante</code> (llamada BEM) ayuda a saber a qué pieza pertenece cada clase y a
        evitar choques de nombres entre componentes.
      </p>
      <CodeFiddle
        language="css"
        title="src/components/TarjetaProducto.css"
        code={`:root {
  --color-texto: #1a1a1a;
  --color-gris: #6b7280;
  --color-descuento: #c62828;
}

.tarjeta {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.tarjeta__imagen {
  width: 100%;
  aspect-ratio: 4 / 3;     /* mantiene la forma sin importar el tamaño */
  object-fit: cover;       /* recorta la imagen en lugar de deformarla */
  border-radius: 0.5rem;
}

.tarjeta__descripcion,
.tarjeta__tamanos {
  color: var(--color-gris);   /* descripción y tamaños en gris */
  margin: 0;
}

.precio {
  color: var(--color-texto);  /* el precio normal es negro */
  font-weight: 600;
}

.precio--original {
  color: var(--color-gris);
  text-decoration: line-through;  /* tachado */
  margin-right: 0.5rem;
  font-weight: 400;
}

.precio--descuento {
  color: var(--color-descuento);  /* el precio con descuento va en rojo */
}

.tarjeta__agotado {
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  padding: 0.15rem 0.5rem;
  background: var(--color-texto);
  color: #fff;
  border-radius: 0.25rem;
  font-size: 0.8rem;
}`}
      />
      <Callout title="Cómo probar la adaptación" variant="callout-tip">
        <p className="mb-0">
          En Chrome o Edge, las herramientas (F12) y el atajo Ctrl + Shift + M activan la vista de dispositivo. Al arrastrar
          el borde para cambiar el ancho se observa el paso de 2 a 3 y a 4 columnas.
        </p>
      </Callout>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Una alternativa sin media queries</h3>
      <p className="my-4">
        Si el número exacto de columnas no importa, CSS puede decidir solo cuántas caben según un ancho
        mínimo por tarjeta:
      </p>
      <CodeFiddle
        language="css"
        title="Grilla automática"
        code={`.grilla {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 1rem;
}`}
      />
      <p className="my-4">
        Cuando un diseño exige una cantidad exacta de columnas por tamaño de pantalla, se usan media queries. Cuando solo
        se necesita que «quepan las que quepan», se usa la grilla automática.
      </p>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Buenas costumbres con CSS en React</h3>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>Se prefieren las unidades relativas (<code>rem</code>, <code>%</code>, <code>fr</code>) en lugar de píxeles fijos, cuando sea posible.</li>
        <li>Los colores y tamaños repetidos se guardan en variables CSS (<code>--color-gris</code>) para cambiarlos en un solo lugar.</li>
        <li>Un archivo CSS por componente, con el mismo nombre del componente.</li>
        <li>Si dos componentes terminan usando el mismo nombre de clase, conviene usar CSS Modules (<code>Tarjeta.module.css</code>): Vite lo soporta sin instalar nada.</li>
        <li>Toda imagen necesita su texto alternativo (<code>alt</code>) para que los lectores de pantalla puedan describirla.</li>
      </ul>
    </section>
  );
}
