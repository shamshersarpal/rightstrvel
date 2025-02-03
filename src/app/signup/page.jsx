"use client";

import { useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header"; 

export default function SignUp() {
    const [step, setStep] = useState(1);

    const nextStep = () => {
        setStep(step + 1);
        window.scrollTo(0, 0);
    };

    const prevStep = () => {
        setStep(step - 1);
        window.scrollTo(0, 0);
    };

     
    return (
        <>
            <Header />
            <main>
                <section className="bg-gray-400  relative">

                    <div className="container">
                        <div className="relative z-10 flex flex-col items-center justify-center px-6 py-8 mx-auto  pt-20 pb-10 ">
                            <div className="w-full bg-white rounded-lg shadow  p-8">
                                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                                        Client SignUp
                                    </h1>

                                    <ol className="items-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0 rtl:space-x-reverse">
                                        <li className={`flex items-center ${step === 1 ? "text-blue-600" : "text-gray-500"} space-x-2.5 rtl:space-x-reverse`}>
                                            <span className={`flex items-center justify-center w-8 h-8 border ${step === 1 ? "border-blue-600" : "border-gray-500"} rounded-full shrink-0`}>
                                                1
                                            </span>
                                            <span>
                                                <h3 className="font-medium leading-tight">User info</h3>
                                                <p className="text-sm">New Membersinfo</p>
                                            </span>
                                        </li>
                                        <li className={`flex items-center ${step === 2 ? "text-blue-600" : "text-gray-500"} space-x-2.5 rtl:space-x-reverse`}>
                                            <span className={`flex items-center justify-center w-8 h-8 border ${step === 2 ? "border-blue-600" : "border-gray-500"} rounded-full shrink-0`}>
                                                2
                                            </span>
                                            <span>
                                                <h3 className="font-medium leading-tight">Other info</h3>
                                                <p className="text-sm">Members other info</p>
                                            </span>
                                        </li>
                                    </ol>

                                    <form className="space-y-4 md:space-y-6" action="#">
                                        {step === 1 && (
                                            <div className="overflow-y-auto p-6 rounded-lg">
                                                <div className="grid grid-cols-1 lg:grid-cols-1 gap-4">
                                                    <div className="mb-8">
                                                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                                                            Your email <span className="text-red-500">*</span>
                                                        </label>
                                                        <input
                                                            type="email"
                                                            name="email"
                                                            id="email"
                                                            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-100 focus:border-primary-600 block w-full p-2.5"
                                                            placeholder="enter your email"
                                                            required=""
                                                        />

                                                        <div className="flex items-center justify-between">
                                                            <div className="flex items-start mt-4">
                                                                <div className="flex items-center h-5">
                                                                    <input
                                                                        id="remember"
                                                                        aria-describedby="remember"
                                                                        type="checkbox"
                                                                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                                                                        required=""
                                                                    />
                                                                </div>
                                                                <div className="ml-3 text-sm">
                                                                    <label role="button"
                                                                        htmlFor="remember"
                                                                        className="text-gray-500"
                                                                    >
                                                                        Check if already a Member
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                                                    <div>
                                                        <label htmlFor="userinfo" className="block mb-2 text-sm font-medium text-gray-900">
                                                            User Name <span className="text-red-500">*</span>
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="userinfo"
                                                            id="userinfo"
                                                            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-100 focus:border-primary-600 block w-full p-2.5"
                                                            placeholder="enter your info"
                                                            required=""
                                                        />
                                                    </div>
                                                    <div>
                                                        <label htmlFor="userinfo" className="block mb-2 text-sm font-medium text-gray-900">
                                                            First Name <span className="text-red-500">*</span>
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="userinfo"
                                                            id="userinfo"
                                                            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-100 focus:border-primary-600 block w-full p-2.5"
                                                            placeholder="enter your info"
                                                            required=""
                                                        />
                                                    </div>
                                                    <div>
                                                        <label htmlFor="completeinfo" className="block mb-2 text-sm font-medium text-gray-900">
                                                            Last Name <span className="text-red-500">*</span>
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="completeinfo"
                                                            id="completeinfo"
                                                            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-100 focus:border-primary-600 block w-full p-2.5"
                                                            placeholder="enter complete info"
                                                            required=""
                                                        />
                                                    </div>

                                                    <div>
                                                        <label htmlFor="completeinfo" className="block mb-2 text-sm font-medium text-gray-900">
                                                            Password <span className="text-red-500">*</span>
                                                        </label>
                                                        <input
                                                            type="password"
                                                            name="completeinfo"
                                                            id="completeinfo"
                                                            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-100 focus:border-primary-600 block w-full p-2.5"
                                                            placeholder="enter complete info"
                                                            required=""
                                                        />
                                                    </div>

                                                    <div>
                                                        <label htmlFor="completeinfo" className="block mb-2 text-sm font-medium text-gray-900">
                                                            Confirm password <span className="text-red-500">*</span>
                                                        </label>
                                                        <input
                                                            type="password"
                                                            name="completeinfo"
                                                            id="completeinfo"
                                                            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-100 focus:border-primary-600 block w-full p-2.5"
                                                            placeholder="enter complete info"
                                                            required=""
                                                        />
                                                    </div>

                                                    <div>
                                                        <label htmlFor="completeinfo" className="block mb-2 text-sm font-medium text-gray-900">
                                                            Address <span className="text-red-500">*</span>
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="completeinfo"
                                                            id="completeinfo"
                                                            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-100 focus:border-primary-600 block w-full p-2.5"
                                                            placeholder="enter complete info"
                                                            required=""
                                                        />
                                                    </div>

                                                    <div>
                                                        <label htmlFor="completeinfo" className="block mb-2 text-sm font-medium text-gray-900">
                                                            City <span className="text-red-500">*</span>
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="completeinfo"
                                                            id="completeinfo"
                                                            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-100 focus:border-primary-600 block w-full p-2.5"
                                                            placeholder="enter complete info"
                                                            required=""
                                                        />
                                                    </div>

                                                    <div>
                                                        <label htmlFor="completeinfo" className="block mb-2 text-sm font-medium text-gray-900">
                                                            State <span className="text-red-500">*</span>
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="completeinfo"
                                                            id="completeinfo"
                                                            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-100 focus:border-primary-600 block w-full p-2.5"
                                                            placeholder="enter complete info"
                                                            required=""
                                                        />
                                                    </div>

                                                    <div>
                                                        <label htmlFor="completeinfo" className="block mb-2 text-sm font-medium text-gray-900">
                                                            Country <span className="text-red-500">*</span>
                                                        </label>
                                                        <select
                                                            id="countries"
                                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                        >
                                                            <option selected="">Choose a country</option>
                                                            <option value="US">United States</option>
                                                            <option value="CA">Canada</option>
                                                            <option value="FR">France</option>
                                                            <option value="DE">Germany</option>
                                                        </select>

                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {step === 2 && (
                                            <div className="overflow-y-auto p-6 rounded-lg">

                                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                                                    <div>
                                                        <label htmlFor="userinfo" className="block mb-2 text-sm font-medium text-gray-900">
                                                            Zip Code <span className="text-red-500">*</span>
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="userinfo"
                                                            id="userinfo"
                                                            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-100 focus:border-primary-600 block w-full p-2.5"
                                                            placeholder="enter your info"
                                                            required=""
                                                        />
                                                    </div>
                                                    <div>
                                                        <label htmlFor="userinfo" className="block mb-2 text-sm font-medium text-gray-900">
                                                            Phone  <span className="text-red-500">*</span>
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="userinfo"
                                                            id="userinfo"
                                                            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-100 focus:border-primary-600 block w-full p-2.5"
                                                            placeholder="enter your info"
                                                            required=""
                                                        />
                                                    </div>
                                                    <div>
                                                        <label htmlFor="completeinfo" className="block mb-2 text-sm font-medium text-gray-900">
                                                            Cellphone
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="completeinfo"
                                                            id="completeinfo"
                                                            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-100 focus:border-primary-600 block w-full p-2.5"
                                                            placeholder="enter complete info"
                                                            required=""
                                                        />
                                                    </div>

                                                    <div>
                                                        <label htmlFor="completeinfo" className="block mb-2 text-sm font-medium text-gray-900">
                                                            Fax
                                                        </label>
                                                        <input
                                                            type="password"
                                                            name="completeinfo"
                                                            id="completeinfo"
                                                            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-100 focus:border-primary-600 block w-full p-2.5"
                                                            placeholder="enter complete info"
                                                            required=""
                                                        />
                                                    </div>

                                                    <div>
                                                        <label htmlFor="completeinfo" className="block mb-2 text-sm font-medium text-gray-900">
                                                            Company
                                                        </label>
                                                        <input
                                                            type="password"
                                                            name="completeinfo"
                                                            id="completeinfo"
                                                            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-100 focus:border-primary-600 block w-full p-2.5"
                                                            placeholder="enter complete info"
                                                            required=""
                                                        />
                                                    </div>
                                                    <br></br>
                                                    <div className="flex items-center justify-between">
                                                        <div className="flex items-start mt-4">
                                                            <div className="flex items-center h-5">
                                                                <input
                                                                    id="remember"
                                                                    aria-describedby="remember"
                                                                    type="checkbox"
                                                                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                                                                    required="" defaultChecked
                                                                />
                                                            </div>
                                                            <div className="ml-3 text-sm">
                                                                <label
                                                                    htmlFor="remember"
                                                                    className="text-gray-500"
                                                                >
                                                                    Subscribe Newsletter
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>


                                                </div>
                                            </div>
                                        )}

                                        <div className="flex items-center justify-between">
                                            {step > 1 && (
                                                <button
                                                    type="button"
                                                    onClick={prevStep}
                                                    className="text-white bg-gray-500 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-10 py-3.5 text-center"
                                                >
                                                    Back
                                                </button>
                                            )}
                                            {step < 2 && (
                                                <button
                                                    type="button"
                                                    onClick={nextStep}
                                                    className="text-white justify-center bg-gradient-to-r flex items-center gap-1 from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-3.5 text-center me-2 mb-2"
                                                >
                                                    Next
                                                </button>
                                            )}
                                            {step === 2 && (
                                                <button
                                                    type="submit"
                                                    className="text-white justify-center bg-gradient-to-r flex items-center gap-1 from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-3.5 text-center me-2 mb-2"
                                                >
                                                    Submit
                                                </button>
                                            )}
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
