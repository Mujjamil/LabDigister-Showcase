import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/ui/LenisProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "LabDigitizer — AI-Powered Industrial Plant Digitization",
  description:
    "Transform engineering drawings into structured digital plant intelligence with LabDigitizer. AI-powered digitization for chemical plants, power plants, and industrial facilities. Available on Android and Web.",
  keywords: [
    "plant digitizer",
    "industrial digitization",
    "AI engineering",
    "P&ID digitization",
    "plant documentation",
    "process plant AI",
    "industrial AI",
    "engineering drawings",
    "Android app",
    "web platform",
  ],
  authors: [{ name: "ProcessPlantAI" }],
  creator: "ProcessPlantAI",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://plantdigitizer.processplantai.com/",
    title: "LabDigitizer — AI-Powered Industrial Plant Digitization",
    description:
      "Transform engineering drawings into structured digital plant intelligence with AI. Available for Android and Web.",
    siteName: "LabDigitizer",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "LabDigitizer — AI-Powered Industrial Plant Digitization",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LabDigitizer — AI-Powered Industrial Plant Digitization",
    description:
      "Transform engineering drawings into structured digital plant intelligence with AI.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  metadataBase: new URL("https://plantdigitizer.processplantai.com"),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`} style={{ colorScheme: "light" }}>
      <body
        style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
        className="antialiased bg-[#F8F9FC] text-[#0D0D0D] overflow-x-hidden"
      >
        <LenisProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
