import React, { useState, useEffect } from 'react';
import { Redirect } from "react-router-dom";
import { Typography } from '@material-ui/core';
import { Container } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';
import CoursesCard from './CoursesCard';
import Footer from "../Footer";
import NavbarLogin from './NavbarLogin';
import axios from 'axios'


const Courses = () => {
    const [data, setData] = useState([]);
    const [searchTerm, setsearchTerm] = useState("");


    const getData = () => {
        console.log("getting data");
        axios.get('https://github.com/upify-tech/uploadcourses').then((response) => {
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
        axios.get(`https://github.com/upify-tech/register/${token}`).then((response)=>{
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
            <Typography gutterBottom variant="h5" component="h2" className="center" id="home-typography">
                Recommended Courses
                </Typography>
            <Container className="home-card-container">
                {
                    data.filter((val) => {
                        if (searchTerm === "") {
                            return val;
                        } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return val
                        }
                        else {
                            return val;
                        }
                    }).map((val, index) => {
                        return (
                            <>
                                <CoursesCard
                                    title={val.title}
                                    tutor_name={val.tutor_name}
                                    about_tutor={val.about_tutor}
                                    domain={val.domain}
                                    description={val.description}
                                    prerequisites={val.prerequisites}
                                    duration={val.duration}
                                    paid_unpaid={val.paid_unpaid}
                                    amount={val.amount}
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

export default Courses;
