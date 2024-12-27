import Link from 'next/link';
import React from 'react';

const Form = () => {
    return (
        <div className="min-h-screen flex items-center justify-center p-6">
            <div className="bg-white rounded-lg shadow-lg max-w-lg w-full">
                <h2 className="text-2xl font-bold mb-6 text-center p-4 text-white bg-[#8067bd] w-full">Ask Us Anything!</h2>
                <form className="space-y-6 p-8">
                    {/* Full Name */}
                    <div>
                        <label htmlFor="full-name" className="block text-sm font-medium text-gray-700">
                            * Full Name
                        </label>
                        <input
                            type="text"
                            id="full-name"
                            name="full-name"
                            placeholder="Enter your full name"
                            className="mt-2 border-none block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-gray-700 shadow-sm focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-400 transition duration-200"
                            required
                        />
                    </div>

                    {/* Email */}
                    <div className='flex justify-between'>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                * Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email address"
                                className="mt-2 border-none block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-gray-700 shadow-sm focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-400 transition duration-200"
                                required
                            />
                        </div>

                        {/* Phone Number */}
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                * Phone Number
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                placeholder="Enter your phone number"
                                className="mt-2 border-none block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-gray-700 shadow-sm focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-400 transition duration-200"
                            />
                        </div>
                    </div>

                    {/* Message */}
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            placeholder="Write your message"
                            className="mt-2 block border-none w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-gray-700 shadow-sm focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-400 transition duration-200"
                            required
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className='flex items-center'>
                        <button
                            type="submit"
                            className="bg-sky-200 text-blue-950 text-[12px] py-3 px-8 rounded-md hover:bg-[#8067bd] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 transition duration-200"
                        >
                            Submit
                        </button>
                        <p className='text-[12px] ml-4'>
                            By clicking the button you agree to the <Link href={"/"} className='underline text-blue-600'> Privacy Policy </Link>
                            and  <Link href={"/"} className='underline text-blue-600'>Terms of Service</Link>.
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Form;
