
import './style.css';
import  {FontAwesomeIcon}  from "@fortawesome/react-fontawesome";
import {faPhone,faLocation,faMailBulk} from "@fortawesome/free-solid-svg-icons"

const ContactComp = ()=>{
     return(<>
        <section className="contact_section">
            <div className="container contact">
              <div className="form">
                    <h3>Contact Me</h3>
                    <div className="form_style">
                         <input type="text" placeholder="name.." />
                         <input type="text" placeholder="sir name.." />
                         <input type="email" placeholder="email.." />
                         <input type="text" placeholder="subject.." />
                         <textarea name="" id="" cols="30" rows="10">
                         </textarea>
                         <button className="btn">Submit </button>
                    </div>
               </div>
              <div className="details">

                   <div className="info">
                     <span className="icon">
                      <FontAwesomeIcon icon={faPhone} />
                     </span>
                     <span className="text">
                       <b> Phone Number :</b> +01 250 625 20 20
                     </span>
                   </div>
                   <div className="info">
                     <span className="icon">
                     <FontAwesomeIcon icon={faMailBulk} />
                     </span>
                     <span className="text">
                       <b> E Mail :</b> abc@gmail.com
                     </span>
                   </div>
                   <div className="info">
                     <span className="icon">
                     <FontAwesomeIcon icon={faLocation} />
                     </span>
                     <span className="text">
                       <b> Adress :</b> Toba Tek Singh Punjab Pakistan
                     </span>
                   </div>

              </div>
            </div>
        </section>

        {/* fooer */}
       <footer>
         <p>Kerem Kaplan 2023</p>
       </footer>
     </>)
}

export default ContactComp