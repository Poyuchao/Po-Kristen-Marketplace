import React from "react";

const About = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            {/* Hero Section */}
            <div className="bg-gray-400 text-white text-center p-10">
                <h1 className="text-4xl font-bold mb-2">About Us</h1>
                <p className="font-light text-lg">Learn more about our journey and mission</p>
            </div>

            {/* Content Section */}
            <div className="flex-grow container mx-auto p-6">
                {/* Introduction */}
                <section className="my-8">
                    <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
                    {/* our story content */}
                    <div className="text-gray-700 text-lg">
                    <p >
                    Welcome to Taiwan Good Stuff, your passport to the delectable world of Taiwanese flavors. 
                    <p>Explore our diverse array of savory and sweet treats and mouthwatering pastries. </p> 
                    Discover the taste of Taiwan, one tasty bite at a time.
                    </p>

                    </div>

                </section>

                {/* Mission Statement */}
                <section className="my-8">
                    <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
                    <p className="text-gray-700 text-lg">
                        Describe your mission and the values that guide your company.
                    </p>
                </section>

                {/* Team Members */}
                <section className="my-8">
                    <h2 className="text-3xl font-semibold mb-4">Meet the Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Team Member Card */}
                        <div className="bg-white rounded-lg p-6 shadow-md">
                            <img src="/team-member.jpg" alt="Team Member" className="w-full h-40 object-cover rounded-md mb-4"/>
                            <h3 className="text-xl font-semibold mb-1">Bubu</h3>
                            <p className="text-gray-600 text-sm">CEO & Founder</p>
                        </div>
                        {/* Add more team member cards here */}
                    </div>
                </section>

                {/* Contact or CTA Section */}
                {/* <section className="my-8 bg-blue-500 text-white p-6 rounded-lg">
                    <h2 className="text-3xl font-semibold mb-4">Join Our Journey</h2>
                    <p className="font-light mb-4">
                        A call-to-action to engage with your business or organization.
                    </p>
                    <button className="px-6 py-2 bg-white text-blue-500 font-bold rounded hover:bg-gray-200 transition duration-300 ease-in-out">
                        Get Involved
                    </button>
                </section> */}
            </div>
        </div>
    );
};

export default About;
