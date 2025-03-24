import Link from "next/link";
import "../globals.css";

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
