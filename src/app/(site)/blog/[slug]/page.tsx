import { getAllPostSlugs, getPostBySlug } from '@/lib/posts'
import { stringToDateString } from "@/lib"
import { MDXRemote } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'
import LibraryPage from '@/components/LibraryPage'

interface BlogPostParams {
  params: Promise<{
    slug: string
  }>
}

export function generateStaticParams() {
  const slugs = getAllPostSlugs()
  return slugs.map(slug => ({ slug }))
}

export default async function BlogPostPage({ params }: BlogPostParams) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return notFound()

  return (
    <LibraryPage
      title={post.metadata.title}
      subtitle={`Written on ${stringToDateString(post.metadata.date)}${post.metadata.updateDate ? `, last updated ${stringToDateString(post.metadata.updateDate)}` : ''}`}
      returnLink={{ to: "/blog", label: "&larr; Other blog posts" }}
    >
      <article>
        <MDXRemote source={post.content} />
      </article>
    </ LibraryPage>
  )
}
