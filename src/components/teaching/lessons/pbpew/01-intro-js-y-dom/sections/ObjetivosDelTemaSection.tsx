export function ObjetivosDelTemaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Objetivos del tema"}</h2>
      <p className="my-4">
        {
          "Esta lección introduce JavaScript como lenguaje de comportamiento en la web, sitúa su historia y ámbitos de uso, y presenta el DOM como puente entre HTML y la lógica ejecutable en el navegador. Al finalizar, el estudiante podrá:"
        }
      </p>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "Definir JavaScript y nombrar al menos tres características clave del lenguaje (interpretado, tipado dinámico, orientado a eventos en el navegador)."
          }
        </li>
        <li>
          {
            "Describir al menos tres ámbitos de uso actuales de JavaScript (navegador, servidor con Node.js, y uno adicional: móvil, herramientas o videojuegos)."
          }
        </li>
        <li>
          {
            "Explicar qué es el DOM y distinguir el archivo HTML en disco de la representación viva en memoria que JavaScript puede modificar."
          }
        </li>
        <li>
          {
            "Identificar DevTools → Consola como herramienta para depurar con console.log y reconocer que TypeScript debe transpilarse a JavaScript antes de ejecutarse en el navegador."
          }
        </li>
        <li>
          {
            "Aplicar el objeto document en la consola del navegador para leer propiedades básicas del árbol DOM (por ejemplo, document.documentElement.tagName)."
          }
        </li>
      </ul>
    </section>
  );
}
