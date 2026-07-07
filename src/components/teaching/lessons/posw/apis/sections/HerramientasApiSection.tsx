import { CodeChallenge } from "@/components/teaching/CodeChallenge";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";

export function HerramientasApiSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Herramientas para probar APIs"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "GUI: Postman, Insomnia, Swagger UI, Thunder Client, Hoppscotch — diseño visual, colecciones, documentación."
          }
        </li>
        <li>{"CLI: curl, HTTPie — pruebas rápidas, scripting, CI/CD."}</li>
        <li>{"Testing automatizado: REST Assured (Java) y scripts curl en pipelines."}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Comparativa de herramientas"}</h3>
      <CompareTable
        headers={["Herramienta", "Tipo", "Caso de uso típico"]}
        rows={[
          ["Postman", "GUI", "Colecciones, entornos, pruebas manuales en equipo"],
          ["curl", "CLI", "Pruebas rápidas, scripts, integración CI/CD"],
          ["Swagger UI", "GUI (docs)", "Explorar contrato OpenAPI interactivo"],
          ["Thunder Client", "GUI (VS Code)", "Probar endpoints sin salir del editor"],
        ]}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Pruebas con curl"}</h3>
      <CodeFiddle
        language="bash"
        title="Pruebas con curl"
        code={`# GET básico
curl https://api.ejemplo.com/productos

# GET con header de autenticación
curl -H "Authorization: Bearer TOKEN" \\
     https://api.ejemplo.com/usuarios/me

# POST con body JSON
curl -X POST https://api.ejemplo.com/productos \\
     -H "Content-Type: application/json" \\
     -d '{"nombre": "Teclado", "precio": 150000}'

# PATCH
curl -X PATCH https://api.ejemplo.com/productos/42 \\
     -H "Content-Type: application/json" \\
     -d '{"precio": 130000}'

# DELETE
curl -X DELETE https://api.ejemplo.com/productos/42

# Ver headers de respuesta
curl -I https://api.ejemplo.com/productos`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Consumo desde JavaScript"}</h3>
      <CodeFiddle
        language="javascript"
        title="Consumo desde JavaScript"
        code={`async function listarProductos(page = 1, limit = 20) {
  const res = await fetch(
    \`https://api.ejemplo.com/api/v1/productos?page=\${page}&limit=\${limit}\`,
    { headers: { Accept: "application/json" } }
  );
  if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
  return res.json();
}`}
      />
      <CodeChallenge
        title="Ordena el flujo de prueba de un endpoint nuevo"
        template={`1. {{blank1}} (definir URI y método)
2. {{blank2}} (probar con curl)
3. {{blank3}} (documentar en OpenAPI)
4. {{blank4}} (crear colección en Postman)
5. {{blank5}} (agregar test en CI)`}
        blanks={[
          { id: "blank1", answer: "definir URI y método HTTP", placeholder: "paso a" },
          { id: "blank2", answer: "probar con curl", placeholder: "paso b" },
          { id: "blank3", answer: "documentar en OpenAPI", placeholder: "paso c" },
          { id: "blank4", answer: "crear colección en Postman", placeholder: "paso d" },
          { id: "blank5", answer: "agregar test automatizado en CI", placeholder: "paso e" },
        ]}
      />
    </section>
  );
}
