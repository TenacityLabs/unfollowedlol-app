import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Red_Hat_Text } from "next/font/google"
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

const red_hat = Red_Hat_Text({
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "unfollowed.lol",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={red_hat.className}>{children}</body>
    </html>
  );
}
