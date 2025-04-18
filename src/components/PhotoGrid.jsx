import React from 'react';

const PhotoGrid = ({ images }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div className="relative aspect-square overflow-hidden hover:opacity-90 transition-opacity">
        <img
          src="/images/romephoto/romephoto-1600w.jpg"
          alt="Rome Photo"
          className="object-cover w-full h-full"
          loading="lazy"
        />
      </div>
      <div className="relative aspect-square overflow-hidden hover:opacity-90 transition-opacity">
        <img
          src="/images/icelanddog/icelanddog-1600w.jpg"
          alt="Iceland Dog Photo"
          className="object-cover w-full h-full"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default PhotoGrid; 