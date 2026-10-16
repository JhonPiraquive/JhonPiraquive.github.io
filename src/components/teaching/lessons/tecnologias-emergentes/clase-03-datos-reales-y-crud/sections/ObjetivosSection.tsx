export function ObjetivosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Objetivos de aprendizaje</h2>
      <p className="my-4">
        Nivel del módulo en esta clase: <strong>de 70 a 100</strong>. Conectas tu interfaz con datos reales y aprendes
        a dejarla lista para que otras personas la usen.
      </p>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>Explicar cómo se comunican el cliente y el servidor con HTTP, y leer métodos y códigos de estado.</li>
        <li>Usar promesas, async/await y fetch con manejo correcto de errores.</li>
        <li>Construir un CRUD completo: listar, crear, editar y eliminar registros contra una API.</li>
        <li>Validar formularios en el cliente y entender por qué el servidor también debe validar.</li>
        <li>Mejorar rendimiento y calidad del código, preparar el proyecto para producción y saber qué tecnología aprender después.</li>
      </ul>
    </section>
  );
}
