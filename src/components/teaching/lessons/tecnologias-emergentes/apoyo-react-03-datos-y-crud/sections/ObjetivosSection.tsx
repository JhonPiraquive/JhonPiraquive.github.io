export function ObjetivosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Objetivos de la parte 3</h2>
      <p className="my-4">
        La interfaz se conecta con datos reales y se prepara para que otras personas la usen. Esta parte prepara la
        actividad de peticiones HTTP: crear, leer, actualizar y eliminar registros a través de una API.
      </p>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>Explicar cómo se comunican el cliente y el servidor con HTTP, y leer métodos y códigos de estado.</li>
        <li>Usar promesas, async/await y fetch con manejo correcto de errores.</li>
        <li>Construir un CRUD completo: listar, crear, editar y eliminar registros contra una API.</li>
        <li>Validar formularios en el cliente y entender por qué el servidor también debe validar.</li>
        <li>Mejorar rendimiento y calidad del código y preparar el proyecto para producción.</li>
      </ul>
    </section>
  );
}
