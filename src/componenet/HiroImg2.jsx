import React from 'react'
import './HiroImg2Stayle.css';
const HiroImg2 = (props) => {
  return (
    <div className='hiro-img'>
      <div className='heading'>
        <h2>{props.heading}</h2>
        <p>{props.text}</p>
      </div>
    </div>
  )
}

export default HiroImg2;