import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function NavegadoresWebSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Navegadores web: motores y DevTools"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "Navegador web: aplicación cliente que interpreta HTML, CSS y JavaScript, gestiona sesiones y presenta la interfaz."
          }
        </li>
        <li>
          {"Motor de renderizado: construye el DOM, aplica estilos y compone capas (Blink, Gecko, WebKit)."}
        </li>
        <li>{"Motor de red: DNS, HTTP, TLS y caché HTTP."}</li>
        <li>{"DevTools: Red, Consola y Almacenamiento para aislar fallos de servidor, red, caché o extensiones."}</li>
      </ul>
      <MermaidDiagram
        title="Mapa mental del navegador web"
        chart={`mindmap
  root((Navegador web))
    Interfaz
      Barra de direcciones
      Pestañas
    Motor de red
      DNS
      HTTP y TLS
      Caché
    Renderizado
      DOM
      Estilos
      Capas
    JavaScript
      Ejecución de scripts
    DevTools
      Red
      Consola
      Almacenamiento`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">
        {
          "Un navegador web es una aplicación cliente que interpreta documentos hipertexto (HTML, CSS, JavaScript), gestiona sesiones con servidores remotos y presenta la interfaz al usuario. Es el punto de entrada más común al modelo cliente-servidor en la web."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Para qué sirve / Por qué importa"}</h3>
      <p className="my-4">
        {
          "Sin navegador (o cliente equivalente), el usuario no puede consumir sitios ni APIs desde una interfaz gráfica. Para un administrador de servicios web, entender el navegador permite diagnosticar si un fallo es del servidor, de la red, de la caché local o de extensiones que alteran el tráfico."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Cómo funciona"}</h3>
      <ol className="my-4 list-decimal pl-6">
        <li>{"El usuario escribe una URL o hace clic en un enlace."}</li>
        <li>
          {
            "El navegador resuelve el dominio (DNS), abre conexión TCP/TLS y envía peticiones HTTP(S)."
          }
        </li>
        <li>
          {
            "Recibe HTML, CSS, JS, imágenes y otros recursos; el motor de renderizado construye el DOM, aplica estilos y ejecuta scripts."
          }
        </li>
        <li>
          {"Almacena cookies, caché y datos locales según políticas de sitio y configuración del usuario."}
        </li>
      </ol>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Estructura / Composición"}</h3>
      <p className="my-4">{"Un navegador moderno se organiza en capas cooperativas:"}</p>
      <table className="my-4 w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-[var(--color-neutral-mid)]">
            <th className="py-2 pr-4 text-left font-semibold">{"Componente"}</th>
            <th className="py-2 text-left font-semibold">{"Función"}</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4 font-semibold">{"UI"}</td>
            <td className="py-2">{"Barra de direcciones, pestañas, favoritos"}</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4 font-semibold">{"Motor de red"}</td>
            <td className="py-2">{"DNS, HTTP, TLS, caché HTTP"}</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4 font-semibold">{"Motor de renderizado"}</td>
            <td className="py-2">{"Layout, pintura, composición de capas"}</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4 font-semibold">{"Motor JavaScript"}</td>
            <td className="py-2">{"Ejecuta scripts (V8, SpiderMonkey, JavaScriptCore)"}</td>
          </tr>
          <tr>
            <td className="py-2 pr-4 font-semibold">{"Almacenamiento"}</td>
            <td className="py-2">{"Cookies, localStorage, IndexedDB, Service Workers"}</td>
          </tr>
        </tbody>
      </table>
      <p className="my-4">
        {
          "Cada capa puede ser el origen de un problema distinto: la Red muestra si el servidor respondió 404; la Consola revela errores de JavaScript; Almacenamiento expone cookies o caché obsoleta."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Tipos / Variantes (navegadores y motores)"}</h3>
      <CompareTable
        headers={["Navegador", "Motor renderizado", "Motor JS", "Notas"]}
        rows={[
          ["Chrome", "Blink", "V8", "Mayor cuota de mercado; DevTools de referencia"],
          ["Edge", "Blink", "V8", "Sucesor de Edge Legacy (EdgeHTML); integración Windows"],
          ["Opera", "Blink", "V8", "Basado en Chromium; VPN y ahorro de datos integrados"],
          ["Brave", "Blink", "V8", "Chromium con bloqueo de rastreadores por defecto"],
          ["Firefox", "Gecko", "SpiderMonkey", "Motor independiente; fuerte en privacidad y estándares abiertos"],
          ["Safari", "WebKit", "JavaScriptCore", "Predeterminado en macOS/iOS; motor base de Blink"],
        ]}
      />
      <p className="my-4 font-semibold">{"Motores clave:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>{"Blink — fork de WebKit mantenido por Google; usado por Chrome, Edge, Opera, Brave."}</li>
        <li>{"Gecko — Mozilla; motor propio de Firefox."}</li>
        <li>{"WebKit — Apple; base histórica de Safari y ancestro de Blink."}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Ventajas y desventajas (por enfoque)"}</h3>
      <table className="my-4 w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-[var(--color-neutral-mid)]">
            <th className="py-2 pr-4 text-left font-semibold">{"Enfoque"}</th>
            <th className="py-2 pr-4 text-left font-semibold">{"Ventaja"}</th>
            <th className="py-2 text-left font-semibold">{"Desventaja"}</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4">{"Chromium/Blink (Chrome, Edge, Brave)"}</td>
            <td className="py-2 pr-4">{"Compatibilidad amplia con sitios modernos; DevTools potentes"}</td>
            <td className="py-2">{"Monocultivo: muchos sitios se prueban solo en Chromium"}</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4">{"Firefox/Gecko"}</td>
            <td className="py-2 pr-4">{"Independencia del ecosistema Google; buen soporte de estándares"}</td>
            <td className="py-2">{"Algunos sitios corporativos optimizan solo para Chrome"}</td>
          </tr>
          <tr>
            <td className="py-2 pr-4">{"Safari/WebKit"}</td>
            <td className="py-2 pr-4">{"Rendimiento y batería en Apple; políticas estrictas de privacidad"}</td>
            <td className="py-2">{"En Windows/Linux no está disponible; diferencias en APIs web"}</td>
          </tr>
        </tbody>
      </table>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Ejemplo concreto"}</h3>
      <p className="my-4">
        {
          "Un desarrollador abre DevTools → pestaña Red, recarga https://tienda.ejemplo.co y ve: resolución DNS, TLS, GET / (200), luego 40+ peticiones de assets. Si una imagen devuelve 404, el problema es del servidor o la ruta, no del motor del navegador."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Señales de buen y mal uso"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "Buen uso: limpiar caché solo al diagnosticar; revisar Red/Consola antes de culpar al backend; probar en un segundo navegador sin extensiones."
          }
        </li>
        <li>
          {
            "Mal uso: culpar al servidor sin revisar caché del navegador; extensiones de bloqueo de ads/scripts que rompen sitios legítimos; desactivar JavaScript globalmente y esperar que SPAs funcionen."
          }
        </li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Malas prácticas en el mundo real"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Probar solo en Chrome:"}</strong>
          {" Sitio en WordPress se veía roto en Safari iOS (flexbox viejo); 40 % tráfico móvil Colombia afectado. Corrección: probar Chrome, Firefox y Safari móvil antes de publicar."}
        </li>
        <li>
          <strong>{"Extensiones ad-block en soporte:"}</strong>
          {" Cliente «no ve el chat»; soporte tenía uBlock bloqueando script de terceros. Corrección: ventana privada sin extensiones para reproducir incidencias."}
        </li>
        <li>
          <strong>{"Ignorar caché del navegador:"}</strong>
          {" Deploy corregido pero usuarios reportaban versión antigua; equipo re-desplegó innecesariamente. Corrección: hard refresh y verificar Cache-Control en servidor."}
        </li>
        <li>
          <strong>{"User-Agent bloqueado en WAF:"}</strong>
          {" Bot legítimo de monitoreo bloqueado; alertas falsas de caída. Corrección: allowlist de herramientas de uptime en reglas WAF."}
        </li>
      </ul>

      <p className="my-4">
        {
          "Configuración relevante: cookies (sesión, preferencias), caché (acelera recargas pero oculta cambios recientes), privacidad (terceros, rastreadores), DevTools (Red, Consola, Almacenamiento)."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Práctica guiada"}</h3>
      <PracticeExercise
        prompt="Enumera al menos cuatro factores que pueden ralentizar la carga de un sitio en el navegador (motor, extensiones, caché, red, tamaño de assets). ¿Cómo los aislarías uno a uno?"
        hints={[
          "Ventana privada sin extensiones",
          "Pestaña Red en DevTools",
          "Recarga forzada Ctrl+Shift+R",
          "Probar otro navegador",
        ]}
        expectedKeywords={["caché", "extensiones", "red", "DevTools"]}
        successMessage="Correcto. Aislar variables (sin extensiones, sin caché, otro navegador) evita culpar al servidor sin evidencia."
      />
    </section>
  );
}
