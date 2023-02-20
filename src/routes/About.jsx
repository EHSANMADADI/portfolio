import React from "react";
import HiroImg2 from "../componenet/HiroImg2";
import { Navbar } from '../componenet/Navbar'
import {Footer} from '../componenet/Footer'
import { AboutContent } from "../componenet/AboutContent";
function About(){
     return(<><Navbar/><HiroImg2 heading="About" text="Im a friendly Front-End Developer"/> <AboutContent/> <Footer/></>)
}
export default  About;