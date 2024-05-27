import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"
import { FaGithub, FaGoogle } from "react-icons/fa"

const Login = () => {
  return (
    <main className="w-full h-screen flex flex-col items-center justify-center bg-gray-50 sm:px-4">
      <div className="w-full space-y-6 text-gray-600 sm:max-w-md">
        <div className="text-center">
          <Image src="https://floatui.com/logo.svg" width={150} height={0} alt="" className="mx-auto" />
          <div className="mt-5 space-y-2">
            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Faça login no OnPholio</h3>
            <p className="">Ainda não possui uma conta? <a href="javascript:void(0)" className="font-medium text-primary hover:text-primary/80">Registre-se</a></p>
          </div>
        </div>
        <div className="bg-white shadow p-4 py-6 sm:p-6 sm:rounded-lg">
          <form className="space-y-5">
            <div>
              <Label>
                Email
              </Label>
              <Input
                id="email"
                type="email"
                required
              />
            </div>
            <div>
              <Label>
                Senha
              </Label>
              <Input
                id="password"
                type="password"
                required
              />
            </div>
            <Button className="w-full px-4 py-2">
              Entrar
            </Button>
          </form>
          <div className="mt-5">
            <Button variant="secondary" className="w-full flex items-center justify-center gap-x-3 py-2.5 mt-5">
              <FaGoogle size={20} />
              Entre com Google
            </Button>
            <Button variant="secondary" className="w-full flex items-center justify-center gap-x-3 py-2.5 mt-5">
              <FaGithub size={20} />
              Entre com GitHub
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Login