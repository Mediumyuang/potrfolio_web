import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import 'aos/dist/aos.css';
import AOSInit from "@/components/AOSInit";
import '@fontsource/urbanist';
import NeonLinesOverlay from "@/components/NeonLinesOverlay";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Website Development | YourName",
  description: "I create high-converting websites for businesses, bloggers, and companies. Modern design, fast development, result-oriented.",
  openGraph: {
    title: "Website Development | YourName",
    description: "I create high-converting websites for businesses, bloggers, and companies. Modern design, fast development, result-oriented.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Website preview by YourName",
      },
    ],
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`font-urbanist ${geistSans.variable} ${geistMono.variable} antialiased relative`}>
        <div className="fixed inset-0 -z-20 bg-gradient-to-br from-[#1e0036] to-[#000c3f] pointer-events-none" />
        <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-white opacity-18 blur-3xl -z-19 pointer-events-none" />
        <div
          className="fixed inset-0 -z-18 pointer-events-none opacity-7"
          style={{
            backgroundImage: "url('/bedge-grunge.png')",
            backgroundSize: '300px',
            backgroundRepeat: 'repeat'
          }}
          aria-hidden="true"
        />
        <div className="fixed -top-32 -left-32 w-[400px] h-[400px] rounded-full bg-purple-700 opacity-10 blur-3xl -z-17 pointer-events-none" />
        <div className="fixed top-1/3 left-1/2 w-[300px] h-[300px] rounded-full bg-blue-600 opacity-12 blur-2xl -z-17 pointer-events-none" />
        <div className="fixed bottom-0 right-0 w-[350px] h-[350px] rounded-full bg-pink-500 opacity-13 blur-3xl -z-17 pointer-events-none" />
        <div className="fixed inset-0 -z-16 pointer-events-none">
          <NeonLinesOverlay />
        </div>
        <div
          className="fixed inset-0 -z-15 pointer-events-none opacity-60"
          style={{
            backgroundImage: "url('/bedge-grunge.png')",
            backgroundSize: '300px',
            backgroundRepeat: 'repeat',
            filter: 'brightness(0.5)'
          }}
          aria-hidden="true"
        />
        <AOSInit />
        {children}
      </body>
    </html>
  );
}
