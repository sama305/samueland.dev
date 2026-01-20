import type { Metadata } from "next";
import "../globals.css";
import Navbar from "@/components/Navbar";
import { mainNavbarLinks } from "@/lib/navlists";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "samueland.dev",
  description: "Crafted with care",
};

export default function EditLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body style={{height: "100vh", overflowY: "scroll",}}>
        <div className="edit-main">
          {children}
          <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "fe8275266cbb47ba94f4dbee1cf17645"}'></script>
        </div>
      </body>
    </html>
  );
}
