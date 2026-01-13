"use client";

import SamLink from "./SamLink";

export default function Footer() {
  return (
    <div className="footer content-cols">
      <div className="socials">
        <SamLink href="mailto:andersonhenderson45@gmail.com" target="_blank">Email</SamLink>
        <SamLink href="https://www.linkedin.com/in/samuel-anderson-611488176/" target="_blank">LinkedIn</SamLink>
        <SamLink href="https://github.com/sama305" target="_blank">GitHub</SamLink>
        <span><a href="/samuel_morgan_anderson_resume.pdf" target="_blank">Résumé</a></span>
      </div>
      <div>© 2025&ndash;2026</div>
    </div>
  )
}
