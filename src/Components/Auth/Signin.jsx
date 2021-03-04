import React from 'react';
import { useState } from 'react';
import {Paper} from '@material-ui/core';
import {TextField,Button} from '@material-ui/core';
import ApiLogin from './ApiLogin';
import axios from 'axios';
import bcrypt from 'bcryptjs';



const Signin = () => {

    const [login, setLogin] = useState({
        username:"",
        password:"",
      });
   
    const [submit,setSubmit] = useState({
        username:"",
        password:"",
      })
      console.log(submit);
      const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setLogin((prev)=>{
          return({
            ...prev,
            [name]:value
          });
        })
      };

      const submitFunc = (event) => {
        event.preventDefault();
        setSubmit(login);
     
        axios.get(`https://upify-tech.herokuapp.com/register/${login.username}`).then((response)=>{
          const userData = response.data;
          console.log(userData);
          if(userData){
            let isMatch = bcrypt.compareSync(login.password,userData.password);
            if(isMatch){
              console.log("is matched called");
              // <Route exact path="/user" component={HomePage} />
              const details=userData.username;
              localStorage.setItem("token",details);
              
      
              //setIsLoggedIn(true);

              //window.location.href=`/${userData._id}/Home`;
              window.location.href="/home";
            } else {
              alert("invalid password");
            }
          } else {
            alert("invalid credentials");
          }
        })
        
        setLogin({
            username:"",
            password:"",
        })
      } 

     
    return(
        <>
        <Paper elevation={3} className = "signinPaper">
        <ApiLogin />
        <Paper className="signin" id="paper">
        <form onSubmit={submitFunc}>
        <TextField className="myinput" fullWidth={true} label="Username" variant="standard" required={true} name="username" onChange={handleChange} value={login.username}/>
        <TextField type="password" className="myinput" fullWidth={true} label="password" variant="standard" required={true} name="password" onChange={handleChange} value={login.password} />
        <Button type="submit" className="myinput" fullWidth={true} variant="outlined"  color="secondary">Login</Button>
        </form>
        </Paper>
        </Paper> 
        
        </>
    );
}

export default Signin;
