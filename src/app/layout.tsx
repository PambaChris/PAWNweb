import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BottomNavbar from "@/components/layout/BottomNavbar";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <body className={`${inter.className} bg-gray-800 text-white`}>
        <div className="flex">
          <Navbar />
          <div className="flex-1 flex flex-col">
            <main className="min-h-screen pb-16 md:pb-0"> {/* Added pb-16 for mobile bottom nav */}
              {children}
            </main>
            <Footer />
          </div>
        </div>
        <BottomNavbar /> {/* Render BottomNavbar for mobile */}
      </body>
    </html>
  );
}
