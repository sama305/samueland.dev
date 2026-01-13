import { getAllPoems } from "@/lib/poems"
import { DatedLinkListEntry } from "@/lib/types"
import LibraryPage from "@/components/LibraryPage"
import { libraryBaseUrl } from "@/lib/navlists"
import SamLink from "@/components/SamLink"

export default function Poetry() {
  const poems: Array<DatedLinkListEntry> = getAllPoems().map(({ metadata, slug }) => ({
    title: metadata.title,
    to: `/poetry/${slug}`,
    date: metadata.date
  }))

  return (
    <LibraryPage title="Poetry" subtitle="The mother of literacy.">
      <article>
        <p><strong>Poetry</strong> is an ancient art of language; in it, language’s rhythmic and aesthetic qualities are used to evoke unnamed emotions and subtle ideas. It has a long history of use by humans; so long, in fact, that it may even predate literacy.</p>
        <p>In my spare time, I enjoy writing poems. My poems are quite amateur, but I enjoy the process of writing enough to ignore this. In my experience, writing poetry is among the most accessible, simple, and natural forms of expression. No need for fancy tools or extensive knowledge; a piece of paper and a pen will suffice. In some cases even those may not be necessary.</p>
        <p>The important thing is to allow yourself to write freely. Once you find your groove, words will spill from your mind like a waterfall and you’ll read over your hard work with pride. I find it very rewarding.</p>


        <h2>Assorted poems</h2>
        <p>All of these were written by me. In the future, I might try to keep a list of poems by others I've enjoyed.</p>
        <div>
          {poems.map(({ title, to, date }) => (
            <div className="blogEntry" key={title}>
              <div style={{ minWidth: "5.6rem" }}>{date}</div>
              <SamLink href={`${libraryBaseUrl}/${to}`}>{title}</SamLink>
            </div>
          ))}
        </div>
      </article>
    </LibraryPage>
  )
}
