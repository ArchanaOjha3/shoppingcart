import React, { useState } from 'react';

const ThumbnailImages = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="flex items-center space-x-2 pb-2">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Thumbnail ${index + 1}`}
          className={`w-20 h-auto border ${selectedImage === image ? 'border-gray-900' : 'border-gray-300'}`}
          onClick={() => setSelectedImage(image)}
        />
      ))}
    </div>
  );
};

export default ThumbnailImages;
