import { Callout } from "@/components/teaching/Callout";
import { StepReveal } from "@/components/teaching/StepReveal";

export function RetoClase01Section() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Práctica guiada: el catálogo de una papelería</h2>
      <p className="my-4">
        Es hora de aplicar todo en un proyecto nuevo. Ya viste el catálogo del Café del Parque; ahora lo repetirás con
        otro tema para comprobar que entendiste la idea y no solo copiaste el código. Vas a construir el catálogo de
        productos de una papelería.
      </p>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Lo que debe hacer tu catálogo</h3>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>Cada producto se muestra como una tarjeta con imagen, nombre, descripción y precio.</li>
        <li>La descripción va en color gris.</li>
        <li>El precio normal va en negro. Si el producto tiene descuento, se muestran los dos precios: el original tachado y en gris, y el precio con descuento en rojo.</li>
        <li>Si quedan 3 unidades o menos, aparece la etiqueta «Últimas unidades». Si no quedan, aparece «Agotado».</li>
        <li>Se muestra la cantidad de colores disponibles, en gris.</li>
        <li>En pantalla grande hay 4 tarjetas por fila, en mediana 3 y en pequeña 2.</li>
      </ul>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Ruta sugerida</h3>
      <StepReveal
        title="Seis pasos, uno a la vez"
        steps={[
          { title: "Crea el proyecto", content: "Con npm create vite@latest y la plantilla react. Instala, arranca con npm run dev y deja App.jsx limpio." },
          { title: "Define los datos", content: "En src/data/productos.js crea un arreglo con al menos 8 productos. Incluye varios con descuento, uno agotado y dos con pocas unidades. Cada objeto necesita: id, nombre, descripcion, imagen, precio, precioDescuento, colores y stock." },
          { title: "Crea la tarjeta", content: "Un componente TarjetaProducto en su propio archivo que reciba todo por props desestructuradas. Primero hazlo solo con imagen, nombre y precio normal." },
          { title: "Agrega las reglas", content: "Suma la lógica del descuento con un ternario, y las etiquetas con &&. Para saber si quedan pocas unidades piensa en una comparación con stock. Recuerda la trampa del cero." },
          { title: "Dibuja la lista", content: "En App.jsx recorre el arreglo con map y no olvides la key. Pasa por props lo que necesite cada tarjeta." },
          { title: "Hazlo responsive", content: "Crea la grilla con CSS Grid y los dos media queries. Pruébalo con la vista de dispositivo del navegador." },
        ]}
      />

      <Callout title="Cómo saber que quedó bien" variant="callout-tip">
        <ul className="mb-0 list-disc space-y-1 pl-5">
          <li>Si cambias un precio en el arreglo de datos, la tarjeta cambia sola sin tocar el componente.</li>
          <li>Si agregas un producto nuevo al arreglo, aparece sin escribir más JSX.</li>
          <li>La consola del navegador no muestra errores ni advertencias.</li>
          <li>Prettier deja el código ordenado cada vez que guardas.</li>
        </ul>
      </Callout>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Para ir más lejos</h3>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>Calcula el porcentaje de descuento a partir de los dos precios y muéstralo en la tarjeta (por ejemplo, «-12 %»).</li>
        <li>Pon un título arriba que diga cuántos productos hay en total, usando la longitud del arreglo.</li>
        <li>Separa la parte de los precios en su propio componente <code>Precio</code>.</li>
      </ul>
    </section>
  );
}
