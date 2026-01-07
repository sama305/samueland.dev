import { getAllPoems } from "@/lib/poems"
import { DatedLinkListEntry } from "@/lib/types"
import DatedLinkList from "../../../../../components/DatedLinkList"
import { stringToDateString } from "@/lib"
import Link from "next/link"

export default function Poetry() {
  const poems: Array<DatedLinkListEntry> = getAllPoems().map(({ metadata, slug }) => ({
    title: metadata.title,
    to: `/poem/${slug}`,
    date: metadata.date
  }))

  return (
    <article>
      <p>Sometimes, I like to write poetry. They are very amateur, but I enjoyed making all of them. I hope you do too.</p>
      {poems.map(({ title, to, date }) => (
        <div className="blogEntry" key={title}>
          <div style={{ minWidth: "5.6rem" }}>{date}</div>
          <Link href={to}>{title}</Link>
        </div>
      ))}
    </article>
  )
}
