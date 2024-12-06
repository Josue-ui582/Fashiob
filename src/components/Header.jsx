import React from "react";

const Header = () => {
    return (
        <header className="flex flex-col mx-0 md:flex-row gap-8 md:gap-10 p-6 md:p-10 items-center justify-between bg-slate-200 rounded-3xl mb-10 overflow-hidden">
            
            <div className="text-center md:text-left flex-1">
                <h1 className="uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                    <span
                        className="text-primary px-4"
                        style={{
                            display: "inline-block",
                            background: "white",
                        }}
                    >
                        Let's
                    </span>{" "}
                    <br />
                    <span className="inline-block px-4">explore</span> <br />
                    <span
                        className="text-secondary px-4 bg-lightOrange"
                        style={{
                            display: "inline-block",
                        }}
                    >
                        unique
                    </span>{" "}
                    <br />
                    <span className="inline-block px-4">clothes</span>
                </h1>
                <p className="font-poppins mb-6 text-base sm:text-lg md:text-xl lg:text-2xl">
                    Live for Influential and Innovative fashion!
                </p>
                <button className="px-6 py-3 bg-black text-white rounded-xl text-sm sm:text-base md:text-lg transition-transform duration-300 hover:scale-105">
                    Shop Now
                </button>
            </div>

            <div className="mt-6 md:mt-0 flex-1 flex justify-center">
                <img
                    src="hero.png"
                    alt="hero"
                    className="w-full max-w-[14rem] sm:max-w-[16rem] md:max-w-[20rem] lg:max-w-[24rem] xl:max-w-[28rem] 2xl:max-w-[32rem]"
                />
            </div>
        </header>
    );
};

export default Header;