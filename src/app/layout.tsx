import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "English Master Institute — Best English Coaching in Mathura",
  description:
    "Premier English coaching institute in Mathura, Uttar Pradesh. Expert faculty for Spoken English, Grammar, Competitive Exam English &amp; Personality Development. Admissions open for 2026–27.",
  keywords:
    "english coaching mathura, spoken english classes mathura, english master institute, grammar classes mathura, competitive english mathura, personality development mathura",
  openGraph: {
    title: "English Master Institute — Best English Coaching in Mathura",
    description:
      "Premier Spoken English, Grammar &amp; Competitive English coaching in Mathura. Expert faculty, smart classrooms, personal mentorship.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${inter.variable} scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-white antialiased">{children}</body>
    </html>
  );
}
