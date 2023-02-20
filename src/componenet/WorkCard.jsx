import './WorkCardStayle.css';
import React from 'react'
import { Link } from 'react-router-dom';
import IMG from '../asset/32819.jpg';
import IMG2 from '../asset/3949076.jpg';
import IMG3 from '../asset/1102007.jpg';

export const WorkCard = () => {
     return (
          <div className="container d-flex ">
               <div className="card cards border m-2 bg-card">
                    <img className="card-img-top p-3" src={IMG} alt="Card image"/>
                         <div className="card-body">
                              <h4 className="card-title">LMS/Course Website Design</h4>
                              <p className="card-text p-1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus blanditiis dolores molestias porro cupiditate dolore ducimus 
                              tempore iste repellat amet?</p>
                              <div className="d-flex box">
                              <Link to='/' className="btns">SOURCE</Link>
                              <Link to='/' className="btns">VIEW</Link>
                              </div>
                         </div>
               </div>


               <div className="card cards border m-2 bg-card">
                    <img className="card-img-top p-3" src={IMG2} alt="Card image"/>
                         <div className="card-body">
                              <h4 className="card-title">LMS/Course Website Design</h4>
                              <p className="card-text p-1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus blanditiis dolores molestias porro cupiditate dolore ducimus 
                              tempore iste repellat amet?</p>
                              <div className="d-flex box">
                              <Link to='/' className="btns">SOURCE</Link>
                              <Link to='/' className="btns">VIEW</Link>
                              </div>
                              
                         </div>
               </div>


               <div className="card cards border m-2 bg-card">
                    <img className="card-img-top p-3" src={IMG3} alt="Card image"/>
                         <div className="card-body">
                              <h4 className="card-title">LMS/Course Website Design</h4>
                              <p className="card-text p-1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus blanditiis dolores molestias porro cupiditate dolore ducimus 
                              tempore iste repellat amet?</p>
                              <div className="d-flex box">
                              <Link to='/' className="btns">SOURCE</Link>
                              <Link to='/' className="btns">VIEW</Link>
                              </div>
                         </div>
               </div>          
          </div>
          
     )
}
