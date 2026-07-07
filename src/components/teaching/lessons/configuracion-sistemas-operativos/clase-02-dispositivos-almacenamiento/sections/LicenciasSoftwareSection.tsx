import { Callout } from "@/components/teaching/Callout";
import { CompareTable } from "@/components/teaching/CompareTable";

export function LicenciasSoftwareSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Licencias de software"}</h2>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">
        {
          "Una licencia de software es el contrato legal que define cómo puedes usar, copiar, modificar y redistribuir un programa. No confundir con la compra del DVD o la descarga: pagas por derechos de uso según términos del fabricante o de la licencia libre."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Para qué sirve / Por qué importa"}</h3>
      <p className="my-4">
        {
          "En Colombia, el uso de software sin licencia expone a la organización a auditorías, multas y riesgo de malware en cracks. La Ley 23 de 1982 y el Decreto 1360 de 1989 protegen el derecho de autor de programas; además, contratos públicos y licencias educativas exigen cumplimiento documentado."
        }
      </p>

      <CompareTable
        title="Tipos de licencia (resumen)"
        headers={["Tipo", "Definición breve", "Ejemplo", "Costo"]}
        rows={[
          ["Software libre (open source)", "Código abierto; uso y modificación según licencia OSI", "Linux, LibreOffice, VS Code", "Gratis / soporte opcional"],
          ["Dominio público", "Sin restricción de autor; uso total", "Algunas herramientas antiguas", "Gratis"],
          ["Freeware", "Gratis para usar; no necesariamente código abierto", "Adobe Reader, TeamViewer personal", "Gratis uso"],
          ["Shareware", "Prueba limitada; luego pago", "WinRAR (nag), algunos antivirus", "Prueba → pago"],
          ["Propietario / privativo", "Código cerrado; licencia del fabricante", "Windows, Photoshop", "Pago por licencia"],
          ["Comercial", "Venta con contrato y soporte", "Microsoft 365 empresarial, AutoCAD", "Suscripción o perpetua"],
        ]}
      />

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Contexto legal en Colombia"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "El software es obra intelectual: copiar Windows o Office sin licencia para 50 PCs de un colegio es infracción, aunque sea «solo para estudiar»."
          }
        </li>
        <li>
          {
            "Programas libres (Ubuntu, GIMP) reducen costo y permiten auditar código; igual hay que cumplir la licencia (GPL exige compartir cambios si redistribuyes binarios modificados)."
          }
        </li>
        <li>
          {
            "Licencias por volumen o educativas (Microsoft EES, Google Workspace for Education) requieren elegibilidad y registro — no son «gratis para todos»."
          }
        </li>
        <li>
          {
            "Freeware no autoriza uso comercial en todos los casos: leer EULA antes de instalar en empresa."
          }
        </li>
      </ul>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Cómo documentar en la hoja de vida"}</h3>
      <p className="my-4">
        {
          "Por cada programa crítico registra: nombre, versión, tipo de licencia, clave o contrato, fecha de expiración, cantidad de asientos y responsable. Vincula factura o PDF del portal de volumen."
        }
      </p>

      <Callout title="Caso real: PYME Manizales">
        {
          "Auditoría interna detectó 12 instalaciones de AutoCAD sin licencia flotante. Migraron a plan por suscripción con 5 asientos nominales y documentaron en GLPI — evitaron exposición legal y unificaron versiones."
        }
      </Callout>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Malas prácticas en el mundo real"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Instalar crack de Office en PCs de recepción:"}</strong>
          {" malware + multa → Microsoft 365 o LibreOffice corporativo."}
        </li>
        <li>
          <strong>{"Asumir que «freeware» = uso ilimitado en empresa:"}</strong>
          {" violación EULA → leer términos o comprar licencia comercial."}
        </li>
        <li>
          <strong>{"Una licencia retail en 30 equipos:"}</strong>
          {" incumplimiento → volumen o suscripción por usuario/dispositivo."}
        </li>
        <li>
          <strong>{"No renovar dominio de licencia antivirus:"}</strong>
          {" PCs sin definiciones → alerta 90 días antes en inventario."}
        </li>
        <li>
          <strong>{"Mezclar GPL con código propietario cerrado sin asesoría:"}</strong>
          {" conflicto legal → política de uso de open source en la empresa."}
        </li>
      </ul>
    </section>
  );
}
