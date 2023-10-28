'use client'
import { useRouter, usePathname } from 'next/navigation';

interface playlistRedirectProps {
  id: string[];
}

const PlaylistRedirect = ({ id }: playlistRedirectProps) => {
    const router = useRouter();
    const pathname = usePathname();
    const embed = "https://open.spotify.com/embed/playlist/" + id;

return (
    <div>
        <h1 className="text-black text-2xl font-bold">Playlist crée</h1>
        <iframe width="30%" height="500" src={embed} allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy">
        </iframe>
        <button type="button" onClick={() => router.push('/')}>Create new playlist</button>
    </div>
  );
};

export default PlaylistRedirect;