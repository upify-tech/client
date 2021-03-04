import React from 'react';
import { Redirect } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../../CSS/HomePage/WelcomeNote.css";
import { useState } from 'react';
import { Paper, Container } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import axios from 'axios'
import { TextField, Button, MenuItem, Select, InputLabel} from '@material-ui/core';
import '../../../CSS/AuthStyles/auth.css';
import NavbarLogin from '../NavbarLogin';
import Footer from '../../Footer';



const UploadInternships = () => {
    const [register, setRegister] = useState({
        title: "",
        description: "",
        comp_name: "",
        domain: "",
        req_skills: "",
        add_skills: "",
        duration: "",
        location: "",
        education: "",
        experience: "",
        ctc: "",
        link: "",
    });

    const [submit, setSubmit] = useState({
        title: "",
        description: "",
        comp_name: "",
        domain: "",
        req_skills: "",
        add_skills: "",
        duration: "",
        location: "",
        education: "",
        experience: "",
        ctc: "",
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
          url:"https://upify-tech.herokuapp.com/uploadinternship",
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
    };
    const token = localStorage.getItem("token");
    if(token == null){
      return <Redirect to="/signup" />
    }
    return (
        <>
            <NavbarLogin />
            <h2 className="center upload-heading" >Upload Internship</h2>
            <Container maxWidth="sm" className="upload-container">
                <Paper elevation={3} className="signupPaper">
                    <Paper className="signin" id="paper">
                        <form onSubmit={submitFunc} id="myform">
                            <TextField className="myinput" name="title" value={register.title} onChange={handleChange} fullWidth={true} label="Internship Title" variant="standard" required={true} />
                            <TextField className="myinput" name="description" value={register.description} onChange={handleChange} fullWidth={true} label="Internship Description" variant="standard" required={true} />
                            <TextField className="myinput" name="comp_name" value={register.comp_name} onChange={handleChange} fullWidth={true} label="Company Hiring For/Company Name" variant="standard" required={true} />
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
                            <TextField className="myinput" name="req_skills" value={register.req_skills} onChange={handleChange} fullWidth={true} label="Required Skills" variant="standard" required={true} />
                            <TextField className="myinput" name="add_skills" value={register.add_skills} onChange={handleChange} fullWidth={true} label="Additional Skills" variant="standard" required={true} />
                            <TextField className="myinput" name="duration" value={register.duration} onChange={handleChange} fullWidth={true} label="Internship Duration" variant="standard" required={true} />
                            <TextField className="myinput" name="location" value={register.location} onChange={handleChange} fullWidth={true} label="Locations(s)" variant="standard" required={true} />
                            <TextField className="myinput" name="education" value={register.education} onChange={handleChange} fullWidth={true} label="Education" variant="standard" required={true} />
                            <InputLabel style={{ textAlign: "left" }}>Experience</InputLabel>
                            <FormControl className={classes.formControl} fullWidth={true} >
                                <InputLabel id="demo-simple-select-label">Min Exp</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    onChange={handleChange}
                                    name="minExp"
                                    value={register.minExp}

                                >
                                    <MenuItem value={0}>Zero</MenuItem>
                                    <MenuItem value={1}>One Year</MenuItem>
                                    <MenuItem value={2}>Two Year</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl className={classes.formControl} fullWidth={true} >
                                <InputLabel id="demo-simple-select-helper-label">Max Exp</InputLabel>
                                <Select
                                    labelId="demo-simple-select-helper-label"
                                    id="demo-simple-select-helper"
                                    value={register.maxExp}
                                    name="maxExp"
                                    onChange={handleChange}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={0}>Zero</MenuItem>
                                    <MenuItem value={1}>One Year</MenuItem>
                                    <MenuItem value={2}>Two Year</MenuItem>
                                </Select>
                            </FormControl>

                            <br />
                            <br />
                            <FormControl component="fieldset" fullWidth={true} style={{ alignItems: "left" }}>
                                <FormLabel component="legend" style={{ textAlign: "left" }}>CTC</FormLabel>
                                <RadioGroup aria-label="gender" name="ctc" value={value} onChange={handleChangeRadio}>
                                    <FormControlLabel value="best_in_industry" control={<Radio />} label="Best_in_industry" />
                                    <FormControlLabel value="undisclosed" control={<Radio />} label="Undisclosed" />
                                </RadioGroup>
                            </FormControl>

                            <TextField className="myinput" name="link" value={register.link} onChange={handleChange} fullWidth={true} label="Registration Link" variant="standard" required={true} />

                            <form className={classes.container} noValidate>
                                <TextField style={{ alignItems: "left" }}
                                    id="date"
                                    label="Last date to Apply"
                                    type="date"
                                    defaultValue="2021-01-01"
                                    className={classes.textField}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </form>

                            <Button className="myinput" type="submit" fullWidth={true} variant="outlined" color="secondary">submit</Button>
                        </form>
                    </Paper>
                </Paper>
            </Container>
            <Footer />

        </>
    );
}

export default UploadInternships;
