import {data} from '../../data/data.js'
import facebook from "../../assets/imgs/facebook.png"
import instagram from "../../assets/imgs/instagram.png"
import "../../assets/Styles/Section5.css"
function Section5() {
    return (  
      <div className='Social-container'>
        <div>
        <h3>{data.social.social}</h3>
        </div>
        <div>
          <img src={facebook} alt="icon"/>
          <h4><a href="https://www.facebook.com/cristian.ovandogomez?mibextid=ZbWKwL">{data.social.facebook}</a></h4>
        </div>
        <div>
          <img src={instagram} alt="icon"/>
          <h4><a href="https://instagram.com/cristian._ovando?igshid=ZDdkNTZiNTM=">{data.social.insta}</a></h4>
        </div>
      </div>
    );
}

export default Section5;