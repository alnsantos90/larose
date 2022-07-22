import { AnchorHTMLAttributes, ReactNode } from 'react'

interface MenuProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode
}

export function MenuLink({ children, ...props }: MenuProps) {
  return (
    <a
      className="text-[#133D61] border-2 border-[#efebeb] hover:border-b-sky-900"
      {...props}
    >
      {children}
    </a>
  )
}
