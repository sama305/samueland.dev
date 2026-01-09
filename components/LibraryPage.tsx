import { Suspense } from "react";
import { DynamicTrailLink } from "./DynamicTrailLink";

export default function LibraryPage({
  children,
  title,
  subtitle,
  returnLink,
  returnLabel
}: Readonly<{
  children: React.ReactNode,
  title?: string,
  subtitle?: string,
  returnLink?: string,
  returnLabel?: string
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
          <Suspense>
            <DynamicTrailLink
              returnLabel={returnLabel}
              returnLink={returnLink}
            />
          </Suspense>
        </div>
      </div>
      {children}
    </div>
  );
}
