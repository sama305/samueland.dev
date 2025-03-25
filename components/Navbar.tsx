"use client";

import { usePathname } from "next/navigation";
import { CSSProperties } from "react";

interface NavbarProps {
  className?: string,
  style?: CSSProperties,
  links: Array<{
    label: string,
    to: string
  }>,
  vertical?: boolean
}

export default function Navbar({ className, links, vertical, style }: NavbarProps) {
  const currentPage = usePathname()

  return (
    <div style={style} className={className + " navbar" + (vertical ? " vnavbar" : " hnavbar")}>
      {links.map(l => (
        <a
          key={l.label}
          href={l.to}
          style={{ textDecoration: l.to === currentPage ? 'underline' : ''}}
        >
          {l.label}
        </a>
      ))}
    </div>
  )
}
