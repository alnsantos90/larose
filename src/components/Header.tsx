import { useRouter } from 'next/router'
import { List } from 'phosphor-react'
import { useState } from 'react'
import { MenuLink } from './MenuLink'

export function Header() {
  const [openMenuMobile, setOpenMenuMobile] = useState(false)

  const router = useRouter()

  function handleOpenMenuMobile() {
    setOpenMenuMobile(!openMenuMobile)
  }

  return (
    <nav className="bg-primary py-6">
      <div className="px-12 flex items-center justify-between flex-wrap bg-primary">
        <div className="flex items-center flex-shrink-0 text-white mr-6 w-[120px]">
          <img src="/assets/logo.png" alt="" />
        </div>

        <div className="block lg:hidden">
          <button
            className="flex items-center px-2 py-1 border rounded text-secondary border-secondary hover:text-secondary hover:border-secondary"
            onClick={handleOpenMenuMobile}
          >
            <List size={24} />
          </button>
        </div>

        <div className="gap-6 hidden lg:flex">
          <MenuLink href="/">Home</MenuLink>
          <MenuLink href={`${router.basePath}/#about`}>Sobre</MenuLink>
          <MenuLink href="/proceeding">Procedimentos</MenuLink>
        </div>
      </div>

      {openMenuMobile && (
        <div
          className=" flex flex-col px-10 mt-10 gap-6 text-2xl"
          onClick={handleOpenMenuMobile}
        >
          <MenuLink href="/">Home</MenuLink>
          <MenuLink href={`${router.basePath}/#about`}>Sobre</MenuLink>
          <MenuLink href="/proceeding">Procedimentos</MenuLink>
        </div>
      )}
    </nav>
  )
}
