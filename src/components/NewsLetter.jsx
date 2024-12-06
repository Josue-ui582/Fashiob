import React from 'react';
import '../style/new.css';

const NewsLetter = () => {
    return (
        <section className="bg-lightOrange py-12 flex justify-center items-center mx-0">
            <div className="flex flex-col items-center gap-6 max-w-4xl px-4">
                
                <h1 className="uppercase text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-white text-center">
                    Join Shopping Community To Get Monthly Promo
                </h1>
                <p className="text-white font-medium text-sm sm:text-base md:text-lg text-center">
                    Type your email down below and be young wild generation
                </p>
                <div className="flex flex-col sm:flex-row sm:gap-4 w-full max-w-lg">
                    <input
                        type="email"
                        className="flex-1 p-3 rounded border-none focus:outline-none focus:ring-2 focus:ring-black"
                        placeholder="Enter your e-mail"
                    />
                    <button className="mt-4 sm:mt-0 sm:w-auto px-6 py-3 bg-black text-white uppercase font-medium rounded hover:bg-gray-800 transition-all duration-300">
                        Send
                    </button>
                </div>
            </div>
        </section>
    );
};

export default NewsLetter;