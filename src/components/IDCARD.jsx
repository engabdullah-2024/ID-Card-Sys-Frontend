import React from 'react';
import Header from './Header';

function StudentIDCardForm() {
    return (
        <div>
<Header/>
       
        <div className="min-h-screen bg-gray-100 flex items-center justify-center animate-slideInLeft">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
                <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Student ID Card Form</h1>
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
                        <label htmlFor="student-id" className="block text-gray-600">Student ID</label>
                        <input
                            id="student-id"
                            type="text"
                            placeholder="123456"
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
                        <label htmlFor="photo" className="block text-gray-600">Upload Photo</label>
                        <input
                            id="photo"
                            type="file"
                            className="w-full mt-1 border border-gray-300 rounded-lg py-2"
                        />
                    </div>
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
        </div>
    );
}

export default StudentIDCardForm;
