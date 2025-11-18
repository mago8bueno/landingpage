import type { Metadata } from "next";
import "./globals.css";
import "./fonts.css";

export const metadata: Metadata = {
  title: "Tu tienda vende más con los mismos clientes",
  description: "Convierte clientes sueltos en clientes fieles sin gastar en anuncios.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="font-body bg-black text-white">
        {children}
      </body>
    </html>
  );
}
