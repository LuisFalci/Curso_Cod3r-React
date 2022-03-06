import React from "react";
import "./Button.css";

export default (props) => {
    let classes = 'button'
    classes += props.operation ? 'operation' : ''
    classes += props.double ? 'double' : ''
    classes += props.triple ? 'triple' : ''

    return(
        // o botão aplica a className que a ele for passada
        <button className={classes}>
            {props.label}   
        </button>
   )
}   
