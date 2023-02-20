import './AboutContentStayle.css';
import React from 'react'
import { Link } from 'react-router-dom';
import IMG2 from '../asset/3949076.jpg';
export const AboutContent = () => {
     return (
          <div className="About">
               <div className="content">
                    <h1>Who Im I?</h1>
                    <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          Dolor laboriosam!</p>
                          <Link to="/contact" className='btns'>Contact</Link>

               </div>
          </div>

     )
}
