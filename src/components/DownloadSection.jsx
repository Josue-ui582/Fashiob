import React from 'react';

const DownloadSection = () => {
    return (
        <section className="px-4 -mt-24 mx-0">
            <div className="flex flex-col-reverse items-center gap-y-8 lg:flex-row lg:justify-center lg:items-center lg:gap-x-36">
                <div className="text-center lg:text-left">
                    <p className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4">
                        DOWNLOAD APP & <br />
                        GET THE VOUCHER!
                    </p>
                    <p className="text-gray-600 text-sm md:text-base lg:text-lg">
                        Get 30% off for the first transaction using <br />
                        Rondovision mobile app for now.
                    </p>
                    <div className="flex justify-center lg:justify-start mt-4">
                        <img
                            src="applestore.png"
                            alt="applestore"
                            className="w-[120px] md:w-[150px] lg:w-[150px] xl:w-[200px] h-auto"
                        />
                        <img
                            src="googlestore.png"
                            alt="googlestore"
                            className="w-[120px] md:w-[150px] lg:w-[200px] xl:w-[250px] h-auto"
                        />
                    </div>
                </div>

                <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px] flex items-center justify-center">
                    
                    <div className="absolute w-full h-full border-[1px] border-gray-400 rounded-full"></div>
                    <div className="absolute w-[85%] h-[85%] border-[1px] border-gray-300 rounded-full"></div>
                    <div className="absolute w-[70%] h-[70%] border-[1px] border-gray-200 rounded-full"></div>

                    <img
                        src="Mobile app.png"
                        alt="mobile app"
                        className="w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px] xl:w-[350px] h-auto object-cover relative z-10"
                    />
                </div>
            </div>
        </section>
    );
};

export default DownloadSection;