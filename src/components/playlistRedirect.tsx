'use client'
import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

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
    <div>
        <h1 className="text-black text-2xl font-bold">Playlist created</h1>
        {showIframe && (
        <iframe
          width="30%"
          height="500"
          src={embed}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      )}
        <button type="button" onClick={() => router.push('/')}>Create a new playlist</button>
    </div>
  );
};

export default PlaylistRedirect;