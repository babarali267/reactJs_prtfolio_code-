
import './style.css'
import skillData from './skilldata'
const AboutUs = ()=>{
     return(<>
      
      <section className="about_us">
         <div className="container myskills">
         <div className="skills">
         <h3>My Skills</h3>
            {
                skillData.map((item)=>(
                    <>
                     <div className="skill_item">
                     <span className="label">{item.title}</span>
                     <span className="percentage">{item.percentage}</span>
                        <div className="skill" >
                        <div className="progress"style={{width:`${item.percentage}`}} > 
                        </div>
                        </div>
                     </div>
                    </>
                ))
            }
           

         </div>
         <div className="about_info">
             <h3> About Us</h3>
             <p>
             <p> Lorem ipsum dolor sit amet consectetur. Tincidunt suscipit curabitur lacus est a mauris metus urna quisque. Arcu nunc ut dolor amet maecenas feugiat. Sed imperdiet augue nunc cursus pulvinar ornare. Est egestas augue in amet malesuada dolor. Pretium vitae a mauris nec habitant. Tristique amet non vitae pretium integer egestas ac.</p>
                <p> Lobortis viverra facilisi arcu sed pretium tempor purus. Volutpat sed egestas nibh leo etiam magna posuere non. Sed sed massa commodo nec bibendum porttitor neque viverra amet. Dictum gravida ac lectus pulvinar. Blandit sapien nec urna dolor tempor tristique et id. Nisl semper volutpat turpis augue amet. Sed leo enim enim fames. </p>
                    Laoreet sodales eu nunc sed convallis ipsum enim eu auctor. Quis turpis enim scelerisque euismod quisque. Mollis aliquam adipiscing vel venenatis volutpat ullamcorper erat integer augue. Pellentesque tellus varius id phasellus natoque scelerisque quis. Nec cras consectetur eu tempus. Felis fermentum habitasse vel sit sem facilisis urna phasellus semper. 
                    Accumsan adipiscing dolor ultrices non vel a ut ante quam. Risus facilisis vestibulum venenatis enim erat condimentum ut.
                 <p> Sollicitudin commodo ut gravida tempus elementum at in. Dignissim amet et vehicula urna. Eget quis dapibus purus fringilla leo. Suscipit aenean est mi vel pellentesque. Laoreet ullamcorper in eu vulputate. Sed suspendisse pulvinar tincidunt massa. Metus lacus interdum nulla quam. Pretium pellentesque gravida semper dolor enim vel egestas tortor amet. </p>
                    Egestas aliquet feugiat in at consequat nisi.
                <p> Orci a vel arcu nam ipsum fringilla sit velit amet. Fames velit purus neque odio amet enim. Blandit iaculis suspendisse elementum a odio. Ut vitae nec fringilla tellus placerat. Massa rhoncus neque et vel maecenas id. Nam tempus in porttitor facilisis massa nisl consectetur pulvinar. Cursus cursus cras ac ornare pulvinar duis eu augue nec.</p>
             </p>
         </div>
         </div>
      </section>
     </>)
}

export default AboutUs