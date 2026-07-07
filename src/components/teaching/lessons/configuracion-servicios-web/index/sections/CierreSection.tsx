export function CierreSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Cierre de la lección"}</h2>
      <p className="my-4">
        {
          "Has recorrido la configuración práctica de servicios de Internet: navegador, dominios e IP, hosting, correo corporativo, HTTPS, administración remota y virtualización. Estos artefactos son el puente entre la teoría de protocolos y un servicio web operativo en producción."
        }
      </p>
      <p className="my-4 font-semibold">{"Ideas clave:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>{"DNS traduce nombres en IP; MX y TXT son críticos para correo."}</li>
        <li>{"HTTPS no es opcional en producción; renueva certificados a tiempo."}</li>
        <li>{"SSH/SFTP reemplaza protocolos inseguros para administración."}</li>
        <li>{"Contenedores aceleran despliegue; VMs aislan SO completos para pruebas."}</li>
      </ul>
    </section>
  );
}
