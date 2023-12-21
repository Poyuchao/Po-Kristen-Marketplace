import React from "react";

import heroImg from "../../../src/image/aboutpage_hero.jpg";


const About = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            {/* Hero Section */}
            <div className="bg-gray-500 text-white text-center p-10">
            
                <h1 className="text-4xl font-bold mb-2">About Us</h1>
                
            </div>
            
            {/* Content Section with Background Image */}
            <div className="relative flex-grow">
            <img src={heroImg} alt="Descriptive Alt Text" className="absolute top-0 left-0 w-full h-full object-cover opacity-50 z-0"/>


            

            {/* Content Section */}
            <div className="container mx-auto p-6 relative z-20">
                {/* Introduction */}
                <section className="my-8">
                    <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
                    {/* our story content */}
                    <div className="text-gray-700 text-lg">
                    <p >
                    Welcome to Taiwan Good Stuff, your passport to the delectable world of Taiwanese flavors. 
                    Explore our diverse array of savory and sweet treats and mouthwatering pastries.  
                    Discover the taste of Taiwan, one tasty bite at a time.
                    </p>

                    </div>

                </section>

                {/* Mission Statement */}
                <section className="my-8">
                    <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
                    <p className="text-gray-700 text-lg">
                    Taiwan Good Stuff celebrates Taiwan's dessert culture, bringing the world exquisite flavors and heartfelt stories from our rich culinary heritage, connecting people through the joy of Taiwan’s unique sweets.
                    </p>
                </section>


                

                {/* Contact or CTA Section */}
                 <section className="my-8 bg-gray-600 text-white p-6 rounded-lg">
                    <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>

                    <p className="mt-2 text-white">Feel free to reach out for collaborations or feedback.</p>

                    <button className="mt-4 px-6 py-2 bg-white text-gray-700 font-bold rounded hover:bg-gray-200 transition duration-300 ease-in-out">
                        Contact Us
                    </button>
                </section> 
                </div>
            </div>
        </div>
    );
};

export default About;
