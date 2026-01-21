import Header, { HeaderProps } from "./Header";

export default function H4({ children, className }: HeaderProps) {
  return (
    <Header level="4" className={className}>
      {children}
    </Header>
  )
}

