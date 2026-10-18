export function AutoevaluacionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Autoevaluación y recursos"}</h2>
      <p className="my-4">{"El estudiante puede pasar a la siguiente clase cuando cumple cada punto:"}</p>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>{"Comparar navegadores y usar DevTools para diagnosticar un problema."}</li>
        <li>{"Explicar IPv4 e IPv6 y distinguir IP pública, privada, fija y dinámica."}</li>
        <li>{"Describir la estructura de un dominio y el flujo DNS paso a paso."}</li>
        <li>{"Configurar registros DNS A, AAAA, CNAME, MX, TXT y NS."}</li>
        <li>{"Comparar tipos de hosting y describir cómo se publica un sitio."}</li>
        <li>{"Leer logs de Nginx y revisar permisos de archivos."}</li>
      </ul>
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">{"Recursos oficiales"}</h3>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>
          <a href="https://developer.mozilla.org/es/docs/Learn/Common_questions/Web_mechanics/What_is_a_domain_name" target="_blank" rel="noreferrer">MDN: qué es un nombre de dominio</a>{": conceptos básicos."}
        </li>
        <li>
          <a href="https://developer.chrome.com/docs/devtools" target="_blank" rel="noreferrer">Chrome DevTools</a>{": documentación oficial."}
        </li>
        <li>
          <a href="https://nginx.org/en/docs/" target="_blank" rel="noreferrer">Documentación de Nginx</a>{": guías oficiales de configuración."}
        </li>
      </ul>
    </section>
  );
}
