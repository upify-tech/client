import React from 'react';
import { useState } from 'react';
import  {CssBaseline,Container,Typography } from '@material-ui/core';
import { Tabs,Tab,AppBar } from '@material-ui/core';
import Signin from './Signin.jsx';
import Signup from './Signup.jsx';
import  '../../CSS/AuthStyles/auth.css';
import Navbar from '../Landing/Navbar.jsx';

const Auth = () => {
    const [value,setValue] = useState(0);
    const handleChange = (event,val) => {
      setValue(val);
    }
    const TabPanel = (props) => {
      const {children,value,index} = props;
      return(
        <div>
          {value === index && (<h1>{children}</h1>)}
        </div>
      );
    }


    return (
        <>
        <Navbar/>
        <CssBaseline />
          <Container maxWidth="sm">
         <Typography component="div"  />
         <AppBar position="static" color="default" className = "myclass" >
           <Tabs value={value}
                 onChange={handleChange}
                 variant="fullWidth"
                 aria-label="full width tabs example"
                 textColor="secondry"
                 >
             <Tab label = "Sign In" />
             <Tab label = "Sign Up" />
           </Tabs>
         </AppBar>
         <TabPanel value={value} index={0}><Signin /></TabPanel>
         <TabPanel value={value} index={1}><Signup /></TabPanel>
          </Container>
        </> 
    );
}

export default Auth;