import React from 'react';

const PhotoGrid = ({ images }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((image, index) => (
        <div 
          key={index} 
          className="relative aspect-square overflow-hidden hover:opacity-90 transition-opacity"
        >
          <img
            src={image.src}
            alt={image.alt}
            className="object-cover w-full h-full"
          />
        </div>
      ))}
    </div>
  );
};

export default PhotoGrid; 