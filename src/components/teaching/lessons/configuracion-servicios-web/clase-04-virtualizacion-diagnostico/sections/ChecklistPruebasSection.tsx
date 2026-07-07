import { CompareTable } from "@/components/teaching/CompareTable";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function ChecklistPruebasSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Checklist de pruebas integradas"}
      </h2>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">
        {
          "Un checklist de pruebas integradas es la lista ordenada de comprobaciones que validan que dominio, DNS, hosting y correo funcionan juntos antes de dar por cerrada una configuración."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Para qué sirve / Por qué importa"}</h3>
      <p className="my-4">
        {
          "Sin checklist, es fácil declarar «terminado» con DNS correcto en el panel pero resolución rota en el cliente, o sitio web OK pero MX sin probar. Las pruebas integradas detectan desalineación entre capas."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Checklist recomendado"}</h3>
      <CompareTable
        headers={["#", "Prueba", "Comando / acción", "Resultado esperado"]}
        rows={[
          ["1", "Resolución A de www", "dig www.empresa.co A +short", "IP del hosting"],
          ["2", "Resolución en el PC", "ping www.empresa.co o dig sin @", "Misma IP que paso 1"],
          ["3", "Registro MX", "dig empresa.co MX +short", "mail.empresa.co con prioridad"],
          ["4", "Registro A de mail", "dig mail.empresa.co A +short", "IP del servidor correo"],
          ["5", "CNAME alias", "dig portal.empresa.co CNAME", "Apunta a www"],
          ["6", "Acceso web", "curl -sI https://www.empresa.co | head -1", "HTTP/2 200 o HTTP/1.1 200"],
          ["7", "Contenido sitio", "Navegador — título y contacto visibles", "Empresa, misión, contacto"],
          ["8", "Buzones creados", "Panel correo — gerencia, ventas, soporte", "≥ 3 cuentas documentadas"],
          ["9", "Envío/recepción", "ventas@ → soporte@", "Mensaje recibido en bandeja"],
          ["10", "Análisis escrito", "Documento de interacción capas", "Dominio–DNS–hosting–correo explicado"],
        ]}
      />

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Comandos de verificación"}</h3>
      <CodeFiddle
        language="bash"
        title="Script de comprobación rápida"
        code={`DOM=innovatech.co

echo "=== DNS A www ==="
dig www.$DOM A +short

echo "=== DNS MX ==="
dig $DOM MX +short

echo "=== DNS CNAME portal ==="
dig portal.$DOM CNAME +short

echo "=== HTTP ==="
curl -sI "https://www.$DOM/" | head -3`}
      />

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Señales de buen y mal uso"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Buen uso: guardar salidas dig/curl como evidencia; probar desde red distinta al servidor."}</li>
        <li>{"Mal uso: solo captura del panel sin verificar resolución del cliente; omitir prueba de correo entre buzones."}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Malas prácticas en el mundo real"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Checklist en papel nunca actualizado:"}</strong>
          {" Paso de verificar MX omitido en 5 migraciones seguidas. Corrección: checklist versionado en wiki/Git."}
        </li>
        <li>
          <strong>{"Marcar todo OK sin prueba real:"}</strong>
          {" Incumplimiento en auditoría cliente bancario. Corrección: evidencia screenshot o output de comando por ítem."}
        </li>
      </ul>


      <PracticeExercise
        prompt="¿Por qué el paso 2 (resolución en el PC) es necesario aunque el paso 1 (dig al autoritativo) ya devolvió la IP correcta?"
        hints={["¿Usa el navegador el mismo resolver?", "caché, hosts"]}
        expectedKeywords={["cliente", "resolver", "sistema", "navegador"]}
        successMessage="Correcto. El autoritativo puede estar bien mientras el PC usa otro resolver o no tiene hosts/DNS configurado."
      />
    </section>
  );
}
