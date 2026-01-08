import { miscLinks } from "@/lib/navlists";
import Navbar from "../../../../components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (    
    <div className="content-cols">
      <div style={{ minWidth: "4rem" }}>
        <Navbar links={miscLinks} vertical={true}/>
      </div>
      <div>{children}</div>
    </div>
  );
}
