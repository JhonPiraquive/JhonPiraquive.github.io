import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { Callout } from "@/components/teaching/Callout";
import { StepReveal } from "@/components/teaching/StepReveal";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

const SUBIR_DESCARGAR = `# Verificar tamaño local antes de subir
ls -lh informe.pdf imagen.png notas.txt

# Desde cliente gráfico (FileZilla):
# - Arrastrar archivos del panel local al remoto (STOR)
# - Descargar con clic derecho → Descargar (RETR)

# Desde línea de comandos (ftp CLI — legado)
ftp 203.0.113.10
# login: transferencia
# ftp> cd archivos
# ftp> put informe.pdf
# ftp> get copia.pdf
# ftp> bye`;

const INTEGRIDAD = `# Checksum en origen (cliente)
md5sum informe.pdf
sha256sum informe.pdf

# Checksum en destino (servidor vía SSH o consola remota)
md5sum /home/transferencia/archivos/informe.pdf
sha256sum /home/transferencia/archivos/informe.pdf

# Comparar tamaños
ls -l informe.pdf
# vs listado remoto o:
stat -c '%s bytes' informe.pdf`;

export function TransferenciaArchivosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Transferencia de archivos e integridad"}
      </h2>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">
        {
          "La transferencia de archivos por FTP usa comandos STOR (subida) y RETR (descarga) sobre el canal de datos. Verificar integridad significa confirmar que el archivo remoto es idéntico al local comparando tamaño en bytes o huellas criptográficas (MD5, SHA-256) calculadas antes y después de la transferencia."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Para qué sirve / Por qué importa"}</h3>
      <p className="my-4">
        {
          "Un PDF corrupto o una imagen truncada puede invalidar una entrega contractual o un despliegue web. En soporte, comparar checksums demuestra que la copia llegó intacta y descarta problemas de red intermitente o disco lleno en el servidor."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Cómo funciona — subida, descarga y verificación"}</h3>
      <StepReveal
        title="Flujo de transferencia documentada"
        steps={[
          {
            title: "Preparar archivos de prueba",
            content: "Al menos un PDF, una imagen (PNG/JPG) y un archivo de texto. Anotar tamaño con ls -lh.",
          },
          {
            title: "Subir (upload)",
            content: "Cliente gráfico: arrastrar al panel remoto. Ver barra de progreso 100 % y archivo en listado remoto.",
          },
          {
            title: "Descargar (download)",
            content: "Bajar una copia a otra carpeta local. No sobrescribir el original hasta verificar.",
          },
          {
            title: "Comparar tamaños",
            content: "ls -l local vs remoto (mismo número de bytes). Desajuste → reintentar transferencia.",
          },
          {
            title: "Checksums",
            content: "md5sum o sha256sum en origen y destino. Hashes idénticos = integridad confirmada.",
          },
        ]}
      />

      <CodeFiddle language="bash" title="Subida, descarga y tipos de archivo" code={SUBIR_DESCARGAR} />
      <CodeFiddle language="bash" title="Verificación de integridad" code={INTEGRIDAD} />

      <table className="my-4 w-full border-collapse text-sm">
        <thead>
          <tr className="bg-[var(--color-neutral-light)]">
            <th className="border p-2 text-left">{"Tipo archivo"}</th>
            <th className="border p-2 text-left">{"Uso típico"}</th>
            <th className="border p-2 text-left">{"Verificación sugerida"}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">{"PDF"}</td>
            <td className="border p-2">{"Informes, contratos"}</td>
            <td className="border p-2">{"sha256sum + abrir PDF en visor"}</td>
          </tr>
          <tr>
            <td className="border p-2">{"Imagen PNG/JPG"}</td>
            <td className="border p-2">{"Logos, capturas"}</td>
            <td className="border p-2">{"md5sum + vista previa en cliente"}</td>
          </tr>
          <tr>
            <td className="border p-2">{"Texto .txt / .md"}</td>
            <td className="border p-2">{"Notas, configs"}</td>
            <td className="border p-2">{"diff local remoto o cmp"}</td>
          </tr>
        </tbody>
      </table>

      <Callout title="cmp y diff">
        {
          "Para archivos de texto pequeños, `cmp archivo1 archivo2` devuelve silencio si son iguales. `diff` muestra líneas distintas. Para binarios grandes, preferir sha256sum."
        }
      </Callout>

      <PracticeExercise
        prompt="Subiste informe.pdf (2 048 576 bytes). En el servidor ls -l muestra 2 045 000 bytes. ¿Qué indica y qué harías antes de dar por válida la transferencia?"
        hints={["Integridad", "Re-transferir"]}
        expectedKeywords={["reintent", "checksum", "truncad", "bytes"]}
        successMessage="Tamaños distintos indican transferencia incompleta o corrupta; re-subir, verificar espacio en disco remoto y comparar sha256sum tras nueva transferencia."
      />

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Ejemplo concreto"}</h3>
      <p className="my-4">
        {
          "Un técnico sube logo.png por FileZilla, calcula md5sum en su laptop (a1b2c3…), ejecuta md5sum en el servidor sobre la misma ruta remota y obtiene el mismo hash. Documenta ambos valores y el tamaño 154832 bytes en su bitácora de transferencia."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Señales de buen y mal uso"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Buen uso:"}</strong>
          {" checksum + tamaño; probar descarga inversa; documentar hora y herramienta."}
        </li>
        <li>
          <strong>{"Mal uso:"}</strong>
          {" asumir OK solo por barra verde sin comparar bytes; omitir verificación en archivos críticos."}
        </li>
      </ul>
    </section>
  );
}
