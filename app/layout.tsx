import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "../providers/Providers";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Simple Store",
  description: "Simple Store?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
            <div className="flex-auto h-screen">
              <div className="flex-row justify-center h-1/13 w-full fixed top-0 bg-white outline">
                <Navbar />
              </div>
              <div className="flex-col pt-20 w-1/2 place-self-center">
                {children}  

              </div>
              <div className="h-1/13">
                <Footer />
              </div>
            </div>
        </Providers>  
        <Toaster />
      </body>
    </html>
  );
}
