//Mettre dans deux composants différents

'use client'
import { useRouter, usePathname, useSearchParams } from "next/navigation";

interface DropDownProps {
  artist: string[];
  url: string[];
}

const SelectAlbum = ({ artist, url }: DropDownProps) => {
  //URLSearchParams.has() -> Implementer
  const onClick = (value: string) => {
    if (!value) {
      return; // Si la valeur est vide, ne pas effectuer de redirection
    }
  
    const url = `/newalbum?artist=${encodeURIComponent(value)}`;
    window.location.href = url;
  };

  return (
    <div>
      <h1 className="text-black text-2xl font-bold">Select an Artist: {artist.value}</h1>
      <div className="grid grid-cols-8 gap-4">
      {artist.map((opt, i) => (
        <div className="overflow-hidden cursor-pointer" key={opt} onClick={() => onClick(artist[i])}>
          <img className="p-2 object-cover aspect-square hover:scale-105" src={url[i]} alt={artist[i]}/>
          <p className="text-black text-center">{artist[i]}</p>
        </div>
      ))}
      </div>
    </div>
  );
};

export default SelectAlbum;