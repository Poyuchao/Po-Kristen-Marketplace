import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="bg-[#474747] text-white py-8">
            <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">

               
                {/* Logo */}
                 {/*adding mx-auto to each container, ensure that they are centered horizontally and have equal spacing on both the left and right sides */}
                <div className="flex justify-center md:justify-start items-center mx-auto">
                    <img src="logo192.png" alt="Logo" className="mb-4 w-32 md:w-40 h-32 md:h-40 object-cover rounded-full" />
                </div>

                {/* Description */}
                <div className="md:pl-4 mx-auto"> {/* Added mx-auto and padding-left */}
                    <p className="text-sm md:text-base text-center md:text-left">Welcome to Taiwan Good Stuff, your passport to the delectable world of Taiwanese flavors. Explore our diverse array of savory and sweet treats and mouthwatering pastries. Discover the taste of Taiwan, one tasty bite at a time.</p>
                </div>

                {/* Product categories */}
                <div className="text-center md:text-left mx-auto"> {/* Added mx-auto */}
                    <div className="text-lg font-bold mb-2">Product</div>
                    <div className="space-y-2">
                        <div>Cookies</div>
                        <div>Sweets</div>
                        <div>Pastries</div>
                        <div>Drinks</div>
                    </div>
                </div>

                {/* Social media icons */}
                <div className="text-center md:text-right">
                    <div className="text-lg font-bold mb-2">Follow Me</div>
                    <div className="flex justify-center md:justify-end space-x-4">
                        <FontAwesomeIcon icon={faGithub} className="w-6 h-6 mx-2 hover:text-[#333]" />
                        <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6 mx-2 hover:text-[#0072b1]" />
                        <FontAwesomeIcon icon={faTwitter} className="w-6 h-6 mx-2 hover:text-[#1da1f2]" />
                    </div>
                </div>

            </div>
            
            {/* Copyright */}
            <div className="mt-8 text-center border-t border-gray-700 pt-4">
                Copyright © 2023 TaiwanGoodStuff. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;
