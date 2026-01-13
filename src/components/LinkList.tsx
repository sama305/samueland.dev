import { LinkListEntry } from "@/lib/types"
import SamLink from "./SamLink"

interface LinkListProps {
  links: Array<LinkListEntry>
}

export default function LinkList({ links }: LinkListProps) {
  return (
    <ul>
      {links.map(({ title, subtitle, to }) => (
        <li key={to}>
          <span><SamLink href={to}>{title}</SamLink>{subtitle ? subtitle : ''}</span>
        </li>
      ))}
    </ul>
  )
}
