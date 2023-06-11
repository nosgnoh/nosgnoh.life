// AlbumDetail.tsx
import React from 'react';

interface Photo {
  id: number;
  url: string;
  title: string;
}

interface AlbumDetailProps {
  albumCover: Photo;
  photos: Photo[];
}

const AlbumDetail: React.FC<AlbumDetailProps> = ({ albumCover, photos }) => {
  return (
    <div>
      <div className="relative h-screen w-full">
        <img className="absolute top-0 left-0 w-full h-full object-cover" src={albumCover.url} alt={albumCover.title} />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-4xl text-white">{albumCover.title}</h1>
        </div>
      </div>
      <div className="container mx-auto py-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {photos.map((photo) => (
            <div key={photo.id} className="rounded overflow-hidden shadow-lg">
              <img className="w-full h-auto" src={photo.url} alt={photo.title} />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{photo.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlbumDetail;
