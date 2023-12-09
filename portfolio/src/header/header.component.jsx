import NavComp from "./nav.component";
import Person from './images/person.jpg'
 import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
 import {faFacebook,faTwitter,faInstagram,faLinkedin,faPinterest} from '@fortawesome/free-brands-svg-icons'

const Header = ()=>{
   
    return(<>
         <NavComp />
         <header>
             
             <div className="container hero">
                <div className="img">
                    <img src={Person} alt="" srcset="" />
                </div>
                <div className="text">
                    <h2>Hİ ! A am Kerem</h2>
                    <p>
                    Lorem ipsum dolor sit amet consectetur. Feugiat auctor iaculis nibh bibendum convallis cras suscipit dolor placerat. Urna tempor libero lectus non. Justo mauris sed in ullamcorper. Ullamcorper fermentum sit mi semper mauris vestibulum id. Duis nunc enim nibh neque ut.
                    </p>
                </div>
             </div>
             <div className="social_icons">
                 <ul>
                    <li><a href="#"><FontAwesomeIcon icon={faFacebook} /></a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faPinterest} /></a></li>
                 </ul>
             </div>
         </header>
    </>)
}

export default Header;