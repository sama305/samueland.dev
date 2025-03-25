import { LinkListEntry } from "@/lib/types"
import Link from "next/link"

interface LinkListProps {
  links: Array<LinkListEntry>
}

export default function LinkList({ links }: LinkListProps) {
  return (
    <ul>
      {links.map(({ title, subtitle, to }) => (
        <li key={to}>
          <span><Link href={to}>{title}</Link>{subtitle && `, ${subtitle}`}</span>
        </li>
      ))}
    </ul>
  )
}
