import { CodeBlock } from "@/components/teaching/CodeBlock";

export function EjemploTecnicoMatrizSimpleSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Ejemplo técnico (matriz simple)"}</h2>
      <p className="my-4">{"Debe incluir una tabla (texto) con al menos 6 riesgos, cada uno con: activo, amenaza, vulnerabilidad, impacto (B/M/A), probabilidad (B/M/A), nivel (B/M/A), decisión (mitigar/aceptar/etc.) y control propuesto."}</p>
      <p className="my-4">{"Riesgo"}</p>
      <p className="my-4">{"Activo"}</p>
      <p className="my-4">{"Amenaza"}</p>
      <p className="my-4">{"Vulnerabilidad"}</p>
      <p className="my-4">{"Impacto"}</p>
      <p className="my-4">{"Probabilidad"}</p>
      <p className="my-4">{"Nivel"}</p>
      <p className="my-4">{"Decisión"}</p>
      <p className="my-4">{"Control propuesto"}</p>
      <p className="my-4">{"SQLi en buscador"}</p>
      <p className="my-4">{"Datos de usuarios"}</p>
      <p className="my-4">{"Extracción/alteración"}</p>
      <p className="my-4">{"SQL concatenado"}</p>
      <p className="my-4">{"A"}</p>
      <p className="my-4">{"M"}</p>
      <p className="my-4">{"A"}</p>
      <p className="my-4">{"Mitigar"}</p>
      <p className="my-4">{"Parametrización + mínimo privilegio"}</p>
      <p className="my-4">{"MITM en red pública"}</p>
      <p className="my-4">{"Credenciales/sesión"}</p>
      <p className="my-4">{"Interceptación"}</p>
      <p className="my-4">{"No forzar HTTPS"}</p>
      <p className="my-4">{"A"}</p>
      <p className="my-4">{"M"}</p>
      <p className="my-4">{"A"}</p>
      <p className="my-4">{"Mitigar"}</p>
      <p className="my-4">{"HTTPS + HSTS + cookies Secure"}</p>
      <p className="my-4">{"Phishing a soporte"}</p>
      <p className="my-4">{"Cuentas admin"}</p>
      <p className="my-4">{"Suplantación"}</p>
      <p className="my-4">{"Falta de verificación"}</p>
      <p className="my-4">{"A"}</p>
      <p className="my-4">{"M"}</p>
      <p className="my-4">{"A"}</p>
      <p className="my-4">{"Mitigar"}</p>
      <p className="my-4">{"Proceso out-of-band + 2FA"}</p>
      <p className="my-4">{"Sesión eterna"}</p>
      <p className="my-4">{"Privacidad"}</p>
      <p className="my-4">{"Acceso no autorizado"}</p>
      <p className="my-4">{"Tokens sin exp"}</p>
      <p className="my-4">{"A"}</p>
      <p className="my-4">{"M"}</p>
      <p className="my-4">{"A"}</p>
      <p className="my-4">{"Mitigar"}</p>
      <p className="my-4">{"Expiración + rotación + logout"}</p>
      <p className="my-4">{"Errores con stack trace"}</p>
      <p className="my-4">{"Infraestructura"}</p>
      <p className="my-4">{"Reconocimiento"}</p>
      <p className="my-4">{"Manejo de errores débil"}</p>
      <p className="my-4">{"M"}</p>
      <p className="my-4">{"M"}</p>
      <p className="my-4">{"M"}</p>
      <p className="my-4">{"Mitigar"}</p>
      <p className="my-4">{"Error handler + mensajes seguros"}</p>
      <p className="my-4">{"Secretos en repo"}</p>
      <p className="my-4">{"Claves y tokens"}</p>
      <p className="my-4">{"Exfiltración"}</p>
      <p className="my-4">{"Config con secretos"}</p>
      <p className="my-4">{"A"}</p>
      <p className="my-4">{"B"}</p>
      <p className="my-4">{"M"}</p>
      <p className="my-4">{"Mitigar"}</p>
      <p className="my-4">{"Secret manager + rotación"}</p>
      <CodeBlock className="language-json">{`{
  &quot;risk_id&quot;: &quot;R-001&quot;,
  &quot;asset&quot;: &quot;user_data&quot;,
  &quot;threat&quot;: &quot;data_exfiltration&quot;,
  &quot;vulnerability&quot;: &quot;sql_concatenation_in_search&quot;,
  &quot;impact&quot;: &quot;A&quot;,
  &quot;probability&quot;: &quot;M&quot;,
  &quot;level&quot;: &quot;A&quot;,
  &quot;decision&quot;: &quot;mitigate&quot;,
  &quot;control&quot;: &quot;prepared_statements_and_least_privilege&quot;
}`}</CodeBlock>
    </section>
  );
}
