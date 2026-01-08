"use client";

import { libraryBaseUrl, libraryDict, libraryHomeName } from "@/lib/navlists";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

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
  const searchParams = useSearchParams();
  const currentPage = usePathname()

  const trailStr = searchParams.get('trail');
  const trailArray = trailStr ? trailStr.split(',') : null;

  let backPageStr = ""
  let paramsStr   = ""
  if (!trailArray) {
    backPageStr = libraryHomeName
  }
  else {
    backPageStr = trailArray[trailArray.length - 1]
    paramsStr = `?${trailArray.slice(0, trailArray.length - 1).join(",")}`
  }

  return (
    <div>
      <div className="library-page-header" style={title || subtitle ? { borderBottom: "solid 1px var(--header-line-color)"} : {}}>
        <div className="title">
          {title && (<h1>{title}</h1>)}
          {subtitle && (
            <span><i>{subtitle}</i></span>
          )}
        </div>
        {currentPage !== libraryBaseUrl && (
          <div className="link">
            <Link href={returnLink ? returnLink : `${libraryBaseUrl}${libraryDict[backPageStr]}${paramsStr}`}>{returnLabel ? returnLabel : (<>&larr; Back to '{backPageStr}'</>)}</Link>
          </div>
        )}
      </div>
      {children}
    </div>
  );
}
