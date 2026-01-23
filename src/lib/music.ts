import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const songsDirectory = path.join(process.cwd(), 'songs')

export interface SongMetadata {
  title: string
  date: string
  updateDate?: string
}

export interface Song {
  slug: string
  metadata: SongMetadata
  content: string
}

export function getAllSongSlugs(): string[] {
  return fs.readdirSync(songsDirectory)
    .filter(file => file.endsWith('.mdx'))
    .map(file => file.replace(/\.mdx$/, ''))
}

export function getSongBySlug(slug: string): Song {
  const fullPath = path.join(songsDirectory, `${slug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const { data, content } = matter(fileContents)

  return {
    slug,
    metadata: data as SongMetadata,
    content
  }
}

export function getAllSongs(): Song[] {
  const slugs = getAllSongSlugs()
  return slugs
    .map(slug => getSongBySlug(slug))
    .sort((a, b) => new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime())
}
