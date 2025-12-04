import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Removed Playfair_Display
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CartProvider } from '@/lib/CartContext';

const bodyFont = Inter({
  subsets: ["latin"],
  variable: '--font-body', // Assign Inter to --font-body
});

const headingFont = Inter({ // Use Inter for heading as well
  subsets: ["latin"],
  variable: '--font-heading', // Assign Inter to --font-heading
});

export const metadata: Metadata = {
  title: "Pan-African Women's Network",
  description: "Empowering Pan-African Women.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bodyFont.variable} ${headingFont.variable} bg-background`}>
      <body className={`${bodyFont.className} bg-background text-foreground`}>
        <CartProvider>
          <Navbar />
          <main className="min-h-screen pb-16 bg-background">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
