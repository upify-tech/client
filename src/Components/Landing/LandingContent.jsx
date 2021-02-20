import React from "react";
import Footer from "../Footer";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Services from "./Services";
import Navbar from "./Navbar";


const LandingContent=()=>{
    return(
        <>
        <Navbar/>
        <Home/>
        <Services/>
        <About/>
        <Contact/>
        <Footer/>
        </>
    )
}

export default LandingContent;