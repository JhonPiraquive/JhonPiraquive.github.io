export function ObjetivosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Objetivos de aprendizaje</h2>
      <p className="my-4">
        Nivel del módulo en esta clase: <strong>de 0 a 35</strong>. Empiezas sin saber nada de React y terminas con tu
        primer proyecto funcionando.
      </p>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>Explicar qué es una tecnología emergente y por qué lo nuevo no siempre es lo mejor.</li>
        <li>Usar la terminal, Node y npm para instalar librerías y entender qué hay dentro de package.json.</li>
        <li>Escribir JavaScript moderno: const y let, funciones flecha, objetos, arreglos y desestructuración.</li>
        <li>Crear un proyecto con Vite y armar componentes de React que reciben datos por props.</li>
        <li>Mostrar una lista de tarjetas con estilos distintos según los datos y que se adapte al tamaño de pantalla.</li>
      </ul>
    </section>
  );
}
