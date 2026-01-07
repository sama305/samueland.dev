import { LinkListEntry } from "./types"

/* Main navbar */
export const mainNavbarLinks: Array<LinkListEntry> = [
  {
    title: "Bio",
    to: "/"
  },
  {
    title: "Portfolio",
    to: "/portfolio"
  },
  {
    title: "Blog",
    to: "/blog"
  },
  {
    title: "Other works",
    to: "/otherworks"
  }
]


/* "My Stuff" navbar */
export const miscLinks: Array<LinkListEntry> = [
  {
    title: "PICO-8",
    to: "/otherworks/games"
  },
  {
    title: "Poetry",
    to: "/otherworks/poetry"
  },
]


/* Game page */
export const gameList: Array<LinkListEntry> = [
  {
    title: "Dropper",
    to: "/game/dropper",
    subtitle: ", simple little platformer (Feb 2025)"
  },
  {
    title: "Bucket-Ball",
    to: "/game/bucketball",
    subtitle: ", basketball-themed sports party game (2024)"
  },
]

export const experimentsList: Array<LinkListEntry> = [
  {
    title: "Falling Sand",
    to: "/game/fallingsand",
    subtitle: ", pixel-perfect physics sandbox (Apr 2024)"
  },
  {
    title: "V-Point",
    to: "/game/vpoint",
    subtitle: ", experimental art program"
  },
  {
    title: "PICO-Craft",
    to: "/game/picocraft",
    subtitle: ", mine and build in a 2D sandbox"
  },
  {
    title: "Ballpit",
    to: "/game/ballpit",
    subtitle: ", play with colorful physics balls"
  },
  {
    title: "Spaceship",
    to: "/game/spaceship",
    subtitle: ", infinite space flight (hint: hold X)"
  },
  {
    title: "Verlet Chain",
    to: "/game/verlet",
    subtitle: ", showcase of verlet integration"
  },
  {
    title: "Fire",
    to: "/game/fire",
    subtitle: ", literally just a fire simulator"
  },
]

