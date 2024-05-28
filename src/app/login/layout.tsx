import SimpleNavbar from "@/components/SimpleNavbar";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";

export const metadata: Metadata = {
  title: "Login | OnPholio",
  description: "Faça login no OnPholio e comece a gerenciar suas páginas de portfólio!",
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <SimpleNavbar />
        {children}
      </body>
    </html>
  );
}
