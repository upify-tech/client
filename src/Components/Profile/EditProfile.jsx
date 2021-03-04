import React from "react";
import { Redirect } from "react-router-dom";
import NavbarLogin from "../HomePage/NavbarLogin";
import Footer from "../Footer";
import axios from "axios";
import { useState } from "react";

const EditProfile=()=>{
    const [register, setRegister] = useState({
        username:"",
        email:""
    });

    const [submit, setSubmit] = useState({
        username:"",
        email:""
    })
    console.log(submit);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setRegister((prev) => {
            return ({
                ...prev,
                [name]: value
            });
        })
    };
    
    const submitFunc = (event) => {
        event.preventDefault();
        setSubmit(register)

        axios.get(`https://upify-tech.herokuapp.com/register/${token}`).then((response)=>{
            const updateData = response.data;
            localStorage.setItem("token",register.username);
            axios.put(`https://upify-tech.herokuapp.com/register/${updateData._id}`,{
                username : register.username || updateData.username,
                 email : register.email || updateData.email,
             }).then((response)=>{
                 console.log(response)}).catch((err)=>{console.log(err)})
                 window.location.href = "/profile";
         });
    }

    const token = localStorage.getItem("token");
    if(token == null){
      return <Redirect to="/signup" />
    }
    return(
        <>
            <NavbarLogin/>
            <div className="profile-card profile-container">
                    <h3>Change Profile Details</h3>

                    <form onSubmit={submitFunc}>
                        <div className="form-item">
                            <label for="fname">User Name:</label><br />
                            <input type="text" id="uname" name="username" value={register.username} onChange={handleChange} placeholder="Your name.." />
                        </div>

                        {/* <div className="form-item">
                            <label for="lname">Last Name:</label><br />
                            <input type="text" id="lname" name="lastname" value={register.lastname} onChange={handleChange} placeholder="Your last name.." />
                        </div> */}

                        <div className="form-item">
                            <label for="email">Email:</label><br />
                            <input type="text" id="email" name="email" value={register.email} onChange={handleChange} placeholder="Enter your email" />
                        </div>
                        <div className="form-item">
                            <input type="submit" value="Submit" />
                        </div>
                    </form>
            </div>
            <Footer/>

        </>
    );
};

export default EditProfile;
