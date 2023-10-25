import React from 'react';
import SnackCard from './SnackCard';
import snacksData from './snacksData';


const SnacksSection = () => {
    // responsivly menu using section

  return (
    <div className="flex flex-col items-center space-y-8 p-8 bg-gray-200">
      <h1 className="text-4xl font-bold">Browse Our Snacks</h1>
      <section className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {snacksData.map((snack, index) => (
                <SnackCard key={index} {...snack} />
            ))}
        </section>
    </div>
  );
};

export default SnacksSection;
