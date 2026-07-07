export function QueEsBase64Section() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Qué es Base64"}</h2>
      <p className="my-4">{"Base64 es una codificación: transforma bytes en caracteres imprimibles para poder transportar datos en sistemas que esperan texto. No agrega confidencialidad. Si alguien obtiene el Base64, puede decodificarlo."}</p>
    </section>
  );
}
