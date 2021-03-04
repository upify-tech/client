import React from 'react';
import { Redirect } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Paper, Container } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import { TextField, Button, MenuItem, Select, InputLabel} from '@material-ui/core';
import "../../../CSS/HomePage/WelcomeNote.css";
import '../../../CSS/AuthStyles/auth.css';
import "../../../CSS/Upload.css";
import NavbarLogin from '../NavbarLogin';
import Footer from '../../Footer';
import axios from 'axios'


const UploadCourses = () => {
    const [register, setRegister] = useState({
        title: "",
        tutor_name: "",
        about_tutor: "",
        domain: "",
        description: "",
        prerequisites: "",
        duration: "",
        paid_unpaid: "",
        amount:"",
        link: "",
    });

    const [submit, setSubmit] = useState({
        title: "",
        tutor_name: "",
        about_tutor: "",
        domain: "",
        description: "",
        prerequisites: "",
        duration: "",
        paid_unpaid: "",
        amount:"",
        link: "",
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
        axios({
          url:"/uploadcourses",
          method:'POST',
          data:register
        }).then(()=>{
          console.log("sucess")
          window.location.href="/home";
        }).catch((er)=>{
          console.log(register)
          console.log("Error123")
        })
    }

    // const ITEM_HEIGHT = 48;
    // const ITEM_PADDING_TOP = 8;

    // const MenuProps = {
    //     PaperProps: {
    //         style: {
    //             maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    //             width: 250,
    //         },
    //     },
    // };
  
    const useStyles = makeStyles((theme) => ({
        formControl: {
            margin: theme.spacing(1),
            minWidth: "30rem",
            alignContent: "Left"
        },
        selectEmpty: {
            marginLeft: theme.spacing(1),
        },
    }));
    const classes = useStyles();
    const [value, setValue] = React.useState('female');

    const handleChangeRadio = (event) => {
        setValue(event.target.value);
        console.log(event.target.value);
    };
    const token = localStorage.getItem("token");
    if(token == null){
      return <Redirect to="/signup" />
    }
    return (
        <>
            <NavbarLogin />
            <h2 className="center upload-heading" >Upload Course</h2>
            <Container maxWidth="sm" className="upload-container">
                <Paper elevation={3} className="signupPaper">
                    <Paper className="signin" id="paper">
                        <form onSubmit={submitFunc} id="myform">
                            <TextField className="myinput" name="title" value={register.title} onChange={handleChange} fullWidth={true} label="Course Title" variant="standard" required={true} />
                            <TextField className="myinput" name="description" value={register.description} onChange={handleChange} fullWidth={true} label="Course Description" variant="standard" required={true} />
                            <br />
                            <InputLabel style={{ textAlign: "left" }}>Select Domain</InputLabel>
                            <FormControl className={classes.formControl} fullWidth={true} >
                                <InputLabel id="demo-simple-select-label">Domain</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    onChange={handleChange}
                                    name="domain"
                                    value={register.domain}

                                >
                                    <MenuItem value="Data Science ">Data Science</MenuItem>
                                    <MenuItem value="Blockchan">Blockchan</MenuItem>
                                    <MenuItem value="Cyber Security">Cyber Security</MenuItem>
                                    <MenuItem value="Cloud Computing">Cloud Computing</MenuItem>
                                    <MenuItem value="Programming">Programming</MenuItem>
                                    <MenuItem value="Web Development">Web Development</MenuItem>
                                    <MenuItem value="others">others</MenuItem>
                                </Select>
                            </FormControl>
                            <TextField className="myinput" name="prerequisites" value={register.prerequisites} onChange={handleChange} fullWidth={true} label="Prerequisites" variant="standard" required={true} />
                            <TextField className="myinput" name="tutor_name" value={register.tutor_name} onChange={handleChange} fullWidth={true} label="Name Of Tutor" variant="standard" required={true} />
                            <TextField className="myinput" name="duration" value={register.duration} onChange={handleChange} fullWidth={true} label="Course Duration" variant="standard" required={true} />
                            <br />
                            <br />
                            <FormControl component="fieldset" fullWidth={true} style={{ alignItems: "left" }}>
                                <FormLabel component="legend" style={{ textAlign: "left" }}>Fee Struture</FormLabel>
                                <RadioGroup aria-label="gender" name="paid_unpaid" value={value} onChange={handleChangeRadio}>
                                    <FormControlLabel value="paid" control={<Radio />} label="Paid" />
                                    <FormControlLabel value="unpaid" control={<Radio />} label="Un Paid" />
                                </RadioGroup>
                            </FormControl>

                            <TextField className="myinput" name="amount" value={register.amount} onChange={handleChange} fullWidth={true} label="Amount" variant="standard" required={false} />
                            <TextField className="myinput" name="link" value={register.link} onChange={handleChange} fullWidth={true} label="Registration Link" variant="standard" required={true} />

                            <Button className="myinput" type="submit" fullWidth={true} variant="outlined" color="secondary">submit</Button>
                        </form>
                    </Paper>
                </Paper>
            </Container>
            <Footer />

        </>
    );
}

export default UploadCourses;