import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function ProteccionDeDatosIdeaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Protección de datos: idea central"}</h2>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">
        {
          "Proteger datos es reducir exposición en todo el ciclo de vida: recolectar lo mínimo necesario, almacenar con controles de acceso, transmitir cifrado y eliminar cuando ya no se requiere."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Para qué sirve / Por qué importa"}</h3>
      <p className="my-4">
        {
          "En aplicaciones web, cookies y tokens JWT son la puerta principal de sesión. Si un atacante roba la sesión, «se convierte» en el usuario sin conocer la contraseña. Leyes como GDPR y regulaciones locales exigen minimización y notificación de brechas."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Cómo funciona (capas)"}</h3>
      <p className="my-4">
        {
          "En tránsito: HTTPS + flags seguros en cookies (Secure, HttpOnly, SameSite). En reposo: cifrado de BD sensibles. En uso: permisos mínimos y expiración de sesión. JWT: firmar, expirar corto, no guardar secretos en payload."
        }
      </p>
      <MermaidDiagram
        title="Capas de protección de datos"
        description="Flujo de capas: tránsito, reposo y uso"
        chart={`flowchart TB
  Recolectar[Recolectar minimo] --> Transito[En transito: HTTPS]
  Transito --> Reposo[En reposo: cifrado y ACL]
  Reposo --> Uso[En uso: permisos y sesion corta]
  Uso --> Eliminar[Eliminar cuando no se necesita]
`}
      />

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Malas prácticas en el mundo real"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Cookie de sesión sin HttpOnly:"}</strong>
          {" XSS robó document.cookie; atacante secuestró cuentas. Corrección: HttpOnly + mitigar XSS."}
        </li>
        <li>
          <strong>{"JWT en localStorage:"}</strong>
          {" Token accesible por cualquier script malicioso en la página. Corrección: cookie HttpOnly o memoria con refresh corto."}
        </li>
        <li>
          <strong>{"Sesión sin expiración:"}</strong>
          {" Token robado funcionó 6 meses. Corrección: exp corta + refresh rotativo + revocación en logout."}
        </li>
        <li>
          <strong>{"Recolectar datos «por si acaso»:"}</strong>
          {" Formulario pedía documento completo sin necesidad; brecha expuso 200.000 registros extra. Corrección: minimización de datos."}
        </li>
      </ul>
    </section>
  );
}
