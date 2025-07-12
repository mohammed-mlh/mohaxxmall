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

export const metadata = {
  title: "Mohammed Mallahi | Full Stack Developer & Freelancer",
  description: "Mohammed Mallahi is a full stack developer specializing in modern web experiences, freelance projects, and scalable solutions. Available for hire.",
  keywords: [
    "Mohammed Mallahi",
    "Full Stack Developer",
    "Web Developer",
    "Freelancer",
    "React",
    "Node.js",
    "Portfolio",
    "Frontend",
    "Backend",
    "Machine Learning",
    "Next.js",
    "Tailwind CSS"
  ],
  authors: [{ name: "Mohammed Mallahi", url: "https://mohaxxmall.site" }],
  creator: "Mohammed Mallahi",
  metadataBase: new URL("https://mohaxxmall.site"),
  openGraph: {
    title: "Mohammed Mallahi | Full Stack Developer & Freelancer",
    description: "Crafting modern web experiences with cutting-edge technologies and pixel-perfect designs. Available for freelance work.",
    url: "https://mohaxxmall.site",
    siteName: "Mohammed Mallahi Portfolio",
    images: [
      {
        url: "/public/vercel.svg", // Replace with a real image for best results
        width: 1200,
        height: 630,
        alt: "Mohammed Mallahi Portfolio Preview"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammed Mallahi | Full Stack Developer & Freelancer",
    description: "Crafting modern web experiences with cutting-edge technologies and pixel-perfect designs. Available for freelance work.",
    creator: "@yourtwitterhandle", // Replace with your real Twitter handle
    images: [
      "/public/vercel.svg" // Replace with a real image for best results
    ]
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      maxVideoPreview: -1,
      maxImagePreview: "large",
      maxSnippet: -1
    }
  },
  alternates: {
    canonical: "https://mohaxxmall.site"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
