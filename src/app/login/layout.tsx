import Navbar from "@/components/Navbar";
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

const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Novidades",
    path: "/new",
  },
];

const linkButton = {
  title: "Crie uma Conta",
  path: "/signup",
};

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section lang="en" className={cn(
      "min-h-screen bg-background font-sans antialiased",
      fontSans.variable
    )}>
      <Navbar links={links} linkButton={linkButton} />
      {children}
    </section>
  );
}
