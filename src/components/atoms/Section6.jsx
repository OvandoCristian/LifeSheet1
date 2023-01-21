import {data} from '../../data/data.js'
import school from "../../assets/imgs/icon-backpack.png"
import mail from "../../assets/imgs/icon-mail.png"
import location from "../../assets/imgs/icon-location.png"
import phone from "../../assets/imgs/icon-phone.png"
import "../../assets/Styles/Section6.css"
function Section6() {
    return (  
      <div className='contact-container'>
        <div>
         <img src={school} alt="icon"/>
         <h4>{data.contact.school}</h4>
        </div>
            <div>
            <img src={mail} alt="icon"/>
             <h4>{data.contact.mail}</h4>
            </div>
               <div>
               <img src={location} alt="icon"/>
               <h4>{data.contact.av}</h4>
               <h4>{data.contact.neighborhood}</h4>
               <h4>{data.contact.postal}</h4>
               </div>
                  <div>
                  <img src={phone} alt="icon"/>
                   <h4>{data.contact.phone}</h4>
                  </div>
      </div>
    );
}

export default Section6;