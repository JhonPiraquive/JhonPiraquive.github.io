import { CompareTable } from "@/components/teaching/CompareTable";

export function CaracteristicasPrincipalesSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Características principales del lenguaje"}
      </h2>
      <p className="my-4">
        {
          "JavaScript presenta rasgos que lo distinguen de lenguajes compilados clásicos como C o Java:"
        }
      </p>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "Interpretado: el motor (navegador u otro entorno) lee y ejecuta el código sin un paso de compilación obligatorio; herramientas modernas pueden optimizar o empaquetar el código, pero no es requisito para empezar."
          }
        </li>
        <li>{"Tipado dinámico: el tipo de una variable puede cambiar según el valor que guardes."}</li>
        <li>
          {
            "Multiparadigma: puedes programar con funciones, objetos y, desde ES6, también con class para orientación a objetos."
          }
        </li>
        <li>
          {
            "Orientado a eventos en el navegador: mucho código “reacciona” a eventos (clic, tecla, carga de página)."
          }
        </li>
        <li>
          {
            "Modelo de un solo hilo en el navegador para tu página; la asincronía (tratada más adelante en el curso) organiza tareas sin bloquear la interfaz."
          }
        </li>
      </ul>
      <CompareTable
        headers={["Capa", "Responsabilidad", "Ejemplo"]}
        rows={[
          ["HTML", "Estructura", "<form>, <button>"],
          ["CSS", "Presentación", "colores, layout"],
          ["JavaScript", "Comportamiento", "validar, reaccionar al clic"],
          ["DOM", "Puente en memoria", "árbol que JS manipula"],
        ]}
      />
    </section>
  );
}
