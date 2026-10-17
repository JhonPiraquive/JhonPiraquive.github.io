import { Callout } from "@/components/teaching/Callout";
import { StepReveal } from "@/components/teaching/StepReveal";

export function RetoClase01Section() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Práctica guiada: el catálogo de una papelería</h2>
      <p className="my-4">
        La práctica aplica todo lo visto en un proyecto nuevo. El catálogo del Café del Parque sirvió de ejemplo; ahora
        la misma idea se repite con otro tema para comprobar que se entendió el concepto y no solo se copió el código. El
        proyecto consiste en construir el catálogo de productos de una papelería.
      </p>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Requisitos del catálogo</h3>
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
          { title: "Crear el proyecto", content: "Con npm create vite@latest y la plantilla react. Se instala, se arranca con npm run dev y se deja App.jsx limpio." },
          { title: "Definir los datos", content: "En src/data/productos.js se crea un arreglo con al menos 8 productos. Debe incluir varios con descuento, uno agotado y dos con pocas unidades. Cada objeto necesita: id, nombre, descripcion, imagen, precio, precioDescuento, colores y stock." },
          { title: "Crear la tarjeta", content: "Un componente TarjetaProducto en su propio archivo que reciba todo por props desestructuradas. Primero se construye solo con imagen, nombre y precio normal." },
          { title: "Agregar las reglas", content: "Se suma la lógica del descuento con un ternario y las etiquetas con &&. Para saber si quedan pocas unidades se necesita una comparación con stock, sin olvidar la trampa del cero." },
          { title: "Dibujar la lista", content: "En App.jsx se recorre el arreglo con map, sin olvidar la key. Cada tarjeta recibe por props lo que necesita." },
          { title: "Hacerlo responsive", content: "Se crea la grilla con CSS Grid y los dos media queries, y se prueba con la vista de dispositivo del navegador." },
        ]}
      />

      <Callout title="Cómo verificar el resultado" variant="callout-tip">
        <ul className="mb-0 list-disc space-y-1 pl-5">
          <li>Al cambiar un precio en el arreglo de datos, la tarjeta cambia sola sin tocar el componente.</li>
          <li>Al agregar un producto nuevo al arreglo, aparece sin escribir más JSX.</li>
          <li>La consola del navegador no muestra errores ni advertencias.</li>
          <li>Prettier deja el código ordenado cada vez que se guarda.</li>
        </ul>
      </Callout>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Para ir más lejos</h3>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>Calcular el porcentaje de descuento a partir de los dos precios y mostrarlo en la tarjeta (por ejemplo, «-12 %»).</li>
        <li>Agregar un título que indique cuántos productos hay en total, usando la longitud del arreglo.</li>
        <li>Separar la parte de los precios en su propio componente <code>Precio</code>.</li>
      </ul>
    </section>
  );
}
