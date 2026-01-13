import { ExternalLinkIcon } from "lucide-react";
import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";

type SamLinkProps = Omit<ComponentPropsWithoutRef<'a'>, 'href'> & { href: string };

export default function SamLink({ href, children, dangerouslySetInnerHTML, target }: SamLinkProps) {
  const isInternal = href.startsWith('/')

    return (
      <Link href={href} target={target} style={{ display: "inline-flex", alignItems: "baseline", gap: "0.15rem" }}>
        {dangerouslySetInnerHTML ? (
          <span dangerouslySetInnerHTML={dangerouslySetInnerHTML}></span>
        ) : (
          <>{children}</>
        )}
        {!isInternal && (
          <ExternalLinkIcon size={14} strokeWidth={2.5}/>
        )}
      </Link>
    )
}
