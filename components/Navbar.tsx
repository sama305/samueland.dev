"use client";

import { usePathname } from "next/navigation";

export default function Navbar() {
  const navBarLinks: Array<{
    label: string,
    to: string
  }> = [
    {
      label: "About",
      to: "/"
    },
    {
      label: "Projects",
      to: "/projects"
    },
    {
      label: "Blog",
      to: "/blog"
    },
    {
      label: "Misc",
      to: "/misc"
    }
  ]

  const currentPage = usePathname()
  console.log(currentPage)

  return (
    <div className="navbar">
      {navBarLinks.map(l => (
        <a
          key={l.label}
          href={l.to}
          style={{ textDecoration: l.to === currentPage ? 'underline' : 'none'}}
        >
          {l.label}
        </a>
      ))}
    </div>
  )
}
