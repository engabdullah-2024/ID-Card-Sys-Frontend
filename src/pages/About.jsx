import Header from "../components/Header";

function AboutUsIDCard() {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <Header />
            <main className="flex-grow">
                <div className="bg-white shadow-lg rounded-lg mx-4 md:mx-8 lg:mx-16 xl:mx-32 mt-10 mb-16 p-8 lg:p-12 xl:p-16 max-w-3xl mx-auto">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-800 mb-6">
                        About Us
                    </h1>
                    <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-8">
                        Welcome to our ID card system! We specialize in creating secure and personalized identification cards designed to meet a variety of needs. Our ID cards are more than just identification tools; they are an essential part of our commitment to security and user satisfaction.
                    </p>
                    <div className="space-y-6">
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Our Mission</h2>
                            <p className="text-gray-700">
                                Our mission is to provide top-quality ID cards that enhance security and streamline access management. We are dedicated to integrating the latest technology to ensure our cards offer unparalleled reliability and functionality.
                            </p>
                        </section>
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Key Features</h2>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li><strong>Advanced Security:</strong> Our ID cards come with built-in security features such as QR codes and barcodes to prevent unauthorized access and protect sensitive information.</li>
                                <li><strong>Personalized Design:</strong> Each card is customized with personal details, ensuring that it meets your unique needs and preferences.</li>
                                <li><strong>Versatile Applications:</strong> Our ID cards are suitable for a wide range of uses including access control, service authentication, and personal identification.</li>
                            </ul>
                        </section>
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Why Choose Us?</h2>
                            <p className="text-gray-700">
                                Choosing our ID cards means opting for a solution that combines security, customization, and user-friendliness. Our cards are designed to integrate seamlessly with existing systems and provide reliable performance in any setting.
                            </p>
                        </section>
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Commitment to Privacy</h2>
                            <p className="text-gray-700">
                                We are committed to protecting your privacy. Our ID card system adheres to the highest data protection standards to ensure your personal information remains secure.
                            </p>
                        </section>
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Get in Touch</h2>
                            <p className="text-gray-700">
                                If you have any questions or need assistance with our ID cards, please don’t hesitate to contact our support team. We are here to help and ensure you have the best experience possible.
                            </p>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default AboutUsIDCard;
