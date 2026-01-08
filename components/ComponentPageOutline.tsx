import Link from "next/link";

interface ComponentPageOutline {
  title: string,
  subtitle?: string, 
  children: React.ReactNode,
  returnLink: {
    label?: string,
    to: string
  }
}

export default function ComponentPageOutline({ title, subtitle, children, returnLink }: ComponentPageOutline) {
  return (
    <div>
      <div>
        <div style={{ borderBottom: "solid 1px var(--header-line-color)", paddingBottom: "1rem", marginBottom: "1rem" }}>
          <h1 style={{ fontSize: "1.9em"}}>{title}</h1>
          <div style={{ display: "flex", justifyContent: "space-between"}}>
            {subtitle && (
              <span>{subtitle}</span>
            )}
            <Link className="right" href={returnLink.to}>&larr;{returnLink ? ` ${returnLink.label}` : ''}</Link>
          </div>
        </div>
        <div>
          {children}
        </div>
      </div>
    </div>
  )
}
