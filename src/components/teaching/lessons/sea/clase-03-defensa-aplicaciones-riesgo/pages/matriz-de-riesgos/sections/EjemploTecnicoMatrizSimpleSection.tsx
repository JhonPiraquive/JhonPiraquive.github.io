import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import type { CSSProperties } from "react";

type RiskLevel = "B" | "M" | "A";

type RiskRow = {
  riesgo: string;
  activo: string;
  amenaza: string;
  vulnerabilidad: string;
  impacto: RiskLevel;
  probabilidad: RiskLevel;
  nivel: RiskLevel;
  decision: string;
  control: string;
};

function levelStyle(level: RiskLevel): CSSProperties {
  if (level === "B") return { backgroundColor: "#d1fae5", color: "#064e3b", fontWeight: 600 };
  if (level === "M") return { backgroundColor: "#fef3c7", color: "#78350f", fontWeight: 600 };
  return { backgroundColor: "#fee2e2", color: "#7f1d1d", fontWeight: 600 };
}

const ROWS: RiskRow[] = [
  {
    riesgo: "SQLi en buscador",
    activo: "Datos de usuarios",
    amenaza: "Extracción/alteración",
    vulnerabilidad: "SQL concatenado",
    impacto: "A",
    probabilidad: "M",
    nivel: "A",
    decision: "Mitigar",
    control: "Parametrización + mínimo privilegio",
  },
  {
    riesgo: "MITM en red pública",
    activo: "Credenciales/sesión",
    amenaza: "Interceptación",
    vulnerabilidad: "No forzar HTTPS",
    impacto: "A",
    probabilidad: "M",
    nivel: "A",
    decision: "Mitigar",
    control: "HTTPS + HSTS + cookies Secure",
  },
  {
    riesgo: "Phishing a soporte",
    activo: "Cuentas admin",
    amenaza: "Suplantación",
    vulnerabilidad: "Falta de verificación",
    impacto: "A",
    probabilidad: "M",
    nivel: "A",
    decision: "Mitigar",
    control: "Proceso out-of-band + 2FA",
  },
  {
    riesgo: "Sesión eterna",
    activo: "Privacidad",
    amenaza: "Acceso no autorizado",
    vulnerabilidad: "Tokens sin exp",
    impacto: "A",
    probabilidad: "M",
    nivel: "A",
    decision: "Mitigar",
    control: "Expiración + rotación + logout",
  },
  {
    riesgo: "Errores con stack trace",
    activo: "Infraestructura",
    amenaza: "Reconocimiento",
    vulnerabilidad: "Manejo de errores débil",
    impacto: "M",
    probabilidad: "M",
    nivel: "M",
    decision: "Mitigar",
    control: "Error handler + mensajes seguros",
  },
  {
    riesgo: "Secretos en repo",
    activo: "Claves y tokens",
    amenaza: "Exfiltración",
    vulnerabilidad: "Config con secretos",
    impacto: "A",
    probabilidad: "B",
    nivel: "M",
    decision: "Mitigar",
    control: "Secret manager + rotación",
  },
];

export function EjemploTecnicoMatrizSimpleSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Ejemplo técnico: matriz de riesgos (heatmap)"}
      </h2>
      <p className="my-4">
        {
          "Matriz de seis riesgos típicos en una PYME LATAM. Las columnas Impacto, Probabilidad y Nivel usan B/M/A (Bajo/Medio/Alto) con color de calor: verde = bajo, ámbar = medio, rojo = alto."
        }
      </p>
      <div className="my-6 overflow-x-auto">
        <table className="w-full min-w-[72rem] border-collapse text-sm">
          <thead>
            <tr className="border-b border-[var(--color-neutral-mid)] text-left">
              <th className="p-2">{"Riesgo"}</th>
              <th className="p-2">{"Activo"}</th>
              <th className="p-2">{"Amenaza"}</th>
              <th className="p-2">{"Vulnerabilidad"}</th>
              <th className="p-2">{"Impacto"}</th>
              <th className="p-2">{"Probabilidad"}</th>
              <th className="p-2">{"Nivel"}</th>
              <th className="p-2">{"Decisión"}</th>
              <th className="p-2">{"Control propuesto"}</th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map((row) => (
              <tr key={row.riesgo} className="border-b border-[var(--color-neutral-mid)]/40 align-top">
                <td className="p-2 font-medium">{row.riesgo}</td>
                <td className="p-2">{row.activo}</td>
                <td className="p-2">{row.amenaza}</td>
                <td className="p-2">{row.vulnerabilidad}</td>
                <td className="p-2 text-center" style={levelStyle(row.impacto)}>
                  {row.impacto}
                </td>
                <td className="p-2 text-center" style={levelStyle(row.probabilidad)}>
                  {row.probabilidad}
                </td>
                <td className="p-2 text-center" style={levelStyle(row.nivel)}>
                  {row.nivel}
                </td>
                <td className="p-2">{row.decision}</td>
                <td className="p-2">{row.control}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <CodeFiddle
        language="json"
        title="Registro de riesgo (ejemplo)"
        code={`{
  "risk_id": "R-001",
  "asset": "user_data",
  "threat": "data_exfiltration",
  "vulnerability": "sql_concatenation_in_search",
  "impact": "A",
  "probability": "M",
  "level": "A",
  "decision": "mitigate",
  "control": "prepared_statements_and_least_privilege"
}`}
      />
    </section>
  );
}
