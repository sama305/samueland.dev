"use client"

import { libraryBaseUrl, libraryDict, libraryHomeName } from "@/lib/navlists";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

export function DynamicTrailLink({ returnLink, returnLabel }: { returnLink?: string, returnLabel?: string }) {
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

  if (currentPage !== libraryBaseUrl)
    return (
      <Link
        href={returnLink ? returnLink : `${libraryBaseUrl}${libraryDict[backPageStr]}${paramsStr}`}
      >
        {returnLabel ? returnLabel : (<>&larr; Back to '{backPageStr}'</>)}
      </Link>
    )
}
