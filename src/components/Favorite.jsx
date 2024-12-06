import React from "react";
import NewFavorite from "./NewFavorite";

const Favorite = () => {
    return(
        <section className="min-h-screen md:p-6 mt-20">
            <div className="relative flex items-center overflow-hidden">
                    <h1 className="text-xl md:text-2xl font-extrabold ">Young’s</h1>
                    <div className="relative">
                        <span
                            className="absolute bottom-0 right-6 w-1/2 h-6 bg-lightOrange transform -rotate-8 translate-x-1/2 rounded-2xl"
                        ></span>
                    <h1 className="relative text-xl md:text-2xl font-extrabold">Favourite</h1>
                </div>
            </div>
            <div className="flex items-center justify-center overflow-hidden">
                <div className="flex flex-wrap justify-center gap-6">
                    <NewFavorite image="favorite-1.png" title="Trending on instagram" view="Explore now!" />
                    <NewFavorite image="favorite-2.png" title="All Under $40" view="Explore now!" />
                </div>
            </div>
        </section>
    )
}

export default Favorite;