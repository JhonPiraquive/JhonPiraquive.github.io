import { CompareTable } from "@/components/teaching/CompareTable";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { StepReveal } from "@/components/teaching/StepReveal";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

const CHECKLIST_CMD = `# En el servidor — servicio FTP activo
sudo systemctl status vsftpd
sudo ss -tlnp | grep -E ':21|:2121'

# Desde cliente — conectividad puerto control
nc -zv 203.0.113.10 21
# o telnet 203.0.113.10 21  (legacy)

# Tras conexión FileZilla — verificar listado remoto
# Subir test.txt → descargar → md5sum local vs remoto`;

export function ValidacionServicioFtpSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Validación del servicio FTP"}
      </h2>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">
        {
          "La validación del servicio FTP es el conjunto de pruebas que confirman que vsftpd está activo, el cliente se conecta correctamente, la transferencia bidireccional funciona y la administración de directorios responde según lo configurado. Es la fase final antes de documentar el servicio como operativo."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Para qué sirve / Por qué importa"}</h3>
      <p className="my-4">
        {
          "Un vsftpd «active» en systemctl no garantiza conexión desde el cliente si el modo pasivo está mal configurado o el firewall bloquea el rango 50000–50100. Validar en capas (servicio → puerto → sesión → transferencia → integridad) evita cerrar configuraciones incompletas."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Checklist de validación"}</h3>
      <CompareTable
        headers={["#", "Prueba", "Acción", "Resultado esperado"]}
        rows={[
          ["1", "Servicio vsftpd", "systemctl status vsftpd", "active (running)"],
          ["2", "Puerto control", "ss -tlnp | grep :21", "vsftpd escuchando"],
          ["3", "Usuario dedicado", "Login FTP con transferencia", "Autenticación OK, no anónimo"],
          ["4", "Modo pasivo", "FileZilla modo pasivo", "Listado remoto sin timeout datos"],
          ["5", "Subida", "STOR PDF + imagen + txt", "Archivos visibles en remoto"],
          ["6", "Descarga", "RETR de archivo subido", "Copia local idéntica"],
          ["7", "Integridad", "md5sum / sha256sum", "Hashes coinciden"],
          ["8", "Directorios", "mkdir remoto + chmod", "Jerarquía y permisos correctos"],
          ["9", "Documentación", "Ficha host/puerto/herramienta", "Evidencias capturadas"],
          ["10", "Seguridad", "anonymous_enable=NO, chroot", "Config documentada en informe"],
        ]}
      />

      <StepReveal
        title="Orden recomendado de pruebas"
        steps={[
          {
            title: "Capa servidor",
            content: "systemctl + ss en puerto 21 (o mapeado). Si falla, no avanzar al cliente.",
          },
          {
            title: "Capa red",
            content: "nc/telnet al puerto desde el PC cliente. Connection refused → revisar Docker -p o firewall.",
          },
          {
            title: "Capa sesión FTP",
            content: "FileZilla conectado, listado de /archivos o home chroot.",
          },
          {
            title: "Capa transferencia",
            content: "Subir tres tipos de archivo; descargar uno; comparar checksum.",
          },
          {
            title: "Capa administración",
            content: "Crear subcarpeta, mover archivo, verificar permisos con ls -la.",
          },
        ]}
      />

      <CodeFiddle language="bash" title="Comandos de validación en servidor y red" code={CHECKLIST_CMD} />

      <PracticeExercise
        prompt="systemctl muestra vsftpd active pero FileZilla falla en listado con «425 Can't open data connection». ¿Qué dos capas revisarías primero?"
        hints={["Pasivo", "Firewall"]}
        expectedKeywords={["pasivo", "pasv", "puerto", "firewall", "50000"]}
        successMessage="Revisar pasv_min/max_port en vsftpd.conf, modo pasivo en cliente y que firewall/Docker exponga el rango pasivo además del puerto 21."
      />

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Ejemplo concreto"}</h3>
      <p className="my-4">
        {
          "Tras configurar vsftpd, el técnico ejecuta el checklist completo: status active, FileZilla lista /archivos, sube informe.pdf y verifica sha256sum idéntico tras descarga. Registra capturas en orden 1–10 y marca el servicio como validado con fecha y versión de vsftpd."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Señales de buen y mal uso"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Buen uso:"}</strong>
          {" checklist completo documentado; prueba desde la misma red que usarán los usuarios finales."}
        </li>
        <li>
          <strong>{"Mal uso:"}</strong>
          {" validar solo systemctl sin transferencia real; omitar modo pasivo en entornos NAT."}
        </li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Malas prácticas en el mundo real"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Probar FTP desde misma red del servidor:"}</strong>
          {" PASV con IP privada en respuesta; cliente externo falla. Corrección: probar desde red externa, configurar pasv_address pública."}
        </li>
      </ul>

    </section>
  );
}
