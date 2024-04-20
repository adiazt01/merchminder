import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { NavbarDashboard } from "@/components/navbar/NavbarDashboard";
import { SidebarDashboard } from "@/components/sidebar/SidebarDashboard";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Merchinder - The best place to manage your merchandise",
  description: "Merchinder is the best place to manage your merchandise",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
          <SidebarDashboard />
          <div className="flex flex-col">
            <NavbarDashboard />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
