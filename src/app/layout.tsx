import type { Metadata } from "next";
import Script from "next/script";
import { Inter, DM_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/global/ThemeProvider";
import { Navbar } from "@/components/global/Navbar";
import { Footer } from "@/components/global/Footer";
import { profile } from "@/data/profile";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const display = DM_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alitadayoni.com"),
  title: {
    default: `${profile.name} — ${profile.role}`,
    template: `%s — ${profile.name}`,
  },
  description: profile.bio,
  openGraph: {
    title: profile.name,
    description: profile.bio,
    url: "https://alitadayoni.com",
    siteName: profile.name,
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const umamiId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;
  const umamiSrc = process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL ?? "https://cloud.umami.is/script.js";

  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${display.variable}`}>
      <body className="dark:bg-zinc-900 bg-white dark:text-white text-zinc-700">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
        {umamiId && (
          <Script src={umamiSrc} data-website-id={umamiId} strategy="afterInteractive" defer />
        )}
      </body>
    </html>
  );
}
