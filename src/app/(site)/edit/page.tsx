"use client"

import { useState } from "react"
import LibraryPage from "@/components/LibraryPage"

export default function Edit() {
  let [body, setBody] = useState("<article>\n</article>")
  let [title, setTitle] = useState("New page")
  let [subtitle, setSubtitle] = useState("Something witty.")
  let [returnLabel, setReturnLabel] = useState("← Go back 'Home'")
  
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem"}}>
      <article>
        <p>Use the text boxes below to set the title, subtitle, link label, and body of the generated library page below. This is used to see what a page looks like without having to use a code editor.</p>
      </article>
      <input value={title} onChange={(e) => setTitle(e.target.value)}/>
      <input value={subtitle} onChange={(e) => setSubtitle(e.target.value)}/>
      <input value={returnLabel} onChange={(e) => setReturnLabel(e.target.value)}/>
      <textarea
        style={{ minWidth: "100%", maxWidth: "100%", height: "12rem" }}
        value={body} onChange={(e) => setBody(e.target.value)}
      />

      <hr />

      <LibraryPage
        title={title}
        subtitle={subtitle}
        html={body}
        returnLabel={returnLabel}
        returnLink={"javascript:void(0)"}
      />
    </div>
  )
}
