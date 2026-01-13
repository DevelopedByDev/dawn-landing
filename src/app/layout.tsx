import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "dawn — personal computing, reimagined",
  description: "An OS-level, hotkey-activated overlay that moves execution into overlays where intent first appears. Voice-to-text, notes, AI chat, and browsing — all without leaving your flow.",
  keywords: ["productivity", "voice-to-text", "AI assistant", "overlay", "desktop app", "macOS"],
  openGraph: {
    title: "dawn — personal computing, reimagined",
    description: "The computer, at the speed of human thought.",
    type: "website",
    url: "https://getdawn.io",
  },
  twitter: {
    card: "summary_large_image",
    title: "dawn — personal computing, reimagined",
    description: "The computer, at the speed of human thought.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
