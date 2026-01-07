import { MDXRemote } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'
import { getAllPoemSlugs, getPoemBySlug } from '@/lib/poems'
import ComponentPageOutline from '../../../../../components/ComponentPageOutline'

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
    <article>
      <ComponentPageOutline
        title={poem.metadata.title}
        subtitle={poem.metadata.date ? `${poem.metadata.date}` : undefined}
        returnLink={{ to: '/otherworks/poetry', label: 'See other poems'}}
      >
        <MDXRemote source={poem.content} />
      </ComponentPageOutline>
    </article>
  )
}
