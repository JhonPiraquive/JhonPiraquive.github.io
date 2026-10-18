export function CierreSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Cierre"}</h2>
      <ol className="my-4 list-decimal pl-6">
        <li>{"La asincronía evita bloquear la página mientras algo tarda; las promesas y async/await ordenan ese código."}</li>
        <li>{"fetch pide datos a una API; antes de leer el cuerpo se comprueba la respuesta y los errores se capturan."}</li>
        <li>{"Una aplicación separa datos, lógica y vista, y delega eventos en un contenedor."}</li>
        <li>{"La persistencia con localStorage y el puente a una API convierten un ejemplo en una aplicación."}</li>
      </ol>
      <p className="my-4">{"Con la clase 3 se completa el recorrido: desde la primera línea de JavaScript hasta aplicaciones que dibujan datos propios y remotos en el navegador."}</p>
    </section>
  );
}
