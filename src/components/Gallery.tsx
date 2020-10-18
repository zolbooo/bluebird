import React from 'react';
import YouTube from 'react-youtube';

import type { GalleryItem } from './ArtistList';

function Gallery({ items }: { items: GalleryItem[] }) {
  return (
    <div className="mt-8 w-full flex flex-col">
      {items.map((item) => {
        switch (item.type) {
          case 'youtube':
            return <YouTube className="my-2" videoId={item.id} />;
          default:
            throw Error(`Unknown gallery item with type "${item.type}"`);
        }
      })}
    </div>
  );
}

export default Gallery;
