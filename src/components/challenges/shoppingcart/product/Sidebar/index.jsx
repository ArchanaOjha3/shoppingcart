import React from 'react';
import Menu from '../Menu';


const Sidebar = ({ isSidebarOpen }) => {
  return (
    <div className={`bg-gray-800 text-white w-64 h-screen absolute ${isSidebarOpen ? '-translate-x-0' : 'translate-x-full'} top-82 right-0 z-999 transform transition-transform duration-300 ease-in-out `} style={{top:"82px", zIndex:"999"}}>
      <Menu />
    </div>
  );
};

export default Sidebar;