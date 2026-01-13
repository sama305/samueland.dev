import LibraryPage from "@/components/LibraryPage";
import SamLink from "@/components/SamLink";

export default function VideoGames() {
  return (
    <LibraryPage
      title="Video Games"
      subtitle="Artful distraction magnets."
    >
      <article>
        <p>I have been playing <strong>video games</strong> since I was a child and still do to this day. Though I don't play as much as I used to, I would consider it one of my favorite pasttimes.</p>
        <h2>Game development</h2>
        <p>I would probably consider video games to be the origin of my interest in computers and software; it follows then that I have spent a great deal of time, especially in my youth, making my <em>own</em> video games.</p>
        <p>I've used different engines in the past, but most of my games were made in Unity, Godot, and <SamLink href="/library/games/videogames/pico8">PICO-8</SamLink>. While I made many demos, I rarely would complete a game; I preferred the experimentation and interactivity much more than the actual game dev part. As a result, my list of completed games is sparse&mdash;if it even exists at all.</p>
      </article>
    </LibraryPage>
  )
}
