import React from 'react';
import {useState} from 'react';
import { Paper } from '@material-ui/core';
import {TextField,Button,MenuItem,Select,InputLabel,Checkbox,ListItemText,Input} from '@material-ui/core';
import '../../CSS/AuthStyles/auth.css';
import axios from "axios";

const Signup = () => {
  const [register, setRegister] = useState({
    username:"",
    email:"",
    password:"",
    cpassword:"",
    interests:[],
  });

  const [submit,setSubmit] = useState({
    username:"",
    email:"",
    password:"",
    cpassword:"",
    interests:[],
  })
  console.log(submit);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setRegister((prev)=>{
      return({
        ...prev,
        [name]:value
      });
    })
  };
 

  const postRegister = () => {
    axios({
      url:"https://upify-tech.herokuapp.com/register",
      method:'POST',
      data:register
    }).then(()=>{
      console.log("success");
      // window.location.href="/home";
  }).catch(()=>{ console.log("Error");
 });
 }

 const isMatching = () => {
   if(register.password === register.cpassword){
     setSubmit(register);
     postRegister();
     setRegister({
       username:"",
       email:"",
       password:"",
       cpassword:"",
       interests:[]
   })
   } else {
     alert('password not matching');
   }
 }
 const submitFunc = (event) => {
   event.preventDefault();
   isMatching();
   localStorage.setItem("token",register.username);

   window.location.href="/home";
 }


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  const domain = [
    'Data Science',
    'Blockchan',
    'Cyber Security',
    'Cloud Computing',
    'Programming'
  ];
    return(
        <>
          <Paper elevation={3} className = "signupPaper">
            <Paper className="signin" id="paper">
              <form onSubmit={submitFunc} id="myform">
                <TextField className="myinput" name="username" value={register.username} onChange={handleChange} fullWidth={true} label="Username" variant="standard" required={true} />
                <TextField type="email" className="myinput" name="email" value={register.email} onChange={handleChange} fullWidth={true} label="Email" variant="standard" required={true} />
                <TextField type="password" className="myinput" name="password" value={register.password} onChange={handleChange} fullWidth={true} label="password" variant="standard" required={true} />
                <TextField type="password" className="myinput" name="cpassword" value={register.cpassword} onChange={handleChange} fullWidth={true} label="confirm password" variant="standard" required={true} />
                <InputLabel style={{textAlign:"left"}}>Interest</InputLabel>
                <Select
                  fullWidth={true}
                  multiple
                  name="interests"
                  value={register.interests}
                  onChange={handleChange}
                  input={<Input />}
                  renderValue={(selected) => selected.join(' | ')}
                  MenuProps={MenuProps}
                >
                {domain.map((name) => (
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={register.interests.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
                </Select>
                <Button className="myinput" type="submit" fullWidth={true} variant="outlined" color="secondary" >submit</Button>
              </form>
            </Paper>
          </Paper>
        </>
    );
}

export default Signup;
