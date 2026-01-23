import { getAllPosts } from "@/lib/posts"
import { stringToDateString } from "@/lib"
import SamLink from "@/components/SamLink"

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <table>
      <tbody>
        {posts.map(({ slug, metadata }) => (
          <tr key={slug}>
            <td style={{ verticalAlign: "top", textAlign: "right", whiteSpace: "nowrap" }}><span style={{ marginRight: "1rem" }}>{stringToDateString(metadata.date)}</span></td>
            <td><SamLink href={`/blog/${slug}`}>{metadata.title}</SamLink></td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
