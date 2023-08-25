import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectSelectedSize } from '../../../../redux/selector'; // Import your selector
import { setSelectedSize } from '../../../../redux/action'; // Import your action



const ProductFooter = ({ name, note }) => {
  
  return (
    <div className="container mx-auto px-4 md:px-2 lg:px-4 py-8 md:w-1/3">
      <h6 className="text-xs font-semibold mb-2">A NOTE FROM THE EDITOR </h6>
      <div className="mb-4 text-xl">
        The Forte Lurex Linen Viscose Jacket in Mother of Pearl features lunar lavishness by night and by day:A blazer in a linen blend shot with lurex for shimmering surface that shines like a start in the sky.
      </div>
    </div>
  );
};

export default ProductFooter;





