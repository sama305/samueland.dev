import { getAllPosts } from "@/lib/posts"
import { stringToDateString } from "@/lib"
import Link from "next/link"

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div style={{ marginTop: '3rem' }}>
      {posts.map(({ slug, metadata }) => (
        <div style={{ marginBottom: '1rem', display: 'flex' }} key={slug}>
          <div>
            <Link style={{ fontWeight: 'bold'}} href={`/blog/${slug}`}>{metadata.title}</Link>
            <div style={{ width: '10rem' }}>
              {stringToDateString(metadata.date)}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
