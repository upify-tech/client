import React,{useEffect,useState} from 'react';
import { Redirect } from "react-router-dom";
import HomeWebinarsCard from './HomeWebinarsCard';
import HomeJobsCard from './HomeJobsCard';
import HomeCoursesCard from './HomeCoursesCard';
import HomeInternshipsCard from './HomeInternshipsCard';
import { Container } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';
import Footer from "../Footer";
import NavbarLogin from './NavbarLogin';
import axios from "axios";


const Home = () => {
    const [profiledata,setProfileData] = useState([]);

    console.log(profiledata)

    const getProfileData = () => {
        console.log("getting data");
        axios.get(`https://upify-tech.herokuapp.com/register/${token}`).then((response)=>{
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
    const [searchTerm, setsearchTerm] = useState("");
    const token = localStorage.getItem("token");
    if (token == null) {
        return <Redirect to="/signup" />
    }
    return (
        < >
            <div className="home">
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
                <h2 className="center">Recommended Internships</h2>
                <HomeInternshipsCard  Term={searchTerm}/>
                <hr />
                <h2 className="center">Recommended Jobs</h2>
                <HomeJobsCard Term={searchTerm}/>
                <hr />
                <h2 className="center">Recommended Courses</h2>
                <HomeCoursesCard Term={searchTerm}/>
                <hr />
                <h2 className="center">Recommended Webinars</h2>
                <HomeWebinarsCard Term={searchTerm}/>
            </div>
            <Footer />
        </>
    )
}

export default Home;
