import { getAllPoems } from "@/lib/poems"
import { DatedLinkListEntry } from "@/lib/types"
import DatedLinkList from "../../../../../components/DatedLinkList"

export default function Poetry() {
  const poems: Array<DatedLinkListEntry> = getAllPoems().map(({ metadata, slug }) => ({
    title: metadata.title,
    to: `/poem/${slug}`,
    subtitle: (metadata.date ? `, ${new Date(metadata.date).toLocaleString('default', { month: 'long' })}` : ''),
    date: metadata.date
  }))

  return (
    <div>
      <div>
        <DatedLinkList links={poems}/>
      </div>
    </div>
  )
}
