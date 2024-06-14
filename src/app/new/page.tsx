import Navbar from "@/components/Navbar";

export default function Novidades() {
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
  };

  return (
    <Navbar links={links} linkButton={linkButton}/>
  );
}
