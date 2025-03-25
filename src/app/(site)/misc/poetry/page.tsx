import { getAllPoems } from "@/lib/poems"
import LinkList from "../../../../../components/LinkList"
import { LinkListEntry } from "@/lib/types"

export default function Poetry() {
  const posts: Array<LinkListEntry> = getAllPoems().map(({ metadata, slug }) => ({
    title: metadata.title,
    to: `/poem/${slug}`,
    subtitle: (metadata.author || metadata.date) ? `by ${metadata.author} (${metadata.date})` : undefined
  }))

  return (
    <div>
      <p>Below is an unorganized, ever-growing list of poems which I either made or enjoyed at some point in time. Some are dated, others are not, and unless otherwise noted, they were all written by <i>yours truly</i>.</p>
      <LinkList links={posts}/>
    </div>
  )
}
