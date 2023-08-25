import React from 'react';
import { TabContent } from "./constants";
import Tabs from './Tabs';
import ImagesLayout from './ImagesLayout';
import ProductInfo from './ProductInfo';
import Header from './Header'; 
import ProductFooter from "./ProductFooter";
import HeartIcon from './HeartIcon'

const ProductPage = ({ images, loadMoreImages }) => {
 
const productDetails = images.map((photo) => ({color:photo.avg_color, description:photo.alt, price:photo.width}))

  return (
    <div>
      <Header />
      <div className="container mx-auto px-2 md:px-4 lg:px-8 py-4 space-x-4">
        <div className="flex justify-between space-x-4">
          <nav class="flex w-1/3">
            <div class="w-full flex">
              <div class="h-full flex justify-center"> 
               <Tabs tabs={[...TabContent]}/>
              </div>
            </div>
          </nav> 
         <div class="w-2/3 relative">
            <div className="flex w-full justify-end items-start min-h-screen absolute z-999 right-0 p-2">
              <HeartIcon />
            </div>
            <main class="flex flex-col h-screen overflow-x-hidden overflow-y-auto">
                <ImagesLayout images={[...images.map((photo) => photo.src.medium)]}/>
            </main>
         </div> 
         <nav class="flex w-1/3">
            <div class="w-full flex">
              <div class="w-full h-full flex justify-center"> 
                <ProductInfo  images={images} name='Casual Jacket' productDetail={productDetails[0]} sizeOptions={['XS', 'S', 'M', 'L', 'XXL']} />
              </div>
            </div>
         </nav>
        </div>
      </div>
      <button onClick={loadMoreImages} className={` border bg-black text-white rounded-full w-40 p-2`}>Load More</button>
      <ProductFooter />
    </div>
  );
};

export default ProductPage;
