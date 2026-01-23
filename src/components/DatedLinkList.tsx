import { DatedLinkListEntry } from "@/lib/types"
import SamLink from "./SamLink"
import H2 from "./H2";
import H4 from "./H4";
import H3 from "./H3";

interface LinkListProps {
  links: Array<DatedLinkListEntry>
  by?: "month" | "year",
  h?: "2" | "3" | "4"
}

function getMonthName(monthNumber: number) {
  const date = new Date();
  date.setMonth(monthNumber - 1);

  const monthName = date.toLocaleString('default', { month: 'short' });
  
  return monthName;
}

export default function LinkList({ links, by = "year", h = "2" }: LinkListProps) {
  const datedLinks: { [key: string]: Array<DatedLinkListEntry> } = {}

  links.forEach(l => {
    let key: string = "";
    if (by == "year") {
       key = new Date(l.date).getFullYear().toString()
    }
    else if (by == "month"){
       key = getMonthName(new Date(l.date).getMonth()) +
         " " + new Date(l.date).getFullYear()
    }
    if (!datedLinks[key]) {
      datedLinks[key] = [l]
    }
    else {
      datedLinks[key].push(l)
    }
  })

  return (
    <div>
      {Object.keys(datedLinks).map((k => {
        return (
          <div key={k}>
            {h == "2" ? (
              <H2>{k}</H2>
            ) : h == "3" ? (
              <H3>{k}</H3>
            ) : (
              <H4>{k}</H4>
            )}
            <ul>
            {datedLinks[k].map(({title, subtitle, to}) => {
              return (
                <li key={title}>
                  <span>
                    {to ? (
                      <SamLink href={to} dangerouslySetInnerHTML={{ __html: title }}/>
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
