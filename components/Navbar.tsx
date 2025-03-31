"use client";

import { LinkListEntry } from "@/lib/types";
import { usePathname } from "next/navigation";
import { CSSProperties } from "react";

interface NavbarProps {
  className?: string,
  style?: CSSProperties,
  links: Array<LinkListEntry>,
  vertical?: boolean
}

export default function Navbar({ className, links, vertical, style }: NavbarProps) {
  const currentPage = usePathname()

  return (
    <nav style={style} className={className + " navbar" + (vertical ? " vnavbar" : " hnavbar")}>
      {links.map(l => (
        <a
          key={l.title}
          href={l.to}
          style={{ textDecoration: l.to === currentPage ? 'underline' : ''}}
        >
          {l.title}
        </a>
      ))}
    </nav>
  )
}
