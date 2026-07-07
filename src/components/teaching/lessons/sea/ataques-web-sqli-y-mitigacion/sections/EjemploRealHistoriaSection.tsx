export function EjemploRealHistoriaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Ejemplo real (historia)"}</h2>
      <p className="my-4">{"Historia: “El buscador ‘inofensivo’”. Una app agrega un buscador por nombre. El equipo lo lanza rápido concatenando el texto del usuario en la consulta. Un atacante prueba entradas raras y nota que el sistema responde diferente ante comillas. En minutos extrae datos de usuarios. El fallo no fue “la base de datos”: fue confiar en entrada sin separar datos de instrucciones."}</p>
    </section>
  );
}
