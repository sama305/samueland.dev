import Link from "next/link"

export default function Games() {
  const gameList: Array<{
    title: string,
    name: string,
    date?: string,
    notes?: string
  }> = [
    {
      title: "Dropper",
      name: "dropper",
      date: "February 2025",
      notes: "simple little platformer"
    },
    {
      title: "Bucket-Ball",
      name: "bucketball",
      date: "2024",
      notes: "basketball-themed sports party game"
    },
  ]

  const experimentsList: Array<{
    title: string,
    name: string,
    date?: string,
    notes?: string
  }> = [
    {
      title: "Falling Sand",
      name: "fallingsand",
      date: "April 2024",
      notes: "pixel-perfect physics sandbox"
    },
    {
      title: "V-Point",
      name: "vpoint",
      notes: "experimental art program"
    },
    {
      title: "PICO-Craft",
      name: "picocraft",
      notes: "mine and build in a 2D sandbox"
    },
    {
      title: "Ballpit",
      name: "ballpit",
      notes: "play with colorful physics balls"
    },
    {
      title: "Spaceship",
      name: "spaceship",
      notes: "infinite space flight (hint: hold X)"
    },
    {
      title: "Verlet Chain",
      name: "verlet",
      notes: "showcase of verlet integration"
    },
    {
      title: "Fire",
      name: "fire",
      notes: "literally just a fire simulator"
    },
  ]

  return (
    <div>
      <p>According to its <Link href="https://www.lexaloffle.com/pico-8.php">website</Link>, "PICO-8 is a fantasy console for making, sharing and playing tiny games and other computer programs." I've been using PICO-8 for over 5 years, and in that time I've made quite a few games. Most of them have been lost or only exist on my local machine, but below is a selection of games I've made over the years which I felt were interesting enough to showcase here.</p>
      <p>As a sidenote, if you're trying to learn how to program, I'd suggest taking a look at PICO-8. It's simple, lightweight, and most of all (especially for newbies), it's fun. You can try a free, online demo <Link href="https://www.pico-8-edu.com/">here</Link>. I hope you enjoy it as much as I do.</p>
      <h3>Games</h3>
      <ul>
        {gameList.map(({ title, name, date, notes }) => (
          <li key={name}>
            <span><Link href={`/game/${name}`}>{title}</Link></span>
            {notes && (
              <span>, {notes}</span>
            )}
            {date && (
              <span>{" "}({date})</span>
            )}
          </li>
        ))}
      </ul>
      <br/ >
      <h3>Experiments</h3>
      <ul>
        {experimentsList.map(({ title, name, date, notes }) => (
          <li key={name}>
            <span><Link href={`/game/${name}`}>{title}</Link></span>
            {notes && (
              <span>, {notes}</span>
            )}
            {date && (
              <span>{" "}({date})</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
