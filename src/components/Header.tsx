"use client"

import { JSX } from "react";

export type HeaderProps = {
  level?: "1" | "2" | "3" | "4",
  children?: React.ReactNode,
  className?: string
}

export default function Header({ level = "1", children, className }: HeaderProps) {
  const id = children?.toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .trim();

  const Tag = `h${level}` as keyof JSX.IntrinsicElements

  const handleCopy = (e: React.MouseEvent) => {
    if (id) {
      window.history.pushState(null, '', `#${id}`);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
  };

  return (
    <Tag id={id} className={"custom-header " + className} onClick={handleCopy}>
      {children}
    </Tag>
  )
}
