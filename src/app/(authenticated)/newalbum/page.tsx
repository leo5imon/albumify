import { redirect } from "next/navigation";
import filterAlbum from "@/utils/filterAlbums";
import { getUserLikedSongs } from "@/utils/actions";
import { getAuthSession } from "@/utils/serverUtils";
import { playlistAlbum } from "@/utils/playlistAlbum";
import PlaylistRedirect from "@/components/playlistRedirect";

export default async function Page({searchParams}) {
    const session = await getAuthSession();
    if (!session) {
        redirect("/login");
    };

    const likedTracks = await getUserLikedSongs(session);
    const filteredAlbum = await filterAlbum(likedTracks, 4, 20);
    const playlistId = await playlistAlbum(session, filteredAlbum.raw, searchParams.artist);
    
    return (
        <PlaylistRedirect id={playlistId}/>
     )
};