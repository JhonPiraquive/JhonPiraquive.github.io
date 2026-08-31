import { Callout } from "@/components/teaching/Callout";

export function ArchivosPlanosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Etapa 1 — Archivos planos (años 50 – inicio 60)"}
      </h2>

      <p className="my-4">
        {
          "Antes de los gestores de bases de datos, las organizaciones guardaban información en archivos planos: cintas magnéticas y discos tempranos. Cada aplicación abría y escribía sus propios archivos. El procesamiento era casi siempre por lotes (batch): se leía la cinta de punta a punta, se actualizaba un maestro y se generaba un reporte. No había un motor central que garantizara integridad ni concurrencia."
        }
      </p>

      <p className="my-4">
        {
          "El problema que esta etapa deja ver es claro. El mismo cliente o producto vivía en varias copias; al actualizar una, las otras quedaban viejas — duplicidad e inconsistencia. Además, si cambiaba el formato del archivo, había que reescribir los programas: dependencia fuerte del layout físico. Nómina, inventario y facturación podían tener cada una “su” versión de la verdad."
        }
      </p>

      <p className="my-4">
        {
          "Ese dolor explica por qué nacieron las bases de datos. Y el puente al presente es directo: cuando una ferretería o academia hoy usa varias hojas Excel o Google Sheets como “sistema” compartido, reproduce el mismo patrón pre-BD — ediciones concurrentes, teléfonos viejos, stock que no cuadra. No es un museo: es el mismo relato con otra interfaz."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Un ejemplo que cierra el arco"}</h3>
      <p className="my-4">
        {
          "Imagina una cooperativa de ahorro en los años 60 —o la ferretería “El Tornillo” en Bogotá hoy—. Contabilidad tiene clientes.xls, ventas tiene clientes_ventas.csv y cartera otro archivo. El cliente cambia de teléfono: solo se actualiza en ventas; los cobros salen al número viejo. Tres fuentes de verdad, ninguna confiable. Migrar a un SGBD con una sola fuente de verdad es, en el relato, el siguiente capítulo."
        }
      </p>

      <Callout variant="callout-info" title="Hilo hacia la siguiente etapa">
        {
          "Los archivos planos bastaban para lotes nocturnos, pero no para relacionar datos sin reescribir cintas enteras. La industria buscó acceso más eficiente: nació la era navegacional (IMS y CODASYL)."
        }
      </Callout>
    </section>
  );
}
