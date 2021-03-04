import React from "react";
import { Redirect } from "react-router-dom";
import NavbarLogin from "../HomePage/NavbarLogin";
import Footer from "../Footer";

const MyInternships = () => {
    const token = localStorage.getItem("token");
    if(token == null){
      return <Redirect to="/signup" />
    }
    return (
        <>
            <NavbarLogin />
            <div className="profile-card profile-container">
                <h2><b>My Internships</b></h2>
                <div className="see-div">
                    <a href="/profile/myinternships" className="see-btn">See more...</a>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default MyInternships;