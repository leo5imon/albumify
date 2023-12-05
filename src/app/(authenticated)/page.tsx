'use server'
import { getAuthSession } from "@/utils/serverUtils";
import { getSeveralArtistsById, getUserLikedSongs } from "@/utils/actions";
import { redirect } from "next/navigation";
import filterAlbum from "@/utils/filterAlbums";
import SelectAlbum from "@/components/selectAlbum";
import LogoutButton from "@/components/logoutButton";

export default async function LikedTracksPage() {
    const session = await getAuthSession();

    if (!session) {
      redirect("/login");
    }

    const likedTracks = await getUserLikedSongs(session);
    const filteredAlbum = await filterAlbum(likedTracks, 4, 20);

    const strFiltered = JSON.stringify(filteredAlbum.val);
    const strClean = strFiltered.replace(/['"]+/g, '').replace(/[\[\]']+/g, '');
    const artId = await getSeveralArtistsById (session, 'ids=' + strClean);
    let artName : string[] = [];
    let artImg : string[] = [];
    let idSpot : string[] = [];

    for (let i = 0; i < filteredAlbum.val.length; i++) {
      artName.push(artId.artists[i].name);
      artImg.push(artId.artists[i].images[0].url);
      idSpot.push(artId.artists[i].id);
    };

    const art = {name: artName, img: artImg, id: idSpot};

   return (
       <div>
          <SelectAlbum artist={art.name} url={art.img} id={art.id}/>
          <LogoutButton/>
       </div>
    )};