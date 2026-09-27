import type { Metadata } from "next";
import { Inter, Fraunces, Geist } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
});

const title = "Kevin Ardiprana - Fullstack Developer";
const description =
  "Portfolio Kevin Ardiprana, Informatics graduate from Atma Jaya Yogyakarta University, focused on fullstack web development.";

export const metadata: Metadata = {
  metadataBase: new URL("https://kevin-ardiprana.vercel.app"),
  title: {
    default: title,
    template: "%s | Kevin Ardiprana",
  },
  description,
  keywords: [
    "Kevin Ardiprana",
    "Fullstack Developer",
    "Web Developer",
    "React",
    "Next.js",
    "Laravel",
    "Portfolio",
  ],
  authors: [{ name: "Kevin Ardiprana" }],
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Kevin Ardiprana Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "scroll-smooth",
        geist.variable,
        inter.variable,
        fraunces.variable,
      )}
    >
      <body className="flex min-h-screen flex-col bg-background font-sans text-foreground antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
