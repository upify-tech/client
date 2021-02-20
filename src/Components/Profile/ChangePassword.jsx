import React from "react";
import { Redirect } from "react-router-dom";
import NavbarLogin from "../HomePage/NavbarLogin";
import Footer from "../Footer";

const ChangePassword = () => {
    const token = localStorage.getItem("token");
    if(token == null){
      return <Redirect to="/signup" />
    }
    return (
        <>
            <NavbarLogin/>
            <div className="profile-card profile-container">

                <h3>Change Password</h3>
                <form action="#">
                    <div className="form-item">
                        <label for="opassword">Enter old Password</label><br />
                        <input type="password" id="opassword" name="oldpassword" />
                    </div>

                    <div className="form-item">
                        <label for="npassword">Enter New password</label><br />
                        <input type="password" id="npassword" name="newpassword" />
                    </div>

                    <div className="form-item">
                        <label for="cnpassword">Conform new password</label><br />
                        <input type="password" id="cnpassword" name="conform-new-password" />
                    </div>
                    <div className="form-item">
                        <input type="submit" value="Change" />
                    </div>
                </form>

            </div>
            <Footer/>
        </>
    );
};

export default ChangePassword;