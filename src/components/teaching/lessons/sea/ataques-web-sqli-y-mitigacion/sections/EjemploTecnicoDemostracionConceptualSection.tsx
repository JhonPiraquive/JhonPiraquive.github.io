import { CodeFiddle } from "@/components/teaching/CodeFiddle";

export function EjemploTecnicoDemostracionConceptualSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Ejemplo técnico: SQLi vulnerable vs parametrizado"}
      </h2>
      <p className="my-4">
        {
          "Contraste conceptual: la concatenación permite inyectar lógica SQL. La versión parametrizada separa consulta y datos. El usuario ve un mensaje genérico; el log interno guarda el detalle."
        }
      </p>
      <CodeFiddle
        language="sql"
        title="Ataque conceptual (no usar en producción)"
        code={`-- Vulnerable: el input rompe la consulta
SELECT * FROM users WHERE name = ''; -- input: ' OR '1'='1
-- Resultado: puede devolver demasiadas filas`}
      />
      <CodeFiddle
        language="php"
        title="PHP: concatenación vs prepared statement"
        code={`<?php
// MAL: concatenación
$sql = "SELECT * FROM users WHERE name = '" . $_GET['q'] . "'";

// BIEN: parámetros
$stmt = $pdo->prepare('SELECT * FROM users WHERE name = :name');
$stmt->execute(['name' => $_GET['q']]);

// Usuario: mensaje genérico; log: detalle técnico
error_log('[req_13f5c1] sqli_attempt blocked');
echo 'No se encontraron resultados.';
`}
      />
      <CodeFiddle
        language="json"
        title="Evento de seguridad (log interno)"
        code={`{
  "event": "sqli_attempt",
  "user_id": null,
  "ip": "198.51.100.10",
  "endpoint": "/buscar",
  "payload_truncado": "' OR '1'='1",
  "resultado": "blocked",
  "request_id": "req_13f5c1"
}`}
      />
    </section>
  );
}
