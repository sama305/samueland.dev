import H2 from "@/components/H2";

import LibraryPage from "@/components/LibraryPage"
import LinkList from "@/components/LinkList"
import SamLink from "@/components/SamLink"
import { experimentsList, gameList } from "@/lib/navlists"

export default function Pico8() {
  return (
    <LibraryPage title="PICO-8" subtitle="A retro, tiny fantasy console.">
      <article>
        <p><strong><SamLink href="https://www.lexaloffle.com/pico-8.php">PICO-8</SamLink></strong> is a fantasy console by Lexaloffle Games which allows you to easily make and share tiny games and programs.</p>
        <p>In the 6 years I have been using PICO-8 (as of 2026), I've made a bunch of little games and experiments. Below is a list of those which are <i>finished</i>. </p>
        <div>
          <H2>Games</H2>
          <LinkList links={gameList}/>
        </div>
        <div>
          <H2>Experiments</H2>
          <LinkList links={experimentsList}/>
        </div>
      </article>
    </LibraryPage>
  )
}
