import { miscLinks } from "@/lib/navlists";
import Navbar from "../../../../components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (    
    <div className="content-cols">
      <Navbar links={miscLinks} vertical={true}/>
      <div>{children}</div>
    </div>
  );
}
