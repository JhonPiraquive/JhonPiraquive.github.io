import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { StepReveal } from "@/components/teaching/StepReveal";

export function HelloPhpSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Primer proyecto PHP en htdocs"}
      </h2>
      <CodeFiddle
        language="php"
        title="Ejemplo en htdocs"
        code={`<?php
// /opt/lampp/htdocs/hola/index.php
$nombre = $_GET['nombre'] ?? 'Mundo';
echo "<h1>Hola, {$nombre}!</h1>";
echo "<p>Servidor: " . $_SERVER['SERVER_SOFTWARE'] . "</p>";
?>`}
      />
      <p className="my-4">
        {"URL de prueba: "}
        <code>{"http://localhost/hola/?nombre=Angular"}</code>
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Flujo request/response en XAMPP"}</h3>
      <ol className="my-4 list-decimal pl-6">
        <li>{"Navegador solicita GET /hola/?nombre=Angular."}</li>
        <li>{"Apache recibe la petición y delega a PHP."}</li>
        <li>{"PHP lee $_GET, genera HTML."}</li>
        <li>{"Apache devuelve la respuesta al cliente."}</li>
      </ol>
      <StepReveal
        title="Petición PHP en XAMPP"
        steps={[
          {
            title: "1. Request HTTP",
            content: "El navegador envía GET /hola/?nombre=Angular al puerto 80.",
          },
          {
            title: "2. Apache + PHP",
            content: "Apache ejecuta index.php y PHP procesa $_GET.",
          },
          {
            title: "3. Respuesta HTML",
            content: "Se genera HTML dinámico con el nombre recibido.",
          },
          {
            title: "4. Renderizado",
            content: "El navegador muestra Hola, Angular!",
          },
        ]}
      />
    </section>
  );
}
