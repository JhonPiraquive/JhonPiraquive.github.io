import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import "../styles/tokens.css";
import "../styles/clay.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Jhon Alejandro Piraquive",
  description: "Construyendo el futuro digital.",
  icons: {
    icon: "/assets/img/logo.png",
    apple: "/assets/img/logo.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${montserrat.variable} ${inter.variable}`}>
      <body className="font-[family-name:var(--font-body)] text-[var(--color-neutral-dark)] antialiased">
        {children}
      </body>
    </html>
  );
}
