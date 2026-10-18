export function QueEsBdRelacionalSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Puente desde el ER"}
      </h2>
      <p className="my-4">
        {
          "El diseño ER definió Programas 1:N Inscripciones con PK/FK y el orden de padres primero. Aquí no se vuelve a enseñar el modelo: solo se materializa el CONSTRAINT en SQL y se consulta con JOIN."
        }
      </p>
    </section>
  );
}
