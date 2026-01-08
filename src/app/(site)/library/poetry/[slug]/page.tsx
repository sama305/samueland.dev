import { MDXRemote } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'
import { getAllPoemSlugs, getPoemBySlug } from '@/lib/poems'
import LibraryPage from '../../../../../../components/LibraryPage'
import { Suspense } from 'react'

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
    <Suspense>
      <LibraryPage
        title={poem.metadata.title}
        subtitle={poem.metadata.date ? `${poem.metadata.date}` : undefined}
      >
        <article>
          <MDXRemote source={poem.content} />
        </article>
      </LibraryPage>
    </Suspense>
  )
}
