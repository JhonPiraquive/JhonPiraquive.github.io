export function ObjetivosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Objetivos de aprendizaje</h2>
      <p className="my-4">
        Nivel del módulo en esta clase: <strong>de 35 a 70</strong>. Con los componentes ya construidos, el paso
        siguiente es volverlos interactivos y organizarlos como un sitio administrativo real. La clase también
        muestra cómo se aplican los criterios de evaluación de tecnologías a las decisiones de interfaz.
      </p>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>Manejar estado y eventos con useState y entender qué pasa cuando React vuelve a dibujar.</li>
        <li>Usar useEffect solo cuando hace falta y crear hooks propios.</li>
        <li>Armar pantallas con Material UI: instalar, usar componentes, personalizar con sx y con el tema.</li>
        <li>Aplicar principios de UX y UI para que una pantalla administrativa sea clara, accesible y útil.</li>
        <li>Navegar entre pantallas con React Router usando layouts, rutas anidadas y parámetros.</li>
        <li>Justificar con criterios la adopción de una librería de interfaz frente a la alternativa de construirla desde cero.</li>
      </ul>
    </section>
  );
}
