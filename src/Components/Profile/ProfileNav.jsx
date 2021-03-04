import React from "react";
import profileIcon from "../../images/profile-icon.jpg";

const ProfileNav = () => {
    return (
        <>
            <li className="nav-item dropdown">
                <a className="nav-link profile-nav" href="/profile" target="_blank" role="button" data-toggle="dropdown" aria-haspopup="true" id="navbarDropdown" aria-expanded="false" >
                    <img src={profileIcon} alt="Avatar" className="avatar" /></a>
                <div className="dropdown-menu dropdown-content" aria-labelledby="navbarDropdown"  >
                    <a className="dropdown-item" href="/profile">My Profile</a>
                    <a href="/profile/settings" >Settings</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="/">Help</a>
                    <a className="dropdown-item" href="/logout">Logout</a>
                    {/* <a className="dropdown-item" href="/profile/mycourses" target="/">My Courses</a> */}
                    {/* <a className="dropdown-item" href="/profile/myinternships">My Internships</a> */}
                    {/* <a href="/profile/myjobs" target='/' > My Jobs </a> */}
                    {/* <a href="/profile/mywebinars" target='/' > My Webinars </a> */}
                </div>
            </li>
        </>
    );
}

export default ProfileNav;
