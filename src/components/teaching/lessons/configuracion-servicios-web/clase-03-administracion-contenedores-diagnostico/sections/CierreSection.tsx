import { Link } from "@/i18n/navigation";

export function CierreSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Cierre"}</h2>
      <ol className="my-4 list-decimal pl-6">
        <li>{"En administración remota el cliente inicia la conexión y el servidor escucha en un puerto; SSH con claves, hardening básico y usuario no root con sudo es la base."}</li>
        <li>{"La herramienta se elige según el perfil: cPanel para diseñadores y SSH o SFTP para desarrolladores en un VPS."}</li>
        <li>{"Un contenedor empaqueta una aplicación con sus dependencias y arranca más rápido que una máquina virtual completa; la VM aísla un sistema operativo entero."}</li>
        <li>{"El diagnóstico sigue las capas (DNS, TLS, correo, SSH, contenedores, caché) y valida cada corrección con curl local y acceso externo."}</li>
        <li>{"Un informe técnico recoge problema, metodología, comandos, solución y lecciones aprendidas."}</li>
      </ol>
      <p className="my-4">{"El curso cumple su competencia cuando se puede levantar un entorno reproducible, protegerlo con HTTPS y diagnosticar fallos sin reiniciar servicios al azar. Para profundizar en Docker avanzado, el track de Programación Orientada a Sitios Web (POSW) tiene la lección de herramientas de desarrollo."}</p>
      <p className="my-6 flex flex-wrap gap-3">
        <Link href="/teaching/posw/herramientas-desarrollo" className="clay-button">
          {"Ir a herramientas de desarrollo (POSW)"}
        </Link>
      </p>
    </section>
  );
}
