import React from 'react';
import { useState, useEffect } from 'react';
import HomedataCourses from './HomedataCourses';
import Container from '@material-ui/core/Container';
import '../../CSS/HomePage/Home.css';
import axios from 'axios'

const HomeCoursesCard = (props) => {
    const [data, setData] = useState([]);

    const getData = () => {
        console.log("getting data");
        axios.get('https://upify-tech.herokuapp.com/uploadcourses').then((response) => {
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
                    data.filter((val) => {
                        if (props.Term === "") {
                            return val;
                        } else if (val.title.toLowerCase().includes(props.Term.toLowerCase())) {
                            return val;
                        }
                          else{
                             console.log(val);
                        }
                    }).slice(0, 3).map((val, index) => {
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

export default HomeCoursesCard;
