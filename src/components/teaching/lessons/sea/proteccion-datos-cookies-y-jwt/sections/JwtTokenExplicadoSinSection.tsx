export function JwtTokenExplicadoSinSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"JWT (token) explicado sin humo"}</h2>
      <p className="my-4">{"JWT es un formato de token que contiene “claims” y puede firmarse para evitar modificación. No es magia ni cifrado por defecto. Se usa cuando quieres autenticación sin estado en ciertos escenarios, pero exige cuidado: expiración corta, rotación, y protección contra robo."}</p>
    </section>
  );
}
