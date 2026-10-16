export function ObjetivosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Objetivos de aprendizaje</h2>
      <p className="my-4">
        Nivel del módulo en esta clase: <strong>de 35 a 70</strong>. Ya sabes crear componentes; ahora los haces
        interactivos y los organizas como un sitio administrativo real.
      </p>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>Manejar estado y eventos con useState y entender qué pasa cuando React vuelve a dibujar.</li>
        <li>Usar useEffect solo cuando hace falta y crear tus propios hooks.</li>
        <li>Armar pantallas con Material UI: instalar, usar componentes, personalizar con sx y con el tema.</li>
        <li>Aplicar principios de UX y UI para que una pantalla administrativa sea clara, accesible y útil.</li>
        <li>Navegar entre pantallas con React Router usando layouts, rutas anidadas y parámetros.</li>
      </ul>
    </section>
  );
}
