"use client"

import { useEffect, useState } from "react"
import LibraryPage from "@/components/LibraryPage"
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote'
import { serialize } from "next-mdx-remote/serialize"

export default function Edit() {
  const [body, setBody] = useState("<article>\n</article>")
  const [title, setTitle] = useState("New page")
  const [subtitle, setSubtitle] = useState("Something witty.")
  const [returnLabel, setReturnLabel] = useState("← Go back 'Home'")

  const [useMarkdown, setUseMarkdown] = useState(false)
  const [mdxSource, setMdxSource] = useState<MDXRemoteProps | null>(null)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const mdx = await serialize(body)
        setMdxSource(mdx)
        setErrorMessage(null)
      }
      catch (e) {
        if (e instanceof Error) {
          setErrorMessage(e.message)
        }
        else {
          setErrorMessage("An unknown error occurred.")
        }
      }
    })()
  }, [body])


  const handleToggleMarkdown = (e: React.ChangeEvent<HTMLInputElement>) => {
    const markdownSetting = e.target.value === "true"
    setUseMarkdown(markdownSetting);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "1.5rem" }}>
      <div style={{ maxWidth: "36rem", width: "28rem", display: "flex", flexDirection: "column", gap: "1rem", paddingRight: "1.5rem", borderRight: "dotted 1px var(--header-line-color)" }}>
        <input value={title} onChange={(e) => setTitle(e.target.value)}/>
        <input value={subtitle} onChange={(e) => setSubtitle(e.target.value)}/>
        <input value={returnLabel} onChange={(e) => setReturnLabel(e.target.value)}/>

        <div style={{ display: "flex", gap: "1rem" }}>
          <label style={{ display: "flex", gap: "0.25rem" }}>
            <input
              type="radio"
              name="notification-toggle"
              value="false"
              checked={useMarkdown === false}
              onChange={handleToggleMarkdown}
            />
            HTML
          </label>

          <label style={{ display: "flex", gap: "0.25rem" }}>
            <input
              type="radio"
              name="notification-toggle"
              value="true"
              checked={useMarkdown === true}
              onChange={handleToggleMarkdown}
            />
            Markdown
          </label>
        </div>

        <textarea
          style={{ minWidth: "100%", maxWidth: "100%", height: "12rem" }}
          value={body} onChange={(e) => setBody(e.target.value)}
        />
        {useMarkdown && errorMessage && (
          <div><strong>Error</strong>: {errorMessage}</div>
        )}
      </div>

      <div style={{ flexGrow: "2", maxWidth: "36rem"}}>
        {useMarkdown ? (
          <LibraryPage
            title={title}
            subtitle={subtitle}
            returnLink={{ to: "javascript:void(0)", label: returnLabel }}
          >
            {mdxSource && <MDXRemote {...mdxSource}/>}
          </LibraryPage>
        ) : (
          <LibraryPage
            title={title}
            subtitle={subtitle}
            html={body}
            returnLink={{ to: "javascript:void(0)", label: returnLabel }}
          />
        )}
      </div>
    </div>
  )
}
