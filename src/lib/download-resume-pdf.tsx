import { pdf } from "@react-pdf/renderer";
import { ResumePdfDocument } from "@/components/resume/ResumePdfDocument";
import type { PortfolioContent } from "@/lib/portfolio";

export async function downloadResumePdf(content: PortfolioContent): Promise<void> {
  const blob = await pdf(<ResumePdfDocument content={content} />).toBlob();
  const url = URL.createObjectURL(blob);

  const link = window.document.createElement("a");
  link.href = url;
  link.download = content.resumePdf.filename;
  link.rel = "noopener";
  window.document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}
