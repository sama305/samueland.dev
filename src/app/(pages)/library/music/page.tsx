import H2 from "@/components/H2";
import H3 from "@/components/H3";

import LibraryPage from "@/components/LibraryPage";
import SamLink from "@/components/SamLink";

export default function Music() {
  return (
    <LibraryPage title="Music" subtitle="The universal language.">
      <article>
        <p>Out of every art, <strong>music</strong> may be the most universal. Unlike most art forms, which are restricted to humans (such as <SamLink href="/library/writing">writing</SamLink>) or require deliberate practice (like painting), music is an art practiced not just by humans, not just by the animal kingdom, not even just practiced by living things, but potentially <em>everything in the universe</em>.</p>
        <p>Though it is important to clarify that <em>sound</em> and by extension <em>music</em> are the result of our ears receiving <SamLink href="https://en.wikipedia.org/wiki/Acoustic_wave">acoustic waves</SamLink> and our brains perceiving it, so though all things <em>produce</em> music, not all things (not even all animals) necessarily <em>consume</em> music. But that all things are artists, to me, remains an interesting fact.</p>

        <H2>Songwriting</H2>

        <p>One of my main hobbies these days is <SamLink href="/library/music/songs">songwriting</SamLink>: crafting lyrics and tunes and combining them to create full songs. I have always played guitar and piano and enjoyed making small tunes, but I only started songwriting perhaps one year ago.</p>
        <p>Nervousness about my voice, about my lyrics, and about the difficulty of making music always made me avoid it; but once I  sat down, strummed some chords and wrote a few lyrics to go with them, I realized my fear was unfounded and it wasn't as scary as I had thought.</p>
        <p>Nowadays, I try to write all the time: in the morning, when I get back from work, and especially on the weekends. I've probably written over 50 songs, a few of which I've actually managed to record and mix.</p>
        <p>For the record, I am not a gear junkie: I use GarageBand as my DAW, a Blue Yeti for vocals and acoustic guitar, a small, unromantic $50 audio interface for electric guitar.</p>

        <H3>Influences</H3>

        <p>Although <SamLink href="/library/music/taste">I listen to a great deal of music</SamLink>, my songwriting is inspired by a few artists in particular.</p>
        <p>The structure of my songs owes a great deal to the Beatles. Their verse, chorus, verse, chorus, bridge, chorus framework just works so well and I find myself using it a lot.</p>
        <p>The chords I often use depend on the instrument: on guitar, I tend to follow Neil Young songs and use G, C, Am, D, Em, etc. sometimes in 12-bar blues but also just following his general sound; on piano I find myself playing like Laura Nyro, Carole King, and Todd Rundgren, which means I use a lot of major 7 chords and slash chords.</p>
        <p>Finally, for the actual lyrics I once again look towards Neil. His economical use of words and simplicity have always had a draw for me and I try my best to put my thoughts plainly and memorably, just as he does.</p>
      </article>
    </LibraryPage>
  )
}
