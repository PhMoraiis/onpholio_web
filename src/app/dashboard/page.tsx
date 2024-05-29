'use client'

import DashboardNavbar from "@/components/DashboardNavbar";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

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
    title: "Comece Agora",
    path: "/login",
  }

  // Verificar se o token de autenticação está presente no localStorage ao carregar o componente
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {
        isAuthenticated ? (
          <DashboardNavbar links={links} />
        ) : (
          <Navbar links={links} linkButton={linkButton} />
        )
      }
    </main>
  );
}

export default Dashboard;