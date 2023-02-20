import React from 'react'
import './FooterStayle.css';
import {Link} from 'react-router-dom'
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa'
export const Footer = () => {
     return (
          <div className="Footer m-2">
               <div className="Footer-container d-flex">
                    <div className="Footer-left">
                         <div className="footer-location m-2">
                              <div className="d-inline">
                                   <FaHome size="20" color="white" className="HomeIcon" />
                                   <h5 className="h-w">Iran-Tehran-Niyavran</h5>
                              </div>
                             <h5 className="footerPhone"><FaPhone style={{ marginRight: "1.5rem" }} />09121201205</h5>
                             <Link to="https://mail.google.com/mail/u/0/#inbox"> <h5 className="footerMail"><FaMailBulk style={{ marginRight: "1.5rem" }} />Ehsanmadadialengareqhi@gmail.com</h5></Link>
                         </div>

                    </div>

                    <div className="Footer-right col-5">
                         <h3 className="h-w p-2">About the Compony</h3>
                         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, harum? 
                              Impedit fugiat animi, eius ad quae exercitationem laborum distinctio 
                              rem repudiandae deleniti minus debitis atque possimus at, alias fuga aspernatur?</p>

                              <div className="box-icon">
                              <FaFacebook size="30" color="white" className="facbook m-2"/>
                              <FaTwitter size="30" color="white" className="twitter m-2"/>
                              <FaLinkedin size="30" color="white" className="linkedin m-2"/>
                              </div>

                    </div>
               </div>
          </div>
     )
}
