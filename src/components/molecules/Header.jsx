import {data} from '../../data/data.js'
import '../../assets/Styles/Header.css'
import Foto from '../../assets/imgs/Fotoperfil.jpg'
function Header() {
    return ( 
        <>
        <header>
               <img src={Foto} alt="Fotoperfil" id="fotop"/>
                   <div>
                     <h2><b>{data.personal.name} {data.personal.lastname}</b></h2>
                     <h3>{data.personal.school}</h3>
                   </div>
        </header>
        </>
     );
}

export default Header;