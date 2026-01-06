import Link from "next/link"
import LinkList from "../../../../../components/LinkList"
import { experimentsList, gameList } from "@/lib/navlists"

export default function Games() {

  return (
    <article>
      <div>
        <div>
          <h2>Games</h2>
          <LinkList links={gameList}/>
        </div>
        <div>
          <h2>Experiments</h2>
          <LinkList links={experimentsList}/>
        </div>
      </div>

      <p>As of 2025, I've been using PICO-8 to make tiny coding experiments for over 5 years, and in that time I've accumulated quite a few cartridges. Context: PICO-8's <Link href="https://www.lexaloffle.com/pico-8.php">website</Link> describes itself as "a fantasy console for making, sharing and playing tiny games and other computer programs." While this is sufficient enough description, I don't feel it fully captures the true oneness of PICO-8 next to other game-making platforms. In practice, it is so much more.</p>
      <p>Most of the games I've made only exist on my local machine, but below are a few games which I felt were interesting enough to showcase here. To play these games, simply click on its name, and then click the play button that should appear in the center of the window. Note that some of these games may require a mouse and thus may or may not work on mobile.</p>
      <p>Lastly, I'd be remiss to mention that if you're trying to learn how to program, you should take a look at PICO-8. It's simple and lightweight, and most importantly (especially for newbies), it's a lot of fun. You can try a free online demo for PICO-8 <Link href="https://www.pico-8-edu.com/">here</Link>.</p>
    </article>
  )
}
