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
  title: "Indy Street Sweep | Day of Caring 777",
  description:
    "United in service. 777 neighbors coming together on July 7, 2026 to clean up Indianapolis — one massive day of caring.",
  keywords: [
    "Indianapolis",
    "volunteer",
    "community cleanup",
    "street sweep",
    "day of caring",
    "Citizens 7",
  ],
  openGraph: {
    title: "Indy Street Sweep | Day of Caring 777",
    description:
      "777 neighbors. 25 parks. 1 city. Join us July 7, 2026 to clean up Indianapolis.",
    type: "website",
    url: "https://indystreetsweep.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Indy Street Sweep | Day of Caring 777",
    description:
      "777 neighbors. 25 parks. 1 city. Join us July 7, 2026 to clean up Indianapolis.",
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
