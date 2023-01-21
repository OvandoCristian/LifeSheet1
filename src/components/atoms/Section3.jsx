import {data} from '../../data/data.js'
import "../../assets/Styles/Section3.css"
function Section3() {
    return (
      <div>
        <div className='aptitudes'>
          <h3>{data.aptitudes.aptitud}</h3>
          <h4>{data.aptitudes.aptitud1}</h4>
          <h4>{data.aptitudes.aptitud2}</h4>
          <h4>{data.aptitudes.aptitud3}</h4>
          <h4>{data.aptitudes.aptitud4}</h4>
        </div>
      </div>
      );
}
export default Section3;