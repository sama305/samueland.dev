import { MDXRemote } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'
import LibraryPage from '@/components/LibraryPage'
import { libraryBaseUrl, mdxComponents } from '@/lib/navlists'
import { getAllSongSlugs, getSongBySlug } from "@/lib/music"

interface SongParams {
  params: Promise<{
    slug: string
  }>
}

export function generateStaticParams() {
  const slugs = getAllSongSlugs()
  return slugs.map(slug => ({ slug }))
}

export default async function SongPage({ params }: SongParams) {
  const { slug } = await params
  const song = getSongBySlug(slug)
  if (!song) return notFound()

  return (
    <LibraryPage
      title={song.metadata.title}
      subtitle={`Conceived ${song.metadata.date}${song.metadata.updateDate ? ", last updated " + song.metadata.updateDate : ""}`}
      returnLink={{ to: `${libraryBaseUrl}/music/songs#songs-with-lyrics`, label: "&larr; Other songs" }}
    >
      <article>
        <MDXRemote source={song.content} components={mdxComponents}/>
      </article>
    </ LibraryPage>
  )
}
