import localFont from "next/font/local";
import "./globals.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import { Toaster } from "react-hot-toast";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Ntunhs Mall - 北護商城",
  description: "北護商城是一個專為北護師生打造的電商平台，提供多樣化的商品選擇。",
  icon: "/favicon.ico",
  keywords: "北護商城, 北護大學, 商城, 學生商品",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  openGraph: {
    title: 'Ntunhs Mall - 北護商城',
    description: '北護商城是一個專為北護師生打造的電商平台',
    url: 'https://ntunhsmall.vercel.app',
    siteName: 'Ntunhs Mall',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      }
    ],
    locale: 'zh_TW',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
  alternates: {
    canonical: 'https://ntunhsmall.vercel.app',
  }
};

export const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Ntunhs Mall',
  description: '北護商城是一個專為北護師生打造的電商平台',
  url: 'https://ntunhsmall.vercel.app'
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-TW">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen font-[family-name:var(--font-geist-sans)] antialiased`}
      >
        <main>
          <Toaster position="bottom-right" />
          <Navbar />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
