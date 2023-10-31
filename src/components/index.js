import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export {default as Header} from "./Header/Header";
export {default as Footer} from "./Footer/Footer";



const navlinks = [
    {
        title: "Home",
        link: "/",
    },
    {
        title: "About Us",
        link: "/about",
    },
    {
        title: "Product Menu",
        link: "/products",
    },
    // {
    //    title: "Register",
    //    link: "/register",
    //},
    {
        title: "Login",
        link: "/login",
    },
    {
        icon: faShoppingCart,  // specify the cart icon here
        link: "/cart",
    },
];

export default navlinks;