import React from 'react';

const Menu = () => {
  const menuItems = [
    'THE EDIT', 'NEW ARRIVALS', 'DESIGNERS', 'CLOTHING', 'SHOES',
    'BAGS', 'ACCESSORIES', 'JEWELRY', 'BEAUTY', 'HOME'
  ];

  return (
    <nav className="bg-gray-800 text-white p-4 text-xs">
      <ul className=" md:flex md:space-x-4 text-left md:p-0 p-3">
        {menuItems.map((item, index) => (
          <li key={item} className="md:p-0 p-3 cursor-pointer hover:text-gray-300 transition duration-300">
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
