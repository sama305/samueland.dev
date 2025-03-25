import { getAllPoems } from "@/lib/poems"
import Link from "next/link"

export default function Poetry() {
  const posts = getAllPoems()

  return (
    <div>
      <p>Below is an unorganized, ever-growing list of poems which I've enjoyed at some point in time. Some are dated, some are not, some were even written by <i>yours truly</i>, but each of them made enough of an impression on me to include them here. Enjoy.</p>
      <ul>
        {posts.map(({ slug, metadata }) => (
          <li key={slug}>
            <span><Link href={`/poem/${slug}`}>{metadata.title}</Link> by {metadata.author}</span>
            {metadata.date && (
              <span>{" "}({metadata.date})</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
