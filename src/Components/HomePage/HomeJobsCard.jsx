import React from 'react';
import { useState, useEffect } from 'react';
import HomedataJobs from './HomedataJobs';
import Container from '@material-ui/core/Container';
import axios from 'axios';

const HomeJobsCard = (props) => {
    const [data, setData] = useState([]);

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

    return (
        <>
            <Container className="home-card-container" >
                {
                    data.filter((val) => {
                        if (props.Term === "") {
                            return val;
                        } else if (val.title.toLowerCase().includes(props.Term.toLowerCase())) {
                            return val
                        }
                       else{
                         console.log(val);
                      }
                    }).slice(0, 3).map((val, index) => {
                        return (
                            <>
                                <HomedataJobs
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
        </>
    )
}

export default HomeJobsCard;
