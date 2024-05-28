import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Crie sua Conta | OnPholio",
  description: "Crie sua conta no OnPholio e comece a gerenciar suas páginas de portfólio!",
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
      <body className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}>{children}</body>
    </html>
  );
}
