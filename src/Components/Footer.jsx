import React from "react";

const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer-container">
                    <div className="footer-heading">Upify</div>
                    <div className="footer-content">
                        <div className="center vcenter">
                            <a href="/" target="/" className="footer-link">Our Email</a>
                        </div>
                        <div className="center">
                            <a href="/" target="/" className="footer-link">About Us</a>
                        </div>
                        <div className="center">
                            <a href="/" target="/" className="footer-link">Contact Us</a>
                        </div>
                        <div className="center">
                            <a href="/" target="/" className="footer-link">Terms and Conditions</a>
                        </div>
                        <div className="center">
                            <a href="/" target="/" className="footer-link">Our Team</a>
                        </div>
                        <div className="center">
                            <a href="/" target="/" className="footer-link">Privacy-policy</a>
                        </div>
                    </div>
                    <div className="base-line">
                        © 2021, All rights reserved. (This website is under development)
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
