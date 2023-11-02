import React from "react";
import { useCart } from "./CartContext";


const Cart = () =>{

  const{cart,increaseQuantity, decreaseQuantity, resetCart} = useCart();
  


  return(
    // shopping cart content
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      
        {cart.map((item, index) =>(
          <div key={index} className="flex mb-4 border-b pb-4">
            <img src={item.productImg} alt={item.productName} className="w-24 h-24 object-cover mr-4"/>
            <div className="flex-1">
              <h3 className="text-xl mb-2 font-bold">{item.productName}</h3>
              {/* <p className="mb-2">{product.description}</p>  can add product description if needed */}
              <div className="flex items-center">
                {/* button - decrease */}
                <button className="border px-2 py-1"
                onClick={()=> decreaseQuantity(item.productName)}>-</button>

                <input type="number" value={item.quantity} readOnly className="mx-2 border text-center w-12 "/>
                
                {/* button increase + */}
                <button className="border px-2 py-1"
                onClick={() => increaseQuantity(item.productName)}>+</button>
                
                <span className="ml-4 font-bold">{`$${item.price}`}</span>



              </div>





            </div>

            
            
          

          </div>


        ))}
        {/* total section */}
        <div className="flex justify-between items-center mt-4">
          <span className="text-2xl font-bold">
            Subtotal:${cart.reduce((acc, item) => acc +(item.price * item.quantity),0).toFixed(2)}

          </span>
          {/* reset button */}
          <button className="bg-red-600 text-white px-4 py-2 rounded-lg" onClick={resetCart}>Reset Cart</button>
          {/* checkout button */}
          <button className="bg-gray-600 text-white px-4 py-2 rounded-lg">CheckOut</button>


        </div>
      


    </div>

  );

}


export default Cart;