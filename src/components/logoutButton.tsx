'use client'
import { useRouter } from 'next/navigation';
import { MouseEvent } from 'react';
import { Pixelify_Sans } from "next/font/google";

const fontFamily = Pixelify_Sans({ subsets: ["latin"] });

const LogoutButton: React.FC = () => {
  const router = useRouter();

  const handleLogout = async (event: MouseEvent<HTMLButtonElement>) => {
    router.push("/api/auth/signout");
  };

  return (
    <div className={fontFamily.className + " text-lime-300 absolute bottom-5 right-5"}>
      <button onClick={handleLogout}>Sign-out</button>
    </div>
  );
};

export default LogoutButton;