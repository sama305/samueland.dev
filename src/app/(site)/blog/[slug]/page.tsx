import { getAllPostSlugs, getPostBySlug } from '@/lib/posts'
import { stringToDateString } from "@/lib"
import { MDXRemote } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'
import ComponentPageOutline from '../../../../../components/ComponentPageOutline'

interface BlogPostParams {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs()
  return slugs.map(slug => ({ slug }))
}

export default async function BlogPostPage({ params }: BlogPostParams) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return notFound()

  return (
    <article>
      <ComponentPageOutline
        title={post.metadata.title}
        subtitle={`${stringToDateString(post.metadata.date)}${post.metadata.updateDate ? `, last updated ${stringToDateString(post.metadata.updateDate)}` : ''}`}
        returnLink={{ to: '/blog', label: 'See other posts'}}
      >
        <MDXRemote source={post.content} />
      </ ComponentPageOutline>
    </article>
  )
}
