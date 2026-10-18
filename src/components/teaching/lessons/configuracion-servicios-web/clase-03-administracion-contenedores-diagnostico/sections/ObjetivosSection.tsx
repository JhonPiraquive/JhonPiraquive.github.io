import { Callout } from "@/components/teaching/Callout";

export function ObjetivosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Objetivos de la clase"}</h2>
      <p className="my-4">{"La clase cierra el curso: administración remota con SSH, entornos reproducibles con contenedores y máquinas virtuales, y diagnóstico por capas."}</p>
      <p className="my-4 font-semibold">{"Al finalizar la clase, el estudiante puede:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>{"Configurar acceso remoto con SSH (claves, hardening básico), documentar la conexión y reconocer el entorno del servidor."}</li>
        <li>{"Elegir la herramienta de administración remota adecuada según el escenario."}</li>
        <li>{"Definir qué es un contenedor, diferenciarlo de una máquina virtual y ejecutar un stack con Docker Compose."}</li>
        <li>{"Preparar una máquina virtual de laboratorio con snapshots."}</li>
        <li>{"Diagnosticar fallos por capa (DNS, TLS, correo, SSH, contenedores, caché) con una metodología sistemática."}</li>
        <li>{"Validar correcciones y redactar un informe técnico."}</li>
      </ul>
      <Callout title="Regla de oro del curso">
        {"No se cambian nameservers y MX el mismo día sin respaldo de registros. La zona DNS se exporta antes de migrar correo o hosting."}
      </Callout>
    </section>
  );
}
