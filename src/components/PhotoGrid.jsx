import React from 'react';

const PhotoGrid = ({ images }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div 
            key={index} 
            className="relative aspect-square overflow-hidden hover:opacity-90 transition-opacity cursor-pointer"
          >
            <img
              src={image.src}
              alt={image.alt || 'Gallery image'}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGrid; 