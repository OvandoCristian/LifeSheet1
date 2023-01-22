import {data} from '../../data/data.js';
import Skills from '../atoms/Skills.jsx';
import Leguagues from '../atoms/Lenguages.jsx'
import "../../assets/Styles/Aptitudes.css";
function Section3() {
    return (
      <div className='aptitudes-container'>
        <div>
        <Leguagues/>
          <h3>{data.aptitudes.aptitud}</h3>
          <h4>{data.aptitudes.aptitud1}</h4>
          <h4>{data.aptitudes.aptitud2}</h4>
          <h4>{data.aptitudes.aptitud3}</h4>
          <h4>{data.aptitudes.aptitud4}</h4>
        </div>
       
        <>
         <Skills/>
        </>
      </div>
      );
}
export default Section3;