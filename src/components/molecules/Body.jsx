import Foto from "../../assets/imgs/Software.png"
function Body() {
    return (  
        <div className="body">
           <img src={Foto} alt="Fotoperfil"/>
           <div id="texto">
            <p>Estudiante de Ingenieria de Software en la Universidad Politécnica de Chiapas, con promedio actual de 93.76
               Actualmente cuento con la edad de 20 Años, soy una persona que sabe trabajar en equipo, responsable, 
               con determinación y capaz de realizar cualquier actividad si se lo propone.</p>
           </div>
        </div>
    );
}

export default Body;