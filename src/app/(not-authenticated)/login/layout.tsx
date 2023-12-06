import "@/app/globals.css";
import { NextAuthProvider } from "@/providers/NextAuthProvider";
import { Pixelify_Sans } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';

const fontFamily = Pixelify_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Albumify | Remix your Spotify albums",
  description: "Join the rabbit hole, connect your Spotify and pick your favorite artist",
};

export default function LoginPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <NextAuthProvider>
        <body className={fontFamily.className + " text-lime-300"}>
          <main>{children}</main>
          <Analytics />
        </body>
      </NextAuthProvider>
    </html>
  );
}