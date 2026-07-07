export function CuandoNoUsarBase64Section() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Cuándo NO usar Base64"}</h2>
      <ul className="my-4 list-disc pl-6">
        <li>{"Para “ocultar” contraseñas o secretos."}</li>
      </ul>
      <ul className="my-4 list-disc pl-6">
        <li>{"Para “cifrar” información sensible."}</li>
      </ul>
      <ul className="my-4 list-disc pl-6">
        <li>{"Para cumplir seguridad o privacidad."}</li>
      </ul>
      <ul className="my-4 list-disc pl-6">
        <li>{"Como sustituto de TLS/HTTPS."}</li>
      </ul>
    </section>
  );
}
