import {data} from '../../data/data.js'
import "../../assets/Styles/Section4.css"

function Section4() {
    return (  
        <div className='idiom-container'>
           <div>
            <h3>{data.idiom.idiom}</h3>
            <h5>{data.idiom.spanish}</h5>
            <h5>{data.idiom.english}</h5>
           </div>
        </div>
    );
}

export default Section4;