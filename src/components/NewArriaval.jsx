import React from "react";
import { GrLinkNext } from "react-icons/gr";
import { Link } from "react-router-dom";

const NewArrival = ({ image, title, view }) => {
    return (
        <>
            <div>
                <img
                    src={image}
                    alt={title}
                    className="max-w-[280px] md:max-w-[380px] lg:max-w-[400px] xl:max-w-[300px] object-cover"
                />
                <div className="flex justify-between items-center mt-4 overflow-hidden">
                    <div>
                        <h3 className="font-semibold text-lg">{title}</h3>
                        <Link className="text-gray-500 text-sm hover:underline">{view}</Link>
                    </div>
                    <GrLinkNext className="cursor-pointer" />
                </div>
            </div>
        </>
    );
  };
  
  export default NewArrival;
  