import Header, { HeaderProps } from "./Header";

export default function H1({ children, className }: HeaderProps) {
  return (
    <Header level="1" className={className}>
      {children}
    </Header>
  )
}
