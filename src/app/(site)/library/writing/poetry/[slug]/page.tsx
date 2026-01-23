import { MDXRemote } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'
import { getAllPoemSlugs, getPoemBySlug } from '@/lib/poems'
import LibraryPage from '@/components/LibraryPage'
import { libraryBaseUrl, mdxComponents } from '@/lib/navlists'

interface PoemParams {
  params: Promise<{
    slug: string
  }>
}

export function generateStaticParams() {
  const slugs = getAllPoemSlugs()
  return slugs.map(slug => ({ slug }))
}

export default async function PoemPage({ params }: PoemParams) {
  const { slug } = await params
  const poem = getPoemBySlug(slug)
  if (!poem) return notFound()

  return (
    <LibraryPage
      title={poem.metadata.title}
      subtitle={poem.metadata.date ? `${poem.metadata.date}` : undefined}
      returnLink={{ to: `${libraryBaseUrl}/writing/poetry`, label: "&larr; Other poems" }}
    >
      <article>
        <MDXRemote source={poem.content} components={mdxComponents}/>
      </article>
    </LibraryPage>
  )
}
