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
      date: "Feb 2025",
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
      date: "Apr 2024",
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
      <p>According to its <Link href="https://www.lexaloffle.com/pico-8.php">website</Link>, "PICO-8 is a fantasy console for making, sharing and playing tiny games and other computer programs." I've been using PICO-8 for over 5 years, and in that time I've made quite a few games.</p>
      <p>Most of the games I've made only exist on my local machine, but below are a few games I've made over the years which I felt were interesting enough to showcase here. To play these games, simply click on its name and you can jump right in. Note that some of these games may require a mouse and thus may not work on mobile.</p>
      <p>Lastly, I'd be remiss to mention that if you're trying to learn how to program, take a look at PICO-8. It's simple and lightweight, and most importantly (especially for newbies), it's a lot of fun. You can try a free online demo for PICO-8 <Link href="https://www.pico-8-edu.com/">here</Link>.</p>
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
