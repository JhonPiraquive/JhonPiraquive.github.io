export function CasosRealesSection() {
  return (
    <section className="my-8 rounded-xl border-l-4 border-[var(--color-secondary)] bg-[var(--color-neutral-light)]/50 p-6">
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Casos reales"}</h2>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Bug de coordenadas invertidas"}</h3>
      <p className="my-4">
        {
          "Un equipo representa el tablero como squares[64] pero pinta con fila y col intercambiados. Los movimientos legales en backend (FEN) fallan en frontend: el caballo en b1 aparece en a2."
        }
      </p>
      <p className="my-4 border-l-4 border-[var(--color-secondary)] pl-4">
        <strong>{"Decisión:"}</strong>
        {
          " una sola convención y funciones aCoordenadas(indice) / aIndice(fila, col) compartidas entre modelo, vista y API."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Partida corrupta en localStorage"}</h3>
      <p className="my-4">
        {
          "Una PWA guarda estado tras cada movimiento. JSON.parse falla porque una versión anterior guardó referencias no serializables."
        }
      </p>
      <p className="my-4">
        <strong>{"Lección:"}</strong>
        {
          " persistir solo datos planos; validar al cargar; botones explícitos Guardar / Cargar / Nueva partida con fallback a posición inicial."
        }
      </p>
    </section>
  );
}
