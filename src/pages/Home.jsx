// import Header from "../components/Header";

// function Home (){
//     return<div>
//         <Header />
//         <div className="flex justify-between mt-10 px-20 py-2 ">
// <div className="mt-[10%]  animate-slideInLeft">
//     <h1 className="text-5xl font-bold">Welcome to the ID Card Management System</h1>
//     <p className="mt-5"> A complete solution for generating, managing, and verifying identity cards. Whether you're an administrator looking to issue new cards or a user trying to verify your credentials, our system provides a fast and secure way to handle all your ID card needs.</p>
// <button className="bg-blue-500 rounded p-1 w-[200px] text-white mt-5">Create Now</button>
// </div>
// <img   className="w-[300px] h-[500px] rounded mx-10  animate-slideInRight"  src="https://img.freepik.com/free-photo/handsome-black-guy-with-empty-table_144627-4290.jpg?t=st=1726742875~exp=1726746475~hmac=03cb40916173b5a8319f28a7a330151dbe2f73ebedbf61d32041be6829f9143d&w=826"></img>
//         </div>
//         <div className="px-20 py-2">
//             <h1 className="text-5xl font-bold">What is the ID Card System?</h1>
// <p className="mx-5 mt-5 text-3xl">An ID card system is an essential tool for identifying individuals in schools, businesses, and government organizations. This project aims to simplify the creation, storage, and retrieval of personal identification information.</p>
//         </div>
//         {/* Features */}
//         <div className="px-20 py-2 text-center bg-gray-100 rounded-lg shadow-lg">
//             <h1 className="text-5xl font-bold">Features:</h1>
//             <div className=" flex justify-center space-x-5">
// <div className="bg-blue-500 w-[300px] h-[200px] rounded p-5 text-white  mt-5  animate-slideInLeft">
//     <h1 className="text-3xl font-bold">1. User Registration and Authentication</h1>
//     <p>Sign up for an account and securely log in to access the system.</p>
   
// </div>
// <div className="bg-blue-500 w-[300px] h-[200px] rounded p-5 text-white  mt-5  animate-slideInLeft">
//     <h1 className="text-3xl font-bold">2. Dynamic ID Generation</h1>
//     <p>Generate ID cards with essential information like name, photo, role, and unique ID number.</p>
   
// </div>
// <div className="bg-blue-500 w-[300px] h-[200px] rounded p-5 text-white  mt-5  animate-slideInRight">
//     <h1 className="text-3xl font-bold">3. Administrative Control</h1>
//     <p>Admin users can manage card issuances, updates, and card revocations.</p>
   
// </div>
// <div className="bg-blue-500 w-[300px] h-[200px] rounded p-5 text-white mt-5  animate-slideInRight">
//     <h1 className="text-3xl font-bold">4.QR Code Integration</h1>
//     <p>Verify cards quickly using a unique QR code embedded on each card.</p>
   
// </div>

//             </div>
//         </div>
//         {/* How it works */}
//         <div className="text-center px-20 py-2 mt-5">
// <h1 className="text-5xl font-bold">How it Works ?</h1>

// <div className="flex justify-center space-x-5 bg-gray-100 rounded-lg shadow-lg">
// <div className="bg-blue-500 w-[300px] h-[200px] rounded p-5 text-white mt-5  animate-slideInLeft">
//     <h1 className="text-3xl font-bold">1.Sign Up</h1>
//     <p> Create an account to get started.</p>
   
// </div>
// <div className="bg-blue-500 w-[300px] h-[200px] rounded p-5 text-white mt-5  animate-slideInLeft">
//     <h1 className="text-3xl font-bold">2.Upload Your Information</h1>
//     <p> Fill in the necessary details, upload your photo, and generate your ID card.</p>
   
// </div>
// <div className="bg-blue-500 w-[300px] h-[200px] rounded p-5 text-white mt-5  animate-slideInRight">
//     <h1 className="text-3xl font-bold">3.Admin Approval</h1>
//     <p>Once submitted, the admin will review and approve your ID card request.</p>
   
// </div>
// <div className="bg-blue-500 w-[300px] h-[200px] rounded p-5 text-white mt-5  animate-slideInRight">
//     <h1 className="text-3xl font-bold">4.Print or Downloadl</h1>
//     <p> After approval, you can download or print your ID card for official use.</p>
   
// </div>

   
// </div>
//         </div>
//     </div>
// }

// export default Home


import Header from "../components/Header";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <Header />
            {/* Hero Section */}
            <div className="flex flex-col md:flex-row justify-between mt-10 px-5 sm:px-10 md:px-20 py-2 items-center">
                <div className="mt-10 md:mt-[10%] animate-slideInLeft text-center md:text-left">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Welcome to the ID Card Management System</h1>
                    <p className="mt-5 text-base sm:text-lg md:text-xl">
                        A complete solution for generating, managing, and verifying identity cards. Whether you're an administrator looking to issue new cards or a user trying to verify your credentials, our system provides a fast and secure way to handle all your ID card needs.
                    </p>
                  <Link to="/id"> <button className="bg-blue-500 rounded p-2 w-[150px] sm:w-[180px] md:w-[200px] text-white mt-5">Create Now</button></Link> 
                  <Link to="/sys"> <button className="bg-blue-500 rounded p-2 w-[150px] sm:w-[180px] md:w-[200px] text-white mt-5">Read More !</button></Link> 
                </div>
                <img 
                    className="w-[200px] sm:w-[250px] md:w-[300px] h-[400px] sm:h-[450px] md:h-[500px] rounded mx-10 mt-10 md:mt-0 animate-slideInRight"
                    src="https://img.freepik.com/free-photo/handsome-black-guy-with-empty-table_144627-4290.jpg?t=st=1726742875~exp=1726746475~hmac=03cb40916173b5a8319f28a7a330151dbe2f73ebedbf61d32041be6829f9143d&w=826"
                    alt="ID Card Example"
                />
            </div>

            {/* About Section */}
            <div className="px-5 sm:px-10 md:px-20 py-2">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center">What is the ID Card System?</h1>
                <p className="mx-2 sm:mx-5 mt-5 text-base sm:text-lg md:text-2xl text-center md:text-left">
                    An ID card system is an essential tool for identifying individuals in schools, businesses, and government organizations. This project aims to simplify the creation, storage, and retrieval of personal identification information.
                </p>
            </div>

            {/* Features Section */}
            <div className="px-5 sm:px-10 md:px-20 py-2 text-center bg-gray-100 rounded-lg shadow-lg">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Features:</h1>
                <div className="flex flex-col md:flex-row justify-center space-y-5 md:space-y-0 md:space-x-5">
                    <div className="bg-blue-500 w-[90%] sm:w-[300px] h-[200px] rounded p-5 text-white mt-5 animate-slideInLeft">
                        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">1. User Registration and Authentication</h1>
                        <p className="mt-2 text-sm sm:text-base">Sign up for an account and securely log in to access the system.</p>
                    </div>
                    <div className="bg-blue-500 w-[90%] sm:w-[300px] h-[200px] rounded p-5 text-white mt-5 animate-slideInLeft">
                        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">2. Dynamic ID Generation</h1>
                        <p className="mt-2 text-sm sm:text-base">Generate ID cards with essential information like name, photo, role, and unique ID number.</p>
                    </div>
                    <div className="bg-blue-500 w-[90%] sm:w-[300px] h-[200px] rounded p-5 text-white mt-5 animate-slideInRight">
                        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">3. Administrative Control</h1>
                        <p className="mt-2 text-sm sm:text-base">Admin users can manage card issuances, updates, and card revocations.</p>
                    </div>
                    <div className="bg-blue-500 w-[90%] sm:w-[300px] h-[200px] rounded p-5 text-white mt-5 animate-slideInRight">
                        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">4. QR Code Integration</h1>
                        <p className="mt-2 text-sm sm:text-base">Verify cards quickly using a unique QR code embedded on each card.</p>
                    </div>
                </div>
            </div>

            {/* How It Works Section */}
            <div className="text-center px-5 sm:px-10 md:px-20 py-2 mt-5">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">How it Works?</h1>
                <div className="flex flex-col md:flex-row justify-center space-y-5 md:space-y-0 md:space-x-5 bg-gray-100 rounded-lg shadow-lg py-5">
                    <div className="bg-blue-500 w-[90%] sm:w-[300px] h-[200px] rounded p-5 text-white mt-5 animate-slideInLeft">
                        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">1. Sign Up</h1>
                        <p className="mt-2 text-sm sm:text-base">Create an account to get started.</p>
                    </div>
                    <div className="bg-blue-500 w-[90%] sm:w-[300px] h-[200px] rounded p-5 text-white mt-5 animate-slideInLeft">
                        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">2. Upload Your Information</h1>
                        <p className="mt-2 text-sm sm:text-base">Fill in the necessary details, upload your photo, and generate your ID card.</p>
                    </div>
                    <div className="bg-blue-500 w-[90%] sm:w-[300px] h-[200px] rounded p-5 text-white mt-5 animate-slideInRight">
                        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">3. Admin Approval</h1>
                        <p className="mt-2 text-sm sm:text-base">Once submitted, the admin will review and approve your ID card request.</p>
                    </div>
                    <div className="bg-blue-500 w-[90%] sm:w-[300px] h-[200px] rounded p-5 text-white mt-5 animate-slideInRight">
                        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">4. Print or Download</h1>
                        <p className="mt-2 text-sm sm:text-base">After approval, you can download or print your ID card for official use.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
