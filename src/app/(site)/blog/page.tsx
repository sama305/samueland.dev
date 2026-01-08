import { getAllPosts } from "@/lib/posts"
import { stringToDateString } from "@/lib"
import Link from "next/link"

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div>
      {posts.map(({ slug, metadata }) => (
        <div className="blogEntry" key={slug}>
          <div style={{ minWidth: "7rem" }}>{stringToDateString(metadata.date)}</div>
          <Link href={`/blog/${slug}`}>{metadata.title}</Link>
        </div>
      ))}
    </div>
  )
}
