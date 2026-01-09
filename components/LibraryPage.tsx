"use client";

import { Link } from "lucide-react";
import { libraryBaseUrl, libraryDict, libraryHomeName } from "@/lib/navlists";
import { usePathname } from "next/navigation";

export default function LibraryPage({
  children,
  title,
  subtitle,
  returnLink,
  returnLabel,
  paramsMap
}: Readonly<{
  children: React.ReactNode,
  title?: string,
  subtitle?: string,
  returnLink?: string,
  returnLabel?: string,
  paramsMap?: { [key: string]: string | string[] | undefined } 
}>) {
  const currentPage = usePathname()

  const searchParams = new URLSearchParams();

  if (paramsMap) {
    Object.entries(paramsMap).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((v) => searchParams.append(key, v));
      } else if (value) {
        searchParams.set(key, value);
      }
    });
  }

  let backPageStr = libraryHomeName
  let paramsStr   = ""

  if (searchParams) {
    const trailStr = searchParams.get('trail');
    const trailArray = trailStr ? trailStr.split(',') : null;

    if (trailArray) {
      backPageStr = trailArray[trailArray.length - 1]
      paramsStr = `?${trailArray.slice(0, trailArray.length - 1).join(",")}`
    }
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
        <div className="link">
          {currentPage !== libraryBaseUrl && (
            <Link
              href={returnLink ? returnLink : `${libraryBaseUrl}${libraryDict[backPageStr]}${paramsStr}`}
            >
              {returnLabel ? returnLabel : (<>&larr; Back to '{backPageStr}'</>)}
            </Link>
          )}
        </div>
      </div>
      {children}
    </div>
  );
}
