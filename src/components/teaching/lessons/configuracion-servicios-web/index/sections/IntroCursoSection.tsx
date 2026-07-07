export function IntroCursoSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Bienvenida al curso"}
      </h2>
      <p className="my-4">
        {
          "Este curso enseña a instalar y configurar los servicios que hacen posible un sitio web profesional en Internet: desde el navegador como cliente hasta dominios, hosting, correo corporativo, HTTPS, administración remota y entornos de prueba con Docker y máquinas virtuales."
        }
      </p>
      <p className="my-4">
        {
          "Está diseñado para impartirse en cuatro sesiones de dos horas (ocho horas totales). Cada clase tiene teoría extendida, ejercicios interactivos, guía de tiempo para el docente y un mini-quiz."
        }
      </p>
    </section>
  );
}
