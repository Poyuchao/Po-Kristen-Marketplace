import React from 'react';
import SnackCard from './SnackCard';
import snacksData from './snacksData';


const SnacksSection = () => {
  return (
    <div className="flex flex-col items-center space-y-8 p-8 bg-gray-200">
      <h1 className="text-4xl font-bold">Browse Our Snacks</h1>
      <div className="flex space-x-8">
        {snacksData.map(snack => (
          <SnackCard key={snack.title} {...snack} />
        ))}
      </div>
    </div>
  );
};

export default SnacksSection;
