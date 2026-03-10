"use client";

import { usePathname } from "next/navigation";
import { Fragment } from "react";
import SamLink from "./SamLink";

export default function LibraryPage({
  children,
  title,
  subtitle,
  returnLink,
  html
}: Readonly<{
  children?: React.ReactNode,
  title?: string,
  subtitle?: string,
  returnLink?: { label: string, to: string },
  html?: string
}>) {
  const path = usePathname().split("/").filter(v => v.length > 0)

  const isInLibrary = !returnLink

  return (
    <div>
      <div className="library-page-header" style={title || subtitle ? { borderBottom: "solid 1px var(--header-line-color)"} : {}}>
        <div className="link">
          {returnLink ? (
            <SamLink href={returnLink.to} dangerouslySetInnerHTML={{ __html: returnLink.label }}></SamLink>
          ) : (isInLibrary && (
            <div style={{ display: "flex", gap: "0.25rem" }}>
              {path.map(p => {
                const isLast = path[path.length - 1] == p
                return (
                  <Fragment key={p}>
                    <span>{isLast ? (<strong>{p}</strong>) : (<SamLink href={`/${path.slice(0, path.indexOf(p) + 1).join("/")}`}>{p}</SamLink>)}</span>
                    {!isLast && <span>&rsaquo;</span>}
                  </Fragment>
                )
              })}
            </div>
          ))}
        </div>
        <div className="title">
          {title && (<h1 style={{ lineHeight: "2.2rem" }}>{title}</h1>)}
          {subtitle && (
            <span style={{ opacity: "70%" }}><i>{subtitle}</i></span>
          )}
        </div>
      </div>
      <div style={{ borderBottom: "solid 1px var(--header-line-color)", marginBottom: "1.5rem"}}></div>
      {html ? (
        <div dangerouslySetInnerHTML={{ __html: html }} />
      ) : (
        <div>{children}</div>
      )}
    </div>
  );
}
