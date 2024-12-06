import React from "react";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Carrousel from "../components/Carrousel";
import NewArrival from "../components/NewArriaval";
import PaidDay from "../components/PaidDay";
import Favorite from "../components/Favorite";
import DownloadSection from "../components/DownloadSection";
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <>
            <NavBar />
            <Header />
            <Carrousel />
            <div className="min-h-screen p-6">
                <div className="relative flex items-center sm:flex-row sm:space-x-4 sm:space-y-0">
                    <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold">NEW</h1>
                    <div className="relative">
                        <span
                            className="absolute bottom-0 right-6 w-1/2 h-6 bg-paydaybackground transform -rotate-8 translate-x-1/2 rounded-2xl"
                        ></span>
                        <h1 className="relative text-xl sm:text-2xl lg:text-3xl font-extrabold">
                            ARRIVALS
                        </h1>
                    </div>
                </div>

                <div className="flex items-center justify-center mt-8">
                    <div className="flex flex-wrap justify-center gap-6">
                        <NewArrival image="produit-1.png" title="Hoodies & Sweatshirt" view="Explore now!" />
                        <NewArrival image="produit-2.png" title="Hoodies & Sweatshirt" view="Explore now!" />
                        <NewArrival image="produit-3.png" title="Hoodies & Sweatshirt" view="Explore now!" />
                    </div>
                </div>
        </div>
            <PaidDay />
            <Favorite />
            <DownloadSection />
            <NewsLetter />
            <Footer />
        </>
    )
}

export default Home;