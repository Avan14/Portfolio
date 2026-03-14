import type { Metadata } from "next";
import "./globals.css";
import ViewportFrame from "@/components/ViewportFrame";
import Navbar from "@/components/Navbar";
import MobileNav from "@/components/MobileNav";

export const metadata: Metadata = {
  title: "Avan Sahu | Full-Stack Developer & Competitive Programmer",
  description:
    "Portfolio of Avan Sahu — B.Tech + M.Tech student at IIIT Gwalior. Full-stack developer, Knight at LeetCode, and Specialist at Codeforces.",
  openGraph: {
    title: "Avan Sahu | Full-Stack Developer & Competitive Programmer",
    description:
      "Portfolio of Avan Sahu — Full-stack developer & competitive programmer.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=JetBrains+Mono:wght@400;500&family=Playfair+Display:ital,wght@0,800;1,800&family=Space+Grotesk:wght@300;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body">
        <ViewportFrame />
        <Navbar />
        <MobileNav />
        {children}
      </body>
    </html>
  );
}
