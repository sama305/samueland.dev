"use client";

import { LinkListEntry } from "@/lib/types";
import { usePathname } from "next/navigation";
import SamLink from "./SamLink";

interface NavbarProps {
  className?: string,
  links: Array<LinkListEntry>,
  vertical?: boolean
}

export default function Navbar({ className, links, vertical }: NavbarProps) {
  const currentPage = usePathname()

  return (
    <nav className={(className ? className : "") + " navbar" + (vertical ? " vnavbar" : " hnavbar")}>
      {links.map(l => (
        <SamLink key={l.title} href={l.to} className={l.to !== '/' && currentPage.includes(l.to) || l.to === currentPage ? 'selected' : ''}>{l.title}</SamLink>
      ))}
    </nav>
  )
}
