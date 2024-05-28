'use client'

import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Button } from '../ui/button'

const Navbar = () => {
  const [state, setState] = useState(false)

  const navigation = [
    { title: "Novidades", path: "/new" },
    { title: "Suporte", path: "/support" },
  ]

  return (
    <nav className="bg-white w-full md:static md:text-sm">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <Link href="/">
            <Image
              src="/images/LogoDark.svg"
              width={100}
              height={50}
              alt="OnPholio logo"
            />
          </Link>
          <div className="md:hidden">
            <Button size="icon" variant="ghost"
              onClick={() => setState(!state)}
            >
              {
                state ? (
                  <X size={24} />
                ) : (
                  <Menu size={24} />
                )
              }
            </Button>
          </div>
        </div>
        <div className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${state ? 'block' : 'hidden'}`}>
          <ul className="justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
            {
              navigation.map((item, idx) => {
                return (
                  <li key={idx} className="text-gray-700 hover:text-secondary-foreground borderAnim">
                    <Link href={item.path} className="block">
                      {item.title}
                    </Link>
                  </li>
                )
              })
            }
            <div className='space-y-3 items-center gap-x-6 md:flex md:space-y-0'>
              <Button variant="outlineBlack" size="lgRounded">
                Comece Agora
              </Button>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar