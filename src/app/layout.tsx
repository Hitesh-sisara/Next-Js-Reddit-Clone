import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";

import "@/styles/globals.css";
import Providors from "@/components/Providors";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Breadit",
  description: "A Reddit clone built with Next.js and TypeScript.",
};

export default function RootLayout({
  children,
  authModal,
}: {
  children: React.ReactNode;
  authModal: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        "bg-white text-slate-900 antialiased light",
        inter.className
      )}
    >
      <body className="min-h-screen pt-12 bg-slate-50 antialiased">
        <Providors>
          {/* @ts-expect-error Server Component */}
          <Navbar />
          {authModal}

          <div className="container max-w-7xl mx-auto h-full pt-12">
            {children}
          </div>
        </Providors>
        <Toaster />
      </body>
    </html>
  );
}
