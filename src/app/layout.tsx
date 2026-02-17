import type { Metadata } from "next";
import { Lora, Montserrat } from "next/font/google";
import "./globals.css";

const lora = Lora({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Street Sweep Indy | 777 Volunteers. One City. One Morning.",
  description:
    "Join 777 neighbors on July 7, 2026 to clean up Indianapolis. Pick a park, grab your crew, and be part of the biggest volunteer day Indy has ever seen.",
  keywords: [
    "Indianapolis",
    "volunteer",
    "community cleanup",
    "street sweep",
    "day of caring",
    "Citizens 7",
    "Indy volunteers",
  ],
  openGraph: {
    title: "Street Sweep Indy | July 7, 2026",
    description:
      "777 volunteers. 25 parks. 1 city. Join the biggest cleanup day Indianapolis has ever seen.",
    type: "website",
    url: "https://indystreetsweep.com",
    images: [
      {
        url: "/images/og-image.png",
        width: 2160,
        height: 3840,
        alt: "Street Sweep Indy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Street Sweep Indy | July 7, 2026",
    description:
      "777 volunteers. 25 parks. 1 city. Join the biggest cleanup day Indianapolis has ever seen.",
    images: ["/images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lora.variable} ${montserrat.variable} antialiased`}>{children}</body>
    </html>
  );
}
