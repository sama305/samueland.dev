import LinkList from "../../../../../components/LinkList"
import { experimentsList, gameList } from "@/lib/navlists"

export default function Games() {

  return (
    <article>
      <h2>PICO-8</h2>
      <p><strong><a href="https://www.lexaloffle.com/pico-8.php">PICO-8</a></strong> is a fantasy console by Lexaloffle Games which allows you to easily make and share tiny games and programs.</p>
      <p>In the 6 years I have been using PICO-8 (as of 2026), I've made a bunch of little games and experiments. Below is a list of those which are <i>finished</i>. </p>
      <div>
        <h2>Games</h2>
        <LinkList links={gameList}/>
      </div>
      <div>
        <h2>Experiments</h2>
        <LinkList links={experimentsList}/>
      </div>
    </article>
  )
}
