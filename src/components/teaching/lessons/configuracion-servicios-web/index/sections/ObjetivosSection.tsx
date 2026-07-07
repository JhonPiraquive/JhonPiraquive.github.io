import { Callout } from "@/components/teaching/Callout";

export function ObjetivosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Objetivos del tema"}</h2>
      <p className="my-4">
        {
          "Esta lección aborda la instalación y configuración de artefactos de software vinculados a protocolos y servicios de Internet: navegadores, dominios, hosting, correo, HTTPS, administración remota, virtualización y diagnóstico de fallos."
        }
      </p>
      <p className="my-4 font-semibold">{"Competencia"}</p>
      <p className="my-4">
        {
          "Instalar y configurar artefactos de software relacionados con los protocolos y servicios de Internet."
        }
      </p>
      <p className="my-4 font-semibold">{"Resultados de aprendizaje"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>{"Identifica los diferentes navegadores y los factores que afectan su velocidad."}</li>
        <li>
          {
            "Configura las herramientas de los navegadores (cookies, caché, seguridad, privacidad, entre otros)."
          }
        </li>
        <li>
          {
            "Reconoce las tecnologías y las herramientas relacionadas con los diversos servicios de Internet."
          }
        </li>
        <li>
          {
            "Configura dominio y registros DNS (A, CNAME, MX, TXT), publica un sitio web corporativo y administra cuentas de correo por rol (gerencia, ventas, soporte)."
          }
        </li>
        <li>{"Administra de forma remota un equipo (SSH, documentación de acceso, reconocimiento del entorno)."}</li>
        <li>
          {
            "Configura transferencia de archivos por FTP/SFTP: servidor vsftpd, clientes gráficos, integridad con checksums y administración remota de directorios."
          }
        </li>
        <li>
          {
            "Despliega contenedores Docker básicos (pull, run, ps, exec) y documenta evidencias del entorno (uname, os-release)."
          }
        </li>
        <li>
          {
            "Diagnostica y corrige incidencias en servicios web (Nginx, logs, permisos) con metodología sistemática e informe técnico."
          }
        </li>
        <li>
          {
            "Crea y configura un ambiente de virtualización para instalar y probar aplicaciones sobre cualquier sistema operativo."
          }
        </li>
        <li>
          {
            "Verifica la integración dominio–DNS–hosting–correo con herramientas de diagnóstico (dig, curl) y resolución local."
          }
        </li>
      </ul>
      <p className="my-4 font-semibold">{"Estructura del tema"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>{"1. Fundamentación: navegadores, dominios, hosting, correo, HTTPS, nube."}</li>
        <li>{"2. Administración remota: SSH, FTP/SFTP, clientes gráficos, transferencia e integridad de archivos."}</li>
        <li>{"3. Virtualización: contenedores Docker (despliegue básico y Compose) y máquinas virtuales."}</li>
        <li>{"4. Diagnóstico sistemático, Nginx, validación e informe técnico."}</li>
      </ul>
      <p className="my-4 font-semibold">{"Prerrequisitos"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>{"Servicios web: concepto de servicio web y arquitectura cliente-servidor."}</li>
        <li>{"Protocolos y seguridad: HTTP, HTTPS y TLS."}</li>
        <li>{"Modelo cliente-servidor: flujo de petición y capas."}</li>
      </ul>
      <Callout title="Enfoque práctico">
        {
          "Cada bloque incluye ejemplos de comandos, tablas comparativas y ejercicios. El reto integrador al final une dominio, DNS, hosting, correo, HTTPS y acceso remoto en un escenario de PyME — sin depender de un entorno específico."
        }
      </Callout>
    </section>
  );
}
