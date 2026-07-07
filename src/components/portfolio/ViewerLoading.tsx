export function ViewerLoading() {
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 p-4">
      <p className="rounded-xl bg-white px-8 py-4 font-medium text-[var(--color-primary)]">
        Cargando visor…
      </p>
    </div>
  );
}
