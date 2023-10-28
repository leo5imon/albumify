import { redirect } from "next/navigation";
import filterAlbum from "@/utils/filterAlbums";
import { getUserLikedSongs } from "@/utils/actions";
import { getAuthSession } from "@/utils/serverUtils";
import { playlistAlbum } from "@/utils/playlistAlbum";

export default async function Page({searchParams}) {
    const session = await getAuthSession();
    if (!session) {
        redirect("/login");
    };

    const likedTracks = await getUserLikedSongs(session);
    const filteredAlbum = await filterAlbum(likedTracks, 4, 20);

    playlistAlbum(session, filteredAlbum.raw, searchParams.artist);

return (
    <div><p>Playlist has been created</p></div>
)};