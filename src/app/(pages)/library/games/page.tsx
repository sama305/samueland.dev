import H2 from "@/components/H2";
import H3 from "@/components/H3";

import LibraryPage from "@/components/LibraryPage"
import SamLink from "@/components/SamLink"

export default function Games() {
  return (
    <LibraryPage title="Games" subtitle="The fruit of leisure.">
      <article>
        <p>Like every other living thing, I enjoy playing a variety of <strong>games</strong>. I like to play sports, board games, and, of course, <SamLink href="/library/games/videogames">video games</SamLink>.</p>
        <H2>Board games</H2>
        <H3>Settlers of Catan</H3>
        <p>About 3 or 4 months ago, on a trip in Tallahassee, I discovered the German board game <em>Settlers of Catan</em>, usually simply called <em>Catan</em>. Coming from traditional American board games like <em>Monopoly</em> and <em>Jenga</em>, <em>Catan</em> greatly changed the way I looked at board games.</p>
        <p>Unlike <em>Monopoly</em> or <em>Jenga</em>, which rely on creating fun from the interactions between players, <em>Catan</em> is a great game first and foremost which intends to maximize the individual&#x27;s fun rather than rely on the group to create it. The result is that every player is having fun and strategizing, without reducing the game to pure luck.</p>
        <p>Since players aren&#x27;t eliminated and there is a clear goal (i.e. to reach 10 victory points), the game usually doesn&#x27;t overstay its welcome (though in my experience, games with new players can sometimes be ~3 hours).</p>
        <p>My favorite part of <em>Catan</em> is showing it to newcomers used to traditional American board games and watching the sparks in their eyes fly as they begin to understand that this is unlike any board game they&#x27;ve played before.</p>
        <H3>Poker</H3>
        <p>While it may not technically be a board game <em>per se</em>, poker is one of my most frequently played tabletop games. I discovered it while on a trip in Gatlinburg and honed my skills during college.</p>
        <p>I&#x27;m not amazing at poker, but I have come to understand the rules and tactics well enough to enjoy a good poker night.</p>
    </article>
    </LibraryPage>
  )
}
