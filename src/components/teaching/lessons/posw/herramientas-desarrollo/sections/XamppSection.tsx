import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function XamppSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"XAMPP: Apache, MariaDB y PHP en local"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "XAMPP: paquete cross-platform — X (cross-platform), Apache, MariaDB, PHP, Perl."
          }
        </li>
        <li>{"Apache: servidor HTTP en puertos 80/443; sirve archivos desde htdocs/."}</li>
        <li>{"MariaDB/MySQL: motor relacional en puerto 3306."}</li>
        <li>{"PHP: lenguaje interpretado por Apache; genera HTML dinámico."}</li>
        <li>{"phpMyAdmin: interfaz web en /phpmyadmin para administrar la BD."}</li>
        <li>{"Document root: carpeta que Apache expone (htdocs/mi-proyecto/index.php)."}</li>
      </ul>
      <MermaidDiagram
        chart={`flowchart TB
  BR[Navegador] -->|HTTP :80| AP[Apache]
  AP --> PHP[PHP en htdocs]
  PHP --> DB[(MariaDB :3306)]
  BR --> PMA[phpMyAdmin]
  PMA --> DB`}
      />
      <CodeFiddle
        language="bash"
        title="Instalar y arrancar XAMPP (Linux)"
        code={`chmod +x xampp-linux-x64-*.run
sudo ./xampp-linux-x64-*.run
sudo /opt/lampp/lampp start

# Verificar Apache y MariaDB
curl -I http://localhost`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Estructura de carpetas clave"}</h3>
      <div className="my-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr>
              <th className="border-b-2 border-[var(--color-secondary)] bg-[var(--color-neutral-light)] px-4 py-3 text-left font-semibold">
                {"Ruta"}
              </th>
              <th className="border-b-2 border-[var(--color-secondary)] bg-[var(--color-neutral-light)] px-4 py-3 text-left font-semibold">
                {"Propósito"}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"/opt/lampp/htdocs/"}
              </td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"Document root — aquí van tus .php"}
              </td>
            </tr>
            <tr className="bg-[var(--color-neutral-light)]/50">
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"/opt/lampp/mysql/data/"}
              </td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"Datos de MariaDB"}
              </td>
            </tr>
            <tr className="bg-white">
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"http://localhost/phpmyadmin"}
              </td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"Admin web de la BD"}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Malas prácticas en el mundo real"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Editar archivos fuera de htdocs: Apache no los sirve."}</li>
        <li>{"Olvidar lampp start: MySQL o la página no responden."}</li>
        <li>{"Usar XAMPP en producción sin hardening."}</li>
      </ul>
    </section>
  );
}
