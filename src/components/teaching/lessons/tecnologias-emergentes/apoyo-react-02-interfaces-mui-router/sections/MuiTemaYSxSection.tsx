import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";

export function MuiTemaYSxSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Personalizar: la propiedad sx y el tema</h2>
      <p className="my-4">
        Hay dos niveles para cambiar cómo se ve algo en MUI. Para un ajuste puntual en un solo elemento se usa{" "}
        <code>sx</code>. Para un cambio que debe aplicar a toda la aplicación (el color principal, las esquinas, la
        tipografía) se usa el <strong>tema</strong>. Distinguir cuál corresponde en cada caso evita mucho código repetido.
      </p>

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">sx: estilos rápidos que conocen el tema</h3>
      <p className="my-4">
        <code>sx</code> recibe un objeto de estilos, parecido a CSS escrito en JavaScript, con ventajas: usa los espacios y
        colores del tema por nombre y acepta valores distintos según el tamaño de pantalla.
      </p>
      <CodeFiddle
        language="jsx"
        title="Ejemplos de sx"
        code={`<Box
  sx={{
    p: 2,                       // padding: 2 x 8px = 16px  (la unidad de espacio es 8px)
    mb: 3,                      // margin-bottom: 24px
    bgcolor: "primary.main",    // color primario del tema
    color: "primary.contrastText",
    borderRadius: 2,            // 2 x el radio base del tema
    width: { xs: "100%", md: 400 },  // 100% en celular, 400px desde tableta
    "&:hover": { bgcolor: "primary.dark" },
  }}
>
  Contenido
</Box>`}
      />
      <CompareTable
        title="Tamaños de pantalla (breakpoints) por defecto"
        headers={["Nombre", "Desde", "Dispositivo típico"]}
        rows={[
          ["xs", "0 px", "Celular"],
          ["sm", "600 px", "Celular grande o tableta pequeña"],
          ["md", "900 px", "Tableta"],
          ["lg", "1200 px", "Computador portátil"],
          ["xl", "1536 px", "Pantalla grande"],
        ]}
      />

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">El tema: decidir una vez, aplicar en todas partes</h3>
      <CodeFiddle
        language="jsx"
        title="src/theme.js"
        code={`import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#0a2540" },
    secondary: { main: "#00a3d9" },
  },
  shape: { borderRadius: 10 },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h1: { fontSize: "2rem", fontWeight: 700 },
  },
  components: {
    // Cambios que aplican a TODOS los botones de la aplicación
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: { root: { textTransform: "none" } },   // sin mayúsculas forzadas
    },
  },
});

export default theme;`}
      />
      <p className="my-4">
        Luego ese tema se pasa al <code>ThemeProvider</code> de <code>main.jsx</code>. A partir de ahí, cada botón usa el
        color primario y las esquinas redondeadas sin escribir nada más.
      </p>
      <CompareTable
        headers={["Necesidad", "Herramienta"]}
        rows={[
          ["Un solo elemento, en un solo lugar", "sx"],
          ["Todos los botones, campos o tablas de la aplicación", "components en createTheme (defaultProps y styleOverrides)"],
          ["Los colores de marca", "palette en createTheme"],
          ["Un componente propio con estilos reutilizables", "styled(Componente)"],
        ]}
      />

      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Modo oscuro</h3>
      <p className="my-4">
        MUI puede ofrecer tema claro y oscuro con una opción de configuración. Con <code>colorSchemes</code> se habilita el
        oscuro, y el hook <code>useColorScheme</code> permite leer y cambiar el modo.
      </p>
      <CodeFiddle
        language="jsx"
        title="Tema con modo oscuro y botón para alternar"
        code={`import { createTheme, useColorScheme } from "@mui/material/styles";
import Button from "@mui/material/Button";

export const theme = createTheme({
  colorSchemes: { dark: true },   // además del claro, que ya viene incluido
});

export function AlternarModo() {
  const { mode, setMode } = useColorScheme();
  if (!mode) return null;   // en el primer dibujo mode aún no está definido

  return (
    <Button onClick={() => setMode(mode === "dark" ? "light" : "dark")}>
      Cambiar a {mode === "dark" ? "claro" : "oscuro"}
    </Button>
  );
}`}
      />
      <Callout title="Qué recordar" variant="callout-tip">
        <p className="mb-0">
          Conviene evitar colores fijos como <code>&quot;#ffffff&quot;</code> dentro de <code>sx</code> y usar nombres del tema (
          <code>background.paper</code>, <code>text.secondary</code>); así las pantallas se ven bien en claro y en oscuro y
          cambiar la marca toma un solo archivo.
        </p>
      </Callout>
    </section>
  );
}
