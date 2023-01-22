import {data} from '../../data/data.js'
import Soft from '../../assets/imgs/Software.png'
import '../../assets/Styles/About.css'
function About() {
    return (
      <div className='about-container'>
             <div>
             <img src={Soft} alt="img"/>
              </div>
              <div id='about'>
                 <h3>{data.about.i}<h5>{data.about.about}</h5></h3>
              </div>
      </div>
      );
}
export default About;