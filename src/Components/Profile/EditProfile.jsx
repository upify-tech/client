import React from "react";
import { Redirect } from "react-router-dom";
import NavbarLogin from "../HomePage/NavbarLogin";
import Footer from "../Footer";
import axios from "axios";
import { useState } from "react";

const EditProfile=()=>{
    const [register, setRegister] = useState({
        username: "",
        email: "",
    });

    const [submit, setSubmit] = useState({
        username: "",
        email: "",
    })

    // const [profiledata,setProfileData] = useState([]);

    // console.log(profiledata)

    // const getProfileData = () => {
    //     console.log("getting data");
    //     axios.get(`/register/${token}`).then((response)=>{
    //       const gettingdata = response.data;
    //       console.log(gettingdata);
    //       setProfileData(()=>{
    //         return(gettingdata)
    //       })
    //       console.log(profiledata);
    //     })} 
    
    // useEffect(()=>{ 
    //       getProfileData()
    //   },[]);

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
        axios.get(`/register/${token}`).then((response)=>{
            const updateData = response.data;
             axios.put(`/register/${updateData._id}`,{
                 username : register.username,
                 email : register.email,
             }).then((response)=>{console.log(response)}).catch((err)=>{console.log(err)})
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