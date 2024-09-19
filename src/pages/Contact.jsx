import React from 'react';
import Header from '../components/Header';

function ContactPage() {
    return (
        <div>
            <Header/>

       
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-8 px-4 animate-slideInLeft">
            <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8">
                <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Contact Us</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                        <p className="text-gray-600">
                            We're here to help! Feel free to reach out to us with any questions, concerns, or feedback you may have. Our team will get back to you as soon as possible.
                        </p>
                        <div>
                            <h2 className="text-xl font-semibold text-gray-800">Contact Information</h2>
                            <ul className="mt-4 space-y-4 text-gray-600">
                                <li>
                                    <strong>Email:</strong> cwa@gmail.com.
                                </li>
                                <li>
                                    <strong>Phone:</strong> (252) 613-169435
                                </li>
                                <li>
                                    <strong>Address:</strong> KM4  Makka Al-mukarrama, Mogadishu - Somalia, Banadir, 56789
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-gray-600">Full Name</label>
                                <input
                                    id="name"
                                    type="text"
                                    placeholder="John Doe"
                                    className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-gray-600">Email Address</label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="johndoe@example.com"
                                    className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-gray-600">Message</label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    placeholder="Your message here..."
                                    className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default ContactPage;
