export function CierreSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Cierre de la lección"}</h2>
      <p className="my-4">
        {
          "Has completado los fundamentos de React: JSX, componentes funcionales, props, estado con hooks y efectos para consumir APIs."
        }
      </p>
      <p className="my-4 font-semibold">{"Ideas clave para retener:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>{"React es librería de UI; el ecosistema añade routing y data fetching."}</li>
        <li>{"Props fluyen hacia abajo; callbacks notifican al padre."}</li>
        <li>{"Nunca mutar estado directamente; usa el setter de useState."}</li>
        <li>{"useEffect necesita dependencias correctas y función de limpieza."}</li>
        <li>{"key con ID estable en listas dinámicas."}</li>
      </ul>
      <p className="my-4">
        <strong>{"Siguiente paso:"}</strong>
        {" lección "}
        <code>{"modelo-cliente-servidor"}</code>
        {" — cómo cliente y servidor colaboran en una arquitectura web completa."}
      </p>
    </section>
  );
}
