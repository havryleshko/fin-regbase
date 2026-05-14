import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://finregbase.com"),
  title: "finregbase.com",
  description:
    "Financial regulations knowledge base for AI agents. UK FCA and US consumer finance (Reg Z, Reg E) via MCP — connect in minutes.",
  openGraph: {
    title: "finregbase.com",
    description:
      "Financial regulations knowledge base for AI agents. UK FCA and US consumer finance (Reg Z, Reg E) via MCP — connect in minutes.",
    url: "https://finregbase.com",
    siteName: "finregbase.com",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "fin-regbase — UK and US financial regulations knowledge base for AI agents",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "finregbase.com",
    description:
      "Financial regulations knowledge base for AI agents. UK FCA and US consumer finance (Reg Z, Reg E) via MCP — connect in minutes.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-text-primary">{children}</body>
    </html>
  );
}
