export function EjemploRealHistoriaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Ejemplo real (historia)"}</h2>
      <p className="my-4">{"Historia: “La sesión eterna”. Una app crea un token que nunca expira “para no molestar al usuario”. Un día una computadora compartida queda con sesión abierta. Otra persona entra y accede a datos privados. El problema no fue el usuario: fue diseñar autenticación sin límites de tiempo ni cierre claro."}</p>
    </section>
  );
}
