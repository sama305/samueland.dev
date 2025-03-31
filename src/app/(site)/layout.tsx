import type { Metadata } from "next";
import "../globals.css";
import Navbar from "../../../components/Navbar";
import { mainNavbarLinks } from "@/lib/navlists";

export const metadata: Metadata = {
  title: "samueland.dev",
  description: "Crafted with care",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="content">
            <h1 className="left header name">
              Samuel Morgan Anderson
            </h1>
            <Navbar className="right" links={mainNavbarLinks}/>
          </div>
          {children}
          <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "fe8275266cbb47ba94f4dbee1cf17645"}'></script>
        </div>
      </body>
    </html>
  );
}
