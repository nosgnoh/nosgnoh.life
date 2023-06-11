// Album.tsx or any other parent component
import React, { useEffect, useState } from 'react';
import AlbumDetail from './componens/AlbumDetail';
import { AlbumDetailProps, getAlbumDetails } from './getAlbumDetails';

const Album: React.FC = () => {
  const [albumDetails, setAlbumDetails] = useState<AlbumDetailProps | null>(null);

  useEffect(() => {
    async function fetchAlbumDetails() {
      const details = await getAlbumDetails();
      setAlbumDetails(details);
    }

    fetchAlbumDetails();
  }, []);

  return (
    <div className="Album">
      {albumDetails && <AlbumDetail albumCover={albumDetails.albumCover} photos={albumDetails.photos} />}
    </div>
  );
};

export default Album;
