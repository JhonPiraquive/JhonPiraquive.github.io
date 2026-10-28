import { Callout } from "@/components/teaching/Callout";

export function ObjetivosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Para qué sirve esta guía</h2>
      <p className="my-4">
        Las actividades del módulo se desarrollan con React, una librería de JavaScript para construir interfaces. Esta
        guía reúne lo técnico que hace falta para resolverlas. No reemplaza las clases: las clases enseñan a identificar,
        evaluar y adoptar tecnologías emergentes; la guía es el manual de la tecnología con la que se practica.
      </p>
      <p className="my-4">
        La parte 1 parte de cero conocimientos de React y termina con un primer proyecto funcionando. Prepara la actividad
        del clon de productos.
      </p>
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Objetivos de la parte 1</h3>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>Usar la terminal, Node y npm para instalar librerías y entender qué hay dentro de package.json.</li>
        <li>Escribir JavaScript moderno: const y let, funciones flecha, objetos, arreglos y desestructuración.</li>
        <li>Crear un proyecto con Vite y armar componentes de React que reciben datos por props.</li>
        <li>Mostrar una lista de tarjetas con estilos distintos según los datos y que se adapte al tamaño de pantalla.</li>
      </ul>
      <Callout title="Cómo usarla junto con las clases" variant="callout-tip">
        <p className="mb-0">
          Se consulta cuando una actividad lo requiere o como repaso. Cada página puede leerse por separado, aunque el
          orden propuesto va de lo más básico a lo más completo.
        </p>
      </Callout>
    </section>
  );
}
