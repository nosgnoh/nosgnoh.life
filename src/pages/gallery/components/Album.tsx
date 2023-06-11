import React from 'react';
import { albums } from '../data/albums';
import { IAlbum, AlbumCard } from './AlbumCard';

function Album() {
  const albumList = albums.map((album: IAlbum, index) => 
    <AlbumCard key={index} albumInfo={album} />
  );

  return (
    <>
      <div className="container my-8 md:my-16 md:px-6 mx-auto">
        <section className="mb-32 text-gray-800">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {albumList}
          </div>
        </section>
      </div>
    </>
  );
}

export default Album;
