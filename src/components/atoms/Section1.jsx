import {data} from '../../data/data.js'
import Soft from "../../assets/imgs/Software.png"
import "../../assets/Styles/Section1.css"
function Section1() {
    return (
      <div className='about-container'>
              <img src={Soft} alt="img"/>
              <div>
                 <h3>{data.about.i}<h4>{data.about.about}</h4></h3>
              </div>
      </div>
      );
}
export default Section1;