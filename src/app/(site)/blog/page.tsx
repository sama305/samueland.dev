import { getAllPosts, stringToDateString } from "@/lib"
import Link from "next/link"

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div>
      {posts.map(({ slug, metadata }) => (
        <div style={{marginTop: '3rem'}} key={slug}>
          <h3><Link style={{ fontWeight: 'bold'}} href={`/blog/${slug}`}>{metadata.title}</Link></h3>
          {stringToDateString(metadata.date)}
        </div>
      ))}
    </div>
  )
}
