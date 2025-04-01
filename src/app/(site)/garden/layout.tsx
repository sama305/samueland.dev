import { miscLinks } from "@/lib/navlists";
import Navbar from "../../../../components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (    
    <div className="content">
      <Navbar links={miscLinks} vertical={true}/>
      <div className="right">{children}</div>
    </div>
  );
}
