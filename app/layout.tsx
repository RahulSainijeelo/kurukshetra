import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { ClerkProvider } from "@clerk/nextjs";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kurukshetra",
  description:
    "Take you to the reality. Facts speak, lies lie on the ground",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} style={{padding:0}}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <ClerkProvider>{children}</ClerkProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
