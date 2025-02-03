import React from "react";
import "./Contactus.css";

const Contactus = () => {
    return (
        <div
            className="h-[1200px] w-full object-cover flex items-center  justify-start px-4 bg-cover bg-center"
            style={{
                backgroundImage: "url('/assets/contactusbg.jpg')", // Replace with your desired image URL
            }}
        >
           <div
  className="max-w-2xl w-full lg:ml-20 bg-gradient-to-r  bg-white p-8 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">

                <h1 className="text-3xl font-semibold text-gray-800 mb-6">
                    Contact Us <span className="text-red-600 font-bold">.</span>
                </h1>
                <div className="flex justify-center">
                <button
                    className="w-52  bg-purple-600 text-white py-2 px-4 rounded-md font-medium hover:bg-white hover:text-slate-700 hover:border transition-colors duration-500"
                >
                    AutoFill with LinkedIn
                </button>
                </div>

                <form className="mt-6  space-y-4">
                    <div className="">
                        <label htmlFor="firstName" className=" block text-sm font-medium text-gray-700">
                            First Name
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            className="mt-1 outline-none block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-purple-500 focus:border-purple-500"
                            placeholder="Enter your first name"
                        />
                    </div>
                    <div className="pt-4">
                        <label htmlFor="lastName" className=" block text-sm font-medium text-gray-700">
                            Last Name
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            className="mt-1 block w-full outline-none border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-purple-500 focus:border-purple-500"
                            placeholder="Enter your last name"
                        />
                    </div>
                    <div className="pt-4">
                        <label htmlFor="email" className=" block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="mt-1 block outline-none w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-purple-500 focus:border-purple-500"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="pt-4">
                        <label htmlFor="contactNo" className="  block text-sm font-medium text-gray-700">
                            Contact No.
                        </label>
                        <input
                            type="tel"
                            id="contactNo"
                            name="contactNo"
                            className="mt-1 block w-full border outline-none border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-purple-500 focus:border-purple-500"
                            placeholder="Enter your contact number"
                        />
                    </div>
                    <div className="pt-4">
                        <label htmlFor="companyName" className="  block text-sm font-medium text-gray-700">
                            Company Name
                        </label>
                        <input
                            type="text"
                            id="companyName"
                            name="companyName"
                            className="mt-1 block w-full border outline-none border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-purple-500 focus:border-purple-500"
                            placeholder="Enter your company name"
                        />
                    </div>
                    <div className="pt-4">
                        <label htmlFor="projectDetails" className="  block text-sm font-medium text-gray-700">
                            Something about your project
                        </label>
                        <textarea
                            id="projectDetails"
                            name="projectDetails"
                            rows="4"
                            className="mt-1 outline-none block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-purple-500 focus:border-purple-500"
                            placeholder="Describe your project here"
                        ></textarea>
                    </div>
                    <div className="flex items-center pt-4">
                        <input
                            type="checkbox"
                            id="updates"
                            name="updates"
                            className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                        />
                        <label htmlFor="updates" className="ml-2 text-sm text-gray-700">
                            I would like to receive updates from KALVEN.
                        </label>
                        
                    </div>
                    <div className="flex items-center pt-4">
                    <input
                            type="checkbox"
                            id="updates"
                            name="updates"
                            className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                        />
                        <label htmlFor="updates" className="ml-2 leading-normal text-sm text-gray-700">
                           I confirm, I have read and agree to <span className="underline text-purple-700 ">KALVEN's Privacy Policy</span> and consent to sharing my information.
                        </label>
                        
                    </div>
                   <div className="flex justify-center pt-4">
                   <button
                        type="submit"
                        className="w-40  bg-red-500 text-white py-2 px-4 rounded-md font-medium hover:bg-white hover:border hover:text-slate-700 transition-colors duration-500"
                    >
                        Submit
                    </button>
                   </div>
                </form>
            </div>
        </div>
    );
};

export default Contactus;
