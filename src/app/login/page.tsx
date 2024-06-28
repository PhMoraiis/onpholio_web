'use client'

import EllipseWithHoverMotion from "@/components/EllipseWithHoverMotion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation"
import { FaGithub, FaGoogle } from "react-icons/fa"

const Login = () => {
  const router = useRouter()

  return (<>
    <main className="container mx-auto max-w-lg md:max-w-2xl lg:max-w-full h-[60vh] md:h-[80vh] lg:h-[80vh] flex flex-col items-center justify-center sm:px-4">
      <div className="w-full space-y-6 text-gray-600 sm:max-w-md">
        <div className="text-center">
          <div className="flex items-center justify-center">
            <EllipseWithHoverMotion width="150" height="150" />
          </div>
          <div className="space-y-2">
            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Faça login no OnPholio</h3>
            <p className="">Ainda não possui uma conta? <Button onClick={() => router.push("/signup")} variant="borderLink" size="link" className="text-primary hover:text-primary/80">Registre-se</Button></p>
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
            <Button type="submit" className="w-full px-4 py-2">
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
  </>
  )
}

export default Login