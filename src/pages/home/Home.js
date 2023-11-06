import React from "react";
import SnacksSection from './SnacksSection';



const Home = () => {
    return (
        <div className="flex flex-col min-h-screen"> 
            {/* Image and Text Container */}
            <div className="relative flex-1 flex items-center justify-center">
                <img src="/bg_home.jpg" alt="Background" className="absolute top-0 left-0 w-full h-full object-cover z-0" />

                <div className="z-10 text-center space-y-6">      
                    <p className="mb-6 font-playfair-display text-5xl md:text-8xl text-[#737373] leading-tight">
                        Taste Taiwan, <br />
                        One Bite at a Time
                    </p>

                    <p className="mb-6 font-dm-sans text-lg md:text-xl text-[#737373]">
                        Experience the essence of Taiwan's flavors and traditions. 
                        <br className="hidden md:block"/>
                        Join us on a journey through taste and unforgettable moments.
                    </p>

                    <button className=" px-8 py-4 bg-red-500 text-white font-bold rounded-full hover:bg-red-600 transition duration-300 ease-in-out">
                            
                            <a href="/products">Go Snacking!</a>
                    </button>
                    {/* Add space  */}
                    <div className="mb-4"></div>
                </div>
            </div>
            
            {/* Product Menu */}
            <div>
                <SnacksSection />
            </div>



  
            

            
        </div>
    );
};

export default Home;


