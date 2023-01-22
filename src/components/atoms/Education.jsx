import {data} from '../../data/data.js' 
import '../../assets/Styles/Lenguages.css'
function Education() {
    return ( 
         <div>
            <div>
                <h3>{data.education.education}</h3>
            </div>
            <div>
                <h4>{data.education.uni}</h4>
                <h4>{data.education.preparatory}</h4>
            </div>
         </div>
     );
}
export default Education;