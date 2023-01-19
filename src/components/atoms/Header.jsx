import Foto from "../../assets/imgs/Fotoperfil.jpg"
import "../../assets/Styles/Header.css"
function Header() {
    return ( 
        <header>
        <div className="header">
            <div id="divfoto">
            <a className="foto">
            <img src={Foto} alt="Fotoperfil" id="fotop"/>
             </a>
            </div>
            <div id="nombre">
            <h1 className="Nombre">Cristian Ovando Gomez</h1>
            <h2>Estudiante en ingenieria de software</h2>
            </div>
        </div>
        </header>
     );
}

export default Header;