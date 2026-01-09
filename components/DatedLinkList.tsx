import { DatedLinkListEntry } from "@/lib/types"
import Link from "next/link"

interface LinkListProps {
  links: Array<DatedLinkListEntry>
}

export default function LinkList({ links }: LinkListProps) {
  const datedLinks: { [key: number]: Array<DatedLinkListEntry> } = {}

  links.forEach(l => {
    const dateYear = new Date(l.date).getFullYear()
    if (!datedLinks[dateYear]) {
      datedLinks[dateYear] = [l]
    }
    else {
      datedLinks[dateYear].push(l)
    }
  })

  return (
    <div>
      {Object.keys(datedLinks).reverse().map((k => {
        return (
          <div key={k}>
            <h3>{k}</h3>
            <ul>
            {datedLinks[parseInt(k)].map(({title, subtitle, to}) => {
              return (
                <li key={title}>
                  <span>
                    {to ? (
                      <Link href={to} dangerouslySetInnerHTML={{ __html: title }}/>
                    ) : (
                      <span dangerouslySetInnerHTML={{ __html: title }} />
                    )}
                    {subtitle ? subtitle : ''}
                  </span>
                </li>
              )
            })}
            </ul>
          </div>
        )
      }))}
    </div>
  )
}
