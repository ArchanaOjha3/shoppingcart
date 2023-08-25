import React from 'react';
import { FaBars } from 'react-icons/fa';

const ToggleSidebar = ({ toggleSidebar }) => {
  return (
    <button
      onClick={toggleSidebar}
      className="text-white md:hidden"
    >
    <FaBars  className="text-xl cursor-pointer" />
    </button>
  );
};

export default ToggleSidebar;
