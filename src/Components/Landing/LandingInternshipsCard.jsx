import React, { useState, useEffect } from 'react';
import HomedataInternships from '../HomePage/HomedataInternships';
import Container from '@material-ui/core/Container';
import '../../CSS/HomePage/Home.css';
import axios from 'axios';


const LandingInternshipsCard = () => {
    const [data, setData] = useState([]);

    const getData = () => {
        axios.get('https://upify-tech.herokuapp.com/uploadinternship').then((response) => {
            const gettingdata = response.data;
            setData(() => {
                return (gettingdata)
            })
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
                    data.slice(0,3).map((val, index) => {
                        return (
                            <>
                                <HomedataInternships
                                    title= {val.title}
                                    description= {val.description}
                                    comp_name= {val.comp_name}
                                    domain=  {val.domain}
                                    req_skills= {val.req_skills}
                                    add_skills= {val.add_skills}
                                    duration= {val.duration}
                                    location= {val.location}
                                    education= {val.education}
                                    experience= {val.experience}
                                    ctc= {val.ctc}
                                    link= {val.link}
                                />
                            </>
                        );
                    })

                }
            </Container>
        </>
    )
}

export default LandingInternshipsCard;
