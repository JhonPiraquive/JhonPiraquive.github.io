import Link from "next/link";

export function CierreSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Cierre de la lección"}</h2>
      <p className="my-4">
        {
          "Modularidad cierra la teoría de diseño de Clase 3: POO, contratos, polimorfismo, SOLID y módulos en un mismo relato — Tienda Andes."
        }
      </p>
      <p className="my-4">
        <strong>{"Siguiente paso:"}</strong>
        {" "}
        <Link
          href="/teaching/poo/clase-03-experto-poo/practica-y-cierre"
          className="text-[var(--color-secondary)] hover:underline"
        >
          {"practica-y-cierre"}
        </Link>
        {" — entrega capstone, miniquiz experto y cierre del track POO."}
      </p>
    </section>
  );
}
