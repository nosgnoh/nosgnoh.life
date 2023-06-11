// getAlbumDetails.ts
import axios from 'axios';

const ACCESS_KEY = 'HI3B-mWwjCwR2n8RgQlEZqwsDGh269slKUesdiYR6VQ';
// const SECRET_KEY = '8warKsXPiOacWeA9EpXFbn_2FAn74aqP1kzvYFWr0ss';

interface Photo {
  id: number;
  url: string;
  title: string;
}

export interface AlbumDetailProps {
  albumCover: Photo;
  photos: Photo[];
}

async function getRandomPhoto(): Promise<Photo> {
  const response = await axios.get('https://api.unsplash.com/photos/random', {
    params: {
      client_id: ACCESS_KEY,
      query: 'nature',
      orientation: 'landscape',
      w: 800,
      h: 800,
    },
  });

  return {
    id: response.data.id,
    url: response.data.urls.custom,
    title: response.data.description || response.data.alt_description || 'Random Photo',
  };
}

export async function getAlbumDetails(): Promise<AlbumDetailProps> {
  const albumCover = await getRandomPhoto();
  const photosPromises = Array(10)
    .fill(null)
    .map(() => getRandomPhoto());

  const photos = await Promise.all(photosPromises);

  return {
    albumCover,
    photos,
  };
}
