// CategoryButton.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const CategoryButton = ({ category }) => {
  const navigate = useNavigate();

  const navigateToProducts = () => {
    navigate(`/products?category=${category}`);
  };

  return (
    <button 
      onClick={navigateToProducts}
      className="bg-[#888888] hover:bg-red-600 text-white px-6 py-3 rounded mt-4 transition duration-300"
    >
      Explore {category}
    </button>
  );
};

export default CategoryButton;
