import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Agua Selecta | Pureza y confianza en cada gota",
  description:
    "Agua Selecta ofrece agua pura y cristalina del Valle del Mezquital. Calidad, frescura y confianza para tu hogar.",
  keywords: [
    "agua purificada",
    "agua potable",
    "Agua Selecta",
    "agua a domicilio",
    "agua mineral",
  ],
  authors: [{ name: "Agua Selecta" }],
  creator: "Agua Selecta",

  openGraph: {
    title: "Agua Selecta",
    description:
      "Pureza y frescura directamente a tu hogar. Conoce nuestros productos.",
    url: "https://agua-selecta.vercel.app",
    siteName: "Agua Selecta",
    images: [
      {
        url: "/imagen-logo.jpeg", // 👉 pon una imagen en /public
        width: 1200,
        height: 630,
        alt: "Agua Selecta",
      },
    ],
    locale: "es_ES",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Agua Selecta",
    description: "Pureza y frescura directamente a tu hogar.",
    images: ["/imagen-logo.jpeg"], // 👉 pon una imagen en /public
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
