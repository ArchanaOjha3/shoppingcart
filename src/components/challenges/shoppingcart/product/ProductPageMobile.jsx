import React, { useState } from 'react';
import { TabContent } from "./constants";
import Tabs from './Tabs';
import Header from './Header';
import CarouselMobile from './CarouselMobile';
import ProductInfo from './ProductInfo';
import Sidebar from './Sidebar';
import ProductFooter from "./ProductFooter";

const ProductPageMobile = ({ images, loadMoreImages }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const productDetails = images.map((photo) => ({color:photo.avg_color, description:photo.alt, price:photo.width}))

  return (
    <div className="flex flex-col relative">
      <Header toggleSidebar={toggleSidebar}  />
      <Sidebar isSidebarOpen={isSidebarOpen}  />
      <CarouselMobile images={[...images.map((photo) => photo.src.medium)]} />
      <button onClick={loadMoreImages} 
       className={` border bg-black text-white rounded-full w-30 md:w-20`}
        >Load More</button>
      <ProductInfo  images={images} name='Casual Jacket' productDetail={productDetails[0]} sizeOptions={['XS', 'S', 'M', 'L', 'XXL']} />
      <Tabs tabs={[...TabContent]}/>
      <ProductFooter />
    </div>
  );
};

export default ProductPageMobile;