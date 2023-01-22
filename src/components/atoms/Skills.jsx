import {data} from '../../data/data.js'
import '../../assets/Styles/Skills.css'
function Skills() {
    return (  
        <div className='Skills-container'>
          <div>
          <h3>{data.skills.skill}</h3>
             <h4>{data.skills.skill1}</h4>
                <div className="menu">
                  <div id="html-menu"></div>
                </div>
             <h4>{data.skills.skill2}</h4>
                <div className="menu">
                  <div id="css-menu"></div>
                </div>
             <h4>{data.skills.skill3}</h4>
                <div className="menu">
                  <div id="java-menu"></div>
                </div>
              <h4>{data.skills.skill4}</h4>
                <div className="menu">
                  <div id="javaScript-menu"></div>
                </div>
              <h4>{data.skills.skill5}</h4>
                <div className="menu">
                  <div id="c-menu"></div>
                </div>
              <h4>{data.skills.skill6}</h4>
                <div className="menu">
                  <div id="mysql-menu"></div>
                </div>
          </div>
        </div>
    );
}

export default Skills;