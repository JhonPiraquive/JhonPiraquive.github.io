import { Callout } from "@/components/teaching/Callout";

export function ObjetivosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Objetivos de aprendizaje"}
      </h2>
      <p className="my-4">{"Al finalizar la lección, el estudiante podrá:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "Explicar los principios de computación en la nube (NIST) y distinguir IaaS, PaaS y SaaS con ejemplos reales y criterio de elección."
          }
        </li>
        <li>
          {
            "Describir el modelo cliente-servidor aplicado a administración remota: quién inicia la conexión, qué protocolo usa y qué servicio escucha."
          }
        </li>
        <li>
          {
            "Comparar FTP, SFTP y SSH: puertos, cifrado, casos de uso y por qué FTP plano no debe usarse en producción."
          }
        </li>
        <li>
          {
            "Configurar acceso remoto con SSH (claves, authorized_keys, hardening básico) y transferir archivos con SFTP/FileZilla."
          }
        </li>
        <li>
          {
            "Documentar conexiones SSH (IP, puerto, herramienta, evidencias) y reconocer el entorno remoto con uname, whoami, hostname, systemctl y ss."
          }
        </li>
        <li>
          {
            "Elegir la herramienta adecuada de administración remota (PuTTY, MobaXterm, Bitvise, FileZilla, cPanel, RDP) según el escenario."
          }
        </li>
        <li>
          {
            "Configurar un servidor de transferencia FTP (vsftpd): usuario dedicado, directorio de trabajo, parámetros de seguridad y verificación del servicio."
          }
        </li>
        <li>
          {
            "Conectar con clientes FTP (FileZilla, WinSCP, Cyberduck), transferir archivos con verificación de integridad (md5sum, sha256sum) y administrar directorios remotos con permisos básicos."
          }
        </li>
        <li>
          {
            "Comparar FTP, FTPS y SFTP: cifrado, puertos, ventajas, limitaciones y casos de uso empresariales en LATAM."
          }
        </li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Prerrequisitos"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"clase-01-fundamentos-web:"}</strong>
          {" direccionamiento IP, DNS y modelo cliente-servidor básico."}
        </li>
        <li>
          <strong>{"clase-02-hosting-correo-https:"}</strong>
          {" tipos de hosting, TLS/HTTPS y servicios web en producción."}
        </li>
        <li>
          <strong>{"Lecciones POSW relacionadas:"}</strong>
          {" modelo-cliente-servidor (roles y puertos), protocolos-seguridad (cifrado y autenticación)."}
        </li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Introducción"}</h3>
      <p className="my-4">
        {
          "La mayoría de equipos en LATAM no están físicamente junto al servidor: el hosting puede estar en Miami, São Paulo o Bogotá vía partners, mientras el desarrollador opera desde Cali, Lima o Ciudad de México. Esta lección conecta la computación en la nube con los protocolos y herramientas que hacen posible esa operación remota de forma segura."
        }
      </p>
      <Callout title="Administración remota = canal operativo 24/7">
        {
          "Sin SSH, SFTP o paneles web no podrías desplegar código, revisar logs ni responder incidentes fuera del horario de oficina. Elegir protocolo y herramienta correctos es tan importante como elegir el hosting."
        }
      </Callout>
    </section>
  );
}
