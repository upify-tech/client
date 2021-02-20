import React from 'react';
import { useState, useEffect } from 'react';
import HomedataWebinars from '../HomePage//HomedataWebinars';
import Container from '@material-ui/core/Container';
import axios from 'axios';

const LandingWebinarsCard = () => {
    const [data, setData] = useState([]);

    const getData = () => {
        console.log("getting data");
        axios.get('/uploadwebinar').then((response) => {
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
    }, []);

    return (
        <>            
        <Container className="home-card-container">
            {
                data.slice(0, 3).map((val, index) => {
                    return (
                        <>
                            <HomedataWebinars
                                title={val.title}
                                speaker_name={val.speaker_name}
                                about_speaker={val.about_speaker}
                                domain={val.domain}
                                description={val.description}
                                audience={val.audience}
                                time={val.time}
                                date={val.date}
                                online_offline={val.online_offline}
                                location={val.location}
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

export default LandingWebinarsCard;