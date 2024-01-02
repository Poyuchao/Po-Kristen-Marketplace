

import React, { useState, useEffect } from "react";
import { useCart } from "../cart/CartContext"; // import use cart
import { useLocation } from "react-router-dom"; 

const ProductPage = () => {

    const {addToCart} = useCart();
  // State for storing product data fetched from the server.
    const [products, setProducts] = useState([]);
    // State for indicating whether data is being fetched.
    const [loading, setLoading] = useState(true);
    // State for storing any errors that occur during data fetching.
    const [error, setError] = useState(null);
    //state for track the current filter
    const [filter, setFilter] = useState("all");
    const location = useLocation(); // Use the useLocation hook


// Effect hook for fetching product data on the initial render.
    useEffect(() => {

        

            // Extract the category from query parameters
        const queryParams = new URLSearchParams(location.search);
        const categoryFromURL = queryParams.get('category');

            // Update the filter state based on URL
        if (categoryFromURL) {
            setFilter(categoryFromURL);
            }


        const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:3000';

        // Fetch product data from a local server running on port 3000.
        fetch(`${apiUrl}/products`)
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
    }, [location]);// Add location to the dependency array

// Display a loading message while fetching data.
    if (loading) return <div>Loading...</div>;
  // Display any errors that occur during data fetching.
    if (error) return <div>Error: {error}</div>;


    // handle the filter change
    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
      };
    const filteredProducts = filter === "all" ? products : products.filter(product => product.category === filter);

 // Render the grid of products.
//  grid, grid-cols-1, shadow-md, hover:shadow-xl, etc. for layout and effects.
//font-semibold, py-2, px-4, border, etc. for typography and button styling.
    return (
      
        <div>
            {/* add filter button */}
        {/* Enhanced filter buttons */}
        
        <div className="flex justify-center">

        <div className="my-4 flex flex-wrap gap-5">
            <button onClick={() => handleFilterChange("all")} className={`py-2 px-4 rounded-lg shadow-md text-sm font-medium ${filter === 'all' ? 'bg-red-500 hover:bg-red-600 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'}`}>ALL</button>
            <button onClick={() => handleFilterChange("Cookies")} className={`py-2 px-4 rounded-lg shadow-md text-sm font-medium ${filter === 'Cookies' ? 'bg-red-500 hover:bg-red-600 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'}`}>Cookies</button>
            <button onClick={() => handleFilterChange("Sweets")} className={`py-2 px-4 rounded-lg shadow-md text-sm font-medium ${filter === 'Sweets' ? 'bg-red-500 hover:bg-red-600 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'}`}>Sweets</button>
            <button onClick={() => handleFilterChange("Pastries")} className={`py-2 px-4 rounded-lg shadow-md text-sm font-medium ${filter === 'Pastries' ? 'bg-red-500 hover:bg-red-600 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'}`}>Pastries</button>
            <button onClick={() => handleFilterChange("Drinks")} className={`py-2 px-4 rounded-lg shadow-md text-sm font-medium ${filter === 'Drinks' ? 'bg-red-500 hover:bg-red-600 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'}`}>Drinks</button>
        </div>


        </div>




          {/* products */}
          {/* product bg */}
          <section className="flex items-center py-20 bg-gray-50  ">
            <div className="px-4 mx-auto max-w-7xl ">
                {/* each card size */}
            <div className="grid grid-cols-1 gap-4  lg:gap-4  sm:gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4  p-5">
                {filteredProducts.map((product) => {
                    return (
                        <div key={product.id} className=" max-w-xs md:max-w-sm w-full rounded overflow-hidden shadow-xl m-4">
                            <div className="mt-5">
                                <div className="mb-5 flex justify-center items-center mx-auto" style={{ width: '90%' }}>
                                <div className="w-64 h-64 relative overflow-hidden rounded">
                                <img className=" absolute inset-0 w-full h-full object-cover transition-all hover:scale-110" src={`http://localhost:3000${product.productImg}`} alt={product.productName} />
                                </div>
                                </div>
                                <p className="mb-2 text-xl font-bold text-center">{product.productName}</p>
                                <p className="text-center text-lg  font-semibold mb-3"><span>${product.price}</span></p>
                              
                                <button className="text-center justify-center bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-300 hover:border-transparent rounded"
                                 onClick={() =>{console.log("Adding to cart: ", product);addToCart(product)} }>
                                    Add To Cart
                                </button> 
                                
                             
                            </div>
                        </div>
                        
                    );
                })}
            </div>
            </div>

          </section>
            
        </div>
    );
};

export default ProductPage;
