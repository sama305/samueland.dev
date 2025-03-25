import Link from "next/link"

export default function Games() {
  const gameList: Array<{
    title: string,
    name: string,
    date?: string
  }> = [
    {
      title: "Dropper",
      name: "dropper",
      date: "February 2025"
    }
  ]

  return (
    <div>
      <p>According to its <Link href="https://www.lexaloffle.com/pico-8.php">website</Link>, "PICO-8 is a fantasy console for making, sharing and playing tiny games and other computer programs." I've been using PICO-8 for over 5 years, and in that time I've made quite a few games. Most of them have been lost or only exist on my local machine, but below is a selection of games I've made over the years which I felt were interesting enough to showcase here.</p>
      <p>As a sidenote, if you're trying to learn how to program, I'd suggest taking a look at PICO-8. It's simple, lightweight, and most of all (especially for newbies), it's fun. You can try a free, online demo <Link href="https://www.pico-8-edu.com/">here</Link>. I hope you enjoy it as much as I do.</p>
      <ul>
        {gameList.map(({ title, name, date }) => (
          <li key={name}>
            <span><Link href={`/game/${name}`}>{title}</Link></span>
            {date && (
              <span>{" "}({date})</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
