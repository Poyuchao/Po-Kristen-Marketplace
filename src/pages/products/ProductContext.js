import { PRODUCTS } from "./ProductsData";

import React from "react";


const ProductContext = () =>{
    return (
      
        <div>
        <div className="flex flex-wrap justify-center items-center gap-20 p-10 ">
            {PRODUCTS.map((product) => {
                return (
                    <div key={product.id}>
        
                        <div> <img className="w-40 h-40 "  src={product.productImg} alt=""></img>
                            <p>{product.productName}</p>
                            <p>${product.price}</p>
                            <button className=" bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-300 hover:border-transparent rounded " 
                            >Add To Cart</button>
                        </div>
                        
                    </div>
                );
            })}
            </div>

        </div>
    )
};

export default ProductContext;

