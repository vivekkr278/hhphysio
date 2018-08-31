import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as conditions from '../../data/conditions'

class Conditions extends Component {
  render() {
      let cond = conditions.conditions.map((item,index)=>{
          return <li key={index}><Link to={item.link}>{item.name}</Link></li>
      })
    return (
        <div id="Conditions" className="pageContainer">
            <div id="conditions" role="main" className="conditions-area">
            <h2>Conditions</h2>
            <ul className="listContainer" style={{listStyleType:'disc'}}>
                {cond}
            </ul>  
            </div>
        </div>
    )
}

}

export default Conditions;