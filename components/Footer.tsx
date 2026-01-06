"use client";

import { usePathname } from "next/navigation";

export default function Footer() {
  const currentPage = usePathname()

  return (
    <div className="footer">
      <div style={{ display: "flex", gap: "1rem"}}>
        <a href="mailto:andersonhenderson45@gmail.com" target="_blank">Email</a>
        <a href="https://www.linkedin.com/in/samuel-anderson-611488176/" target="_blank">LinkedIn</a>
        <a href="https://github.com/sama305" target="_blank">GitHub</a>
        <span><a href="/samuel_morgan_anderson_resume.pdf" target="_blank">Résumé</a></span>
      </div>
      <div>© 2025&ndash;2026</div>
    </div>
  )
}
