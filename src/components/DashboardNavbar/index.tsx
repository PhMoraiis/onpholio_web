'use client'

import { LogOut, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'
import EllipseWithHoverMotion from '../EllipseWithHoverMotion'
import { ILink, INavbarProps } from '../Navbar/type'
import { Button } from '../ui/button'
import MenuProfile from '../MenuProfile'

const DashboardNavbar = ({ links }: INavbarProps) => {
  const [state, setState] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="bg-white w-full md:static md:text-sm">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <Link href="/">
            <EllipseWithHoverMotion />
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
                  <li key={index} className={`text-gray-600 ${pathname.toString() === item.path ? "text-white hover:text-border relative z-[1] rounded-full px-4 py-2 inset-0 bg-black" : "borderAnim hover:text-secondary-foreground"
                    }`}>
                    <Link href={item.path} className="block">
                      {item.title}
                    </Link>
                  </li>
                )
              })
            }
            <div className='space-y-3 items-center gap-x-6 pl-8 md:flex md:space-y-0'>
              <MenuProfile />
            </div>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default DashboardNavbar