export function EjemploRealHistoriaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Ejemplo real (historia)"}</h2>
      <p className="my-4">{"Historia: “La app que creció demasiado rápido”. Un equipo lanza una plataforma de reservas. Al principio eran 200 usuarios y un solo servidor. Se prioriza velocidad: contraseñas simples, un panel admin sin segundo factor, y mensajes de error detallados “para depurar”. Dos años después llegan 50.000 usuarios y proveedores. Un atacante no necesita romper nada sofisticado: aprovecha una contraseña reutilizada en el panel admin, extrae la base de datos y publica capturas. El daño no fue solo técnico: soporte colapsa, hay pérdida de confianza, y la empresa debe explicar por qué no tenía controles básicos."}</p>
    </section>
  );
}
