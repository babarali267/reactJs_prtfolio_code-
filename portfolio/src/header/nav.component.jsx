
import { useState } from "react";
import "./style.css"
import logo from "./images/Logo.png"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons'

const NavComp = ()=>{

    const [isOpen, SetIsOpen] = useState(false)

    const toggleNavar =()=>{
        SetIsOpen(!isOpen)
    }


     return(<>
        <div className="container">
        <div className="toggleBtn" onClick={toggleNavar}>
                <FontAwesomeIcon icon={faBars} />
             </div>
             <div className="navbar">
                 <div className="logo">
                     <img src={logo} alt="" srcset="" />
                 </div>
                 <nav className={`${isOpen ? 'active' : ''}`}>
                    <ul>
                        <li> <a href="#">Home</a></li>
                        <li> <a href="#">About</a></li>
                        <li> <a href="#">My Project</a></li>
                        <li> <a href="#">ContactUs</a></li>
                    </ul>
                 </nav>
             </div>
        </div> 
    
     </>)
}

export default NavComp;
