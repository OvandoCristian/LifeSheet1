import Foto from "../../assets/imgs/Fotoperfil.jpg"
import "../../assets/Styles/Header.css"
import {data} from "../../data/data.js"
function Header() {
    return ( 
        <>
        <header>
               <img src={Foto} alt="Fotoperfil" id="fotop"/>
                   <div>
                     <h1><b>{data.personal.name} {data.personal.lastname}</b></h1>
                     <h2>{data.personal.school}</h2>
                   </div>
        </header>
        </>
     );
}

export default Header;