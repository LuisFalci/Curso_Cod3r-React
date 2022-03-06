import React from "react";
import "./Button.css";

export default (props) => 
    // o botão aplica a className que a ele for passada
    <button className={`
        button
        ${props.operation ? 'operation' : ''}
        ${props.double ? 'double' : ''}
        ${props.triple ? 'triple' : ''}
        `}>
        {props.label}
    </button>;
