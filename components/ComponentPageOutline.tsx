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
        <div>
          <h1 className="header">{title}</h1>
        </div>
        <div>
          {subtitle && (
            <p>{subtitle}</p>
          )}
        </div>
        <div>
          {children}
        </div>
        <div>
          <Link className="right" href={returnLink.to}>&larr;{returnLink ? ` ${returnLink.label}` : ''}</Link>
        </div>
      </div>
    </div>
  )
}
