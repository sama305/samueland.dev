"use client"

import { useEffect, useRef, useState } from "react"
import LibraryPage from "@/components/LibraryPage"
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote'
import { serialize } from "next-mdx-remote/serialize"
import { renderToStaticMarkup } from "react-dom/server"
import SamLink from "@/components/SamLink"
import { html as beautifyHtml } from "js-beautify"

export default function Edit() {
  const [body, setBody] = useState("<article>\n</article>")
  const [title, setTitle] = useState("New page")
  const [subtitle, setSubtitle] = useState("Something witty.")
  const [returnLabel, setReturnLabel] = useState("← Go back 'Home'")

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

  const htmlString = mdxSource ?
    beautifyHtml(renderToStaticMarkup(<MDXRemote {...mdxSource} />)
      .replaceAll("<a ", "<SamLink ")
      .replaceAll("</a>", "</SamLink>")
    )
    : null;

  const previewRef = useRef<HTMLDivElement | null>(null)

  const editorRef = useRef<HTMLTextAreaElement | null>(null);

  const syncPreviewScroll = () => {
    if (!editorRef.current || !previewRef.current) return;

    const { scrollTop, scrollHeight, clientHeight } = editorRef.current;
  
    const scrollPercentage = scrollTop / (scrollHeight - clientHeight);

    const preview = previewRef.current;
    const targetScroll = scrollPercentage * (preview.scrollHeight - preview.clientHeight);

    preview.scrollTo({
      top: targetScroll,
      behavior: "auto",
    });
  };

  const handleScroll = () => {
    syncPreviewScroll();
  };

  useEffect(() => {
    const timeoutId = setTimeout(syncPreviewScroll, 10);
    return () => clearTimeout(timeoutId);
  }, [body, mdxSource]);

  return (
    <div style={{ display: "flex", padding: "1rem 0", height: "100vh", overflowY: "scroll", justifyContent: "center", gap: "1.5rem" }}>
      <div
          style={{
          position: "sticky",
          top: "2rem",
          maxWidth: "36rem",
          width: "28rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          paddingRight: "1.5rem",
          borderRight: "dotted 1px var(--header-line-color)",
          alignSelf: "flex-start",
          flexShrink: 0,
        }}
      >
        <input value={title} onChange={(e) => setTitle(e.target.value)}/>
        <input value={subtitle} onChange={(e) => setSubtitle(e.target.value)}/>
        <input value={returnLabel} onChange={(e) => setReturnLabel(e.target.value)}/>

        <textarea
          ref={editorRef} // 2. Attach the ref
          onScroll={handleScroll} // 3. Listen for scroll events
          style={{ minWidth: "100%", maxWidth: "100%", height: "12rem" }}
          value={body} onChange={(e) => setBody(e.target.value)}
        />
        {errorMessage && (
          <div><strong>Error</strong>: {errorMessage}</div>
        )}

        <article>
          <h3>Output</h3>
          <pre>
            {htmlString}
          </pre>
        </article>
      </div>

      <div
        ref={previewRef}
        style={{
          flexGrow: "2",
          maxWidth: "36rem",
          maxHeight: "calc(100vh - 4rem)",
          overflowY: "auto",
        }}
      >
        <LibraryPage
          title={title}
          subtitle={subtitle}
          returnLink={{ to: "javascript:void(0)", label: returnLabel }}
        >
          {mdxSource && <MDXRemote {...mdxSource} components={{ a: SamLink }}/>}
        </LibraryPage>
      </div>
    </div>
  )
}
