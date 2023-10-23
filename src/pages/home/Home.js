import React from "react";

const Home = () => {
    return (
        <div className="relative">
            {/* Image Container */}
            <img src="/bg_home.jpg" alt="Background" className="w-full h-full object-cover" />

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center space-y-10">
                        
                        <p className="mb-8 font-playfair-display text-5xl md:text-8xl text-[#737373] leading-tight">
                            Taste Taiwan, <br />
                            One Bite at a Time
                        </p>

                        <p className="mb-8 font-dm-sans text-lg md:text-xl text-[#737373]">
                            Experience the essence of Taiwan's flavors and traditions. <br className="hidden md:block"/>
                            Join us on a journey through taste and unforgettable moments.
                        </p>

                        <button className=" mt-50 px-8 py-4 bg-red-500 text-white font-bold rounded-full hover:bg-red-600 transition duration-300 ease-in-out">
                            Go Snacking!
                        </button>

                </div>


                {/* Product Menu */}
                <div className="mt-4">
                <h1 className="text-xl font-semibold">Products Menu</h1>
                </div>


        </div>


    );
}

export default Home;
