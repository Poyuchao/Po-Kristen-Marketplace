import React from "react";
import { useCart } from "./CartContext";
import {AiFillDelete} from "react-icons/ai"; // import a delete icon 


const Cart = () =>{

  const{cart,increaseQuantity, decreaseQuantity, resetCart,removeFromCart} = useCart();

  //handle remove functino
  const handleRemove = (productName) => {
    removeFromCart(productName);
  };

  //check if cart is empty and render message or cart contents accordingly
  const renderCartContents = () => {

    if(cart.length === 0 ){
      
      return <div className="text-center text-gray-500 my-4 font-bold border-2 border-gray-300 bg-white p-6 rounded-xl shadow-md ">Your cart is empty</div>;

    }else{

      return cart.map((item, index) =>(
        <div key={index} className="flex mb-4 border pb-4 bg-white p-6 rounded-xl shadow-md">
          <img src={`http://localhost:3000${item.productImg}`} alt={item.productName} className="w-24 h-24 object-cover mr-4"/>
          <div className="flex-1">
            <h3 className="text-xl mb-2 font-bold">{item.productName}</h3>
            {/* <p className="mb-2">{product.description}</p>  can add product description if needed */}
            <div className="flex items-center">
              {/* button - decrease */}
              <button className="border px-2 py-1 bg-gray-300 rounded font-bold  "
              onClick={()=> decreaseQuantity(item.productName)}>-</button>

              <input type="number" value={item.quantity} readOnly className="mx-4 border text-center w-12 rounded font-bold "/>
              
              {/* button increase + */}
              <button className="border px-2 py-1  bg-gray-300 rounded font-bold "
              onClick={() => increaseQuantity(item.productName)}>+</button>
              
              <span className="ml-4 font-bold">{`$${item.price}`}</span>

              {/* remove button */}
              <button onClick={()=>handleRemove(item.productName)} className="text-gray-500 hover:text-gray-400 transition-colors duration-300 ml-4" aria-label="Remove item">
                <AiFillDelete size={26}/>
              </button>



            </div>





          </div>

          
          
        

        </div>


      ))

    }

  }


  return(
    // shopping cart content
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>

      {/* check if the cart is empty and render content or show empty message */}
      {renderCartContents()}

        {/* total section */}
        <div className="flex justify-between items-center mt-8">
          <span className="text-2xl font-bold">
            Subtotal:${cart.reduce((acc, item) => acc +(item.price * item.quantity),0).toFixed(2)}

          </span>
          {/* reset button */}
          <button className="bg-red-500 text-white hover:text-gray-200  px-4 py-2 rounded-lg" onClick={resetCart}>Reset Cart</button>
          {/* checkout button */}
          <button className="bg-gray-600 text-white hover:text-gray-200 px-4 py-2 rounded-lg">CheckOut</button>


        </div>
      


    </div>

  );

}


export default Cart;