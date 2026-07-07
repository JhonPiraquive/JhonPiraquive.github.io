import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { Callout } from "@/components/teaching/Callout";
import { CompareTable } from "@/components/teaching/CompareTable";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function ResolucionLocalSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Resolución local: /etc/hosts y DNS del sistema"}
      </h2>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">
        {
          "La resolución local es cómo tu equipo traduce un nombre de dominio a IP antes de abrir el navegador. El sistema operativo consulta, en orden: caché DNS, archivo `/etc/hosts` (Linux/macOS) o `C:\\Windows\\System32\\drivers\\etc\\hosts` (Windows), y luego el resolver configurado (ISP, 1.1.1.1, DNS corporativo)."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Para qué sirve / Por qué importa"}</h3>
      <p className="my-4">
        {
          "Un servidor DNS autoritativo puede responder correctamente a `dig @servidor-dns`, pero el navegador muestra DNS_PROBE_FINISHED_NXDOMAIN si el PC no usa ese resolver. Configurar `/etc/hosts` o el DNS del sistema cierra esa brecha en entornos de prueba o redes internas."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Opciones de resolución"}</h3>
      <CompareTable
        headers={["Método", "Cuándo usarlo", "Ventaja", "Limitación"]}
        rows={[
          [
            "Resolver del ISP / público",
            "Producción, Internet real",
            "Propagación global automática",
            "Caché TTL; no sirve para DNS privado sin delegación",
          ],
          [
            "DNS manual en la conexión",
            "Red interna con servidor DNS propio",
            "Todo el SO usa el mismo resolver",
            "Debe ser alcanzable desde la red del cliente",
          ],
          [
            "/etc/hosts",
            "Pruebas rápidas, desarrollo local",
            "Inmediato, sin TTL",
            "Solo en esa máquina; no escala a equipos",
          ],
          [
            "dig @servidor específico",
            "Diagnóstico del autoritativo",
            "Verifica zona DNS directamente",
            "No afecta al navegador",
          ],
        ]}
      />

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Ejemplo — /etc/hosts"}</h3>
      <CodeFiddle
        language="bash"
        title="Entradas en /etc/hosts (Linux)"
        code={`# Editar con privilegios de administrador
sudo nano /etc/hosts

# Contenido de ejemplo:
190.25.80.20   www.innovatech.co innovatech.co portal.innovatech.co
190.25.80.30   mail.innovatech.co`}
      />
      <CodeFiddle
        language="powershell"
        title="hosts en Windows"
        code={`# Abrir como administrador: C:\\Windows\\System32\\drivers\\etc\\hosts
190.25.80.20   www.innovatech.co innovatech.co
190.25.80.30   mail.innovatech.co`}
      />

      <Callout title="DNS_PROBE_* en Chrome/Edge">
        {
          "Este error indica que el navegador no pudo resolver el nombre. Si `dig @tu-servidor-dns` funciona pero el navegador no, configura resolución local (hosts o DNS del sistema) antes de probar el sitio web."
        }
      </Callout>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Comprobaciones"}</h3>
      <CodeFiddle
        language="bash"
        title="Verificar resolución en el sistema"
        code={`# Resolver del sistema (sin @)
dig www.innovatech.co A +short
ping -c1 www.innovatech.co

# Comparar con autoritativo
dig @ns.innovatech.co www.innovatech.co A +short`}
      />

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Señales de buen y mal uso"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Buen uso: probar resolución del sistema antes del navegador; documentar entradas hosts temporales."}</li>
        <li>{"Mal uso: dejar hosts de prueba en producción; confundir dig @local con resolución global."}</li>
      </ul>

      <PracticeExercise
        prompt="dig @192.168.1.10 devuelve la IP correcta pero el navegador muestra DNS_PROBE. ¿Qué falta configurar?"
        hints={["¿Quién resuelve el navegador?", "hosts o DNS del SO"]}
        expectedKeywords={["hosts", "resolver", "sistema", "DNS"]}
        successMessage="Correcto. El PC no usa ese DNS como resolver del sistema; configura DNS manual o /etc/hosts."
      />
    </section>
  );
}
