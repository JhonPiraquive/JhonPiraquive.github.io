import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

const COMANDOS_RECONOCIMIENTO = `# Sistema operativo y kernel
uname -a

# Usuario conectado actualmente
whoami

# Nombre del host
hostname

# Direcciones IP del servidor
hostname -I

# Servicios activos (systemd)
systemctl list-units --type=service --state=running

# Estado de un servicio concreto (ej. nginx, ssh)
systemctl status nginx
systemctl status ssh

# Puertos en escucha y proceso asociado
sudo ss -tlnp
# Alternativa clásica:
sudo netstat -tlnp

# Resumen rápido post-conexión
echo "=== Entorno ===" && uname -srm && whoami && hostname -I`;

export function ReconocimientoEntornoSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Reconocimiento del entorno tras conectarse"}
      </h2>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">
        {
          "El reconocimiento del entorno es el conjunto de comandos y observaciones que se ejecutan inmediatamente después de una conexión SSH exitosa para entender en qué máquina estás: sistema operativo, usuario activo, dirección IP, servicios en ejecución y puertos abiertos. Es el primer paso antes de diagnosticar cualquier incidencia."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Para qué sirve / Por qué importa"}</h3>
      <p className="my-4">
        {
          "Sin reconocer el entorno, se puede editar la configuración equivocada o reiniciar un servicio en el servidor incorrecto. En entornos con varios hosts (staging, producción, réplicas), confirmar hostname e IP evita incidentes graves. Documentar la salida de estos comandos forma parte de un informe técnico profesional."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Comandos esenciales y su función"}</h3>
      <CompareTable
        headers={["Comando", "Qué muestra", "Para qué lo usas"]}
        rows={[
          ["uname -a", "Kernel, arquitectura, versión del SO", "Confirmar Debian/Ubuntu/RHEL y versión"],
          ["whoami", "Usuario efectivo de la sesión", "Verificar permisos (root vs operador)"],
          ["hostname", "Nombre corto del servidor", "Distinguir srv-web-01 de srv-db-01"],
          ["hostname -I", "IPs asignadas al host", "Comparar con DNS y firewall"],
          ["systemctl status SERVICIO", "Estado active/inactive/failed", "Ver si nginx, ssh u otro daemon corre"],
          ["systemctl list-units --state=running", "Lista de servicios activos", "Panorama de qué está encendido"],
          ["ss -tlnp", "Puertos TCP en escucha + PID/proceso", "Confirmar :80, :443, :22 abiertos"],
          ["netstat -tlnp", "Equivalente clásico a ss", "Mismo fin en sistemas con netstat instalado"],
        ]}
      />

      <CodeFiddle
        language="bash"
        title="Secuencia de reconocimiento post-SSH"
        code={COMANDOS_RECONOCIMIENTO}
      />

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Cómo funciona — flujo recomendado"}</h3>
      <ol className="my-4 list-decimal pl-6">
        <li>{"Conectar por SSH y confirmar prompt (usuario@hostname)."}</li>
        <li>{"Ejecutar uname, whoami, hostname -I — anotar resultados."}</li>
        <li>{"Listar servicios relevantes: systemctl status nginx ssh."}</li>
        <li>{"Revisar puertos: sudo ss -tlnp | grep -E ':80|:443|:22'."}</li>
        <li>{"Documentar hallazgos antes de modificar configuración."}</li>
      </ol>
      <MermaidDiagram
        title="Flujo de reconocimiento post-SSH"
        chart={`flowchart TD
  A[Conectar por SSH] --> B[Confirmar usuario y hostname]
  B --> C[Identificar sistema operativo e IP]
  C --> D[Revisar servicios relevantes]
  D --> E[Comprobar puertos en escucha]
  E --> F[Documentar hallazgos]
  F --> G[Modificar solo con contexto verificado]`}
      />

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Ejemplo concreto"}</h3>
      <p className="my-4">
        {
          "Tras ssh -p 2222 operador@203.0.113.50, se ejecuta whoami → operador; hostname → intranet-corp; hostname -I → 172.18.0.2; systemctl status nginx → inactive (dead). Conclusión inmediata: estás en el servidor correcto pero el servicio web no está activo — siguiente paso es diagnosticar nginx, no DNS externo."
        }
      </p>


      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Señales de buen y mal uso"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Buen uso:"}</strong>
          {" copiar salidas a informe; verificar hostname antes de sudo systemctl restart; grep en ss para filtrar puertos web."}
        </li>
        <li>
          <strong>{"Mal uso:"}</strong>
          {" asumir que «conecté» implica servidor correcto sin hostname; ignorar inactive en systemctl; confundir IP del contenedor con IP pública."}
        </li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Malas prácticas en el mundo real"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Asumir Ubuntu cuando es Debian:"}</strong>
          {" Comandos apt en servidor con yum fallaron en urgencia. Corrección: uname -a, cat /etc/os-release al conectar."}
        </li>
        <li>
          <strong>{"No verificar usuario antes de rm -rf:"}</strong>
          {" Operador en / como root casi borra /etc. Corrección: whoami, pwd, alias rm='rm -i' en prod."}
        </li>
      </ul>

    </section>
  );
}
