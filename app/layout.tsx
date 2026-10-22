
import { Toaster } from "sonner";
import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aravind Ankamalla | Software Engineer",
  description:
    "Full-stack Software Engineer with 2+ years of experience building SaaS products across web, mobile, and backend services.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
        <Toaster />
      </body>
    </html>
  );
}
