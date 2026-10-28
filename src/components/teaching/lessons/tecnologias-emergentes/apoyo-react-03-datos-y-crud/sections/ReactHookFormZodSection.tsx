import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";

export function ReactHookFormZodSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">El siguiente nivel: React Hook Form y Zod</h2>
      <p className="my-4">
        La validación manual funciona muy bien con formularios pequeños. Cuando los formularios crecen (diez campos,
        reglas que dependen unas de otras, varios formularios iguales), escribir y mantener el estado de cada campo se
        vuelve pesado. Dos librerías se combinan para resolverlo y son hoy una de las parejas más usadas en proyectos con
        React:
      </p>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li><strong>React Hook Form</strong>: maneja los valores, los errores y el envío del formulario con muy pocos redibujos, por lo que es rápido incluso con formularios largos.</li>
        <li><strong>Zod</strong>: permite describir en un solo lugar la forma y las reglas de los datos (un «esquema»), y comprobar que cualquier dato las cumple.</li>
      </ul>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Instalación</h3>
      <CodeFiddle
        language="bash"
        title="Terminal"
        code={`npm install react-hook-form zod @hookform/resolvers`}
      />

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">El esquema: las reglas en un solo lugar</h3>
      <CodeFiddle
        language="javascript"
        title="src/schemas/materia.js"
        code={`import * as z from "zod";

export const esquemaMateria = z.object({
  codigo: z.string().min(3, "El código debe tener al menos 3 caracteres."),
  nombre: z.string().min(3, "Escribir el nombre completo de la materia."),
  creditos: z.coerce   // convierte el texto del campo a número antes de validar
    .number("Escribir los créditos como número.")
    .int("Los créditos deben ser un número entero.")
    .min(1, "Mínimo 1 crédito.")
    .max(10, "Máximo 10 créditos."),
});`}
      />

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">El formulario con MUI</h3>
      <p className="my-4">
        Los campos de MUI se conectan a React Hook Form con <code>Controller</code>, que entrega a cada{" "}
        <code>TextField</code> lo que necesita (<code>field</code>) y el estado de ese campo (<code>fieldState</code>, que
        incluye su error).
      </p>
      <CodeFiddle
        language="jsx"
        title="src/components/FormularioMateriaRHF.jsx"
        code={`import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { esquemaMateria } from "../schemas/materia.js";

export default function FormularioMateriaRHF({ valoresIniciales, alEnviar }) {
  const { control, handleSubmit, formState: { isSubmitting } } = useForm({
    resolver: zodResolver(esquemaMateria),           // conecta Zod con el formulario
    defaultValues: valoresIniciales ?? { codigo: "", nombre: "", creditos: "" },   // define TODOS los campos
  });

  return (
    <Stack component="form" spacing={2} onSubmit={handleSubmit(alEnviar)} noValidate sx={{ maxWidth: 480 }}>
      <Controller
        name="codigo"
        control={control}
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            label="Código"
            error={Boolean(fieldState.error)}
            helperText={fieldState.error?.message ?? " "}
          />
        )}
      />
      <Controller
        name="nombre"
        control={control}
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            label="Nombre"
            error={Boolean(fieldState.error)}
            helperText={fieldState.error?.message ?? " "}
          />
        )}
      />
      <Controller
        name="creditos"
        control={control}
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            label="Créditos"
            type="number"
            error={Boolean(fieldState.error)}
            helperText={fieldState.error?.message ?? " "}
          />
        )}
      />
      <Button type="submit" variant="contained" disabled={isSubmitting}>
        {isSubmitting ? "Guardando…" : "Guardar"}
      </Button>
    </Stack>
  );
}`}
      />
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li><strong>handleSubmit(alEnviar)</strong> valida primero con el esquema; solo llama a la función indicada si todo es válido, y le entrega los datos ya convertidos (créditos como número).</li>
        <li><strong>isSubmitting</strong> es verdadero mientras la función async no termina. Sirve para el botón sin crear un estado propio.</li>
        <li>Si <code>alEnviar</code> lanza un error, también se puede mostrar en el formulario, igual que antes.</li>
        <li><strong>defaultValues</strong> debe incluir todos los campos. Si alguno queda en <code>undefined</code>, React se queja de pasar de campo sin control a controlado.</li>
      </ul>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">¿Cuándo usarlas y cuándo no?</h3>
      <CompareTable
        headers={["", "Validación manual", "React Hook Form + Zod"]}
        rows={[
          ["Líneas de código", "Pocas en formularios pequeños; crecen rápido", "Una configuración inicial; después, estable"],
          ["Curva de aprendizaje", "Ninguna: es JavaScript y estado", "Hay que aprender dos librerías y sus conceptos"],
          ["Rendimiento con muchos campos", "Cada tecla redibuja el formulario", "Muy optimizado"],
          ["Reutilizar reglas", "Se copian funciones", "El esquema se comparte, incluso con el servidor"],
          ["Cuándo elegirla", "Uno o dos formularios sencillos; durante el aprendizaje", "Muchos formularios, reglas complejas o equipos grandes"],
        ]}
      />
      <Callout title="Cuidado al combinar librerías" variant="callout-warning">
        <ul className="mb-0 list-disc space-y-1 pl-5">
          <li>React Hook Form, Zod y el paquete de resolvers deben ser compatibles entre sí. Si aparecen errores de tipos o mensajes en inglés inesperados, lo primero es revisar que las tres estén en versiones compatibles.</li>
          <li>Zod cambió la forma de personalizar los mensajes entre versiones mayores: los tutoriales antiguos usan opciones que ya no funcionan. Los mensajes se pasan como texto en cada regla, como en el ejemplo.</li>
          <li>Es un caso típico del criterio de mantenimiento: una pareja de librerías muy popular aún exige leer las notas de cambios antes de actualizar.</li>
        </ul>
      </Callout>
      <Callout title="Y las acciones de formulario de React" variant="callout-info">
        <p className="mb-0">
          React incluye acciones de formulario y hooks como <code>useActionState</code>. Resuelven muy bien el envío y el
          estado de «enviando», pero no reemplazan a una librería de validación; se pueden combinar. Para esta asignatura,
          la validación manual o React Hook Form cubren el camino.
        </p>
      </Callout>
    </section>
  );
}
