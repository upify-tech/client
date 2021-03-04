import React from 'react';
import { useState, useEffect } from 'react';
import HomedataCourses from '../HomePage//HomedataCourses';
import Container from '@material-ui/core/Container';
import '../../CSS/HomePage/Home.css';
import axios from 'axios'

const LandingCoursesCard = () => {
    const [data, setData] = useState([]);

    const getData = () => {
        console.log("getting data");
        axios.get('/uploadcourses').then((response) => {
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


    return (
        <>
            <Container className="home-card-container">
                {
                    data.slice(0, 3).map((val, index) => {
                        return (
                            <>
                                <HomedataCourses
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
        </>
    )
}

export default LandingCoursesCard;
