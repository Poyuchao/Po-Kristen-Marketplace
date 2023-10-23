import React,{useState} from "react";
import navlinks from "../index.js";  // import navlinks from index page
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter,faInstagram, faFacebookF, faGithub  } from '@fortawesome/free-brands-svg-icons';


const Header = () => {
    // initialize open is false
    const [open, setOpen] = useState(false);
    // setopen to its opposite side
    const toggleMenu = () => {
        setOpen(!open);
    };

    return (
        <div className="bg-#FAFAFA relative "> {/* Added relative for positioning context */}
            {/* Social Icon Bar */}
            <div className="bg-[#474747] flex justify-end items-center p-2 md:p-4 lg:p-6">
                {/* Twitter Icon */}
                <a href="https://twitter.com" target="#" rel="no_opener no_referrer" className="relative w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 bg-[#f8f8f61f] hover:bg-gray-300 active:bg-gray-400 rounded-full mr-2 transition duration-300">
                    <FontAwesomeIcon icon={faTwitter} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white" />
                </a>
                {/* FB Icon  */}
                <a href="https://twitter.com" target="#" rel="no_opener no_referrer" className="relative w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 bg-[#f8f8f61f] hover:bg-gray-300 active:bg-gray-400 rounded-full mr-2 transition duration-300">
                    <FontAwesomeIcon icon={faFacebookF} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white" />
                </a>
                {/* IG Icon  */}
                <a href="https://twitter.com" target="#" rel="no_opener no_referrer" className="relative w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 bg-[#f8f8f61f] hover:bg-gray-300 active:bg-gray-400 rounded-full mr-2 transition duration-300">
                    <FontAwesomeIcon icon={faInstagram} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white" />
                </a>
                {/* Github Icon  */}
                <a href="https://twitter.com" target="#" rel="no_opener no_referrer" className="relative w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 bg-[#f8f8f61f] hover:bg-gray-300 active:bg-gray-400 rounded-full mr-2 transition duration-300">
                    <FontAwesomeIcon icon={faGithub} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white" />
                </a>
            </div>
            {/* Nav Bar */}
            
            <div className="mx-auto px-4 sm:px-6 lg:px-8 shadow-md">
                <div className="flex items-center justify-between h-32">
                    <div className="flex items-center">
                        {/* Logo */}
                        <img
                            src="/Logo_removebg.png"
                            alt="Logo"
                            className="h-20 w-20"
                        />
                        {/* Store name */}
                        <a href="/" className="text-black ml-3 text-xl">
                            Taiwan Good Stuff
                        </a>
                    </div>
                    {/* Navigation Links */}
                    <div className="hidden md:block flex-grow ">
                        <div className="ml-10 flex justify-center items-baseline space-x-4">
                            {navlinks.map((link, index) => {
                                
                                return(
                                    <a
                                    key={index}
                                    className={"text-black transition-all duration-500 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-md font-medium"
                        
          
                                    }
                                    href={link.link}
                                >
                                    {link.title}
                                </a>
                                )
                                })}
                            
                        </div>
                    </div>

                    {/* Hamburger Menu Button In this segment, the md:hidden class hides the element (hamburger button)
                     once the screen size matches the "medium" breakpoint. This means that the hamburger button is only 
                     visible on screens smaller than the "medium" breakpoint, which makes it appear for mobile views.*/}
                    <div className="md:hidden">
                        <button
                            // This button displays the hamburger icon. When it's clicked, it calls the toggleMenu function, 
                            // effectively toggling the dropdown's visibility.
                            className="text-gray focus:outline-none"
                            onClick={toggleMenu} 
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                // viewBox="0 0 24 24": This defines the coordinate system of the SVG. 
                                // The SVG content is drawn in a 24x24 unit space.
                                viewBox="0 0 24 24"
                                //  This sets the stroke color (the color of the lines) of the SVG paths to be the current font color. 
                                stroke="currentColor"
                                className="h-6 w-6"
                            >
                                {open ? (
                                    //If open is true (meaning the dropdown is open), the SVG will 
                                    // show an "X" icon, as defined by the d="M6 18L18 6M6 6l12 12" path data.
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                    //If open is false (meaning the dropdown is closed), 
                                    // the SVG will show a "hamburger" icon (three horizontal lines), 
                                    // as defined by the d="M4 6h16M4 12h16M4 18h16" path data.
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                    {/*mobile-menu*/}
                    {open && (
                        <div className="md:hidden absolute top-full left-0 w-full bg-gray-900 shadow-lg p-4"> {/* Enhanced classes for dropdown styling */}
                            {navlinks.map((link, index) => (
                                <div key={index} className="mb-2">
                                    <a
                                        className="text-white transition-all duration-500 hover:bg-gray-700 hover:text-white px-3 py-2 block rounded-md text-md font-medium"
                                        href={link.link}
                                    >
                                        {link.title}
                                    </a>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;





