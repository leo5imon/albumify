'use server'
export default async function filterAlbum (likedTracks, albumSongsMin, albumSongsMax) {

let valTracks = likedTracks.items.flatMap(item => item.artists.map(artist => [artist.name, item.uri, item.name, artist.id]));
const valueCount: { [value: string]: number } = {};

valTracks.forEach(item => {
  const value = item[3];
  valueCount[value] = (valueCount[value] || 0) + 1;
});

const filteredValues = Object.keys(valueCount).filter(
  value => valueCount[value] > albumSongsMin && valueCount[value] < albumSongsMax
);

return {raw: valTracks, val: filteredValues};
};