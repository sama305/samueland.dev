import Header, { HeaderProps } from "./Header";

export default function H3({ children, className }: HeaderProps) {
  return (
    <Header level="3" className={className}>
      {children}
    </Header>
  )
}
