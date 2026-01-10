"use client";

import { libraryBaseUrl, libraryDict } from "@/lib/navlists";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LibraryPage({
  children,
  title,
  subtitle,
  returnLink,
  returnLabel,
  noTitle,
}: Readonly<{
  children: React.ReactNode,
  title?: string,
  subtitle?: string,
  returnLink?: string,
  returnLabel?: string,
  noTitle?: boolean
}>) {
  const pageSlices = usePathname().split("/")
  const lastPage = pageSlices[pageSlices.length - 2]
  const curPage = pageSlices[pageSlices.length - 1]

  return (
    <div>
      <div className="library-page-header" style={title || subtitle ? { borderBottom: "solid 1px var(--header-line-color)"} : {}}>
        <div className="title">
          {!noTitle && (<h1>{title ? title : libraryDict[curPage].label}</h1>)}
          {subtitle && (
            <span><i>{subtitle}</i></span>
          )}
        </div>
        <div className="link">
          <Link
            href={returnLink ? returnLink : `${libraryBaseUrl}${libraryDict[lastPage].path}`}
          >
            {returnLabel ? returnLabel : (<>&larr; Back to '{libraryDict[lastPage].label}'</>)}
          </Link>
        </div>
      </div>
      {children}
    </div>
  );
}
