import React from "react";
import Upifylogo from "../../images/upify-logo-new.png";

const Navbar = () => {
    return (
        <>
            <div className="container-fluid nav_bg" >
                <div className="row" >
                    <div className="col-10 mx-auto" >
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand" href="/">
                            <img src={Upifylogo} alt="Upifylogo" className="logo"/>
                            </a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                                    <li className="nav-item" >
                                        <a className="nav-link nav-active" href="/"> Home </a>
                                    </li>
                                    <li className="nav-item" >
                                        <a className="nav-link  nav-active" href="/#services-section" > Services </a>
                                    </li>
                                    <li className="nav-item" >
                                        <a className="nav-link  nav-active" href="/#about-section" > About </a>
                                    </li>
                                    <li className="nav-item" >
                                        <a className="nav-link nav-active" href="/#contact-section" > Contact </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="s-button" href="/signup" > Sign in </a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Navbar;

