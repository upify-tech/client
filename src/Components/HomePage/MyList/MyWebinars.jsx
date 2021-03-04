import React from 'react';
import { Redirect } from "react-router-dom";
import { Typography } from '@material-ui/core';
import { Container } from 'react-bootstrap';
import Footer from "../../Footer";
import NavbarLogin from '../NavbarLogin';
import WelcomeNote from '../WelcomeNote';
import MyWebinarsData from '../../../Data/MyWebinarsData';
import MyWebinarsCard from './MyWebinarsCard';



const MyWebinars = () => {
    const token = localStorage.getItem("token");
    if(token == null){
      return <Redirect to="/signup" />
    }
    return (
        <>
            {/* <Home></Home> */}
            {/* <Home></Home> */}
            {/* <Navbar></Navbar> */}
            <NavbarLogin/>
            <br/>
            <br/>
            <WelcomeNote/>
            <Container>
                <Typography gutterBottom variant="h5" component="h2" className="center">
                Your Webinars
                </Typography>
                {/* <RowComp /> */}

                {
                    MyWebinarsData.map((val, index) => {
                        return (
                            <>
                                <MyWebinarsCard
                                    imgsrc={val.imgsrc}//"https://media.timeout.com/images/105630861/750/422/image.jpg"
                                    title={val.title}//"A ORIGINAL NETFLIX SERIES"
                                    sname={val.sname}//"Stranger Things"
                                    link={val.link}//"https://www.netflix.com/in/title/80057281"
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

export default MyWebinars;