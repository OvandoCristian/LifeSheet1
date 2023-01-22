import {data} from '../../data/data.js'
import mail from '../../assets/imgs/icon-mail.png'
import location from '../../assets/imgs/icon-location.png'
import phone from '../../assets/imgs/icon-phone.png'
import school from '../../assets/imgs/icon-backpack.png'
import '../../assets/Styles/Footer.css'
function Footer() {
    return (  
      <div className='contact-container'>
        <div>
         <img src={school} alt="icon"/>
         <h5>{data.contact.school}</h5>
        </div>
            <div>
            <img src={mail} alt="icon"/>
             <h5>{data.contact.mail}</h5>
            </div>
               <div>
               <img src={location} alt="icon"/>
               <h5>{data.contact.av}</h5>
               <h5>{data.contact.neighborhood}</h5>
               <h5>{data.contact.postal}</h5>
               </div>
                  <div>
                  <img src={phone} alt="icon"/>
                   <h5>{data.contact.phone}</h5>
                  </div>
      </div>
    );
}

export default Footer;