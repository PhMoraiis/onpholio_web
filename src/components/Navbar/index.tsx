'use client'

import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'
import { ILink, INavbarProps } from '../Navbar/type'
import { Button } from '../ui/button'
import MoveableEllipse from '../MoveableEllipse'

const Navbar = ({ links, linkButton }: INavbarProps) => {
  const [state, setState] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  const handleNavigation = () => {
    if (linkButton.path) {
      router.push(linkButton.path)
    }
    else {
      router.push('/')
    }
  }

  return (
    <nav className="bg-white w-full md:static md:text-sm">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <Link href="/">
            <MoveableEllipse />
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
              links.map((item: ILink, index: number) => {
                return (
                  <li key={index} className={`text-gray-700 hover:text-secondary-foreground ${pathname.toString() === item.path ? "border-b-[1px] border-black inline-flex" : "borderAnim"
                    }`}>
                    <Link href={item.path} className="block">
                      {item.title}
                    </Link>
                  </li>
                )
              })
            }
            <div className='space-y-3 items-center gap-x-6 md:flex md:space-y-0'>
              <Button onClick={handleNavigation} variant="outlineBlack" size="lgRounded">
                {linkButton.title}
              </Button>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar