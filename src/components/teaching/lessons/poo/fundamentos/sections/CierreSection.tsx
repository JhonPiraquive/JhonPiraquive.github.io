export function CierreSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Cierre de la lección"}</h2>
      <p className="my-4">
        {
          "Has completado la introducción a los fundamentos de Programación Orientada a Objetos (POO) en C#. Los conceptos de esta lección son la base del track POO: sin distinguir clase de instancia, sin constructor que garantice estado válido y sin métodos que protejan invariantes, será difícil avanzar en encapsulamiento, herencia y polimorfismo."
        }
      </p>
      <p className="my-4 font-semibold">{"Ideas clave para retener:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>{"POO = objetos con estado + comportamiento; reduce caos cuando hay reglas de negocio."}</li>
        <li>{"Clase = molde · Instancia = objeto concreto con new · Constructor = nacimiento en estado válido."}</li>
        <li>{"private set + métodos con intención (Retirar, Pagar) protegen el dominio mejor que setters públicos."}</li>
        <li>{"Cada new crea un objeto independiente; no asumas estado compartido entre instancias."}</li>
      </ul>
      <p className="my-4">
        <strong>{"Siguiente paso:"}</strong>{" "}
        {"lección encapsulamiento — visibilidad de miembros y protección avanzada del estado."}
      </p>
    </section>
  );
}
