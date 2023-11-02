// cart component
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const CartWidget = ({link,icon,title}) => (


    <a
    className="text-gray-800 transition-all duration-500 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-2xl font-medium"
    href={link}
        >
    {icon ? (
        <FontAwesomeIcon icon={icon} />
    ) : (
        title
    )}
</a>

);

export default CartWidget;