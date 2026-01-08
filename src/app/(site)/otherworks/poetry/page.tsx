import { getAllPoems } from "@/lib/poems"
import { DatedLinkListEntry } from "@/lib/types"
import Link from "next/link"

export default function Poetry() {
  const poems: Array<DatedLinkListEntry> = getAllPoems().map(({ metadata, slug }) => ({
    title: metadata.title,
    to: `/poem/${slug}`,
    date: metadata.date
  }))

  return (
    <article>
      <h2>Poetry</h2>
      <p><strong>Poetry</strong> is an ancient art of language; in it, language’s rhythmic and aesthetic qualities are used to evoke unnamed emotions and subtle ideas. It has a long history of use by humans; so long, in fact, that it may even predate literacy.</p>
      <p>In my spare time, I enjoy writing poems. My poems are quite amateur, but I enjoy the process of writing enough to ignore this. In my experience, writing poetry is among the most accessible, simple, and natural forms of expression. No need for fancy tools or extensive knowledge; a piece of paper and a pen will suffice. In some cases even those may not be necessary.</p>
      <p>The important thing is to allow yourself to write freely. Once you find your groove, words will spill from your mind like a waterfall and you’ll read over your hard work with pride. I find it very rewarding.</p>


      <h3>Some of my poems</h3>
      <div>
        {poems.map(({ title, to, date }) => (
          <div className="blogEntry" key={title}>
            <div style={{ minWidth: "5.6rem" }}>{date}</div>
            <Link href={to}>{title}</Link>
          </div>
        ))}
      </div>
    </article>
  )
}
