import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Cursor } from "@/components/Cursor";
import { ParticleCanvas } from "@/components/ParticleCanvas";

export const metadata: Metadata = {
  title: "Dmytro Yurin — Fullstack Engineer",
  description:
    "Front-End Engineer with 3+ years of experience building scalable, modern applications. React, Next.js, TypeScript specialist.",
  openGraph: {
    title: "Dmytro Yurin — Fullstack Engineer",
    description: "Building scalable, modern web applications.",
    url: "https://denvudd.dev",
    siteName: "Dmytro Yurin Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Cursor />
          <ParticleCanvas />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
