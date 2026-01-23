import H2 from "@/components/H2"
import H3 from "@/components/H3"
import LibraryPage from "@/components/LibraryPage"
import { getAllSongs } from "@/lib/music"
import { libraryBaseUrl } from "@/lib/navlists"
import { DatedLinkListEntry } from "@/lib/types"
import DatedLinkList from "@/components/DatedLinkList"

export default function Songs() {
  const songs: Array<DatedLinkListEntry> = getAllSongs().map(({ metadata, slug }) => ({
    title: metadata.title,
    to: `${libraryBaseUrl}/music/songs/${slug}`,
    date: metadata.date
  }))

  return (
    <LibraryPage title="My songs" subtitle="Bread and butter.">
      <article>
        <p>My biggest hobby by far is <strong>writing my own songs</strong>. Once I started doing it consistently, all other forms of writing more or less faded into the background and songwriting became my obsession. I don&#x27;t claim to be a master at songwriting, but it is my personal greatest talent.</p>
        <H2>List of songs</H2>
        <H3>Songs with lyrics</H3>
        <p>Note that, for many of these songs, the chords are only shown the first time a section appears. This is for the sake of readability; unless otherwise stated, subsequent instances of each section have the same chords. The date on the left reflects when it was first <em>created</em>, though many were updated later on.</p>
        <div>
          <DatedLinkList by="month" h="4" links={songs} />
        </div>
        <H3>Instrumental songs</H3>
        <p>I have a few of these, but until I figure out how I want to host my music on this site, this unfortunately will be empty. Check back soon!</p>
      </article>
    </LibraryPage>
  )
}
