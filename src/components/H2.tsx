import Header, { HeaderProps } from "./Header";

export default function H2({ children, className }: HeaderProps) {
  return (
    <Header level="2" className={className}>
      {children}
    </Header>
  )
}

