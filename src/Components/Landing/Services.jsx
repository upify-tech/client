import React from "react";
import LandingCoursesCard from "./LandingCoursesCard";
import LandingInternshipsCard from "./LandingInternshipsCard";
import LandingJobsCard from "./LandingJobsCard";
import LandingWebinarsCard from "./LandingWebinarsCard";

const Services = ()=>{
    return(
        <>
        <div  id="services-section">
            <h1 className="center">Our Services</h1>
            <h2 className="center">Courses Samples</h2>
            <LandingCoursesCard/>
            <h2 className="center">Internships Samples</h2>
            <LandingInternshipsCard/>
            <h2 className="center">Jobs Samples</h2>
            <LandingJobsCard/>
            <h2 className="center">Webinars Samples</h2>
            <LandingWebinarsCard/>
        </div>
        </>
    ); 
};

export default Services;