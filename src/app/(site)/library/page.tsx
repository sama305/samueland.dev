import { libraryBaseUrl } from "@/lib/navlists";
import fs from 'fs';
import path from 'path';

export default function Misc() {
  const libraryPath = path.join(process.cwd(), '/src/app/\(site\)/library');
  const entries = fs.readdirSync(libraryPath, { withFileTypes: true });
  const directories = entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);
  
  return (
    <div style={{ display: "flex", gap: "1rem"}}>
      <div style={{ minWidth: "5.5rem", borderRight: "dotted 1px var(--header-line-color)" }}>
        <div className="navbar vnavbar">
          {/* if a path has 2 /'s, it isn't top level and thus shouldn't be displayed */}
          {directories.map(k => (
            <a
              key={k}
              href={`${libraryBaseUrl}/${k}`}
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
