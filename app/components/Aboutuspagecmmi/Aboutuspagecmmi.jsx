import React from "react";

const Aboutuspagecmmi = () => {
    return (
        <div className="bg-gray-100 mt-10 py-12 px-6">
            <div className="container mx-auto flex flex-col lg:flex-row items-center">
                {/* Statistics Section */}
                <div className="flex justify-center   gap-8 lg:gap-36 text-left">
                    {/* Statistic Card */}
                   <div className="flex flex-col gap-16 2xl:gap-24">
                   <div>
                        <h2 className="text-5xl font-bold text-purple-700">8500+</h2>
                        <p className="text-gray-700 mt-2">Talented workforce</p>
                    </div>
                   
                    <div>
                        <h2 className="text-5xl font-bold text-purple-700">50+</h2>
                        <p className="text-gray-700 mt-2">
                            Centers for Technology Innovation & Excellence
                        </p>
                    </div>
                    <div>
                        <img src="/assets/aboutuscmmiimg.png" alt="" />
                    </div>
                   </div>
                   
                    <div>
                        <img src="/assets/aboutuspagecmmi.png" className="rounded-lg hidden lg:block w-[480px]" alt="" />
                    </div>
                   
                   <div className="flex flex-col gap-16 2xl:gap-24">
                   <div>
                        <h2 className="text-5xl font-bold text-purple-700">43+</h2>
                        <p className="text-gray-700 mt-2">Campuses across 6 continents</p>
                    </div>
                    <div>
                        <h2 className="text-5xl font-bold text-purple-700">80+</h2>
                        <p className="text-gray-700 mt-2">Fortune 500 Customers</p>
                    </div>
                   </div>
                </div>



            </div>
        </div>
    );
};

export default Aboutuspagecmmi;
