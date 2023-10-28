import "@/app/globals.css";
import { NextAuthProvider } from "@/providers/NextAuthProvider";
import { Montserrat } from "next/font/google";
const fontFamily = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Albumify",
  description: "Create your album",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <NextAuthProvider>
          <body
            className={
              fontFamily.className +
              "h-screen w-screen flex flex-col overflow-hidden bg-white text-black"}
          >
                <main className="m-5">{children}</main>
          </body>
      </NextAuthProvider>
    </html>
  );
}
