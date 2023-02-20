import React ,{useState} from 'react'
import './NavbarStayle.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa'
export const Navbar = () => {
     const [click,setClick]=useState(false);
     const [color,setColor]=useState(false);
     const handelhumberger=()=>setClick(!click);
     const changeColor=()=>{
          if(window.scrollY>=100){
               setColor(true);

          }
          else{
               setColor(false);
          }
     };
     window.addEventListener('scroll',changeColor);
  return (
    <div className={color?"header bg-header":"header"}>
     <Link to="/"><h1>Portfolio</h1></Link>

     <ul className={!click?"nav-menu":"nav-menu active"}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/project">Project</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
     </ul>
     <div className='humberger' onClick={handelhumberger}>
          {click ?(<FaTimes size={20} style={{color: 'white'}}/>):(<FaBars size={20} style={{color: 'white'}}/>)}
     </div>

    </div>
  )
}
