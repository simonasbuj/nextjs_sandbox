import Link from 'next/link'
import { usePathname, useSelectedLayoutSegment } from 'next/navigation'
import React from 'react'

interface NavLinkProps {
    href: string
    children?: React.ReactNode
}

export default function NavLink({href, children}: NavLinkProps) {

    const pathName = usePathname() //full path
    const segment = useSelectedLayoutSegment() //path within segment?
    const isActive = href === `/movies/${segment}`

    return (
        <Link href={href}><li className={isActive ? `selected-navbar-link` : ''}>{children}</li></Link>
    )
}
