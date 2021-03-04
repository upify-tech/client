import React, { useState, useEffect } from 'react';
import { Redirect } from "react-router-dom";
import { Typography } from '@material-ui/core';
import { Container } from 'react-bootstrap';
import {Jumbotron} from 'react-bootstrap';
import JobsCard from './JobsCard';
import NavbarLogin from './NavbarLogin';
import Footer from "../Footer";
import axios from 'axios';

const Jobs = () => {
    const [data, setData] = useState([]);
    const [searchTerm, setsearchTerm] = useState("");


    const getData = () => {
        console.log("getting data");
        axios.get('https://upify-tech.herokuapp.com/uploadjob').then((response) => {
            const gettingdata = response.data;
            console.log(gettingdata);
            setData(() => {
                return (gettingdata)
            })
            console.log(data);
        })
    }

    useEffect(() => {
        getData()
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const [profiledata,setProfileData] = useState([]);

    console.log(profiledata)

    const getProfileData = () => {
        console.log("getting data");
        axios.get(`https://upify-tech.herokuapp.com/register/${token}`).then((response)=>{
          const gettingdata = response.data;
          console.log(gettingdata);
          setProfileData(()=>{
            return(gettingdata)
          })
          console.log(profiledata);
        })} 
    
    useEffect(()=>{ 
          getProfileData()
           // eslint-disable-next-line react-hooks/exhaustive-deps
      },[]);

    const token = localStorage.getItem("token");
    if (token == null) {
        return <Redirect to="/signup" />
    }
    return (
        <>
            <NavbarLogin />
            <br />
            <br />
            <Jumbotron fluid>
                <Container>
                    <h1>Welcome {profiledata.username}</h1>
                    <p>
                        You are at the right place to find the suitable courses, internships, jobs to build your career.
                    </p>
                    <input type="text"
                        placeholder="Search.."
                        className="search-field"
                        onChange={(event) => {
                            setsearchTerm(event.target.value)
                        }}
                    />
                </Container>
            </Jumbotron>
            <Typography gutterBottom variant="h5" component="h2" className="center">
                Recommended Jobs
                </Typography>
            <Container className="home-card-container">

                {
                    data.filter((val)=>{
                        if(searchTerm===""){
                            return val;
                        }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                            return val
                        }
                        else {
                            return val;
                        }
                    }).map((val, index) => {
                        return (
                            <>
                                <JobsCard
                                    title={val.title}
                                    description={val.description}
                                    comp_name={val.comp_name}
                                    domain={val.domain}
                                    req_skills={val.req_skills}
                                    add_skills={val.add_skills}
                                    location={val.location}
                                    education={val.education}
                                    experience={val.experience}
                                    ctc={val.ctc}
                                    link={val.link}
                                />
                            </>
                        );
                    })
                }
            </Container>
            <Footer />

        </>
    )
}

export default Jobs;
