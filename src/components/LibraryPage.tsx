"use client";

import Link from "next/link";

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
  return (
    <div>
      <div className="library-page-header" style={title || subtitle ? { borderBottom: "solid 1px var(--header-line-color)"} : {}}>
        <div className="title">
          {title && (<h1>{title}</h1>)}
          {subtitle && (
            <span><i>{subtitle}</i></span>
          )}
        </div>
        <div className="link">
          {returnLink && (
            <Link href={returnLink.to}>{returnLink.label}</Link>
          )}
        </div>
      </div>
      {html ? (
        <div dangerouslySetInnerHTML={{ __html: html }} />
      ) : (
        <div>{children}</div>
      )}
    </div>
  );
}
