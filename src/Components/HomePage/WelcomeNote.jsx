import React from 'react';
import {Jumbotron,Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../CSS/HomePage/WelcomeNote.css';
import SearchField from 'react-search-field';

const WelcomeNote = () => {
    return(
        <>
        <Jumbotron fluid>
        <Container>
            <h1>Welcome Mohammed</h1>
                <p>
                 You are at the right place to find the suitable courses, internships, jobs to build your career.
                </p>
                <SearchField
                    placeholder="Search..."
                    // onChange={onChange}
                    // searchText="This is initial search text"
                    classNames="mysearch"
/>
        </Container>
        </Jumbotron>
        </>
    );
}

export default WelcomeNote;