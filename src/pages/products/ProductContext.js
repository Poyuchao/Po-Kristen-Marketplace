// import { PRODUCTS } from "./ProductsData";

// import React from "react";
// import Cart from "./Cart"; // Import the Cart component

// const ProductContext = () =>{
//     return (
//         <div>
//         <div className="flex flex-wrap justify-center items-center gap-20 p-10 ">
//             {PRODUCTS.map((product) => {
//                 return (
//                     <div key={product.id}>
        
//                         <div> <img className="w-40 h-40 "  src={product.productImg} alt=""></img>
//                             <p>{product.productName}</p>
//                             <p>${product.price}</p>
//                             <button className=" bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-300 hover:border-transparent rounded " onClick={() => addToCart(product)} 
//                             >Add To Cart</button>
//                         </div>
                        
//                     </div>
//                 );
//             })}
//             </div>

//                 {/* Render the Cart component */}
//                 <Cart />
//         </div>
//     )
// };

// export default ProductContext;


import { PRODUCTS } from "./ProductsData";
import React, { useState } from "react";
import Cart from "../cart/Cart"

const ProductContext = () => {
  // Initialize an empty cart as an array of products
  const [cart, setCart] = useState([]);

  // Function to add a product to the cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <div className="flex flex-wrap justify-center items-center gap-20 p-10">
        {PRODUCTS.map((product) => {
          return (
            <div key={product.id}>
              <div>
                <img className="w-40 h-40" src={product.productImg} alt="" />
                <p>{product.productName}</p>
                <p>${product.price}</p>
                <button
                  className="bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-300 hover:border-transparent rounded"
                  onClick={() => addToCart(product)}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
      {/* Render the Cart component */}
      <Cart cart={cart} /> {/* Pass the cart state to the Cart component */}
    </div>
  );
};

export default ProductContext;
