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
          <h1 style={{ lineHeight: '2rem' }}>{title}</h1>
          <p>{subtitle}</p>
        </div>
        <div style={{ marginTop: '3rem'}}>
          {children}
        </div>
        <div style={{ marginTop: '3rem'}}>
          <Link className="right" href={returnLink.to}>&larr;{returnLink ? ` ${returnLink.label}` : ''}</Link>
        </div>
      </div>
    </div>
  )
}
