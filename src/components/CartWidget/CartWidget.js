// cart component
import React from "react";
import { useCart } from "../../pages/cart/CartContext";
import { BsFillCartFill } from 'react-icons/bs';


const CartWidget = ({link,title}) => {

    const {cart} = useCart();
    console.log('CartWidget: ',cart);
    //count total items in the cart
    const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
    console.log('cart items number: ',itemCount);
    return (

    <a
    className="text-gray-800 transition-all duration-500 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-2xl font-medium relative flex items-center"
    href={link}
        >
    <BsFillCartFill />
        
        {itemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                {itemCount}
            </span>
        )}
        <span className="ml-2">{title}</span>
        

    </a>
    );

    };

export default CartWidget;