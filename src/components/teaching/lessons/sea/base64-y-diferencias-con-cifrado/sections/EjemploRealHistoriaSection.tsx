export function EjemploRealHistoriaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Ejemplo real (historia)"}</h2>
      <p className="my-4">{"Historia: “La contraseña ‘protegida’”. Un equipo guarda contraseñas en Base64 en un archivo porque “no se ven”. Un día el archivo se filtra. Un atacante decodifica en segundos. El problema no fue Base64: fue confundir codificación con protección."}</p>
    </section>
  );
}
