import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaArrowRight } from 'react-icons/fa'; 

import { selectSelectedSize } from '../../../../redux/selector'; // Import your selector
import { setSelectedSize } from '../../../../redux/action'; // Import your action
import ThumbnailImages from "./ThumbnailImages"
import Cookie from "js-cookie";



const ProductInfo = ({ name, productDetail, sizes, images }) => {
  console.log("productDetail", productDetail)
  const {color="yellow", price=225, description="yellow jacket"} = productDetail || {};
  const sizeOptions = ['XS', 'S', 'M', 'L', 'XXL'];

  const selectedSize = useSelector(selectSelectedSize) || Cookie.get('selectedSize') || 'XS';
  const dispatch = useDispatch();

  const handleSizeSelection = (size) => {
    dispatch(setSelectedSize(size));
  };

  return (
    <div className="container mx-auto px-4 md:px-2 lg:px-4 py-8 flex flex-col items-start">
      <h1 className="text-3xl mb-2">{name}</h1>
      <p className="font-light text-sm mb-4">{description}</p>
      <p className="font-semibold text-xl mb-4">${price}</p>
      <p className="text-500 mb-2"><b>COLOR</b>  {color}</p>
       <div>
        <ThumbnailImages images={[...images.map((photo) => photo.src.tiny)]}/>
       </div>
      <p className="font-semibold text-l mt-4 mb-2">SIZE<label className="font-normal text-l ml-1">{selectedSize}</label></p>
      <div className="flex items-center space-x-2 mb-4">
        {sizeOptions.map((size) => (
          <button
            key={size}
            onClick={() => handleSizeSelection(size)}
            className={`py-2 px-4 border  ${
              size === selectedSize
                ? 'bg-black text-white' 
                : 'border-gray-300 text-gray-600 hover:text-black hover:bg-gray-100'
            } rounded-full transition duration-300`}
          >
            {size}
          </button>
        ))}
      </div>
      <div className="flex space-x-2 mb-4">
           <button
            className={`flex py-2 px-4 border bg-black text-white rounded-full transition duration-300`}
          >
            ADD TO BAG 
            <FaArrowRight className={`mt-1 ml-2`}/> 
          </button>
      </div>
      <div className="mb-4 text-left">
        Get 4 interest-free payments of $196.25 with Klarna <a name="learn more" href="#" underline>LEARN MORE</a>
      </div>
      <div className="text-left">
        Speak to a personal Stylist <a name="chat option" href="#" underline>CHAT NOW</a>
      </div>
    </div>
  );
};

export default ProductInfo;





