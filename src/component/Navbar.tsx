import React, {useState} from "react";
// import img from '';


const logo =  require("../images/agoda_logo.png");
export default function NavBar() {
    return (
        <header className="container flex justify-between items-center h-16">
            <nav className="navbar_left">
                <ul className="navbar_left_items flex-row flex space-x-6 items-center ml-6">
                    <li><img className="w-28" src={logo} alt="logo" /></li>
                    <li>Flight + Hotel</li>
                    <li>Hotels & Homes</li>
                    <li>Flights</li>
                    <li>Coupons & Deals</li>
                    <li>Apartments</li>
                    <li>Activities</li>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>

                </ul>
            </nav>
            <nav className="navbar_right flex space-x-6 items-center mr-10">
                <button className="bg-transparent hover:bg-pink-500 text-red-500 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
                    List your place
                </button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
                <button>Sign in</button>
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    Create account
                </button>
            </nav>



        </header>

    )
}