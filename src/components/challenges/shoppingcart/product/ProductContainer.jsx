import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductPage from './ProductPage';
import ProductPageMobile from './ProductPageMobile';

const ProductContainer = () => {
  const [images, setImages] = useState([]);
  const [offset, setOffset] = useState(0);
  const [count, setCount] = useState(4);

  useEffect(() => {
    fetchImages(offset, count);
  },  [offset, count]);

  const fetchImages = async (offset, count) => {
    try {
      const response = await axios.get(
        `https://api.pexels.com/v1/search?query=jacket&per_page=${offset + count}`,
        {
          headers: {
            Authorization: 'rGBaKO8ew7eSh26owSJKtZxSZXnoS24lYd1kV6s9Q6RQGwcG2ktXIj8F', // Replace with your actual API key
          },
        }
      );

      setImages((prevImages) => [...prevImages, ...response.data.photos]);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

    const loadMoreImages = () => {
    setOffset((prevOffset) => prevOffset + count);
  };

  return (
    <>
     {images.length && (<div>
      {/* Render the Desktop version */}
      <div className="hidden md:block">
        <ProductPage images={images} loadMoreImages={loadMoreImages}/>
      </div>

      {/* Render the Mobile version */}
      <div className="md:hidden">
        <ProductPageMobile images={images} loadMoreImages={loadMoreImages}/>
      </div>
     </div>)}
    </>
  );
};

export default ProductContainer;
