

import React, { useState, useEffect } from "react";
import { useCart } from "../cart/CartContext"; // import use cart

const ProductPage = () => {

    const {addToCart} = useCart();
  // State for storing product data fetched from the server.
    const [products, setProducts] = useState([]);
    // State for indicating whether data is being fetched.
    const [loading, setLoading] = useState(true);
    // State for storing any errors that occur during data fetching.
    const [error, setError] = useState(null);

// Effect hook for fetching product data on the initial render.
    useEffect(() => {
        // Fetch product data from a local server running on port 3000.
        fetch('http://localhost:3000/products')
            .then(response => {
              // Check for unsuccessful network responses.
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(data => {
              // Set the product data and mark the loading as finished.
                setProducts(data);
                setLoading(false);
            })
            .catch(err => {
              // Handle any errors that occurred during fetching.
                setError(err.message);
                setLoading(false);
            });
    }, []);
// Display a loading message while fetching data.
    if (loading) return <div>Loading...</div>;
  // Display any errors that occur during data fetching.
    if (error) return <div>Error: {error}</div>;

 // Render the grid of products.
//  grid, grid-cols-1, shadow-md, hover:shadow-xl, etc. for layout and effects.
//font-semibold, py-2, px-4, border, etc. for typography and button styling.
    return (
      
        <div>
          
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-10 p-5">
                {products.map((product) => {
                    return (
                        <div key={product.id} className="bg-white shadow-md p-3 rounded-md transition hover:shadow-xl max-w-xs mx-auto flex flex-col">
                            <div >
                                <img className=" w-40 h-40" src={`http://localhost:3000${product.productImg}`} alt={product.productName} />
                                <p className="font-semibold mb-1">{product.productName}</p>
                                <p className="font-semibold mb-3">${product.price}</p>
                              
                                <button className="bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-300 hover:border-transparent rounded"
                                 onClick={() =>{console.log("Adding to cart: ", product);addToCart(product)} }>
                                    Add To Cart
                                </button>
                             
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ProductPage;
