import React from 'react';
import { Redirect } from "react-router-dom";
import { Typography } from '@material-ui/core';
import { Container } from 'react-bootstrap';
import Footer from "../../Footer";
import NavbarLogin from '../NavbarLogin';
import WelcomeNote from '../WelcomeNote';
import MyCoursesData from '../../../Data/MyCoursesData';
import MyCoursesCard from './MyCoursesCard';



const MyCourses = () => {
    const token = localStorage.getItem("token");
    if(token == null){
      return <Redirect to="/signup" />
    }
    return (
        <>
            <NavbarLogin/>
            <br/>
            <br/>
            <WelcomeNote/>
            <Typography gutterBottom variant="h5" component="h2" className="center">
                Your Courses
            </Typography>
            <Container >

                {
                    MyCoursesData.map((val, index) => {
                        return (
                            <>
                                <MyCoursesCard
                                    imgsrc={val.imgsrc}
                                    title={val.title}
                                    sname={val.sname}
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

export default MyCourses;