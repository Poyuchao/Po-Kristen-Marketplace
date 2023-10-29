import React,{useState}from 'react';



const Cart=() =>{
    // Initialize an empty cart as an array of products
    const [cart, setCart] = useState([]);

    //function to add a product to the cart
    const addToCart =(product) => {
        setCart([...cart, product]);
    };



    return(
        <div className="bg-gray-100 h-screen py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
          {/* Display the cart contents here */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-3/4">
              {/* Existing cart display */}
            </div>
            <div className="md:w-1/4">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-lg font-semibold mb-4">Summary</h2>
                {/* Cart summary here */}
                <hr className="my-2" />
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">Total</span>
                  <span className="font-semibold">
                    ${cart.reduce((total, product) => total + product.price, 0).toFixed(2)}
                  </span>
                </div>
                <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full">Checkout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
        
    );
};

export default Cart;