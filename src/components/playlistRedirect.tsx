'use client'
import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Pixelify_Sans } from "next/font/google";

const fontFamily = Pixelify_Sans({ subsets: ["latin"] });

interface playlistRedirectProps {
  id: string;
}

const PlaylistRedirect = ({ id }: playlistRedirectProps) => {
    const router = useRouter();
    const pathname = usePathname();
    const embed = "https://open.spotify.com/embed/playlist/" + encodeURIComponent(id);

    const [showIframe, setShowIframe] = useState(false);

    useEffect(() => {
      const timeout = setTimeout(() => {
        setShowIframe(true);
      }, 3000);

      return () => {
        clearTimeout(timeout);
      };
    }, []);

return (
  <div className={fontFamily.className + " text-lime-300 flex flex-col items-center justify-center w-screen h-screen gap-5"}>
      <div><h1 className="text-2xl font-bold animate-bounce">Album successfully created</h1></div>
      {showIframe && (
      <iframe className="lg:w-2/6 lg:h-4/6" src={embed} allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"
      ></iframe>
    )}
      <button type="button" className="hover:cursor-pointer" onClick={() => router.push('/')}>Create an album for another artist</button>
  </div>
  );
};

export default PlaylistRedirect;