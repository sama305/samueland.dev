import { getAllPoems } from "@/lib/poems"
import { DatedLinkListEntry } from "@/lib/types"
import DatedLinkList from "../../../../../components/DatedLinkList"

export default function Poetry() {
  const poems: Array<DatedLinkListEntry> = getAllPoems().map(({ metadata, slug }) => ({
    title: metadata.title,
    to: `/poem/${slug}`,
    date: metadata.date
  }))

  return (
    <article>
      <div>
        <DatedLinkList links={poems}/>
      </div>
    </article>
  )
}
