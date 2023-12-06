import "@/app/globals.css";
import { NextAuthProvider } from "@/providers/NextAuthProvider";
import { Pixelify_Sans } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';

const fontFamily = Pixelify_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Albumify | Remix your Spotify albums",
  description: "Join the rabbit hole, connect your Spotify and pick your favorite artist",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <NextAuthProvider>
        <body className={fontFamily.className + "h-screen w-screen flex flex-col overflow-hidden bg-black"}>
              <main className={"m-5"}>{children}</main>
              <Analytics />
        </body>
      </NextAuthProvider>
    </html>
  );
}