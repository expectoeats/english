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
  title: "TSS Acharya — Best CBSE & ICSE Coaching in Prayagraj",
  description:
    "Premier CBSE & ICSE coaching institute in Prayagraj (Katra area), Uttar Pradesh. Expert faculty including Ankit Sir for Science, Mathematics &amp; all school subjects. Air-conditioned smart classrooms. Admissions open for 2026–27.",
  keywords:
    "cbse coaching prayagraj, icse coaching prayagraj, tss acharya, science mathematics coaching prayagraj, katra prayagraj coaching, board exam preparation prayagraj",
  openGraph: {
    title: "TSS Acharya — Best CBSE & ICSE Coaching in Prayagraj",
    description:
      "Premier CBSE & ICSE coaching in Prayagraj Katra area. Expert faculty, air-conditioned smart classrooms, personal mentorship for Class 6th to 12th.",
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
