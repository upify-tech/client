import React from "react";
import LandingInternshipsCard from "./LandingInternshipsCard";


const Home = () => {
    return (
        <>
            <div id="home-section">
                <h1 className="center">Trending Technologies(Sample)</h1>
                <div>
                    <LandingInternshipsCard/>
                </div>
            </div>
        </>
    );
};

export default Home;