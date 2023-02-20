import React from 'react'
import { Link } from 'react-router-dom';
import './PricingStayle.css';
export const Pricing = () => {
  return (
    <div className='pricing'>
     <div className='container  d-flex'>
          <div className='card border p-5  mx-2'>
               <h3>-Basic-</h3>
               <span className='bar'></span>
               <h1 className='btc'>$100</h1>
               <p>-3 Day-</p>
               <p>-3 Page-</p>
               <p>-Featured-</p>
               <p>-Reponsive Disign-</p>
               <Link className="btns" to="/contact">PURCHASE NOW</Link>
          </div>

          <div className='card border p-5  mx-3'>
               <h3>-Premium-</h3>
               <span className='bar'></span>
               <h1 className='btc'>$300</h1>
               <p>-3 Day-</p>
               <p>-3 Page-</p>
               <p>-Featured-</p>
               <p>-Reponsive Disign-</p>
               <Link className="btns" to="/contact">PURCHASE NOW</Link>
          </div>

          <div className='card border p-5 mx-2'>
               <h3>-Business-</h3>
               <span className='bar'></span>
               <h1 className='btc'>$200</h1>
               <p>-3 Day-</p>
               <p>-3 Page-</p>
               <p>-Featured-</p>
               <p>-Reponsive Disign-</p>
               <Link to="/contact" class="btns">PURCHASE NOW</Link>
          </div>

         
     </div>
    </div>
  )
}
