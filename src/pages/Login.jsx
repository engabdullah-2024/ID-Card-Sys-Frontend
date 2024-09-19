import React from 'react';
import Header from '../components/Header';

function StudentLoginPage() {
    return (
        <div>
            <Header/>

        <div className="min-h-screen bg-gray-100 flex items-center justify-center animate-slideInLeft">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
                <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Student Login</h1>
                <form className="space-y-6">
                    <div>
                        <label htmlFor="username" className="block text-gray-600">Username</label>
                        <input
                            id="username"
                            type="text"
                            placeholder="Enter your username"
                            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-gray-600">Password</label>
                        <input
                            id="password"
                            type="password"
                            placeholder="Enter your password"
                            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                    </div>
                    <div className="flex justify-between items-center">
                        <div>
                            <input
                                id="remember"
                                type="checkbox"
                                className="mr-2 leading-tight"
                                />
                            <label htmlFor="remember" className="text-gray-600">Remember me</label>
                        </div>
                        <a href="#" className="text-blue-500 hover:underline">Forgot password?</a>
                    </div>
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                            Login
                        </button>
                    </div>
                </form>
                <p className="mt-4 text-center text-gray-600">
                    Don't have an account? <a href="#" className="text-blue-500 hover:underline">Sign up</a>
                </p>
            </div>
        </div>
                            </div>
    );
}

export default StudentLoginPage;
