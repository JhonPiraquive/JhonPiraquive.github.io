export function EjemplosRapidosPorPrincipioSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Ejemplos rápidos por principio"}</h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Confidencialidad"}</h3>
      <p className="my-4">{"Se rompe si alguien accede a datos que no le pertenecen: listas de clientes, correos, números de documento, tokens o secretos."}</p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Integridad"}</h3>
      <p className="my-4">{"Se rompe si un dato cambia sin autorización: saldo, rol de usuario, precio de producto, estado de una orden."}</p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Disponibilidad"}</h3>
      <p className="my-4">{"Se rompe si el sistema no está disponible o es muy lento: caídas, saturación, errores masivos o dependencia crítica caída."}</p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Autenticidad"}</h3>
      <p className="my-4">{"Se rompe si no puedes confiar en el origen: suplantación de identidad, sesión robada, tokens falsificados, requests manipuladas o MITM que “parece” tu servidor."}</p>
    </section>
  );
}
