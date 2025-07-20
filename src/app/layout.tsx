import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const satoshi = localFont({
  src: [
    {
      path: "./fonts/Satoshi-Light.woff2",
      weight: "400",
      style: "light",
    },
    {
      path: "./fonts/Satoshi-Regular.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-Medium.woff2",
      weight: "600",
      style: "medium",
    },
    {
      path: "./fonts/Satoshi-Bold.woff2",
      weight: "700",
      style: "bold",
    },
  ],
  variable: "--font-satoshi",
});

export const metadata: Metadata = {
  title: "thenightshift.dev – Web Development & Automation Agency",
  description:
    "Modern web development, automation, and AI solutions for startups and businesses. Build, automate, and grow with thenightshift.dev.",
  metadataBase: new URL("https://thenightshift.dev"),
  openGraph: {
    title: "thenightshift.dev",
    description:
      "Modern web development, automation, and AI solutions for startups and businesses. Build, automate, and grow with thenightshift.dev.",
    url: "https://thenightshift.dev/",
    siteName: "thenightshift.dev",
    images: [
      {
        url: "/porto-1.webp",
        width: 1200,
        height: 630,
        alt: "thenightshift.dev landing page preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "thenightshift.dev – Web Development & Automation Agency",
    description:
      "Modern web development, automation, and AI solutions for startups and businesses. Build, automate, and grow with thenightshift.dev.",
    images: ["/porto-1.webp"],
    creator: "@thenightshiftdev",
  },
  alternates: {
    canonical: "https://thenightshift.dev/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${satoshi.className} flex flex-col w-full`}>
        {children}
      </body>
    </html>
  );
}
