import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
// @ts-ignore: allow side-effect import of global CSS
import "@/styles/index.css";


export const metadata: Metadata = {
  title: "dr Jovana Marković - stomatologija, skin care i anti-aging",
  description:
    "Profesionalna stomatologija, skin care i anti-aging usluge u Beogradu",
};

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  weight: ["100", "300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sr">
      <head>
      </head>
      <body lang="sr" className={`${montserrat.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
