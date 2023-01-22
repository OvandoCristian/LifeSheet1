import {data} from '../../data/data.js'
import '../../assets/Styles/Lenguages.css'

function Lenguages() {
    return (  
        <div className='idiom-container'>
           <div>
            <h3>{data.idiom.idiom}</h3>
            <h4>{data.idiom.spanish}</h4>
            <h4>{data.idiom.english}</h4>
                <div className="barra">
                  <div id="ingles-barra"></div>
                </div>
           </div>
        </div>
    );
}

export default Lenguages;