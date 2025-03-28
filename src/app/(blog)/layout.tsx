import { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "samueland.dev",
  description: "Crafted with care",
};

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="main">
          {children}
        </div>
      </body>
    </html>
  );
}
