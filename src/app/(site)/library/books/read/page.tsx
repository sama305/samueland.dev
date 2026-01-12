import { books } from "@/lib/navlists";
import DatedLinkList from "@/components/DatedLinkList";
import LibraryPage from "@/components/LibraryPage";

export default function ReadBooks() {
  return (
    <LibraryPage subtitle="Not as much as I want and more than I expect.">
      <article>
        <p>It seems that my <strong>reading</strong> speed has peaked at around 20 books a year, give or take. I hope in 2026, I can read perhaps 30 books, though I know that is a difficult feat.</p>
        <p>Anyways, below is a list of all the books I have read since 2022, grouped by the year read (books read later in the year are nearer to the top).</p>
        <hr />
        <div>
          <DatedLinkList
            links={books.map(({ title, author, yearPublished, dateRead, link }) => ({
              title: `<i>${title}</i>`,
              subtitle: ` by ${author} (${yearPublished})`,
              date: dateRead,
              to: link
            }))}
          />
        </div>
      </article>
    </LibraryPage>
  )  
}

