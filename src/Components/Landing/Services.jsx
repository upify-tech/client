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
            <h2 className="center">Courses </h2>
            <LandingCoursesCard/>
            <h2 className="center">Internships </h2>
            <LandingInternshipsCard/>
            <h2 className="center">Jobs </h2>
            <LandingJobsCard/>
            <h2 className="center">Webinars </h2>
            <LandingWebinarsCard/>
        </div>
        </>
    ); 
};

export default Services;