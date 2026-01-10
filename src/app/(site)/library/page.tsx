"use client";

import { libraryBaseUrl, libraryDict } from "@/lib/navlists";

export default function Misc() {
  return (
    <div style={{ display: "flex", gap: "1rem"}}>
      <div style={{ minWidth: "5.5rem", borderRight: "dotted 1px var(--header-line-color)" }}>
        <div className="navbar vnavbar">
          {/* if a path has 2 /'s, it isn't top level and thus shouldn't be displayed */}
          {Object.keys(libraryDict).filter(k => libraryDict[k].path.split("/").length == 2).slice(1).map(k => (
            <a
              key={k}
              href={`${libraryBaseUrl}${libraryDict[k].path}`}
            >
              {k}
            </a>
          ))}
        </div>
      </div>
      <article>
        <p>Welcome to <strong>The Library</strong>. Here, I explore various subjects and catalog my own thoughts and experiences with them. This is a <i>personal wiki</i>.</p>
        <p>Each top-level "book" on the right links to a topic; each topic may include links to other pages or subtopics. The books are comprised of my subjective experience with each topic and are probably inaccurate.</p>
      </article>
    </div>
  )
}
