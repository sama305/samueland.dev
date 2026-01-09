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

export const books: Array<{
  title: string,
  author: string,
  yearPublished: string,
  dateRead: string,
}> = [
  {
    title: "Steppenwolf",
    author: "Herman Hesse",
    yearPublished: "1927",
    dateRead: "Dec 2025"
  },
  {
    title: "A Room with a View (2nd read)",
    author: "E. M. Forster",
    yearPublished: "",
    dateRead: "Nov 2025"
  },
  {
    title: "O Pioneers!",
    author: "Willa Cather",
    yearPublished: "",
    dateRead: "Nov 2025"
  },
  {
    title: "A Passage to India",
    author: "E. M. Forster",
    yearPublished: "",
    dateRead: "Nov 2025"
  },
  {
    title: "Survival in Auswitz",
    author: "Primo Levi",
    yearPublished: "",
    dateRead: "Oct 2025"
  },
  {
    title: "The Odyssey",
    author: "Homer",
    yearPublished: "",
    dateRead: "Oct 2025"
  },
  {
    title: "The Picture of Dorian Gray",
    author: "Oscar Wilde",
    yearPublished: "",
    dateRead: "Aug 2025"
  },
  {
    title: "Exile and the Kingdom",
    author: "Albert Camus",
    yearPublished: "",
    dateRead: "Jul 2025"
  },
  {
    title: "Macbeth",
    author: "William Shakespeare",
    yearPublished: "",
    dateRead: "Jun 2025"
  },
  {
    title: "Death Comes for the Archbishop",
    author: "Willa Cather",
    yearPublished: "",
    dateRead: "Jun 2025"
  },
  {
    title: "The Adventures of Tom Sawyer",
    author: "Mark Twain",
    yearPublished: "",
    dateRead: "Jun 2025"
  },
  {
    title: "Rules for a Knight",
    author: "Ethan Hawke",
    yearPublished: "",
    dateRead: "May 2025"
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    yearPublished: "",
    dateRead: "Apr 2025"
  },
  {
    title: "Writing Down the Bones",
    author: "Natalie Goldberg",
    yearPublished: "",
    dateRead: "Apr 2025"
  },
  {
    title: "The Stranger",
    author: "Albert Camus",
    yearPublished: "",
    dateRead: "Apr 2025"
  },
  {
    title: "Leaves of Grass",
    author: "Walt Whitman",
    yearPublished: "1855",
    dateRead: "Apr 2025"
  },
  {
    title: "1984",
    author: "George Orwell",
    yearPublished: "1855",
    dateRead: "Apr 2025"
  },
  {
    title: "The Man in the High Castle",
    author: "Philip K. Dick",
    yearPublished: "1962",
    dateRead: "Mar 2025"
  },
  {
    title: "A Summons to Memphis",
    author: "Peter Taylor",
    yearPublished: "",
    dateRead: "Mar 2025"
  },
  {
    title: "Brave New World",
    author: "Aldous Huxley",
    yearPublished: "",
    dateRead: "Feb 2025"
  },
  {
    title: "Neuromancer",
    author: "William Gibson",
    yearPublished: "",
    dateRead: "Jan 2025"
  },
  {
    title: "Do Androids Dream of Electric Sheep?",
    author: "Philip K. Dick",
    yearPublished: "",
    dateRead: "Jan 2025"
  },
  {
    title: "Martyr!",
    author: "Kaveh Akbar",
    yearPublished: "",
    dateRead: "Jan 2025"
  },
  {
    title: "Slouching Towards Bethlehem",
    author: "Joan Didion",
    yearPublished: "",
    dateRead: "Dec 2024"
  },
  {
    title: "Maus II",
    author: "Art Spiegelman",
    yearPublished: "",
    dateRead: "Nov 2024"
  },
  {
    title: "Heart of Darkness",
    author: "Joseph Conrad",
    yearPublished: "",
    dateRead: "Nov 2024"
  },
  {
    title: "The Duel",
    author: "Joseph Conrad",
    yearPublished: "",
    dateRead: "Nov 2024"
  },
  {
    title: "Pygmalion",
    author: "George Bernard Shaw",
    yearPublished: "",
    dateRead: "Oct 2024"
  },
  {
    title: "Maus I",
    author: "Art Spiegelman",
    yearPublished: "",
    dateRead: "Aug 2024"
  },
  {
    title: "State and Revolution",
    author: "Vladimir Lenin",
    yearPublished: "",
    dateRead: "Aug 2024"
  },
  {
    title: "Howl and Other Poems",
    author: "Allen Ginsberg",
    yearPublished: "",
    dateRead: "Aug 2024"
  },
  {
    title: "In the Garden of the North American Martyrs",
    author: "Tobias Wolff",
    yearPublished: "",
    dateRead: "Jul 2024"
  },
  {
    title: "The Lord of the Rings",
    author: "J. R. R. Tolkien",
    yearPublished: "",
    dateRead: "Jul 2024"
  },
  {
    title: "The Hobbit",
    author: "J. R. R. Tolkien",
    yearPublished: "",
    dateRead: "Mar 2024"
  },
  {
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    yearPublished: "",
    dateRead: "Feb 2024"
  },
  {
    title: "The Wager",
    author: "David Grann",
    yearPublished: "",
    dateRead: "Jan 2024"
  },
  {
    title: "Notes from Underground",
    author: "Fyodor Dostoevsky",
    yearPublished: "",
    dateRead: "Dec 2023"
  },
  {
    title: "The Overcoat",
    author: "Nikolai Gogol",
    yearPublished: "",
    dateRead: "Dec 2023"
  },
  {
    title: "Slaughterhouse-Five",
    author: "Kurt Vonnegut Jr.",
    yearPublished: "",
    dateRead: "Nov 2023"
  },
  {
    title: "Moby Dick",
    author: "Herman Melville",
    yearPublished: "",
    dateRead: "Nov 2023"
  },
  {
    title: "Siddhartha",
    author: "Herman Hesse",
    yearPublished: "",
    dateRead: "Oct 2023"
  },
  {
    title: "Shoe Dog",
    author: "Phil Knight",
    yearPublished: "",
    dateRead: "Oct 2023"
  },
  {
    title: "Flatland",
    author: "Edwin A. Abbott",
    yearPublished: "",
    dateRead: "Aug 2023"
  },
  {
    title: "Blood Meridian",
    author: "Cormac McCarthy",
    yearPublished: "",
    dateRead: "Aug 2023"
  },
  {
    title: "Twenty Thousand Leagues Under the Sea",
    author: "Jules Verne",
    yearPublished: "",
    dateRead: "Jun 2023"
  },
  {
    title: "The Captain's Verses",
    author: "Pablo Neruda",
    yearPublished: "",
    dateRead: "May 2023"
  },
  {
    title: "The Zombie Survival Guide",
    author: "Max Brooks",
    yearPublished: "",
    dateRead: "May 2023"
  },
  {
    title: "Catch-22",
    author: "Joseph Heller",
    yearPublished: "",
    dateRead: "May 2023"
  },
  {
    title: '"What Do You Care What People Think?"',
    author: "Richard P. Feynman",
    yearPublished: "",
    dateRead: "Mar 2023"
  },
  {
    title: "City of Thieves",
    author: "David Benioff",
    yearPublished: "",
    dateRead: "Feb 2023"
  },
  {
    title: "Trout Fishing in America",
    author: "Richard Brautigan",
    yearPublished: "",
    dateRead: "Jan 2023"
  },
  {
    title: "Walden",
    author: "Henry David Thoreau",
    yearPublished: "",
    dateRead: "Jan 2023"
  },
  {
    title: "Nature",
    author: "Ralph Waldo Emerson",
    yearPublished: "",
    dateRead: "Dec 2022"
  },
  {
    title: "Ubik",
    author: "Philip K. Dick",
    yearPublished: "",
    dateRead: "Dec 2022"
  },
  {
    title: "The Silence of the Lambs",
    author: "Thomas Harris",
    yearPublished: "",
    dateRead: "Nov 2022"
  },
  {
    title: "In Dubious Battle",
    author: "John Steinbeck",
    yearPublished: "",
    dateRead: "Oct 2022"
  },
]
