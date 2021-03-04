// import React from "react";
// import { Switch, Route, Redirect } from "react-router-dom";
// import About from "./About";
// import Services from "./Services";
// import Contact from "./Contact";
// import Navbar from "./Navbar";
// import Footer from "../Footer"
// import "../../CSS/Navbar.css";
// import "../../CSS/index.css";
// import "../../CSS/Footer.css"
// import "../../CSS/Profile.css"
// import Profile from "../Profile/Profile";
// import LandingContent from "./LandingContent";
// import MyCourses from "../Profile/MyCourses";
// import MyInternships from "../Profile/MyInterships";
// import MyJobs from "../Profile/MyJobs";
// import Settings from "../Profile/Settings";
// import EditProfile from "../Profile/EditProfile";
// import ChangePassword from "../Profile/ChangePassword";
// import Auth from "../Auth/Auth";

// const Landing = () => {
//     return (
//         <>
//             <Navbar />
//             <Switch>
//                 <Route exact path="/signup" component={Auth} />
//                 <Route exact path="/profile/change-password" component={ChangePassword} />
//                 <Route exact path="/profile/edit-icon" component={EditProfile} />
//                 <Route exact path="/profile/settings" component={Settings} />
//                 <Route exact path="/profile/mycourses" component={MyCourses} />
//                 <Route exact path="/profile/myinternships" component={MyInternships} />
//                 <Route exact path="/profile/myjobs" component={MyJobs} />
//                 <Route exact path="/profile" component={Profile} />
//                 <Route exact path="/" component={LandingContent} />
//                 <Route exact path="/#services-section" component={Services} />
//                 <Route exact path="/#about-section" component={About} />
//                 <Route exact path="/#contact-section" component={Contact} />
//                 <Redirect to="/" />
//             </Switch>
//             <Footer />
//         </>
//     );
// };

// export default Landing;