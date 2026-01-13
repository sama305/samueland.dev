import { getAllPosts } from "@/lib/posts"
import { stringToDateString } from "@/lib"
import SamLink from "@/components/SamLink"

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div>
      {posts.map(({ slug, metadata }) => (
        <div className="blogEntry" key={slug}>
          <div style={{ minWidth: "7rem" }}>{stringToDateString(metadata.date)}</div>
          <SamLink href={`/blog/${slug}`}>{metadata.title}</SamLink>
        </div>
      ))}
    </div>
  )
}
