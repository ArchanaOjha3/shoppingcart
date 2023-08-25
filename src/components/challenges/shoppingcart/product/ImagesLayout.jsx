import React from 'react';


const ImagesLayout = ({ images }) => {
  const isSingleColumnLayout = images.length <= 4;

  return (
    <div className="relative">
      <div className={`grid relative ${isSingleColumnLayout ? 'grid-cols-1' : 'md:grid-cols-2'} gap-4`} style={{zIndex:"-1"}}>
        {images.map((image, index) => (
          <div key={index} className={`relative overflow-hidden ${shouldDisplayOneColumn(index) && !isSingleColumnLayout ? 'md:col-span-2' : 'col-span-1' }`}>
            <img
              src={image}
              alt={`pic ${index + 1}`}
              className="w-full h-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
};


const shouldDisplayOneColumn = (index) => {
  return index % 3 === 0; 
};

export default ImagesLayout;