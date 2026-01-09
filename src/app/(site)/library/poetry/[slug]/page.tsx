import { MDXRemote } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'
import { getAllPoemSlugs, getPoemBySlug } from '@/lib/poems'
import LibraryPage from '../../../../../../components/LibraryPage'
import { DefaultPageParams } from '@/lib/types'

interface PoemParams {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const slugs = getAllPoemSlugs()
  return slugs.map(slug => ({ slug }))
}

export default async function PoemPage({ params, searchParams }: PoemParams & DefaultPageParams) {
  const { slug } = await params
  const poem = getPoemBySlug(slug)
  if (!poem) return notFound()

  const paramsMap = await searchParams

  return (
    <LibraryPage
      title={poem.metadata.title}
      subtitle={poem.metadata.date ? `${poem.metadata.date}` : undefined}
      paramsMap={paramsMap}
    >
      <article>
        <MDXRemote source={poem.content} />
      </article>
    </LibraryPage>
  )
}
