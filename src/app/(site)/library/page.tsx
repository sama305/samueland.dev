import SamLink from "@/components/SamLink";
import { libraryBaseUrl } from "@/lib/navlists";
import fs from 'fs';
import path from 'path';

export default function Misc() {
  const libraryPath = path.join(process.cwd(), '/src/app/\(pages\)/library');
  const entries = fs.readdirSync(libraryPath, { withFileTypes: true });
  const directories = entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);
  
  return (
    <div style={{ display: "flex", gap: "1rem"}}>
      <div style={{ minWidth: "6rem", borderRight: "dotted 1px var(--header-line-color)" }}>
        <div className="navbar vnavbar">
          {/* if a path has 2 /'s, it isn't top level and thus shouldn't be displayed */}
          {directories.map(k => (
            <div key={k}>
              ›{" "}
              <SamLink href={`${libraryBaseUrl}/${k}`}>{k}</SamLink>
            </div>
          ))}
        </div>
      </div>
      <article>
        <p>Welcome to <strong>The Library</strong>. Here, I explore various subjects and catalog my own thoughts and experiences with them. This is a <i>personal wiki</i>.</p>
        <p>Each top-level topic on the left links to a page for that topic; these pages may include their own links to other pages or subtopics. Please note that everything in the library is subjective and only reflective of my own (likely inaccurate or wrong) thoughts, ideas, and opinions.</p>
        <h3>Notable links</h3>
        <ul>
          <li><SamLink href="/library/music/songs#list-of-songs">Songs I wrote</SamLink></li>
          <li><SamLink href="/library/games/videogames/pico8#games">Littles games I made</SamLink></li>
        </ul>
      </article>
    </div>
  )
}
