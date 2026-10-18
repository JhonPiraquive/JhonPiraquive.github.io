export function TerminosClaveSinMatematicasSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Términos clave (sin matemáticas)"}</h2>
      <p className="my-4">{"Cifrado: transforma datos para que solo quien tiene la clave pueda leerlos. Hash: produce una huella fija que cambia si el mensaje cambia. SHA‑256 es una función hash popular: útil para integridad, no para “ocultar” información ni para almacenar contraseñas directamente sin técnicas adicionales."}</p>
    </section>
  );
}
