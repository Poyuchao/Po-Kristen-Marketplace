

import React, { useState, useEffect } from "react";

const ProductContext = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Assuming json-server runs on port 3000
        fetch('http://localhost:3000/products')
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(data => {
                setProducts(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

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
                              
                                <button className="bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-300 hover:border-transparent rounded">
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

export default ProductContext;
