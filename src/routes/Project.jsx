import React from "react";
import HiroImg2 from "../componenet/HiroImg2";
import { Navbar } from '../componenet/Navbar'
import {Footer} from '../componenet/Footer'
import { Pricing } from "../componenet/Pricing";
import { WorkCard } from "../componenet/WorkCard";
function Project(){
     return(<>
     <Navbar/>
     <HiroImg2 heading="Project." text="Som of my most recent Works"/>
     <WorkCard/>
     <Pricing/>
     <Footer/>
     </>
     )
}
export default  Project;