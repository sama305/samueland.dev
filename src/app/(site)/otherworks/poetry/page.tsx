import { getAllPoems } from "@/lib/poems"
import LinkList from "../../../../../components/LinkList"
import { LinkListEntry } from "@/lib/types"

export default function Poetry() {
  const posts: Array<LinkListEntry> = getAllPoems().map(({ metadata, slug }) => ({
    title: metadata.title,
    to: `/poem/${slug}`,
    subtitle: (metadata.date ? `, ${metadata.date}` : '')
  }))

  return (
    <div>
      <div>
        <LinkList links={posts}/>
      </div>
    </div>
  )
}
