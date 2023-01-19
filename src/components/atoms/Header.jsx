import Foto from "../../assets/imgs/Fotoperfil.jpg"
import "../../assets/Styles/Header.css"
function Header() {
    return ( 
        <div className="header">
            <img src={Foto} alt="Fotoperfil" className="foto"/>
            <div>
            <h1 className="Nombre">Cristian Ovando Gomez</h1>
            <h2>Estudiante en ingenieria de software</h2>
            </div>
        </div>
     );
}

export default Header;