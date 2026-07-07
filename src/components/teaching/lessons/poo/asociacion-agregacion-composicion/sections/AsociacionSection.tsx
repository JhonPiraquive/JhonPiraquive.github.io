import { CodeChallenge } from "@/components/teaching/CodeChallenge";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

const DOCTOR_PACIENTE_CODE = `using System;

public class Paciente
{
    public string Nombre { get; }
    public Paciente(string nombre) => Nombre = nombre;
}

public class Doctor
{
    public string Nombre { get; }
    public Doctor(string nombre) => Nombre = nombre;

    public void Atender(Paciente paciente)
    {
        Console.WriteLine($"{Nombre} atiende a {paciente.Nombre}");
    }
}`;

const CLASE_CITA_CODE = `public class Cita
{
    public Doctor Doctor { get; }
    public Paciente Paciente { get; }
    public DateTime Fecha { get; }

    public Cita(Doctor doctor, Paciente paciente, DateTime fecha)
    {
        Doctor = doctor ?? throw new ArgumentNullException(nameof(doctor));
        Paciente = paciente ?? throw new ArgumentNullException(nameof(paciente));
        Fecha = fecha;
    }
}

// Doctor.Atender(Cita cita) imprime fecha + nombres`;

export function AsociacionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Asociación: colaboración sin propiedad"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Asociación = A conoce o usa a B sin propiedad fuerte."}</li>
        <li>{"Puede durar una sola operación (parámetro) o formalizarse en una clase puente."}</li>
        <li>{"Ciclo de vida independiente: B existe sin A."}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">
        {
          "La asociación es la relación más general: un objeto interactúa con otro sin adueñarse de su existencia. Ejemplo clásico: un Doctor atiende a un Paciente; ninguno “contiene” al otro."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Señales de asociación"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"El vínculo es temporal o por contexto (consulta, cita, transacción)."}</li>
        <li>{"B se crea y vive fuera de A; A solo lo referencia o recibe por parámetro."}</li>
        <li>{"No hay agrupación todo–parte con reglas de pertenencia."}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Ejemplo C#: Doctor y Paciente"}</h3>
      <CodeFiddle language="csharp" code={DOCTOR_PACIENTE_CODE} />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Asociación formalizada: clase de enlace"}</h3>
      <p className="my-4">
        {
          "Cuando el contexto importa (fecha, lugar, participantes), una clase puente une los objetos sin herencia ni composición:"
        }
      </p>
      <CodeFiddle language="csharp" code={CLASE_CITA_CODE} />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Caso real: hospital"}</h3>
      <p className="my-4">
        {
          "Un sistema modeló Consulta : Paciente para “tener” datos del paciente. Los reportes mezclan identidad con la visita; al fusionar historiales se pierde qué médico atendió en cada fecha."
        }
      </p>
      <p className="my-4">
        {
          "Decisión: Cita asocia Doctor, Paciente y DateTime; Doctor.Atender(Cita) formaliza la colaboración."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Diagrama UML (preview)"}</h3>
      <MermaidDiagram
        chart={`classDiagram
  Doctor --> Paciente : atiende
  class Cita {
    +Doctor Doctor
    +Paciente Paciente
    +DateTime Fecha
  }
  Doctor --> Cita
  Paciente --> Cita`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Errores comunes"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Usar herencia para “tiene” (class Consulta : Paciente)."}</li>
        <li>{"Pasar 10 objetos a cada método en lugar de una clase de contexto (Cita, OrdenCompra)."}</li>
      </ul>
      <CodeChallenge
        title="Completa la asociación"
        template={`public void Atender({{b1}} paciente)
{
    Console.WriteLine($"{Nombre} atiende a {paciente.Nombre}");
}`}
        blanks={[{ id: "b1", answer: "Paciente", placeholder: "Tipo del parámetro que recibe el doctor" }]}
      />
    </section>
  );
}
