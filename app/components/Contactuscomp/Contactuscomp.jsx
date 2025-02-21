"use client"; // Required for Next.js App Router

import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Validation Schema
const schema = yup.object().shape({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    contactNo: yup.string()
        .matches(/^\d{10}$/, "Contact No. must be 10 digits")
        .required("Contact No. is required"),
    companyName: yup.string().required("Company Name is required"),
    projectDetails: yup.string().min(10, "Project details must be at least 10 characters long"),
    updates: yup.boolean(),
    privacyPolicy: yup.boolean().oneOf([true], "You must accept the privacy policy"),
});

const Contactus = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isValid },
    } = useForm({
        resolver: yupResolver(schema),
        mode: "onChange",
    });

    const onSubmit = async (data) => {
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
    
            const result = await response.json();
            if (response.ok) {
                alert("Message sent successfully!");
                reset();
            } else {
                alert("Error sending message. Please try again.");
            }
        } catch (error) {
            alert("Something went wrong!");
        }
    };

    return (
        <div
            className="h-[1200px] w-full object-cover flex items-center justify-center px-4 bg-cover bg-center"
            style={{
                backgroundImage: "url('/assets/contactusbg.jpg')",
            }}
        >
            <div
                className="max-w-2xl w-full lg:ml-20 bg-gradient-to-r bg-white p-8 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
            >
                <h1 className="text-3xl font-semibold text-gray-800 mb-6">
                    Contact Us <span className="text-red-600 font-bold">.</span>
                </h1>
                <div className="flex justify-center">
                    <button
                        className="w-52 bg-purple-600 text-white py-2 px-4 rounded-md font-medium hover:bg-white hover:text-slate-700 hover:border transition-colors duration-500"
                    >
                        AutoFill with LinkedIn
                    </button>
                </div>

                <form className="mt-6 space-y-4" onSubmit={handleSubmit(onSubmit)}>
                    {/* First Name */}
                    <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                            First Name
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            {...register("firstName")}
                            className="mt-1 outline-none block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-purple-500 focus:border-purple-500"
                            placeholder="Enter your first name"
                        />
                        <p className="text-red-500 text-sm">{errors.firstName?.message}</p>
                    </div>

                    {/* Last Name */}
                    <div className="pt-4">
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                            Last Name
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            {...register("lastName")}
                            className="mt-1 block w-full outline-none border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-purple-500 focus:border-purple-500"
                            placeholder="Enter your last name"
                        />
                        <p className="text-red-500 text-sm">{errors.lastName?.message}</p>
                    </div>

                    {/* Email */}
                    <div className="pt-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            {...register("email")}
                            className="mt-1 block outline-none w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-purple-500 focus:border-purple-500"
                            placeholder="Enter your email"
                        />
                        <p className="text-red-500 text-sm">{errors.email?.message}</p>
                    </div>

                    {/* Contact Number */}
                    <div className="pt-4">
                        <label htmlFor="contactNo" className="block text-sm font-medium text-gray-700">
                            Contact No.
                        </label>
                        <input
                            type="tel"
                            id="contactNo"
                            {...register("contactNo")}
                            className="mt-1 block w-full border outline-none border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-purple-500 focus:border-purple-500"
                            placeholder="Enter your contact number"
                        />
                        <p className="text-red-500 text-sm">{errors.contactNo?.message}</p>
                    </div>

                    {/* Company Name */}
                    <div className="pt-4">
                        <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
                            Company Name
                        </label>
                        <input
                            type="text"
                            id="companyName"
                            {...register("companyName")}
                            className="mt-1 block w-full border outline-none border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-purple-500 focus:border-purple-500"
                            placeholder="Enter your company name"
                        />
                        <p className="text-red-500 text-sm">{errors.companyName?.message}</p>
                    </div>

                    {/* Project Details */}
                    <div className="pt-4">
                        <label htmlFor="projectDetails" className="block text-sm font-medium text-gray-700">
                            Something about your project
                        </label>
                        <textarea
                            id="projectDetails"
                            {...register("projectDetails")}
                            rows="4"
                            className="mt-1 outline-none block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-purple-500 focus:border-purple-500"
                            placeholder="Describe your project here"
                        ></textarea>
                        <p className="text-red-500 text-sm">{errors.projectDetails?.message}</p>
                    </div>

                    {/* Privacy Policy Checkbox */}
                    <div className="flex items-center pt-4">
                        <input
                            type="checkbox"
                            id="privacyPolicy"
                            {...register("privacyPolicy")}
                            className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                        />
                        <label htmlFor="privacyPolicy" className="ml-2 leading-normal text-sm text-gray-700">
                            I confirm, I have read and agree to <span className="underline text-purple-700 ">KALVEN's Privacy Policy</span> and consent to sharing my information.
                        </label>
                    </div>
                    <p className="text-red-500 text-sm">{errors.privacyPolicy?.message}</p>

                    {/* Submit Button */}
                    <div className="flex justify-center pt-4">
                        <button
                            type="submit"
                            disabled={!isValid}
                            className={`w-40 py-2 px-4 rounded-md font-medium transition-colors duration-500 
                                ${isValid ? "bg-red-500 text-white hover:bg-white hover:border hover:text-slate-700" : "bg-gray-400 cursor-not-allowed"}`}
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
