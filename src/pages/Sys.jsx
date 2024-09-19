import Header from "../components/Header";

function AboutUsIDCard() {
    return (
        <div>
<Header/>
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <Header />
            <div className="flex-grow">
                <div className="bg-white shadow-lg rounded-lg mx-4 md:mx-8 lg:mx-16 xl:mx-32 mt-10 mb-16 p-8 lg:p-12 xl:p-16 max-w-3xl mx-auto">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-800 mb-6">
                        About Our ID Card System
                    </h1>
                    <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-8">
                        Welcome to our ID card system! Our ID cards are designed to offer secure, personalized identification for users. Here’s a closer look at what makes our ID cards special:
                    </p>
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Key Features</h2>
                            <ul className="list-disc list-inside text-gray-700">
                                <li><strong>Personal Information:</strong> Each ID card contains essential details such as name, photo, and a unique ID number, ensuring accurate identification.</li>
                                <li><strong>Security Measures:</strong> Our ID cards use advanced security features including QR codes, barcodes, and encryption to protect your data.</li>
                                <li><strong>Versatile Usage:</strong> These ID cards are used for access control, service authentication, and as a reference for personal records.</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Why Choose Our ID Cards?</h2>
                            <p className="text-gray-700">
                                Our ID cards are designed with the latest technology to ensure the highest level of security and functionality. They are easy to use and integrate seamlessly into various systems, making them a reliable choice for personal and professional use.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Commitment to Privacy</h2>
                            <p className="text-gray-700">
                                We prioritize your privacy and are committed to protecting your personal information. Our ID card system adheres to stringent data protection standards to ensure your data remains secure.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Support and Assistance</h2>
                            <p className="text-gray-700">
                                If you need help with your ID card or have any questions, our support team is here to assist you. Please reach out to us for any issues or inquiries.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default AboutUsIDCard;
