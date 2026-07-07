import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";

export function ConsolaWindowsSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Consola Windows: CMD y PowerShell"}
      </h2>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">
        {
          "Windows ofrece CMD (heredado) y PowerShell (moderno, orientado a objetos) como consolas de texto. En soporte de escritorio corporativo siguen siendo necesarias para diagnóstico de red, permisos y automatización."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Equivalentes Linux → Windows"}</h3>
      <CompareTable
        headers={["Linux", "CMD", "PowerShell"]}
        rows={[
          ["ls", "dir", "Get-ChildItem / ls"],
          ["cd", "cd", "Set-Location / cd"],
          ["mkdir", "mkdir", "New-Item -ItemType Directory"],
          ["nano / vi", "notepad", "notepad / vim si está instalado"],
          ["rm", "del", "Remove-Item"],
          ["rmdir", "rmdir", "Remove-Item -Recurse (carpeta)"],
          ["sudo", "Run as Administrator", "Start-Process -Verb RunAs"],
          ["su", "runas", "Enter-PSSession"],
          ["exit", "exit", "exit"],
        ]}
      />

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Sesión de ejemplo (CMD)"}</h3>
      <CodeFiddle
        language="batch"
        title="Navegación en CMD"
        code={`REM Ver unidad y ruta actual
cd

REM Listar archivos
dir

REM Crear carpeta y entrar
mkdir Informe2026
cd Informe2026

REM Crear archivo vacío y abrir con Notepad
type nul > resumen.txt
notepad resumen.txt

REM Volver atrás
cd ..

REM Eliminar archivo
del Informe2026\\resumen.txt

REM Eliminar carpeta vacía
rmdir Informe2026

REM Salir
exit`}
      />

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Sesión de ejemplo (PowerShell)"}</h3>
      <CodeFiddle
        language="powershell"
        title="Navegación en PowerShell"
        code={`# Ruta actual
Get-Location

# Listar
Get-ChildItem

# Crear y entrar
New-Item -ItemType Directory -Name Informe2026
Set-Location Informe2026

# Editar (abre Notepad)
notepad resumen.txt

# Subir un nivel
Set-Location ..

# Eliminar archivo y carpeta
Remove-Item .\\Informe2026\\resumen.txt
Remove-Item .\\Informe2026

exit`}
      />

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Malas prácticas en el mundo real"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Desactivar UAC para «evitar clics» en soporte de escritorio."}</li>
        <li>{"Ejecutar PowerShell como admin para abrir Notepad."}</li>
        <li>{"Usar del /f /s /q en System32 copiado de un foro."}</li>
        <li>{"Ignorar PowerShell y automatizar todo con .bat frágiles sin manejo de errores."}</li>
        <li>{"Dejar ExecutionPolicy Unrestricted en todos los equipos por comodidad."}</li>
      </ul>
    </section>
  );
}
