import { Callout } from "@/components/teaching/Callout";
import { StepReveal } from "@/components/teaching/StepReveal";

export function HistoriaBreveYVideoSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Historia de JavaScript"}</h2>
      <p className="my-4">
        {
          "JavaScript nació en 1995 en Netscape, de la mano de Brendan Eich, con el nombre inicial “Mocha” y luego “LiveScript”. Se estandarizó bajo el nombre ECMAScript (1997). La historia incluye la “guerra de los navegadores”, la evolución por versiones ES (ES5, ES6/ES2015, ES2024…) y el auge de Node.js (2009) y los frameworks modernos."
        }
      </p>
      <StepReveal
        title="Línea temporal de JavaScript"
        steps={[
          {
            title: "1995 — Nacimiento en Netscape",
            content:
              "Brendan Eich crea Mocha → LiveScript → JavaScript en apenas diez días para dar interactividad al navegador Netscape.",
          },
          {
            title: "1997 — ECMAScript",
            content:
              "El lenguaje se estandariza bajo el nombre ECMAScript. “JavaScript” pasa a ser la implementación práctica en motores y navegadores.",
          },
          {
            title: "2000s — Guerra de navegadores y ES3/ES5",
            content:
              "Competencia entre IE, Firefox y otros motores. ES3 (1999) y ES5 (2009) consolidan el lenguaje en la web.",
          },
          {
            title: "2015 — ES6 (ES2015)",
            content:
              "Actualización mayor: let/const, clases, módulos, arrow functions. Marca el inicio de versiones anuales del estándar.",
          },
          {
            title: "2009–presente — Node.js y frameworks",
            content:
              "Node.js lleva JS al servidor. React, Vue, Angular y React Native expanden el ecosistema más allá del navegador.",
          },
        ]}
      />
      <blockquote className="my-6 border-l-4 border-[var(--color-secondary)] pl-4 italic">
        <p>
          <strong>{"Vídeo sugerido:"}</strong>{" "}
          {
            "documental o charla breve sobre la historia de JavaScript (1995–presente). El estudiante puede buscar “historia JavaScript Brendan Eich” o consultar MDN — Introducción a JavaScript."
          }
        </p>
      </blockquote>
      <Callout title="Caso real: checkout sin JavaScript">
        {
          "Un e-commerce despliega una actualización y el archivo checkout.js queda con ruta incorrecta en <script src=\"...\">. La página se ve bien (HTML y CSS cargan), pero el carrito no actualiza totales y el botón «Pagar» no responde. En DevTools → Network y Consola verifica si el script devuelve 404 o hay errores. Refuerza: estructura (HTML) ≠ comportamiento (JS)."
        }
      </Callout>
    </section>
  );
}
