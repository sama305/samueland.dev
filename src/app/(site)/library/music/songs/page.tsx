import H2 from "@/components/H2"
import H3 from "@/components/H3"
import LibraryPage from "@/components/LibraryPage"
import { getAllSongs } from "@/lib/music"
import { libraryBaseUrl } from "@/lib/navlists"
import { DatedLinkListEntry } from "@/lib/types"
import DatedLinkList from "@/components/DatedLinkList"


/*
 * TODO
 *
 * Songs missing from list:
 * - Moby Dick (Jan or Mar 2025)
 * - Valentine (Feb 2025)
 * - Please, Please, Please (Jan 2025)
 * - Have You Seen the River (May 2023)
 * - Lockjaw John (Dec 2022)
 * - Growing Our Love (Jun 2022)
 * - Miss You (May 2025)
 * - St. Augustine (May 2025)
 * - Cobblestone (May 2025)
 * - Panama (May 2025)
 * - War (Sep 2025)
 * - Everybody's Gotta Go to School (Sep 2025)
 * - 10 Years (Sep 2025)
 * - Somebody New (Sep 2025)
 * - Queen (Oct 2025)
 * - Whitecollar Blues (Oct 2025)
 * - Signs of You (Nov 2025)
 * - Under Sea, Under Stone (Nov 2025)
 * - Blazing Blue (Nov 2025)
 * - Love Me Soon (Dec 2025)
 * - I Know What You're Dreaming Of (Dec 2025)
 * - From Your Light (Dec 2025)
 * - The Fool w/ Nick (Dec 2025)
 * - Miss America w/ Nick (Dec 2025)
 *
 * Songs missing chords:
 * - Earthlings
 * - Pagans of Tolo
 *
 * Unfinished songs:
 * - Circles (May 2025)
 * - No Fear/Ants (May 2025)
 * - The Man with the Cigar (Sep 2025)
 * - The Saloon (Sep 2025)
 * - Do You Hear Me (Oct 2025)
 * - Prince of the Dead (Oct 2025)
 * - Tin-Pan Times (Oct 2025)
 * - I Know, I Know (Dec 2025)
 * - Before November (Nov 2025)
 * - New Orleans (Jan 2026)
 * - Following the Sunshine
 */

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
