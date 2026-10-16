import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function EstadosDeInterfazSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Los estados de una pantalla: cargando, vacío, error y éxito</h2>
      <p className="my-4">
        Cuando se diseña una pantalla se suele dibujar solo el caso feliz: la tabla llena de datos. Pero una pantalla real
        pasa por varios momentos. Si no los diseñas, el usuario ve una pantalla en blanco o un error técnico y no sabe qué
        hacer. La mitad de la calidad de una interfaz está en cómo maneja estos momentos.
      </p>
      <MermaidDiagram
        title="Los momentos por los que pasa una pantalla que carga datos"
        description="Máquina de estados: inactivo pasa a cargando; cargando puede terminar en éxito con datos, éxito vacío o error; el error permite reintentar."
        chart={`stateDiagram-v2
  [*] --> Cargando
  Cargando --> ConDatos: llegaron datos
  Cargando --> Vacio: llegó una lista vacía
  Cargando --> Error: falló la petición
  Error --> Cargando: Reintentar
  Vacio --> Cargando: Agregar o recargar
  ConDatos --> Cargando: Recargar`}
      />

      <CompareTable
        headers={["Estado", "Qué debe ver la persona", "Componente de MUI"]}
        rows={[
          ["Cargando", "Que algo está pasando; idealmente la forma de lo que vendrá", "Skeleton, CircularProgress, LinearProgress"],
          ["Vacío", "Una explicación amable y qué hacer a continuación", "Typography + Button («Aún no hay docentes. Agrega el primero»)"],
          ["Error", "Qué pasó, en palabras simples, y cómo intentarlo otra vez", "Alert severity=\"error\" + Button Reintentar"],
          ["Éxito", "Confirmación breve de que la acción se hizo", "Snackbar + Alert severity=\"success\""],
          ["Acción en curso", "El botón no se puede presionar dos veces", "Button disabled o con indicador de progreso"],
          ["Acción peligrosa", "Una pausa para confirmar", "Dialog con Cancelar y Eliminar"],
        ]}
      />

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Cómo se programa</h3>
      <p className="my-4">
        La idea es guardar en el estado en qué momento está la pantalla y dibujar según eso. En lugar de varios booleanos
        sueltos (<code>cargando</code>, <code>error</code>, <code>vacio</code>) que pueden contradecirse, usa{" "}
        <strong>un solo estado de texto</strong> con valores permitidos.
      </p>
      <CodeFiddle
        language="jsx"
        title="Una pantalla que cubre todos los estados"
        code={`import { useState } from "react";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import TablaCursos from "../components/TablaCursos.jsx";

// estado: "cargando" | "error" | "vacio" | "listo"
export default function ListadoCursos({ estado, cursos, alReintentar, alAgregar }) {
  if (estado === "cargando") {
    return <LinearProgress aria-label="Cargando cursos" />;
  }

  if (estado === "error") {
    return (
      <Alert severity="error" action={<Button onClick={alReintentar}>Reintentar</Button>}>
        No pudimos cargar los cursos. Revisa tu conexión e inténtalo de nuevo.
      </Alert>
    );
  }

  if (estado === "vacio") {
    return (
      <>
        <Typography>Aún no hay cursos registrados.</Typography>
        <Button variant="contained" onClick={alAgregar}>Agregar el primero</Button>
      </>
    );
  }

  return <TablaCursos cursos={cursos} />;
}`}
      />
      <Callout title="Escribe buenos mensajes de error" variant="callout-tip">
        <ul className="mb-0 list-disc space-y-1 pl-5">
          <li>Di qué pasó con palabras simples: «No pudimos guardar el docente», no «Error 500».</li>
          <li>Explica qué puede hacer la persona: «Revisa que el correo tenga @».</li>
          <li>Nunca culpes al usuario. Evita «Ingresaste mal el dato».</li>
          <li>Los detalles técnicos van a la consola (<code>console.error</code>), no a la pantalla.</li>
        </ul>
      </Callout>
    </section>
  );
}
