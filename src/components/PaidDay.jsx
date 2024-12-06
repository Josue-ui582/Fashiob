import React from "react";
import '../style/payday.css';

const PaidDay = () => {
    return (
        <section className="mt-8 sm:mx-0 overflow-hidden">
            <div className="flex gap-4 flex-col items-center bg-paydaybackground px-6 py-8 mx-auto w-[110%] max-w-screen-xl lg:flex-row lg:justify-center lg:space-x-8">
                
                <div className="flex justify-center mb-6 lg:mb-0">
                    <img
                        src="paid (2).png"
                        alt="paid-image"
                        className="max-w-[300px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[350px] xl:max-w-[500px] object-cover"
                    />
                </div>

                <div className="text-center lg:text-left">
                    <h1 className="uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight mb-4">
                        <span className="bg-white px-2 py-1">Payday</span>
                        <br />
                        Sale now
                    </h1>
                    <p className="font-poppins text-sm sm:text-base md:text-lg lg:text-xl font-medium mb-4">
                        Spend minimal $100 and get 30% off voucher code for your next purchase
                    </p>
                    <div className="mb-4">
                        <h4 className="text-md sm:text-lg md:text-xl font-bold">
                            1 June - 10 June 2021
                        </h4>
                        <p className="font-poppins text-xs sm:text-sm md:text-base font-normal">
                            *Terms & Conditions apply
                        </p>
                    </div>
                    <button className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition duration-300">
                        Shop Now
                    </button>
                </div>
            </div>
        </section>
    );
};

export default PaidDay;
