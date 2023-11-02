import React,{createContext, useState, useContext} from "react";
// import ProductContext from "../products/ProductContext";
//  initialize the cart context and provide the state and functions for managing the cart.

const CartContext = createContext();

export const useCart =() =>{
    return useContext(CartContext);
}

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState(() =>{
        // try to save get cart from local storge
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart):[];
    });

    const addToCart = (product) =>{
       

        setCart(prevCart => {

             // check if the product is already in the cart
            const existingProduct = prevCart.find(item => item.productName === product.productName);

            if(existingProduct){
                //increment the quantity of the exisiting product 
                const updatedCart = prevCart.map(item => 
                    item.productName === product.productName
                    ? {...item , quantity : item.quantity +1 } 
                    :item );
                
                localStorage.setItem("cart",JSON.stringify(updatedCart));
                return updatedCart;

            }else{

                // if Product is not in the cart, add it with a quantity of 1
                const updatedCart = [...prevCart , product];
                localStorage.setItem("cart", JSON.stringify(updatedCart));
                return updatedCart;

            }


        }) ;


    };

    // increase quantity function

    const increaseQuantity = (productName) => {
        console.log("Increasing quantity for", productName);
        setCart(prevCart => {
            const newCart = prevCart.map(item =>
                item.productName === productName
                ? {...item , quantity : item.quantity+1 }
                :item
                );
            localStorage.setItem("cart", JSON.stringify(newCart));
            return newCart;
        })

    };



    // decrease quantity function

    const decreaseQuantity = (productName) =>{
        console.log("Decreasing quantity for", productName);
        setCart(prevCart => {

            const newCart = prevCart.map(item =>{
                if(item.productName === productName){
                    return {...item , quantity :Math.max(item.quantity-1 ,1)}
                }
                return item;
            });

            localStorage.setItem("cart", JSON.stringify(newCart));
            return newCart;



        });


    };


    // reset the cart

    const resetCart = () =>{
        setCart([]);
        localStorage.removeItem("cart");
    };


    return(
            <CartContext.Provider value={{cart, addToCart,increaseQuantity,decreaseQuantity,resetCart}}>
                {children}
            </CartContext.Provider>
        );




}