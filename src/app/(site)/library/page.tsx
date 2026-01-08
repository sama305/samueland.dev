"use client";

import { libraryBaseUrl, libraryDict } from "@/lib/navlists";
import { usePathname } from "next/navigation";

export default function Misc() {
  const currentPage = usePathname()

  return (
    <div style={{ display: "flex", gap: "1rem"}}>
      <div style={{ minWidth: "5.5rem", borderRight: "dotted 1px var(--header-line-color)" }}>
        <div className="navbar vnavbar">
          {Object.keys(libraryDict).slice(1).map(k => (
            <a
              key={k}
              href={`${libraryBaseUrl}${libraryDict[k]}`}
              className={libraryDict[k] === currentPage ? 'selected' : ''}
            >
              {k}
            </a>
          ))}
        </div>
      </div>
      <article>
        <p>Welcome to <strong>The Library</strong>. Here, I explore various subjects and catalog my own thoughts and experiences with them. This is a <i>personal wiki</i>.</p>
        <p>Each "book" on the right links to a topic; each topic may include links to other pages or subtopics. The books are comprised of my subjective experience with each topic and are probably inaccurate.</p>
      </article>
    </div>
  )
}
