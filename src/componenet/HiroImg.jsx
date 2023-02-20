import React from 'react'
import './HiroImgStayle.css';
import ImgBack from '../asset/tech-statement.jpg'
import { Link } from 'react-router-dom';
export const HiroImg = () => {
  return (
    <div className="hiro">
      <div className="mask">
        <img className="introImg" src={ImgBack} alt="Imgback" />
      </div>
      <div className="content">
        <p>Hi.Im a Freelancer</p>
        <h1>React Developer</h1>
        <div className="btnbox">
          <Link to='/project' className="btn">Projects</Link>
          <Link to='/contact' className='btn-lith'>Contact</Link>
        </div>
      </div>
    </div>
  )
}
