import React from "react";
import ProfileNav from "../Profile/ProfileNav";
import Upifylogo from "../../images/upify-logo-new.png";

const NavbarLogin=()=>{
    return(
        <>
            <div className="container-fluid nav_bg" >
                <div className="row" >
                    <div className="col-11 mx-auto" >
                        <nav className="navbar navbar-expand-lg navbar-light ">
                            <a className="navbar-brand" href="/">
                            <img src={Upifylogo} alt="Upifylogo" className="logo"/>
                            </a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                                    <li className="nav-item" >
                                        <a className="nav-link nav-link-login nav-active" href="/home"> Home </a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link nav-link-login dropdown-toggle" href="/courses" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                           Courses</a>
                                        <div className="dropdown-menu dropdown-content" aria-labelledby="navbarDropdown">
                                            <a className="dropdown-item nav-active" href="/courses">Courses</a>
                                            {/* <a className="dropdown-item nav-active" href="/profile/mycourses">My Courses</a> */}
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item nav-active" href="/uploadcourses">Post Courses</a>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link nav-link-login dropdown-toggle" href="/internships" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                           Internships</a>
                                        <div className="dropdown-menu dropdown-content" aria-labelledby="navbarDropdown">
                                            <a className="dropdown-item" href="/internships">Internships</a>
                                            {/* <a className="dropdown-item" href="/profile/myinternships">My Internships</a> */}
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="/uploadinternship">Post Internship</a>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link nav-link-login dropdown-toggle" href="/jobs" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                           Jobs</a>
                                        <div className="dropdown-menu dropdown-content" aria-labelledby="navbarDropdown">
                                            <a className="dropdown-item" href="/jobs">Jobs</a>
                                            {/* <a className="dropdown-item" href="/profile/myjobs">My Jobs</a> */}
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="/uploadjob">Create Job</a>
                                        </div>
                                    </li>
                                    
                                    <li className="nav-item dropdown">
                                        <a className="nav-link nav-link-login dropdown-toggle" href="/webinars" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Webinars</a>
                                        <div className="dropdown-menu dropdown-content" aria-labelledby="navbarDropdown">
                                            <a className="dropdown-item" href="/webinars">Webinars</a>
                                            {/* <a className="dropdown-item" href="/profile/mywebinars">My Webinars</a> */}
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="/uploadwebinar"> Post Webinar</a>
                                        </div>
                                    </li>
                                    <ProfileNav/>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
};


export default NavbarLogin;