import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import About from "./Components/Landing/About";
import Services from "./Components/Landing/Services";
import Contact from "./Components/Landing/Contact";
import "./CSS/Navbar.css";
import "./CSS/index.css";
import "./CSS/Footer.css"
import "./CSS/Profile.css"
import Home from "./Components/HomePage/Home";
import Courses from "./Components/HomePage/HomeCourses";
import Internships from "./Components/HomePage/HomeInternships";
import Jobs from "./Components/HomePage/HomeJobs";
import Webinars from "./Components/HomePage/HomeWebinars";
import LandingContent from "./Components/Landing/LandingContent";
import Profile from "./Components/Profile/Profile";
import UploadJobs from "./Components/HomePage/Upload/UploadJobs";
import Settings from "./Components/Profile/Settings";
import EditProfile from "./Components/Profile/EditProfile";
import ChangePassword from "./Components/Profile/ChangePassword";
import UploadWebinars from "./Components/HomePage/Upload/UploadWebinars";
import UploadInternships from "./Components/HomePage/Upload/UploadInternships";
import UploadCourses from "./Components/HomePage/Upload/UploadCourses";
import Auth from "./Components/Auth/Auth";
import Logout from "./Components/Auth/Logout";

// import MyCourses from "./Components/HomePage/MyList/MyCourses";
// import MyInternships from "./Components/HomePage/MyList/MyInternships";
// import MyJobs from "./Components/HomePage/MyList/MyJobs";
// import MyWebinars from "./Components/HomePage/MyList/MyWebinars";


const App = () => {
   
    return (
        <>
            <Switch>
                <Route exact path="/" component={LandingContent} />
                <Route exact path="/#services-section" component={Services} />
                <Route exact path="/#about-section" component={About} />
                <Route exact path="/#contact-section" component={Contact} />
                <Route exact path="https://upifytech.netlify.app/signup" component={Auth} />
                <Route exact path='/home' component={Home}></Route>
                <Route exact path='/courses' component={Courses}></Route>
                <Route exact path='/internships' component={Internships}></Route>
                <Route exact path='/jobs' component={Jobs}></Route>
                <Route exact path='/webinars' component={Webinars}></Route>
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/profile/settings" component={Settings} />
                <Route exact path="/profile/edit-icon" component={EditProfile} />
                <Route exact path="/profile/change-password" component={ChangePassword} />
                <Route exact path="/uploadjob" component={UploadJobs} />
                <Route exact path="/uploadwebinar" component={UploadWebinars} />
                <Route exact path="/uploadinternship" component={UploadInternships} />
                <Route exact path="/uploadcourses" component={UploadCourses} />
                <Route exact path="/logout" component={Logout} />
                <Redirect to="/" />
                {/* <Route exact path="/profile/mycourses" component={MyCourses} /> */}
                {/* <Route exact path="/profile/myinternships" component={MyInternships} /> */}
                {/* <Route exact path="/profile/myjobs" component={MyJobs} /> */}
                {/* <Route exact path="/profile/mywebinars" component={MyWebinars} /> */}
            </Switch>

        </>
    );
};

export default App;

