import React from "react";
import { Form } from "../componenet/Form";
import { Footer } from "../componenet/Footer";
import HiroImg2 from "../componenet/HiroImg2";
import { Navbar } from '../componenet/Navbar'
function Contact(){
     return(<>
     <Navbar/>
     <HiroImg2 heading="Contact." text="Lets have a chat "/>
     <Form/>
     <Footer/>
     </>)
}
export default  Contact;