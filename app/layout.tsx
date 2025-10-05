import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shinku & Athina - Wedding Invitation",
  description:
    "Join us in celebrating the wedding of Shinku and Athina on October 30, 2025",
  keywords: [
    "wedding",
    "invitation",
    "Shinku",
    "Athina",
    "Kerala",
    "wedding invitation",
  ],
  authors: [{ name: "Shinku & Athina" }],
  openGraph: {
    title: "Shinku & Athina - Wedding Invitation",
    description: "Join us in celebrating our special day on October 30, 2025",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${montserrat.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
