import React,{useEffect,useState} from "react";
import { Redirect } from "react-router-dom";
import Switches from "./Switches";
import EditIcon from "@material-ui/icons/Edit";
import NavbarLogin from "../HomePage/NavbarLogin";
import Footer from "../Footer";
import axios from "axios";

const Profile = () => {
    const [data,setData] = useState([]);

    console.log(data)

    const getData = () => {
        console.log("getting data");
        axios.get(`/register/${token}`).then((response)=>{
          const gettingdata = response.data;
          console.log(gettingdata);
          setData(()=>{
            return(gettingdata)
          })
          console.log(data);
        })} 
    
    useEffect(()=>{ 
          getData()
          // eslint-disable-next-line react-hooks/exhaustive-deps
      },[]);
    const token = localStorage.getItem("token");
    if(token == null){
      return <Redirect to="/signup" />
    }
    return (
        <>
            <NavbarLogin />
            <div className="profile-card profile-container">
                <h2 className="center">Profile Details</h2>
                <div className="edit-card">
                    <div className="edit-icon">
                        <a href="/profile/edit-icon"><EditIcon /></a>
                    </div>
                    <h4>Name:{data.username}</h4>
                    {/* <h4> Email:{data.interests&&data.interests}</h4> */}
                    <h4> Email:{data.email}</h4>
                </div>
            </div>
            <div className="profile-card profile-container">
                <h2><b>My Intrests</b></h2>
                <input type="checkbox" name="machine learning" value="ml" /> Machine Learning<br />
                <input type="checkbox" name="artificial intelligence" value="ai" /> Artificial Intelligence<br />
                <input type="checkbox" name="web development" value="wd"checked /> Web Development<br />
                <input type="checkbox" name="Data Science" value="ds"checked /> Data Science<br />
                <input type="checkbox" name="Blockchan" value="bl" /> Blockchan<br />
                <input type="checkbox" name="Cyber Security" value="cs" /> Cyber Security<br />
                <input type="checkbox" name="Cloud Computing" value="cl" /> Cloud Computing<br />
                <input type="checkbox" name="Programming" value="pl" /> Programming<br />

            </div>
            
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
            <Footer />


        </>
    );
};

export default Profile;