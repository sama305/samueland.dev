import { getAllPostSlugs, getPostBySlug, stringToDateString } from '@/lib'
import { useMDXComponents } from '@/mdx-components'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Link from 'next/link'
import { notFound } from 'next/navigation'

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
    <div>
      <div>
        <div>
          <h1 className='blogTitle'>{post.metadata.title}</h1>
          <p>Posted on {stringToDateString(post.metadata.date)}{post.metadata.updateDate ? `, last updated ${stringToDateString(post.metadata.updateDate)}` : ''}</p>
        </div>
        <div style={{ marginTop: '3rem'}}>
          <MDXRemote components={useMDXComponents({})} source={post.content} />
        </div>
        <div style={{ marginTop: '3rem'}}>
          <Link className="right" href={"/blog"}>&larr; See other posts</Link>
        </div>
      </div>
    </div>
  )
}
