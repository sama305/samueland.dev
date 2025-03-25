import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const poemsDirectory = path.join(process.cwd(), 'poems')

export interface PoemsMetadata {
  title: string
  author: string,
  date?: string
}

export interface Poem {
  slug: string
  metadata: PoemsMetadata
  content: string
}

export function getAllPoemSlugs(): string[] {
  return fs.readdirSync(poemsDirectory)
    .filter(file => file.endsWith('.mdx'))
    .map(file => file.replace(/\.mdx$/, ''))
}

export function getPoemBySlug(slug: string): Poem {
  const fullPath = path.join(poemsDirectory, `${slug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const { data, content } = matter(fileContents)

  return {
    slug,
    metadata: data as PoemsMetadata,
    content
  }
}

export function getAllPoems(): Poem[] {
  const slugs = getAllPoemSlugs()
  return slugs
    .map(slug => getPoemBySlug(slug))
}
