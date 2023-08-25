import React, { useState } from 'react';

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 md:px-2 lg:px-4 py-4">
        <div className="flex space-x-2">
          {tabs.map((tab, index) => (
            <TabButton
              key={index}
              label={tab.label}
              tabIndex={index + 1}
              activeTab={activeTab}
              onClick={handleTabClick}
            />
          ))}
        </div>
        <div className="mt-4 text-left">
          {tabs.map((tab, index) => (
            <TabContent key={index} tabIndex={index + 1} activeTab={activeTab}>
              {tab.content}
            </TabContent>
          ))}
        </div>
      </div>
    </div>
  );
};

const TabButton = ({ label, tabIndex, activeTab, onClick }) => {
  return (
    <button
      className={`${
        activeTab === tabIndex
          ? 'text-black bg-white'
          : 'text-gray-600 hover:text-black'
      } font-semibold px-2 py-1 border-b-2 border-transparent hover:border-black transition duration-300`}
      onClick={() => onClick(tabIndex)}
    >
      {label}
    </button>
  );
};

const TabContent = ({ children, tabIndex, activeTab }) => {
  return (
    <div className={`${activeTab !== tabIndex && 'hidden'}`}>
      <div className="py-4">{children}</div>
    </div>
  );
};

export default Tabs;
