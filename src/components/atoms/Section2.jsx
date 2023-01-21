import {data} from '../../data/data.js'
import Gym from "../../assets/imgs/Gym.jpg"
import "../../assets/Styles/Section2.css"
function Section2() {
    return (
      <div className='hobbies-container'>
        <div>
          <h3>{data.hobbies.hobbie}</h3>
          <h4>{data.hobbies.hobbie1}</h4>
          <h4>{data.hobbies.hobbie2}</h4>
          <h4>{data.hobbies.hobbie3}</h4>
          <h4>{data.hobbies.hobbie4}</h4> 
        </div>
          <div>
          <img src={Gym} alt="FotoGym"/>
          </div>
      </div>
      );
}
export default Section2;