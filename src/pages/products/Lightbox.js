

import React from 'react';
import { useCart } from '../cart/CartContext';// import cart function

const Lightbox = ({ isOpen, image, title, price, description, onClose }) => {

    const { addToCart } = useCart(); // Use the hook to get addToCart function

  if (!isOpen) return null;

    // A handler for the Add to Cart button click
  const handleAddToCart = () => {

    const productToAdd = {

      productImg: image.replace('http://localhost:3000', ''),
      productName: title,
      price,
      description,
    };
    addToCart(productToAdd);
    onClose(); //  Close the lightbox after adding to cart
  };




  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4">
      <div className="bg-white rounded-lg overflow-hidden w-full max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row">
          {/* Image Container */}
          <div className="md:flex-shrink-0">
            <img src={image} alt={title} className="w-full h-96 object-contain bg-gray-100" />
          </div>
          {/* Details Container */}
          <div className="p-4">
            <h2 className="text-2xl font-bold">{title}</h2>
            <p className="text-red-500 text-xl">{price}</p>
            <div className="mt-2">
              <p className="text-gray-700 text-md">{description}</p>
            </div>

             
            {/* Add to Cart Button */}

            <div className="flex justify-between items-center mt-4">
                <button
                onClick={handleAddToCart}
                className="text-sm bg-red-500 hover:bg-gray-600 text-white py-2 px-4 rounded"
                >
                Add to Cart
                </button>

                {/* close button */}
                <button
                    onClick={onClose}
                    className="text-sm bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded"
                    >
                    Close
                 </button>

            </div>

            
        
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lightbox;

