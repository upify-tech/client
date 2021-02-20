import React from 'react';
import Hdata from '../data/Hdata';
import Homedata from './Homedata';
import Container from '@material-ui/core/Container';


const HomeCard = () => {
    return (
        <>
            <Container fixed style={{ textAlign: 'center', marginLeft: "2.2%" }} >
                <h2>jnlsdndlsdnl</h2>
                {
                    Hdata.map((val, index) => {
                        return (
                            <>
                                <Homedata
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
        </>
    )
}

export default HomeCard;