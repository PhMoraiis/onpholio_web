import Navbar from "@/components/Navbar";

export default function Home() {
  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Novidades",
      path: "/new",
    },
    {
      title: "Suporte",
      path: "/support",
    },
  ];

  const linkButton = {
    title: "Comece Agora",
    path: "/login",
  };

  return (
    <main className="container mx-auto max-w-lg md:max-w-2xl lg:max-w-full min-h-screen">
      <Navbar links={links} linkButton={linkButton} />
    </main>
  );
}
