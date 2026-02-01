import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "REBALANCE | Kinetoterapie & Recuperare Medicală",
  description:
    "Clinică premium de recuperare medicală în Chișinău. Kinetoterapie, terapie manuală, drenaj limfatic și yoga. Echipă de specialiști cu experiență.",
  keywords: [
    "kinetoterapie",
    "recuperare medicală",
    "Chișinău",
    "terapie manuală",
    "drenaj limfatic",
    "yoga",
    "pilates",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <body className={`${manrope.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
