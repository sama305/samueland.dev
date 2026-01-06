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
          <article>
            {children}
          </article>
        </div>
        <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "fe8275266cbb47ba94f4dbee1cf17645"}'></script>
      </body>
    </html>
  );
}
