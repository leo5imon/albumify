'use client'
import Image from 'next/image';
import { Pixelify_Sans } from "next/font/google";

const fontFamily = Pixelify_Sans({ subsets: ["latin"] });

interface selectAlbumProps {
  artist: string[];
  url: string[];
  id: string[];
}

const SelectAlbum = ({ artist, url, id }: selectAlbumProps) => {
  const onClick = (value: string) => {
    if (!value) {
      return;
    }
  
    const url = `/newalbum?artist=${encodeURIComponent(value)}`;
    window.location.href = url;
  };

  const spotClick = (value: string) => {
    if (!value) {
      return;
    }

    const id = 'https://open.spotify.com/artist/' + value;
    window.location.href = id;
  };

  return (
    <div className={fontFamily.className + " text-lime-300"}>
      <h1 className="text-2xl font-bold">Pick an Artist to create your personnalized album</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
      {artist.map((opt, i) => (
        <div key={opt}>
          <div className="overflow-hidden cursor-pointer" key={opt} onClick={() => onClick(artist[i])}>
            <Image className="p-2 object-cover aspect-square hover:scale-105" width={200} height={200} src={url[i]} alt={artist[i]}/>
          </div>
            <div className="flex place-content-center" key={opt}>
              <p className="text-center mr-2">{artist[i]}</p>
              <Image className="mr-2 hover:cursor-pointer" src="https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg" width={50} height={50} alt={artist[i]} onClick={() => spotClick(id[i])}></Image>
            </div>
          </div>
      ))}
      </div>
    </div>
  );
};

export default SelectAlbum;