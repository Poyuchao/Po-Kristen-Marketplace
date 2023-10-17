import React,{useState} from "react";

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
    {
        title: "Contact Us",
        link: "/contact",
    },
    {
        title: "Login",
        link: "/login",
    },
    {
        title: "Cart",
        link: "/Cart",
    },
];

const Header = () => {
    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!open);
    };

    return (
        <div className="bg-gray-800 relative"> {/* Added relative for positioning context */}
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-32">
                    <div className="flex items-center">
                        {/* Logo */}
                        <img
                            src="/The Good Stuff Logo.png"
                            alt="Logo"
                            className="h-20 w-20"
                        />
                        {/* Store name */}
                        <a href="/" className="text-white ml-3 text-xl">
                            The Good Stuff
                        </a>
                    </div>
                    {/* Navigation Links */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navlinks.map((link, index) => (
                                <a
                                    key={index}
                                    className="text-white transition-all duration-500 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-md font-medium"
                                    href={link.link}
                                >
                                    {link.title}
                                </a>
                            ))}
                        </div>
                    </div>
                    {/* Hamburger Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-white focus:outline-none"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="h-6 w-6"
                            >
                                {open ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
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





