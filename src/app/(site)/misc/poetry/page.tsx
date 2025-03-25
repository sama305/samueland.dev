import { getAllPoems } from "@/lib/poems"
import Link from "next/link"

export default function Poetry() {
  const posts = getAllPoems()

  return (
    <div>
      <p>Below is an unorganized, ever-growing list of poems which I either made or enjoyed at some point in time. Some are dated, others are not, and unless otherwise noted, they were all written by <i>yours truly</i>.</p>
      <ul>
        {posts.map(({ slug, metadata }) => (
          <li key={slug}>
            <span><Link href={`/poem/${slug}`}>{metadata.title}</Link></span>
            {metadata.author && (
              <span> by {metadata.author}</span>
            )}
            {metadata.date && (
              <span>{" "}({metadata.date})</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
