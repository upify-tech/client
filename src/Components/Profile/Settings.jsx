import React from "react";
import { Redirect } from "react-router-dom";
import Switches from "./Switches";
import EditIcon from "@material-ui/icons/Edit";
import NavbarLogin from "../HomePage/NavbarLogin";
import Footer from "../Footer";

const Settings = () => {
    const token = localStorage.getItem("token");
    if(token == null){
      return <Redirect to="/signup" />
    }
    return (
        <>
            <NavbarLogin/>
            <div className="profile-card profile-container " id="settings-section">

                <h2><b>Account Settings</b></h2><hr />

                <div className="notification">
                    <h3>Notification preferences</h3>
                    <p>Receive notification using E-mail: <span> <Switches /> </span></p>
                    <p>Receive notification using SMS: <span> <Switches /> </span></p>
                </div><hr />

                <h4>Change Password</h4>
                <div className="edit-icon">
                    <a href="/profile/change-password"><EditIcon /></a> 
                </div>
                <p>Password is case-sensitive and must be at least 6 characters and maximum 16 characters long. A good password should contain a combination of upper-case and lower-case letters, numbers and symbols. Allowed special characters are @#-_$%^&+=§!?</p>
            </div>
            <Footer/>
        </>
    );
};

export default Settings;