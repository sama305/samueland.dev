import LibraryPage from "../../../../../components/LibraryPage"
import DatedLinkList from "../../../../../components/DatedLinkList"
import { books } from "@/lib/navlists"
import { DefaultPageParams } from "@/lib/types"

export default async function Books({ searchParams }: DefaultPageParams) {
  const paramsMap = await searchParams

  return (
    <LibraryPage
      title="Books"
      subtitle={`The tomes of knowledge.`}
      paramsMap={paramsMap}
    >
      <article>
        <p>A <strong>book</strong> is a collection of words (usually binded between two covers or packaged digitally) which attempts to express an idea or story. As opposed to papers and pamphlets, which hold a small amount of words, books tend to have words numbering in the tens if not hundreds of thousands.</p>
        <p>Broadly, a book can be fiction (of <i>unreality</i>) or non-fiction (of <i>reality</i>). They are written by one or more authors and allow humans to capture and transmit information more efficiently and deeply than any other medium.</p>
        <hr />
        <p>Since late 2022, I have been reading more and more books every year. I try to keep track of every book I read on Goodreads, but I tend to forget and end up with inaccurate stats; I would guess that I tend to read about 20 books a year, on average.</p>
        <p>I gravitate towards fiction, specifically classic literature. Favorites of mine include <i>Moby Dick</i> by Herman Melville (1851), <i>Catch-22</i> by Joseph Heller (1961), and <i>Brave New World</i> by Aldruous Huxley (1932). My favorite book of all time is <i>Death Comes for the Archbishop</i> by Willa Cather (1927).</p>
        <p>Science fiction is another genre I frequent, with my favorite sci-fi author being Phillip K. Dick (he wrote <i>Man in the High Castle</i> (1962) and <i>Ubik</i> (1969), among others).</p>
        <h2>Why I read</h2>
        <p>Out of all forms of media (TV, movies, etc.), I find reading to be the most among the immersive and affecting. Because of their heightened length and detail, books bring you into their worlds for days, weeks, and even months at a time. Movies can be very affecting, for sure, but often for a short time; books can stay with you for years.</p>
        <p>When I read, I feel I am learning about someone, an idea or sometimes even myself; in all cases, I'm interacting with a deeper part of my brain and stimulating my imagination. In a practical sense, this has improved my thinking skills, which extends into my writing and speaking. Both of these have improved noticeably since I began reading (especially the former).</p>
        <h2>Book list</h2>
        <div>
          <DatedLinkList
            links={books.map(({ title, author, yearPublished, dateRead }) => ({
              title: `<i>${title}</i>`,
              subtitle: ` by ${author} (${yearPublished})`,
              date: dateRead,
            }))}
          />
        </div>
      </article>
    </LibraryPage>
  )
}
