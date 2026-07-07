import { ClayCard } from "@/components/clay";

export type CompareTableProps = {
  headers: string[];
  rows: string[][];
  title?: string;
};

export function CompareTable({ headers, rows, title }: CompareTableProps) {
  return (
    <ClayCard className="my-8 overflow-x-auto">
      {title && <h3 className="mb-4 text-lg font-semibold">{title}</h3>}
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr>
            {headers.map((h, i) => (
              <th
                key={i}
                className="border-b-2 border-[var(--color-secondary)] bg-[var(--color-neutral-light)] px-4 py-3 text-left font-semibold"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} className={ri % 2 === 0 ? "bg-white" : "bg-[var(--color-neutral-light)]/50"}>
              {row.map((cell, ci) => (
                <td key={ci} className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </ClayCard>
  );
}
