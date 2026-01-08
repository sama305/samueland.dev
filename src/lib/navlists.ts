import { LinkListEntry } from "./types"

export const libraryBaseUrl = "/library"

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
    title: "The Library",
    to: libraryBaseUrl 
  }
]

interface Map {
  [key: string]: string
}

export const libraryHomeName = "The Library"

export const libraryDict: Map = {
  [libraryHomeName]: "", // ! don't move this
  "Books": `/books`,
  "Poetry": `/poetry`,
  "PICO-8": `/games`,
  // "Music": `/music`,
  // "Philosophy": `/philosophy`,
  // "Nature": `/nature`,
  // "Cooking": `/cooking`,
  // "Gaming": `/gaming`,
  // "Coding": `/coding`,
  // "Writing": `/writing`
}


/* Game page */
export const gameList: Array<LinkListEntry> = [
  {
    title: "Dropper",
    to: `${libraryBaseUrl}/games/dropper?trail=PICO-8`,
    subtitle: ", simple little platformer (Feb 2025)"
  },
  {
    title: "Bucket-Ball",
    to: `${libraryBaseUrl}/games/bucketball?trail=PICO-8`,
    subtitle: ", basketball-themed sports party game (2024)"
  },
]

export const experimentsList: Array<LinkListEntry> = [
  {
    title: "Falling Sand",
    to: `${libraryBaseUrl}/games/fallingsand?trail=PICO-8`,
    subtitle: ", pixel-perfect physics sandbox (Apr 2024)"
  },
  {
    title: "V-Point",
    to: `${libraryBaseUrl}/games/vpoint?trail=PICO-8`,
    subtitle: ", experimental art program"
  },
  {
    title: "PICO-Craft",
    to: `${libraryBaseUrl}/games/picocraft?trail=PICO-8`,
    subtitle: ", mine and build in a 2D sandbox"
  },
  {
    title: "Ballpit",
    to: `${libraryBaseUrl}/games/ballpit?trail=PICO-8`,
    subtitle: ", play with colorful physics balls"
  },
  {
    title: "Spaceship",
    to: `${libraryBaseUrl}/games/spaceship?trail=PICO-8`,
    subtitle: ", infinite space flight (hint: hold X)"
  },
  {
    title: "Verlet Chain",
    to: `${libraryBaseUrl}/games/verlet?trail=PICO-8`,
    subtitle: ", showcase of verlet integration"
  },
  {
    title: "Fire",
    to: `${libraryBaseUrl}/games/fire?trail=PICO-8`,
    subtitle: ", literally just a fire simulator"
  },
]
