export function SenalesDeUnaAplicacionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Señales de una aplicación que creció sin seguridad"}</h2>
      <ul className="my-4 list-disc pl-6">
        <li>{"Credenciales “quemadas” dentro del código o archivos compartidos."}</li>
      </ul>
      <ul className="my-4 list-disc pl-6">
        <li>{"Errores que muestran detalles internos (rutas, consultas, stack traces) al usuario."}</li>
      </ul>
      <ul className="my-4 list-disc pl-6">
        <li>{"Logs inexistentes o, peor, logs con datos sensibles completos."}</li>
      </ul>
      <ul className="my-4 list-disc pl-6">
        <li>{"Cambios directos en producción sin revisión ni pruebas."}</li>
      </ul>
      <ul className="my-4 list-disc pl-6">
        <li>{"Autenticación “a medias”: sesiones inconsistentes, tokens sin expiración o cookies sin banderas de seguridad."}</li>
      </ul>
    </section>
  );
}
