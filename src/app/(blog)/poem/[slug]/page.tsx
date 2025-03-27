import { MDXRemote } from 'next-mdx-remote/rsc'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getAllPoemSlugs, getPoemBySlug } from '@/lib/poems'

interface PoemParams {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const slugs = getAllPoemSlugs()
  return slugs.map(slug => ({ slug }))
}

export default async function PoemPage({ params }: PoemParams) {
  const { slug } = await params
  const poem = getPoemBySlug(slug)
  if (!poem) return notFound()

  return (
    <div>
      <div>
        <div>
          <h1 style={{ lineHeight: '2rem' }}>{poem.metadata.title}</h1>
          {poem.metadata.author && <p>By {poem.metadata.author}</p>}
        </div>
        <div style={{ marginTop: '3rem'}}>
          <MDXRemote source={poem.content} />
        </div>
        <div style={{ marginTop: '3rem'}}>
          <Link className="right" href={"/misc/poetry"}>&larr; See other poems</Link>
        </div>
      </div>
    </div>
  )
}
