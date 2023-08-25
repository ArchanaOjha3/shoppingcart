import React from 'react';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import ToggleSidebar from './Sidebar/ToggleSidebar';
import Menu from './Menu'

const Header = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <header className="bg-gray-800 text-white">
      <div className="container flex mx-auto px-4 md:px-8 lg:px-16 py-4 flex justify-between items-center">
        <div className="text-lg font-bold w-1/6 justify-start">SHOP BAZZAR</div>
        <div className="space-x-4 w-4/6 hidden md:block"><Menu/></div>
        <div className="flex space-x-4 md:w-1/6 justify-end">
          <FaSearch className="text-xl cursor-pointer" />
          <FaShoppingCart className="text-xl cursor-pointer" />
          <ToggleSidebar toggleSidebar={toggleSidebar} />
        </div>
      </div>
    </header>
  );
};

export default Header;
