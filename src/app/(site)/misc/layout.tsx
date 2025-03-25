import Navbar from "../../../../components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navBarLinks: Array<{
    label: string,
    to: string
  }> = [
    {
      label: "Preamble",
      to: "/misc"
    },
    {
      label: "Collected poetry",
      to: "/misc/poetry"
    },
    {
      label: "PICO-8 games",
      to: "/misc/games"
    },
  ]

  return (
    
    <div className="content">
      <Navbar style={{ width: '10rem' }} links={navBarLinks} vertical={true}/>
      <div className="right">{children}</div>
    </div>
  );
}
