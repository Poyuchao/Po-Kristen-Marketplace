import React,{createContext, useState, useContext,useEffect} from "react";
// import ProductContext from "../products/ProductContext";
//  initialize the cart context and provide the state and functions for managing the cart.
import { useUser } from "../authority/UserContext";
import axios from 'axios';

const CartContext = createContext();


export const useCart =() =>{
    return useContext(CartContext);
}

export const CartProvider = ({children}) => {
    const {userData} = useUser(); 
    console.log("cart",userData);
        
    const isLoggedIn = userData !== null;

    const [cart, setCart] = useState(() =>{
        // try to save get cart from local storge
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart):[];
    });

    useEffect(() => {
        if (isLoggedIn) {
            // Fetch the cart from the backend when the user logs in
            fetchCart();
        }
    }, [isLoggedIn]);

    const fetchCart = async () => {
        try {
            const response = await axios.get('http://localhost:3001/api/cart', {
                params: { username: userData.username }
            });
            console.log('check and ',response);
            setCart(response.data); // Assuming the API returns the cart data
        } catch (error) {
            console.error('Error fetching cart:', error);
        }
    };

    const addToCart = async (product) => {
        // if login users store user shopping items in MongoDB
        if (isLoggedIn) {
            try {
                console.log('add',product,userData.username)
                await axios.post('http://localhost:3001/api/cart/add', 
                    { 
                        username: userData.username, 
                        product 
                    },
                   
                );
                fetchCart(); // Fetch the updated cart from the server   
               
                // Fetch the updated cart from the server or handle the server response
            } catch (error) {
                console.error('Error adding item to cart:', error);
            }
        }  
        // if guests store user shopping items in local storage 
        else {
            setCart(prevCart => {
                const existingProduct = prevCart.find(item => item.productName === product.productName);
                if (existingProduct) {
                    const updatedCart = prevCart.map(item => 
                        item.productName === product.productName ? {...item, quantity: item.quantity + 1} : item
                    );
                    localStorage.setItem("cart", JSON.stringify(updatedCart));
                    return updatedCart;
                } else {
                    const updatedCart = [...prevCart, { ...product, quantity: 1 }];
                    localStorage.setItem("cart", JSON.stringify(updatedCart));
                    return updatedCart;
                }
            });
        }
    };

    // increase quantity function

    const increaseQuantity = async (productName) => {
        if (isLoggedIn) {
            try {
                // Send a request to the server to increase the quantity
                await axios.post('http://localhost:3001/api/cart/increaseQuantity', {
                    username: userData.username,
                    productName: productName
                });
                // Fetch the updated cart from the server
                fetchCart();
            } catch (error) {
                console.error('Error increasing quantity:', error);
            }
        } else {
            // Logic for guests
            setCart(prevCart => {
                const newCart = prevCart.map(item =>
                    item.productName === productName
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
                localStorage.setItem("cart", JSON.stringify(newCart));
                return newCart;
            });
        }
    };



    // decrease quantity function
    const decreaseQuantity = async (productName) => {
        if (isLoggedIn) {
            try {
                await axios.post('http://localhost:3001/api/cart/decreaseQuantity', {
                    username: userData.username,
                    productName: productName
                });
                fetchCart(); // Fetch the updated cart from the server
            } catch (error) {
                console.error('Error decreasing quantity:', error);
            }
        } else {
            setCart(prevCart => {
                const newCart = prevCart.map(item => {
                    if (item.productName === productName) {
                        return { ...item, quantity: Math.max(item.quantity - 1, 1) };
                    }
                    return item;
                });
    
                localStorage.setItem("cart", JSON.stringify(newCart));
                return newCart;
            });
        }
    };

    // remove function
    const removeFromCart = async (productName) => {
        if (isLoggedIn) {
            try {
                // Send a request to the server to remove the product
                await axios.post('http://localhost:3001/api/cart/remove', {
                    username: userData.username,
                    productName: productName
                });
                // Fetch the updated cart from the server
                fetchCart();
            } catch (error) {
                console.error('Error removing item from cart:', error);
            }
        } else {
            // Logic for guest users using localStorage
            setCart(prevCart => {
                const newCart = prevCart.filter(item => item.productName !== productName);
                localStorage.setItem("cart", JSON.stringify(newCart));
                return newCart;
            });
        }
    };
    

    // reset the cart 
    const resetCart = async() =>{
        if (isLoggedIn) {
            try {
                // Send a request to the server to reset the cart
                await axios.post('http://localhost:3001/api/cart/resetCart', {
                    username: userData.username,
                });
                // Fetch the updated cart from the server
                fetchCart();
            } catch (error) {
                console.error('Error reset item from cart:', error);
            }
        }else{
            setCart([]);
            localStorage.removeItem("cart");
        }
    };

    // handle logout and provide the new cart an empty cart
    const addressLogout = async () => {
        // Save the cart before logging out
        if (userData) {
            try {
                await axios.post('http://localhost:3001/api/cart/save', {
                    username: userData.username,
                    cart: cart
                });
            } catch (error) {
                console.error('Error saving cart:', error);
            }
        }
    
        setCart([]); // Initialize a new cart for guest
       
    };


    return(
            <CartContext.Provider value={{cart, addToCart,increaseQuantity,decreaseQuantity,resetCart,removeFromCart,addressLogout}}>
                {children}
            </CartContext.Provider>
        );




}