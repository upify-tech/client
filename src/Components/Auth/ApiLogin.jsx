import React from 'react';
import {Button} from '@material-ui/core';
import '../../CSS/AuthStyles/auth.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const ApiLogin = () => {
    const str = " OR ";
    return (
        <>
        <div className="apiLogin">
            <Button variant="outlined" fullWidth={true} color="secondary"><FacebookIcon className="adjustIcon" /><span>Login With Facebook</span></Button><br></br>
            <Button variant="outlined" fullWidth={true}  color="secondary"><img className="adjustIcon" src="https://cdn.worldvectorlogo.com/logos/google-icon.svg" alt="img" width="20px" height="20px" /><span>Login With Google</span></Button><br></br>
            <Button variant="outlined" fullWidth={true}  color="secondary"><LinkedInIcon className="adjustIcon" /><span>Login With LinkedIn</span></Button><br></br>
        </div>
        <div>
            <h6 className="or">{str}</h6>
        </div>
        </>
    );
}

export default ApiLogin;