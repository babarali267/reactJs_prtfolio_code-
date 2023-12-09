
import projectData from './projectData'
import './style.css'


const MyProject  = ()=>{
     return(<>
          <section className="porfolio_section">
              <div className="container">
              <h3>My Projects</h3>
               <div className="myprojects">
                {
                    projectData.map((item)=>(
                    <div className="project">
                        <div className="project_pic">
                            <img src={item.img} alt="" />
                        </div>
                        <h4>{item.title}</h4>
                        <p>
                            {item.desc}
                        </p>
                        <a href="#" className="btn">More</a>
                     </div>
                    ))
                }
                  
               </div>
              </div>
          </section>

     </>)
}
export default MyProject