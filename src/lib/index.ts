import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts')
console.log(postsDirectory)

export interface PostMetadata {
  title: string
  date: string
  updateDate?: string
}

export interface Post {
  slug: string
  metadata: PostMetadata
  content: string
}

export function getAllPostSlugs(): string[] {
  return fs.readdirSync(postsDirectory)
    .filter(file => file.endsWith('.mdx'))
    .map(file => file.replace(/\.mdx$/, ''))
}

export function getPostBySlug(slug: string): Post {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const { data, content } = matter(fileContents)

  return {
    slug,
    metadata: data as PostMetadata,
    content
  }
}

export function getAllPosts(): Post[] {
  const slugs = getAllPostSlugs()
  return slugs
    .map(slug => getPostBySlug(slug))
    .sort((a, b) => new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime())
}

export function stringToDateString(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
