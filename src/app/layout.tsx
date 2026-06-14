import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import SmoothScroller from "@/components/SmoothScroller";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ayush Dubey | AI/ML Engineer",
  description: "Portfolio of Ayush Dubey, an AI/ML Engineer specializing in Computer Vision and Deep Learning for Defense and R&D.",
  keywords: ["Ayush Dubey", "AI Engineer", "Machine Learning", "Computer Vision", "Deep Learning", "PyTorch", "Python", "Portfolio"],
  openGraph: {
    title: "Ayush Dubey | AI/ML Engineer",
    description: "Portfolio of Ayush Dubey, an AI/ML Engineer specializing in Computer Vision and Deep Learning.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable} antialiased`}>
      <body className="bg-jet-black text-white selection:bg-deep-gold selection:text-black">
        <SmoothScroller>
          <CustomCursor />
          <Navbar />
          {children}
        </SmoothScroller>
      </body>
    </html>
  );
}
